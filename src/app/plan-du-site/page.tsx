import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { siteConfig, services, zones } from "@/config/site";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");

export const metadata: Metadata = {
  title: `Plan du site - DRM ${siteConfig.city}`,
  description: `Plan du site DRM ${siteConfig.city} : toutes les pages, services et zones d'intervention rideau metallique en Pays d'Aix.`,
  alternates: { canonical: siteConfig.url + "/plan-du-site/" },
};

export default function PlanDuSitePage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1A1F18] text-white pt-14 pb-10 md:pt-20 md:pb-14 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-white">Plan du site</h1>
            <p className="text-white/80 mt-3">Toutes les pages de DRM {siteConfig.city}</p>
          </div>
        </section>
        <section className="bg-white py-12 md:py-16 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h2 className="text-[#181C16] text-[20px] font-semibold mb-4">Pages principales</h2>
              <ul className="flex flex-col gap-2 text-[15px]">
                <li><Link href="/" className="text-[#2D3F2A] hover:text-[#C28840]">Accueil</Link></li>
                <li><Link href="/zones/" className="text-[#2D3F2A] hover:text-[#C28840]">Zones d&apos;intervention</Link></li>
                <li><Link href="/blog/" className="text-[#2D3F2A] hover:text-[#C28840]">Blog</Link></li>
                <li><Link href="/contact/" className="text-[#2D3F2A] hover:text-[#C28840]">Contact</Link></li>
                <li><Link href="/mentions-legales/" className="text-[#2D3F2A] hover:text-[#C28840]">Mentions legales</Link></li>
                <li><Link href="/confidentialite/" className="text-[#2D3F2A] hover:text-[#C28840]">Confidentialite</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="text-[#181C16] text-[20px] font-semibold mb-4">Nos services</h2>
              <ul className="flex flex-col gap-2 text-[15px]">
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/${s.slug}-${citySlug}/`} className="text-[#2D3F2A] hover:text-[#C28840]">
                      {s.name} rideau metallique
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[#181C16] text-[20px] font-semibold mb-4">Zones desservies</h2>
              <ul className="flex flex-col gap-2 text-[15px]">
                {zones.map((z) => (
                  <li key={z.slug}>
                    <Link href={`/depannage-rideau-metallique-${z.slug}/`} className="text-[#2D3F2A] hover:text-[#C28840]">
                      {z.name} ({z.postalCode})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
