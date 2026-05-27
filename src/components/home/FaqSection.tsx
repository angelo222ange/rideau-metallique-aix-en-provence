"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const faqs = [
  {
    q: `Qui appeler pour un depannage de rideau metallique a ${siteConfig.city} 24h/24 ?`,
    a: `${siteConfig.brand} est l'interlocuteur direct pour toute urgence rideau metallique a ${siteConfig.city}. Notre artisan local intervient sur tout le Pays d'Aix : centre historique (Mazarin, Vieil-Aix, Sextius-Mirabeau), Les Milles, Luynes, Le Tholonet, Puyricard et les villages voisins, sous ${siteConfig.delai} minutes en horaires ouvrables et sous 1 heure la nuit, dimanche et jours feries. Devis ferme avant l'intervention, deplacement inclus, pieces detachees ACM/Somfy/Simu en stock dans le vehicule atelier.`,
  },
  {
    q: "Quels types de rideaux metalliques sont les plus courants a Aix-en-Provence ?",
    a: "Le tissu commercant aixois est tres heterogene. Sur le Cours Mirabeau et le Mazarin, les vitrines de boutiques de luxe et d'antiquaires sont equipees de lames micro-perforees ou de grilles extensibles (autorisent un retro-eclairage rideau ferme exige par la municipalite). Les commerces des Milles et de la Pioline, plus recents, ont des tabliers acier ou aluminium thermolaque pleins (P57 et P90). Les hangars industriels de Gardanne et Meyreuil (heritage du bassin minier) sont equipes de sectionnels grandes dimensions, souvent moteurs Sommer GIGAroll lateraux.",
  },
  {
    q: `Prix d'un depannage de rideau metallique a ${siteConfig.city} : a quoi s'attendre ?`,
    a: `${siteConfig.brand} pratique des tarifs annonces avant l'intervention et calcules ligne par ligne. Pour donner des ordres de grandeur : un deblocage simple sur un commerce du centre Aix part a partir de 149 euros, un changement de condensateur moteur a partir de 89 euros, un remplacement de moteur tubulaire ACM ou Somfy a partir de 390 euros, le remplacement de lames pleines (1 a 3 lames) a partir de 189 euros, une motorisation complete d'un ancien rideau manuel a partir de 500 euros. La majoration urgence nuit/week-end est annoncee a la prise d'appel.`,
  },
  {
    q: "Quelles marques de moteurs et pieces stocke votre vehicule atelier ?",
    a: "Sur l'agglomeration aixoise, le parc rideau metallique melange ancien (annees 90) et neuf. Notre stock embarque : moteurs tubulaires Somfy RS100 et Simu T5, moteurs centraux ACM Titan / RAPTOR 76 / Centris XXL, motorisations Came AXO et BFT Argo, automatismes Nice Era, moteurs lateraux Sommer GIGAroll (frequents sur les hangars de la zone Avon a Gardanne), pieces Masinara et Gaposa pour les rideaux haut-de-gamme. Toutes les pieces sont d'origine constructeur : la garantie initiale du tablier est preservee.",
  },
  {
    q: `Quelle garantie ${siteConfig.brand} apporte-t-il sur ses interventions ?`,
    a: `Toutes nos interventions sur le Pays d'Aix sont couvertes par une garantie 2 ans sur les pieces neuves et 1 an sur la main-d'oeuvre, mentionnee au devis et a la facture. En cas de defaillance dans la periode, ${siteConfig.brand} reintervient gratuitement, sans franchise et sans deplacement supplementaire. Sur les contrats d'entretien annuels (commerces du centre Aix soumis a fermeture nocturne quotidienne, commerces des Milles avec usage intensif), la garantie est tacitement renouvelee a chaque visite preventive.`,
  },
  {
    q: "Le mistral peut-il abimer mon rideau metallique ?",
    a: "Oui, le mistral qui descend des Alpilles et de la chaine de l'Etoile vers la plaine aixoise impose des contraintes specifiques. Sur les longues lames (> 3,50 m) exposees plein nord-ouest, les rafales repetees torsionnent les lames pleines et descellent progressivement les coulisses si elles ne sont pas montees en double scellement chimique. ${siteConfig.brand} verifie systematiquement ce point lors de la visite annuelle d'entretien : serrage des fixations, etat des butees, lubrification renforcee des axes pour absorber les vibrations.",
  },
  {
    q: `${siteConfig.brand} fabrique-t-il des rideaux metalliques sur-mesure pour les bastides aixoises ?`,
    a: "Oui. Les bastides du Tholonet, de Vauvenargues ou de Puyricard ont souvent des ouvertures non standard (linteaux cintres, largeurs > 4 m, hauteurs reduites sous voutes) qui rendent impossible la pose d'un tablier catalogue. Notre atelier produit des lames acier galvanise, aluminium thermolaque ou inox brosse aux dimensions exactes, ainsi que des axes et coulisses sur-mesure. Delai standard 5 jours ouvres, ramene a 4 heures sur urgence pour le remplacement d'une seule lame ou d'un axe.",
  },
  {
    q: "Le centre historique d'Aix impose-t-il des contraintes esthetiques ?",
    a: "Sur le perimetre des Batiments de France (secteur sauvegarde du Mazarin et Vieil-Aix), les facades classees exigent des tabliers discrets, generalement en teintes neutres mates (gris fer, beige sable, vert olive sourdine) coordonnees avec le calcaire d'Aix. ${siteConfig.brand} dispose d'un nuancier RAL agree par l'Architecte des Batiments de France et propose des lames micro-perforees qui preservent la vitrine eclairee la nuit (cas frequent pour les bijouteries et antiquaires de la rue d'Italie).",
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
