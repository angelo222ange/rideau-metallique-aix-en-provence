import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ServiceZoneSpecific from "@/components/service-sections/ServiceZoneSpecific";
import ServiceZoneMap from "@/components/service-sections/ServiceZoneMap";
import { siteConfig, services, zones } from "@/config/site";
import { parseSlug } from "@/lib/content";
import { buildServiceZoneContent, getServiceWording } from "@/lib/service-content";
import { getZoneLocal } from "@/lib/zone-local-data";
import { pickServiceZoneImages } from "@/lib/image-catalog";

export function generateStaticParams() {
  const params: { service_zone: string }[] = [];
  for (const zone of zones) {
    for (const service of services) {
      params.push({ service_zone: `${service.slug}-${zone.slug}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ service_zone: string }> }): Promise<Metadata> {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) return {};
  const { service, zone } = parsed;
  const zoneName = zone.name;
  const zonePostal = zone.postalCode;
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
      images: [{ url: siteConfig.url + "/images/gallery/" + siteConfig.heroBg }],
    },
  };
}

// Note: hero images now come from pickServiceZoneImages() — bg-suitable seulement, jamais visu produit

function PhoneCallCTA({ label, variant = "primary" }: { label: string; variant?: "primary" | "secondary" | "outline" }) {
  if (!siteConfig.phonePublic || !siteConfig.phone) return null;
  const baseCls = "inline-flex items-center justify-center gap-2 h-12 px-6 text-[15px] font-bold rounded-[8px] transition-colors";
  const styleCls = variant === "primary"
    ? "bg-[#2D3F2A] hover:bg-[#073640] text-white shadow-md"
    : variant === "outline"
    ? "bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur"
    : "bg-[#C28840] hover:bg-[#A66E2E] text-white";
  return (
    <a href={siteConfig.phoneLink} className={`${baseCls} ${styleCls}`}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke="currentColor" strokeWidth="2" />
      </svg>
      <span className="tabular-nums">{label}</span>
    </a>
  );
}

export default async function ServiceZonePage({ params }: { params: Promise<{ service_zone: string }> }) {
  const { service_zone } = await params;
  const parsed = parseSlug(service_zone);
  if (!parsed) notFound();
  const { service, zone } = parsed;
  const zoneName = zone.name;
  const zonePostal = zone.postalCode;
  const zoneSlug = zone.slug;
  const zoneLat = zone.lat;
  const zoneLng = zone.lng;

  const content = buildServiceZoneContent(service.id, zoneName, zoneSlug, zonePostal);
  const local = getZoneLocal(zoneSlug);
  const word = getServiceWording(service.id);
  // Sélection sémantique : hero/bg = scène, blocs pièces = produits cohérents, blocs méthode = intervention
  const imgs = pickServiceZoneImages(service.id, zoneSlug);
  const heroImg = imgs.hero;
  const img1 = imgs.block1; // méthode/diagnostic -> intervention terrain
  const img2 = imgs.block2; // pièces/garanties -> réalisation (commerce + pieces visibles in situ)
  const img3 = imgs.block3; // formats -> réalisation commerce
  const img4 = imgs.block4; // préparation -> intervention/atelier
  const img5 = imgs.finalCtaBg; // bg final CTA -> intervention OR realisation (jamais produit)

  const otherServices = services.filter((s) => s.id !== service.id);
  const neighborZones = zones.filter((z) => z.slug !== zoneSlug).slice(0, 8);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
      { "@type": "ListItem", position: 2, name: `${service.name} ${zoneName}`, item: `${siteConfig.url}/${service_zone}/` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${service.name} de rideau metallique`,
    name: `${service.name} rideau metallique ${zoneName}`,
    description: content.introText,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.fullName,
      url: siteConfig.url,
      ...(siteConfig.phonePublic && siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    },
    areaServed: { "@type": "City", name: zoneName, address: { "@type": "PostalAddress", postalCode: zonePostal } },
    offers: { "@type": "Offer", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
  };

  function renderHtml(text: string) {
    // Replace <strong>...</strong> markers with styled span
    return text.replace(/<strong>/g, '<strong class="text-[#181C16] font-semibold">');
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, serviceSchema]) }} />
      <Header />
      <main>
        {/* === HERO === */}
        <section className="relative w-full px-2 md:px-[10px] pt-2 md:pt-[10px]">
          <div className="relative w-full overflow-hidden rounded-[12px] min-h-[520px] md:min-h-[600px]">
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
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/55 via-[#1A1F18]/30 to-[#1A1F18]/85" aria-hidden />
            <div className="relative z-10 flex flex-col items-start justify-end px-5 md:px-10 py-16 md:py-20 lg:py-[100px] min-h-[520px] md:min-h-[600px] max-w-[1280px] mx-auto">
              <nav className="text-[13px] text-white/80 mb-3">
                <Link href="/" className="hover:text-white">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-white">{service.name} {zoneName}</span>
              </nav>
              <span className="inline-block bg-[#C28840]/20 border border-[#C28840]/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-white mb-4">
                [ Urgence 24h/24 &mdash; {zoneName} ]
              </span>
              <h1 className="text-white max-w-[920px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}>
                {service.name} rideau metallique {zoneName} ({zonePostal})
              </h1>
              <p className="text-white/90 text-[16px] md:text-[18px] mt-4 max-w-[760px] leading-relaxed">
                {content.introText}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7 w-full max-w-[640px]">
                <PhoneCallCTA label={siteConfig.phone} />
                <Link
                  href="/contact/"
                  className="flex-1 inline-flex items-center justify-center h-12 px-6 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-bold rounded-[8px] shadow-md"
                >
                  Demander un devis pour {zoneName}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === STATS === */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { v: siteConfig.delai + " min", l: "Delai moyen d'intervention" },
              { v: "24/7", l: "Disponibilite urgence" },
              { v: siteConfig.experience + " ans", l: "Experience reseau DRM" },
              { v: "2 ans", l: "Garantie pieces" },
            ].map((s) => (
              <div key={s.l} className="bg-[#F5F1E6] rounded-[12px] p-5 md:p-6 text-center">
                <div className="text-[#2D3F2A] text-[28px] md:text-[36px] font-bold leading-none mb-2">{s.v}</div>
                <div className="text-[#4F5648] text-[13px] md:text-[14px] leading-snug">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* === INTRO === */}
        <section className="bg-white pb-14 md:pb-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <span className="inline-block bg-[#F5F1E6] px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#4F5648] font-semibold mb-3">
                [ {service.name} rideau metallique {zoneName} ]
              </span>
              <h2 className="text-[#181C16] mb-4 text-[24px] md:text-[32px] font-semibold leading-tight">
                {content.introTitle}
              </h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]">{content.introText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <PhoneCallCTA label="Appeler maintenant" />
                <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-5 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[14px] font-semibold rounded-[8px]">
                  Devis gratuit
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-[#181C16] text-[20px] md:text-[22px] font-semibold mb-3">
                Pannes et besoins {service.name.toLowerCase()} a {zoneName}
              </h3>
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

        {/* === TYPES INTERVENTION === */}
        <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[860px] mb-8">
              <h2 className="text-[#181C16] mb-3 text-[24px] md:text-[32px] font-semibold leading-tight">
                Gestes techniques DRM pour le {service.name.toLowerCase()} rideau metallique a {zoneName}
              </h2>
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

        {/* === SEO BLOCK 1 (texte gauche + image droite) === */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block bg-[#2D3F2A]/10 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#2D3F2A] font-semibold mb-3">
                [ Methode et diagnostic ]
              </span>
              <h2 className="text-[#181C16] mb-4 text-[24px] md:text-[30px] font-semibold leading-tight">
                {content.seo1Title}
              </h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]" dangerouslySetInnerHTML={{ __html: renderHtml(content.seo1Text) }} />
            </div>
            <div className="relative w-full h-[320px] md:h-[440px] rounded-[12px] overflow-hidden shadow-sm">
              <img
                src={img1}
                alt={`${service.name} rideau metallique ${zoneName} — diagnostic technique`}
                title={`${service.name} rideau metallique ${zoneName}`}
                width={1200} height={800}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* === SEO BLOCK 2 (image gauche + texte droite) === */}
        <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="lg:order-2">
              <span className="inline-block bg-[#C28840]/15 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#C28840] font-semibold mb-3">
                [ Pieces et garanties ]
              </span>
              <h2 className="text-[#181C16] mb-4 text-[24px] md:text-[30px] font-semibold leading-tight">
                {content.seo2Title}
              </h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]" dangerouslySetInnerHTML={{ __html: renderHtml(content.seo2Text) }} />
              <div className="mt-6">
                <PhoneCallCTA label={`Appeler ${siteConfig.phone}`} />
              </div>
            </div>
            <div className="relative w-full h-[320px] md:h-[440px] rounded-[12px] overflow-hidden shadow-sm lg:order-1">
              <img
                src={img2}
                alt={`Pieces et stock DRM pour ${service.name.toLowerCase()} a ${zoneName}`}
                title={`Stock DRM Aix-en-Provence pour ${zoneName}`}
                width={1200} height={800}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* === SEO BLOCK 3 (texte gauche + image droite) === */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-block bg-[#2D3F2A]/10 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#2D3F2A] font-semibold mb-3">
                [ Formats et savoir-faire ]
              </span>
              <h2 className="text-[#181C16] mb-4 text-[24px] md:text-[30px] font-semibold leading-tight">
                {content.seo3Title}
              </h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]" dangerouslySetInnerHTML={{ __html: renderHtml(content.seo3Text) }} />
            </div>
            <div className="relative w-full h-[320px] md:h-[440px] rounded-[12px] overflow-hidden shadow-sm">
              <img
                src={img3}
                alt={`Formats de rideau metallique disponibles a ${zoneName}`}
                title={`Rideaux metalliques DRM ${zoneName}`}
                width={1200} height={800}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* === SEO BLOCK 4 (image gauche + texte droite) === */}
        <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="lg:order-2">
              <span className="inline-block bg-[#C28840]/15 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#C28840] font-semibold mb-3">
                [ Preparation et suivi ]
              </span>
              <h2 className="text-[#181C16] mb-4 text-[24px] md:text-[30px] font-semibold leading-tight">
                {content.seo4Title}
              </h2>
              <p className="text-[#4F5648] text-[16px] leading-[1.75]" dangerouslySetInnerHTML={{ __html: renderHtml(content.seo4Text) }} />
              <div className="mt-6 flex flex-wrap gap-3">
                <PhoneCallCTA label="Appeler maintenant" />
                <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-5 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[14px] font-semibold rounded-[8px]">
                  Devis gratuit en 24h
                </Link>
              </div>
            </div>
            <div className="relative w-full h-[320px] md:h-[440px] rounded-[12px] overflow-hidden shadow-sm lg:order-1">
              <img
                src={img4}
                alt={`Preparation intervention rideau metallique a ${zoneName}`}
                title={`DRM ${zoneName} preparation chantier`}
                width={1200} height={800}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* === ULTRA LOCAL === */}
        <ServiceZoneSpecific
          zoneName={zoneName}
          zonePostal={zonePostal}
          serviceName={service.name}
          local={local}
        />

        {/* === CARTE OSM === */}
        <ServiceZoneMap zoneName={zoneName} lat={zoneLat} lng={zoneLng} postal={zonePostal} />

        {/* === EXPERIENCE + WHY US === */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F5F1E6] rounded-[12px] p-6 md:p-8">
              <span className="inline-block bg-white px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#2D3F2A] font-semibold mb-3">
                [ Notre experience locale ]
              </span>
              <h2 className="text-[#181C16] mb-3 text-[22px] md:text-[26px] font-semibold leading-tight">{content.localExpertiseTitle}</h2>
              <p className="text-[#4F5648] text-[15px] leading-[1.75]">{content.localExpertiseText}</p>
            </div>
            <div className="bg-[#2D3F2A] text-white rounded-[12px] p-6 md:p-8">
              <span className="inline-block bg-white/10 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-white/85 font-semibold mb-3">
                [ Pourquoi DRM Aix-en-Provence ]
              </span>
              <h2 className="text-white mb-3 text-[22px] md:text-[26px] font-semibold leading-tight">{content.whyUsTitle}</h2>
              <p className="text-white/90 text-[15px] leading-[1.75]">{content.whyUsText}</p>
              <div className="mt-5">
                {siteConfig.phonePublic && siteConfig.phone && (
                  <a href={siteConfig.phoneLink} className="inline-flex items-center gap-2 h-12 px-5 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-bold rounded-[8px]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" stroke="white" strokeWidth="2" />
                    </svg>
                    {siteConfig.phone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#181C16] mb-8 max-w-[860px] text-[26px] md:text-[34px] font-semibold leading-tight">
              FAQ {service.name.toLowerCase()} rideau metallique a {zoneName}
            </h2>
            <div className="flex flex-col gap-3">
              {content.faq.map((f, i) => (
                <details key={i} className="bg-white rounded-[12px] p-5 md:p-6 group" {...(i === 0 ? { open: true } : {})}>
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

        {/* === MAILLAGE SERVICES (avec image card) === */}
        <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[820px] mb-8">
              <h2 className="text-[#181C16] mb-3 text-[24px] md:text-[32px] font-semibold leading-tight">
                Nos 6 autres services rideau metallique a {zoneName}
              </h2>
              <p className="text-[#4F5648] text-[16px]">
                DRM {siteConfig.city} couvre l&apos;integralite du cycle de vie de votre rideau metallique. Explorez les autres services disponibles a {zoneName}.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((s, idx) => (
                <Link key={s.id} href={`/${s.slug}-${zoneSlug}/`} className="group bg-[#F5F1E6] hover:bg-[#2D3F2A] hover:text-white p-5 md:p-6 rounded-[12px] transition-colors flex flex-col gap-2">
                  <div className="text-[#2D3F2A] group-hover:text-[#C28840] text-[11px] font-bold tabular-nums">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="text-[16px] md:text-[17px] font-semibold text-[#181C16] group-hover:text-white">{s.name} de rideau metallique a {zoneName}</div>
                  <div className="text-[13px] text-[#4F5648] group-hover:text-white/80 mt-1">{s.shortDescription}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === MAILLAGE ZONES === */}
        <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[820px] mb-8">
              <h2 className="text-[#181C16] mb-3 text-[24px] md:text-[32px] font-semibold leading-tight">
                {service.name} rideau metallique dans les communes voisines
              </h2>
              <p className="text-[#4F5648] text-[16px]">
                DRM {siteConfig.city} intervient avec les memes delais et tarifs dans les communes voisines de {zoneName}.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {neighborZones.map((z) => (
                <Link key={z.slug} href={`/${service.slug}-${z.slug}/`} className="group bg-[#F5F2EC] hover:bg-[#2D3F2A] p-4 rounded-[8px] transition-colors flex flex-col">
                  <span className="text-[15px] font-semibold text-[#181C16] group-hover:text-white">{z.name}</span>
                  <span className="text-[12px] text-[#4F5648] group-hover:text-white/80">{z.postalCode} &middot; {z.distance}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === FINAL CTA DARK avec image bg === */}
        <section className="relative w-full px-2 md:px-[10px] py-2 md:py-[10px]">
          <div className="relative w-full overflow-hidden rounded-[12px] min-h-[400px] md:min-h-[460px]">
            <img
              src={img5}
              alt={`Intervention DRM Aix-en-Provence pour ${service.name.toLowerCase()} a ${zoneName}`}
              title={`DRM ${zoneName}`}
              width={2400} height={1200}
              loading="lazy" decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/85 via-[#1A1F18]/70 to-[#1A1F18]/95" aria-hidden />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-20 lg:py-[100px] min-h-[400px] md:min-h-[460px] max-w-[820px] mx-auto">
              <h2 className="text-white text-[24px] md:text-[34px] font-semibold leading-tight mb-4" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.55)" }}>
                {content.ctaTitle}
              </h2>
              <p className="text-white/90 text-[16px] md:text-[17px] mb-7 max-w-[640px]">
                Devis gratuit en 24h, intervention sous {siteConfig.delai} minutes en horaires ouvrables, garantie 2 ans pieces / 1 an main-d&apos;oeuvre.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-[640px]">
                <PhoneCallCTA label={siteConfig.phone} />
                <Link href="/contact/" className="flex-1 inline-flex items-center justify-center h-12 px-7 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-bold rounded-[8px] shadow-md">
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
