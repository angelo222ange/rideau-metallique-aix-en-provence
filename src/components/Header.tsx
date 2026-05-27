"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, services } from "@/config/site";
import { ArrowRight } from "./icons";

const citySlug = siteConfig.cityShort.toLowerCase().replace(/\s+/g, "-");

const serviceVisuals: Record<string, string> = {
  depannage: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
  installation: "/images/gallery/installation-rideau-metallique-anti-effraction.webp",
  reparation: "/images/gallery/realisation-rideau-metallique-lame-pleine.webp",
  motorisation: "/images/gallery/moteur-tubulaire-rideau-metallique-drm.webp",
  deblocage: "/images/gallery/depannage-rideau-metallique-drm.webp",
  entretien: "/images/gallery/pose-axe-rideau-metallique-drm.webp",
  fabrication: "/images/gallery/fabrication-axe-rideau-metallique-france.webp",
};

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Zones", href: "/zones/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export default function Header() {
  const [showServices, setShowServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 w-full px-4 sm:px-6 pt-2">
      <header className="header-pill container">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={siteConfig.brand}>
          <Image
            src="/images/logos/logo-drm-aix-en-provence.webp"
            alt={siteConfig.brand}
            width={40}
            height={40}
            priority
            style={{ width: 40, height: 40, objectFit: "contain" }}
          />
          <span className="text-[15px] font-semibold text-[#050505] tracking-tight whitespace-nowrap hidden sm:inline">
            DRM <span className="text-[#C28840]">Aix-en-Provence</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-medium">
          <Link href="/" className="text-[#050505] hover:opacity-70 transition-opacity">Accueil</Link>

          {/* Dropdown Services */}
          <div
            className="relative"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => setShowServices(false)}
          >
            <button type="button" className="flex items-center gap-1 text-[#050505] hover:opacity-70 transition-opacity py-2">
              Services
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {showServices && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                <div className="bg-white rounded-[20px] shadow-2xl border border-black/5 p-6 w-[720px] grid grid-cols-2 gap-3">
                  {services.map((s) => (
                    <Link
                      key={s.id}
                      href={`/${s.slug}-${citySlug}/`}
                      className="flex items-center gap-3 p-3 rounded-[12px] hover:bg-[#fbfbfb] transition-colors group"
                    >
                      <span className="shrink-0 w-14 h-14 rounded-[10px] overflow-hidden bg-[#fbfbfb] relative">
                        <Image src={serviceVisuals[s.id]} alt={s.name} fill className="object-cover" sizes="56px" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[14px] font-semibold text-[#050505] group-hover:text-[#C28840] transition-colors">
                          {s.name}
                        </span>
                        <span className="text-[12px] text-[#050505]/55">{s.shortDescription.slice(0, 50)}…</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/zones/" className="text-[#050505] hover:opacity-70 transition-opacity">Zones</Link>
          <Link href="/blog/" className="text-[#050505] hover:opacity-70 transition-opacity">Blog</Link>
          <Link href="/contact/" className="text-[#050505] hover:opacity-70 transition-opacity">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* CTA secondaire — appel / contact express (visible md+) */}
          <Link
            href={siteConfig.phonePublic && siteConfig.phone ? siteConfig.phoneLink : "/contact/"}
            className="hidden md:inline-flex items-center gap-2 px-3 py-2.5 rounded-full border border-[#050505]/15 text-[12px] font-semibold text-[#050505] hover:bg-[#fbfbfb] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#050505" strokeWidth="2" />
            </svg>
            <span className="hidden xl:inline">URGENCE 30 MIN</span>
            <span className="xl:hidden">URGENCE</span>
          </Link>

          {/* CTA primary devis */}
          <Link href="/contact/" className="btn-primary !py-3 !px-4 !text-[12px]">
            DEVIS GRATUIT
            <span className="btn-arrow-square">
              <ArrowRight />
            </span>
          </Link>

          {/* Hamburger mobile */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-[5px] p-2 ml-1"
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="w-6 h-[2px] bg-[#050505]" />
            <span className="w-6 h-[2px] bg-[#050505]" />
            <span className="w-6 h-[2px] bg-[#050505]" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 bg-white rounded-[20px] shadow-2xl border border-black/5 p-6 mx-2">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-3 text-[15px] font-medium text-[#050505] border-b border-black/5 last:border-0">
                {l.label}
              </Link>
            ))}
            <div className="py-3 border-b border-black/5">
              <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#050505]/55 mb-3">Nos services</div>
              <div className="flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.id} href={`/${s.slug}-${citySlug}/`} onClick={() => setMobileOpen(false)} className="py-2 text-[14px] text-[#050505]/85">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
