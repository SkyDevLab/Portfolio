import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Surya Pratap Singh — Software Engineer | C# / .NET | Cloud | Open Source",
  description:
    "Portfolio of Surya Pratap Singh — Software Engineer specializing in C#, ASP.NET Core, Cloud Architectures (Azure/AWS), Microservices, and Open Source Developer Tooling.",
  keywords: [
    "Surya Pratap Singh",
    "SkyDevLab",
    "Software Engineer",
    ".NET Developer",
    "C# Engineer",
    "ASP.NET Core",
    "Azure Developer Associate",
    "AZ-204",
    "Microservices",
    "Roslyn",
    "Open Source",
  ],
  authors: [{ name: "Surya Pratap Singh", url: "https://github.com/SkyDevLab" }],
  creator: "Surya Pratap Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Surya Pratap Singh — Software Engineer | C# / .NET | Cloud | Open Source",
    description:
      "Portfolio of Surya Pratap Singh — Software Engineer specializing in C#, ASP.NET Core, Cloud Architectures (Azure/AWS), Microservices, and Open Source Developer Tooling.",
    siteName: "Surya Pratap Singh | SkyDevLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surya Pratap Singh — Software Engineer | C# / .NET | Cloud | Open Source",
    description:
      "Portfolio of Surya Pratap Singh — Software Engineer specializing in C#, ASP.NET Core, Cloud Architectures (Azure/AWS), Microservices, and Open Source Developer Tooling.",
    creator: "@SkyDevLab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-linen text-nearblack`}
      >
        {children}
      </body>
    </html>
  );
}
