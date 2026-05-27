import Link from "next/link";
import { siteConfig, services } from "@/config/site";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");

const serviceImages: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
  installation: "/images/gallery/installation-rideau-metallique-drm.webp",
  reparation: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
  motorisation: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
  deblocage: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
  entretien: "/images/gallery/entretien-rideau-metallique-drm-france.webp",
  fabrication: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
};

export default function ServiceSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-[#F5F1E6] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
            [ Nos 7 services rideau metallique ]
          </span>
          <h2 className="text-[#181C16]">
            Une expertise complete sur le rideau metallique a {siteConfig.city}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#4F5648] leading-relaxed">
            Depannage urgent, installation neuve, motorisation, reparation, deblocage, entretien et fabrication sur-mesure.
            Tout type de rideau metallique : lames pleines, micro-perforees, grilles cobra, polycarbonate.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => {
            const img = serviceImages[s.id] ?? "/images/gallery/depannage-rideau-metallique-drm-reparation.webp";
            const a = `${s.name} de rideau metallique a ${siteConfig.city}`;
            return (
              <Link
                key={s.id}
                href={`/${s.slug}-${citySlug}/`}
                className="group bg-[#F5F1E6] rounded-[12px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-[200px] md:h-[220px] overflow-hidden">
                  <img
                    src={img}
                    alt={a}
                    title={a}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/95 rounded-full text-[12px] font-bold text-[#2D3F2A]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2 flex-grow">
                  <h3 className="text-[#181C16] text-[20px] font-semibold">
                    {s.name} de rideau metallique
                  </h3>
                  <p className="text-[#4F5648] text-[14px] leading-relaxed flex-grow">
                    {s.shortDescription}
                  </p>
                  <span className="text-[#C28840] text-[14px] font-semibold mt-2 inline-flex items-center gap-1.5">
                    En savoir plus
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
