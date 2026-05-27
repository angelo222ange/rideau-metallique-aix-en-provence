import Image from "next/image";
import Link from "next/link";
import { hero } from "@/content/site";
import { ArrowRight } from "../icons";

export default function HeroSection() {
  return (
    <section className="relative -mt-[88px] pt-[88px] overflow-hidden">
      {/* Background photo + dark gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src={hero.bg}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-[#050505]" />
      </div>

      <div className="container relative z-10 px-6 sm:px-10 lg:px-12 pt-20 pb-24 lg:pt-24 lg:pb-28 min-h-[88vh] flex flex-col">
        <div className="eyebrow on-dark mb-6">{hero.eyebrow}</div>

        <h1 className="text-white max-w-[1100px] mb-8">
          {hero.headlinePre}{" "}
          <span className="text-[#C28840]">{hero.headlineHighlight}</span>{" "}
          {hero.headlinePost}
        </h1>

        <p className="text-white/85 text-[18px] max-w-[640px] mb-10">
          {hero.body}
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {hero.ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={cta.variant === "primary" ? "btn-primary" : "btn-white"}
            >
              {cta.label}
              <span className="btn-arrow-square">
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <div className="flex -space-x-3">
            {hero.avatars.map((a, i) => (
              <span
                key={a}
                className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30"
                style={{ zIndex: hero.avatars.length - i }}
              >
                <Image src={a} alt="" fill className="object-cover" sizes="40px" />
              </span>
            ))}
          </div>
          <p className="text-white/80 text-[15px]">{hero.proof}</p>
        </div>
      </div>
    </section>
  );
}
