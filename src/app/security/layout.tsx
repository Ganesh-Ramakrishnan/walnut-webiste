import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy",
  description:
    "WalnutAI Security Policy — how we protect your data with enterprise-grade encryption, access controls, and compliance standards.",
  alternates: {
    canonical: "https://www.walnutai.ai/security",
  },
};

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
