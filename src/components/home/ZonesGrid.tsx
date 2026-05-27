import Link from "next/link";
import { siteConfig, zones } from "@/config/site";

export default function ZonesGrid() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-[#F5F1E6] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
            [ Zones d&apos;intervention ]
          </span>
          <h2 className="text-[#181C16]">
            DRM {siteConfig.city} couvre tout le Pays d'Aix et le Vaucluse limitrophe
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#4F5648] leading-relaxed">
            {zones.length} communes desservies dans un rayon de 30 km autour de {siteConfig.city}.
            Meme delai d&apos;intervention, meme tarif, partout sur le secteur.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {zones.map((z) => (
            <Link
              key={z.slug}
              href={`/depannage-rideau-metallique-${z.slug}/`}
              className="group flex items-center justify-between gap-3 bg-[#F5F1E6] hover:bg-[#2D3F2A] hover:text-white p-4 rounded-[8px] transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-[#181C16] group-hover:text-white">{z.name}</span>
                <span className="text-[12px] text-[#4F5648] group-hover:text-white/70">{z.postalCode} &middot; {z.distance}</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#2D3F2A] group-hover:text-white shrink-0">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </Link>
          ))}
        </div>

        <Link
          href="/zones/"
          className="inline-flex items-center justify-center h-12 px-7 bg-[#2D3F2A] hover:bg-[#1F2C1D] text-white text-[15px] font-semibold rounded-[8px] transition-colors"
        >
          Voir toutes les zones detaillees
        </Link>
      </div>
    </section>
  );
}
