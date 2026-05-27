"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig, services } from "@/config/site";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="flex items-center justify-between h-[76px] px-5 md:px-10 max-w-[1280px] mx-auto">
        <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.brand}>
          <Image
            src="/images/logos/logo-drm-aix-en-provence.webp"
            alt={siteConfig.brand}
            title={siteConfig.brand}
            width={56}
            height={56}
            style={{ borderRadius: "50%", objectFit: "contain" }}
            priority
          />
          <span className="text-[18px] font-semibold text-[#181C16] tracking-tight hidden sm:inline">
            {siteConfig.brand}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className="text-[14px] font-medium text-[#181C16] hover:text-[#C28840] transition-colors">
            Accueil
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="text-[14px] font-medium text-[#181C16] hover:text-[#C28840] transition-colors py-2 flex items-center gap-1"
              aria-expanded={servicesOpen}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 bg-white border border-black/5 rounded-md shadow-lg min-w-[280px] py-2"
                style={{ paddingTop: 4, marginTop: -2 }}
              >
                {services.map((s) => (
                  <Link
                    key={s.id}
                    href={`/${s.slug}-${citySlug}/`}
                    className="block px-4 py-2 text-[14px] text-[#181C16] hover:bg-[#F5F1E6] hover:text-[#C28840]"
                  >
                    {s.name} de rideau metallique
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/zones/" className="text-[14px] font-medium text-[#181C16] hover:text-[#C28840] transition-colors">
            Zones
          </Link>
          <Link href="/blog/" className="text-[14px] font-medium text-[#181C16] hover:text-[#C28840] transition-colors">
            Blog
          </Link>
          <Link href="/contact/" className="text-[14px] font-medium text-[#181C16] hover:text-[#C28840] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {siteConfig.phonePublic && siteConfig.phone ? (
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center justify-center h-10 px-4 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[14px] font-semibold rounded-[6px] transition-colors"
            >
              {siteConfig.phone}
            </a>
          ) : (
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center h-10 px-4 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[14px] font-semibold rounded-[6px] transition-colors"
            >
              Devis gratuit
            </Link>
          )}
        </div>

        <button
          type="button"
          className="lg:hidden flex flex-col gap-[5px] p-2"
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="w-6 h-[2px] bg-[#181C16]" />
          <span className="w-6 h-[2px] bg-[#181C16]" />
          <span className="w-6 h-[2px] bg-[#181C16]" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <nav className="flex flex-col px-5 py-4 gap-2">
            <Link href="/" onClick={() => setOpen(false)} className="text-[15px] font-medium text-[#181C16] py-2">
              Accueil
            </Link>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between text-[15px] font-medium text-[#181C16] py-2 text-left"
            >
              Services
              <svg width="12" height="8" viewBox="0 0 10 6" fill="none" aria-hidden style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.id} href={`/${s.slug}-${citySlug}/`} onClick={() => setOpen(false)} className="text-[14px] text-[#4F5648] py-1.5">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/zones/" onClick={() => setOpen(false)} className="text-[15px] font-medium text-[#181C16] py-2">
              Zones d&apos;intervention
            </Link>
            <Link href="/blog/" onClick={() => setOpen(false)} className="text-[15px] font-medium text-[#181C16] py-2">
              Blog
            </Link>
            <Link href="/contact/" onClick={() => setOpen(false)} className="text-[15px] font-medium text-[#181C16] py-2">
              Contact
            </Link>
            <Link
              href="/contact/"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-12 px-4 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[14px] font-semibold rounded-[6px]"
            >
              Devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
