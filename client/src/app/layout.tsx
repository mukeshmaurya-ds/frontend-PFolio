import type { Metadata } from "next";
import { Geist } from "next/font/google";

import BackgroundEffects from "@/components/effects/BackgroundEffects";
import Providers from "./providers";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "NextFolio Pro",
    template: "%s | NextFolio Pro",
  },

  description: "Production Ready Developer Portfolio",

  keywords: [
    "Portfolio",
    "Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Full Stack Developer",
  ],

  authors: [
    {
      name: "Mukesh Maurya",
    },
  ],

  creator: "Mukesh Maurya",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NextFolio Pro",
    description: "Production Ready Developer Portfolio",
    url: "https://your-domain.com",
    siteName: "NextFolio Pro",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NextFolio Pro",
    description: "Production Ready Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geist.className} antialiased`}>
        <Navbar/>
        <BackgroundEffects />
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}