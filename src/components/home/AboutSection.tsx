import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/content/site";
import { ArrowRight } from "../icons";

export default function AboutSection() {
  return (
    <section className="section bg-[#fbfbfb]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT: bento with dark quote card + 2 images */}
          <div className="grid grid-cols-2 gap-4">
            {/* Dark quote card (top-left) */}
            <div className="bg-[#050505] text-white rounded-[24px] p-6 flex flex-col justify-between min-h-[230px]">
              <div className="font-semibold text-[#C28840] text-[22px] flex items-center gap-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l9 8v10h-6v-6h-6v6H3V11l9-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Homey
              </div>
              <p className="text-[15px] leading-[1.45]">
                <span className="text-[#C28840]">&ldquo;Solvance</span>{" "}
                <span className="text-white/85">is helping our business save $10k yearly in our total electricity billing&rdquo;</span>
              </p>
              <Link href={aboutSection.testimonial.cta.href} className="btn-pill self-start">
                {aboutSection.testimonial.cta.label}
              </Link>
            </div>

            {/* Top-right: man on roof */}
            <div className="rounded-[24px] overflow-hidden min-h-[230px] relative">
              <Image src={aboutSection.manImage} alt="Man working on a roof" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 30vw" />
            </div>

            {/* Bottom: wide solar roof image, full width across columns */}
            <div className="rounded-[24px] overflow-hidden col-span-2 aspect-[16/9] relative">
              <Image src={aboutSection.roofImage} alt="Solar roof installation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>

          {/* RIGHT: copy + cta */}
          <div className="flex flex-col gap-6 lg:pt-2">
            <div className="eyebrow">{aboutSection.eyebrow}</div>
            <h2>{aboutSection.heading}</h2>
            <p className="text-[18px] text-[#050505]/60 leading-[1.55] max-w-[520px]">
              {aboutSection.body}
            </p>
            <Link href={aboutSection.cta.href} className="btn-primary self-start mt-6">
              {aboutSection.cta.label}
              <span className="btn-arrow-square">
                <ArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
