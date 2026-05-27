import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import HeroSection from "@/components/home/HeroSection";
import PartnersMarquee from "@/components/home/PartnersMarquee";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceSection from "@/components/home/ServiceSection";
import HomepageSEOBlocks from "@/components/home/HomepageSEOBlocks";
import MiniCtaSection from "@/components/home/MiniCtaSection";
import WorksSection from "@/components/home/WorksSection";
import ZonesGrid from "@/components/home/ZonesGrid";
import ReviewSection from "@/components/home/ReviewSection";
import FaqSection from "@/components/home/FaqSection";
import ArticleSection from "@/components/home/ArticleSection";
import { siteConfig, services, zones } from "@/config/site";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteConfig.url + "/#localbusiness",
  name: siteConfig.fullName,
  alternateName: siteConfig.brand,
  url: siteConfig.url,
  description: `Depannage, installation, motorisation et fabrication de rideaux metalliques a ${siteConfig.city} et en Pays d'Aix.`,
  image: `${siteConfig.url}/images/gallery/${siteConfig.heroBg}`,
  ...(siteConfig.phonePublic && siteConfig.phone ? { telephone: siteConfig.phone } : {}),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address || "",
    addressLocality: siteConfig.city,
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.region,
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: zones.map((z) => ({
    "@type": "City",
    name: z.name,
    "@id": `https://www.wikidata.org/wiki/${z.slug}`,
  })),
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating,
    reviewCount: siteConfig.ratingCount,
    bestRating: "5",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteConfig.url + "/",
  name: siteConfig.brand,
  description: `Depannage rideau metallique a ${siteConfig.city} - intervention 24h/24 par DRM`,
  inLanguage: "fr-FR",
  publisher: { "@type": "Organization", name: siteConfig.fullName },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
  ],
};

const servicesSchema = services.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: `${s.name} de rideau metallique`,
  provider: { "@type": "LocalBusiness", name: siteConfig.fullName, url: siteConfig.url },
  areaServed: { "@type": "City", name: siteConfig.city },
  description: s.description,
}));

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, websiteSchema, breadcrumbSchema, ...servicesSchema]) }}
      />
      <Header />
      <main>
        <HeroSection />
        <PartnersMarquee />
        <AboutSection />
        <ProcessSection />
        <ServiceSection />
        <HomepageSEOBlocks />
        <MiniCtaSection />
        <WorksSection />
        <ZonesGrid />
        <ReviewSection />
        <FaqSection />
        <ArticleSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
