import { siteConfig } from "@/config/site";

const points = [
  "Techniciens specialistes du rideau metallique",
  "Pieces detachees d'origine en stock",
  "Atelier de fabrication en Pays d'Aix",
  "Devis gratuit, garantie 2 ans pieces / 1 an pose",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-12 md:gap-16">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="shrink-0">
            <span className="inline-block bg-[#F5F1E6] px-4 py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
              [ A propos de DRM {siteConfig.city} ]
            </span>
          </div>
          <h2 className="text-[#181C16] max-w-[820px]">
            {siteConfig.experience} ans au service des commerces, ateliers et industriels du Pays Aixois pour leurs rideaux metalliques
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#2D3F2A] rounded-[12px] p-6 md:p-8 flex flex-col gap-3 min-h-[260px] justify-between">
            <div className="flex justify-between items-start">
              <div
                className="text-white text-[72px] md:text-[88px] leading-none"
                style={{ fontWeight: 700, letterSpacing: "-2.4px", fontFamily: "var(--font-manrope)" }}
              >
                {siteConfig.delai}<span className="text-[36px] md:text-[44px] align-top">min</span>
              </div>
              <div className="w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" />
                  <path d="M12 7v5l3 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <p className="text-white/95 text-[15px] md:text-[16px] leading-[1.55]">
              Delai d&apos;intervention moyen sur {siteConfig.city} et l&apos;agglomeration aixoise (Aix-en-Provence-Les-Milles-Gardanne).
              Vehicule atelier toujours en stock de pieces detachees pour les marques Somfy, Simu, ACM, Came, Nice, BFT et Sommer.
            </p>
          </div>

          <ul className="flex flex-col gap-4 md:gap-5 justify-center">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 md:gap-4">
                <span className="shrink-0 w-9 h-9 rounded-full bg-[#C28840]/15 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12.5l4 4 10-10" stroke="#C28840" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[#181C16] text-[16px] md:text-[17px] font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
