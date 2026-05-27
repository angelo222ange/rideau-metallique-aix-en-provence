import { siteConfig } from "@/config/site";

const steps = [
  {
    n: 1,
    title: "Appel et diagnostic",
    desc: `Vous nous contactez via le formulaire ou par telephone. Nous etablissons un pre-diagnostic en moins de 5 minutes et planifions l'intervention en fonction de l'urgence.`,
    img: "/images/gallery/depannage-rideau-metallique-drm.webp",
  },
  {
    n: 2,
    title: "Intervention rapide",
    desc: `Notre technicien arrive sous ${siteConfig.delai} minutes en moyenne sur ${siteConfig.city}. Vehicule atelier complet : moteurs Somfy/Simu/ACM, lames pleines P57/P90, ressorts, serrures, coulisses.`,
    img: "/images/gallery/installation-rideau-metallique-drm.webp",
  },
  {
    n: 3,
    title: "Devis transparent",
    desc: `Devis etabli sur place avant intervention, ligne par ligne. Pas de surcout cache, pas de forfait deplacement masque. Vous validez, nous depannons immediatement.`,
    img: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
            [ Notre methode ]
          </span>
          <h2 className="text-[#181C16]">
            Comment se deroule une intervention DRM a {siteConfig.city}
          </h2>
          <p className="text-[16px] md:text-[17px] text-[#4F5648] leading-relaxed">
            Trois etapes claires, du premier appel jusqu&apos;au rideau metallique remis en service.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s) => {
            const a = `Etape ${s.n} : ${s.title} de rideau metallique a ${siteConfig.city}`;
            return (
              <article key={s.n} className="bg-white rounded-[12px] overflow-hidden flex flex-col">
                <div className="relative w-full h-[200px] md:h-[220px]">
                  <img
                    src={s.img}
                    alt={a}
                    title={a}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-[#C28840] text-white rounded-full flex items-center justify-center font-bold text-[18px]">
                    {s.n}
                  </div>
                </div>
                <div className="p-6 md:p-7 flex flex-col gap-2">
                  <h3 className="text-[#181C16] text-[20px] md:text-[22px] font-semibold">{s.title}</h3>
                  <p className="text-[#4F5648] text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
