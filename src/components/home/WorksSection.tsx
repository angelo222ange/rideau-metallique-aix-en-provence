import { siteConfig } from "@/config/site";

const projects = [
  {
    img: "/images/gallery/realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
    title: "Rideau metallique lames pleines P90 boulangerie",
    location: `Centre-ville, ${siteConfig.city}`,
  },
  {
    img: "/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp",
    title: "Pose rideau metallique commerce neuf",
    location: "Les Milles (13290)",
  },
  {
    img: "/images/gallery/rideau-metallique-cobra-realisation-.webp",
    title: "Installation grille cobra anti-effraction",
    location: "Gardanne (13120)",
  },
  {
    img: "/images/gallery/realisation-rideau-metallique-lame-pleine-industriel-france.webp",
    title: "Rideau metallique industriel P140",
    location: "Le Tholonet (13100)",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-[#F5F1E6] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
            [ Nos realisations ]
          </span>
          <h2 className="text-[#181C16]">
            Derniers chantiers rideau metallique en Pays d'Aix
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => {
            const a = `${p.title} a ${p.location}`;
            return (
              <article key={p.title} className="flex flex-col gap-4 group">
                <div className="relative w-full h-[280px] md:h-[340px] lg:h-[367px] rounded-[12px] overflow-hidden">
                  <img
                    src={p.img}
                    alt={a}
                    title={a}
                    width={1200}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-1 px-1">
                  <h3 className="text-[#181C16] text-[20px] md:text-[22px] font-semibold">{p.title}</h3>
                  <p className="text-[#4F5648] text-[14px]">{p.location}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
