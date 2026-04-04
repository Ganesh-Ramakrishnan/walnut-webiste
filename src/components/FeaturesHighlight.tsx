"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const features = [
  {
    title: "AI-Orchestrated SDLC",
    desc: "From a single prompt to a fully built, tested application. AI agents handle requirements, code, and testing — autonomously.",
    href: "/features/ai-sdlc-automation",
    stat: "80%",
    statLabel: "faster delivery",
    num: "01",
  },
  {
    title: "Continuous Gap Analysis",
    desc: "Scans requirements, code, and tests on every commit. Catches missing coverage before it reaches production.",
    href: "/features/requirements-gap-analysis",
    stat: "40+",
    statLabel: "gaps found per project",
    num: "02",
  },
  {
    title: "Requirements Engineering",
    desc: "Convert PRDs, PDFs, and Figma designs into structured, testable user stories with acceptance criteria — in minutes.",
    href: "/features/requirements-engineering",
    stat: "30m",
    statLabel: "instead of 2-3 days",
    num: "03",
  },
  {
    title: "AI Code Generation",
    desc: "Generate production-ready code grounded in your actual requirements — every suggestion traceable to the user story it implements.",
    href: "/features/ai-code-generation",
    stat: "100%",
    statLabel: "requirement-linked code",
    num: "04",
  },
  {
    title: "AI Test Case Generation",
    desc: "Generates functional, edge case, regression, and security tests from your Jira stories — saving 15+ hours per sprint.",
    href: "/features/ai-test-case-generation",
    stat: "15h+",
    statLabel: "saved per sprint",
    num: "05",
  },
  {
    title: "Test Execution & QA",
    desc: "Unified test runs, defect tracking, and real-time release readiness scoring — connected to requirements.",
    href: "/features/test-execution-management",
    stat: "96%",
    statLabel: "requirement coverage",
    num: "06",
  },
  {
    title: "Delivery Analytics",
    desc: "Real-time dashboard for requirement coverage, test health, gap trends, and release risk across all projects.",
    href: "/features/analytics-dashboard",
    stat: "0-100",
    statLabel: "release readiness score",
    num: "07",
  },
];

export default function FeaturesHighlight() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <section id="features" style={{ padding: "80px 0 60px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll animation="fadeUp" className="text-center" style={{ marginBottom: 48 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ marginBottom: 16 }}>
            Our{" "}<span className="text-orange">Features</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            AI-powered automation across every stage of your software delivery lifecycle.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", border: "1px solid #1a1a1a", borderRadius: 20, overflow: "hidden", minHeight: 420 }}>
            {/* Left nav */}
            <div style={{ background: "#0d0d0d", borderRight: "1px solid #1a1a1a", overflowY: "auto" }}>
              {features.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => setActive(i)}
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    background: active === i ? "#111" : "transparent",
                    border: "none",
                    borderBottom: "1px solid #141414",
                    borderLeft: active === i ? "3px solid #F17F0D" : "3px solid transparent",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 10, fontWeight: 800, color: active === i ? "#F17F0D" : "#333", fontFamily: "monospace" }}>{item.num}</span>
                    <span style={{ fontSize: 13, fontWeight: active === i ? 700 : 500, color: active === i ? "#fff" : "#555", transition: "color 0.2s" }}>{item.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right content */}
            <div style={{ padding: "44px 40px", background: "#0a0a0a", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 20 }}>
                <span style={{ fontSize: 52, fontWeight: 900, color: "#F17F0D", lineHeight: 1 }}>{f.stat}</span>
                <span style={{ fontSize: 13, color: "#555" }}>{f.statLabel}</span>
              </div>
              <h3 style={{ color: "#fff", fontSize: 26, fontWeight: 800, marginBottom: 14 }}>{f.title}</h3>
              <p style={{ color: "#888", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>{f.desc}</p>
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
          #features [style*="grid-template-columns: 260px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
