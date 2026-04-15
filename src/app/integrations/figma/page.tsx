import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Figma Integration - Design to Requirements & Test Cases",
  description:
    "Integrate WalnutAI with Figma to automatically transform design files into structured requirements and test cases. Bridge the gap between design and QA with AI-powered analysis.",
  openGraph: {
    title: "Figma Integration - Design to Requirements & Test Cases",
    description:
      "Transform Figma designs into requirements and test cases automatically with WalnutAI.",
    url: "https://www.walnutai.ai/integrations/figma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Figma Integration - Design to Requirements & Test Cases",
    description:
      "Transform Figma designs into requirements and test cases automatically with WalnutAI.",
  },
  alternates: {
    canonical: "https://www.walnutai.ai/integrations/figma",
  },
};

const setupSteps = [
  {
    number: "01",
    title: "Connect Figma Account",
    description:
      "Authorize WalnutAI to access your Figma workspace via OAuth. Grant read access to files and projects so WalnutAI can analyze your designs without modifying them.",
  },
  {
    number: "02",
    title: "Select Design Files",
    description:
      "Choose which Figma files and pages to import. WalnutAI supports single-page designs, multi-page flows, and component libraries. Select entire projects or specific files.",
  },
  {
    number: "03",
    title: "Configure Extraction Rules",
    description:
      "Define how design elements map to requirements. Specify naming conventions for interactive components, screen transitions, and states that WalnutAI should interpret as testable behaviors.",
  },
  {
    number: "04",
    title: "Generate Requirements & Tests",
    description:
      "WalnutAI analyzes the design structure, components, and user flows to produce structured requirements and corresponding test cases. Review, refine, and approve the generated artifacts.",
  },
];

const capabilities = [
  {
    title: "Design-to-Requirement Extraction",
    description:
      "WalnutAI reads Figma frames, components, and prototyping flows to extract structured requirements. Each screen, interaction, and state transition becomes a documented, traceable requirement.",
  },
  {
    title: "Automatic Test Case Generation",
    description:
      "From the extracted requirements, WalnutAI generates test cases covering navigation flows, form validations, responsive breakpoints, component states, and edge cases identified in the design.",
  },
  {
    title: "Visual Regression Baselines",
    description:
      "Figma designs serve as the source-of-truth for visual regression testing. WalnutAI compares rendered pages against design files to catch unintended visual differences before they reach users.",
  },
  {
    title: "Component Library Analysis",
    description:
      "Analyze your Figma component library to identify reusable patterns. WalnutAI generates shared test utilities for components that appear across multiple screens, reducing test duplication.",
  },
  {
    title: "Design Change Monitoring",
    description:
      "When designers update a Figma file, WalnutAI detects the changes and highlights which requirements and tests are affected. This keeps your test suite aligned with the latest design intent.",
  },
];

export default function FigmaIntegrationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "80px 24px 60px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <span style={{ fontSize: 48, display: "block", marginBottom: 16 }}>
              {"\uD83C\uDFA8"}
            </span>
            <h1
              style={{
                color: "var(--text-primary)",
                fontSize: 44,
                fontWeight: 800,
                marginBottom: 16,
                lineHeight: 1.15,
              }}
            >
              <span style={{ color: "#F17F0D" }}>Figma</span> Integration
            </h1>
            <p
              style={{
                color: "#b0b0b0",
                fontSize: 18,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: "0 auto",
              }}
            >
              Transform design files into structured requirements and test cases.
              WalnutAI bridges the gap between design intent and quality
              assurance by analyzing your Figma files with AI.
            </p>
          </div>
        </section>

        {/* Overview */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 20,
              }}
            >
              Overview
            </h2>
            <div style={{ color: "#b0b0b0", fontSize: 16, lineHeight: 1.8 }}>
              <p>
                Designs contain an enormous amount of implicit requirements
                that rarely make it into formal documentation. Button states,
                navigation flows, responsive layouts, error states, and
                accessibility considerations are all visible in Figma but often
                lost in translation when handed off to development and QA. The
                Figma integration closes this gap by extracting testable
                requirements directly from your design files.
              </p>
              <p style={{ marginTop: 16 }}>
                WalnutAI connects to your Figma workspace and analyzes frame
                hierarchies, component variants, and prototype connections. It
                identifies interactive elements, maps user journeys through
                screen transitions, and documents expected behaviors for each
                state. The output is a structured set of requirements paired
                with ready-to-review test cases that cover the full design
                surface.
              </p>
              <p style={{ marginTop: 16 }}>
                As designers iterate, WalnutAI monitors changes and highlights
                which requirements and tests need updating. This continuous
                synchronization ensures that what is designed, what is built,
                and what is tested stay aligned throughout the project lifecycle.
                Teams using this integration catch design-implementation
                mismatches before they reach code review, saving significant
                rework time.
              </p>
            </div>
          </div>
        </section>

        {/* Setup Steps */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Setup in 4 Steps
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {setupSteps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    display: "flex",
                    gap: 20,
                    background: "var(--bg-surface)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <span
                    style={{
                      color: "#F17F0D",
                      fontSize: 28,
                      fontWeight: 800,
                      lineHeight: 1,
                      minWidth: 40,
                    }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h3
                      style={{
                        color: "var(--text-primary)",
                        fontSize: 18,
                        fontWeight: 700,
                        marginBottom: 8,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        color: "#999",
                        fontSize: 14,
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section style={{ background: "var(--bg-page)", padding: "40px 24px 60px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 32,
              }}
            >
              Key Capabilities
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid #222",
                    borderRadius: 12,
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      color: "#F17F0D",
                      fontSize: 17,
                      fontWeight: 700,
                      marginBottom: 8,
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      color: "#999",
                      fontSize: 14,
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            background: "var(--bg-page)",
            padding: "40px 24px 100px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <h2
              style={{
                color: "var(--text-primary)",
                fontSize: 28,
                fontWeight: 700,
                marginBottom: 16,
              }}
            >
              Ready to integrate Figma?
            </h2>
            <p
              style={{
                color: "#999",
                fontSize: 16,
                marginBottom: 32,
                lineHeight: 1.7,
              }}
            >
              Turn your designs into testable requirements automatically. Our
              team will help you connect Figma and configure extraction rules.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#F17F0D",
                  color: "#fff",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/integrations"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "#F17F0D",
                  padding: "14px 32px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: "none",
                  border: "1px solid #F17F0D",
                }}
              >
                All Integrations
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
