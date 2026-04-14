"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const features = [
  {
    title: "AI-Orchestrated SDLC",
    headline: "AI-Orchestrated SDLC",
    desc: "From a single prompt to a fully built, tested application. AI agents handle requirements, code, and testing \u2014 autonomously.",
    href: "/features/ai-sdlc-automation",
    stat: "80%",
    statLabel: "faster delivery",
    num: "01",
  },
  {
    title: "Autonomous Code Generation",
    headline: "Assign a Story. Get a Pull Request.",
    desc: "The Cloud Agent reads your codebase, understands the requirement, implements the feature across the right files, commits to a branch, and opens a draft PR \u2014 without a developer writing a single line of boilerplate.",
    href: "/features/cloud-agent",
    stat: "10X",
    statLabel: "faster story to PR",
    num: "02",
  },
  {
    title: "Continuous Gap Analysis",
    headline: "Know Exactly What\u2019s Built and What Isn\u2019t",
    desc: "WalnutAI semantically compares every requirement against your actual code \u2014 telling you which features are missing, which are partially implemented, and which no longer match what was specified.",
    href: "/features/ai-gap-analysis",
    stat: "3 phases",
    statLabel: "in a single automated run",
    num: "03",
  },
  {
    title: "Requirements Engineering",
    headline: "Any Document In. Dev-Ready Stories Out.",
    desc: "Upload a BRD, Figma design, Jira export, or meeting transcript and WalnutAI extracts structured Epics, Features, and User Stories \u2014 with acceptance criteria, ready for development and testing immediately.",
    href: "/features/intelligence-hub",
    stat: "40X",
    statLabel: "faster extraction",
    num: "04",
  },
  {
    title: "AI Test Case Generation",
    headline: "Every Story Gets a Complete Test Suite",
    desc: "Select any user story and WalnutAI generates step-by-step test cases \u2014 positive scenarios, negative edge cases, and test data suggestions \u2014 structured, reviewed, and linked back to the requirement automatically.",
    href: "/features/ai-test-case-generation",
    stat: "40%",
    statLabel: "less test creation time",
    num: "05",
  },
  {
    title: "Full Requirements Traceability",
    headline: "Every Requirement. Every Test. Always Connected.",
    desc: "A live traceability chain from source document to user story to test case to defect \u2014 automatically maintained as your project evolves, and exportable for compliance audits in one click.",
    href: "/features/requirement-traceability-matrix",
    stat: "100%",
    statLabel: "auto-maintained links",
    num: "06",
  },
  {
    title: "Auto-Fix Defects",
    headline: "Log the Defect. The AI Fixes the Code.",
    desc: "WalnutAI reads the full failure context directly from the workboard \u2014 failing test case, reproduction steps, screenshots, expected vs actual \u2014 and raises a fix PR without the developer needing to re-explain anything.",
    href: "/features/auto-fix-defects",
    stat: "1 click",
    statLabel: "defect to fix PR",
    num: "07",
  },
];

export default function FeaturesHighlight() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <section id="features" style={{ padding: "80px 0 60px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }} className="lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center" style={{ marginBottom: 48 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ marginBottom: 16 }}>
            WalnutAI{" "}<span className="text-orange">Features</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, maxWidth: 580, margin: "0 auto", lineHeight: 1.7 }}>
            AI-powered requirements, code generation, and automated test case generation across your software delivery lifecycle.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden", minHeight: 420 }} className="features-highlight-grid">
            {/* Left nav */}
            <div style={{ background: "rgba(10,22,40,0.6)", borderRight: "1px solid rgba(255,255,255,0.07)", overflowY: "auto" }}>
              {features.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => setActive(i)}
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    background: active === i ? "rgba(10,22,40,0.9)" : "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    borderLeft: active === i ? "3px solid #F17F0D" : "3px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: active === i ? "#F17F0D" : "#6b7280", fontFamily: "monospace" }}>{item.num}</span>
                    <span style={{ fontSize: 13, fontWeight: active === i ? 700 : 500, color: active === i ? "#fff" : "#9ca3af", transition: "color 0.2s" }}>{item.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right content */}
            <div style={{ padding: "44px 40px", background: "rgba(6,11,24,0.8)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 48, fontWeight: 900, color: "#F17F0D", lineHeight: 1 }}>{f.stat}</span>
                <span style={{ fontSize: 13, color: "#9ca3af" }}>{f.statLabel}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, marginBottom: 14 }}>{f.headline}</h3>
              <p style={{ color: "#c2c8d1", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{f.desc}</p>
              <Link href={f.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#F17F0D", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                Explore feature
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/features" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", border: "1px solid rgba(241,127,13,0.25)", borderRadius: 50, color: "#F17F0D", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
              Explore all features &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-highlight-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
