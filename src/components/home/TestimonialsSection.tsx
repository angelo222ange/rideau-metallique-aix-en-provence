import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/content/site";
import { PlayIcon, StarIcon } from "../icons";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section bg-[#fbfbfb]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <div className="eyebrow mb-6">{testimonials.eyebrow}</div>
            <h2 className="max-w-[680px]">{testimonials.heading}</h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {testimonials.badges.map((b) => (
              <Link
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white rounded-full px-5 py-3 border border-[rgba(5,5,5,0.08)]"
              >
                <Image src={b.src} alt={b.name} width={140} height={36} className="object-contain" />
              </Link>
            ))}
          </div>
        </div>

        {/* 3-col grid mixed text/video cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {testimonials.items.map((t, i) => {
            if (t.type === "text") {
              return (
                <article
                  key={i}
                  className="bg-white rounded-[24px] p-6 flex flex-col gap-5 border border-[rgba(5,5,5,0.06)] min-h-[280px]"
                >
                  <div className="flex items-center gap-1 text-[#C28840]">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <StarIcon key={s} />
                    ))}
                  </div>
                  <p className="text-[15px] text-[#050505] leading-[1.55] flex-grow">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-[rgba(5,5,5,0.08)]">
                    <Image
                      src={t.avatar}
                      alt={t.author}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="flex flex-col text-[13px] leading-tight">
                      <span className="font-semibold text-[#050505]">{t.author}</span>
                      <span className="text-[#050505]/55">{t.role}</span>
                    </div>
                  </div>
                </article>
              );
            }
            return (
              <article
                key={i}
                className="relative rounded-[24px] overflow-hidden min-h-[280px] bg-[#050505]"
              >
                <video
                  src={t.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-white/90 text-[#050505] flex items-center justify-center">
                  <PlayIcon />
                </div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="font-semibold text-[15px]">{t.author}</div>
                  <div className="text-[13px] text-white/70">{t.role}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
