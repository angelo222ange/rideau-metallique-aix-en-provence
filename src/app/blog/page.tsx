import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import CtaSection from "@/components/home/CtaSection";
import { ArrowRight } from "@/components/icons";
import { posts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Blog rideau metallique - Conseils ${siteConfig.brand}`,
  description: `Guides, conseils techniques et actualites rideau metallique par ${siteConfig.brand} : choix des lames, motorisation, entretien, depannage en Pays d'Aix.`,
  alternates: { canonical: siteConfig.url + "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="[ BLOG RIDEAU METALLIQUE ]"
          headlinePre="Conseils techniques"
          headlineHighlight="rideau metallique"
          headlinePost="par DRM Aix-en-Provence"
          body="Guides techniques, choix des lames, motorisation Somfy/ACM/Simu, entretien preventif. Tout ce qu'un commercant aixois doit savoir avant ou apres une intervention sur sa fermeture metallique."
          ctas={[{ label: "DEMANDER UN DEVIS", href: "/contact/", variant: "primary" }]}
          bgImage="/images/gallery/fabrication-rideau-metallique-france.webp"
          bgAlt="Blog rideau metallique DRM Aix-en-Provence"
          breadcrumb={[{ label: "Accueil", href: "/" }, { label: "Blog" }]}
        />

        <section className="section bg-white">
          <div className="container">
            <div className="eyebrow mb-6">[ DERNIERS ARTICLES ]</div>
            <h2 className="mb-12 max-w-[820px]">Tous les guides rideau metallique</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}/`} className="flex flex-col gap-4 group">
                  <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] bg-[#fbfbfb]">
                    <img src={p.img} alt={p.title} title={p.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-3 text-[12px] text-[#050505]/55 uppercase tracking-[0.08em]">
                    <span>{p.date}</span>
                    <span>•</span>
                    <span>{p.readTime}</span>
                  </div>
                  <h3 className="h2-sm text-[#050505] group-hover:text-[#C28840] transition-colors">{p.title}</h3>
                  <p className="text-[15px] text-[#050505]/65 leading-[1.55] line-clamp-3">{p.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[#C28840] text-[14px] font-semibold">
                    Lire l&apos;article <ArrowRight />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
