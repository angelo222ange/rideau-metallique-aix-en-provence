import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-10 px-6 sm:px-10 lg:px-12">
      <div className="container">
        {/* Top: contact + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 mb-16">
          {/* Brand + contact bloc */}
          <div className="flex flex-col gap-6 max-w-[480px]">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Image src={footer.logo} alt={siteConfig.brand} width={48} height={48} />
              <span className="text-[18px] font-semibold text-white">
                DRM <span className="text-[#C28840]">{siteConfig.cityShort}</span>
              </span>
            </Link>
            <p className="text-[14px] text-white/65 leading-[1.55]">
              {footer.newsletter.body}
            </p>
            {siteConfig.phonePublic && siteConfig.phone && (
              <a
                href={siteConfig.phoneLink}
                className="inline-flex items-center gap-3 bg-[#2D3F2A] hover:bg-[#1F2C1D] px-5 py-3.5 rounded-full text-white text-[16px] font-bold transition-colors w-fit"
                aria-label={`Appeler le ${siteConfig.phone}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" />
                </svg>
                {siteConfig.phone}
              </a>
            )}
            <div className="flex flex-col gap-1.5 text-[14px] text-white/60">
              <div><span className="text-white/40">Adresse :</span> {siteConfig.address}</div>
              <div><span className="text-white/40">Email :</span> <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></div>
              <div><span className="text-white/40">Horaires :</span> {siteConfig.openingHours}</div>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {footer.linkGroups.map((g) => (
              <div key={g.title} className="flex flex-col gap-3">
                <div className="text-[11px] tracking-[0.14em] font-semibold text-white/45 mb-2">
                  {g.title}
                </div>
                {g.links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="text-[14px] text-white/80 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Brands row */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 py-8 border-y border-white/10 mb-8">
          <span className="text-[13px] text-white/50 uppercase tracking-[0.08em] whitespace-nowrap">
            {footer.brands.title}
          </span>
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 opacity-70">
            {footer.brands.logos.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Brand"
                width={100}
                height={36}
                className="object-contain max-h-[32px] w-auto"
              />
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-white/45">
          <span>© {footer.copyright}</span>
          <span>{footer.socialLabel}</span>
        </div>
      </div>
    </footer>
  );
}
