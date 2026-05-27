"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "@/content/site";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  SolarPanelIcon,
  BatteryIcon,
  EvChargerIcon,
} from "../icons";

const tagIcons = {
  solar: SolarPanelIcon,
  battery: BatteryIcon,
  ev: EvChargerIcon,
};

function ProjectCard({ tile }: { tile: (typeof projects.tiles)[number] }) {
  const [idx, setIdx] = useState(0);
  const total = tile.images.length;
  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <article className="bg-white rounded-[28px] p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6 lg:gap-8 border border-[rgba(5,5,5,0.06)]">
      {/* Left: content */}
      <div className="flex flex-col gap-5 p-2 lg:p-4">
        <h3>{tile.title}</h3>
        <p className="text-[15px] text-[#050505]/55 leading-[1.55]">{tile.body}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tile.tags.map((t) => {
            const Icon = tagIcons[t.icon];
            return (
              <span
                key={t.label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(5,5,5,0.1)] text-[13px] font-medium text-[#050505]"
              >
                <Icon />
                {t.label}
              </span>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-2">
          <div className="text-[11px] tracking-[0.12em] text-[#050505]/45 font-semibold mb-3">
            RESULT
          </div>
          <div className="grid grid-cols-3 gap-3">
            {tile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-[14px] border border-[rgba(5,5,5,0.08)] px-3 py-3"
              >
                <div className="text-[10px] tracking-[0.12em] font-semibold text-[#050505]/45 mb-1">
                  {s.label}
                </div>
                <div className="text-[18px] font-semibold text-[#050505] leading-tight">
                  {s.value}
                  {s.unit && <span className="ml-1 text-[13px] text-[#050505]/55 font-normal">{s.unit}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href={tile.href} className="btn-primary self-start mt-3">
          VIEW PROJECT
          <span className="btn-arrow-square">
            <ArrowRight />
          </span>
        </Link>
      </div>

      {/* Right: image carousel */}
      <div className="relative rounded-[20px] overflow-hidden aspect-square lg:aspect-auto lg:min-h-[490px] bg-[#0a0a0a]">
        {tile.images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-500 ${
              i === idx ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#050505] flex items-center justify-center hover:bg-white transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#050505] flex items-center justify-center hover:bg-white transition"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {tile.images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  return (
    <section className="section bg-[#fbfbfb]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <div className="eyebrow mb-6">{projects.eyebrow}</div>
            <h2 className="max-w-[680px]">{projects.heading}</h2>
          </div>
          <Link href={projects.topCta.href} className="btn-dark self-start lg:self-end">
            {projects.topCta.label}
            <span className="btn-arrow-square !bg-[#C28840]">
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {projects.tiles.map((t) => (
            <ProjectCard key={t.title} tile={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
