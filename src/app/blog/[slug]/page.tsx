import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import { posts } from "@/content/blog/posts";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: siteConfig.url + post.img }],
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url + "/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: siteConfig.url + "/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${slug}/` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: siteConfig.url + post.img,
    datePublished: post.date,
    author: { "@type": "Organization", name: siteConfig.fullName },
    publisher: { "@type": "Organization", name: siteConfig.fullName, logo: { "@type": "ImageObject", url: siteConfig.url + "/icon-512.png" } },
    description: post.excerpt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, articleSchema]) }} />
      <Header />
      <main className="bg-white">
        <article>
          <div className="relative w-full px-2 md:px-[10px] pt-2 md:pt-[10px]">
            <div className="relative w-full overflow-hidden rounded-[12px] min-h-[360px] md:min-h-[420px]">
              <img src={post.img} alt={post.title} width={2400} height={1200} loading="eager" decoding="async" className="absolute inset-0 w-full h-full object-cover" title={post.title} />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F18]/65 to-[#1A1F18]/85" aria-hidden />
              <div className="relative z-10 flex flex-col items-start justify-end px-5 md:px-10 py-10 min-h-[360px] md:min-h-[420px] max-w-[1280px] mx-auto">
                <nav className="text-[13px] text-white/75 mb-3">
                  <Link href="/" className="hover:text-white">Accueil</Link>
                  <span className="mx-2">/</span>
                  <Link href="/blog/" className="hover:text-white">Blog</Link>
                </nav>
                <h1 className="text-white max-w-[880px]" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>{post.title}</h1>
                <p className="text-white/80 text-[14px] mt-3">{post.date} &middot; {post.readTime} &middot; {post.author}</p>
              </div>
            </div>
          </div>

          <div className="max-w-[820px] mx-auto px-5 md:px-10 py-12 md:py-16 text-[#181C16] text-[16px] leading-[1.8]">
            {post.body.map((block, i) => {
              if (block.type === "h2") return <h2 key={i} className="text-[26px] md:text-[28px] font-semibold mt-8 mb-3">{block.content as string}</h2>;
              if (block.type === "h3") return <h3 key={i} className="text-[20px] md:text-[22px] font-semibold mt-6 mb-2">{block.content as string}</h3>;
              if (block.type === "ul") return (
                <ul key={i} className="list-disc pl-6 my-3 flex flex-col gap-2">
                  {(block.content as string[]).map((it, j) => (<li key={j}>{it}</li>))}
                </ul>
              );
              if (block.type === "blockquote") return <blockquote key={i} className="border-l-4 border-[#C28840] pl-4 italic my-5 text-[#4F5648]">{block.content as string}</blockquote>;
              return <p key={i} className="my-3 text-[#4F5648]">{block.content as string}</p>;
            })}
          </div>

          <section className="bg-[#1A1F18] text-white py-12 px-5 md:px-10">
            <div className="max-w-[820px] mx-auto text-center">
              <h2 className="text-white mb-3">Besoin d&apos;un avis professionnel a {siteConfig.city} ?</h2>
              <p className="text-white/85 text-[16px] mb-6">Demandez un devis gratuit a DRM {siteConfig.city}. Reponse sous 24h, intervention sous {siteConfig.delai} minutes en urgence.</p>
              <Link href="/contact/" className="inline-flex items-center justify-center h-12 px-7 bg-[#C28840] hover:bg-[#A66E2E] text-white text-[15px] font-semibold rounded-[8px]">
                Demander un devis
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
