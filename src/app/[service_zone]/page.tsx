import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ServiceZoneSpecific from "@/components/service-sections/ServiceZoneSpecific";
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

const serviceHeroImages: Record<string, string> = {
  depannage: "/images/gallery/hero-bg-technicien-drm.webp",
  installation: "/images/gallery/installation-rideau-metallique-drm.webp",
  reparation: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
  motorisation: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
  deblocage: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  entretien: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  fabrication: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
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
  const heroImg = serviceHeroImages[service.id] ?? "/images/gallery/depannage-rideau-metallique-drm-reparation.webp";

  const otherServices = services.filter((s) => s.id !== service.id);
  const neighborZones = zones.filter((z) => z.slug !== zoneSlug).slice(0, 8);

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
    serviceType: `${service.name} de rideau metallique`,
    name: `${service.name} rideau metallique ${zoneName}`,
    description: content.introText,
    provider: { "@type": "LocalBusiness", name: siteConfig.fullName, url: siteConfig.url },
    areaServed: { "@type": "City", name: zoneName, address: { "@type": "PostalAddress", postalCode: zonePostal } },
    offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full px-2 md:px-[10px] pt-2 md:pt-[10px]">
          <div className="relative w-full overflow-hidden rounded-[12px] min-h-[480px] md:min-h-[540px]">
            <img
              src={heroImg}
              alt={`${service.name} rideau metallique ${zoneName}`}
              title={`${service.name} rideau metallique ${zoneName}`}
              width={2400}
              height={1200}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/70 via-[#1A1F18]/45 to-[#1A1F18]/80" aria-hidden />
            <div className="relative z-10 flex flex-col items-start justify-end px-5 md:px-10 py-12 md:py-16 min-h-[480px] md:min-h-[540px] max-w-[1280px] mx-auto">
              <nav className="text-[13px] text-white/75 mb-3">
                <Link href="/" className="hover:text-white">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href={`/${service.slug}-${citySlug}/`} className="hover:text-white">{service.name}</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{zoneName}</span>
              </nav>
              <h1 className="text-white max-w-[860px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                {service.name} rideau metallique {zoneName} ({zonePostal})
              </h1>
              <p className="text-white/90 text-[16px] md:text-[18px] mt-4 max-w-[720px]">
                {content.introText}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-6 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px]">
                  Demander un devis pour {zoneName}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / process */}
        <section className="bg-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { v: siteConfig.delai + " min", l: "Delai moyen d'intervention" },
              { v: "24/7", l: "Disponibilite urgence" },
              { v: siteConfig.experience + " ans", l: "Experience reseau DRM" },
              { v: "2 ans", l: "Garantie pieces" },
            ].map((s) => (
              <div key={s.l} className="bg-[#F5F1E6] rounded-[12px] p-5 md:p-6 text-center">
                <div className="text-[#2D3F2A] text-[28px] md:text-[34px] font-bold leading-none mb-2">{s.v}</div>
                <div className="text-[#4F5648] text-[13px] md:text-[14px] leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Intro SEO */}
        <section className="bg-white pb-14 md:pb-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="inline-block bg-[#F5F1E6] px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#4F5648] font-semibold mb-3">
                [ {service.name} rideau metallique {zoneName} ]
              </span>
              <h2 className="text-[#181C16] mb-4">{content.introTitle}</h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]">{content.introText}</p>
            </div>
            <div>
              <h3 className="text-[#181C16] text-[20px] md:text-[22px] font-semibold mb-3">Pannes et besoins frequents</h3>
              <ul className="grid grid-cols-1 gap-2 text-[15px] text-[#4F5648]">
                {word.problemes.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-[#C28840] mt-1">&#8226;</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Types intervention */}
        <section className="bg-[#F5F1E6] py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[820px] mb-8">
              <h2 className="text-[#181C16] mb-3">Gestes techniques DRM pour {service.name} a {zoneName}</h2>
              <p className="text-[#4F5648] text-[16px] leading-relaxed">{content.typesIntro}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {word.gestes.map((g, i) => (
                <div key={g} className="bg-white rounded-[12px] p-5 md:p-6 flex flex-col gap-2">
                  <div className="text-[#2D3F2A] text-[13px] font-bold">{String(i + 1).padStart(2, "0")}</div>
                  <div className="text-[#181C16] text-[16px] md:text-[17px] font-semibold leading-snug">{g}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Block 1 */}
        <section className="bg-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <h2 className="text-[#181C16] mb-4">{content.seo1Title}</h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]">{content.seo1Text}</p>
            </div>
            <div className="relative w-full h-[320px] md:h-[440px] rounded-[12px] overflow-hidden">
              <img src={heroImg} alt={`${service.name} rideau metallique ${zoneName}`} title={`${service.name} rideau metallique ${zoneName}`} width={1200} height={800} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* SEO Block 2 */}
        <section className="bg-[#F5F1E6] py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="lg:order-2">
              <h2 className="text-[#181C16] mb-4">{content.seo2Title}</h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]">{content.seo2Text}</p>
            </div>
            <div className="relative w-full h-[320px] md:h-[440px] rounded-[12px] overflow-hidden lg:order-1">
              <img src="/images/gallery/installation-rideau-metallique-drm.webp" alt={`Atelier DRM ${zoneName} rideau metallique`} title={`Atelier DRM ${zoneName} rideau metallique`} width={1200} height={800} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Hyper-local */}
        <ServiceZoneSpecific
          zoneName={zoneName}
          zonePostal={zonePostal}
          serviceName={service.name}
          local={local}
        />

        {/* Local expertise text + why us */}
        <section className="bg-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-[#F5F1E6] rounded-[12px] p-6 md:p-8">
              <h2 className="text-[#181C16] mb-3">{content.localExpertiseTitle}</h2>
              <p className="text-[#4F5648] text-[15px] leading-[1.75]">{content.localExpertiseText}</p>
            </div>
            <div className="bg-[#2D3F2A] text-white rounded-[12px] p-6 md:p-8">
              <h2 className="text-white mb-3">{content.whyUsTitle}</h2>
              <p className="text-white/90 text-[15px] leading-[1.75]">{content.whyUsText}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F1E6] py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#181C16] mb-8 max-w-[820px]">
              FAQ {service.name} rideau metallique {zoneName}
            </h2>
            <div className="flex flex-col gap-3">
              {content.faq.map((f, i) => (
                <details key={i} className="bg-white rounded-[12px] p-5 md:p-6 group">
                  <summary className="cursor-pointer text-[#181C16] text-[16px] md:text-[17px] font-semibold list-none flex items-center justify-between gap-4">
                    <span>{f.question}</span>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-[#F5F1E6] flex items-center justify-center text-[#2D3F2A]">+</span>
                  </summary>
                  <p className="mt-3 text-[#4F5648] text-[15px] leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Maillage services */}
        <section className="bg-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#181C16] mb-3">Nos 6 autres services rideau metallique a {zoneName}</h2>
            <p className="text-[#4F5648] text-[16px] mb-8 max-w-[680px]">
              DRM {siteConfig.city} couvre l&apos;integralite du cycle de vie de votre rideau metallique. Explorez les autres services disponibles sur {zoneName}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((s) => (
                <Link key={s.id} href={`/${s.slug}-${zoneSlug}/`} className="group bg-[#F5F1E6] hover:bg-[#2D3F2A] hover:text-white p-5 rounded-[12px] transition-colors">
                  <div className="text-[16px] md:text-[17px] font-semibold text-[#181C16] group-hover:text-white">{s.name} de rideau metallique</div>
                  <div className="text-[13px] text-[#4F5648] group-hover:text-white/80 mt-1">{s.shortDescription}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Zones voisines */}
        <section className="bg-[#F5F1E6] py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#181C16] mb-3">{service.name} rideau metallique dans les communes voisines</h2>
            <p className="text-[#4F5648] text-[16px] mb-8 max-w-[680px]">
              DRM {siteConfig.city} intervient avec les memes delais et tarifs dans les communes voisines de {zoneName}.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {neighborZones.map((z) => (
                <Link key={z.slug} href={`/${service.slug}-${z.slug}/`} className="bg-white hover:bg-[#2D3F2A] hover:text-white p-4 rounded-[8px] transition-colors flex flex-col">
                  <span className="text-[15px] font-semibold text-[#181C16]">{z.name}</span>
                  <span className="text-[12px] text-[#4F5648]">{z.postalCode}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#1A1F18] text-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[820px] mx-auto text-center">
            <h2 className="text-white mb-4">{content.ctaTitle}</h2>
            <p className="text-white/85 text-[16px] md:text-[17px] mb-7">
              Devis gratuit en 24h, intervention sous {siteConfig.delai} minutes en horaires ouvrables, garantie 2 ans pieces / 1 an main-d&apos;oeuvre.
            </p>
            <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-7 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px]">
              Demander un devis gratuit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
