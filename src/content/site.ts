// DRM Aix-en-Provence — content adapté du template solvance
// Mapping image intelligent : photos contextuelles en background, photos produit en object-contain
import { siteConfig as cfg } from "@/config/site";

export const nav = {
  logo: { src: "/images/logos/logo-drm-aix-en-provence.webp", alt: "DRM Aix-en-Provence", width: 40, height: 40 },
  logoLight: { src: "/images/logos/logo-drm-aix-en-provence.webp", alt: "DRM Aix-en-Provence" },
  links: [
    { label: "Accueil", href: "/" },
    { label: "Services", href: "/depannage-rideau-metallique-aix-en-provence/" },
    { label: "Zones", href: "/zones/" },
    { label: "Blog", href: "/blog/" },
    { label: "Contact", href: "/contact/" },
  ],
  cta: { label: "DEVIS GRATUIT", href: "/contact/" },
};

export const hero = {
  eyebrow: "URGENCE 24H/24 — PAYS D'AIX DEPUIS 25 ANS",
  headlinePre: "Depannage",
  headlineHighlight: "rideau metallique",
  headlinePost: `a ${cfg.city} et en Pays d'Aix, 24h/24`,
  body: "Artisan local installe au pied de la Sainte-Victoire. Intervention sous 30 minutes sur Aix centre, Les Milles, Gardanne, Le Tholonet. Devis ferme signe sur place, garantie 2 ans pieces.",
  ctas: [
    { label: "DEVIS GRATUIT", href: "/contact/", variant: "primary" as const },
    { label: "ZONES D'INTERVENTION", href: "/zones/", variant: "white" as const },
  ],
  proof: `${cfg.rating}/5 sur ${cfg.ratingCount} avis Google a ${cfg.city}`,
  avatars: [
    "/images/gallery/depannage-rideau-metallique-drm-services.webp",
    "/images/gallery/installation-rideau-metallique-drm.webp",
    "/images/gallery/fabrication-rideau-metallique-france.webp",
  ],
  bg: "/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp",
};

// Marques moteurs : on utilise les vrais logos disponibles dans public/images/marques
export const clientLogos = [
  "/images/marques/moteur-simu-rideau-metallique.webp",
  "/images/marques/moteur-acm-italian-rolling-power.webp",
  "/images/marques/logo-sommer-moteur-rideau-metallique.webp",
  "/images/marques/logo-afca-moteur-rideau-metallique.webp",
  "/images/marques/logo-masinara-moteur-rideau-metallique.webp",
  "/images/marques/logo-moteur-g-doorgate-rideau-metallique-drm.webp",
];

export const aboutSection = {
  eyebrow: "ARTISAN LOCAL AIXOIS",
  heading: `${cfg.experience} ans de rideau metallique en Pays d'Aix`,
  body: "Du Cours Mirabeau au Vieil-Aix, des bastides du Tholonet aux hangars de Gardanne, DRM Aix-en-Provence intervient sur le rideau metallique des commerces, ateliers et industriels du Pays Aixois. Atelier de fabrication local, vehicule atelier stocke en pieces ACM, Somfy, Simu, Sommer.",
  cta: { label: "DEMANDER UN DEVIS", href: "/contact/" },
  testimonial: {
    customer: `DRM ${cfg.city}`,
    customerLogoTone: "ochre",
    quote: `DRM ${cfg.city} a remplace notre moteur ACM le soir meme — boutique du Mazarin reouverte le lendemain a 9h`,
    cta: { label: "Voir les avis Google", href: "/#testimonials" },
  },
  // Photo contextuelle : technicien en intervention (homme au travail)
  manImage: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
  // Photo contextuelle : commerce avec rideau (large)
  roofImage: "/images/gallery/realisation-rideau-metallique-lame-pleine-boulangerie-france.webp",
};

export const whatWePower = {
  eyebrow: "CE QUE NOUS INTERVENONS",
  heading: "Tout le parc rideau metallique du Pays d'Aix",
  body: "Du commerce de centre Aix sous Batiments de France au sectionnel grand format du retail park Plan-de-Campagne. ACM Titan, Somfy RS100, Simu T5, Sommer GIGAroll, Came AXO, BFT Argo, Nice Era : nos techniciens maitrisent toutes les marques presentes en Pays d'Aix.",
  // Pas de video locale, on garde poster image
  video: "",
  videoPoster: "/images/gallery/installation-rideau-metallique-drm.webp",
  features: [
    {
      title: "Diagnostic precis",
      body: "15 minutes pour un diagnostic complet : axe, coulisses, moteur, serrure. Devis ferme avant toute intervention, signe sur place.",
    },
    {
      title: "Pieces d'origine",
      body: "Stock vehicule : ACM Titan, Somfy RS100, Simu T5, Sommer GIGAroll, ressorts, serrures A2P. 90% des interventions bouclees en une visite.",
    },
    {
      title: "Garantie 2 ans",
      body: "2 ans pieces neuves + 1 an main-d'oeuvre, ecrits sur le devis et la facture. Reintervention gratuite sans franchise.",
    },
  ],
};

// 7 services DRM avec photo contextuelle ou produit (object-contain si produit)
export const services = {
  eyebrow: "NOS 7 SERVICES",
  heading: "Toute la chaine de valeur du rideau metallique a Aix",
  tiles: [
    {
      title: `Depannage rideau metallique a ${cfg.city}`,
      body: `Intervention d'urgence 24h/24 a ${cfg.city}, Les Milles, Gardanne et tout le Pays d'Aix. Diagnostic en 15 minutes, devis ferme signe sur place, intervention dans la foulee.`,
      bullets: [
        "Rideau bloque a mi-hauteur ou totalement",
        "Moteur ACM, Somfy ou Simu en panne",
        "Telecommande ou condensateur defaillant",
        "Lame sortie du rail apres rafale de mistral",
        "Serrure forcee ou cylindre grippe",
      ],
      cta: { label: "DEVIS DEPANNAGE", href: `/depannage-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // Photo contextuelle : intervention reparation
      image: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
      imageKind: "context" as const,
    },
    {
      title: `Installation rideau metallique a ${cfg.city}`,
      body: "Pose neuve sur-mesure pour commerces du Mazarin, showrooms du retail park Pioline, hangars de la zone Avon. Acier galvanise norme EN 12424 anti-effraction RC2, teintes RAL agreees Batiments de France pour le centre Aix.",
      bullets: [
        "Prise de mesures gratuite sur place",
        "Fabrication sur-mesure 5 jours ouvres",
        "Pose axe, moteur, coulisses, raccordement",
        "Nuancier RAL Batiments de France (centre Aix)",
        "Garantie 2 ans pieces neuves",
      ],
      cta: { label: "DEVIS INSTALLATION", href: `/installation-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // Photo contextuelle : installation
      image: "/images/gallery/installation-rideau-metallique-anti-effraction.webp",
      imageKind: "context" as const,
    },
    {
      title: `Reparation rideau metallique a ${cfg.city}`,
      body: "Remise en etat de lames pliees apres choc, axe deforme, ressort de compensation casse, serrure forcee, moteur en court-circuit. Notre atelier fabrique les pieces sur-mesure en 4 heures pour les cas urgents.",
      bullets: [
        "Remplacement de 1 a 3 lames (P57, P90, P140)",
        "Redressage ou changement complet d'axe",
        "Remplacement ressort de compensation",
        "Remise aux normes A2P de la serrure",
        "Test final sur 3 cycles complets",
      ],
      cta: { label: "DEVIS REPARATION", href: `/reparation-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // Photo contextuelle : reparation
      image: "/images/gallery/realisation-rideau-metallique-lame-pleine.webp",
      imageKind: "context" as const,
    },
    {
      title: `Motorisation rideau metallique a ${cfg.city}`,
      body: "Passage d'un ancien rideau manuel a une motorisation electrique Somfy, Simu, ACM, Came, Nice ou Sommer. Telecommande, ouverture programmee, integration domotique. Particulierement frequent pour les commerces du Cours Mirabeau qui veulent fluidifier l'ouverture matin.",
      bullets: [
        "Etude de charge et choix moteur adapte",
        "Remplacement axe manuel par axe motorise",
        "Boitier electrique + raccordement",
        "Appairage telecommande JCM Aleta / BFT Mitto",
        "Reglage fins de course et tests",
      ],
      cta: { label: "DEVIS MOTORISATION", href: `/motorisation-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // PRODUIT DETOURE : kit moteur ACM (object-contain au rendu)
      image: "/images/gallery/kit-moteur-complet-acm-rideau-metallique.webp",
      imageKind: "product" as const,
    },
    {
      title: `Deblocage rideau metallique a ${cfg.city}`,
      body: "Liberation rapide d'un rideau coince a la fermeture ou mi-hauteur, sans degradation. Methode mecanique douce qui preserve le tablier et evite le remplacement complet quand c'est possible. Particulierement utile pour les commerces de garde a Gardanne et Aix centre.",
      bullets: [
        "Diagnostic en 10 minutes sur place",
        "Liberation manuelle de l'axe",
        "Remise en piste des lames",
        "Lubrification axe + coulisses",
        "Test 3 cycles montee/descente",
      ],
      cta: { label: "DEVIS DEBLOCAGE", href: `/deblocage-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // Photo contextuelle : intervention
      image: "/images/gallery/depannage-rideau-metallique-drm.webp",
      imageKind: "context" as const,
    },
    {
      title: `Entretien rideau metallique a ${cfg.city}`,
      body: "Contrat annuel 1 a 4 visites/an avec verification complete : axe, ressorts, moteur, coulisses, serrure. Reduit de 60% les pannes constatees sur le parc. Particulierement recommande pour les commerces du centre Aix soumis a fermeture nocturne quotidienne par arrete municipal.",
      bullets: [
        "Inspection visuelle complete annuelle",
        "Lubrification axe et coulisses",
        "Verification serrure et fins de course",
        "Test electrique moteur + condensateur",
        "Carnet d'entretien horodate par visite",
      ],
      cta: { label: "DEVIS ENTRETIEN", href: `/entretien-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // Photo contextuelle : pose axe (maintenance)
      image: "/images/gallery/pose-axe-rideau-metallique-drm.webp",
      imageKind: "context" as const,
    },
    {
      title: `Fabrication rideau metallique a ${cfg.city}`,
      body: "Production en atelier de lames acier galvanise, aluminium thermolaque ou inox brosse aux dimensions exactes. Particulierement utile pour les bastides aixoises avec ouvertures cintrees, et les hangars grandes dimensions de Meyreuil. Delai 5 jours ouvres, 4 heures sur urgence.",
      bullets: [
        "Acier galvanise EN 12424 RC2 anti-effraction",
        "Aluminium thermolaque RAL Batiments de France",
        "Inox brosse pour bijouteries du Mazarin",
        "Lames P57 (0,6 mm) et P90 (0,8 mm)",
        "Fabrication express 4h sur urgence",
      ],
      cta: { label: "DEVIS FABRICATION", href: `/fabrication-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      // Photo contextuelle : atelier fabrication
      image: "/images/gallery/fabrication-axe-rideau-metallique-france.webp",
      imageKind: "context" as const,
    },
  ],
};

export const whyUs = {
  eyebrow: "POURQUOI DRM AIX-EN-PROVENCE",
  heading: "L'artisan aixois du rideau metallique",
  body: "25 ans installes au pied de la Sainte-Victoire, atelier de fabrication local, vehicule atelier stocke en pieces ACM/Somfy/Simu/Sommer, equipe permanente formee aux contraintes provencales (mistral, calcaire, soleil, Batiments de France).",
  // Photo background : commerce parisien (contextuelle, neutre)
  bg: "/images/gallery/realisation-rideau-metallique-lame-pleine-industriel-france.webp",
  items: [
    { title: "Intervention 30 min", body: `Delai d'intervention sous 30 minutes en horaires ouvrables sur Aix centre, Les Milles, Gardanne, Le Tholonet, Puyricard. Sous 1 heure la nuit/weekend.`, icon: "" },
    { title: "Devis ferme signe", body: "Devis ligne par ligne calcule au tarif catalogue constructeur, signe sur place avant toute intervention. Pas de surfacturation post-intervention.", icon: "" },
    { title: "Pieces d'origine", body: "ACM Italie, Somfy France, Simu Yutz, Sommer Allemagne. Garantie constructeur preservee (5 ans Somfy, 4 ans Simu, 3 ans ACM).", icon: "" },
    { title: "Garantie 2 ans", body: "2 ans pieces neuves + 1 an main-d'oeuvre, ecrits sur le devis et la facture. Reintervention gratuite sans franchise.", icon: "" },
    { title: "Atelier local Pays d'Aix", body: "Fabrication de lames, axes, coulisses sur-mesure en moins de 4 heures sur urgence. Capacite rare en Pays d'Aix.", icon: "" },
    { title: "Equipe permanente", body: "Techniciens salaries internes, formes aux specificites aixoises : mistral, calcaire, Batiments de France. Pas de sous-traitance.", icon: "" },
  ],
};

export const projects = {
  eyebrow: "REALISATIONS RECENTES",
  heading: "Derniers chantiers rideau metallique en Pays d'Aix",
  topCta: { label: "VOIR TOUTES NOS ZONES", href: "/zones/" },
  tiles: [
    {
      title: "Bijouterie centre Aix (Mazarin)",
      body: "Remplacement grille extensible cobra en teinte RAL agreee Batiments de France. Pose en 4h sans casser le rythme commercial. Nuancier soumis a l'ABF en amont.",
      tags: [
        { label: "Grille cobra", icon: "solar" as const },
        { label: "Centre historique", icon: "battery" as const },
        { label: "Batiments de France", icon: "ev" as const },
      ],
      stats: [
        { label: "TYPE", value: "Cobra", unit: "" },
        { label: "TEINTE", value: "RAL", unit: "ABF" },
        { label: "POSE", value: "4", unit: "h" },
        { label: "GARANTIE", value: "2", unit: "ans" },
      ],
      images: [
        "/images/gallery/rideau-metallique-grille-bijoutier-realisation.webp",
        "/images/gallery/lame-grille-bijoutier-rideau-metallique.webp",
        "/images/gallery/depannage-rideau-metallique-lame-bijoutier.webp",
        "/images/gallery/rideau-metallique-bijoutier-commerce.webp",
      ],
      href: "/depannage-rideau-metallique-aix-en-provence/",
    },
    {
      title: "Showroom retail park des Milles",
      body: "Sectionnel grandes dimensions, ressort de compensation casse en pleine journee. Piece en stock vehicule, reouverture le lendemain matin a l'heure. Maintenance preventive 4 visites/an.",
      tags: [
        { label: "Sectionnel", icon: "solar" as const },
        { label: "Sommer GIGAroll", icon: "battery" as const },
        { label: "Maintenance", icon: "ev" as const },
      ],
      stats: [
        { label: "MARQUE", value: "Sommer", unit: "" },
        { label: "TYPE", value: "Lateral", unit: "" },
        { label: "DELAI", value: "< 1", unit: "h" },
        { label: "GARANTIE", value: "2", unit: "ans" },
      ],
      images: [
        "/images/gallery/realisation-rideau-metallique-lame-pleinela-jdsport-france.webp",
        "/images/gallery/realisation-rideau-metallique-lame-pleine-industriel-france.webp",
        "/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp",
        "/images/gallery/installation-rideau-metallique-anti-effraction.webp",
      ],
      href: "/depannage-rideau-metallique-les-milles/",
    },
    {
      title: "Hangars zone Avon Gardanne",
      body: "Reconversion d'un ancien hangar minier en atelier artisanal. Sectionnel grand format Sommer GIGAroll, motorisation telecommande, isolation thermique des coulisses.",
      tags: [
        { label: "Industriel", icon: "solar" as const },
        { label: "Sectionnel", icon: "battery" as const },
      ],
      stats: [
        { label: "LARGEUR", value: "4.50", unit: "m" },
        { label: "HAUTEUR", value: "3.80", unit: "m" },
        { label: "MOTEUR", value: "Sommer", unit: "lateral" },
        { label: "GARANTIE", value: "2", unit: "ans" },
      ],
      images: [
        "/images/gallery/realisation-rideau-metallique-lame-pleine-industriel-france.webp",
        "/images/gallery/realisation-rideau-metallique-garage.webp",
        "/images/gallery/rideau-metallique-industriel-lame-pleine.webp",
        "/images/gallery/rideau-metallique-industrielle-rideau-metallique-drm.webp",
      ],
      href: "/depannage-rideau-metallique-gardanne/",
    },
  ],
};

export const blog = {
  eyebrow: "BLOG RIDEAU METALLIQUE",
  heading: "Conseils techniques pour commerces aixois",
  viewAll: { label: "Voir tous les articles", href: "/blog/" },
  posts: [
    {
      category: "Choix technique",
      readTime: "8 min de lecture",
      title: "Lames pleines P57 P90 P140 : comment choisir le bon rideau metallique",
      excerpt: "Guide complet pour choisir entre lames P57, P90 et P140 selon le type de commerce, la largeur d'ouverture et l'exposition (mistral, soleil mediterraneen).",
      author: `${cfg.brand}`,
      authorAvatar: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
      date: "27 mai 2026",
      cover: "/images/gallery/lame-finale-p90-rideau-metallique.webp",
      href: "/blog/lames-pleines-comment-choisir/",
    },
    {
      category: "Motorisation",
      readTime: "6 min de lecture",
      title: "Motoriser son rideau metallique : Somfy, Simu ou ACM ?",
      excerpt: "Comparatif des trois grandes marques sur le marche aixois : performances, fiabilite, prix, garantie constructeur et compatibilite domotique.",
      author: `${cfg.brand}`,
      authorAvatar: "/images/gallery/fabrication-rideau-metallique-france.webp",
      date: "26 mai 2026",
      cover: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
      href: "/blog/motoriser-rideau-metallique-quelle-marque/",
    },
    {
      category: "Depannage urgent",
      readTime: "7 min de lecture",
      title: "Rideau metallique bloque a la fermeture : 5 causes frequentes",
      excerpt: "Mistral, calcaire grippe, ressort casse, moteur en court-circuit, serrure forcee : les 5 pannes les plus courantes sur le parc aixois et leur diagnostic rapide.",
      author: `${cfg.brand}`,
      authorAvatar: "/images/gallery/installation-rideau-metallique-drm.webp",
      date: "25 mai 2026",
      cover: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
      href: "/blog/rideau-metallique-bloque-fermeture-causes/",
    },
  ],
};

type TestimonialItem =
  | { type: "text"; quote: string; author: string; role: string; avatar: string }
  | { type: "video"; video: string; author: string; role: string };

export const testimonials: {
  eyebrow: string;
  heading: string;
  badges: { name: string; src: string; href: string }[];
  items: TestimonialItem[];
} = {
  eyebrow: "AVIS CLIENTS",
  heading: `${cfg.rating}/5 sur ${cfg.ratingCount} avis Google a ${cfg.city}`,
  badges: [
    { name: "Google", src: "/images/marques/google-logo.webp", href: "https://www.google.com/search?q=DRM+Aix-en-Provence" },
  ],
  items: [
    {
      type: "text" as const,
      quote: "Rideau bloque a la fermeture un vendredi soir, vitrine du Mazarin avec stock visible depuis la rue. Le technicien est arrive en 28 minutes, axe regraisse, condensateur change sur place, parti avec la facture signee. Le prix annonce au telephone a ete tenu a l'euro pres.",
      author: "Laurent Mouriès",
      role: `${cfg.city} centre (Mazarin)`,
      avatar: "/images/gallery/depannage-rideau-metallique-drm-services.webp",
    },
    {
      type: "text" as const,
      quote: "Showroom au pole d'activites des Milles, sectionnel grandes dimensions bloque en milieu d'apres-midi. Equipe sur place en moins d'une heure, ressort de compensation casse identifie tout de suite, piece en stock. Reouverture du show le lendemain matin a l'heure.",
      author: "Sophie Rambaud",
      role: "Les Milles (Pioline)",
      avatar: "/images/gallery/installation-rideau-metallique-drm.webp",
    },
    {
      type: "text" as const,
      quote: "Restaurant proche de la place des Cardeurs : motorisation d'un ancien rideau manuel passe en Somfy RS100, telecommande programmee pour deux salaries et un planning d'ouverture automatique. Travail soigne sans gener le service du midi.",
      author: "Jean-Philippe Lattes",
      role: `Vieil-Aix (${cfg.city})`,
      avatar: "/images/gallery/fabrication-rideau-metallique-france.webp",
    },
    {
      type: "text" as const,
      quote: "Bijouterie au pied de la cathedrale Saint-Sauveur, grille extensible cobra en teinte agreee Batiments de France. Nuancier RAL presente, devis sous 24h, pose en 4h. Tres pro.",
      author: "Nathalie Esteva",
      role: "Mazarin",
      avatar: "/images/gallery/depannage-rideau-metallique-drm-france-rm.webp",
    },
    {
      type: "text" as const,
      quote: "Pharmacie de garde a Gardanne, panne moteur tubulaire en pleine nuit. Intervention sous 50 minutes, depannage temporaire pour fermer, retour le lendemain pour le remplacement ACM. Piece en stock vehicule.",
      author: "Karim Bensaad",
      role: "Gardanne centre",
      avatar: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
    },
    {
      type: "text" as const,
      quote: "Bastide au Tholonet, remplacement de l'axe d'un ancien rideau aux dimensions hors standard. Atelier a fabrique l'axe sur-mesure en 3 jours, pose en demi-journee. Le calcaire avait grippe la coulisse.",
      author: "Catherine Bremond",
      role: "Le Tholonet (route Cezanne)",
      avatar: "/images/gallery/depannage-rideau-metallique-drm.webp",
    },
  ],
};

export const faq = {
  eyebrow: "FAQ",
  heading: "Questions frequentes sur le rideau metallique a Aix",
  sideText: "Toutes les reponses aux questions des commercants, artisans et industriels du Pays d'Aix avant une intervention DRM.",
  cta: { label: "DEMANDER UN DEVIS", href: "/contact/" },
  items: [
    {
      question: `Qui appeler pour un depannage de rideau metallique a ${cfg.city} 24h/24 ?`,
      answer: `${cfg.brand} est l'interlocuteur direct pour toute urgence rideau metallique a ${cfg.city}. Notre artisan local intervient sur tout le Pays d'Aix (centre historique, Les Milles, Luynes, Le Tholonet, Puyricard et villages voisins), sous 30 minutes en horaires ouvrables et sous 1 heure la nuit/weekend. Devis ferme avant intervention.`,
    },
    {
      question: "Quels types de rideaux metalliques sont les plus courants a Aix-en-Provence ?",
      answer: "Le tissu commercant aixois est tres heterogene. Sur le Cours Mirabeau et le Mazarin, les vitrines sont equipees de lames micro-perforees ou grilles extensibles (autorisent un retro-eclairage rideau ferme exige par la municipalite). Les commerces des Milles ont des tabliers acier ou aluminium thermolaque pleins (P57 et P90). Les hangars de Gardanne sont equipes de sectionnels grandes dimensions, souvent moteurs Sommer GIGAroll lateraux.",
    },
    {
      question: `Prix d'un depannage de rideau metallique a ${cfg.city} : a quoi s'attendre ?`,
      answer: `${cfg.brand} pratique des tarifs annonces avant intervention. Ordres de grandeur : deblocage simple a partir de 149 EUR, condensateur a partir de 89 EUR, moteur tubulaire ACM ou Somfy a partir de 390 EUR, lames pleines a partir de 189 EUR, motorisation complete a partir de 500 EUR. La majoration urgence nuit/weekend est annoncee a la prise d'appel.`,
    },
    {
      question: "Quelles marques de moteurs et pieces stocke votre vehicule atelier ?",
      answer: "Sur l'agglomeration aixoise, le parc rideau metallique melange ancien (annees 90) et neuf. Notre stock : moteurs tubulaires Somfy RS100 et Simu T5, moteurs centraux ACM Titan / RAPTOR 76 / Centris XXL, motorisations Came AXO et BFT Argo, automatismes Nice Era, moteurs lateraux Sommer GIGAroll (frequents sur les hangars de la zone Avon), pieces Masinara et Gaposa. Toutes pieces d'origine.",
    },
    {
      question: `Quelle garantie ${cfg.brand} apporte-t-il sur ses interventions ?`,
      answer: `Toutes nos interventions sur le Pays d'Aix sont couvertes par une garantie 2 ans sur les pieces neuves et 1 an sur la main-d'oeuvre, mentionnees au devis et a la facture. En cas de defaillance dans la periode, ${cfg.brand} reintervient gratuitement sans franchise ni deplacement supplementaire.`,
    },
    {
      question: "Le mistral peut-il abimer mon rideau metallique ?",
      answer: "Oui, le mistral qui descend des Alpilles vers la plaine aixoise impose des contraintes specifiques. Sur les longues lames (> 3,50 m) exposees plein nord-ouest, les rafales repetees torsionnent les lames pleines et descellent progressivement les coulisses. DRM Aix-en-Provence verifie systematiquement ce point lors de la visite annuelle : serrage des fixations, etat des butees, lubrification renforcee des axes.",
    },
    {
      question: "Le centre historique d'Aix impose-t-il des contraintes esthetiques ?",
      answer: "Oui. Sur le perimetre des Batiments de France (secteur sauvegarde du Mazarin et Vieil-Aix), les facades classees exigent des tabliers discrets, generalement en teintes neutres mates coordonnees avec le calcaire d'Aix. Nous disposons d'un nuancier RAL agree ABF et proposons des lames micro-perforees qui preservent la vitrine eclairee la nuit (bijouteries, antiquaires de la rue d'Italie).",
    },
    {
      question: `${cfg.brand} fabrique-t-il des rideaux sur-mesure pour les bastides aixoises ?`,
      answer: "Oui. Les bastides du Tholonet, Vauvenargues ou Puyricard ont souvent des ouvertures non standard (linteaux cintres, largeurs > 4 m). Notre atelier produit lames acier galvanise, aluminium thermolaque ou inox brosse aux dimensions exactes, ainsi qu'axes et coulisses sur-mesure. Delai standard 5 jours ouvres, ramene a 4h sur urgence.",
    },
  ],
};

export const ctaSection = {
  headingLine1: `Une urgence rideau metallique a ${cfg.city} ?`,
  headingLine2: "Devis gratuit, intervention 30 minutes.",
  body: `${cfg.brand} intervient 24h/24 sur Aix centre, Les Milles, Gardanne, Le Tholonet, Puyricard et tout le Pays d'Aix. Devis ferme signe sur place, garantie 2 ans pieces. Demandez un devis en moins de 24h.`,
  ctas: [
    { label: "DEMANDER UN DEVIS", href: "/contact/", variant: "primary" as const },
    { label: "VOIR LES ZONES", href: "/zones/", variant: "white" as const },
  ],
  bg: "/images/gallery/hero-rideau-metallique-industriel.webp",
};

export const footer = {
  logo: "/images/logos/logo-drm-aix-en-provence.webp",
  newsletter: {
    body: `${cfg.brand} : artisan local du rideau metallique en Pays d'Aix depuis 25 ans. Urgence 24h/24, devis ferme, garantie 2 ans. ${cfg.address}.`,
    placeholder: "Votre email",
    buttonLabel: "Demander un devis",
    disclaimer: "Nous respectons vos donnees - voir notre",
    disclaimerLink: { label: "politique de confidentialite.", href: "/confidentialite/" },
  },
  linkGroups: [
    {
      title: "NOS 7 SERVICES",
      links: [
        { label: `Depannage a ${cfg.city}`, href: `/depannage-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
        { label: `Installation a ${cfg.city}`, href: `/installation-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
        { label: `Reparation a ${cfg.city}`, href: `/reparation-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
        { label: `Motorisation a ${cfg.city}`, href: `/motorisation-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
        { label: `Deblocage a ${cfg.city}`, href: `/deblocage-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
        { label: `Entretien a ${cfg.city}`, href: `/entretien-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
        { label: `Fabrication a ${cfg.city}`, href: `/fabrication-rideau-metallique-${cfg.cityShort.toLowerCase().replace(/\s+/g, "-")}/` },
      ],
    },
    {
      title: "ZONES",
      links: [
        { label: "Les Milles", href: "/depannage-rideau-metallique-les-milles/" },
        { label: "Gardanne", href: "/depannage-rideau-metallique-gardanne/" },
        { label: "Le Tholonet", href: "/depannage-rideau-metallique-le-tholonet/" },
        { label: "Puyricard", href: "/depannage-rideau-metallique-puyricard/" },
        { label: "Venelles", href: "/depannage-rideau-metallique-venelles/" },
        { label: "Toutes les zones", href: "/zones/" },
      ],
    },
    {
      title: "DRM Aix-en-Provence",
      links: [
        { label: "Accueil", href: "/" },
        { label: "Blog", href: "/blog/" },
        { label: "Contact", href: "/contact/" },
        { label: "Mentions legales", href: "/mentions-legales/" },
        { label: "Confidentialite", href: "/confidentialite/" },
        { label: "Plan du site", href: "/plan-du-site/" },
      ],
    },
  ],
  brands: {
    title: "Marques moteurs et pieces stockees en vehicule atelier",
    logos: [
      "/images/marques/moteur-simu-rideau-metallique.webp",
      "/images/marques/moteur-acm-italian-rolling-power.webp",
      "/images/marques/logo-sommer-moteur-rideau-metallique.webp",
      "/images/marques/logo-afca-moteur-rideau-metallique.webp",
      "/images/marques/logo-masinara-moteur-rideau-metallique.webp",
      "/images/marques/logo-moteur-g-doorgate-rideau-metallique-drm.webp",
    ],
  },
  copyright: `${cfg.brand}, tous droits reserves, 2026`,
  socialLabel: "Nous contacter :",
};

// Re-export config for components that need it
export { siteConfig as cfg } from "@/config/site";
