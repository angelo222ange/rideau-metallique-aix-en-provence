import Image from "next/image";
import Link from "next/link";
import { blog } from "@/content/site";

export default function BlogSection() {
  return (
    <section className="section bg-[#fbfbfb]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <div className="eyebrow mb-6">{blog.eyebrow}</div>
            <h2 className="h2-sm">{blog.heading}</h2>
          </div>
          <Link
            href={blog.viewAll.href}
            className="text-[14px] font-semibold text-[#050505] hover:opacity-70 self-start lg:self-end inline-flex items-center gap-1"
          >
            {blog.viewAll.label} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blog.posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block rounded-[24px] overflow-hidden bg-white border border-[rgba(5,5,5,0.06)] hover:shadow-lg transition"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-[11px] tracking-[0.1em] uppercase text-[#050505]/55 font-semibold">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-[#050505]/30" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-[20px] leading-tight">{post.title}</h3>
                <p className="text-[14px] text-[#050505]/55 leading-[1.5]">{post.excerpt}</p>
                <div className="flex items-center gap-3 mt-2 pt-4 border-t border-[rgba(5,5,5,0.08)]">
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="flex flex-col text-[12px] leading-tight">
                    <span className="font-semibold text-[#050505]">{post.author}</span>
                    <span className="text-[#050505]/55">{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
