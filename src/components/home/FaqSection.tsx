"use client";

import Link from "next/link";
import { useState } from "react";
import { faq } from "@/content/site";
import { ArrowRight, MinusIcon, PlusIcon } from "../icons";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 lg:py-28 px-6 sm:px-10 lg:px-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
          {/* Left column: heading + side text + CTA */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <div className="eyebrow">{faq.eyebrow}</div>
            <h2 className="max-w-[420px]">{faq.heading}</h2>
            <p className="text-[15px] text-[#050505]/55 leading-[1.55] max-w-[420px]">
              {faq.sideText}
            </p>
            <Link href={faq.cta.href} className="btn-primary self-start mt-4">
              {faq.cta.label}
              <span className="btn-arrow-square">
                <ArrowRight />
              </span>
            </Link>
          </div>

          {/* Right column: accordion */}
          <div className="flex flex-col divide-y divide-[rgba(5,5,5,0.1)]">
            {faq.items.map((item, i) => {
              const isOpen = i === open;
              return (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="text-left py-6 flex flex-col gap-3 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-6">
                    <h3 className="text-[19px] leading-[1.3] text-[#050505]">
                      {item.question}
                    </h3>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fbfbfb] flex items-center justify-center text-[#050505]">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-[15px] text-[#050505]/60 leading-[1.55] pr-12">
                      {item.answer}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
