import { type ZoneLocal } from "@/lib/zone-local-data";

interface Props {
  zoneName: string;
  zonePostal: string;
  serviceName: string;
  local: ZoneLocal;
}

export default function ServiceZoneSpecific({ zoneName, zonePostal, serviceName, local }: Props) {
  return (
    <section className="bg-[#F5F1E6] py-14 md:py-20 px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[820px] mb-8">
          <span className="inline-block bg-white px-3 py-1.5 rounded-full text-[11px] tracking-[0.18em] uppercase text-[#4F5648] font-semibold mb-3">
            [ Notre experience hyper-locale ]
          </span>
          <h2 className="text-[#181C16] mb-4">
            {serviceName} de rideau metallique a {zoneName} ({zonePostal}) : ce que nous y faisons reellement
          </h2>
          <p className="text-[#4F5648] text-[16px] leading-relaxed">{local.specifique}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <div className="bg-white rounded-[12px] p-6 md:p-8">
            <h3 className="text-[#181C16] text-[18px] md:text-[20px] font-semibold mb-4">
              Rues et axes que nous desservons a {zoneName}
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-[14px] text-[#4F5648]">
              {local.streets.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-[#C28840] mt-1">&#8226;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-[12px] p-6 md:p-8">
            <h3 className="text-[#181C16] text-[18px] md:text-[20px] font-semibold mb-4">
              Points de reference autour de nos interventions
            </h3>
            <ul className="grid grid-cols-1 gap-2 text-[14px] text-[#4F5648]">
              {local.landmarks.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-[#2D3F2A] mt-1">&#9670;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#181C16] text-[18px] font-semibold mb-3">
              Quartiers couverts a {zoneName}
            </h3>
            <div className="flex flex-wrap gap-2">
              {local.quartiers.map((q) => (
                <span key={q} className="inline-flex items-center px-3 py-1.5 bg-white border border-black/10 rounded-full text-[13px] text-[#181C16]">
                  {q}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[#181C16] text-[18px] font-semibold mb-3">
              Profils de commerces et activites suivis
            </h3>
            <div className="flex flex-wrap gap-2">
              {local.commerces.map((c) => (
                <span key={c} className="inline-flex items-center px-3 py-1.5 bg-white border border-black/10 rounded-full text-[13px] text-[#181C16]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
