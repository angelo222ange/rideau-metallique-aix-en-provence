import Link from "next/link";
import { siteConfig } from "@/config/site";

const articles = [
  {
    img: "/images/gallery/lame-pleine-rideau-metallique-france.webp",
    title: "Lames pleines P57, P90, P140 : comment choisir le bon rideau metallique",
    date: "15 mai 2026",
    slug: "lames-pleines-comment-choisir",
    alt: `Lames pleines P57 et P90 pour rideau metallique a ${siteConfig.city}`,
  },
  {
    img: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
    title: "Motoriser un rideau metallique manuel : Somfy, Simu ou ACM ?",
    date: "08 mai 2026",
    slug: "motoriser-rideau-metallique-quelle-marque",
    alt: "Moteur tubulaire Somfy pour rideau metallique",
  },
  {
    img: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
    title: "Rideau metallique bloque a la fermeture : les 5 causes les plus frequentes",
    date: "01 mai 2026",
    slug: "rideau-metallique-bloque-fermeture-causes",
    alt: "Rideau metallique bloque, lame sortie du rail",
  },
];

export default function ArticleSection() {
  return (
    <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
            [ Conseils DRM ]
          </span>
          <h2 className="text-[#181C16]">
            Conseils, guides et actualites rideau metallique
          </h2>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}/`}
              className="group bg-white rounded-[12px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-[220px] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.alt}
                  title={a.title}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <span className="text-[12px] text-[#4F5648]">{a.date}</span>
                <h3 className="text-[#181C16] text-[18px] md:text-[19px] font-semibold leading-snug flex-grow">{a.title}</h3>
                <span className="text-[#C28840] text-[14px] font-semibold inline-flex items-center gap-1.5">
                  Lire l&apos;article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog/"
          className="inline-flex items-center justify-center h-12 px-7 bg-[#2D3F2A] hover:bg-[#1F2C1D] text-white text-[15px] font-semibold rounded-[8px] transition-colors"
        >
          Voir tous les articles
        </Link>
      </div>
    </section>
  );
}
