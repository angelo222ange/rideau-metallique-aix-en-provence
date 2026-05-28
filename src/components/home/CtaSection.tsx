import Image from "next/image";
import Link from "next/link";
import { ctaSection } from "@/content/site";
import { ArrowRight } from "../icons";

export default function CtaSection() {
  return (
    <section className="px-6 sm:px-10 lg:px-12 pb-24">
      <div className="container">
        <div className="relative rounded-[24px] overflow-hidden min-h-[360px] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={ctaSection.bg}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/65 via-[#050505]/30 to-[#050505]/55" />
          </div>

          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 lg:px-14 py-14 items-center">
            <h2 className="text-white">
              {ctaSection.headingLine1}
              <br />
              <span className="text-white/85">{ctaSection.headingLine2}</span>
            </h2>
            <div className="flex flex-col gap-6">
              <p className="text-[15px] text-white/80 leading-[1.55] max-w-[520px]">
                {ctaSection.body}
              </p>
              <div className="flex flex-wrap gap-3">
                {ctaSection.ctas.map((c) => (
                  <Link
                    key={c.label}
                    href={c.href}
                    className={c.variant === "primary" ? "btn-primary" : "btn-white"}
                  >
                    {c.label}
                    <span className="btn-arrow-square">
                      <ArrowRight />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
