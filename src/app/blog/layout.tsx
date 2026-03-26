import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, updates, and best practices for modern software delivery from the WalnutAI team.",
  openGraph: {
    title: "Blog - WalnutAI",
    description:
      "Insights, updates, and best practices for modern software delivery from the WalnutAI team.",
    url: "https://www.walnutai.ai/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - WalnutAI",
    description:
      "Insights, updates, and best practices for modern software delivery from the WalnutAI team.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
