const logos = [
  { src: "/images/marques/moteur-simu-rideau-metallique.webp", alt: "Simu" },
  { src: "/images/marques/moteur-acm-italian-rolling-power.webp", alt: "ACM" },
  { src: "/images/marques/logo-sommer-moteur-rideau-metallique.webp", alt: "Sommer" },
  { src: "/images/marques/logo-afca-moteur-rideau-metallique.webp", alt: "AFCA" },
  { src: "/images/marques/logo-masinara-moteur-rideau-metallique.webp", alt: "Masinara" },
  { src: "/images/marques/logo-moteur-g-doorgate-rideau-metallique-drm.webp", alt: "G-Doorgate" },
];

export default function PartnersMarquee() {
  return (
    <section className="bg-white py-10 md:py-12 px-5 md:px-10 border-y border-black/5">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-6">
        <p className="text-[12px] tracking-[0.2em] uppercase text-[#4F5648] font-medium">
          [ Marques partenaires &mdash; pieces d&apos;origine ]
        </p>
        <div className="w-full overflow-hidden">
          <div className="marquee-track items-center gap-12">
            {[...logos, ...logos, ...logos].map((l, i) => (
              <span key={i} className="shrink-0 inline-flex items-center justify-center h-16 px-8 opacity-80 hover:opacity-100 transition">
                <img src={l.src} alt={l.alt} title={l.alt} width={140} height={64} className="h-14 w-auto object-contain" loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
