// CATALOGUE VISUEL DRM CLASSIFIÉ
// Règles strictes :
// - heroBg / finalCtaBg / preFooterBg : SEULEMENT photos avec fond/contexte
// - productIsolated : NE JAMAIS utiliser en arrière-plan (sans fond = moche en bg)
// - intervention : photos terrain technicien en action (OK en bg sombre)
// - realisation : commerces finis (OK en bg)
// - secteur : types de commerces (OK en bg)

/**
 * Photos avec fond, scène réelle ou large plan — adaptées comme image de fond.
 * Inclut interventions terrain, réalisations sur façades, secteurs.
 */
export const bgSuitablePool = [
  // Heroes natifs du catalogue
  "hero-bg-technicien-drm.webp",
  "hero-rideau-metallique-industriel.webp",
  "hero-rideau-lame-pleine.webp",
  "hero-rideau-micro-perforee.webp",
  "hero-rideau-polycarbonate.webp",
  "hero-grille-extensible.webp",
  // Interventions terrain (techniciens en action sur site)
  "depannage-rideau-metallique-drm-france-rm.webp",
  "depannage-rideau-metallique-drm-services.webp",
  "depannage-rideau-metallique-rm-drm-france.webp",
  "depannage-rideau-metallique-drm.webp",
  "depannage-rideau-metallique-drm-reparation.webp",
  "installation-rideau-metallique-drm.webp",
  "installation-rideau-metallique-sur-mesure-france.webp",
  "installation-rideau-metallique-anti-effraction.webp",
  "entretien-rideau-metallique-drm-france.webp",
  "entretien-rideau-metallique-drm-rideau-metallique.webp",
  "fabrication-rideau-metallique-entreprise-drm.webp",
  "fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
  // Réalisations sur commerces finis (facades)
  "realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
  "realisation-rideau-metallique-lame-pleine-commerce.webp",
  "realisation-rideau-metallique-lame-pleine-industriel-france.webp",
  "realisation-rideau-metallique-lame-pleine-en-applique-france.webp",
  "realisation-rideau-metallique-lame-pleinela-cantoche-france.webp",
  "realisation-rideau-metallique-lame-pleinela-jdsport-france.webp",
  "realisation-rideau-metallique-lame-pleine.webp",
  "realisation-rideau-metallique-garage.webp",
  "realisation-drm-rideau-metallique-lame-pleine.webp",
  "rideau-metallique-cobra-realisation-.webp",
  "rideau-metallique-cobra-realisation-drm.webp",
  "rideau-metallique-grille-bijoutier-realisation.webp",
  "rideau-metallique-grille-extensible-drm.webp",
  "rideau-metallique-grille-extensible-france.webp",
  "rideau-metallique-restaurant-grille-extensible.webp",
  "rideau-metallique-polycarbonate-drm-realisation.webp",
  "rideau-metallique-micro-perforee-realisation-france.webp",
  "rideau-metallique-bloque-depannage-rideau-metallique.webp",
  // Secteurs / types de commerces
  "buralistes-bars-tabac-rideau-metallique-drm.webp",
  "centres-commerciaux-rideau-metallique-drm.webp",
  "rideau-metallique-bijoutier-bijouterie.webp",
  "rideau-metallique-bijoutier-commerce.webp",
  "rideau-metallique-bijoutier-drm.webp",
  "garage-rideau-metallique-anti-effraction.webp",
];

/**
 * Visuels produits ISOLÉS sans fond (catalogue/e-commerce).
 * INTERDIT en background.
 * OK en bloc "pièces et garanties" ou "formats" (cohérent contextuellement).
 */
const productMoteurs = [
  "moteur-tubulaire-rideau-metallique-drm.webp",
  "moteur-tubulaire-simu-rideau-metallique-france.webp",
  "moteur-tubulaire-simu-rideau-metallique-france-logo-marque.webp",
  "moteur-tubulaire-simu-rideau-metallique.webp",
  "moteur-acm-76-rideau-metallique-2.webp",
  "moteur-acm-76-rideau-metallique.webp",
  "moteur-acm-76-eclate.webp",
  "moteur-lateral-sommer-gigaroll-caet.webp",
  "moteur-externe-rideau-metallique-drm.webp",
  "moteur-centris-xxl.webp",
  "moteur-raptor-76.webp",
  "kit-moteur-complet-acm-rideau-metallique.webp",
  "kit-moteur-complet-acm-rideau-metallique-2.webp",
];

const productLames = [
  "lame-pleine-rideau-metallique-france.webp",
  "lame-pleine-rideau-metallique.webp",
  "lame-p57-rideau-metallique-france.webp",
  "lame-p57-rideau-metallique.webp",
  "lame-finale-p90-rideau-metallique.webp",
  "lame-finale-p140-rideau-metallique.webp",
  "lame-micro-perforee-rideau-metallique.webp",
  "lame-micro-perfore-rideau-metallique-france.webp",
  "lame-micro-perfore-rideau-metallique-thermolaque.webp",
  "lame-polycarbonate-rideau-metallique.webp",
  "lame-polycarbonate-rideau-metallique-france.webp",
  "lame-grille-cobra-rideau-metallique.webp",
  "lame-grille-bijoutier-rideau-metallique.webp",
  "lame-grille-bijoutier-rideau-metallique-france-drm.webp",
  "lame-finale-rideau-metallique-france.webp",
  "lame-finale-avec-serrure-rideau-metallique-france.webp",
  "lame-finale-avec-serrure-rideau-metallique-rm.webp",
  "lame-finale-detail.webp",
  "grille-cobra-rideau-metallique.webp",
  "grille-extensible-rideau-metallique-france.webp",
  "grille-extensible-metallique-france.webp",
  "grille-metallique-extensible-thermolaquer.webp",
];

const productAxes = [
  "axe-central-motorise-rideau-metallique.webp",
  "axe-motorise-rideau-metallique-rm.webp",
  "axe-motorise-rideau-metallique-2.webp",
  "axe-motorise-rideau-metallique-poser.webp",
  "axe-motorise-rideau-metallique-poser-france.webp",
  "axe-tubulaire-rideau-metallique-france-drm-1.webp",
  "axe-enroulement-rideau-metallique-france.webp",
  "axe-motorise-vue-eclate-rideau-metallique.webp",
];

const productSerruresAccessoires = [
  "serrure-rideau-metallique-profil-europeen-lame-finale-avec-cylindre.webp",
  "serrure-lame-finale-rideau-metallique.webp",
  "_serrure-rideau-metallique-profil-rond-lame-finale.webp",
  "poignee-lame-finale-rideau-metallique.webp",
  "sabot-lame-finale-rideau-metallique.webp",
  "boite-ressort-rideau-metallique-france.webp",
  "centrale-de-commande-m-plus-masinara-rideau-metallique.webp",
  "centrale-commande-rideau-metallique-france.webp",
  "slimbox-boitiersecurise-deblocage-rideau-metallique.webp",
];

const productCoffres = [
  "coffre-2-faces-sur-mesure-rideau-metallique.webp",
  "coffre-3-faces-sur-mesure-rideau-metallique.webp",
  "coffre-imposte-sur-mesure-rideau-metallique.webp",
  "coffre-sur-mesure-rideau-metallique.webp",
  "coffre-2-faces-rideau-metallique.webp",
  "coffre-3-faces-rideau-metallique.webp",
  "coffre-securite-blindor-acm.webp",
];

/** Photos terrain — techniciens en action (OK en bg avec overlay) */
const interventionScenes = [
  "hero-bg-technicien-drm.webp",
  "depannage-rideau-metallique-drm-france-rm.webp",
  "depannage-rideau-metallique-drm-services.webp",
  "depannage-rideau-metallique-rm-drm-france.webp",
  "depannage-rideau-metallique-drm-reparation.webp",
  "installation-rideau-metallique-drm.webp",
  "installation-rideau-metallique-sur-mesure-france.webp",
  "installation-rideau-metallique-anti-effraction.webp",
  "entretien-rideau-metallique-drm-france.webp",
  "fabrication-rideau-metallique-entreprise-drm.webp",
  "fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
  "fabrication-francaise-rideau-metallique.webp",
  "pose-axe-rideau-metallique-drm.webp",
  "pose-coulisse-tablier-rideau-metallique.webp",
  "raccordement-rideau-metallique-drm.webp",
  "prise-de-mesure-rideau-metallique-drm.webp",
  "test-reglage-axe-rideau-metallique-drm.webp",
  "test-rideau-metallique-drm.webp",
  "preparation-axe-rideau-metallique-drm.webp",
  "depose-axe-rideau-metallique-drm.webp",
  "fabrication-axe-rideau-metallique-express.webp",
  "fabrication-axe-rideau-metallique-france.webp",
  "fabrication-axe-rideau-metallique-locale.webp",
];

/** Réalisations - commerces avec rideau installé (OK en bg) */
const realisations = [
  "realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
  "realisation-rideau-metallique-lame-pleine-commerce.webp",
  "realisation-rideau-metallique-lame-pleine-industriel-france.webp",
  "realisation-rideau-metallique-lame-pleine-en-applique-france.webp",
  "realisation-rideau-metallique-lame-pleine.webp",
  "realisation-rideau-metallique-garage.webp",
  "realisation-drm-rideau-metallique-lame-pleine.webp",
  "rideau-metallique-cobra-realisation-.webp",
  "rideau-metallique-cobra-realisation-drm.webp",
  "rideau-metallique-grille-bijoutier-realisation.webp",
  "rideau-metallique-grille-extensible-drm.webp",
  "rideau-metallique-grille-extensible-france.webp",
  "rideau-metallique-restaurant-grille-extensible.webp",
  "rideau-metallique-polycarbonate-drm-realisation.webp",
  "rideau-metallique-micro-perforee-realisation-france.webp",
];

const secteurs = [
  "buralistes-bars-tabac-rideau-metallique-drm.webp",
  "centres-commerciaux-rideau-metallique-drm.webp",
  "rideau-metallique-bijoutier-bijouterie.webp",
  "rideau-metallique-bijoutier-commerce.webp",
  "rideau-metallique-bijoutier-drm.webp",
  "garage-rideau-metallique-anti-effraction.webp",
];

/**
 * Catalogue par service avec usage explicit.
 * - hero : image hero/CTA bg (TOUJOURS bg-suitable, jamais produit isolé)
 * - intervention : photo terrain technicien (pour blocs méthode/préparation/diagnostic)
 * - product : produits isolés (pour blocs pièces/garanties/formats — cohérent)
 * - realisation : commerce fini (pour cards/galleries/bg secondaires)
 */
export interface ServiceImageSet {
  hero: string;
  preFooterBg: string;
  intervention: string[];
  product: string[];
  realisation: string[];
}

export const serviceImages: Record<string, ServiceImageSet> = {
  depannage: {
    hero: "depannage-rideau-metallique-drm-france-rm.webp",
    preFooterBg: "depannage-rideau-metallique-drm-services.webp",
    intervention: [
      "depannage-rideau-metallique-drm-france-rm.webp",
      "depannage-rideau-metallique-drm-services.webp",
      "depannage-rideau-metallique-rm-drm-france.webp",
      "depannage-rideau-metallique-drm-reparation.webp",
      "depannage-rideau-metallique-drm.webp",
    ],
    product: [
      "moteur-acm-76-eclate.webp",
      "kit-moteur-complet-acm-rideau-metallique.webp",
      "lame-finale-avec-serrure-rideau-metallique-france.webp",
    ],
    realisation: [
      "rideau-metallique-bloque-depannage-rideau-metallique.webp",
      "realisation-rideau-metallique-lame-pleine-commerce.webp",
    ],
  },
  installation: {
    hero: "installation-rideau-metallique-drm.webp",
    preFooterBg: "installation-rideau-metallique-sur-mesure-france.webp",
    intervention: [
      "installation-rideau-metallique-drm.webp",
      "installation-rideau-metallique-sur-mesure-france.webp",
      "installation-rideau-metallique-anti-effraction.webp",
      "pose-axe-rideau-metallique-drm.webp",
      "pose-coulisse-tablier-rideau-metallique.webp",
      "raccordement-rideau-metallique-drm.webp",
      "test-rideau-metallique-drm.webp",
      "prise-de-mesure-rideau-metallique-drm.webp",
    ],
    product: [
      "lame-pleine-rideau-metallique-france.webp",
      "axe-central-motorise-rideau-metallique.webp",
      "coffre-2-faces-sur-mesure-rideau-metallique.webp",
    ],
    realisation: [
      "realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
      "realisation-rideau-metallique-lame-pleine-commerce.webp",
      "realisation-rideau-metallique-lame-pleine-en-applique-france.webp",
      "realisation-rideau-metallique-lame-pleine.webp",
    ],
  },
  reparation: {
    hero: "depannage-rideau-metallique-drm-reparation.webp",
    preFooterBg: "depannage-rideau-metallique-drm-services.webp",
    intervention: [
      "depannage-rideau-metallique-drm-reparation.webp",
      "depannage-rideau-metallique-drm-services.webp",
      "depose-axe-rideau-metallique-drm.webp",
      "preparation-axe-rideau-metallique-drm.webp",
      "test-reglage-axe-rideau-metallique-drm.webp",
    ],
    product: [
      "lame-finale-rideau-metallique-france.webp",
      "lame-finale-detail.webp",
      "moteur-acm-76-eclate.webp",
      "axe-motorise-vue-eclate-rideau-metallique.webp",
    ],
    realisation: [
      "realisation-rideau-metallique-lame-pleine.webp",
      "rideau-metallique-bloque-depannage-rideau-metallique.webp",
    ],
  },
  motorisation: {
    // Hero motorisation = atelier ou pose axe motorisé (PAS un moteur isolé)
    hero: "raccordement-rideau-metallique-drm.webp",
    preFooterBg: "installation-rideau-metallique-drm.webp",
    intervention: [
      "raccordement-rideau-metallique-drm.webp",
      "test-reglage-axe-rideau-metallique-drm.webp",
      "pose-axe-rideau-metallique-drm.webp",
      "installation-rideau-metallique-drm.webp",
    ],
    product: [
      ...productMoteurs,
    ],
    realisation: [
      "realisation-rideau-metallique-lame-pleine-commerce.webp",
      "realisation-drm-rideau-metallique-lame-pleine.webp",
    ],
  },
  deblocage: {
    // Hero deblocage = intervention terrain (PAS un boitier isolé)
    hero: "depannage-rideau-metallique-drm-france-rm.webp",
    preFooterBg: "depannage-rideau-metallique-drm-services.webp",
    intervention: [
      "depannage-rideau-metallique-drm-france-rm.webp",
      "depannage-rideau-metallique-drm-services.webp",
      "depannage-rideau-metallique-drm-reparation.webp",
      "depannage-rideau-metallique-drm.webp",
    ],
    product: [
      "slimbox-boitiersecurise-deblocage-rideau-metallique.webp",
      "boite-a-cle-encastree-rideau-metallique-2.webp",
      "boitier-a-cle-debrayable-vue-graphique-rideau-metallique.webp",
    ],
    realisation: [
      "rideau-metallique-bloque-depannage-rideau-metallique.webp",
      "realisation-rideau-metallique-lame-pleine-commerce.webp",
    ],
  },
  entretien: {
    hero: "entretien-rideau-metallique-drm-france.webp",
    preFooterBg: "entretien-rideau-metallique-drm-rideau-metallique.webp",
    intervention: [
      "entretien-rideau-metallique-drm-france.webp",
      "entretien-rideau-metallique-drm-rideau-metallique.webp",
      "test-reglage-axe-rideau-metallique-drm.webp",
      "preparation-axe-rideau-metallique-drm.webp",
    ],
    product: [
      "lame-finale-detail.webp",
      "boite-ressort-rideau-metallique-france.webp",
      "lame-finale-avec-serrure-rideau-metallique-france.webp",
    ],
    realisation: [
      "realisation-rideau-metallique-lame-pleine.webp",
      "realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
    ],
  },
  fabrication: {
    hero: "fabrication-rideau-metallique-entreprise-drm.webp",
    preFooterBg: "fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
    intervention: [
      "fabrication-rideau-metallique-entreprise-drm.webp",
      "fabrication-rideau-metallique-rideau-metallique-france-drm.webp",
      "fabrication-francaise-rideau-metallique.webp",
      "fabrication-axe-rideau-metallique-express.webp",
      "fabrication-axe-rideau-metallique-france.webp",
      "fabrication-axe-rideau-metallique-locale.webp",
    ],
    product: [
      ...productLames.slice(0, 6),
      "coffre-sur-mesure-rideau-metallique.webp",
    ],
    realisation: [
      "realisation-rideau-metallique-lame-pleine-industriel-france.webp",
      "realisation-rideau-metallique-lame-pleine-en-applique-france.webp",
    ],
  },
};

function fnvHash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function uniqueShuffle(arr: string[], seed: number, count: number): string[] {
  const rng = mulberry32(seed);
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length)).map((f) => `/images/gallery/${f}`);
}

/** Hero/CTA bg pour une page service+zone (toujours bg-suitable). */
export function pickServiceHero(serviceId: string): string {
  const set = serviceImages[serviceId] ?? serviceImages.depannage;
  return `/images/gallery/${set.hero}`;
}

/** Bg du final-CTA / pre-footer — toujours bg-suitable, rotation par seed. */
export function pickPreFooterBg(serviceId: string, zoneSlug: string): string {
  const seed = fnvHash(`prefooter::${serviceId}::${zoneSlug}`);
  // Use intervention pool (jamais produit)
  const pool = serviceImages[serviceId]?.intervention ?? interventionScenes;
  return uniqueShuffle(pool, seed, 1)[0];
}

/**
 * Génère 6 images pour la page [service_zone] avec attribution sémantique :
 * - img1 (Bloc Méthode/Diagnostic) → intervention
 * - img2 (Bloc Pièces/Garanties) → product (cohérent : on parle des pièces)
 * - img3 (Bloc Formats) → product OU realisation (montre les formats)
 * - img4 (Bloc Préparation) → intervention (scène atelier/terrain)
 * - img5 (Final CTA bg) → intervention OR realisation (bg-suitable)
 * - img6 (Réserve / divers) → realisation
 */
export function pickServiceZoneImages(serviceId: string, zoneSlug: string): {
  hero: string;
  block1: string; // methode -> intervention
  block2: string; // pieces -> product
  block3: string; // formats -> product (lames/grilles)
  block4: string; // preparation -> intervention
  finalCtaBg: string; // bg -> intervention OR realisation
  extras: string[]; // 2 réalisations pour cards / fallback
} {
  const set = serviceImages[serviceId] ?? serviceImages.depannage;
  const baseSeed = fnvHash(`${serviceId}::${zoneSlug}`);

  const interv = uniqueShuffle(set.intervention, baseSeed + 1, set.intervention.length);
  const real = uniqueShuffle(set.realisation, baseSeed + 3, set.realisation.length);
  const generalBg = uniqueShuffle(bgSuitablePool, baseSeed + 5, bgSuitablePool.length);
  const interventionFallback = uniqueShuffle(interventionScenes, baseSeed + 6, interventionScenes.length);
  const realisationFallback = uniqueShuffle(realisations, baseSeed + 7, realisations.length);

  // Compose 4 blocks: TOUS bg-suitable (intervention/realisation/secteur). Plus aucun visuel
  // produit isole dans les blocs principaux (regle 6.7.B — Biarritz). Les pieces produits
  // restent disponibles via productImages / interventionScenes si besoin futur.
  const pickFrom = (pools: string[][], idx: number): string => {
    for (const p of pools) {
      if (p[idx]) return p[idx];
    }
    return generalBg[idx % generalBg.length];
  };
  const block1 = pickFrom([interv, interventionFallback, generalBg], 0);
  const block2 = pickFrom([real, realisationFallback, interv, generalBg], 0);
  const block3 = pickFrom([real, realisationFallback, interv, generalBg], 1);
  const block4 = pickFrom([interv, interventionFallback, generalBg], 1);
  const finalCtaCandidate = pickFrom([real, realisationFallback, interv, generalBg], 2);
  const finalCtaBg = finalCtaCandidate !== block1 && finalCtaCandidate !== block2
    ? finalCtaCandidate
    : (generalBg.find((x) => x !== block1 && x !== block2 && x !== block3) ?? generalBg[4]);
  const extras = [real[2], real[3]].filter((x): x is string => !!x).slice(0, 2);
  if (extras.length < 2) extras.push(...realisationFallback.slice(0, 2 - extras.length));

  return {
    hero: pickServiceHero(serviceId),
    block1,
    block2,
    block3,
    block4,
    finalCtaBg,
    extras,
  };
}

/** Pour la liste des 7 services sur la homepage. */
export function pickServiceCardImage(serviceId: string): string {
  const set = serviceImages[serviceId] ?? serviceImages.depannage;
  return `/images/gallery/${set.intervention[0] ?? set.hero}`;
}

/** Pool de hero images pour rotation homepage (hero-suitable seulement). */
export const homepageHeroPool = [
  "hero-rideau-metallique-industriel.webp",
  "hero-bg-technicien-drm.webp",
  "hero-rideau-lame-pleine.webp",
  "depannage-rideau-metallique-drm-france-rm.webp",
  "installation-rideau-metallique-drm.webp",
  "fabrication-rideau-metallique-entreprise-drm.webp",
];
