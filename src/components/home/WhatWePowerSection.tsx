import { whatWePower } from "@/content/site";
import { CheckIcon } from "../icons";

export default function WhatWePowerSection() {
  return (
    <section className="section bg-[#fbfbfb]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-[680px]">
            <div className="eyebrow mb-6">{whatWePower.eyebrow}</div>
            <h2>{whatWePower.heading}</h2>
          </div>
          <p className="text-[16px] text-[#050505]/60 leading-[1.55] max-w-[420px]">
            {whatWePower.body}
          </p>
        </div>

        {/* Showcase video */}
        <div className="relative rounded-[24px] overflow-hidden aspect-[16/8] mb-16 bg-[#0e2419]">
          <video
            src={whatWePower.video}
            poster={whatWePower.videoPoster}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* 3 features with green check circles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whatWePower.features.map((f) => (
            <div key={f.title}>
              <span className="check-circle mb-5 text-[#050505]">
                <CheckIcon />
              </span>
              <h3 className="mb-2">{f.title}</h3>
              <p className="text-[15px] text-[#050505]/55 leading-[1.5] max-w-[320px]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
