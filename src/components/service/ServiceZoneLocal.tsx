import { type ZoneLocal } from "@/lib/zone-local-data";

export default function ServiceZoneLocal({
  zoneName,
  zonePostal,
  serviceName,
  local,
}: {
  zoneName: string;
  zonePostal: string;
  serviceName: string;
  local: ZoneLocal;
}) {
  return (
    <section className="section bg-[#050505] text-white">
      <div className="container">
        <div className="max-w-[820px] mb-12">
          <div className="eyebrow on-dark mb-6">[ Notre experience hyper-locale ]</div>
          <h2 className="text-white mb-4">
            {serviceName} de rideau metallique a {zoneName} ({zonePostal})
          </h2>
          <p className="text-white/70 text-[16px] leading-[1.55]">{local.specifique}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          <div className="bg-white/5 border border-white/10 rounded-[20px] p-6">
            <h3 className="h2-sm text-white mb-4">Rues desservies</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-white/75">
              {local.streets.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="text-[#C28840] mt-1">&#8226;</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[20px] p-6">
            <h3 className="h2-sm text-white mb-4">Reperes locaux</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-white/75">
              {local.landmarks.map((l) => (
                <li key={l} className="flex items-start gap-2">
                  <span className="text-[#C28840] mt-1">&#9670;</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[20px] p-6">
            <h3 className="h2-sm text-white mb-4">Quartiers couverts</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-white/75">
              {local.quartiers.map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <span className="text-[#C28840] mt-1">&#9632;</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[20px] p-6">
            <h3 className="h2-sm text-white mb-4">Commerces suivis</h3>
            <ul className="flex flex-col gap-2 text-[14px] text-white/75">
              {local.commerces.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-[#C28840] mt-1">&#9650;</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-10">
          {local.transport.map((t) => (
            <span key={t} className="bg-[#C28840]/15 border border-[#C28840]/30 text-[#C28840] px-4 py-2 rounded-full text-[13px] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
