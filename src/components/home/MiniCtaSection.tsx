import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function MiniCtaSection() {
  const a = `Technicien DRM en intervention rideau metallique a ${siteConfig.city}`;
  return (
    <section className="relative w-full px-2 md:px-[10px]">
      <div className="relative w-full overflow-hidden rounded-[12px] min-h-[480px] md:min-h-[560px] lg:min-h-[640px]">
        <img
          src="/images/gallery/depannage-rideau-metallique-drm-france-rm.webp"
          alt={a}
          title={a}
          width={2400}
          height={1200}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/40 via-[#1A1F18]/35 to-[#1A1F18]/85" aria-hidden />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-20 min-h-[480px] md:min-h-[560px] lg:min-h-[640px]">
          <span className="inline-block border border-white/30 bg-white/5 backdrop-blur px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-white mb-6">
            [ Urgence rideau metallique ]
          </span>
          <h2 className="text-white max-w-[820px] mx-auto" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            Un rideau metallique bloque ? Une intervention DRM a {siteConfig.city} sous {siteConfig.delai} minutes
          </h2>
          <p className="text-white/90 text-[16px] md:text-[18px] leading-[1.6] mt-6 max-w-[680px]">
            Nuit, week-end, jour ferie : nos techniciens DRM sont mobilisables 24h/24, 7j/7 sur tout le secteur de
            Aix-en-Provence, Les Milles, Gardanne et le Pays d'Aix. Devis sur place avant intervention.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center h-12 px-7 mt-8 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px] transition-colors"
          >
            Demander une intervention
          </Link>
        </div>
      </div>
    </section>
  );
}
