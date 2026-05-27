import { siteConfig } from "@/config/site";

const reviews = [
  {
    body: `Rideau bloque a la fermeture un vendredi soir, vitrine du Mazarin avec stock visible depuis la rue. Le technicien est arrive en 28 minutes, axe regrais, condensateur change sur place, parti avec la facture signee. Le prix annonce au telephone a ete tenu a l'euro pres.`,
    name: "Laurent Mouriès",
    location: `${siteConfig.city} centre (Mazarin)`,
    rating: 5,
  },
  {
    body: `Showroom au pole d'activites des Milles, sectionnel grandes dimensions bloque en milieu d'apres-midi. Equipe sur place en moins d'une heure, un ressort de compensation casse identifie tout de suite, piece en stock dans le vehicule. Reouverture du show le lendemain matin a l'heure.`,
    name: "Sophie Rambaud",
    location: "Les Milles (Pioline)",
    rating: 5,
  },
  {
    body: `Restaurant proche de la place des Cardeurs : motorisation d'un ancien rideau manuel passe en Somfy RS100, telecommande programmee pour deux salaries et un planning d'ouverture automatique. Travail soigne, intervention sur deux jours sans gener le service du midi.`,
    name: "Jean-Philippe Lattes",
    location: `Vieil-Aix (${siteConfig.city})`,
    rating: 5,
  },
  {
    body: `Bijouterie au pied de la cathedrale Saint-Sauveur, grille extensible cobra a renouveler dans une teinte agreee Batiments de France. ${siteConfig.brand} a fourni le nuancier RAL, presente le devis sous 24h et pose en 4h sans casser le rythme des clients. Tres pro.`,
    name: "Nathalie Esteva",
    location: "Mazarin",
    rating: 5,
  },
  {
    body: `Pharmacie de garde a Gardanne, panne moteur tubulaire en pleine nuit. Intervention sous 50 minutes, depannage temporaire pour fermer, retour le lendemain matin pour le remplacement ACM. La piece etait en stock vehicule, pas de delai grossiste.`,
    name: "Karim Bensaad",
    location: "Gardanne centre",
    rating: 5,
  },
  {
    body: `Bastide au Tholonet : remplacement de l'axe d'un ancien rideau aux dimensions hors standard. Atelier ${siteConfig.brand} a fabrique l'axe sur-mesure en 3 jours, pose en demi-journee. Le calcaire avait grippe la coulisse, lubrification complete incluse dans le devis.`,
    name: "Catherine Bremond",
    location: "Le Tholonet (route Cezanne)",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} sur 5 etoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#F59E0B" : "#E5E7EB"}>
          <path d="M12 2l2.9 6.6L22 9.6l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.5 2 9.6l7.1-1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section className="bg-[#F5F1E6] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <span className="inline-block bg-white px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4F5648]">
            [ Avis clients ]
          </span>
          <h2 className="text-[#181C16]">
            {siteConfig.rating}/5 sur {siteConfig.ratingCount} avis Google a {siteConfig.city}
          </h2>
          <div className="flex items-center gap-3 mt-2">
            <img src="/images/marques/google-logo.webp" alt="Google" width={80} height={28} className="h-7 w-auto" title="Google" />
            <Stars rating={5} />
            <span className="text-[14px] text-[#4F5648]">{siteConfig.ratingCount} avis verifies</span>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r, i) => (
            <article key={i} className="bg-white rounded-[12px] p-6 flex flex-col gap-3">
              <Stars rating={r.rating} />
              <p className="text-[#181C16] text-[14px] leading-relaxed flex-grow">{r.body}</p>
              <div className="flex items-center gap-3 mt-2 pt-3 border-t border-black/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[14px]"
                  style={{ background: ["#2D3F2A", "#C28840", "#4F5648", "#1F2C1D"][i % 4] }}
                >
                  {r.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-[#181C16]">{r.name}</span>
                  <span className="text-[12px] text-[#4F5648]">{r.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
