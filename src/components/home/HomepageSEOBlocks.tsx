import Link from "next/link";
import { siteConfig } from "@/config/site";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");

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
    category: "Ancrage local : Cours Mirabeau et Pays d'Aix",
    title: `Rideau metallique au pied de la Sainte-Victoire : ${siteConfig.experience} ans d'ancrage aixois`,
    paragraphs: [
      `Du Cours Mirabeau aux ruelles du Mazarin, du quartier Sextius-Mirabeau jusqu'aux bastides du Tholonet, le tissu commercant aixois a une signature : facades calcaire d'epoque XVIIIe, vitrines basses sous arcades baroques, et fermetures nocturnes strictement imposees par la ville. ${siteConfig.brand} intervient sur ce <strong>rideau metallique</strong> patrimonial depuis plus de ${siteConfig.experience} ans : boutiques de luxe du Mazarin, antiquaires de la rue Granet, restaurants de la place des Cardeurs, galeries d'art de la rue Espariat.`,
      `Notre atelier dessert en boucle l'agglomeration : Aix centre historique, pole d'activites des Milles (Pioline, Decathlon, retail park), reconversion industrielle de Gardanne (ancien bassin minier Pechiney), bastides du Tholonet et de Vauvenargues, villages perches d'Eguilles, Mimet et Ventabren. Chaque secteur a ses contraintes : <strong>mistral</strong> qui torsionne les lames longues, soleil mediterraneen qui blanchit les revetements thermolaques, calcaire pulverulent qui grippe les coulisses non protegees.`,
      `Cette connaissance terrain change le diagnostic. Un rideau bloque au pied de la cathedrale Saint-Sauveur n'a pas les memes causes qu'un sectionnel industriel des Milles ou qu'une fermeture residentielle a Puyricard. Pour chaque <strong>depannage de rideau metallique a ${siteConfig.city}</strong>, notre intervention se cale sur la typologie de batiment, la marque originale (souvent ACM ou Sommer sur l'ancien aixois, Somfy sur le neuf des Milles) et l'historique d'entretien.`,
    ],
    image: "/images/gallery/fabrication-rideau-metallique-entreprise-drm.webp",
    imageAlt: `Atelier ${siteConfig.brand} pour la fabrication de rideaux metalliques en Pays d'Aix`,
    ctaHref: "/contact/",
    ctaLabel: "Decouvrir nos interventions a Aix",
  },
  {
    category: "Le cycle de vie complet d'un rideau metallique aixois",
    title: `Sept metiers du rideau metallique reunis sous un seul artisan a ${siteConfig.city}`,
    paragraphs: [
      `${siteConfig.brand} couvre tout le cycle de vie d'une fermeture metallique : <strong>depannage</strong> urgent 24h/24 quand un rideau reste bloque a la fermeture rue d'Italie un samedi soir, <strong>installation</strong> neuve sur-mesure pour un nouveau showroom du retail park Plan-de-Campagne, <strong>reparation</strong> de lames pliees apres une rafale de mistral, <strong>motorisation</strong> d'un ancien tablier manuel d'une boutique du Vieil-Aix, <strong>deblocage</strong> express d'une grille extensible coincee a Gardanne, <strong>entretien</strong> annuel sur les vitrines du Mazarin, et <strong>fabrication</strong> en atelier pour les dimensions hors standards des bastides aixoises.`,
      `Le meme technicien revient pour entretenir, reparer et installer : c'est la regle ${siteConfig.brand}. Sur Aix-en-Provence et le Pays d'Aix, cette continuite est rare — la plupart des concurrents sous-traitent l'entretien a des societes nationales qui changent d'equipe tous les six mois. Nos clients commercants du cours Mirabeau, restaurateurs de Saint-Cannat, gerants de showrooms des Milles ou artisans de Trets ont notre technicien referent dans leurs contacts directs.`,
      `Nos <strong>contrats d'entretien annuels</strong> (1 a 4 visites/an selon le rythme d'utilisation et la categorie de batiment) reduisent de 60 % les pannes constatees sur le parc. Sur les commerces du centre Aix, ou la fermeture quotidienne est imposee par arrete municipal, la maintenance preventive evite les blocages aux heures de fermeture qui coutent un retard ouverture le lendemain. Voir le detail des <Link href="/depannage-rideau-metallique-${citySlug}/">interventions de depannage</Link> ou nos zones desservies dans le Pays d'Aix.`,
    ],
    image: "/images/gallery/installation-rideau-metallique-drm.webp",
    imageAlt: `Installation de rideau metallique a ${siteConfig.city} et en Pays d'Aix`,
    ctaHref: `/depannage-rideau-metallique-${citySlug}/`,
    ctaLabel: "Voir tous nos services aixois",
  },
  {
    category: "Marques et pieces : stock dedie Pays d'Aix",
    title: "Stock permanent Somfy, Simu, ACM, Came : intervention bouclee en une visite",
    paragraphs: [
      `Le parc rideau metallique aixois est tres heterogene. Les commerces historiques du Vieil-Aix tournent encore sur des moteurs centraux <strong>ACM Titan</strong> et <strong>Sommer GIGAroll</strong> installes dans les annees 90, parfaitement entretenables mais dont les pieces ne se trouvent plus en grande surface professionnelle. Les commerces neufs des Milles et de la Pioline ont des <strong>Somfy RS100</strong>, <strong>Simu T5</strong>, <strong>Came AXO</strong>, <strong>BFT Argo</strong> ou <strong>Nice Era</strong>. Notre vehicule atelier embarque les references compatibles avec ces deux univers.`,
      `Stock permanent : lames pleines P57 (0,6 mm) et P90 (0,8 mm) en acier galvanise et aluminium thermolaque, lames micro-perforees pour les vitrines (boutiques du Cours Mirabeau qui veulent un retro-eclairage rideau ferme), grilles extensibles cobra pour les pharmacies de garde, ressorts de compensation, condensateurs moteurs, telecommandes JCM Aleta et BFT Mitto, serrures profil europeen et 4 points. <strong>90 % des depannages sont boucles en une seule visite</strong> a Aix-en-Provence et autour.`,
      `Travailler avec des pieces d'origine garantit deux choses : <strong>preserver la garantie constructeur</strong> (une piece non agreee invalide la garantie initiale du tablier), et tenir dans le temps face aux specificites locales (calcaire pulverulent qui ronge les axes peu lubrifies, soleil ete qui chauffe les coffres expose plein sud, mistral qui descend des Alpilles et fait vibrer les coulisses).`,
    ],
    image: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
    imageAlt: "Moteurs Somfy, Simu et ACM pour rideau metallique aixois",
    ctaHref: `/motorisation-rideau-metallique-${citySlug}/`,
    ctaLabel: "Decouvrir la motorisation",
  },
  {
    category: "Engagement local : devis ferme, garantie 2 ans, disponibilite Pays d'Aix",
    title: `Devis ferme avant intervention, garantie 2 ans : la regle ${siteConfig.brand}`,
    paragraphs: [
      `Avant toute intervention sur un <strong>rideau metallique a ${siteConfig.city}</strong>, notre technicien etablit un <strong>devis ligne par ligne</strong>, signe sur place : main-d'oeuvre detaillee, pieces facturees au tarif catalogue constructeur, deplacement inclus sur Aix centre, Les Milles, Luynes, Puyricard et Le Tholonet (les communes proches sont integrees au forfait). En urgence nuit/week-end le tarif est majore selon une grille publique et annoncee avant l'intervention. Le prix annonce est le prix paye, sans surfacturation post-intervention.`,
      `Toutes les interventions sont couvertes par une <strong>garantie 2 ans sur les pieces neuves</strong> et <strong>1 an sur la main-d'oeuvre</strong>, mentionnee au devis et a la facture. En cas de defaillance dans la periode, ${siteConfig.brand} reintervient gratuitement, sans franchise, ni deplacement supplementaire. Le commercant ou l'artisan aixois sait a quoi s'en tenir : c'est la difference entre un artisan local installe et un sous-traitant national qui disparait apres la facture.`,
      `Notre disponibilite couvre <strong>24h/24, 7j/7</strong>, dimanches et jours feries inclus, sur toute l'agglomeration aixoise et le Pays d'Aix : Aix centre historique, Mazarin, Sextius-Mirabeau, Les Milles, Luynes, Le Tholonet, Puyricard, Eguilles, Venelles, Meyreuil, Bouc-Bel-Air, Cabries, Ventabren, Gardanne, Saint-Marc-Jaumegarde, Simiane-Collongue, Mimet, Greasque, Vauvenargues, Fuveau, Saint-Cannat, Peynier, Trets, Rognes, Lambesc. Devis gratuit en 24h via notre <Link href="/contact/">formulaire</Link>.`,
    ],
    image: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
    imageAlt: `Devis transparent et garantie ${siteConfig.brand} sur rideau metallique en Pays d'Aix`,
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
    <section className="py-12 md:py-16">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex flex-col gap-16 md:gap-20">
        {blocks.map((b, idx) => {
          const reverse = idx % 2 === 1;
          const bg = idx % 2 === 0 ? "#FFFFFF" : "#FAF7F0";
          return (
            <article
              key={b.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center rounded-[16px] p-6 md:p-10`}
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
