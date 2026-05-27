import type { MetadataRoute } from "next";
import { siteConfig, services, zones } from "@/config/site";
import { posts } from "@/content/blog/posts";

export const dynamic = "force-static";

const citySlug = siteConfig.city.toLowerCase().replace(/[\s']/g, "-");
const today = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    { url: `${base}/`, priority: 1.0, lastModified: today, changeFrequency: "weekly" as const },
    { url: `${base}/zones/`, priority: 0.8, lastModified: today, changeFrequency: "monthly" as const },
    { url: `${base}/blog/`, priority: 0.7, lastModified: today, changeFrequency: "weekly" as const },
    { url: `${base}/contact/`, priority: 0.8, lastModified: today, changeFrequency: "monthly" as const },
    { url: `${base}/plan-du-site/`, priority: 0.3, lastModified: today, changeFrequency: "yearly" as const },
    { url: `${base}/mentions-legales/`, priority: 0.2, lastModified: today, changeFrequency: "yearly" as const },
    { url: `${base}/confidentialite/`, priority: 0.2, lastModified: today, changeFrequency: "yearly" as const },
  ];

  const cityServicePages = services.map((s) => ({
    url: `${base}/${s.slug}-${citySlug}/`,
    priority: 0.95,
    lastModified: today,
    changeFrequency: "weekly" as const,
  }));

  const subcityPages = zones.flatMap((z) =>
    services.map((s) => ({
      url: `${base}/${s.slug}-${z.slug}/`,
      priority: 0.7,
      lastModified: today,
      changeFrequency: "monthly" as const,
    })),
  );

  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}/`,
    priority: 0.6,
    lastModified: today,
    changeFrequency: "monthly" as const,
  }));

  return [...staticPages, ...cityServicePages, ...subcityPages, ...blogPages];
}
