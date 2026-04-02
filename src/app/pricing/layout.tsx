import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - AI Software Delivery Plans",
  description:
    "Choose the right WalnutAI plan. Explorer from $18/user/mo, Team from $65/user/mo, or custom Enterprise pricing. Start free today.",
  openGraph: {
    title: "Pricing - AI Software Delivery Plans",
    description:
      "Choose the right WalnutAI plan. Explorer from $18/user/mo, Team from $65/user/mo, or custom Enterprise pricing. Start free today.",
    url: "https://www.walnutai.ai/pricing",
    images: [
      {
        url: "/assets/logo/Walnut-White.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - AI Software Delivery Plans",
    description:
      "Choose the right WalnutAI plan. Explorer from $18/user/mo, Team from $65/user/mo, or custom Enterprise pricing. Start free today.",
    images: ["/assets/logo/Walnut-White.png"],
  },
  alternates: {
    canonical: "https://www.walnutai.ai/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
