import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blogPosts";

const siteUrl = "https://www.walnutai.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const featureSlugs = [
    "ai-sdlc-automation", "requirements-gap-analysis", "requirements-engineering",
    "ai-code-generation", "ai-test-case-generation", "test-execution-management",
    "analytics-dashboard",
  ];

  const integrationSlugs = [
    "github", "gitlab", "jira", "docker",
    "kubernetes", "aws", "figma", "playwright",
  ];

  const compareSlugs = [
    "walnutai-vs-github-copilot", "walnutai-vs-cursor",
    "walnutai-vs-tabnine", "walnutai-vs-qodo",
  ];

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    // Product
    { url: `${siteUrl}/features`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...featureSlugs.map((s) => ({ url: `${siteUrl}/features/${s}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${siteUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/integrations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...integrationSlugs.map((s) => ({ url: `${siteUrl}/integrations/${s}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${siteUrl}/compare`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...compareSlugs.map((s) => ({ url: `${siteUrl}/compare/${s}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    // Company
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/changelog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    // Blog
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogEntries,
    // Legal
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms-and-conditions`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/security`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
  ];
}
