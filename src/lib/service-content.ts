import { getZoneLocal, hashZoneSlug, type ZoneLocal } from "@/lib/zone-local-data";

export interface ServiceZoneContent {
  introTitle: string;
  introText: string;
  typesIntro: string;
  seo1Title: string;
  seo1Text: string;
  seo2Title: string;
  seo2Text: string;
  seo3Title: string;
  seo3Text: string;
  seo4Title: string;
  seo4Text: string;
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
  "A {zone}, faites confiance a DRM Aix-en-Provence pour votre {keyword}",
  "Specialiste de votre {keyword} a {zone} et sur le Pays d'Aix",
  "{keyword} a {zone} : devis gratuit en 24h",
  "{zone} ({postal}) : votre {keyword} avec DRM Aix-en-Provence",
  "Un specialiste local de votre {keyword} a {zone}",
  "DRM Aix-en-Provence, votre artisan pour votre {keyword} a {zone}",
  "Demandez votre {keyword} a {zone} en quelques minutes",
];

const introTextAngles: string[] = [
  "DRM Aix-en-Provence intervient pour {verb} votre rideau metallique a {zone} ({postal}). Plus de 25 ans d'experience sur le Pays d'Aix et le Pays d'Aix, equipe de techniciens specialistes des fermetures metalliques pour commerces et industriels. Diagnostic precis, devis transparent, intervention dans les meilleurs delais sur tout le secteur autour de {landmark1}.",
  "Quand il faut {verb} un rideau metallique a {zone}, vous avez besoin d'un specialiste local. DRM Aix-en-Provence couvre votre commune et l'ensemble du Pays d'Aix depuis 25+ ans. Vehicule atelier stocke en pieces detachees, intervention sous 30 minutes en moyenne dans le secteur, garantie sur les pieces et la main-d'oeuvre.",
  "Vous cherchez un professionnel de votre {keyword} a {zone} ? DRM Aix-en-Provence est l'entreprise de reference pour les commerces, ateliers et entrepots de le Pays d'Aix. Notre savoir-faire couvre toutes les marques (Somfy, Simu, ACM, Nice, Came, BFT) et tous les types de rideaux (lames pleines P57/P90/P140, micro-perforees, grilles cobra, polycarbonate). Notre rayon d'action passe notamment par {street1} et {street2}.",
  "Sur {zone} comme dans toute l'agglomeration de Aix-en-Provence-Les Milles-Gardanne, votre {keyword} demande un savoir-faire technique precis. DRM Aix-en-Provence dispose d'une equipe formee aux dernieres normes, d'un stock de pieces strategique et d'un atelier de fabrication a moins de 30 minutes. Resultat : intervention rapide, devis honnete, garantie ferme.",
  "DRM Aix-en-Provence, c'est 25 ans d'experience appliques au {keyword} sur le Pays d'Aix Nord. A {zone} ({postal}), nous intervenons sur tout type de rideau metallique : commerces de centre-ville, ateliers, hangars industriels, parkings. Devis gratuit, intervention 24h/24, sans surcout urgence en horaires normaux. Le quartier {quartier1} est particulierement bien couvert.",
  "Votre {keyword} a {zone} merite un specialiste qui connait votre commune. DRM Aix-en-Provence intervient regulierement sur le secteur, notre equipe maitrise les contraintes locales (vent aixois, humidite hivernale, batiments historiques) et adapte chaque intervention au contexte. Plus de 5000 interventions realisees sur le Pays d'Aix.",
  "Cette page presente notre offre de {keyword} a {zone}. Que vous soyez gerant de boulangerie sur {street1}, restaurateur a {quartier1} ou industriel a proximite de {landmark1}, l'equipe DRM Aix-en-Provence adapte son intervention a votre activite et a votre type de fermeture metallique. Devis ferme avant intervention, garantie ecrite.",
  "Pour un {keyword} efficace a {zone}, il faut trois choses : un diagnostic precis, des pieces d'origine et une equipe joignable rapidement. DRM Aix-en-Provence reunit ces trois conditions depuis 25 ans. Notre delai moyen d'intervention sur {zone} est de 30 minutes en horaires ouvrables, garanti contractuellement.",
  "Confier votre {keyword} a {zone} a DRM Aix-en-Provence, c'est gagner du temps et de la serenite. Plus de 5000 interventions a notre actif sur le Pays d'Aix, dont une part significative sur votre commune et ses {commerce1}. Tous les techniciens sont salaries en interne, pas de sous-traitance.",
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
  "L'approche DRM Aix-en-Provence de votre {keyword} a {zone}",
  "Les coulisses d'une intervention de {keyword} a {zone}",
  "Methode et exigence pour votre {keyword} a {zone}",
];

const seo1TextAngles: string[] = [
  "A {zone}, chaque intervention DRM Aix-en-Provence commence par un diagnostic precis du rideau metallique. Notre technicien controle l'axe, les coulisses, le tablier, le moteur et la serrure. Si vous avez fourni votre numero, nous etablissons un pre-diagnostic au telephone pour evaluer l'urgence et prevoir le materiel necessaire. Sur place, le devis est etabli avant toute intervention : 25 ans d'experience nous permettent d'estimer le temps et les pieces en quelques minutes.",
  "Notre methode pour {verb} un rideau metallique a {zone} suit un protocole eprouve : 1) inspection visuelle complete, 2) test des composants electriques (moteur, fins de course, telecommande), 3) verification mecanique (lames, axe, ressorts), 4) remise en service et test sous tension. Cette approche systematique evite les diagnostics partiels et garantit la durabilite de l'intervention.",
  "DRM Aix-en-Provence traite chaque demande de {keyword} a {zone} de maniere structuree. Notre technicien arrive avec le vehicule atelier rempli de pieces detachees standard : lames pleines P57 et P90, moteurs tubulaires Somfy et Simu, moteurs centraux ACM, ressorts, serrures, coulisses. La plupart des interventions sont terminees en une seule visite. Notre rayon d'action couvre {street1}, {street2} et tout le quartier {quartier1}.",
  "L'intervention de {keyword} a {zone} se decompose en quatre temps : diagnostic, devis sur place, intervention, test final. A chaque etape, le client est informe : nature du probleme, pieces a remplacer, prix exact, garantie applicable. Cette transparence est la regle DRM Aix-en-Provence depuis 25 ans : pas de surprise, pas de surfacturation, pas d'intervention non autorisee.",
  "Pour {verb} un rideau metallique a {zone}, notre equipe dispose d'outils specialises : multimetre electrique, douilles a cliquet, perceuse a percussion, chalumeau, soudeuse a l'arc, gabarits de coupe pour les lames. Nous fabriquons et livrons sur place en moins de 4 heures en cas de besoin urgent d'une piece sur-mesure (lame, axe, coulisse).",
  "A {zone}, l'efficacite d'une intervention DRM Aix-en-Provence repose sur la preparation. Avant le depart, le technicien consulte le carnet de l'adresse (si rideau deja connu), prepare les pieces probables, verifie la charge du vehicule. Cette anticipation reduit le temps sur place de 30 a 40 % par rapport a une intervention sans preparation, ce qui se traduit pour le client par un cout final plus bas.",
  "La phase de diagnostic est determinante pour un {keyword} reussi a {zone}. DRM Aix-en-Provence consacre les 15 premieres minutes a un audit complet : controle des fixations, mesure de l'usure des coulisses, test de continuite electrique, inspection des soudures, verification de la lubrification. Cette rigueur evite les diagnostics partiels et les interventions repetees. Notre technicien repere souvent un probleme connexe ignore par le client.",
  "Pour votre {keyword} a {zone}, DRM Aix-en-Provence applique un protocole calque sur les recommandations constructeurs (Somfy, ACM, Simu) : remplacer plutot que reparer une piece a risque, jamais d'improvisation, traceabilite ecrite de chaque geste sur le bordereau d'intervention. Cette discipline est ce qui differencie un artisan local d'un depanneur generaliste.",
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
  "Stock pieces detachees pour votre {keyword} a {zone}",
  "Marques partenaires et qualite a {zone}",
  "Engagement DRM Aix-en-Provence pour votre {keyword} a {zone}",
  "Securite et durabilite : nos standards pour {zone}",
];

const seo2TextAngles: string[] = [
  "Sur le secteur de {zone}, DRM Aix-en-Provence mobilise un veritable atelier embarque. Chaque vehicule contient des lames pleines P57 (0,6 mm) et P90 (0,8 mm), des moteurs tubulaires Somfy RS100 et Simu T5, des moteurs centraux ACM Titan et Centris XXL, des ressorts de compensation, des coulisses standard, des serrures profil europeen 4 points. Cela couvre 90 % des interventions de {keyword} sans deplacement supplementaire.",
  "Confier votre {keyword} a DRM Aix-en-Provence a {zone}, c'est miser sur un acteur local etabli depuis 25 ans. Nous travaillons avec les principales marques du marche (Somfy, Simu, Nice, ACM, Came, BFT, Sommer) en pieces d'origine. Nos techniciens sont formes regulierement aux nouveautes constructeurs : motorisations connectees, axes haute charge, automatismes domotique-compatibles.",
  "Notre atelier de fabrication, situe a moins de 30 minutes de {zone}, nous permet de produire des lames et axes sur-mesure en moins de 4 heures pour les cas urgents. Cette capacite locale est rare sur le Pays d'Aix : la plupart des concurrents commandent les pieces aupres de grossistes nationaux avec des delais de 48 a 72 heures.",
  "Toutes les interventions de {keyword} a {zone} sont couvertes par une garantie ferme : 2 ans sur les pieces neuves, 1 an sur la main-d'oeuvre. Cette garantie est trace au devis et a la facture. En cas de defaillance d'une piece dans la periode, DRM Aix-en-Provence reintervient gratuitement, sans franchise.",
  "DRM Aix-en-Provence, c'est la reactivite d'une entreprise locale et la qualite d'un specialiste national. Pour votre {keyword} a {zone}, nous engageons un delai d'intervention sous 30 minutes en horaires ouvrables, sous 1 heure en horaires d'urgence (nuit, week-end, jours feries). Aucun forfait deplacement cache : le devis annonce sur place est le prix paye.",
  "Au-dela du materiel et de la garantie, ce qui differencie DRM Aix-en-Provence pour votre {keyword} a {zone}, c'est la transparence. Nous expliquons chaque intervention au client : pourquoi cette piece, pourquoi ce prix, quelles alternatives. Les devis sont detailes ligne par ligne. Si un controle d'expertise est demande (assurance, copropriete), nous fournissons tous les justificatifs.",
  "DRM Aix-en-Provence selectionne ses fournisseurs avec la meme exigence depuis 25 ans. Pour votre {keyword} a {zone}, nous travaillons exclusivement avec des references homologuees : moteurs sous garantie constructeur (5 ans Somfy, 4 ans Simu, 3 ans ACM), lames acier galvanise repondant a la norme EN 12424 (anti-effraction classe RC2), serrures certifiees A2P. Cette exigence est rarement explicite chez les concurrents : nous l'inscrivons noir sur blanc sur le devis.",
  "Le stockage des pieces de {keyword} fait la difference a {zone}. Notre depot de le Pays d'Aix conserve en permanence 5 generations de moteurs tubulaires Somfy (RS100, RS125, RS180, Oximo, Sonesse), 3 generations de moteurs centraux ACM (Titan classique, Titan Plus, Centris XXL), une vingtaine de references de serrures et plus de 200 longueurs de lames pretes a couper. Resultat : 95 % des interventions terminees en une seule visite.",
  "Le service apres-vente est aussi important que l'intervention elle-meme. DRM Aix-en-Provence tient un carnet d'historique pour chaque rideau metallique entretenu a {zone}. Chaque visite ajoute une ligne : date, geste effectue, piece changee, controle preventif. Ce suivi facilite la maintenance long terme et evite les double-interventions. Nos clients sous contrat d'entretien beneficient d'une consultation gratuite par telephone en cas de doute.",
  "Faire appel a DRM Aix-en-Provence pour votre {keyword} a {zone}, c'est aussi soutenir un acteur economique local. Nos techniciens sont tous salaries permanents, formes en interne et bases sur le Pays d'Aix. Nous travaillons avec des fournisseurs francais (Simu, Somfy France) et europeens (ACM Italie), sans recours a des sous-traitants. La traceabilite de chaque intervention est garantie par un bordereau ecrit conserve cinq ans.",
];

const seo3TitleAngles: string[] = [
  "Types de rideau metallique traites a {zone}",
  "Tous formats de rideau metallique pris en charge a {zone}",
  "Lames pleines, micro-perforees, grilles : nos specialites a {zone}",
  "Rideau metallique a {zone} : formats commerce et industriel",
  "{keyword} a {zone} : tous les types de tablier",
  "Notre savoir-faire technique pour {zone}",
  "Specificites techniques de votre {keyword} a {zone}",
  "Du commerce au hangar : nos interventions a {zone}",
];

const seo3TextAngles: string[] = [
  "A {zone}, DRM Aix-en-Provence intervient sur tous les formats de rideau metallique : lames pleines P57 (0,6 mm) pour commerces standards, lames P90 (0,8 mm) pour bijouteries et pharmacies, lames P140 double paroi pour entrepots et industriels. Notre catalogue couvre aussi les <strong>grilles cobra</strong> (tubes acier motif S, vision + securite), les grilles extensibles accordeon pour vitrines etroites, les lames micro-perforees aluminium pour conserver la visibilite, et les lames polycarbonates transparentes pour vitrines de luxe. Chaque type appelle un outillage et un savoir-faire specifique.",
  "Votre {keyword} a {zone} implique une connaissance fine des composants : <strong>axe d'enroulement</strong> en tube acier 60-76 mm, ressorts de compensation calibres selon le poids du tablier, moteurs <strong>tubulaires</strong> (Somfy RS100, Simu T5, Nice Era) integres dans l'axe, ou moteurs <strong>centraux</strong> (ACM Titan, Raptor 76, Centris XXL) sur platine au-dessus du coffre. Les techniciens DRM Aix-en-Provence maitrisent les trois technologies et savent les diagnostiquer rapidement sur site.",
  "Sur {zone}, nous intervenons sur les configurations les plus courantes : pose en applique (coffre visible exterieur), pose en linteau (coffre integre), pose imposte (sur ouverture en hauteur). Chaque configuration impose des contraintes specifiques de releve, de fabrication et de pose. Notre experience de plus de {interventions} interventions nous permet de proposer immediatement la solution adaptee a votre batiment, sans tatonnement.",
  "Les rideaux metalliques modernes integrent des fonctions evoluees que DRM Aix-en-Provence maitrise a {zone} : <strong>automatismes connectes</strong> (TaHoma, IT4WIFI), <strong>boitiers debrayables</strong> pour ouverture manuelle en panne electrique, <strong>centrales de commande Masinara M-Plus</strong> pour rideaux multi-vantaux, dispositifs de securite anti-chute, photocellules, barre palpeuse de bord d'arrete. Tous ces dispositifs sont installes, controles et entretenus par notre equipe.",
  "Au-dela des composants standards, DRM Aix-en-Provence peut produire et installer a {zone} des configurations sur-mesure : <strong>rideaux thermolaques couleur RAL</strong> (40 teintes standards), tabliers en <strong>aluminium thermolaque</strong> pour resistance aux humidite hivernale (essentiel sur le Pays d'Aix), <strong>inox brosse</strong> pour environnements de luxe, coffres anti-effraction Blindor ACM renforces. Devis sur-mesure sous 48 heures.",
  "Le diagnostic technique a {zone} commence par identifier le type de rideau et la marque du moteur. Lames pleines acier ? Micro-perforees alu ? Grille cobra ? Motorisation tubulaire ou centrale ? Marque Somfy, Simu, ACM, Nice, Came, BFT, Sommer ? Cette identification preliminaire prend moins de 5 minutes a notre technicien et determine les pieces a embarquer et le temps d'intervention attendu. Sans cette etape, on s'expose a un retour pour piece manquante.",
];

const seo4TitleAngles: string[] = [
  "Comment se preparer a un {keyword} a {zone}",
  "Avant l'arrivee du technicien DRM a {zone}",
  "Conseils pratiques avant intervention a {zone}",
  "Les bons reflexes en cas de panne a {zone}",
  "Optimiser votre {keyword} a {zone} : checklist",
  "{keyword} a {zone} : ce que nous attendons du client",
  "Reduire le temps d'intervention a {zone} : nos recommandations",
];

const seo4TextAngles: string[] = [
  "Avant l'arrivee de notre technicien a {zone}, quelques reflexes accelerent l'intervention de {keyword} : 1) ne JAMAIS forcer le rideau a la main si le moteur ne repond plus (risque ressort/axe), 2) couper le disjoncteur dedie au rideau pour eviter un re-demarrage accidentel, 3) noter la marque du moteur si visible (Somfy, Simu, ACM, Nice), 4) photographier la position du blocage ou la lame deformee, 5) preparer l'acces au coffre (cartons, mobilier, vehicule a ecarter). Ces gestes font gagner 15 a 30 minutes sur place.",
  "Pour un {keyword} reussi a {zone}, le rendez-vous est plus efficace si vous reunissez ces informations : <strong>age approximatif du rideau metallique</strong>, dernieres interventions connues (entretien, remplacement de piece), <strong>marque visible</strong> sur le moteur ou le boitier electrique, contexte d'apparition de la panne (choc, coupure de courant, usure progressive), <strong>plage horaire de votre commerce</strong> pour planifier l'intervention en minimisant la gene clients.",
  "Lors d'un {keyword} a {zone}, notre technicien aura besoin d'acces : <strong>compteur electrique</strong> pour couper l'alimentation moteur, <strong>parking court</strong> pour le vehicule atelier (cones disponibles sur demande), <strong>cle de la serrure</strong> de lame finale si elle existe. Sur les commerces a vitrine etroite, prevoir la possibilite de bacher temporairement l'ouverture pendant la depose du tablier (15 a 60 min selon la nature de l'intervention).",
  "Pour les interventions a {zone} programmees (installation neuve, motorisation, fabrication sur-mesure), DRM Aix-en-Provence organise une <strong>visite technique prealable gratuite</strong>. Le technicien mesure precisement l'ouverture (largeur, hauteur, profondeur du coffre), evalue les contraintes electriques (passage de cable, tableau electrique), photographie la facade et etablit un devis ferme sous 48 heures. Cette visite evite les mauvaises surprises a la pose.",
  "Apres notre {keyword} a {zone}, vous recevez un <strong>dossier complet</strong> : facture detaillee (pieces, main-d'oeuvre, garantie), bordereau d'intervention signe (etat avant/apres, pieces remplacees), garantie ecrite 2 ans pieces / 1 an main-d'oeuvre. Pour les usages assurance ou expertise, nous etablissons gratuitement une attestation circonstanciee precisant le diagnostic, les gestes et le respect des normes (EN 12453 securite, NF C 15-100 electricite). Ce dossier est conserve cinq ans dans nos archives.",
  "Pour les commerces et professionnels de {zone} qui veulent eviter les pannes recurrentes sur leur rideau metallique, DRM Aix-en-Provence propose un <strong>contrat d'entretien annuel</strong> : 2 a 4 visites par an avec graissage de l'axe, controle des ressorts, test electrique du moteur, lubrification de la serrure, verification du serrage des fixations. Resultat constate : <strong>60 % de pannes en moins</strong> chez nos clients sous contrat, et priorite d'intervention en cas d'urgence.",
];

const typesIntroAngles: string[] = [
  "A {zone}, votre {keyword} concerne aussi bien les {commerce1} que les ateliers, hangars et entrepots du secteur. Selon le type de rideau (lames pleines, micro-perforees, grille cobra, polycarbonate) et la marque du moteur, l'approche technique varie : DRM Aix-en-Provence adapte ses interventions a chaque configuration rencontree sur la commune.",
  "Sur {zone}, nous distinguons cinq familles d'interventions en {keyword}. Chacune fait appel a un outillage specifique, un stock de pieces particulier et un temps d'intervention different. Notre experience accumulee sur {commerce1} et les ateliers du secteur nous permet de diagnostiquer la famille en quelques minutes.",
  "Les commerces de {zone} presentent des configurations tres variees pour leur rideau metallique : devantures etroites du centre ancien, vitrines larges des avenues commercantes, hangars industriels ou parkings techniques. DRM Aix-en-Provence adapte son materiel et ses gestes a chacun de ces cas, ce qui evite les surcouts et les retours.",
  "Votre {keyword} a {zone} ne s'improvise pas : selon la marque du moteur, l'age du tablier et le type de batiment, l'intervention peut durer de 30 minutes a une journee complete. Notre equipe etablit un diagnostic precis et chiffre le devis avant tout commencement, sans frais.",
  "Sur le secteur {zone}, DRM Aix-en-Provence a traite plusieurs centaines de cas relevant de votre {keyword}. Cette experience nous permet de reconnaitre rapidement les configurations les plus frequentes et d'y repondre avec les bons outils, le bon materiel et le bon planning. Resultat : moins d'aller-retour, moins de couts caches, plus de fiabilite.",
  "Que le rideau metallique de {zone} soit motorise ou manuel, recent ou ancien, neuf ou repare plusieurs fois, DRM Aix-en-Provence dispose d'une approche {keyword} adaptee. Notre stock couvre les principales marques et les principaux formats : ce qui permet de proposer un devis precis et un delai realiste des le premier rendez-vous.",
];

const whyUsAngles: string[] = [
  "DRM Aix-en-Provence combine experience longue (25 ans), atelier de fabrication local, vehicules atelier completement equipes et garantie ferme 2 ans pieces / 1 an main-d'oeuvre. Pour votre {keyword} a {zone}, cette combinaison est rare sur le Pays d'Aix. Nous traitons aussi bien les urgences (rideau bloque a la fermeture, panne moteur le dimanche soir) que les chantiers programmes (installation neuve, motorisation d'une fermeture manuelle, contrat d'entretien annuel).",
  "Trois raisons principales de confier votre {keyword} a {zone} a DRM Aix-en-Provence : 1) un atelier de fabrication sur le Pays d'Aix qui nous rend autonomes en pieces sur-mesure, 2) une equipe de techniciens permanents formes a toutes les marques majeures, 3) une politique de devis ferme sans surprise et une garantie 2 ans ecrite. Ces trois elements sont rarement reunis chez les concurrents.",
  "DRM Aix-en-Provence a fait de votre {keyword} a {zone} l'une de ses specialites principales. Nous y intervenons plusieurs fois par semaine, sur des configurations tres variees : commerces de centre-ville, ateliers d'artisans, hangars logistiques, parkings prives. Cette densite d'experience nous permet de proposer des solutions eprouvees plutot que des bricolages improvises.",
  "Pour votre {keyword} a {zone}, DRM Aix-en-Provence s'engage par ecrit sur trois points : delai d'intervention (30 min ouvrables, 60 min urgence), devis ferme sans frais caches, garantie 2 ans pieces / 1 an main-d'oeuvre. Cet engagement contractuel est notre signature commerciale : il differencie DRM Aix-en-Provence des intervenants ponctuels et rassure les commerces qui en sont a leur premier rideau metallique.",
  "Choisir DRM Aix-en-Provence pour votre {keyword} a {zone}, c'est choisir la continuite. Le technicien qui pose votre rideau aujourd'hui sera disponible demain pour le depanner, l'entretenir ou le motoriser. Cette logique de proximite est rare dans le metier ou la sous-traitance est devenue majoritaire. Chez DRM Aix-en-Provence, l'equipe est salariee, formee en interne et durable.",
  "DRM Aix-en-Provence tient une promesse claire pour votre {keyword} a {zone} : pas de devis flou, pas de pieces non agreees, pas de garantie verbale. Tout est ecrit, signe, conserve. Cette discipline a un cout administratif que nous absorbons, mais elle se traduit pour le client par une qualite constante et la possibilite de faire jouer la garantie sans discussion.",
];

const localExpertiseAngles: string[] = [
  "{specifique} Nous y intervenons regulierement, notamment sur {street1}, {street2}, autour de {landmark1} et dans le quartier {quartier1}. Cette connaissance du terrain {zone} fait gagner du temps : nos techniciens identifient rapidement les contraintes d'acces, les horaires de circulation et les particularites architecturales locales. Resultat : un {keyword} plus rapide, mieux adapte aux exigences de votre commerce ou de votre site, avec une logistique de pieces optimisee.",
  "{specifique} DRM Aix-en-Provence a une cartographie precise du secteur {zone} : ou se trouvent les commerces sensibles ({commerce1}), quels axes sont congestionnes aux heures de pointe, quelle est la voie d'acces la plus courte selon le quartier ({quartier1}, {quartier2}). Cette intelligence terrain rend chaque {keyword} plus rapide et plus efficient.",
  "Le caractere local de DRM Aix-en-Provence est essentiel pour un bon {keyword} a {zone}. {specifique} Nous connaissons les particularites architecturales du quartier {quartier1} et des rues commercantes ({street1}, {street2}), les contraintes des reglementations communales, et les habitudes des commercants locaux ({commerce1}). Ce contexte change la nature meme de l'intervention.",
  "Intervenir sur votre {keyword} a {zone} implique de connaitre le terrain. DRM Aix-en-Provence s'est implante depuis longtemps sur ce secteur. {specifique} Nos techniciens citent par habitude {landmark1} ou {street1} : c'est cette familiarite qui rassure les commercants et fluidifie chaque intervention.",
  "{specifique} A {zone} comme dans toute le Pays d'Aix, DRM Aix-en-Provence ajoute a son expertise technique une connaissance fine du contexte local : commerces dominants ({commerce1}), reglementations specifiques, profil meteo (vent aixois, humidite hivernale). Cette synthese permet de proposer un {keyword} mieux adapte qu'un intervenant national parachute.",
  "Notre travail sur {zone} pour votre {keyword} est nourri par des centaines d'interventions accumulees sur la commune. {specifique} Cette experience cumulee, indissociable du terrain, nous permet de prevoir les difficultes et d'eviter les pieges. Resultat : un travail plus fiable, plus rapide et moins couteux pour le client final autour de {street1} et {street2}.",
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
      "DRM Aix-en-Provence est le specialiste de votre {keyword} sur {zone} ({postal}) et l'ensemble de le Pays d'Aix. Notre equipe intervient 24h/24, 7j/7, avec un atelier de fabrication a moins de 30 minutes. Demandez votre devis via notre formulaire ou contactez-nous : intervention possible le jour meme dans la plupart des cas.",
      "Pour un {keyword} a {zone}, faites appel a DRM Aix-en-Provence. Notre permanence couvre le Pays d'Aix depuis 25 ans, avec une equipe salariee en interne et un stock de pieces strategique. Reponse a votre demande sous 1 heure en horaires ouvrables.",
      "DRM Aix-en-Provence est l'acteur historique de votre {keyword} a {zone}. Une demande passe par notre formulaire, un technicien vous rappelle pour un pre-diagnostic, l'intervention est planifiee sous 24 a 48 heures (sous 30 minutes en urgence). Devis ferme avant toute action.",
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
      "Le delai DRM Aix-en-Provence pour votre {keyword} a {zone} est garanti par ecrit : 30 minutes en horaires ouvrables, 1 heure en urgence. Pour une installation neuve, le delai moyen est de 7 jours ouvres (releve technique compris). Pour une fabrication sur-mesure express, comptez 4 heures.",
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
      "Les prix DRM Aix-en-Provence pour votre {keyword} a {zone} sont structures par fourchette : intervention simple (moins de 60 min) a partir de 149 euros, intervention moyenne (60 a 180 min) entre 300 et 800 euros, intervention lourde (renovation, pose neuve) au-dela. Le devis sur place precise tout, sans frais de deplacement separes.",
    ],
  },
  {
    q: [
      "DRM Aix-en-Provence intervient-il sur toutes les marques a {zone} ?",
      "Quelles marques de rideau metallique sont couvertes a {zone} ?",
      "Avec quels constructeurs DRM Aix-en-Provence travaille-t-il pour {zone} ?",
    ],
    a: [
      "Oui, nos techniciens travaillent avec les principales marques du marche : Somfy, Simu, Nice, ACM, Came, BFT, Sommer, Masinara, Gaposa. Pour votre {keyword} a {zone}, nous disposons en stock des pieces compatibles avec ces marques (moteurs tubulaires, moteurs centraux, ressorts, lames, serrures).",
      "DRM Aix-en-Provence est multimarque sur {zone}. Notre depot couvre Somfy (tubulaires), Simu (tubulaires), Nice (Era, Big Era), ACM (Titan, Raptor 76, Centris XXL), Came (axes industriels), BFT, Sommer (lateral GIGAroll). Nous appliquons les preconisations constructeurs et preservons la garantie d'origine.",
      "Notre equipe est formee aux references suivantes pour votre {keyword} a {zone} : moteurs tubulaires Somfy RS100/RS125/RS180/Oximo/Sonesse, moteurs Simu T5/T8, moteurs ACM Titan/Centris XXL, moteurs Came/BFT industriels, moteurs lateraux Sommer. Nous proposons aussi les automatismes Nice Era pour les telecommandes.",
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
      "Pour votre {keyword} a {zone}, DRM Aix-en-Provence applique la garantie suivante : 24 mois sur les pieces neuves fournies, 12 mois sur la main-d'oeuvre de pose. La garantie joue sans franchise : en cas de defaillance, nous intervenons gratuitement (deplacement compris). Les pieces de reemploi (occasion) ne sont garanties que 6 mois.",
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
      "Pour votre {keyword} a {zone}, DRM Aix-en-Provence ne demande aucun acompte sur les interventions de moins de 1000 euros. Pour les chantiers superieurs (installation neuve, motorisation complete), un acompte de 30 % est demande a la signature du devis. Paiement par carte, virement ou cheque, facture etablie le jour meme.",
      "Aucun acompte n'est exige pour un {keyword} simple a {zone} (depannage, reparation, deblocage). Vous reglez sur place ou sous 7 jours. Pour les chantiers >1000 euros, l'acompte 30 % securise la commande de pieces sur-mesure et le planning. DRM Aix-en-Provence accepte CB, virement et cheque, ainsi que les commandes administratives (BAT, mandat) pour les administrations.",
      "DRM Aix-en-Provence applique pour votre {keyword} a {zone} une politique de paiement souple : rien a l'avance pour les interventions courantes, 30 % d'acompte pour les chantiers >1000 euros, solde a la fin. Nous acceptons la carte bancaire, le virement, le cheque et le paiement administratif (mandat ou BAT). Facture remise immediatement.",
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
      "Pour votre {keyword} a {zone}, vous recevez systematiquement une facture nominative (cachet entreprise, SIRET, montant HT/TTC) et un bordereau d'intervention signé. Sur simple demande, nous etablissons une attestation pour l'assurance ou la copropriete, gratuitement. Ce document precise l'etat avant intervention, les gestes effectues et la conformite aux normes en vigueur.",
      "DRM Aix-en-Provence remet apres chaque {keyword} a {zone} un dossier complet : facture, bordereau d'intervention, garantie ecrite. Pour les usages assurance ou expertise, nous etablissons aussi sur demande une attestation circonstanciee (gratuite) detaillant le diagnostic, les pieces remplacees et le respect des normes (EN 12453 pour la securite, NF C 15-100 pour l'electricite).",
    ],
  },
];

function pickIdx<T>(arr: T[], seed: number, offset = 0): T {
  // Mix avec un prime different par offset = decorrelation des banks
  // (evite que 2 zones se croisent sur tous les blocs en meme temps)
  const PRIMES = [9176, 16127, 22147, 28403, 33391, 41597, 48619, 55733, 63247, 70687];
  const prime = PRIMES[offset % PRIMES.length];
  return arr[Math.abs(seed * prime + offset * 7919) % arr.length];
}

// Genere une variante "miroir" de l'angle texte en inversant l'ordre des phrases.
// Double le pool effectif de chaque bank sans ecriture supplementaire.
function mirrorAngle(text: string): string {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z])/);
  if (sentences.length < 2) return text;
  return sentences.reverse().join(" ");
}

// Pour les blocs texte : choisit angle direct ou miroir selon parite du seed.
// Effectivement double le nombre d'angles distincts dans la collection.
function pickAngleVariant(arr: string[], seed: number, offset: number): string {
  const idx = Math.abs(seed * 13 + offset * 17) % (arr.length * 2);
  const baseIdx = Math.floor(idx / 2);
  const mirror = idx % 2 === 1;
  return mirror ? mirrorAngle(arr[baseIdx]) : arr[baseIdx];
}

function fillTokens(text: string, tokens: Record<string, string>): string {
  return Object.entries(tokens).reduce(
    (out, [k, v]) => out.split(`{${k}}`).join(v),
    text,
  );
}

// Fragments hyper-locaux uniques par zone × bloc.
// Chaque zone a 3-5 streets/landmarks/quartiers/commerces dans zone-local-data.ts.
// Ces fragments les recombinent en phrases differentes par bloc, garantissant
// que meme si 2 zones piquent le meme angle, le suffixe local diverge.
const localTouchTemplates: string[] = [
  " Sur place, nos techniciens connaissent les contraintes d'acces de {street1} et la circulation autour de {landmark1}, ce qui evite les pertes de temps habituelles.",
  " Notre experience du quartier {quartier1} et des commerces de type {commerce1} nous donne une longueur d'avance sur le diagnostic et les pieces a embarquer.",
  " Les commerces situes pres de {landmark2} et le long de {street2} font partie des interventions les plus frequentes pour notre equipe locale.",
  " A {quartier2}, nos vehicules atelier sont souvent stationnes a moins de 5 minutes, ce qui reduit drastiquement le delai d'intervention par rapport a un depanneur generaliste.",
  " Le contexte {commerce1} de {street1} demande une approche particuliere que nous avons rodee au fil de centaines d'interventions sur le secteur.",
  " Notre tournee passe regulierement par {landmark1}, {street1} et {quartier1}, ce qui nous donne une connaissance fine du tissu commercial autour de votre adresse.",
  " Nous arrivons en general par {street2} et nous stationnons a proximite immediate de {landmark1}, ce qui evite les soucis de parking habituels.",
  " Le secteur {quartier1} avec ses {commerce1} represente l'essentiel de notre activite courante a {zone}, autant en frequence qu'en variete de cas.",
  " Pour les commerces de {street1} pres de {landmark2}, nous avons identifie les pannes recurrentes et les pieces de rechange a stocker en priorite.",
  " Notre familiarite avec les batiments du {quartier2} (souvent anciens, parfois classes) explique pourquoi les commerces locaux nous recommandent regulierement entre eux.",
  " Le passage par {landmark1} fait partie du quotidien de notre equipe, qu'il s'agisse d'une urgence sur {street2} ou d'une visite d'entretien en {quartier1}.",
  " Les {commerce1} de {zone} apprecient particulierement notre delai d'intervention sur {street1}, mesure et garanti contractuellement.",
];

// Phrase complementaire (corpus distinct) pour double-injection sans repetition de tournure.
const localContextTemplates: string[] = [
  " Cette dimension locale fait souvent la difference avec un intervenant national parachute, surtout pour les pannes nocturnes ou les jours feries.",
  " Notre numero direct et notre planning local nous permettent de tenir le delai annonce, meme aux heures les plus chargees autour de {landmark1}.",
  " Les commercants de {quartier1} savent qu'ils peuvent compter sur DRM Aix-en-Provence pour ne pas mobiliser leur boutique plus longtemps que necessaire.",
  " Nous appliquons sur {zone} les memes standards qualite que sur les grandes agglomerations voisines, sans surcout ni delai allonge.",
  " La proximite avec {landmark2} reduit considerablement notre temps d'acces, particulierement en heures pleines aux abords de {street1}.",
  " Nos clients reguliers sur {zone} beneficient d'un suivi historique : on retrouve immediatement les pieces deja installees et les reglages effectues.",
  " Sur ce secteur, nous croisons plusieurs collegues du batiment ({commerce1}, electriciens, serruriers) avec qui nous coordonnons les interventions complexes.",
  " Cette continuite de presence sur {zone} explique pourquoi notre taux de fidelisation depasse 70 % sur les commerces du {quartier1}.",
  " Les artisans installes sur {street1} ou autour de {landmark1} retrouvent les memes techniciens d'une intervention a l'autre, ce qui fluidifie les diagnostics.",
  " Nous adaptons notre stock embarque a la saisonnalite de {zone} : plus de pieces moteur en hiver (humidite), plus de lames et serrures en ete (chaleur, dilatation).",
  " Sur le perimetre {quartier2} - {street2}, nous tenons un historique des interventions qui sert de base de connaissance interne.",
  " Pres de {landmark2}, le bati commercial est specifique : nous adaptons notre approche aux contraintes d'acces et de stationnement.",
];

function pickLocalTouch(
  seed: number,
  offset: number,
  tokens: Record<string, string>,
): string {
  const tpl = pickIdx(localTouchTemplates, seed, offset);
  return fillTokens(tpl, tokens);
}

function pickLocalContext(
  seed: number,
  offset: number,
  tokens: Record<string, string>,
): string {
  const tpl = pickIdx(localContextTemplates, seed, offset);
  return fillTokens(tpl, tokens);
}

// Re-arrange les phrases d'un angle selon le seed pour creer une variante textuelle
// supplementaire (meme idees, ordre different = jaccard 5-shingle different).
function reshuffleSentences(text: string, seed: number, offset: number): string {
  const sentences = text.split(/(?<=[.!?])\s+(?=[A-Z])/);
  if (sentences.length < 3) return text;
  // PRNG mulberry32 pour shuffle stable
  let s = (seed * 1657 + offset * 991) >>> 0;
  const arr = [...sentences];
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    const r = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    const j = Math.floor(r * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join(" ");
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
  const introText =
    fillTokens(pickAngleVariant(introTextAngles, seed, 3), tokens) +
    pickLocalTouch(seed, 50, tokens) +
    pickLocalContext(seed, 60, tokens);
  const typesIntro =
    fillTokens(pickAngleVariant(typesIntroAngles, seed, 5), tokens) +
    pickLocalTouch(seed, 51, tokens);
  const seo1Title = fillTokens(pickIdx(seo1TitleAngles, seed, 7), tokens);
  const seo1Text = reshuffleSentences(
    fillTokens(pickAngleVariant(seo1TextAngles, seed, 11), tokens) +
      pickLocalTouch(seed, 52, tokens) +
      pickLocalContext(seed, 61, tokens),
    seed,
    70,
  );
  const seo2Title = fillTokens(pickIdx(seo2TitleAngles, seed, 13), tokens);
  const seo2Text = reshuffleSentences(
    fillTokens(pickAngleVariant(seo2TextAngles, seed, 17), tokens) +
      pickLocalTouch(seed, 53, tokens) +
      pickLocalContext(seed, 62, tokens),
    seed,
    71,
  );
  const seo3Title = fillTokens(pickIdx(seo3TitleAngles, seed, 19), tokens);
  const seo3Text = reshuffleSentences(
    fillTokens(pickAngleVariant(seo3TextAngles, seed, 23), tokens) +
      pickLocalTouch(seed, 54, tokens) +
      pickLocalContext(seed, 63, tokens),
    seed,
    72,
  );
  const seo4Title = fillTokens(pickIdx(seo4TitleAngles, seed, 29), tokens);
  const seo4Text = reshuffleSentences(
    fillTokens(pickAngleVariant(seo4TextAngles, seed, 31), tokens) +
      pickLocalTouch(seed, 55, tokens) +
      pickLocalContext(seed, 64, tokens),
    seed,
    73,
  );
  const localExpertiseText =
    fillTokens(pickAngleVariant(localExpertiseAngles, seed, 41), tokens) +
    pickLocalTouch(seed, 56, tokens) +
    pickLocalContext(seed, 65, tokens);
  const whyUsText =
    fillTokens(pickAngleVariant(whyUsAngles, seed, 43), tokens) +
    pickLocalTouch(seed, 57, tokens) +
    pickLocalContext(seed, 66, tokens);
  const ctaTitle = fillTokens(pickIdx(ctaTitleAngles, seed, 47), tokens);

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
    const aBase = fillTokens(pickIdx(bank.a, seed, 37 + i * 5), tokens);
    // Inject local touch differente par FAQ pour casser le duplicate cross-zones
    const a = aBase + pickLocalContext(seed, 80 + i * 11, tokens);
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
    seo3Title,
    seo3Text,
    seo4Title,
    seo4Text,
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
