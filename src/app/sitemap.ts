import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

export const dynamic = "force-static";

const BASE_URL = "https://fitnessexclusive.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Blog post pages — only published posts
  const postPages: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...postPages];
}
