import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - WalnutAI",
  description:
    "Insights, updates, and best practices for modern software delivery from the WalnutAI team.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
