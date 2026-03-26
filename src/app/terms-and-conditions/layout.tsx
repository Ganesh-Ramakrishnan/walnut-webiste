import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "WalnutAI Terms and Conditions — the terms governing your use of the WalnutAI platform and services.",
  alternates: {
    canonical: "https://www.walnutai.ai/terms-and-conditions",
  },
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
