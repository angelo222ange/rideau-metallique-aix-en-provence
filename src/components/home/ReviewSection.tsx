import { siteConfig } from "@/config/site";

const reviews = [
  {
    body: `Rideau metallique bloque a la fermeture un samedi soir, le technicien DRM est arrive en 35 minutes a Aix-en-Provence. Diagnostic clair, devis transparent, intervention faite dans la foulee. Tres pro.`,
    name: "Jean-Marc Etcheverry",
    location: `${siteConfig.city} centre`,
    rating: 5,
  },
  {
    body: `Installation d'un rideau metallique neuf pour notre bijouterie sur Gardanne, devis sous 24h, pose tres soignee, grille cobra robuste et discrete. Excellent rapport qualite-prix.`,
    name: "Maite Iturralde",
    location: "Gardanne",
    rating: 5,
  },
  {
    body: `Motorisation d'un ancien rideau manuel pour notre commerce a Le Tholonet. Equipe DRM Aix-en-Provence tres a l'ecoute, motorisation Somfy fiable, telecommande programmee impeccablement.`,
    name: "Pierre Aguerre",
    location: "Le Tholonet",
    rating: 5,
  },
  {
    body: `Service de qualite pour le depannage du rideau de notre atelier a Les Milles. Lame redressee, axe regraisse, moteur teste. Garantie 2 ans tenue par ecrit. Je recommande sans reserve.`,
    name: "Catherine Lartigau",
    location: "Les Milles (13290)",
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
