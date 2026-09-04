Add-Type -AssemblyName System.Drawing

$src = 'C:\Users\danda\Downloads\IMG_6470.jpg'
$pub = 'C:\dev\my-personal-portfolio\Dandys-portfolio\portfolio\public'

# 1) Replace the profile photo with the new image (full portrait, uncropped)
Copy-Item $src (Join-Path $pub 'profile.jpg') -Force
Write-Output "profile.jpg replaced"

# 2) Square crop for favicons (top-biased to keep the face)
$orig = [System.Drawing.Bitmap]::FromFile($src)
$w = $orig.Width; $h = $orig.Height
$side = [Math]::Min($w, $h)
$x = [int](($w - $side) / 2)
$y = [int](($h - $side) * 0.25)
if ($y -lt 0) { $y = 0 }
$crop = New-Object System.Drawing.Bitmap($side, $side)
$g = [System.Drawing.Graphics]::FromImage($crop)
$g.DrawImage($orig, (New-Object System.Drawing.Rectangle(0, 0, $side, $side)), (New-Object System.Drawing.Rectangle($x, $y, $side, $side)), [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$orig.Dispose()
Write-Output "cropped ${side}x${side} from ${w}x${h} at y=$y"

function Save-Png($bmp, $size, $path) {
  $b = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($b)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.DrawImage($bmp, 0, 0, $size, $size)
  $g.Dispose()
  $b.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $b.Dispose()
  Write-Output "saved $path (${size}x${size})"
}

Save-Png $crop 16  (Join-Path $pub 'favicon-16x16.png')
Save-Png $crop 32  (Join-Path $pub 'favicon-32x32.png')
Save-Png $crop 48  (Join-Path $pub 'favicon-48x48.png')
Save-Png $crop 180 (Join-Path $pub 'apple-touch-icon.png')
Save-Png $crop 192 (Join-Path $pub 'android-chrome-192x192.png')
Save-Png $crop 512 (Join-Path $pub 'android-chrome-512x512.png')
$crop.Dispose()

# 3) Build favicon.ico embedding the 16/32/48 PNGs (Vista+ PNG-in-ICO format)
$sizes = @(16, 32, 48)
$pngs = @()
foreach ($s in $sizes) {
  $pngs += ,([System.IO.File]::ReadAllBytes((Join-Path $pub "favicon-$s`x$s.png")))
}

$ms = New-Object System.IO.MemoryStream
$bw = New-Object System.IO.BinaryWriter($ms)
# Header: reserved(2)=0, type(2)=1, count(2)=N
$bw.Write([UInt16]0); $bw.Write([UInt16]1); $bw.Write([UInt16]$sizes.Count)
$offset = 6 + 16 * $sizes.Count
for ($i = 0; $i -lt $sizes.Count; $i++) {
  $s = $sizes[$i]
  $bw.Write([Byte]$s)          # width
  $bw.Write([Byte]$s)          # height
  $bw.Write([Byte]0)           # color count
  $bw.Write([Byte]0)           # reserved
  $bw.Write([UInt16]1)         # color planes
  $bw.Write([UInt16]32)        # bits per pixel
  $bw.Write([UInt32]$pngs[$i].Length)  # data size
  $bw.Write([UInt32]$offset)   # data offset
  $offset += $pngs[$i].Length
}
foreach ($p in $pngs) { $bw.Write($p) }
$bw.Flush()
[System.IO.File]::WriteAllBytes((Join-Path $pub 'favicon.ico'), $ms.ToArray())
$bw.Dispose()
Write-Output "saved favicon.ico ($($ms.Length) bytes)"
