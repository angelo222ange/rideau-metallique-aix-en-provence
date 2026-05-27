import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/site";
import { ArrowRight, CheckIcon } from "../icons";

export default function ServicesSection() {
  return (
    <section className="section-services relative overflow-hidden">
      {/* Decorative BG circle */}
      <div
        className="absolute right-[-300px] top-[200px] w-[1031px] h-[1031px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(38,230,142,0.10), rgba(20,58,43,0))",
        }}
      />

      <div className="container relative">
        <div className="mb-16">
          <div className="eyebrow on-dark mb-6">{services.eyebrow}</div>
          <h2 className="text-white max-w-[820px]">{services.heading}</h2>
        </div>

        <div className="flex flex-col gap-16 lg:gap-20">
          {services.tiles.map((tile, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={tile.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative rounded-[24px] overflow-hidden aspect-[5/4.4] bg-white/5">
                  <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 text-white">
                  <h3 className="text-white">{tile.title}</h3>
                  <p className="text-[16px] text-white/70 leading-[1.55] max-w-[520px]">
                    {tile.body}
                  </p>
                  <ul className="flex flex-col gap-4 mt-2">
                    {tile.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-white/85">
                        <span className="flex-shrink-0 mt-0.5 text-[#C28840]">
                          <CheckIcon />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={tile.cta.href} className="btn-white self-start mt-4">
                    {tile.cta.label}
                    <span className="btn-arrow-square">
                      <ArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
