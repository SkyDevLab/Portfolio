import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://skydevlab.github.io/Portfolio";
const siteName = "Surya Pratap Singh | SkyDevLab";
const title = "Surya Pratap Singh — SkyDevLab | .NET Developer & Open Source Contributor";
const description =
  "Official portfolio of Surya Pratap Singh, the developer behind SkyDevLab. .NET developer, open-source contributor, and software builder creating developer tools, libraries, browser extensions, and web applications.";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Surya Pratap Singh",
    "SkyDevLab",
    "Surya Pratap Singh SkyDevLab",
    ".NET Developer",
    "C# Developer",
    "ASP.NET Core",
    "Software Engineer",
    "Open Source Contributor",
    "GitHub",
    "Developer Tools",
    "SkyWebFramework",
    "PR Doctor",
    "WhyUI",
    "Website Upgrade Detector",
    "Gravity Safe Code Paste",
  ],
  authors: [
    {
      name: "Surya Pratap Singh",
      url: "https://github.com/SkyDevLab",
    },
  ],
  creator: "Surya Pratap Singh (SkyDevLab)",
  publisher: "SkyDevLab",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title,
    description,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@SkyDevLab",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://skydevlab.github.io/Portfolio/#person",
  name: "Surya Pratap Singh",
  alternateName: "SkyDevLab",
  url: siteUrl,
  sameAs: [
    "https://github.com/SkyDevLab",
    "https://www.linkedin.com/in/surya-pratap-singh-1a75b4222/",
  ],
  jobTitle: "Software Engineer",
  knowsAbout: [
    "C#",
    ".NET",
    "ASP.NET Core",
    "Software Development",
    "Open Source",
    "Developer Tools",
    "Cloud Computing",
    "Web Development",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://skydevlab.github.io/Portfolio/#website",
  url: siteUrl,
  name: siteName,
  alternateName: "SkyDevLab",
  description,
  publisher: {
    "@id": "https://skydevlab.github.io/Portfolio/#person",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="psOM6Z4D_l5Dh8b2KTYQJF3f2Iv1RZfegENEF73rxHY" />

        <link rel="me" href="https://github.com/SkyDevLab" />
        <link rel="me" href="https://www.linkedin.com/in/surya-pratap-singh-1a75b4222/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-linen text-nearblack`}
      >
        {children}
      </body>
    </html>
  );
}
