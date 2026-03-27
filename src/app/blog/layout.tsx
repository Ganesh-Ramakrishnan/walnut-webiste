import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Software Delivery Blog | Insights & Best Practices",
  description:
    "Discover insights, updates, and best practices for modern AI-powered software delivery. Learn about prompt engineering, gap analysis, test automation, and how WalnutAI transforms development workflows from intent to production.",
  openGraph: {
    title: "AI Software Delivery Blog | Insights & Best Practices - WalnutAI",
    description:
      "Discover insights, updates, and best practices for modern AI-powered software delivery. Learn about prompt engineering, gap analysis, test automation, and how WalnutAI transforms development workflows from intent to production.",
    url: "https://www.walnutai.ai/blog",
    type: "website",
    images: [
      {
        url: "/assets/logo/Walnut-White.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Blog - AI Software Delivery Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Software Delivery Blog | Insights & Best Practices - WalnutAI",
    description:
      "Discover insights, updates, and best practices for modern AI-powered software delivery. Learn about prompt engineering, gap analysis, test automation, and how WalnutAI transforms development workflows from intent to production.",
    images: ["/assets/logo/Walnut-White.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
