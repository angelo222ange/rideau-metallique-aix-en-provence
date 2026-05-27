import Link from "next/link";
import { ArrowRight } from "../icons";
import { siteConfig, services as servicesList, zones as zonesList } from "@/config/site";

export default function ServiceLinks({
  currentServiceId,
  currentZoneSlug,
  zoneName,
}: {
  currentServiceId: string;
  currentZoneSlug: string;
  zoneName: string;
}) {
  const otherServices = servicesList.filter((s) => s.id !== currentServiceId);
  const neighborZones = zonesList.filter((z) => z.slug !== currentZoneSlug).slice(0, 8);
  const citySlug = siteConfig.cityShort.toLowerCase().replace(/\s+/g, "-");

  return (
    <section className="section bg-[#fbfbfb]">
      <div className="container">
        {/* Other services cross-sell */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow mb-6">[ Nos 6 autres services ]</div>
              <h2 className="max-w-[680px]">Toute la chaine de valeur du rideau metallique a {zoneName}</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => {
              const href = currentZoneSlug === citySlug
                ? `/${s.slug}-${citySlug}/`
                : `/${s.slug}-${currentZoneSlug}/`;
              return (
                <Link key={s.id} href={href} className="bg-white rounded-[20px] p-6 flex flex-col gap-3 border border-black/5 hover:border-[#C28840]/40 hover:shadow-lg transition-all group">
                  <h3 className="h2-sm text-[#050505]">{s.name}</h3>
                  <p className="text-[14px] text-[#050505]/65 leading-[1.5]">{s.shortDescription}</p>
                  <span className="inline-flex items-center gap-2 text-[#C28840] text-[14px] font-semibold mt-2">
                    Voir le service <ArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Neighbor zones */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow mb-6">[ Communes voisines ]</div>
              <h2 className="max-w-[680px]">
                {servicesList.find((s) => s.id === currentServiceId)?.name} de rideau metallique dans les communes voisines
              </h2>
            </div>
            <Link href="/zones/" className="btn-primary self-start lg:self-end">
              Voir toutes les zones <span className="btn-arrow-square"><ArrowRight /></span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {neighborZones.map((z) => {
              const svcSlug = servicesList.find((s) => s.id === currentServiceId)!.slug;
              return (
                <Link key={z.slug} href={`/${svcSlug}-${z.slug}/`} className="bg-white border border-black/10 rounded-full px-5 py-2.5 text-[14px] font-medium hover:bg-[#C28840] hover:text-white hover:border-[#C28840] transition-colors">
                  {z.name} ({z.postalCode})
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
