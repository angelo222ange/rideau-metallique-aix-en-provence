"use client";

import Image from "next/image";
import Link from "next/link";
import { nav } from "@/content/site";
import { ArrowRight } from "./icons";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 w-full px-4 sm:px-6 pt-2">
      <header className="header-pill container">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src={nav.logo.src}
            alt={nav.logo.alt}
            width={nav.logo.width}
            height={nav.logo.height}
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {nav.links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#050505] hover:opacity-70 transition-opacity"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href={nav.cta.href} className="btn-primary !py-3 !px-4 !text-[12px]">
          {nav.cta.label}
          <span className="btn-arrow-square">
            <ArrowRight />
          </span>
        </Link>
      </header>
    </div>
  );
}
