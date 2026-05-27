import Image from "next/image";
import Link from "next/link";
import { footer } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-10 px-6 sm:px-10 lg:px-12">
      <div className="container">
        {/* Top: newsletter + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 mb-16">
          {/* Newsletter */}
          <div className="flex flex-col gap-6 max-w-[480px]">
            <Link href="/" className="block w-fit">
              <Image src={footer.logo} alt="Solvance" width={140} height={46} />
            </Link>
            <p className="text-[14px] text-white/55 leading-[1.55]">
              {footer.newsletter.body}
            </p>
            <form className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-5 pr-1 py-1">
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="flex-grow bg-transparent text-[14px] placeholder-white/40 outline-none py-2"
              />
              <button type="submit" className="btn-primary !py-2.5 !px-4 !text-[12px] rounded-full">
                {footer.newsletter.buttonLabel}
              </button>
            </form>
            <p className="text-[12px] text-white/40">
              {footer.newsletter.disclaimer}{" "}
              <Link href={footer.newsletter.disclaimerLink.href} className="text-white/70 underline underline-offset-2">
                {footer.newsletter.disclaimerLink.label}
              </Link>
            </p>
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
