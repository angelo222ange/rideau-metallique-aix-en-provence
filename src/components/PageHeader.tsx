import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./icons";

interface CTA {
  label: string;
  href: string;
  variant?: "primary" | "white";
}

interface PageHeaderProps {
  eyebrow: string;
  headlinePre: string;
  headlineHighlight: string;
  headlinePost?: string;
  body: string;
  ctas: CTA[];
  bgImage: string;
  bgAlt: string;
  proof?: string;
  proofAvatars?: string[];
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({
  eyebrow,
  headlinePre,
  headlineHighlight,
  headlinePost,
  body,
  ctas,
  bgImage,
  bgAlt,
  proof,
  proofAvatars,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="relative -mt-[88px] pt-[88px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={bgImage} alt={bgAlt} title={bgAlt} fill priority className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-[#050505]" />
      </div>

      <div className="container relative z-10 px-6 sm:px-10 lg:px-12 pt-16 pb-20 lg:pt-20 lg:pb-24 min-h-[72vh] flex flex-col">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="text-[13px] text-white/70 mb-6 flex flex-wrap items-center gap-2" aria-label="Fil d'Ariane">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span className="text-white">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="text-white/40">/</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="eyebrow on-dark mb-6">{eyebrow}</div>

        <h1 className="text-white max-w-[1100px] mb-8">
          {headlinePre}{" "}<span className="text-[#C28840]">{headlineHighlight}</span>{headlinePost ? <>{" "}{headlinePost}</> : null}
        </h1>

        <p className="text-white/85 text-[18px] max-w-[680px] mb-10" style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}>
          {body}
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          {ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={cta.variant === "white" ? "btn-white" : "btn-primary"}
            >
              {cta.label}
              <span className="btn-arrow-square">
                <ArrowRight />
              </span>
            </Link>
          ))}
        </div>

        {proof && (
          <div className="flex items-center gap-4 mt-auto">
            {proofAvatars && proofAvatars.length > 0 && (
              <div className="flex -space-x-3">
                {proofAvatars.map((a, i) => (
                  <span
                    key={a}
                    className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30"
                    style={{ zIndex: proofAvatars.length - i }}
                  >
                    <Image src={a} alt="" fill className="object-cover" sizes="40px" />
                  </span>
                ))}
              </div>
            )}
            <p className="text-white/80 text-[15px]">{proof}</p>
          </div>
        )}
      </div>
    </section>
  );
}
