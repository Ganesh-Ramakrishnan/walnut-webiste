import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions - WalnutAI",
  description:
    "Review WalnutAI's Terms and Conditions that govern your use of our AI-powered software delivery platform, services, and website. Understand your rights and responsibilities as a user.",
  openGraph: {
    title: "Terms & Conditions - WalnutAI",
    description:
      "Review WalnutAI's Terms and Conditions that govern your use of our AI-powered software delivery platform, services, and website. Understand your rights and responsibilities as a user.",
    url: "https://www.walnutai.ai/terms-and-conditions",
    type: "website",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/terms-and-conditions",
  },
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
