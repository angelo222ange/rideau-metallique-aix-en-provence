import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} - Depannage 24h/24`,
    template: `%s | ${siteConfig.brand}`,
  },
  description: `${siteConfig.brand} : depannage, installation, motorisation et fabrication de rideaux metalliques a ${siteConfig.city} et en Pays d'Aix. ${siteConfig.experience} ans d'experience, intervention sous ${siteConfig.delai} minutes, devis gratuit, garantie 2 ans.`,
  applicationName: siteConfig.brand,
  alternates: {
    canonical: siteConfig.url + "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url + "/",
    siteName: siteConfig.brand,
    title: `${siteConfig.fullName} - Depannage 24h/24`,
    description: `Depannage rideau metallique a ${siteConfig.city} 24h/24 - ${siteConfig.experience} ans d'experience - devis gratuit.`,
    images: [
      {
        url: `${siteConfig.url}/images/gallery/${siteConfig.heroBg}`,
        width: 1200,
        height: 630,
        alt: `Depannage rideau metallique ${siteConfig.city}`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" as="image" href={`/images/gallery/${siteConfig.heroBg}`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
