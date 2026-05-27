import Link from "next/link";
import { siteConfig, services, zones } from "@/config/site";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");

export default function Footer() {
  return (
    <footer className="bg-[#1A1F18] text-white pt-16 pb-10 px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[20px] font-bold tracking-tight">{siteConfig.brand}</span>
          </div>
          <p className="text-[14px] text-white/70 leading-relaxed mb-4">
            {siteConfig.fullName}. {siteConfig.experience} ans d&apos;experience dans le depannage, l&apos;installation, la motorisation et la fabrication de rideaux metalliques en Pays d'Aix.
          </p>
          <p className="text-[13px] text-white/60">
            {siteConfig.address || `${siteConfig.postalCode} ${siteConfig.city}`}
          </p>
        </div>

        <div>
          <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white mb-4">Nos services</h3>
          <ul className="flex flex-col gap-2 text-[14px] text-white/75">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/${s.slug}-${citySlug}/`} className="hover:text-[#D9A062] transition-colors">
                  {s.name} rideau metallique
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white mb-4">Zones desservies</h3>
          <ul className="flex flex-col gap-2 text-[14px] text-white/75">
            {zones.slice(0, 8).map((z) => (
              <li key={z.slug}>
                <Link href={`/depannage-rideau-metallique-${z.slug}/`} className="hover:text-[#D9A062] transition-colors">
                  {z.name} ({z.postalCode})
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zones/" className="hover:text-[#D9A062] transition-colors font-medium">
                Voir toutes les zones &rarr;
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white mb-4">Contact</h3>
          <ul className="flex flex-col gap-3 text-[14px] text-white/75">
            <li>
              <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-5 bg-[#C28840] hover:bg-[#A66E2E] text-white font-semibold rounded-[6px] w-full text-center">
                Devis gratuit en 24h
              </Link>
            </li>
            <li>{siteConfig.openingHours}</li>
            <li>{siteConfig.delai} min d&apos;intervention moyenne</li>
            <li>Garantie 2 ans pieces / 1 an main-d&apos;oeuvre</li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60">
        <div>&copy; {new Date().getFullYear()} {siteConfig.brand} &mdash; Tous droits reserves</div>
        <div className="flex gap-5">
          <Link href="/mentions-legales/" className="hover:text-white">Mentions legales</Link>
          <Link href="/confidentialite/" className="hover:text-white">Confidentialite</Link>
          <Link href="/plan-du-site/" className="hover:text-white">Plan du site</Link>
        </div>
      </div>
    </footer>
  );
}
