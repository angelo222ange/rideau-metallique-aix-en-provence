import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { posts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Blog rideau metallique - Conseils DRM ${siteConfig.city}`,
  description: `Guides, conseils techniques et actualites rideau metallique par DRM ${siteConfig.city} : choix des lames, motorisation, entretien, depannage.`,
  alternates: { canonical: siteConfig.url + "/blog/" },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#1A1F18] text-white pt-16 pb-12 md:pt-24 md:pb-16 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto">
            <nav className="text-[13px] text-white/70 mb-4">
              <Link href="/" className="hover:text-white">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Blog</span>
            </nav>
            <h1 className="text-white max-w-[820px]">Blog DRM {siteConfig.city}</h1>
            <p className="text-white/85 text-[17px] mt-5 max-w-[720px]">
              Guides techniques, conseils d&apos;entretien et actualites du metier du rideau metallique.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 md:py-20 px-5 md:px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="flex flex-col gap-4 group">
                <Link href={`/blog/${post.slug}/`} className="relative w-full aspect-[3/2] rounded-[12px] overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    width={900}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" title={post.title}
                  />
                </Link>
                <div className="flex flex-col gap-2">
                  <span className="text-[#4F5648] text-[13px]">{post.date} &middot; {post.readTime}</span>
                  <Link href={`/blog/${post.slug}/`}>
                    <h3 className="text-[#181C16] text-[18px] md:text-[20px] font-semibold leading-snug hover:text-[#C28840] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-[#4F5648] text-[14px] leading-relaxed">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}/`} className="inline-flex items-center text-[#C28840] text-[14px] font-semibold mt-1 hover:text-[#A66E2E]">
                    Lire l&apos;article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
