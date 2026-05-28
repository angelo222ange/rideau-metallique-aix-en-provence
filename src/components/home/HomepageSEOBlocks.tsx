import Link from "next/link";
import { siteConfig, zones } from "@/config/site";

const primaryZoneSlug = zones[0].slug;

interface SEOBlock {
  category: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  ctaHref: string;
  ctaLabel: string;
}

const blocks: SEOBlock[] = [
  {
    category: "Notre histoire et notre territoire",
    title: `${siteConfig.experience} ans d'expertise au service du rideau metallique sur le Pays d'Aix`,
    paragraphs: [
      `DRM ${siteConfig.city} intervient depuis plus de ${siteConfig.experience} ans sur le rideau metallique des commerces, ateliers et industriels du Pays d'Aix Nord. Notre atelier de fabrication est situe sur le Pays d'Aix, ce qui nous permet de produire des lames, axes et coulisses sur-mesure en quelques heures pour les cas urgents.`,
      `Notre equipe couvre l'integralite du secteur de Aix-en-Provence, Les Milles, Gardanne ainsi que les communes de Le Tholonet, Trets, Lambesc, Eguilles et les villages provencals alentour. Chaque technicien DRM est forme aux dernieres normes constructeurs et aux specificites locales : exposition aux humidite hivernale, vent aixois, contraintes des batiments historiques aixois.`,
      `Cette implantation locale change tout : <strong>delai d'intervention sous ${siteConfig.delai} minutes</strong> en horaires ouvrables, fabrication sur-mesure en moins de 4 heures, connaissance des contraintes d'acces et des reglementations communales. ${siteConfig.brand} est l'acteur historique du <strong>depannage de rideau metallique</strong> au Pays d'Aix.`,
    ],
    image: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
    imageAlt: `Atelier DRM ${siteConfig.city} pour la fabrication de rideaux metalliques`,
    ctaHref: "/contact/",
    ctaLabel: "Decouvrir nos interventions",
  },
  {
    category: "Notre chaine de valeur complete",
    title: `Sept services rideau metallique pour les professionnels de ${siteConfig.city}`,
    paragraphs: [
      `${siteConfig.brand} couvre l'ensemble du cycle de vie d'un <strong>rideau metallique</strong> : <strong>depannage</strong> urgent 24h/24, <strong>installation</strong> neuve sur-mesure, <strong>reparation</strong> de lames et moteurs, <strong>motorisation</strong> de fermetures manuelles, <strong>deblocage</strong> express, <strong>entretien</strong> preventif annuel et <strong>fabrication</strong> en atelier.`,
      `Chaque service est assure par les memes techniciens DRM ${siteConfig.city}, ce qui garantit une continuite parfaite : le professionnel qui installe votre rideau metallique aujourd'hui sera disponible demain pour le depanner ou l'entretenir. Cette logique de proximite est aujourd'hui rare sur le Pays d'Aix, ou la plupart des intervenants sous-traitent ou font tourner les equipes.`,
      `Nos contrats d'entretien annuels couvrent jusqu'a 4 visites par an avec verification complete (axe, ressorts, moteur, coulisses, serrure). Resultat : 60 % de pannes en moins constatees chez nos clients sous contrat. Decouvrez nos <Link href="/depannage-rideau-metallique-${primaryZoneSlug}/">interventions de depannage</Link> ou consultez le detail de chaque service.`,
    ],
    image: "/images/gallery/installation-rideau-metallique-drm.webp",
    imageAlt: `Installation de rideau metallique a ${siteConfig.city} par DRM`,
    ctaHref: `/depannage-rideau-metallique-${primaryZoneSlug}/`,
    ctaLabel: "Voir tous nos services",
  },
  {
    category: "Marques partenaires et qualite des pieces",
    title: "Pieces d'origine Somfy, Simu, ACM, Came : la garantie d'une intervention fiable",
    paragraphs: [
      `Les rideaux metalliques modernes embarquent des composants de plus en plus techniques : moteurs tubulaires <strong>Somfy RS100</strong> et <strong>Simu T5</strong>, moteurs centraux <strong>ACM Titan</strong> et <strong>Centris XXL</strong>, motorisations <strong>Came</strong> et <strong>BFT</strong>, automatismes <strong>Nice Era</strong>, moteurs lateraux <strong>Sommer GIGAroll</strong>. DRM ${siteConfig.city} maitrise l'integralite de ces references et stocke les pieces d'origine.`,
      `Ce stock dedie evite l'attente d'une commande aupres d'un grossiste national (delai standard : 48 a 72 heures) et permet de finaliser 90 % des interventions en une seule visite. Notre vehicule atelier contient en permanence : lames pleines P57 (0,6 mm) et P90 (0,8 mm), ressorts de compensation, condensateurs, telecommandes, serrures profil europeen et 4 points.`,
      `Travailler avec des pieces d'origine, c'est aussi <strong>preserver la garantie constructeur</strong> de votre rideau metallique. Une piece non agreee invalide automatiquement la garantie initiale : DRM ${siteConfig.city} choisit la voie de la conformite, plus exigeante mais durable.`,
    ],
    image: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
    imageAlt: "Moteurs Somfy, Simu et ACM pour rideau metallique",
    ctaHref: `/motorisation-rideau-metallique-${primaryZoneSlug}/`,
    ctaLabel: "Decouvrir la motorisation",
  },
  {
    category: "Engagement transparence et garantie",
    title: "Devis avant intervention, garantie 2 ans, disponibilite 24h/24",
    paragraphs: [
      `La transparence est la regle DRM ${siteConfig.city} depuis ${siteConfig.experience} ans : avant toute intervention, notre technicien etablit un <strong>devis ligne par ligne</strong>, signe sur place. Aucun forfait deplacement cache, aucune surfacturation post-intervention. Le prix annonce est le prix paye, en horaires ouvrables comme en urgence nuit / week-end.`,
      `Toutes nos interventions sont couvertes par une <strong>garantie 2 ans sur les pieces neuves</strong> et <strong>1 an sur la main-d'oeuvre</strong>. La garantie est mentionnee au devis et a la facture. En cas de defaillance dans la periode, DRM ${siteConfig.city} reintervient gratuitement, sans franchise et sans deplacement supplementaire.`,
      `Notre disponibilite est totale : <strong>24h/24, 7j/7</strong>, weekends et jours feries inclus. Que vous soyez sur ${siteConfig.city} centre, Les Milles, Gardanne, Le Tholonet ou un village provencal alentour, le delai d'intervention reste identique. Devis gratuit en 24h via notre <Link href="/contact/">formulaire de contact</Link>.`,
    ],
    image: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
    imageAlt: `Devis transparent et garantie DRM ${siteConfig.city} sur rideau metallique`,
    ctaHref: "/contact/",
    ctaLabel: "Demander un devis gratuit",
  },
];

function renderParagraph(text: string, key: number) {
  const linkRegex = /<Link href="([^"]+)">([^<]+)<\/Link>/g;
  const parts: (string | { href: string; label: string })[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = linkRegex.exec(text)) !== null) {
    if (m.index > lastIndex) parts.push(text.slice(lastIndex, m.index));
    parts.push({ href: m[1], label: m[2] });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));

  return (
    <p key={key} className="text-[#4F5648] text-[15px] md:text-[16px] leading-[1.75]">
      {parts.map((p, i) => {
        if (typeof p === "string") {
          return (
            <span
              key={i}
              dangerouslySetInnerHTML={{ __html: p.replace(/<strong>/g, '<strong class="text-[#181C16] font-semibold">') }}
            />
          );
        }
        return (
          <Link key={i} href={p.href} className="text-[#C28840] font-semibold underline hover:text-[#A66E2E]">
            {p.label}
          </Link>
        );
      })}
    </p>
  );
}

export default function HomepageSEOBlocks() {
  return (
    <section className="py-16 md:py-20 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col gap-16 md:gap-20">
        {blocks.map((b, idx) => {
          const reverse = idx % 2 === 1;
          const bg = idx % 2 === 0 ? "#FFFFFF" : "#FAF7F0";
          return (
            <article
              key={b.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center rounded-[12px] p-6 md:p-10`}
              style={{ background: bg, direction: "ltr" }}
            >
              <div className={reverse ? "lg:order-2" : ""}>
                <span className="inline-block bg-[#2D3F2A]/10 px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#2D3F2A] font-semibold mb-4">
                  {b.category}
                </span>
                <h2 className="text-[#181C16] mb-5">{b.title}</h2>
                <div className="flex flex-col gap-4">
                  {b.paragraphs.map((p, i) => renderParagraph(p, i))}
                </div>
                <div className="mt-6">
                  <Link
                    href={b.ctaHref}
                    className="inline-flex items-center gap-2 h-12 px-6 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[14px] font-semibold rounded-[8px] transition-colors"
                  >
                    {b.ctaLabel}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className={`relative w-full h-[320px] md:h-[420px] lg:h-[520px] rounded-[12px] overflow-hidden ${reverse ? "lg:order-1" : ""}`}>
                <img
                  src={b.image}
                  alt={b.imageAlt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover" title={b.imageAlt}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
