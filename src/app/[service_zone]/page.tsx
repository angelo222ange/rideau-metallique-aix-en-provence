import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceProcess from "@/components/service/ServiceProcess";
import ServiceZoneLocal from "@/components/service/ServiceZoneLocal";
import ServiceLinks from "@/components/service/ServiceLinks";
import ServiceFaq from "@/components/service/ServiceFaq";
import CtaSection from "@/components/home/CtaSection";
import { siteConfig, services, zones } from "@/config/site";
import { parseSlug } from "@/lib/content";
import { buildServiceZoneContent, getServiceWording } from "@/lib/service-content";
import { getZoneLocal } from "@/lib/zone-local-data";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");

export function generateStaticParams() {
  const params: { service_zone: string }[] = [];
  for (const zone of zones) {
    for (const service of services) {
      params.push({ service_zone: `${service.slug}-${zone.slug}` });
    }
  }
  for (const service of services) {
    params.push({ service_zone: `${service.slug}-${citySlug}` });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ service_zone: string }> }): Promise<Metadata> {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) return {};
  const { service, zone } = parsed;
  const zoneName = zone?.name ?? siteConfig.city;
  const zonePostal = zone?.postalCode ?? siteConfig.postalCode;
  const title = `${service.name} rideau metallique ${zoneName} ${zonePostal}`;
  const description = `${service.name} de rideau metallique a ${zoneName} (${zonePostal}). DRM ${siteConfig.city} intervient sous ${siteConfig.delai} minutes, devis gratuit, garantie 2 ans. ${siteConfig.experience} ans d'experience.`;
  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/${service_zone}/` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${service_zone}/`,
      images: [{ url: `${siteConfig.url}/images/gallery/${siteConfig.heroBg}` }],
    },
  };
}

// Bg hero contextuel par service
const serviceHeroImages: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
  installation: "/images/gallery/installation-rideau-metallique-anti-effraction.webp",
  reparation: "/images/gallery/realisation-rideau-metallique-lame-pleine.webp",
  motorisation: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
  deblocage: "/images/gallery/depannage-rideau-metallique-drm.webp",
  entretien: "/images/gallery/pose-axe-rideau-metallique-drm.webp",
  fabrication: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
};

// Image showcase pour la section ServiceFeatures (16:8)
const serviceShowcaseImages: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
  installation: "/images/gallery/installation-rideau-metallique-drm.webp",
  reparation: "/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp",
  motorisation: "/images/gallery/kit-moteur-complet-acm-rideau-metallique.webp",
  deblocage: "/images/gallery/depannage-rideau-metallique-drm.webp",
  entretien: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  fabrication: "/images/gallery/fabrication-axe-rideau-metallique-france.webp",
};

// Image process (côté gauche sticky, 4/3)
const serviceProcessImages: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm.webp",
  installation: "/images/gallery/pose-coulisse-tablier-rideau-metallique.webp",
  reparation: "/images/gallery/pose-axe-rideau-metallique-drm.webp",
  motorisation: "/images/gallery/moteur-acm-76-rideau-metallique.webp",
  deblocage: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
  entretien: "/images/gallery/pose-axe-rideau-metallique-drm.webp",
  fabrication: "/images/gallery/fabrication-axe-rideau-metallique-locale.webp",
};

export default async function ServiceZonePage({ params }: { params: Promise<{ service_zone: string }> }) {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) notFound();
  const { service, zone } = parsed;
  const zoneName = zone?.name ?? siteConfig.city;
  const zonePostal = zone?.postalCode ?? siteConfig.postalCode;
  const zoneSlug = zone?.slug ?? citySlug;

  const content = buildServiceZoneContent(service.id, zoneName, zoneSlug, zonePostal);
  const local = getZoneLocal(zoneSlug);
  const word = getServiceWording(service.id);
  const heroImg = serviceHeroImages[service.id];
  const showcaseImg = serviceShowcaseImages[service.id];
  const processImg = serviceProcessImages[service.id];

  // Schemas JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
      { "@type": "ListItem", position: 2, name: service.name, item: `${siteConfig.url}/${service.slug}-${citySlug}/` },
      { "@type": "ListItem", position: 3, name: zoneName, item: `${siteConfig.url}/${service_zone}/` },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: word.keyword,
    name: `${service.name} rideau metallique ${zoneName}`,
    description: content.introText.slice(0, 200),
    provider: { "@type": "LocalBusiness", name: siteConfig.fullName, url: siteConfig.url },
    areaServed: { "@type": "City", name: zoneName, address: { "@type": "PostalAddress", postalCode: zonePostal } },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // 3 features adaptées au service
  const features = [
    {
      title: `Diagnostic ${word.keyword} en 15 minutes`,
      body: `Inspection complete : ${word.gestes.slice(0, 3).join(", ")}. Devis ferme signe sur place avant toute intervention.`,
    },
    {
      title: "Pieces d'origine en stock",
      body: "Vehicule atelier rempli des pieces ACM Titan, Somfy RS100, Simu T5, Sommer GIGAroll. 90% des interventions bouclees en une visite.",
    },
    {
      title: "Garantie 2 ans pieces",
      body: "Garantie 2 ans pieces neuves + 1 an main-d'oeuvre, ecrits sur le devis et la facture. Reintervention gratuite sans franchise.",
    },
  ];

  // 4 etapes process
  const processSteps = [
    { number: "01", title: "Prise d'appel", body: `Pre-diagnostic au telephone (5 min) : nature de la panne, marque du moteur, type de tablier. Estimation de l'urgence et planification du delai d'intervention (30 min en horaires ouvrables sur ${zoneName}).` },
    { number: "02", title: "Diagnostic sur place", body: `Inspection complete en 15 min : axe, coulisses, tablier, moteur, serrure. Verification specifique aux contraintes aixoises (mistral, calcaire, exposition).` },
    { number: "03", title: "Devis ferme signe", body: "Devis ligne par ligne calcule au tarif catalogue constructeur. Signe sur place avant toute intervention. Pas de surfacturation post-intervention." },
    { number: "04", title: "Intervention + test final", body: "Realisation des gestes techniques validees. Test sur 3 cycles complets montee/descente sous charge reelle. Bordereau ecrit conserve 5 ans." },
  ];

  const ctaHref = "/contact/";
  const ctaLabel = `DEVIS ${service.name.toUpperCase()}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <PageHeader
          eyebrow={`[ ${service.name.toUpperCase()} A ${zoneName.toUpperCase()} — URGENCE 24H/24 ]`}
          headlinePre={service.name}
          headlineHighlight="rideau metallique"
          headlinePost={`a ${zoneName} (${zonePostal})`}
          body={content.introText.split('. ').slice(0, 2).join('. ') + '.'}
          ctas={[
            { label: ctaLabel, href: ctaHref, variant: "primary" },
            { label: "ZONES D'INTERVENTION", href: "/zones/", variant: "white" },
          ]}
          bgImage={heroImg}
          bgAlt={`${service.name} rideau metallique ${zoneName}`}
          proof={`${siteConfig.rating}/5 sur ${siteConfig.ratingCount} avis Google a ${siteConfig.city}`}
          proofAvatars={[
            "/images/gallery/depannage-rideau-metallique-drm-services.webp",
            "/images/gallery/installation-rideau-metallique-drm.webp",
            "/images/gallery/fabrication-rideau-metallique-france.webp",
          ]}
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: service.name, href: `/${service.slug}-${citySlug}/` },
            { label: zoneName },
          ]}
        />

        <ServiceFeatures
          eyebrow={`[ NOS GARANTIES ${service.name.toUpperCase()} ]`}
          heading={content.seo1Title}
          body={content.seo2Text.split('. ')[0] + '.'}
          features={features}
          showcaseImage={showcaseImg}
          showcaseAlt={`${service.name} rideau metallique ${zoneName}`}
        />

        <ServiceProcess
          eyebrow={`[ METHODE DRM ${siteConfig.city.toUpperCase()} ]`}
          heading={`Une intervention de ${word.keyword} a ${zoneName} en 4 etapes`}
          steps={processSteps}
          image={processImg}
          imageAlt={`Process ${service.name} rideau metallique ${zoneName}`}
        />

        <ServiceZoneLocal
          zoneName={zoneName}
          zonePostal={zonePostal}
          serviceName={service.name}
          local={local}
        />

        <ServiceFaq
          eyebrow="[ FAQ ]"
          heading={`Questions frequentes sur le ${word.keyword} a ${zoneName}`}
          sideText={`Toutes les reponses aux questions des commercants, artisans et industriels de ${zoneName} et du Pays d'Aix avant une intervention DRM.`}
          cta={{ label: ctaLabel, href: ctaHref }}
          items={content.faq}
        />

        <ServiceLinks
          currentServiceId={service.id}
          currentZoneSlug={zoneSlug}
          zoneName={zoneName}
        />

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
