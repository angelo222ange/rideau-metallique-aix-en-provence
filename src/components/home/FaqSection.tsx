"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    q: `Quel delai pour un depannage de rideau metallique a ${siteConfig.city} ?`,
    a: `DRM ${siteConfig.city} engage un delai d'intervention sous ${siteConfig.delai} minutes en horaires ouvrables sur tout le secteur de Aix-en-Provence, Les Milles, Gardanne et le Pays d'Aix. En urgence nuit / week-end / jour ferie, le delai est sous 1 heure. Notre vehicule atelier est toujours en stock de pieces detachees.`,
  },
  {
    q: `DRM ${siteConfig.city} intervient-il pour les rideaux metalliques de commerces ?`,
    a: `Oui, les commerces (boulangeries, bijouteries, restaurants, magasins, bars-tabacs) sont notre coeur de metier. Nous intervenons sur lames pleines P57 et P90, grilles cobra, grilles extensibles, lames micro-perforees et polycarbonates. Notre stock couvre les principales marques (Somfy, Simu, ACM, Came, Nice, BFT, Sommer).`,
  },
  {
    q: `Quel est le prix d'un depannage rideau metallique a ${siteConfig.city} ?`,
    a: `Les tarifs DRM ${siteConfig.city} sont annonces avant intervention. A titre indicatif : deblocage simple a partir de 149 euros, reparation moteur a partir de 390 euros, remplacement de lames a partir de 189 euros, motorisation complete a partir de 500 euros. Devis gratuit sur place, sans engagement.`,
  },
  {
    q: `Quelles marques de moteurs DRM ${siteConfig.city} maitrise-t-elle ?`,
    a: `Toutes les principales marques du marche : Somfy (RS100, tubulaires), Simu (T5), ACM (Titan, RAPTOR 76, Centris XXL), Nice (Era), Came, BFT, Sommer (GIGAroll lateral), Masinara, Gaposa. Pieces detachees d'origine en stock, garantie constructeur preservee.`,
  },
  {
    q: `Quelle garantie DRM ${siteConfig.city} apporte-t-elle sur ses interventions ?`,
    a: `Toutes nos interventions sont garanties 2 ans sur les pieces neuves et 1 an sur la main-d'oeuvre. La garantie est mentionnee au devis et a la facture. En cas de defaillance dans la periode, DRM ${siteConfig.city} reintervient gratuitement, sans franchise et sans deplacement.`,
  },
  {
    q: `DRM ${siteConfig.city} fabrique-t-il ses propres rideaux metalliques ?`,
    a: `Oui, notre atelier de fabrication situe en Pays d'Aix produit des rideaux metalliques sur-mesure (acier galvanise, aluminium thermolaque, inox brosse) en moins de 5 jours ouvres pour un commerce standard et sous 4 heures pour une lame ou un axe de remplacement urgent.`,
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
        <div>
          <span className="inline-block bg-[#F5F1E6] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648] mb-5">
            [ FAQ rideau metallique ]
          </span>
          <h2 className="text-[#181C16] mb-5">
            Questions frequentes sur le rideau metallique a {siteConfig.city}
          </h2>
          <p className="text-[#4F5648] text-[16px] leading-relaxed">
            Toutes les reponses aux questions que se posent commercants et professionnels du Pays Aixois
            avant une intervention DRM.
          </p>
        </div>

        <div className="flex flex-col">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-[#181C16] text-[16px] md:text-[18px] font-semibold">{f.q}</span>
                  <span className="shrink-0 w-9 h-9 rounded-full bg-[#F5F1E6] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: open ? "rotate(45deg)" : "none", transition: "transform 200ms" }}>
                      <path d="M12 5v14M5 12h14" stroke="#2D3F2A" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {open && (
                  <div className="pb-5 pr-12 text-[#4F5648] text-[15px] leading-relaxed">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
