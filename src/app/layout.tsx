import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WalnutAI - AI Ecosystem for Software Delivery",
    template: "%s | WalnutAI",
  },
  description:
    "AI ecosystem for software delivery — from intent to production with zero blind spots. Automate requirements, code generation, and testing. Start free today.",
  keywords: [
    // Core product
    "WalnutAI",
    "AI software delivery",
    "AI ecosystem",
    "AI orchestration",
    "SDLC automation",
    "software development lifecycle",
    "AI-powered development",
    "end-to-end software delivery",
    "intent to production",
    // Testing & QA
    "AI testing",
    "test automation",
    "automated testing",
    "AI test case generation",
    "continuous testing",
    "software quality assurance",
    "shift-left testing",
    "regression testing",
    "end-to-end testing",
    // Code & Requirements
    "AI code generation",
    "requirements engineering",
    "gap analysis",
    "requirement traceability",
    "automated code generation",
    "code review automation",
    // DevOps & CI/CD
    "CI/CD automation",
    "DevOps automation",
    "continuous integration",
    "continuous deployment",
    "deployment pipeline",
    // Integrations
    "Jira integration",
    "GitHub integration",
    "Docker",
    "Kubernetes",
    "AWS integration",
    // Problem/solution
    "reduce production bugs",
    "test coverage gaps",
    "release risk reduction",
    "technical debt",
    "automated compliance",
    "software quality",
  ],
  authors: [{ name: "WalnutAI", url: siteUrl }],
  creator: "WalnutAI",
  publisher: "WalnutAI",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "WalnutAI",
    title: "WalnutAI - AI Ecosystem for Software Delivery",
    description:
      "AI ecosystem for software delivery — from intent to production with zero blind spots. Automate requirements, code generation, and testing. Start free today.",
    images: [
      {
        url: "/assets/logo/Walnut-White.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WalnutAI - AI Ecosystem for Software Delivery",
    description:
      "AI ecosystem for software delivery — from intent to production with zero blind spots. Automate requirements, code generation, and testing. Start free today.",
    images: ["/assets/logo/Walnut-White.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "WalnutAI",
                url: siteUrl,
                logo: `${siteUrl}/assets/logo/Walnut-White.png`,
                description:
                  "AI ecosystem for software delivery — from intent to production with zero blind spots. Automate requirements, code generation, and testing. Start free today.",
                sameAs: [
                  "https://www.linkedin.com/company/wal-nut/",
                  "https://www.instagram.com/meet_walnutai/",
                  "https://discord.gg/Tcw88yu6q",
                ],
                contactPoint: {
                  "@type": "ContactPoint",
                  email: "contact@walnutai.ai",
                  contactType: "customer support",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "WalnutAI",
                url: siteUrl,
                publisher: {
                  "@type": "Organization",
                  name: "WalnutAI",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "WalnutAI",
                applicationCategory: "DeveloperApplication",
                operatingSystem: "Web",
                url: siteUrl,
                description:
                  "AI ecosystem for software delivery from intent to production. Automate requirements, code generation, testing, and gap analysis.",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free tier available",
                },
              },
            ]),
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} antialiased`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
