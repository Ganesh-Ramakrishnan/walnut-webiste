import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WalnutAI",
  description:
    "Read WalnutAI's Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our AI-powered software delivery platform and services.",
  openGraph: {
    title: "Privacy Policy - WalnutAI",
    description:
      "Read WalnutAI's Privacy Policy to understand how we collect, use, store, and protect your personal information when you use our AI-powered software delivery platform and services.",
    url: "https://www.walnutai.ai/privacy-policy",
    type: "website",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
