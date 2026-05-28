interface Props {
  zoneName: string;
  lat: number;
  lng: number;
  postal: string;
}

export default function ServiceZoneMap({ zoneName, lat, lng, postal }: Props) {
  const delta = 0.018;
  const bbox = `${(lng - delta).toFixed(4)}%2C${(lat - delta).toFixed(4)}%2C${(lng + delta).toFixed(4)}%2C${(lat + delta).toFixed(4)}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
  const linkOut = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`;

  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-start">
          <div>
            <span className="inline-block bg-[#F5F1E6] px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#4F5648] font-semibold mb-3">
              [ Zone d&apos;intervention ]
            </span>
            <h2 className="text-[#181C16] mb-4 text-[24px] md:text-[28px] font-semibold">
              Carte : nos interventions a {zoneName} ({postal})
            </h2>
            <p className="text-[#4F5648] text-[15px] leading-relaxed mb-4">
              DRM Biarritz intervient sur l&apos;integralite du territoire de {zoneName} et des communes voisines.
              Notre vehicule atelier rayonne depuis le centre, ce qui nous permet de garantir un delai d&apos;intervention de 30 minutes
              en moyenne en horaires ouvrables, et sous 1 heure en urgence nuit/week-end.
            </p>
            <ul className="text-[14px] text-[#4F5648] space-y-1.5">
              <li>&bull; Centre-ville et quartiers peripheriques</li>
              <li>&bull; Zones commerciales et artisanales</li>
              <li>&bull; Acces facile aux axes routiers principaux</li>
              <li>&bull; Stock pieces detachees embarque</li>
            </ul>
            <a
              href={linkOut}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-[14px] text-[#d85535] font-semibold hover:text-[#b3401e]"
            >
              Voir en plein ecran &rarr;
            </a>
          </div>
          <div className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] rounded-[12px] overflow-hidden border border-black/10 shadow-sm">
            <iframe
              src={src}
              title={`Carte d'intervention DRM a ${zoneName}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
