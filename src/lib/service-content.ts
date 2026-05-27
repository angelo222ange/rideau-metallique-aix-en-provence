import { getZoneLocal, hashZoneSlug, type ZoneLocal } from "@/lib/zone-local-data";

export interface ServiceZoneContent {
  introTitle: string;
  introText: string;
  typesIntro: string;
  seo1Title: string;
  seo1Text: string;
  seo2Title: string;
  seo2Text: string;
  localExpertiseTitle: string;
  localExpertiseText: string;
  whyUsTitle: string;
  whyUsText: string;
  ctaTitle: string;
  faq: { question: string; answer: string }[];
}

const serviceWording: Record<
  string,
  { keyword: string; verb: string; synonymes: string[]; problemes: string[]; gestes: string[] }
> = {
  depannage: {
    keyword: "depannage de rideau metallique",
    verb: "depanner",
    synonymes: ["intervention urgente", "assistance technique", "secours rideau metallique"],
    problemes: [
      "rideau bloque a mi-hauteur",
      "moteur qui ne repond plus",
      "serrure grippee",
      "lame sortie du rail",
      "telecommande qui ne fonctionne plus",
    ],
    gestes: [
      "diagnostic visuel et test electrique",
      "deblocage manuel de l'axe",
      "remise en piste des lames",
      "remplacement du condensateur moteur",
      "test des fins de course",
    ],
  },
  installation: {
    keyword: "installation de rideau metallique",
    verb: "installer",
    synonymes: ["pose", "mise en place", "fourniture-pose"],
    problemes: [
      "vitrine sans protection effraction",
      "ancienne fermeture vetuste",
      "demande d'assurance",
      "changement d'activite",
      "construction neuve",
    ],
    gestes: [
      "prise de mesures sur site",
      "fabrication sur-mesure en atelier",
      "pose de l'axe et du moteur",
      "montage des coulisses",
      "raccordement electrique et reglages",
    ],
  },
  reparation: {
    keyword: "reparation de rideau metallique",
    verb: "reparer",
    synonymes: ["remise en etat", "remise aux normes", "remplacement de pieces"],
    problemes: [
      "lames pliees suite a un choc",
      "axe deforme",
      "ressort de compensation casse",
      "serrure forcee",
      "moteur en court-circuit",
    ],
    gestes: [
      "demontage du tablier",
      "remplacement des lames endommagees",
      "redressage ou changement d'axe",
      "remplacement du ressort",
      "test final sous tension",
    ],
  },
  motorisation: {
    keyword: "motorisation de rideau metallique",
    verb: "motoriser",
    synonymes: ["automatisation", "passage a l'electrique", "electrification"],
    problemes: [
      "rideau manuel trop lourd a manoeuvrer",
      "absence de commande electrique",
      "interrupteur a cle obsolete",
      "besoin d'ouverture par telecommande",
      "demande d'integration domotique",
    ],
    gestes: [
      "etude de charge et choix du moteur",
      "remplacement de l'axe par un axe motorise",
      "installation du boitier electrique",
      "appairage de la telecommande",
      "reglage des fins de course",
    ],
  },
  deblocage: {
    keyword: "deblocage de rideau metallique",
    verb: "debloquer",
    synonymes: ["liberation d'urgence", "ouverture forcee", "intervention express"],
    problemes: [
      "rideau coince en position basse",
      "rideau coince en position haute",
      "lame sortie du rail",
      "moteur grippe",
      "axe enraye",
    ],
    gestes: [
      "diagnostic rapide en moins de 10 minutes",
      "deblocage manuel ou par debrayage",
      "remise en piste des lames",
      "verification de l'axe et du moteur",
      "reglage temporaire pour ouverture / fermeture",
    ],
  },
  entretien: {
    keyword: "entretien de rideau metallique",
    verb: "entretenir",
    synonymes: ["maintenance preventive", "revision annuelle", "contrat de service"],
    problemes: [
      "axe non graisse depuis des annees",
      "rails encrasses",
      "lames qui frottent",
      "moteur qui surchauffe",
      "joints uses",
    ],
    gestes: [
      "graissage de l'axe et des paliers",
      "nettoyage des coulisses et rails",
      "verification serrage des fixations",
      "test des fins de course moteur",
      "remplacement preventif des joints",
    ],
  },
  fabrication: {
    keyword: "fabrication de rideau metallique",
    verb: "fabriquer",
    synonymes: ["realisation sur-mesure", "production atelier", "confection"],
    problemes: [
      "dimensions non standard",
      "besoin de lames sur-mesure",
      "exigence d'esthetique speciale",
      "thermolaquage couleur",
      "rideau de grandes dimensions",
    ],
    gestes: [
      "releve precis des dimensions",
      "decoupe des lames a la longueur exacte",
      "assemblage du tablier en atelier",
      "thermolaquage si demande",
      "controle qualite avant livraison",
    ],
  },
};

const introTitleAngles: string[] = [
  "Votre {keyword} a {zone}, 24h/24 par DRM Aix-en-Provence",
  "DRM Aix-en-Provence : {keyword} a {zone}, intervention rapide",
  "{keyword} a {zone} : l'expertise DRM Aix-en-Provence",
  "A {zone}, faites confiance a DRM Aix-en-Provence pour le {keyword}",
  "Specialiste du {keyword} a {zone} et en Pays d'Aix",
  "{keyword} a {zone} : devis gratuit en 24h",
  "{zone} ({postal}) : le {keyword} avec DRM Aix-en-Provence",
  "Un specialiste local du {keyword} a {zone}",
  "DRM Aix-en-Provence, votre artisan pour le {keyword} a {zone}",
  "Demandez votre {keyword} a {zone} en quelques minutes",
];

const introTextAngles: string[] = [
  "DRM Aix-en-Provence intervient pour {verb} votre rideau metallique a {zone} ({postal}). Plus de 25 ans d'experience sur le Pays Aixois et le Pays d'Aix, equipe de techniciens specialistes des fermetures metalliques pour commerces et industriels. Diagnostic precis, devis transparent, intervention dans les meilleurs delais sur tout le secteur autour de {landmark1}.",
  "Quand il faut {verb} un rideau metallique a {zone}, vous avez besoin d'un specialiste local. DRM Aix-en-Provence couvre votre commune et l'ensemble de l'agglomeration aixoise depuis 25+ ans. Vehicule atelier stocke en pieces detachees, intervention sous 30 minutes en moyenne dans le secteur, garantie sur les pieces et la main-d'oeuvre.",
  "Vous cherchez un professionnel du {keyword} a {zone} ? DRM Aix-en-Provence est l'entreprise de reference pour les commerces, ateliers et entrepots du Pays d'Aix. Notre savoir-faire couvre toutes les marques (Somfy, Simu, ACM, Nice, Came, BFT) et tous les types de rideaux (lames pleines P57/P90/P140, micro-perforees, grilles cobra, polycarbonate). Notre rayon d'action passe notamment par {street1} et {street2}.",
  "Sur {zone} comme dans toute l'agglomeration de Aix-en-Provence-Les-Milles-Gardanne, le {keyword} demande un savoir-faire technique precis. DRM Aix-en-Provence dispose d'une equipe formee aux dernieres normes, d'un stock de pieces strategique et d'un atelier de fabrication a moins de 30 minutes. Resultat : intervention rapide, devis honnete, garantie ferme.",
  "DRM Aix-en-Provence, c'est 25 ans d'experience appliques au {keyword} sur le Pays Aixois. A {zone} ({postal}), nous intervenons sur tout type de rideau metallique : commerces de centre-ville, ateliers, hangars industriels, parkings. Devis gratuit, intervention 24h/24, sans surcout urgence en horaires normaux. Le quartier {quartier1} est particulierement bien couvert.",
  "Le {keyword} a {zone} merite un specialiste qui connait votre commune. DRM Aix-en-Provence intervient regulierement sur le secteur, notre equipe maitrise les contraintes locales (mistral, mistral et soleil, batiments historiques) et adapte chaque intervention au contexte. Plus de 5000 interventions realisees en Pays d'Aix.",
  "Cette page presente notre offre de {keyword} a {zone}. Que vous soyez gerant de boulangerie sur {street1}, restaurateur a {quartier1} ou industriel a proximite de {landmark1}, l'equipe DRM Aix-en-Provence adapte son intervention a votre activite et a votre type de fermeture metallique. Devis ferme avant intervention, garantie ecrite.",
  "Pour un {keyword} efficace a {zone}, il faut trois choses : un diagnostic precis, des pieces d'origine et une equipe joignable rapidement. DRM Aix-en-Provence reunit ces trois conditions depuis 25 ans. Notre delai moyen d'intervention sur {zone} est de 30 minutes en horaires ouvrables, garanti contractuellement.",
  "Confier votre {keyword} a {zone} a DRM Aix-en-Provence, c'est gagner du temps et de la serenite. Plus de 5000 interventions a notre actif en Pays d'Aix, dont une part significative sur votre commune et ses {commerce1}. Tous les techniciens sont salaries en interne, pas de sous-traitance.",
  "DRM Aix-en-Provence vous accompagne pour votre {keyword} a {zone} ({postal}) de la demande de devis jusqu'a la pose finale. Notre methode est simple : ecoute du besoin, releve technique sur place, devis ferme, intervention dans le delai annonce, controle qualite et facturation transparente avec mention de la garantie de 2 ans.",
];

const seo1TitleAngles: string[] = [
  "Diagnostic et intervention sur votre rideau metallique a {zone}",
  "Comment nous traitons votre demande de {keyword} a {zone}",
  "Notre methode pour {verb} un rideau metallique a {zone}",
  "{keyword} a {zone} : un protocole eprouve",
  "Une intervention de {keyword} a {zone} en 4 etapes",
  "DRM Aix-en-Provence : votre {keyword} a {zone} pas a pas",
  "{keyword} a {zone} : du diagnostic a la garantie",
  "L'approche DRM Aix-en-Provence du {keyword} a {zone}",
  "Les coulisses d'une intervention de {keyword} a {zone}",
  "Methode et exigence pour le {keyword} a {zone}",
];

const seo1TextAngles: string[] = [
  "A {zone}, chaque intervention DRM Aix-en-Provence commence par un diagnostic precis du rideau metallique. Notre technicien controle l'axe, les coulisses, le tablier, le moteur et la serrure. Si vous avez fourni votre numero, nous etablissons un pre-diagnostic au telephone pour evaluer l'urgence et prevoir le materiel necessaire. Sur place, le devis est etabli avant toute intervention : 25 ans d'experience nous permettent d'estimer le temps et les pieces en quelques minutes.",
  "Notre methode pour {verb} un rideau metallique a {zone} suit un protocole eprouve : 1) inspection visuelle complete, 2) test des composants electriques (moteur, fins de course, telecommande), 3) verification mecanique (lames, axe, ressorts), 4) remise en service et test sous tension. Cette approche systematique evite les diagnostics partiels et garantit la durabilite de l'intervention.",
  "DRM Aix-en-Provence traite chaque demande de {keyword} a {zone} de maniere structuree. Notre technicien arrive avec le vehicule atelier rempli de pieces detachees standard : lames pleines P57 et P90, moteurs tubulaires Somfy et Simu, moteurs centraux ACM, ressorts, serrures, coulisses. La plupart des interventions sont terminees en une seule visite. Notre rayon d'action couvre {street1}, {street2} et tout le quartier {quartier1}.",
  "L'intervention de {keyword} a {zone} se decompose en quatre temps : diagnostic, devis sur place, intervention, test final. A chaque etape, le client est informe : nature du probleme, pieces a remplacer, prix exact, garantie applicable. Cette transparence est la regle DRM Aix-en-Provence depuis 25 ans : pas de surprise, pas de surfacturation, pas d'intervention non autorisee.",
  "Pour {verb} un rideau metallique a {zone}, notre equipe dispose d'outils specialises : multimetre electrique, douilles a cliquet, perceuse a percussion, chalumeau, soudeuse a l'arc, gabarits de coupe pour les lames. Nous fabriquons et livrons sur place en moins de 4 heures en cas de besoin urgent d'une piece sur-mesure (lame, axe, coulisse).",
  "A {zone}, l'efficacite d'une intervention DRM Aix-en-Provence repose sur la preparation. Avant le depart, le technicien consulte le carnet de l'adresse (si rideau deja connu), prepare les pieces probables, verifie la charge du vehicule. Cette anticipation reduit le temps sur place de 30 a 40 % par rapport a une intervention sans preparation, ce qui se traduit pour le client par un cout final plus bas.",
  "La phase de diagnostic est determinante pour un {keyword} reussi a {zone}. DRM Aix-en-Provence consacre les 15 premieres minutes a un audit complet : controle des fixations, mesure de l'usure des coulisses, test de continuite electrique, inspection des soudures, verification de la lubrification. Cette rigueur evite les diagnostics partiels et les interventions repetees. Notre technicien repere souvent un probleme connexe ignore par le client.",
  "Pour le {keyword} a {zone}, DRM Aix-en-Provence applique un protocole calque sur les recommandations constructeurs (Somfy, ACM, Simu) : remplacer plutot que reparer une piece a risque, jamais d'improvisation, traceabilite ecrite de chaque geste sur le bordereau d'intervention. Cette discipline est ce qui differencie un artisan local d'un depanneur generaliste.",
  "Le succes d'un {keyword} a {zone} tient autant a la technique qu'a la communication. DRM Aix-en-Provence explique chaque geste : pourquoi cette piece, pourquoi ce reglage, quelles alternatives existent. Le client est implique dans la decision finale, le devis ecrit consigne tout, la facture confirme. Cette pedagogie batit la confiance et explique pourquoi 80 % de nos clients reviennent ou nous recommandent.",
  "Une intervention de {keyword} a {zone} ne se limite pas a remettre en marche le rideau metallique. DRM Aix-en-Provence profite de chaque passage pour controler les autres composants : meme si la panne portait sur le moteur, notre technicien verifie l'usure des coulisses, la tension des ressorts, l'etat de la serrure. Ce controle preventif est inclus dans le devis sans cout supplementaire, et evite souvent une seconde panne dans les mois qui suivent.",
];

const seo2TitleAngles: string[] = [
  "Materiel, pieces et garanties de DRM Aix-en-Provence pour {zone}",
  "Pourquoi confier votre {keyword} a DRM Aix-en-Provence a {zone}",
  "Un atelier complet au service de votre {keyword} a {zone}",
  "{keyword} a {zone} : pieces d'origine, garantie ferme",
  "Reactivite, transparence, garantie : DRM Aix-en-Provence a {zone}",
  "Equipement et savoir-faire DRM Aix-en-Provence pour {zone}",
  "Stock pieces detachees pour le {keyword} a {zone}",
  "Marques partenaires et qualite a {zone}",
  "Engagement DRM Aix-en-Provence pour votre {keyword} a {zone}",
  "Securite et durabilite : nos standards pour {zone}",
];

const seo2TextAngles: string[] = [
  "Sur le secteur de {zone}, DRM Aix-en-Provence mobilise un veritable atelier embarque. Chaque vehicule contient des lames pleines P57 (0,6 mm) et P90 (0,8 mm), des moteurs tubulaires Somfy RS100 et Simu T5, des moteurs centraux ACM Titan et Centris XXL, des ressorts de compensation, des coulisses standard, des serrures profil europeen 4 points. Cela couvre 90 % des interventions de {keyword} sans deplacement supplementaire.",
  "Confier votre {keyword} a DRM Aix-en-Provence a {zone}, c'est miser sur un acteur local etabli depuis 25 ans. Nous travaillons avec les principales marques du marche (Somfy, Simu, Nice, ACM, Came, BFT, Sommer) en pieces d'origine. Nos techniciens sont formes regulierement aux nouveautes constructeurs : motorisations connectees, axes haute charge, automatismes domotique-compatibles.",
  "Notre atelier de fabrication, situe a moins de 30 minutes de {zone}, nous permet de produire des lames et axes sur-mesure en moins de 4 heures pour les cas urgents. Cette capacite locale est rare en Pays d'Aix : la plupart des concurrents commandent les pieces aupres de grossistes nationaux avec des delais de 48 a 72 heures.",
  "Toutes les interventions de {keyword} a {zone} sont couvertes par une garantie ferme : 2 ans sur les pieces neuves, 1 an sur la main-d'oeuvre. Cette garantie est trace au devis et a la facture. En cas de defaillance d'une piece dans la periode, DRM Aix-en-Provence reintervient gratuitement, sans franchise.",
  "DRM Aix-en-Provence, c'est la reactivite d'une entreprise locale et la qualite d'un specialiste national. Pour le {keyword} a {zone}, nous engageons un delai d'intervention sous 30 minutes en horaires ouvrables, sous 1 heure en horaires d'urgence (nuit, week-end, jours feries). Aucun forfait deplacement cache : le devis annonce sur place est le prix paye.",
  "Au-dela du materiel et de la garantie, ce qui differencie DRM Aix-en-Provence pour le {keyword} a {zone}, c'est la transparence. Nous expliquons chaque intervention au client : pourquoi cette piece, pourquoi ce prix, quelles alternatives. Les devis sont detailes ligne par ligne. Si un controle d'expertise est demande (assurance, copropriete), nous fournissons tous les justificatifs.",
  "DRM Aix-en-Provence selectionne ses fournisseurs avec la meme exigence depuis 25 ans. Pour le {keyword} a {zone}, nous travaillons exclusivement avec des references homologuees : moteurs sous garantie constructeur (5 ans Somfy, 4 ans Simu, 3 ans ACM), lames acier galvanise repondant a la norme EN 12424 (anti-effraction classe RC2), serrures certifiees A2P. Cette exigence est rarement explicite chez les concurrents : nous l'inscrivons noir sur blanc sur le devis.",
  "Le stockage des pieces de {keyword} fait la difference a {zone}. Notre depot du Pays d'Aix conserve en permanence 5 generations de moteurs tubulaires Somfy (RS100, RS125, RS180, Oximo, Sonesse), 3 generations de moteurs centraux ACM (Titan classique, Titan Plus, Centris XXL), une vingtaine de references de serrures et plus de 200 longueurs de lames pretes a couper. Resultat : 95 % des interventions terminees en une seule visite.",
  "Le service apres-vente est aussi important que l'intervention elle-meme. DRM Aix-en-Provence tient un carnet d'historique pour chaque rideau metallique entretenu a {zone}. Chaque visite ajoute une ligne : date, geste effectue, piece changee, controle preventif. Ce suivi facilite la maintenance long terme et evite les double-interventions. Nos clients sous contrat d'entretien beneficient d'une consultation gratuite par telephone en cas de doute.",
  "Faire appel a DRM Aix-en-Provence pour le {keyword} a {zone}, c'est aussi soutenir un acteur economique local. Nos techniciens sont tous salaries permanents, formes en interne et bases en Pays d'Aix. Nous travaillons avec des fournisseurs francais (Simu, Somfy France) et europeens (ACM Italie), sans recours a des sous-traitants. La traceabilite de chaque intervention est garantie par un bordereau ecrit conserve cinq ans.",
];

const typesIntroAngles: string[] = [
  "A {zone}, le {keyword} concerne aussi bien les {commerce1} que les ateliers, hangars et entrepots du secteur. Selon le type de rideau (lames pleines, micro-perforees, grille cobra, polycarbonate) et la marque du moteur, l'approche technique varie : DRM Aix-en-Provence adapte ses interventions a chaque configuration rencontree sur la commune.",
  "Sur {zone}, nous distinguons cinq familles d'interventions en {keyword}. Chacune fait appel a un outillage specifique, un stock de pieces particulier et un temps d'intervention different. Notre experience accumulee sur {commerce1} et les ateliers du secteur nous permet de diagnostiquer la famille en quelques minutes.",
  "Les commerces de {zone} presentent des configurations tres variees pour leur rideau metallique : devantures etroites du centre ancien, vitrines larges des avenues commercantes, hangars industriels ou parkings techniques. DRM Aix-en-Provence adapte son materiel et ses gestes a chacun de ces cas, ce qui evite les surcouts et les retours.",
  "Le {keyword} a {zone} ne s'improvise pas : selon la marque du moteur, l'age du tablier et le type de batiment, l'intervention peut durer de 30 minutes a une journee complete. Notre equipe etablit un diagnostic precis et chiffre le devis avant tout commencement, sans frais.",
  "Sur le secteur {zone}, DRM Aix-en-Provence a traite plusieurs centaines de cas relevant du {keyword}. Cette experience nous permet de reconnaitre rapidement les configurations les plus frequentes et d'y repondre avec les bons outils, le bon materiel et le bon planning. Resultat : moins d'aller-retour, moins de couts caches, plus de fiabilite.",
  "Que le rideau metallique de {zone} soit motorise ou manuel, recent ou ancien, neuf ou repare plusieurs fois, DRM Aix-en-Provence dispose d'une approche {keyword} adaptee. Notre stock couvre les principales marques et les principaux formats : ce qui permet de proposer un devis precis et un delai realiste des le premier rendez-vous.",
];

const whyUsAngles: string[] = [
  "DRM Aix-en-Provence combine experience longue (25 ans), atelier de fabrication local, vehicules atelier completement equipes et garantie ferme 2 ans pieces / 1 an main-d'oeuvre. Pour le {keyword} a {zone}, cette combinaison est rare en Pays d'Aix. Nous traitons aussi bien les urgences (rideau bloque a la fermeture, panne moteur le dimanche soir) que les chantiers programmes (installation neuve, motorisation d'une fermeture manuelle, contrat d'entretien annuel).",
  "Trois raisons principales de confier votre {keyword} a {zone} a DRM Aix-en-Provence : 1) un atelier de fabrication en Pays d'Aix qui nous rend autonomes en pieces sur-mesure, 2) une equipe de techniciens permanents formes a toutes les marques majeures, 3) une politique de devis ferme sans surprise et une garantie 2 ans ecrite. Ces trois elements sont rarement reunis chez les concurrents.",
  "DRM Aix-en-Provence a fait du {keyword} a {zone} l'une de ses specialites principales. Nous y intervenons plusieurs fois par semaine, sur des configurations tres variees : commerces de centre-ville, ateliers d'artisans, hangars logistiques, parkings prives. Cette densite d'experience nous permet de proposer des solutions eprouvees plutot que des bricolages improvises.",
  "Pour le {keyword} a {zone}, DRM Aix-en-Provence s'engage par ecrit sur trois points : delai d'intervention (30 min ouvrables, 60 min urgence), devis ferme sans frais caches, garantie 2 ans pieces / 1 an main-d'oeuvre. Cet engagement contractuel est notre signature commerciale : il differencie DRM Aix-en-Provence des intervenants ponctuels et rassure les commerces qui en sont a leur premier rideau metallique.",
  "Choisir DRM Aix-en-Provence pour votre {keyword} a {zone}, c'est choisir la continuite. Le technicien qui pose votre rideau aujourd'hui sera disponible demain pour le depanner, l'entretenir ou le motoriser. Cette logique de proximite est rare dans le metier ou la sous-traitance est devenue majoritaire. Chez DRM Aix-en-Provence, l'equipe est salariee, formee en interne et durable.",
  "DRM Aix-en-Provence tient une promesse claire pour le {keyword} a {zone} : pas de devis flou, pas de pieces non agreees, pas de garantie verbale. Tout est ecrit, signe, conserve. Cette discipline a un cout administratif que nous absorbons, mais elle se traduit pour le client par une qualite constante et la possibilite de faire jouer la garantie sans discussion.",
];

const localExpertiseAngles: string[] = [
  "{specifique} Nous y intervenons regulierement, notamment sur {street1}, {street2}, autour de {landmark1} et dans le quartier {quartier1}. Cette connaissance du terrain {zone} fait gagner du temps : nos techniciens identifient rapidement les contraintes d'acces, les horaires de circulation et les particularites architecturales locales. Resultat : un {keyword} plus rapide, mieux adapte aux exigences de votre commerce ou de votre site, avec une logistique de pieces optimisee.",
  "{specifique} DRM Aix-en-Provence a une cartographie precise du secteur {zone} : ou se trouvent les commerces sensibles ({commerce1}), quels axes sont congestionnes aux heures de pointe, quelle est la voie d'acces la plus courte selon le quartier ({quartier1}, {quartier2}). Cette intelligence terrain rend chaque {keyword} plus rapide et plus efficient.",
  "Le caractere local de DRM Aix-en-Provence est essentiel pour un bon {keyword} a {zone}. {specifique} Nous connaissons les particularites architecturales du quartier {quartier1} et des rues commercantes ({street1}, {street2}), les contraintes des reglementations communales, et les habitudes des commercants locaux ({commerce1}). Ce contexte change la nature meme de l'intervention.",
  "Intervenir sur le {keyword} a {zone} implique de connaitre le terrain. DRM Aix-en-Provence s'est implante depuis longtemps sur ce secteur. {specifique} Nos techniciens citent par habitude {landmark1} ou {street1} : c'est cette familiarite qui rassure les commercants et fluidifie chaque intervention.",
  "{specifique} A {zone} comme dans tout le Pays d'Aix, DRM Aix-en-Provence ajoute a son expertise technique une connaissance fine du contexte local : commerces dominants ({commerce1}), reglementations specifiques, profil meteo (mistral, mistral et soleil). Cette synthese permet de proposer un {keyword} mieux adapte qu'un intervenant national parachute.",
  "Notre travail sur {zone} pour le {keyword} est nourri par des centaines d'interventions accumulees sur la commune. {specifique} Cette experience cumulee, indissociable du terrain, nous permet de prevoir les difficultes et d'eviter les pieges. Resultat : un travail plus fiable, plus rapide et moins couteux pour le client final autour de {street1} et {street2}.",
];

const ctaTitleAngles: string[] = [
  "Besoin d'un {keyword} a {zone} ? Demandez un devis gratuit",
  "Votre {keyword} a {zone} commence ici",
  "{keyword} a {zone} : devis sous 24h, intervention rapide",
  "Reservez votre intervention de {keyword} a {zone}",
  "Un projet de {keyword} a {zone} ? Parlons-en",
  "DRM Aix-en-Provence a votre ecoute pour {keyword} a {zone}",
];

interface FaqVariants {
  q: string[];
  a: string[];
}

const faqBanks: FaqVariants[] = [
  {
    q: [
      "Qui appeler pour un {keyword} a {zone} ?",
      "A qui s'adresser pour un {keyword} a {zone} ?",
      "Quelle entreprise pour {verb} un rideau metallique a {zone} ?",
    ],
    a: [
      "DRM Aix-en-Provence est le specialiste du {keyword} sur {zone} ({postal}) et l'ensemble du Pays d'Aix. Notre equipe intervient 24h/24, 7j/7, avec un atelier de fabrication a moins de 30 minutes. Demandez votre devis via notre formulaire ou contactez-nous : intervention possible le jour meme dans la plupart des cas.",
      "Pour un {keyword} a {zone}, faites appel a DRM Aix-en-Provence. Notre permanence couvre le Pays d'Aix depuis 25 ans, avec une equipe salariee en interne et un stock de pieces strategique. Reponse a votre demande sous 1 heure en horaires ouvrables.",
      "DRM Aix-en-Provence est l'acteur historique du {keyword} a {zone}. Une demande passe par notre formulaire, un technicien vous rappelle pour un pre-diagnostic, l'intervention est planifiee sous 24 a 48 heures (sous 30 minutes en urgence). Devis ferme avant toute action.",
    ],
  },
  {
    q: [
      "Quel delai pour un {keyword} a {zone} ?",
      "Combien de temps pour intervenir a {zone} en {keyword} ?",
      "Sous quel delai DRM Aix-en-Provence intervient-il a {zone} ?",
    ],
    a: [
      "En horaires ouvrables, le delai d'intervention sur {zone} est en moyenne de 30 a 60 minutes. En urgence nuit / week-end / jour ferie, nous engageons un delai sous 1 heure. La pose neuve et la fabrication sur-mesure se planifient sous 5 a 10 jours selon les dimensions.",
      "Le delai DRM Aix-en-Provence pour le {keyword} a {zone} est garanti par ecrit : 30 minutes en horaires ouvrables, 1 heure en urgence. Pour une installation neuve, le delai moyen est de 7 jours ouvres (releve technique compris). Pour une fabrication sur-mesure express, comptez 4 heures.",
      "DRM Aix-en-Provence organise son planning pour intervenir tres rapidement a {zone}. En cas d'urgence rideau bloque, nous engageons un delai sous 60 minutes 24h/24. Pour un chantier neuf ou une motorisation, le rendez-vous initial est pris sous 48 heures, l'execution sous 5 a 10 jours.",
    ],
  },
  {
    q: [
      "Quel est le prix d'un {keyword} a {zone} ?",
      "Combien coute un {keyword} a {zone} ?",
      "Quel tarif pour un {keyword} a {zone} ?",
    ],
    a: [
      "Le prix d'un {keyword} a {zone} depend du type de rideau, de la marque du moteur, des pieces a remplacer et de l'horaire. A titre indicatif : deblocage simple a partir de 149 euros, reparation moteur a partir de 390 euros, remplacement de lames a partir de 189 euros. Le devis precis est etabli sur place, avant intervention, sans engagement.",
      "Pour un {keyword} a {zone}, les tarifs DRM Aix-en-Provence sont annonces avant intervention, sans surprise. La fourchette varie selon la complexite : 149-350 euros pour un deblocage standard, 390-800 euros pour une reparation moteur, 500-1500 euros pour une motorisation complete, 800-5000 euros pour une installation neuve. Le devis ferme valide ces montants avant toute action.",
      "Les prix DRM Aix-en-Provence pour le {keyword} a {zone} sont structures par fourchette : intervention simple (moins de 60 min) a partir de 149 euros, intervention moyenne (60 a 180 min) entre 300 et 800 euros, intervention lourde (renovation, pose neuve) au-dela. Le devis sur place precise tout, sans frais de deplacement separes.",
    ],
  },
  {
    q: [
      "DRM Aix-en-Provence intervient-il sur toutes les marques a {zone} ?",
      "Quelles marques de rideau metallique sont couvertes a {zone} ?",
      "Avec quels constructeurs DRM Aix-en-Provence travaille-t-il pour {zone} ?",
    ],
    a: [
      "Oui, nos techniciens travaillent avec les principales marques du marche : Somfy, Simu, Nice, ACM, Came, BFT, Sommer, Masinara, Gaposa. Pour le {keyword} a {zone}, nous disposons en stock des pieces compatibles avec ces marques (moteurs tubulaires, moteurs centraux, ressorts, lames, serrures).",
      "DRM Aix-en-Provence est multimarque sur {zone}. Notre depot couvre Somfy (tubulaires), Simu (tubulaires), Nice (Era, Big Era), ACM (Titan, Raptor 76, Centris XXL), Came (axes industriels), BFT, Sommer (lateral GIGAroll). Nous appliquons les preconisations constructeurs et preservons la garantie d'origine.",
      "Notre equipe est formee aux references suivantes pour le {keyword} a {zone} : moteurs tubulaires Somfy RS100/RS125/RS180/Oximo/Sonesse, moteurs Simu T5/T8, moteurs ACM Titan/Centris XXL, moteurs Came/BFT industriels, moteurs lateraux Sommer. Nous proposons aussi les automatismes Nice Era pour les telecommandes.",
    ],
  },
  {
    q: [
      "Quelle garantie sur un {keyword} a {zone} ?",
      "Comment fonctionne la garantie DRM Aix-en-Provence a {zone} ?",
      "Que couvre la garantie DRM Aix-en-Provence pour un {keyword} a {zone} ?",
    ],
    a: [
      "Toutes les interventions de {keyword} a {zone} sont couvertes par une garantie 2 ans sur les pieces neuves et 1 an sur la main-d'oeuvre. La garantie est trace au devis et a la facture. En cas de defaillance d'une piece dans la periode, DRM Aix-en-Provence reintervient gratuitement.",
      "La garantie DRM Aix-en-Provence sur {keyword} a {zone} est ecrite : 2 ans pieces, 1 an main-d'oeuvre, sans franchise. Elle couvre la defaillance prematuree d'une piece neuve, le defaut d'installation d'un composant pose par notre equipe, le mauvais reglage d'un automatisme. Elle ne couvre pas l'usure normale ou les degradations accidentelles ulterieures.",
      "Pour le {keyword} a {zone}, DRM Aix-en-Provence applique la garantie suivante : 24 mois sur les pieces neuves fournies, 12 mois sur la main-d'oeuvre de pose. La garantie joue sans franchise : en cas de defaillance, nous intervenons gratuitement (deplacement compris). Les pieces de reemploi (occasion) ne sont garanties que 6 mois.",
    ],
  },
  {
    q: [
      "DRM Aix-en-Provence se deplace-t-il dans tout le quartier {quartier1} a {zone} ?",
      "Quels quartiers de {zone} sont couverts par DRM Aix-en-Provence ?",
      "L'equipe DRM Aix-en-Provence couvre-t-elle l'ensemble de {zone} ?",
    ],
    a: [
      "Oui, notre equipe couvre l'integralite de {zone} et de ses quartiers : {quartiers}. Que vous soyez sur {street1}, autour de {landmark1} ou en peripherie, nous intervenons dans les memes delais et au meme tarif.",
      "DRM Aix-en-Provence couvre {zone} sans distinction de quartier : {quartiers}. Nos techniciens connaissent les particularites d'acces de chaque secteur (zones a stationnement reglemente, rues pietonnes, parkings de livraison). Le tarif est uniforme, sans surcout zone difficile.",
      "Nous intervenons sur l'ensemble du territoire communal de {zone}, du centre historique aux quartiers peripheriques. Les principaux secteurs couverts sont : {quartiers}. Cette homogeneite tarifaire et delai est ecrite contractuellement : pas de frais cache selon l'eloignement.",
    ],
  },
  {
    q: [
      "Faut-il un acompte pour un {keyword} a {zone} ?",
      "DRM Aix-en-Provence demande-t-il un paiement avant intervention a {zone} ?",
      "Quel mode de paiement accepte DRM Aix-en-Provence a {zone} ?",
    ],
    a: [
      "Pour le {keyword} a {zone}, DRM Aix-en-Provence ne demande aucun acompte sur les interventions de moins de 1000 euros. Pour les chantiers superieurs (installation neuve, motorisation complete), un acompte de 30 % est demande a la signature du devis. Paiement par carte, virement ou cheque, facture etablie le jour meme.",
      "Aucun acompte n'est exige pour un {keyword} simple a {zone} (depannage, reparation, deblocage). Vous reglez sur place ou sous 7 jours. Pour les chantiers >1000 euros, l'acompte 30 % securise la commande de pieces sur-mesure et le planning. DRM Aix-en-Provence accepte CB, virement et cheque, ainsi que les commandes administratives (BAT, mandat) pour les administrations.",
      "DRM Aix-en-Provence applique pour le {keyword} a {zone} une politique de paiement souple : rien a l'avance pour les interventions courantes, 30 % d'acompte pour les chantiers >1000 euros, solde a la fin. Nous acceptons la carte bancaire, le virement, le cheque et le paiement administratif (mandat ou BAT). Facture remise immediatement.",
    ],
  },
  {
    q: [
      "DRM Aix-en-Provence fournit-il une attestation pour l'assurance apres un {keyword} a {zone} ?",
      "Y a-t-il un document remis apres une intervention a {zone} ?",
      "Comment justifier l'intervention DRM Aix-en-Provence aupres de mon assurance ?",
    ],
    a: [
      "Apres tout {keyword} a {zone}, DRM Aix-en-Provence remet une facture detaillee (pieces, main-d'oeuvre, garantie) plus, sur demande, une attestation d'intervention destinee a l'assurance. Cette attestation precise la nature de la panne ou du chantier, les pieces remplacees et la conformite aux normes. Elle est utile en cas de sinistre, expertise ou litige.",
      "Pour le {keyword} a {zone}, vous recevez systematiquement une facture nominative (cachet entreprise, SIRET, montant HT/TTC) et un bordereau d'intervention signé. Sur simple demande, nous etablissons une attestation pour l'assurance ou la copropriete, gratuitement. Ce document precise l'etat avant intervention, les gestes effectues et la conformite aux normes en vigueur.",
      "DRM Aix-en-Provence remet apres chaque {keyword} a {zone} un dossier complet : facture, bordereau d'intervention, garantie ecrite. Pour les usages assurance ou expertise, nous etablissons aussi sur demande une attestation circonstanciee (gratuite) detaillant le diagnostic, les pieces remplacees et le respect des normes (EN 12453 pour la securite, NF C 15-100 pour l'electricite).",
    ],
  },
];

function pickIdx<T>(arr: T[], seed: number, offset = 0): T {
  return arr[(seed + offset) % arr.length];
}

function fillTokens(text: string, tokens: Record<string, string>): string {
  return Object.entries(tokens).reduce(
    (out, [k, v]) => out.split(`{${k}}`).join(v),
    text,
  );
}

export function buildServiceZoneContent(
  serviceId: string,
  zoneName: string,
  zoneSlug: string,
  zonePostal: string,
): ServiceZoneContent {
  const seed = hashZoneSlug(`${serviceId}-${zoneSlug}`);
  const local: ZoneLocal = getZoneLocal(zoneSlug);
  const word = serviceWording[serviceId] ?? serviceWording.depannage;

  const tokens: Record<string, string> = {
    keyword: word.keyword,
    verb: word.verb,
    zone: zoneName,
    postal: zonePostal,
    landmark1: local.landmarks[0] ?? "centre-ville",
    landmark2: local.landmarks[1] ?? local.landmarks[0] ?? "centre-ville",
    street1: local.streets[0] ?? "rue principale",
    street2: local.streets[1] ?? local.streets[0] ?? "rue principale",
    quartier1: local.quartiers[0] ?? "centre",
    quartier2: local.quartiers[1] ?? local.quartiers[0] ?? "centre",
    commerce1: local.commerces[0] ?? "commerces",
    specifique: local.specifique,
    quartiers: local.quartiers.join(", "),
  };

  const introTitle = fillTokens(pickIdx(introTitleAngles, seed, 1), tokens);
  const introText = fillTokens(pickIdx(introTextAngles, seed, 3), tokens);
  const typesIntro = fillTokens(pickIdx(typesIntroAngles, seed, 5), tokens);
  const seo1Title = fillTokens(pickIdx(seo1TitleAngles, seed, 7), tokens);
  const seo1Text = fillTokens(pickIdx(seo1TextAngles, seed, 11), tokens);
  const seo2Title = fillTokens(pickIdx(seo2TitleAngles, seed, 13), tokens);
  const seo2Text = fillTokens(pickIdx(seo2TextAngles, seed, 17), tokens);
  const localExpertiseText = fillTokens(pickIdx(localExpertiseAngles, seed, 19), tokens);
  const whyUsText = fillTokens(pickIdx(whyUsAngles, seed, 23), tokens);
  const ctaTitle = fillTokens(pickIdx(ctaTitleAngles, seed, 29), tokens);

  const localExpertiseTitle = `Notre experience du ${word.keyword} a ${zoneName}`;
  const whyUsTitle = `Pourquoi choisir DRM Aix-en-Provence pour votre ${word.keyword} a ${zoneName}`;

  // FIRST question MUST be "Qui appeler" (bank index 0) per DRM skill rule #8.
  // The 5 following questions are rotated among the remaining banks.
  const otherBanks = [1, 2, 3, 4, 5, 6, 7];
  const startFaq = seed % otherBanks.length;
  const rotatedOthers = [...otherBanks.slice(startFaq), ...otherBanks.slice(0, startFaq)];
  const selectedFaqs = [0, ...rotatedOthers.slice(0, 5)];

  const faq = selectedFaqs.map((idx, i) => {
    const bank = faqBanks[idx];
    // Force "Qui appeler..." variant on the first question (bank 0) per DRM skill rule #8
    const qIdx = idx === 0 && i === 0 ? 0 : (seed + 31 + i * 3);
    const q = fillTokens(pickIdx(bank.q, qIdx, 0), tokens);
    const a = fillTokens(pickIdx(bank.a, seed, 37 + i * 5), tokens);
    return { question: q, answer: a };
  });

  return {
    introTitle,
    introText,
    typesIntro,
    seo1Title,
    seo1Text,
    seo2Title,
    seo2Text,
    localExpertiseTitle,
    localExpertiseText,
    whyUsTitle,
    whyUsText,
    ctaTitle,
    faq,
  };
}

export function getServiceWording(serviceId: string) {
  return serviceWording[serviceId] ?? serviceWording.depannage;
}
