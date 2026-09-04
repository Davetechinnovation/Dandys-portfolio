Add-Type -AssemblyName System.Drawing

$src = 'C:\dev\my-personal-portfolio\Dandys-portfolio\portfolio\public\profile-v2.jpg'
$out = 'C:\dev\my-personal-portfolio\Dandys-portfolio\portfolio\public\og-image.jpg'

$W = 1200; $H = 630
$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Background — matches the site's --background
$bg = [System.Drawing.Color]::FromArgb(0x0f, 0x11, 0x13)
$g.Clear($bg)

# Photo — square crop (same top-biased crop as the favicons), full height on the right
$orig = [System.Drawing.Bitmap]::FromFile($src)
$side = [Math]::Min($orig.Width, $orig.Height)
$cx = [int](($orig.Width - $side) / 2)
$cy = [int](($orig.Height - $side) * 0.25)
if ($cy -lt 0) { $cy = 0 }
$photoW = 480
$g.DrawImage($orig, (New-Object System.Drawing.Rectangle(($W - $photoW), 0, $photoW, $H)), (New-Object System.Drawing.Rectangle($cx, $cy, $side, $side)), [System.Drawing.GraphicsUnit]::Pixel)
$orig.Dispose()

# Left border accent on the photo edge
$accent = [System.Drawing.Color]::FromArgb(0x2a, 0x2e, 0x33)
$g.FillRectangle((New-Object System.Drawing.SolidBrush($accent)), ($W - $photoW - 2), 0, 2, $H)

# Text colors
$muted  = [System.Drawing.Color]::FromArgb(0x8a, 0x90, 0x99)
$white  = [System.Drawing.Color]::White

# Kicker
$kickerFont = New-Object System.Drawing.Font('Consolas', 16, [System.Drawing.FontStyle]::Regular)
$g.DrawString('// DANDY - FULL STACK SOFTWARE ENGINEER', $kickerFont, (New-Object System.Drawing.SolidBrush($muted)), 72, 120)

# Name
$nameFont = New-Object System.Drawing.Font('Arial', 64, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$g.DrawString('UDOKA', $nameFont, (New-Object System.Drawing.SolidBrush($white)), 68, 175)
$g.DrawString('DANDAVE', $nameFont, (New-Object System.Drawing.SolidBrush($white)), 68, 255)

# Subtitle
$subFont = New-Object System.Drawing.Font('Consolas', 20, [System.Drawing.FontStyle]::Regular)
$g.DrawString('Web Developer - Mobile Apps - System Architecture', $subFont, (New-Object System.Drawing.SolidBrush($muted)), 72, 365)

# Domain
$domFont = New-Object System.Drawing.Font('Consolas', 18, [System.Drawing.FontStyle]::Regular)
$g.DrawString('dandaveudoka.com.ng', $domFont, (New-Object System.Drawing.SolidBrush($white)), 72, 490)

$g.Dispose()

# Save as quality JPEG
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]90)
$bmp.Save($out, $jpegCodec, $encParams)
$bmp.Dispose()

"saved $out ($W x $H, $((Get-Item $out).Length) bytes)"
