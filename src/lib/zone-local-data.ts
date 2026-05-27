export type ZoneProfile =
  | "centre-historique-aixois"
  | "banlieue-aix"
  | "village-provencal"
  | "bassin-minier"
  | "residentiel-cossu"
  | "commune-peri-urbaine"
  | "pays-aixois-rural";

export interface ZoneLocal {
  profile: ZoneProfile;
  landmarks: string[];
  streets: string[];
  quartiers: string[];
  commerces: string[];
  transport: string[];
  specifique: string;
}

export const zonesLocal: Record<string, ZoneLocal> = {
  "aix-en-provence": {
    profile: "centre-historique-aixois",
    landmarks: [
      "Cours Mirabeau",
      "Cathedrale Saint-Sauveur",
      "Place de l'Hotel de Ville",
      "Fontaine de la Rotonde",
      "Atelier Cezanne",
      "Pavillon de Vendome",
      "Place des Cardeurs",
    ],
    streets: [
      "cours Mirabeau",
      "rue Espariat",
      "rue d'Italie",
      "rue Granet",
      "rue Vauvenargues",
      "rue Mignet",
    ],
    quartiers: ["Mazarin", "Vieil-Aix", "Sextius-Mirabeau", "Pont-de-l'Arc"],
    commerces: [
      "boutiques de luxe",
      "epiceries fines provencales",
      "antiquaires",
      "restaurants gastronomiques",
      "galeries d'art",
    ],
    transport: ["Gare d'Aix-en-Provence Centre", "Gare TGV", "lignes Aixenbus"],
    specifique:
      "Coeur historique baroque et XVIIIe siecle entre cours Mirabeau et place des Cardeurs. Hotels particuliers, facades calcaire, vitrines de prestige exposees au mistral et a la fermeture nocturne stricte de la ville.",
  },
  "les-milles": {
    profile: "banlieue-aix",
    landmarks: [
      "Camp des Milles (memorial)",
      "Zone d'activite des Milles",
      "Aerodrome Aix-Les Milles",
      "Pole d'activites Aix-en-Provence",
      "Centre commercial La Pioline",
      "Decathlon Les Milles",
    ],
    streets: [
      "avenue Henri Mouret",
      "avenue de la Cible",
      "rue Albert Einstein",
      "avenue Guillaume du Vair",
      "rue Mahatma Gandhi",
      "avenue Georges Pompidou",
    ],
    quartiers: ["Pioline", "Camp-de-Sarlier", "Les Milles village", "Petite Cabane"],
    commerces: [
      "concessions automobiles",
      "magasins de bricolage",
      "showrooms equipement",
      "entrepots logistiques",
      "restaurants d'entreprise",
    ],
    transport: ["ligne 24 Aixenbus", "TGV Aix a 4 km", "A51 sortie Les Milles"],
    specifique:
      "Premier pole d'activites de l'agglomeration : entrepots, showrooms, retail park Pioline. Rideaux metalliques industriels grandes dimensions, sectionnels et grilles extensibles dominent le batiment commercial.",
  },
  "luynes": {
    profile: "banlieue-aix",
    landmarks: [
      "Chateau de la Mignarde",
      "Eglise Saint-Pierre-aux-Liens",
      "Plan-d'Aillane",
      "Domaine du Tholonet voisin",
      "Pont des Trois Sautets",
    ],
    streets: [
      "avenue Saint-Hilaire",
      "rue de la Republique",
      "avenue de la Constance",
      "chemin du Vieux Luynes",
      "boulevard Camus",
    ],
    quartiers: ["Vieux Luynes", "Plan-d'Aillane", "Pont-de-l'Arc sud"],
    commerces: [
      "petits commerces de centre village",
      "concessionnaires automobiles",
      "ateliers artisanaux",
      "boulangeries",
    ],
    transport: ["ligne 12 Aixenbus", "A8 sortie Luynes", "TGV Aix a 8 km"],
    specifique:
      "Hameau pittoresque entre Aix et la chaine de l'Etoile, en transition entre village et zone d'activite Pont-de-l'Arc. Mix de commerces traditionnels et de garages-ateliers.",
  },
  "le-tholonet": {
    profile: "residentiel-cossu",
    landmarks: [
      "Chateau du Tholonet",
      "Domaine de Beaurecueil",
      "Barrage Zola",
      "Route Cezanne (D17)",
      "Massif Sainte-Victoire",
    ],
    streets: [
      "route Cezanne",
      "avenue du Chateau",
      "chemin des Plaideurs",
      "rue Paul Cezanne",
      "boulevard de la Sainte-Victoire",
    ],
    quartiers: ["Le Village", "Palette", "Beauregard"],
    commerces: [
      "domaines viticoles",
      "boutiques de produits du terroir",
      "restaurants etoiles",
      "galeries d'art",
    ],
    transport: ["ligne 110 Aixenbus", "D17 route Cezanne", "Aix Centre a 5 km"],
    specifique:
      "Commune residentielle huppee au pied de la Sainte-Victoire, bordee par la route Cezanne. Bastides du XVIIIe, domaines viticoles AOC et boutiques de prestige justifient des rideaux metalliques discrets et finitions soignees.",
  },
  "puyricard": {
    profile: "residentiel-cossu",
    landmarks: [
      "Eglise Notre-Dame-de-la-Salette",
      "Domaine de Couteron",
      "Chateau de Fonscolombe",
      "Golf de Saint-Donat",
      "Abbaye Notre-Dame de Pellevoisin",
    ],
    streets: [
      "place de l'Eglise",
      "avenue Pierre de Coubertin",
      "chemin du Plan",
      "route de Saint-Canadet",
      "chemin de Couteron",
    ],
    quartiers: ["Puyricard centre", "Couteron", "Saint-Canadet", "La Lone"],
    commerces: [
      "epiceries village",
      "boucheries-charcuteries",
      "tabacs-presse",
      "boulangeries provencales",
      "agences immobilieres haut de gamme",
    ],
    transport: ["ligne 240 Aixenbus", "D14 vers Aix", "Gare TGV a 12 km"],
    specifique:
      "Bourg rural a 8 km au nord d'Aix, maille de bastides et de domaines. Commerces de proximite alignes autour de la place de l'Eglise, vols saisonniers pendant les marches frequents.",
  },
  "eguilles": {
    profile: "village-provencal",
    landmarks: [
      "Chateau d'Eguilles",
      "Eglise Saint-Julien",
      "Vieille porte du village",
      "Domaine de la Maladrerie",
      "Observatoire de Marseille (annexe)",
    ],
    streets: [
      "boulevard Pasteur",
      "rue de la Republique",
      "avenue Charles de Gaulle",
      "rue du Comte de Provence",
      "chemin de la Bouilladisse",
    ],
    quartiers: ["Le Village", "Les Massides", "Granet", "Les Figons"],
    commerces: [
      "epiceries de village",
      "boulangeries artisanales",
      "pharmacies",
      "restaurants provencaux",
      "salons de coiffure",
    ],
    transport: ["ligne 270 Aixenbus", "D17 vers Aix", "A8 sortie Eguilles"],
    specifique:
      "Village perche sur la colline avec vue sur la chaine de l'Etoile. Commerces serres autour de la place centrale, vitrines basses sur ruelles pavees ou les rideaux metalliques manuels restent majoritaires.",
  },
  "venelles": {
    profile: "residentiel-cossu",
    landmarks: [
      "Vieux village",
      "Eglise Sainte-Marie-Madeleine",
      "Domaine de Violaine",
      "Centre commercial Les Logissons",
      "Massif du Concors",
    ],
    streets: [
      "avenue des Logissons",
      "boulevard Charles de Gaulle",
      "route de Venelles",
      "chemin du Stade",
      "avenue du 8 mai 1945",
    ],
    quartiers: ["Les Logissons", "Le Village", "Cabassuds", "Les Faurys"],
    commerces: [
      "moyennes surfaces",
      "commerces de proximite",
      "agences immobilieres",
      "ateliers artisans",
      "restaurants familiaux",
    ],
    transport: ["ligne 250 Aixenbus", "D14 vers Aix", "A51 sortie Venelles"],
    specifique:
      "Commune residentielle en pleine croissance avec un nouveau retail park Les Logissons. Mix entre vieux village et zones commerciales modernes qui multiplient les besoins en rideaux sectionnels grandes longueurs.",
  },
  "meyreuil": {
    profile: "bassin-minier",
    landmarks: [
      "Plan-de-Meyreuil",
      "Centrale thermique de Provence",
      "Domaine de Valbrillant",
      "Eglise Sainte-Marie-Madeleine",
      "Massif du Regagnas",
    ],
    streets: [
      "avenue Sainte-Marie",
      "route de Gardanne",
      "rue de la Burliere",
      "chemin des Pradeaux",
      "boulevard de l'Etang",
    ],
    quartiers: ["Plan-de-Meyreuil", "Le Village", "Valbrillant", "La Croix de Meyreuil"],
    commerces: [
      "entrepots logistiques",
      "garages",
      "magasins de fournitures",
      "boulangeries",
      "tabacs",
    ],
    transport: ["ligne 290 Aixenbus", "D6 vers Aix", "TER Aix-Marseille a Gardanne"],
    specifique:
      "Heritiere du bassin minier de Gardanne, ancien charbon devenu zone industrielle reconvertie. Hangars, batiments d'activite et commerces de plan-de-Meyreuil exigent des rideaux metalliques industriels robustes.",
  },
  "bouc-bel-air": {
    profile: "commune-peri-urbaine",
    landmarks: [
      "Mairie de Bouc-Bel-Air",
      "Parc de la Salle",
      "Centre commercial Casino",
      "Eglise Saint-Andre",
      "Bassin de Realtor",
    ],
    streets: [
      "avenue du 8 mai",
      "avenue de la Salle",
      "rue de la Tour",
      "chemin de la Verdiere",
      "avenue de la Republique",
    ],
    quartiers: ["Le Village", "La Salle", "La Tour d'Aigues", "Realtor"],
    commerces: [
      "supermarches",
      "garages",
      "pharmacies",
      "cabinets medicaux",
      "restaurants",
    ],
    transport: ["ligne 50 Cartreize", "A51 sortie Bouc-Bel-Air", "TER Septemes"],
    specifique:
      "Carrefour entre Aix et Marseille, residentielle en pleine expansion. Petits centres commerciaux et axes routiers (avenue de la Salle, RD8n) cumulent des commerces nocturnes qui necessitent serrures et fermetures securisees.",
  },
  "cabries": {
    profile: "commune-peri-urbaine",
    landmarks: [
      "Plan-de-Campagne",
      "Aerodrome de Marignane voisin",
      "Eglise Saint-Etienne",
      "Vieux Cabries",
      "Bassin de Realtor",
    ],
    streets: [
      "avenue Major Tomasini",
      "RD9",
      "avenue de l'Europe",
      "boulevard des Aires",
      "chemin de l'Estello",
    ],
    quartiers: ["Plan-de-Campagne", "Calas", "Le Village", "Les Cadeneaux"],
    commerces: [
      "retail park Plan-de-Campagne",
      "concessions automobiles",
      "showrooms",
      "restauration rapide",
      "magasins d'ameublement",
    ],
    transport: ["ligne 36 Cartreize", "A51 sortie Calas", "Plan-de-Campagne RD6"],
    specifique:
      "Pole commercial majeur du sud-Aix avec Plan-de-Campagne (300 enseignes). Rideaux metalliques industriels et portes sectionnelles grandes dimensions equipent l'essentiel des locaux retail et entrepots.",
  },
  "ventabren": {
    profile: "village-provencal",
    landmarks: [
      "Chateau de la Reine Jeanne",
      "Vieux village perche",
      "Aqueduc de Roquefavour",
      "Eglise Saint-Pierre",
      "Massif de la Touloubre",
    ],
    streets: [
      "rue du Cigalon",
      "rue Frederic Mistral",
      "place Saint-Pierre",
      "route de la Gare",
      "chemin des Mille Ecus",
    ],
    quartiers: ["Le Village", "La Gare", "Les Tournesols", "Roquefavour"],
    commerces: [
      "epiceries de village",
      "restaurants gastronomiques",
      "ateliers d'artistes",
      "tabacs-presse",
      "agences immobilieres",
    ],
    transport: ["ligne 17 Cartreize", "TER Ventabren-La-Gare", "A8 sortie Coudoux"],
    specifique:
      "Village medieval perche en surplomb de la plaine. Vitrines etroites des ruelles pavees, restaurants etoiles et bastides en pierre seche imposent des fermetures discretes et soignees.",
  },
  "gardanne": {
    profile: "bassin-minier",
    landmarks: [
      "Beffroi de Gardanne",
      "Bauxaline (ancienne usine Pechiney)",
      "Cours de la Republique",
      "Marche provencal",
      "Puits Y (musee de la mine)",
    ],
    streets: [
      "cours de la Republique",
      "avenue Pierre Brossolette",
      "boulevard Carnot",
      "rue Borely",
      "avenue de Toulon",
    ],
    quartiers: ["Centre-ville", "Notre-Dame", "Biver", "Les Saint-Lazare"],
    commerces: [
      "boutiques de centre-ville",
      "halle marchande",
      "garages",
      "boulangeries",
      "magasins specialises mine",
    ],
    transport: ["TER Gardanne", "ligne 290 Aixenbus", "D6 vers Aix"],
    specifique:
      "Centre minier reconverti devenu pole industriel et residentiel. Commerces denses du cours de la Republique, hangars de l'ancienne mine et usines de la zone Avon multiplient les fermetures metalliques de toutes tailles.",
  },
  "saint-marc-jaumegarde": {
    profile: "residentiel-cossu",
    landmarks: [
      "Vue sur la Sainte-Victoire",
      "Domaine de Saint-Marc",
      "Eglise Saint-Marc",
      "Foret de Bibemus",
      "Carrieres de Bibemus (Cezanne)",
    ],
    streets: [
      "route de Saint-Marc",
      "chemin de Bibemus",
      "chemin des Carrieres",
      "route de Vauvenargues",
      "chemin du Vallat",
    ],
    quartiers: ["Saint-Marc village", "Bibemus", "Le Vallat"],
    commerces: [
      "domaines viticoles",
      "tables d'hote",
      "epiceries fines",
      "ateliers d'artistes",
    ],
    transport: ["D10 vers Aix", "ligne 110 Aixenbus", "Aix Centre a 6 km"],
    specifique:
      "Petite commune residentielle huppee au pied de la Sainte-Victoire, dispersee entre bastides isolees et hameaux. Demande forte pour des fermetures discretes de portails motorises et de portes de garage residentielles.",
  },
  "simiane-collongue": {
    profile: "commune-peri-urbaine",
    landmarks: [
      "Eglise Saint-Hippolyte",
      "Vieux village medieval",
      "Massif de l'Etoile",
      "Foret communale",
      "Domaine de Collongue",
    ],
    streets: [
      "place du General de Gaulle",
      "rue de la Republique",
      "avenue de l'Eglise",
      "boulevard Charles Aubaud",
      "chemin des Tuileries",
    ],
    quartiers: ["Le Village", "La Salle", "Les Tuileries", "Collongue"],
    commerces: [
      "boucheries-charcuteries",
      "boulangeries",
      "tabacs",
      "pharmacies",
      "restaurants familiaux",
    ],
    transport: ["ligne 36 Cartreize", "D8 vers Aix", "Plan-de-Campagne a 6 km"],
    specifique:
      "Commune resi-rurale entre Aix et Marseille, accrochee au flanc de l'Etoile. Coeur villageois autour de la place du General de Gaulle, commerces traditionnels avec rideaux courts manuels en majorite.",
  },
  "mimet": {
    profile: "village-provencal",
    landmarks: [
      "Vieux Mimet (village perche)",
      "Massif de l'Etoile",
      "Chapelle Saint-Antoine",
      "Belvedere de Mimet",
      "Source du Jas de Pin",
    ],
    streets: [
      "rue Frederic Mistral",
      "place de la Republique",
      "chemin du Vieux Mimet",
      "route de Gardanne",
      "boulevard du Lavoir",
    ],
    quartiers: ["Le Vieux Mimet", "Le Plan", "Les Caires", "Les Bastides"],
    commerces: [
      "epiceries villageoises",
      "restaurants provencaux",
      "tabacs",
      "ateliers d'artisans",
    ],
    transport: ["ligne 7 Cartreize", "D8 vers Aix", "Gardanne a 6 km"],
    specifique:
      "Village perche le plus haut des Bouches-du-Rhone. Cellules commerciales reduites dans les ruelles, rideaux metalliques manuels courts et serrures renforcees contre les vols saisonniers.",
  },
  "greasque": {
    profile: "bassin-minier",
    landmarks: [
      "Musee de la Mine de Greasque",
      "Puits Hely d'Oissel",
      "Eglise Saint-Michel",
      "Chateau de Greasque",
      "Foret du Defens",
    ],
    streets: [
      "place de la Mairie",
      "avenue de Provence",
      "rue de l'Eglise",
      "boulevard de la Mine",
      "chemin du Puits Hely",
    ],
    quartiers: ["Le Village", "Le Puits", "Les Bastides", "Saint-Michel"],
    commerces: [
      "epiceries de village",
      "boulangeries",
      "garages",
      "tabacs",
      "restaurants",
    ],
    transport: ["ligne 290 Aixenbus", "D58 vers Aix", "Gardanne a 4 km"],
    specifique:
      "Ancien village minier converti en cite residentielle. Hangars de l'ancienne mine reconvertis en activites artisanales, rideaux metalliques industriels equipent les ateliers reconvertis.",
  },
  "vauvenargues": {
    profile: "village-provencal",
    landmarks: [
      "Chateau de Vauvenargues (tombe de Picasso)",
      "Massif Sainte-Victoire",
      "Eglise Notre-Dame",
      "Source des Infernets",
      "GR9 Sainte-Victoire",
    ],
    streets: [
      "place de la Mairie",
      "rue du Chateau",
      "route de Pourrieres",
      "chemin du Centre",
      "rue du Casaou",
    ],
    quartiers: ["Le Village", "Les Cabassols", "Les Riens", "Le Casaou"],
    commerces: [
      "tables d'hote",
      "auberges",
      "boutiques artisanales",
      "magasins d'art",
    ],
    transport: ["ligne 110 Aixenbus", "D10 vers Aix", "Aix Centre a 14 km"],
    specifique:
      "Tout petit village au pied de la Sainte-Victoire, repere des amateurs de randonnee et de Cezanne. Quelques commerces saisonniers concentres autour de la place de la Mairie avec fermetures metalliques basiques.",
  },
  "fuveau": {
    profile: "bassin-minier",
    landmarks: [
      "Vieux village medieval",
      "Eglise Saint-Michel",
      "Chateau de Janson",
      "Massif du Regagnas",
      "Domaine de Valdonne",
    ],
    streets: [
      "cours Victor Leydet",
      "rue de la Republique",
      "boulevard Loubet",
      "chemin de la Diote",
      "avenue du Stade",
    ],
    quartiers: ["Le Village", "La Barque", "Pourrieres", "Les Michelons"],
    commerces: [
      "boutiques de centre village",
      "boulangeries",
      "pharmacies",
      "restaurants",
      "epiceries fines",
    ],
    transport: ["ligne 240 Cartreize", "D6 vers Aix", "Gardanne a 8 km"],
    specifique:
      "Village provencal heritier du bassin minier de la Diote. Tissu commercial dense autour du cours Victor Leydet, melange de rideaux metalliques anciens et de fermetures motorisees recentes.",
  },
  "saint-cannat": {
    profile: "village-provencal",
    landmarks: [
      "Eglise Saint-Cannat",
      "Chateau de Saint-Cannat",
      "Domaine Lambert",
      "Lavoir provencal",
      "Place du General de Gaulle",
    ],
    streets: [
      "cours Foch",
      "rue de la Republique",
      "boulevard Petrarque",
      "avenue Pasteur",
      "rue de la Liberte",
    ],
    quartiers: ["Le Village", "La Cale", "Les Plaines", "La Caleche"],
    commerces: [
      "boutiques de centre village",
      "boulangeries",
      "epiceries fines",
      "restaurants provencaux",
      "tabacs",
    ],
    transport: ["ligne 19 Cartreize", "D7N vers Aix", "Aix Centre a 18 km"],
    specifique:
      "Bourg provencal sur la route Aix-Salon, etape gastronomique connue. Commerces autour du cours Foch en pierre seche, demande mixte entre rideaux manuels et fermetures securisees nocturnes.",
  },
  "peynier": {
    profile: "pays-aixois-rural",
    landmarks: [
      "Chateau de Peynier",
      "Eglise Saint-Pierre",
      "Massif Sainte-Victoire est",
      "Domaine de Saint-Sauveur",
      "Place du Marche",
    ],
    streets: [
      "place de la Mairie",
      "rue de la Republique",
      "avenue de la Liberation",
      "boulevard de la Treille",
      "chemin du Devens",
    ],
    quartiers: ["Le Village", "Les Devens", "La Plaine", "Les Garrigues"],
    commerces: [
      "petits commerces de village",
      "boulangeries",
      "tabacs",
      "restaurants",
      "ateliers artisans",
    ],
    transport: ["ligne 240 Cartreize", "D908 vers Aix", "Trets a 6 km"],
    specifique:
      "Village rural a l'est de la Sainte-Victoire, agriculture viticole et oleicole dominante. Commerces petits en facade, hangars agricoles avec rideaux metalliques industriels.",
  },
  "trets": {
    profile: "pays-aixois-rural",
    landmarks: [
      "Chateau medieval de Trets",
      "Tour de l'Horloge",
      "Eglise Notre-Dame-de-Nazareth",
      "Massif Sainte-Victoire",
      "Domaine Sainte-Anne d'Evenos",
    ],
    streets: [
      "boulevard Etienne Boyer",
      "cours Esquiros",
      "rue Marx Dormoy",
      "avenue Jean Jaures",
      "boulevard de la Republique",
    ],
    quartiers: ["Centre-ville", "Saint-Jean", "Les Loubieres", "Le Plan"],
    commerces: [
      "commerces de proximite",
      "supermarches",
      "boulangeries",
      "garages",
      "restaurants",
    ],
    transport: ["ligne 240 Cartreize", "D908 vers Aix", "TER Trets-Pourrieres"],
    specifique:
      "Pole commercial du Pays d'Aix-est, marche provencal hebdomadaire. Centre historique fortifie avec ruelles etroites et grandes zones commerciales en peripherie equipees de rideaux sectionnels modernes.",
  },
  "rognes": {
    profile: "pays-aixois-rural",
    landmarks: [
      "Carrieres de pierre de Rognes",
      "Eglise Notre-Dame",
      "Chapelle Saint-Marcellin",
      "Vieux village medieval",
      "Vignobles AOC Coteaux d'Aix",
    ],
    streets: [
      "cours Saint-Etienne",
      "rue de la Republique",
      "place de l'Eglise",
      "avenue de la Burliere",
      "chemin des Carrieres",
    ],
    quartiers: ["Le Village", "La Burliere", "Les Carrieres", "Lascours"],
    commerces: [
      "domaines viticoles",
      "epiceries fines",
      "ateliers artisans",
      "restaurants provencaux",
      "boulangeries",
    ],
    transport: ["ligne 19 Cartreize", "D14 vers Aix", "Aix Centre a 22 km"],
    specifique:
      "Village celebre pour ses carrieres de pierre dorees, viticulture en AOC. Hangars agricoles et caves cooperatives equipes de rideaux metalliques industriels grandes dimensions.",
  },
  "lambesc": {
    profile: "pays-aixois-rural",
    landmarks: [
      "Eglise Notre-Dame-de-l'Assomption",
      "Halle aux Grains",
      "Tour de l'Horloge",
      "Chateau de Lambesc",
      "Plaine de la Touloubre",
    ],
    streets: [
      "cours Eyssautier",
      "place des 4 Otages",
      "rue de la Republique",
      "boulevard de la Reine Jeanne",
      "avenue Jean Jaures",
    ],
    quartiers: ["Centre-ville", "La Touloubre", "Les Faisses", "Trois Tilleuls"],
    commerces: [
      "commerces de proximite",
      "boulangeries",
      "epiceries fines",
      "restaurants",
      "garages",
    ],
    transport: ["ligne 19 Cartreize", "D7N vers Aix", "Aix Centre a 25 km"],
    specifique:
      "Bourg de la plaine de Touloubre sur l'axe Aix-Salon. Centre-ville commercant autour du cours Eyssautier, zone d'activite peripherique avec entrepots et ateliers.",
  },
};

const DEFAULT_LOCAL: ZoneLocal = zonesLocal["aix-en-provence"];

export function getZoneLocal(slug: string): ZoneLocal {
  return zonesLocal[slug] ?? DEFAULT_LOCAL;
}

export function hashZoneSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = ((h << 5) - h + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}
