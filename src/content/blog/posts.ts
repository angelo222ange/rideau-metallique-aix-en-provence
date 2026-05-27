export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  img: string;
  excerpt: string;
  author: string;
  readTime: string;
  body: { type: "p" | "h2" | "h3" | "ul" | "blockquote"; content: string | string[] }[];
};

export const posts: BlogPost[] = [
  {
    slug: "lames-pleines-comment-choisir",
    title: "Lames pleines P57, P90, P140 : comment choisir le bon rideau metallique",
    date: "15 mai 2026",
    img: "/images/gallery/lame-pleine-rideau-metallique-france.webp",
    excerpt:
      "Tous les rideaux metalliques ne se valent pas. Les lames pleines P57, P90 et P140 different par leur epaisseur, leur securite et leur prix. Voici comment choisir.",
    author: "Equipe DRM Aix-en-Provence",
    readTime: "6 min de lecture",
    body: [
      {
        type: "p",
        content:
          "Quand un commercant ou un industriel doit choisir un rideau metallique, l'arbitrage entre lames pleines P57, P90 et P140 est determinant. Ces trois references couvrent l'essentiel des installations DRM Aix-en-Provence sur la Pays d'Aix. Voici les criteres a connaitre avant de commander.",
      },
      {
        type: "h2",
        content: "Les lames P57 : la reference des commerces standards",
      },
      {
        type: "p",
        content:
          "La lame P57 mesure 57 mm de hauteur et 0,6 mm d'epaisseur. C'est le standard du commerce de centre-ville : boulangeries, bijouteries, pharmacies, salons de coiffure, restaurants. Elle offre une protection correcte contre l'effraction et le vandalisme tout en restant abordable (a partir de 800 euros pour un commerce de 3 metres). C'est ce que nous installons par defaut sur les boutiques de Aix-en-Provence, Gardanne et Le Tholonet.",
      },
      {
        type: "h2",
        content: "Les lames P90 : securite renforcee pour les zones sensibles",
      },
      {
        type: "p",
        content:
          "La lame P90 mesure 90 mm de hauteur et 0,8 mm d'epaisseur. Elle est recommandee des que la valeur des biens proteges depasse les 30 000 euros : bijouterie, pharmacie haut de gamme, electronique. Son cout est environ 20 % superieur au P57, mais sa resistance a la pince-monseigneur et a la masse est nettement superieure. Sur Aix-en-Provence centre, nous l'installons systematiquement sur les bijouteries autour du Casino et de la Grande Plage.",
      },
      {
        type: "h2",
        content: "Les lames P140 : industriel et isolation thermique",
      },
      {
        type: "p",
        content:
          "La lame P140 mesure 140 mm de hauteur, en double paroi, avec isolation polyurethane interieure. Elle est reservee aux entrepots, hangars logistiques, parkings et industriels. Sur la Pays d'Aix, nous l'installons frequemment sur le Port de Gardanne, Tarnos et la plateforme multimodale de Mouguerre. Cout : a partir de 1 500 euros pour un rideau de 4 metres.",
      },
      {
        type: "h2",
        content: "Comment trancher ?",
      },
      {
        type: "p",
        content:
          "Pour un commerce de proximite standard, le P57 est suffisant. Pour une bijouterie, une pharmacie ou un commerce a haut chiffre d'affaires, optez pour le P90. Pour un entrepot ou un parking, partez sur le P140. En cas de doute, demandez un devis a DRM Aix-en-Provence : nous etablissons une analyse de risque gratuite avant de recommander une reference.",
      },
      {
        type: "h2",
        content: "Materiaux et finitions disponibles",
      },
      {
        type: "p",
        content:
          "Au-dela du format de lame, le materiau et la finition influent sur le prix et la durabilite. L'acier galvanise (le standard) est durable mais visible. L'aluminium thermolaque permet un thermolaquage couleur (40 teintes RAL standard) qui s'integre a la facade et resiste mieux aux embruns salins de Aix-en-Provence et Le Tholonet. L'inox brosse, plus rare et plus cher, est reserve aux commerces de luxe et aux environnements tres exposes (front de mer). DRM Aix-en-Provence fournit les trois materiaux depuis son atelier local.",
      },
      {
        type: "h2",
        content: "Combien de temps tient un rideau metallique a Aix-en-Provence ?",
      },
      {
        type: "p",
        content:
          "Avec un entretien correct (1 visite annuelle minimum), un rideau metallique tient en moyenne 25 a 35 ans. Les lames P57 standards tiennent 20-25 ans, les P90 jusqu'a 30 ans, les P140 plus de 35 ans en usage industriel. Le moteur est generalement remplace une fois (vers 12-15 ans) avant que les lames soient changees. Sur la Pays d'Aix, l'exposition aux embruns salins reduit ces durees de 15-20 % si l'entretien preventif n'est pas suivi. C'est pourquoi DRM Aix-en-Provence recommande systematiquement un contrat d'entretien annuel pour les commerces en front de mer.",
      },
    ],
  },
  {
    slug: "motoriser-rideau-metallique-quelle-marque",
    title: "Motoriser un rideau metallique manuel : Somfy, Simu ou ACM ?",
    date: "08 mai 2026",
    img: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
    excerpt:
      "Trois grandes familles de moteurs dominent le marche du rideau metallique. Voici comment les choisir selon le poids du rideau et l'usage.",
    author: "Equipe DRM Aix-en-Provence",
    readTime: "5 min de lecture",
    body: [
      {
        type: "p",
        content:
          "Motoriser un rideau metallique manuel est l'une des demandes les plus frequentes recues par DRM Aix-en-Provence. Trois grandes familles de moteurs dominent le marche : Somfy (tubulaire), Simu (tubulaire) et ACM (central). Voici comment trancher.",
      },
      {
        type: "h2",
        content: "Somfy RS100 : le tubulaire silencieux pour commerces",
      },
      {
        type: "p",
        content:
          "Le moteur tubulaire Somfy RS100 s'insere directement dans l'axe d'enroulement. Il est invisible une fois installe, silencieux, et adapte aux rideaux de moins de 150 kg. C'est le choix par defaut pour les boutiques de Aix-en-Provence, Les Milles ou Gardanne avec un rideau de 2 a 4 metres. Garantie constructeur de 5 ans.",
      },
      {
        type: "h2",
        content: "Simu T5 : l'alternative francaise au Somfy",
      },
      {
        type: "p",
        content:
          "Le Simu T5 est l'equivalent francais du Somfy, fabrique a Gray (Haute-Saone). Memes performances, meme silence, prix legerement inferieur (10-15 %). Nous l'installons sur les commerces de la Pays d'Aix qui valorisent la production francaise et les delais de livraison plus courts en cas de panne.",
      },
      {
        type: "h2",
        content: "ACM Titan : le moteur central pour rideaux lourds",
      },
      {
        type: "p",
        content:
          "Au-dela de 150 kg, le moteur tubulaire ne suffit plus. Il faut un moteur central ACM Titan ou Centris XXL, fixe sur platine au-dessus du coffre. C'est le choix obligatoire pour les rideaux industriels du Port de Gardanne, des entrepots de Tarnos ou des grandes surfaces commerciales. Plus volumineux, plus puissant, plus cher mais quasi-eternel.",
      },
      {
        type: "h2",
        content: "Conseil DRM Aix-en-Provence",
      },
      {
        type: "p",
        content:
          "Pour 80 % des commerces du Pays Basque, un tubulaire (Somfy ou Simu) suffit. Pour les 20 % restants (industriels, lourd, hauteur >4 m), optez pour un central ACM. Notre equipe etablit le diagnostic gratuit avant d'envoyer un devis. Nous installons aussi les telecommandes Nice Era et les automatismes Came pour les configurations multi-rideaux.",
      },
      {
        type: "h2",
        content: "Telecommande, interrupteur a cle ou domotique ?",
      },
      {
        type: "p",
        content:
          "Une fois le moteur choisi, il faut decider du mode de commande. La telecommande Somfy ou Nice (radio 433 MHz ou 868 MHz) est le standard : portee 30 a 50 metres, jusqu'a 16 canaux. L'interrupteur a cle (Geba ou similaire) reste indispensable en backup pour les commerces multi-employes. La domotique connectee (Somfy TaHoma, Nice IT4WIFI) est en plein developpement : ouverture programmable, controle smartphone, scenarios coupling avec l'alarme. DRM Aix-en-Provence installe les trois solutions, avec une preference Somfy TaHoma pour la fiabilite longue.",
      },
      {
        type: "h2",
        content: "Quel cout pour une motorisation complete a Aix-en-Provence ?",
      },
      {
        type: "p",
        content:
          "Le cout d'une motorisation depend du moteur, des options et de la marque. A titre indicatif sur Aix-en-Provence et la Pays d'Aix : motorisation tubulaire Somfy/Simu avec axe et telecommande, a partir de 600 euros pose comprise. Motorisation centrale ACM Titan pour rideau lourd, a partir de 950 euros. Ajout d'une centrale domotique : +250 a 500 euros. Le devis precis est etabli sur place par DRM Aix-en-Provence, sans frais de deplacement separes. Garantie 2 ans pieces, 1 an main-d'oeuvre.",
      },
      {
        type: "h2",
        content: "Faut-il garder l'axe existant ou changer ?",
      },
      {
        type: "p",
        content:
          "Si votre rideau metallique est manuel (a ressorts ou a sangle), nous deposons l'axe existant et installons un axe motorise. Si votre moteur est tres ancien (>15 ans) et HS, nous recommandons souvent de changer aussi l'axe (qui peut etre legerement deforme apres tant d'usage). Cette decision est prise au cas par cas selon l'inspection. DRM Aix-en-Provence reutilise l'axe quand c'est economiquement justifie (axe en bon etat, pas de jeu, paliers OK).",
      },
    ],
  },
  {
    slug: "rideau-metallique-bloque-fermeture-causes",
    title: "Rideau metallique bloque a la fermeture : les 5 causes les plus frequentes",
    date: "01 mai 2026",
    img: "/images/gallery/rideau-metallique-bloque-depannage-rideau-metallique.webp",
    excerpt:
      "Un rideau metallique qui se bloque a la fermeture est l'une des urgences les plus stressantes pour un commerce. Voici les causes courantes et comment DRM Aix-en-Provence les traite.",
    author: "Equipe DRM Aix-en-Provence",
    readTime: "7 min de lecture",
    body: [
      {
        type: "p",
        content:
          "Un rideau metallique bloque a la fermeture est l'urgence classique du commerce : impossible de fermer la boutique en fin de journee, biens exposes, assurance qui ne couvre pas si la fermeture n'est pas effective. DRM Aix-en-Provence traite plusieurs cas par semaine sur la Pays d'Aix. Voici les 5 causes les plus frequentes.",
      },
      {
        type: "h2",
        content: "1. Lame sortie du rail",
      },
      {
        type: "p",
        content:
          "C'est la cause numero un. Lors d'un choc (vehicule, transpalette, masse), une ou plusieurs lames sortent du rail lateral et se coincent. La lame est visible legerement decalee. Solution DRM : deblocage manuel du tablier, remise en piste de la lame, verification du rail. Intervention de 30 a 60 minutes. Prix indicatif : a partir de 149 euros.",
      },
      {
        type: "h2",
        content: "2. Moteur HS (condensateur ou carte electronique)",
      },
      {
        type: "p",
        content:
          "Le moteur tubulaire ou central peut tomber en panne sans signe avant-coureur : condensateur de demarrage HS, carte electronique grillee, balais uses. La telecommande ne repond plus, le rideau reste a sa derniere position. Solution DRM : test electrique au multimetre, remplacement du condensateur (50-90 euros) ou de la carte (200-400 euros).",
      },
      {
        type: "h2",
        content: "3. Ressort de compensation casse",
      },
      {
        type: "p",
        content:
          "Les ressorts de compensation equilibrent le poids du tablier. Quand l'un casse, le rideau devient anormalement lourd ou se bloque dans la descente. Bruit metallique caracteristique au moment de la casse. Solution DRM : remplacement du ressort (220-450 euros selon le diametre). Important : ne JAMAIS tenter de demonter un ressort soi-meme (risque d'accident grave).",
      },
      {
        type: "h2",
        content: "4. Serrure grippee ou cylindre force",
      },
      {
        type: "p",
        content:
          "La serrure de la lame finale (4 points ou profil europeen) peut gripper avec l'humidite et le sel (frequent sur Aix-en-Provence, Le Tholonet, Lambesc, expose aux embruns). Solution DRM : nettoyage, lubrification au degrippant graphite, ou remplacement de la serrure (80-180 euros).",
      },
      {
        type: "h2",
        content: "5. Axe deforme ou paliers grippes",
      },
      {
        type: "p",
        content:
          "Cause la plus rare mais la plus serieuse. L'axe d'enroulement peut se deformer apres un choc important ou apres des annees sans entretien. Bruit de frottement metallique. Solution DRM : depose du tablier, fabrication d'un nouvel axe en atelier (4 heures), remontage. Intervention plus longue (3-4 heures) et plus chere (400-900 euros).",
      },
      {
        type: "h2",
        content: "Prevention : le contrat d'entretien annuel",
      },
      {
        type: "p",
        content:
          "Sur les 5 causes ci-dessus, 4 sont evitables par un entretien preventif annuel : graissage de l'axe, controle des ressorts, test electrique du moteur, lubrification de la serrure. Le contrat d'entretien DRM Aix-en-Provence couvre 4 visites par an a partir de 250 euros. Resultat constate : 60 % de pannes en moins chez nos clients sous contrat.",
      },
      {
        type: "h2",
        content: "Que faire avant l'arrivee du technicien DRM ?",
      },
      {
        type: "p",
        content:
          "Quelques reflexes utiles avant l'intervention DRM Aix-en-Provence : 1) Ne JAMAIS forcer le rideau manuellement si le moteur ne repond plus (risque d'endommager l'axe ou les ressorts). 2) Couper le disjoncteur dedie au rideau pour eviter une remise en route accidentelle. 3) Notez la marque du moteur (Somfy, Simu, ACM, Nice) si visible sur le boitier. 4) Notez l'age approximatif de l'installation. 5) Photographiez la position du blocage et tout indice visible (lame deformee, fil debranche, etc.). Ces elements aident notre technicien a preparer les bonnes pieces et a gagner du temps sur place.",
      },
      {
        type: "h2",
        content: "Les commerces les plus touches a Aix-en-Provence",
      },
      {
        type: "p",
        content:
          "Sur la Pays d'Aix, certains profils de commerces sont plus exposes au blocage de rideau metallique. Les boulangeries (ouverture matinale frequente, usure rapide), les bars-tabacs (frequence d'utilisation tres haute), les bijouteries (rideaux P90/P140 lourds, blocages frequents en cas de coupure de courant), les restaurants front de mer (corrosion accelaree par les embruns). DRM Aix-en-Provence tient un registre des interventions par profil et adapte le diagnostic des le premier appel selon le type de commerce et la zone (centre Aix-en-Provence, Gardanne historique, Le Tholonet, Les Milles commercial).",
      },
    ],
  },
];
