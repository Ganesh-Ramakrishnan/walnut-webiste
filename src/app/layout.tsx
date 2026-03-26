import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "WalnutAI - AI Ecosystem for Software Delivery",
    template: "%s | WalnutAI",
  },
  description:
    "From intent to release. An AI ecosystem for software delivery — build fast with zero blind spots and no human-in-the-loop.",
  keywords: [
    "AI software delivery",
    "AI testing",
    "test automation",
    "software quality",
    "AI code generation",
    "WalnutAI",
    "SDLC automation",
    "gap analysis",
    "AI ecosystem",
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
      "From intent to release. An AI ecosystem for software delivery — build fast with zero blind spots and no human-in-the-loop.",
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
      "From intent to release. An AI ecosystem for software delivery — build fast with zero blind spots and no human-in-the-loop.",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WalnutAI",
              url: siteUrl,
              logo: `${siteUrl}/assets/logo/Walnut-White.png`,
              description:
                "From intent to release. An AI ecosystem for software delivery — build fast with zero blind spots and no human-in-the-loop.",
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
            }),
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
