import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig, zones, services } from "@/config/site";

export const metadata: Metadata = {
  title: `Zones d'intervention DRM ${siteConfig.city} - Pays d'Aix`,
  description: `${zones.length} communes desservies par DRM ${siteConfig.city} : Les Milles, Gardanne, Le Tholonet, Lambesc, Eguilles, Trets et tout le Pays d'Aix. Meme delai, meme tarif partout.`,
  alternates: { canonical: siteConfig.url + "/zones/" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
    { "@type": "ListItem", position: 2, name: "Zones", item: siteConfig.url + "/zones/" },
  ],
};

export default function ZonesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="bg-[#1A1F18] text-white pt-16 pb-12 md:pt-24 md:pb-16 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <nav className="text-[13px] text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Zones d&apos;intervention</span>
            </nav>
            <h1 className="text-white max-w-[820px]">
              Zones d&apos;intervention DRM {siteConfig.city}
            </h1>
            <p className="text-white/85 text-[17px] mt-5 max-w-[720px]">
              DRM {siteConfig.city} couvre {zones.length} communes du Pays Aixois et du Vaucluse limitrophe
              dans un rayon de 30 km. Meme delai d&apos;intervention, meme tarif, partout.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-[#181C16] mb-3">Toutes les communes desservies</h2>
            <p className="text-[#4F5648] text-[16px] mb-8 max-w-[760px]">
              Chaque commune dispose d&apos;une page dediee par service (depannage, installation, motorisation, etc.).
              Cliquez sur une commune pour acceder a sa fiche locale et au detail des interventions DRM disponibles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zones.map((z) => (
                <article key={z.slug} className="bg-[#F5F1E6] rounded-[12px] p-5 md:p-6">
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-[#181C16] text-[18px] font-semibold">{z.name}</h3>
                    <span className="text-[12px] text-[#4F5648]">{z.postalCode} &middot; {z.distance}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {services.slice(0, 4).map((s) => (
                      <Link
                        key={s.id}
                        href={`/${s.slug}-${z.slug}/`}
                        className="inline-flex items-center text-[12px] bg-white hover:bg-[#2D3F2A] hover:text-white text-[#181C16] px-2.5 py-1 rounded-full border border-black/10 transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={`/depannage-rideau-metallique-${z.slug}/`}
                    className="mt-4 inline-flex items-center text-[13px] text-[#C28840] font-semibold hover:text-[#A66E2E]"
                  >
                    Voir la fiche {z.name} &rarr;
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
