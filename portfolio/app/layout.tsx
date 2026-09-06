import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const siteUrl = "https://dandaveudoka.com.ng";
const fullName = "Udoka Dandave";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Udoka Dandave (Dandy) — Full Stack Software Engineer",
    template: "%s | Udoka Dandave",
  },
  description:
    "Udoka Dandave (Dandy) — full stack software engineer and web developer in Enugu, Nigeria. React, Next.js, Node.js, Laravel, React Native.",
  keywords: [
    // Name variations people actually search
    "Udoka Dandave",
    "Dandave Udoka",
    "Udoka Dandave Chibuzor",
    "Dandave",
    "Udoka",
    "Dandy",
    "Dandy developer",
    "Daniel Udoka",
    "David Udoka",
    "Daniel David",
    "Dandave web developer",
    "Udoka Dandave software engineer",
    "Dan software engineer",
    "Udoka web developer",
    "Dandave portfolio",
    "hire Udoka Dandave",
    // Role + stack
    "full stack developer Nigeria",
    "software engineer Enugu",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Laravel developer",
    "React Native developer",
    "freelance developer Nigeria",
    "remote web developer",
  ],
  authors: [{ name: fullName, url: siteUrl }],
  creator: fullName,
  publisher: fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Udoka Dandave (Dandy) — Full Stack Software Engineer",
    description:
      "Full stack software engineer building web apps, mobile apps and robust backend systems. Based in Enugu, Nigeria — working worldwide.",
    type: "website",
    url: siteUrl,
    siteName: "Udoka Dandave",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Udoka Dandave — Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udoka Dandave (Dandy) — Full Stack Software Engineer",
    description:
      "Full stack software engineer — React, Next.js, Node.js, Laravel, React Native. Enugu, Nigeria.",
    creator: "@Davetechinnov",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${siteUrl}/#person`,
                  name: fullName,
                  alternateName: [
                    "Dandy",
                    "Dan",
                    "Dandave",
                    "Daniel Udoka",
                    "David Udoka",
                    "Udoka Dandave Chibuzor",
                  ],
                  givenName: "Udoka",
                  familyName: "Dandave",
                  additionalName: ["Chibuzor", "Daniel David"],
                  jobTitle: "Full Stack Software Engineer",
                  description:
                    "Full stack software engineer building web apps, mobile apps and backend systems with React, Next.js, Node.js and Laravel.",
                  url: siteUrl,
                  image: `${siteUrl}/og-image.jpg`,
                  email: `mailto:${profile.email}`,
                  telephone: profile.phoneHref,
                  sameAs: [
                    profile.github,
                    profile.linkedin,
                    profile.twitter,
                    profile.instagram,
                  ],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Enugu",
                    addressCountry: "NG",
                  },
                  knowsAbout: [
                    "React",
                    "Next.js",
                    "Node.js",
                    "Laravel",
                    "PHP",
                    "React Native",
                    "TypeScript",
                    "Docker",
                    "System Architecture",
                    "Full Stack Development",
                  ],
                  worksFor: {
                    "@type": "Organization",
                    name: "Freelance / Contract",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "Udoka Dandave — Portfolio",
                  alternateName: "Dandy's Portfolio",
                  publisher: { "@id": `${siteUrl}/#person` },
                  inLanguage: "en",
                },
                {
                  "@type": "ProfilePage",
                  "@id": `${siteUrl}/#profilepage`,
                  url: siteUrl,
                  mainEntity: { "@id": `${siteUrl}/#person` },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
