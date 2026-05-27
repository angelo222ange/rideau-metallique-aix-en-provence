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
  "Du Cours Mirabeau au Vieil-Aix, des ruelles pavees du Mazarin a la rocade qui dessert Les Milles, DRM Aix-en-Provence intervient pour {verb} votre rideau metallique a {zone} ({postal}). Notre artisan local sait que les contraintes architecturales du centre historique aixois ne sont pas celles d'un hangar industriel : chaque {keyword} commence par un diagnostic adapte au tissu de {street1} et au voisinage de {landmark1}.",
  "Quand il faut {verb} un rideau metallique a {zone} sous la chaleur provencale ou un soir de mistral, l'urgence ne tolere pas l'amateurisme. DRM Aix-en-Provence couvre tout le Pays d'Aix depuis le pied de la Sainte-Victoire : vehicule atelier rempli des pieces ACM, Somfy et Sommer en circulation sur le parc aixois, intervention sous 30 minutes en horaires ouvrables sur le quartier {quartier1}.",
  "Vous cherchez un specialiste du {keyword} a {zone} qui connaisse vos {commerce1} ? DRM Aix-en-Provence est l'entreprise de reference pour les commerces du Cours Mirabeau, les bastides du Tholonet, les hangars de la zone Avon et les ateliers du pole d'activites des Milles. Notre savoir-faire couvre toutes les marques presentes sur l'agglomeration aixoise (Somfy, Simu, ACM Titan, Came, Nice, BFT, Sommer GIGAroll) et tous les formats de tablier.",
  "Sur {zone}, le {keyword} repond a une logique tres provencale : mistral qui descend des Alpilles vers la plaine aixoise et torsionne les longues lames, soleil mediterraneen qui blanchit les teintes thermolaquees, calcaire pulverulent qui grippe les coulisses peu lubrifiees. DRM Aix-en-Provence forme ses techniciens a ces specificites depuis 25 ans, ce qui change la durabilite des interventions le long de {street1} et {street2}.",
  "Au pied de la Sainte-Victoire, DRM Aix-en-Provence accompagne le {keyword} a {zone} ({postal}) sur des configurations tres heterogenes : vitrines etroites du centre ancien sous arcades baroques, devantures larges du retail park Pioline, sectionnels grandes dimensions des hangars de Meyreuil, rideaux residentiels des bastides aixoises de {quartier1}. Chaque type appelle des pieces, un outillage et un temps d'intervention specifiques.",
  "Le {keyword} a {zone} a une dimension patrimoniale rare ailleurs : les Batiments de France imposent un nuancier RAL precis pour les facades du Mazarin et du Vieil-Aix, et les commerces de luxe du Cours Mirabeau exigent des tabliers discrets compatibles avec un retro-eclairage rideau ferme. DRM Aix-en-Provence travaille avec ce cahier des charges aixois depuis 25 ans, sur les commerces de {street1} comme sur les boutiques du quartier {quartier1}.",
  "Cette page presente notre offre de {keyword} a {zone}. Que vous soyez restaurateur place des Cardeurs, bijoutier rue d'Italie, gerant d'un showroom au retail park des Milles, exploitant d'un hangar logistique a Gardanne ou commercant d'un village provencal aux abords de {landmark1}, l'equipe DRM Aix-en-Provence adapte son intervention. Devis ferme signe sur place, garantie 2 ans pieces neuves, 1 an main-d'oeuvre, sans franchise ni reserve.",
  "Pour un {keyword} efficace a {zone}, il faut trois choses simultanees : un diagnostic precis sur le terrain provencal, des pieces d'origine compatibles avec le parc aixois (ACM Titan annees 90, Somfy RS100 recents, Sommer GIGAroll pour les hangars de la zone Avon), et un artisan joignable au telephone direct. DRM Aix-en-Provence reunit ces trois conditions depuis 25 ans, avec un delai moyen de 30 minutes sur {street1} et le quartier {quartier1}.",
  "Confier votre {keyword} a {zone} a DRM Aix-en-Provence, c'est miser sur la continuite locale : le meme technicien revient pour entretenir, reparer et installer. Cette logique de proximite est rare en Pays d'Aix, ou la plupart des intervenants sous-traitent a des societes nationales qui changent d'equipe tous les six mois. Plus de 5000 interventions a notre actif sur l'agglomeration aixoise, dont une part significative autour de {commerce1} et de {landmark1}.",
  "DRM Aix-en-Provence vous accompagne pour votre {keyword} a {zone} ({postal}) de la prise d'appel jusqu'a la garantie. Etapes : ecoute du besoin et pre-diagnostic au telephone, releve technique sur place avec inspection du tablier, du moteur et de la serrure, devis ferme calcule au tarif catalogue constructeur (pas de marge cachee), intervention dans le delai annonce, controle qualite, facturation transparente avec mention ecrite de la garantie. Cette discipline est notre signature aixoise.",
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
  "A {zone}, chaque intervention DRM Aix-en-Provence commence par un diagnostic sur le tablier dans son contexte aixois : facade calcaire qui peut avoir grippe l'axe, coulisses chauffees plein sud, soudures vibratoires si rideau face mistral. Le technicien inspecte axe, coulisses, tablier, moteur et serrure, puis chiffre ligne par ligne avant tout demontage. Le devis tient compte des contraintes Batiments de France pour les commerces du Mazarin ou du Vieil-Aix.",
  "Notre methode pour {verb} un rideau metallique a {zone} suit le protocole aixois eprouve sur des centaines d'interventions : 1) inspection visuelle (etat des lames, oxydation due au calcaire, jeu des coulisses), 2) test electrique complet (moteur, fins de course, telecommande, condensateur), 3) verification mecanique (axe, ressorts, jonctions), 4) remise en service et trois cycles complets sous charge reelle. Cette discipline est inscrite sur le bordereau d'intervention.",
  "DRM Aix-en-Provence traite chaque demande de {keyword} a {zone} avec un vehicule atelier dimensionne pour le parc local : lames pleines P57 (0,6 mm) et P90 (0,8 mm), moteurs tubulaires Somfy RS100 et Simu T5 frequents sur le neuf des Milles, moteurs centraux ACM Titan et RAPTOR 76 dominants sur le centre Aix annees 90, ressorts de compensation, coulisses en aluminium et acier, serrures profil europeen A2P. Notre rayon d'action couvre {street1}, {street2} et tout le quartier {quartier1}.",
  "L'intervention de {keyword} a {zone} se decompose en quatre temps annonces au client : diagnostic aixois (15 min pour bien lire le contexte facade/exposition/mistral), devis ferme calcule au tarif catalogue constructeur, intervention proprement dite, et test final sur trois cycles montee/descente. A chaque etape, le commercant ou l'artisan est informe : nature du probleme, pieces remplacees, prix exact ligne par ligne, garantie 2 ans applicable. Pas de surfacturation post-intervention.",
  "Pour {verb} un rideau metallique a {zone}, notre equipe dispose d'un outillage prepare specifiquement pour le centre Aix et les villages provencaux alentour : multimetre numerique pour les moteurs ACM annees 90, riveteuse pneumatique, scie sabre pour les coupes urgentes, soudeuse a l'arc 200A, gabarits de coupe pour les lames courantes. Si une piece sur-mesure manque (bastide aixoise avec ouverture cintree), notre atelier la fabrique et la livre sur place en moins de 4 heures.",
  "A {zone}, l'efficacite d'une intervention DRM Aix-en-Provence repose sur la preparation : avant le depart, le technicien consulte le carnet d'adresse si rideau deja entretenu, prepare les pieces probables selon la marque connue du parc local, charge le vehicule. Cette anticipation reduit le temps sur place de 30 a 40 % par rapport a une intervention generaliste, et explique pourquoi nous facturons des forfaits courts sur les commerces du Mazarin meme en periode de mistral.",
  "La phase de diagnostic est determinante pour un {keyword} reussi a {zone}. DRM Aix-en-Provence consacre les 15 premieres minutes a un audit complet adapte au contexte aixois : controle des fixations (scellements souvent agresses par le calcaire), mesure de l'usure des coulisses (oxydation differentielle nord/sud), test de continuite electrique, inspection des soudures (sensibles aux vibrations mistral), verification de la lubrification. Le technicien repere souvent un probleme connexe ignore par le commercant.",
  "Pour le {keyword} a {zone}, DRM Aix-en-Provence applique un protocole calque sur les recommandations constructeurs (Somfy France, ACM Italie, Simu) mais enrichi de 25 ans d'observation sur le parc aixois : remplacer plutot que reparer une piece a risque, choisir le RAL agree Batiments de France pour le centre, jamais d'improvisation, traceabilite ecrite sur le bordereau d'intervention conserve cinq ans. Cette discipline distingue l'artisan local du depanneur generaliste.",
  "Le succes d'un {keyword} a {zone} tient autant a la technique qu'a la communication avec le commercant ou l'artisan aixois. DRM Aix-en-Provence explique chaque geste : pourquoi cette piece d'origine ACM ou Somfy, pourquoi ce reglage adapte au mistral, quelles alternatives moins couteuses existent et leurs limites. Le client est implique dans la decision finale, le devis ecrit consigne tout, la facture confirme avec la garantie. 80 % de nos clients reviennent ou nous recommandent.",
  "Une intervention de {keyword} a {zone} ne se limite pas a remettre en marche le rideau metallique. DRM Aix-en-Provence profite de chaque passage pour controler les composants secondaires : meme si la panne portait sur le moteur, le technicien verifie l'usure des coulisses (calcaire/oxydation), la tension des ressorts (mistral), l'etat de la serrure A2P, l'integrite des soudures. Ce controle preventif est inclus sans cout supplementaire et evite souvent une seconde panne dans les mois qui suivent.",
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
  "Sur le secteur de {zone}, DRM Aix-en-Provence mobilise un veritable atelier embarque dimensionne pour le parc aixois : lames pleines P57 et P90, moteurs tubulaires Somfy RS100 et Simu T5 (commerces neufs des Milles), moteurs centraux ACM Titan et Centris XXL (centre Aix annees 90), moteurs lateraux Sommer GIGAroll (hangars Avon Gardanne), ressorts de compensation, coulisses anti-mistral, serrures profil europeen A2P. 90 % des interventions de {keyword} sont bouclees sans second deplacement.",
  "Confier votre {keyword} a DRM Aix-en-Provence a {zone}, c'est miser sur l'artisan local etabli au pied de la Sainte-Victoire depuis 25 ans. Nous travaillons exclusivement en pieces d'origine constructeur (Somfy France, Simu, Nice Era, ACM Italie, Came, BFT, Sommer, Masinara). Nos techniciens sont formes regulierement aux nouveautes : motorisations connectees compatibles Aixenbus domotique, axes haute charge pour les sectionnels grandes dimensions du retail park Plan-de-Campagne, automatismes interrupteurs sans-fil pour les commerces du Mazarin.",
  "Notre atelier de fabrication, situe a moins de 30 minutes de {zone} dans la zone d'activite aixoise, produit des lames acier galvanise, aluminium thermolaque ou inox brosse en moins de 4 heures sur urgence. Cette capacite locale est rare en Pays d'Aix : la plupart des concurrents commandent aupres de grossistes nationaux avec des delais 48-72 h. Particulierement utile pour les bastides aixoises avec ouvertures non standard (linteaux cintres, largeurs > 4 m).",
  "Toutes les interventions de {keyword} a {zone} sont couvertes par une garantie ferme : 2 ans sur les pieces neuves, 1 an sur la main-d'oeuvre, ecrites sur le devis et la facture. En cas de defaillance d'une piece dans la periode, DRM Aix-en-Provence reintervient gratuitement sans franchise ni deplacement supplementaire. Sur les contrats d'entretien annuels (commerces du Cours Mirabeau soumis a fermeture nocturne quotidienne), la garantie est tacitement renouvelee a chaque visite preventive.",
  "DRM Aix-en-Provence allie la reactivite d'une entreprise aixoise et l'exigence technique d'un specialiste reconnu. Pour le {keyword} a {zone}, nous engageons un delai sous 30 minutes en horaires ouvrables (avantage de la rocade aixoise qui dessert Aix centre, Les Milles, Gardanne et Le Tholonet en moins de 20 min depuis notre depot), sous 1 heure en urgence nuit/week-end/jour ferie. Le devis annonce sur place est le prix paye, sans surcout deplacement cache pour les communes integrees au forfait.",
  "Au-dela du materiel et de la garantie, ce qui differencie DRM Aix-en-Provence pour le {keyword} a {zone}, c'est la transparence aixoise. Nous expliquons chaque intervention : pourquoi cette piece d'origine, pourquoi cette teinte RAL compatible avec les facades calcaire du centre Aix, quelles alternatives moins couteuses existent et leurs limites. Les devis sont detailes ligne par ligne. Si un controle d'expertise est demande (assurance, copropriete des bastides), nous fournissons tous les justificatifs ecrits.",
  "DRM Aix-en-Provence selectionne ses fournisseurs avec la meme exigence depuis 25 ans. Pour le {keyword} a {zone}, nous travaillons exclusivement avec des references homologuees : moteurs sous garantie constructeur (5 ans Somfy, 4 ans Simu, 3 ans ACM), lames acier galvanise norme EN 12424 anti-effraction classe RC2, serrures A2P niveau 2, automatismes conformes a la directive 2014/53/UE pour les commerces aixois. Inscrit noir sur blanc sur le devis : exigence rare chez les concurrents.",
  "Le stockage des pieces de {keyword} fait la difference a {zone}. Notre depot du Pays d'Aix conserve en permanence : 5 generations de moteurs tubulaires Somfy (RS100, RS125, RS180, Oximo, Sonesse), 3 generations de moteurs centraux ACM (Titan classique, Titan Plus, Centris XXL), moteurs lateraux Sommer GIGAroll pour les sectionnels Avon, une vingtaine de references de serrures A2P, plus de 200 longueurs de lames pretes a couper. Resultat : 95 % des interventions terminees en une seule visite.",
  "Le service apres-vente est aussi important que l'intervention elle-meme. DRM Aix-en-Provence tient un carnet d'historique pour chaque rideau metallique entretenu a {zone} (atelier d'artisan a Trets, restaurant a Saint-Cannat, bijouterie sur Cours Mirabeau). Chaque visite ajoute une ligne : date, geste effectue, piece changee, controle preventif. Ce suivi facilite la maintenance long terme et evite les double-interventions. Les clients sous contrat beneficient d'une consultation gratuite par telephone.",
  "Faire appel a DRM Aix-en-Provence pour le {keyword} a {zone}, c'est aussi soutenir un acteur economique aixois. Nos techniciens sont tous salaries permanents, formes en interne et bases en Pays d'Aix (pas de sous-traitance, pas de rotation d'equipe tous les six mois). Nous travaillons avec des fournisseurs francais (Simu Yutz, Somfy Cluses) et europeens (ACM Vergiate Italie, Sommer Allemagne). Traceabilite garantie par un bordereau ecrit conserve cinq ans, exigible par tout assureur ou expert.",
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
