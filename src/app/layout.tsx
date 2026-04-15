import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WalnutAI - AI Software Development Platform | Requirements, Code Generation & Testing",
    template: "%s | WalnutAI",
  },
  description:
    "WalnutAI is an AI software development platform that automates requirements engineering, AI code generation, automated test case generation, and AI SDLC automation — from intent to production with zero blind spots. Start free today.",
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
    title: "WalnutAI - AI Software Development Platform | Requirements, Code Generation & Testing",
    description:
      "WalnutAI is an AI software development platform that automates requirements engineering, AI code generation, automated test case generation, and AI SDLC automation \u2014 from intent to production with zero blind spots. Start free today.",
    images: [
      {
        url: "https://walnutai.dev/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "WalnutAI \u2014 AI Software Development Platform for Requirements, Code Generation & Testing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@WalnutAI",
    title: "WalnutAI - AI Software Development Platform | Requirements, Code Generation & Testing",
    description:
      "WalnutAI is an AI software development platform that automates requirements engineering, AI code generation, automated test case generation, and AI SDLC automation \u2014 from intent to production with zero blind spots. Start free today.",
    images: ["https://walnutai.dev/og/homepage.png"],
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
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('walnut-theme')||'dark';document.documentElement.setAttribute('data-theme',t)})()` }} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-M3E3R8NDZK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M3E3R8NDZK');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "WalnutAI",
                  url: siteUrl,
                  logo: `${siteUrl}/logo.png`,
                  sameAs: [
                    "https://twitter.com/WalnutAI",
                    "https://www.linkedin.com/company/wal-nut/",
                    "https://github.com/walnutai",
                  ],
                  description:
                    "WalnutAI is an AI platform that unifies requirements generation, autonomous code generation, and test intelligence in one continuous software delivery workflow.",
                },
                {
                  "@type": "WebSite",
                  url: siteUrl,
                  name: "WalnutAI",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/search?q={search_term_string}`,
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "SoftwareApplication",
                  name: "WalnutAI",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Web, VS Code Extension",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                    description: "Free starter plan available",
                  },
                  description:
                    "AI platform for requirements generation, autonomous code generation, and test intelligence.",
                  featureList: [
                    "AI Requirements Extraction",
                    "Cloud Agent (Autonomous Code Generation)",
                    "Auto-Fix PR from Review Comments",
                    "VS Code AI Extension",
                    "MCP Server Integration",
                    "AI Gap Analysis",
                    "AI Test Case Generation",
                    "Requirement Traceability Matrix",
                    "Test Execution and Reporting",
                    "Code-to-Story (Reverse Requirements)",
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} antialiased`}>
        <ThemeProvider>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
