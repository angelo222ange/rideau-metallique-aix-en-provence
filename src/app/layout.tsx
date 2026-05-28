import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig } from "@/config/site";
import ScrollToTop from "@/components/ScrollToTop";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-onest",
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
  alternates: { canonical: siteConfig.url + "/" },
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
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url + "/",
    siteName: siteConfig.brand,
    title: `${siteConfig.fullName} - Depannage 24h/24`,
    description: `Depannage rideau metallique a ${siteConfig.city} 24h/24 - ${siteConfig.experience} ans d'experience - devis gratuit.`,
    images: [
      {
        url: siteConfig.url + "/images/gallery/" + siteConfig.heroBg,
        width: 1200,
        height: 630,
        alt: `Depannage rideau metallique ${siteConfig.city}`,
      },
    ],
  },
  other: {
    "geo.region": `FR-${siteConfig.departmentCode}`,
    "geo.placename": siteConfig.city,
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={onest.variable}>
      <head>
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap" />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <FloatingCallButton />
              <ScrollToTop />
              <a
          href={siteConfig.phoneLink ?? "tel:"}
          aria-label={`Appeler au ${siteConfig.phone ?? ""}`}
          className="floating-cta-round"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
          </svg>
          Appeler {siteConfig.phone ?? ""}
        </a>
      </body>
    </html>
  );
}
