import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { siteConfig, services, zones } from "@/config/site";

const citySlug = siteConfig.cityShort.toLowerCase().replace(/\s+/g, "-");

export const metadata: Metadata = {
  title: `Plan du site - ${siteConfig.brand}`,
  description: `Plan du site ${siteConfig.brand} : toutes les pages, 7 services et ${zones.length + 1} zones d'intervention rideau metallique en Pays d'Aix.`,
  alternates: { canonical: siteConfig.url + "/plan-du-site/" },
};

export default function PlanDuSitePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="[ PLAN DU SITE ]"
          headlinePre="Toutes les"
          headlineHighlight="pages du site"
          headlinePost={`${siteConfig.brand}`}
          body={`${1 + services.length + zones.length * services.length + 7} URLs accessibles : homepage, 7 services principaux, ${zones.length} zones d'intervention x 7 services, blog, contact, legales.`}
          ctas={[]}
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          bgAlt="Plan du site DRM Aix-en-Provence"
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Plan du site" }]}
        />
        <section className="section bg-white">
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            <div>
              <div className="eyebrow mb-5">[ Pages principales ]</div>
              <ul className="flex flex-col gap-3 text-[15px]">
                <li><Link href="/" className="text-[#050505] hover:text-[#C28840] font-medium">Accueil</Link></li>
                <li><Link href="/zones/" className="text-[#050505] hover:text-[#C28840] font-medium">Zones d&apos;intervention</Link></li>
                <li><Link href="/blog/" className="text-[#050505] hover:text-[#C28840] font-medium">Blog rideau metallique</Link></li>
                <li><Link href="/contact/" className="text-[#050505] hover:text-[#C28840] font-medium">Contact</Link></li>
                <li><Link href="/mentions-legales/" className="text-[#050505]/70 hover:text-[#C28840]">Mentions legales</Link></li>
                <li><Link href="/confidentialite/" className="text-[#050505]/70 hover:text-[#C28840]">Politique de confidentialite</Link></li>
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-5">[ 7 services {siteConfig.city} ]</div>
              <ul className="flex flex-col gap-3 text-[15px]">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/${s.slug}-${citySlug}/`} className="text-[#050505] hover:text-[#C28840] font-medium">
                      {s.name} rideau metallique a {siteConfig.cityShort}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="eyebrow mb-5">[ {zones.length} zones du Pays d&apos;Aix ]</div>
              <ul className="flex flex-col gap-3 text-[15px]">
                {zones.map((z) => (
                  <li key={z.slug}>
                    <Link href={`/depannage-rideau-metallique-${z.slug}/`} className="text-[#050505] hover:text-[#C28840] font-medium">
                      {z.name} <span className="text-[#050505]/45 font-mono text-[13px]">({z.postalCode})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
