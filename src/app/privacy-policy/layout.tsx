import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "WalnutAI Privacy Policy — how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://www.walnutai.ai/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
