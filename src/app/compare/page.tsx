import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://www.walnutai.ai";

export const metadata: Metadata = {
  title: "Compare WalnutAI - See How We Stack Up",
  description:
    "Compare WalnutAI with GitHub Copilot, Cursor, Tabnine, and Qodo. See why WalnutAI's full SDLC coverage outperforms single-phase AI tools for software delivery.",
  keywords: [
    "WalnutAI comparison",
    "WalnutAI vs GitHub Copilot",
    "WalnutAI vs Cursor",
    "WalnutAI vs Tabnine",
    "WalnutAI vs Qodo",
    "AI SDLC tools comparison",
    "best AI development tool",
    "full SDLC automation",
  ],
  openGraph: {
    title: "Compare WalnutAI - See How We Stack Up",
    description:
      "Compare WalnutAI with GitHub Copilot, Cursor, Tabnine, and Qodo. Full SDLC coverage vs single-phase tools.",
    url: `${siteUrl}/compare`,
    siteName: "WalnutAI",
    type: "website",
    images: [
      {
        url: "https://walnutai.dev/og/compare.png",
        width: 1200,
        height: 630,
        alt: "Compare WalnutAI — See How We Stack Up Against Other AI Development Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare WalnutAI - See How We Stack Up",
    description:
      "Compare WalnutAI with GitHub Copilot, Cursor, Tabnine, and Qodo. Full SDLC coverage vs single-phase tools.",
    site: "@WalnutAI",
    images: ["https://walnutai.dev/og/compare.png"],
  },
  alternates: {
    canonical: `${siteUrl}/compare`,
  },
};

const comparisons = [
  {
    href: "/compare/walnutai-vs-github-copilot",
    competitor: "GitHub Copilot",
    tagline: "Full SDLC vs Code Completion",
    description:
      "GitHub Copilot assists with inline code suggestions. WalnutAI covers requirements, code generation, testing, deployment, and everything in between.",
    strengths: "Code completion, inline suggestions",
  },
  {
    href: "/compare/walnutai-vs-cursor",
    competitor: "Cursor",
    tagline: "Full SDLC vs AI IDE",
    description:
      "Cursor enhances your IDE with AI. WalnutAI goes beyond the editor to automate the entire software delivery lifecycle from intent to production.",
    strengths: "AI-powered IDE, chat-based coding",
  },
  {
    href: "/compare/walnutai-vs-tabnine",
    competitor: "Tabnine",
    tagline: "Full SDLC vs Code Assistant",
    description:
      "Tabnine provides AI code completions. WalnutAI delivers an end-to-end ecosystem covering requirements analysis through deployment automation.",
    strengths: "Code completions, team learning",
  },
  {
    href: "/compare/walnutai-vs-qodo",
    competitor: "Qodo",
    tagline: "Full SDLC vs Code Review",
    description:
      "Qodo focuses on AI code review and quality. WalnutAI encompasses the full lifecycle including requirements, code generation, testing, and deployment.",
    strengths: "Code review, test generation",
  },
];

export default function ComparePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "80px 24px 40px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <p
              style={{
                color: "#F17F0D",
                fontWeight: 600,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 16,
              }}
            >
              Comparisons
            </p>
            <h1
              style={{
                color: "#fff",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              See How <span style={{ color: "#F17F0D" }}>WalnutAI</span> Stacks
              Up
            </h1>
            <p
              style={{
                color: "#9ca3af",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 620,
                margin: "0 auto",
              }}
            >
              Most AI tools help with one phase of development. WalnutAI covers
              the <strong style={{ color: "#d1d5db" }}>entire SDLC</strong> --
              from requirements to production -- with zero blind spots.
            </p>
          </div>
        </section>

        {/* Comparison Cards */}
        <section
          style={{
            background: "#0a0a0a",
            padding: "40px 24px 100px",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 28,
            }}
          >
            {comparisons.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="compare-card-link"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  className="compare-card"
                  style={{
                    background: "#141414",
                    border: "1px solid #262626",
                    borderRadius: 16,
                    padding: "36px 28px",
                    transition: "border-color 0.25s, transform 0.25s",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      color: "#F17F0D",
                      fontSize: 12,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: 1.2,
                      marginBottom: 12,
                    }}
                  >
                    {c.tagline}
                  </p>
                  <h2
                    style={{
                      color: "#fff",
                      fontSize: 22,
                      fontWeight: 700,
                      marginBottom: 12,
                    }}
                  >
                    WalnutAI vs {c.competitor}
                  </h2>
                  <p
                    style={{
                      color: "#9ca3af",
                      fontSize: 15,
                      lineHeight: 1.65,
                      flex: 1,
                      marginBottom: 20,
                    }}
                  >
                    {c.description}
                  </p>
                  <span
                    style={{
                      color: "#F17F0D",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    View Comparison →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
