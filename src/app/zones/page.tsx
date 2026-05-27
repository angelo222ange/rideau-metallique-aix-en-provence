import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/home/CtaSection";
import { ArrowRight } from "@/components/icons";
import { siteConfig, zones, services } from "@/config/site";

export const metadata: Metadata = {
  title: `Zones d'intervention DRM ${siteConfig.city} - Pays d'Aix`,
  description: `${zones.length + 1} communes desservies par ${siteConfig.brand} : Aix centre, Les Milles, Gardanne, Le Tholonet, Puyricard, Eguilles, Venelles, Meyreuil, Bouc-Bel-Air, Cabries et tout le Pays d'Aix. Meme delai, meme tarif partout.`,
  alternates: { canonical: siteConfig.url + "/zones/" },
};

export default function ZonesPage() {
  const citySlug = siteConfig.cityShort.toLowerCase().replace(/\s+/g, "-");
  const allZones = [
    { name: siteConfig.cityShort, slug: citySlug, postalCode: siteConfig.postalCode, distance: "centre", lat: siteConfig.geo.latitude, lng: siteConfig.geo.longitude },
    ...zones,
  ];

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow={`[ ${allZones.length} COMMUNES DESSERVIES — PAYS D'AIX ]`}
          headlinePre="Toutes les"
          headlineHighlight="zones d'intervention"
          headlinePost="en Pays d'Aix"
          body={`${siteConfig.brand} intervient sous 30 minutes en horaires ouvrables sur Aix centre, Les Milles, Gardanne, Le Tholonet, Puyricard et toutes les communes du Pays d'Aix. Meme tarif, meme delai, meme garantie 2 ans partout.`}
          ctas={[{ label: "DEMANDER UN DEVIS", href: "/contact/", variant: "primary" }]}
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          bgAlt="Zones d'intervention DRM Pays d'Aix"
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Zones" }]}
        />

        <section className="section bg-white">
          <div className="container">
            <div className="eyebrow mb-6">[ NOS COMMUNES ]</div>
            <h2 className="mb-12 max-w-[820px]">
              {allZones.length} villes du Pays d&apos;Aix couvertes 24h/24
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allZones.map((z) => (
                <div key={z.slug} className="bg-[#fbfbfb] rounded-[20px] p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow border border-black/5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="h2-sm text-[#050505]">{z.name}</h3>
                    <span className="text-[13px] text-[#050505]/55 font-mono">{z.postalCode}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {services.slice(0, 4).map((s) => (
                      <Link key={s.id} href={`/${s.slug}-${z.slug}/`} className="text-[12px] bg-white border border-black/10 hover:bg-[#C28840] hover:text-white hover:border-[#C28840] rounded-full px-3 py-1.5 transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                  <Link href={`/depannage-rideau-metallique-${z.slug}/`} className="inline-flex items-center gap-2 text-[#C28840] text-[14px] font-semibold mt-1">
                    Depannage urgent <ArrowRight />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
