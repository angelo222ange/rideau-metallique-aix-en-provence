"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const heroAlt = `Depannage rideau metallique ${siteConfig.city} 24h/24 par DRM`;
  return (
    <section className="relative w-full px-2 md:px-[10px] pt-2 md:pt-[10px]">
      <div className="relative w-full overflow-hidden rounded-[12px] min-h-[560px] md:min-h-[640px] lg:min-h-[700px]">
        <img
          src={`/images/gallery/${siteConfig.heroBg}`}
          alt={heroAlt}
          title={heroAlt}
          width={2400}
          height={1200}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay sombre constant pour neutraliser fonds clairs */}
        <div className="absolute inset-0 bg-[#1A1F18]/55" aria-hidden />
        {/* Gradient renforce centre+bas pour bloc texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/60 via-[#1A1F18]/50 to-[#1A1F18]/85" aria-hidden />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-5 md:px-10 py-16 md:py-24 min-h-[560px] md:min-h-[640px] lg:min-h-[700px]">
          <span className="inline-block bg-[#C28840]/20 border border-[#C28840]/40 backdrop-blur-sm px-4 py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-white mb-6">
            [ Urgence 24h/24 &mdash; Pays d'Aix ]
          </span>
          <h1 className="text-white max-w-[900px] mx-auto" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
            Depannage rideau metallique a {siteConfig.city} et en Pays d&apos;Aix, 24h/24
          </h1>
          <p className="text-white text-[17px] md:text-[19px] leading-[1.6] mt-6 max-w-[760px]" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}>
            Artisan local installe au pied de la Sainte-Victoire, {siteConfig.brand} intervient
            sur rideau bloque, moteur ACM ou Somfy en panne, lame torsionnee par le mistral
            ou serrure forcee. Sous {siteConfig.delai} min sur Aix centre, Les Milles, Gardanne
            et tout le Pays d&apos;Aix. Devis ferme signe sur place, garantie 2 ans pieces.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-10 w-full max-w-[520px]">
            <Link
              href="/contact/"
              className="flex-1 inline-flex items-center justify-center h-[52px] px-6 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px] transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/zones/"
              className="flex-1 inline-flex items-center justify-center h-[52px] px-6 bg-white/15 hover:bg-white/25 text-white border border-white/30 text-[15px] font-semibold rounded-[8px] transition-colors backdrop-blur"
            >
              Zones d&apos;intervention
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-12 text-white/80 text-[13px]">
            <div className="flex items-center gap-2">
              <span className="text-[#D9A062] font-bold">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              <span>{siteConfig.rating}/5 &mdash; {siteConfig.ratingCount} avis Google</span>
            </div>
            <div>{siteConfig.experience} ans d&apos;experience</div>
            <div>{siteConfig.interventions} interventions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
