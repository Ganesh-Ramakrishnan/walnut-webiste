"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const features = [
  {
    title: "Idea to Production",
    subtitle: "AI-Orchestrated SDLC",
    desc: "From a single prompt to a fully built, tested application. AI agents handle requirements, code, and testing — autonomously.",
    href: "/features/ai-sdlc-automation",
    gif: "/assets/gif/Idea_to_Production.gif",
  },
  {
    title: "Every Requirement Connected",
    subtitle: "Continuous Gap Analysis",
    desc: "Scans requirements, code, and tests on every commit. Catches missing coverage before it reaches production.",
    href: "/features/requirements-gap-analysis",
    gif: "/assets/gif/Every_Requirement_Every_Code_Every_Test_Connected.gif",
  },
  {
    title: "Stop Writing Tests Manually",
    subtitle: "AI Test Case Generation",
    desc: "Generates functional, edge case, regression, and security tests from your Jira stories — saving 15+ hours per sprint.",
    href: "/features/ai-test-case-generation",
    gif: "/assets/gif/Stop_Writing_Test_Cases_Manually.gif",
  },
  {
    title: "Continuous Quality Monitoring",
    subtitle: "Test Execution & QA",
    desc: "Unified test runs, defect tracking, and real-time release readiness scoring — connected to requirements.",
    href: "/features/test-execution-management",
    gif: "/assets/gif/Continuous_Quality_Monitoring.gif",
  },
  {
    title: "Technical Debt Visibility",
    subtitle: "Delivery Analytics",
    desc: "Real-time dashboard for requirement coverage, test health, gap trends, and release risk across all projects.",
    href: "/features/analytics-dashboard",
    gif: "/assets/gif/Technical_Debt_Visibility_You_Cant_Ignore.gif",
  },
  {
    title: "New Members Productive in Days",
    subtitle: "Requirements Engineering",
    desc: "Convert PRDs, PDFs, and Figma designs into structured, testable user stories — so new team members ramp up fast.",
    href: "/features/requirements-engineering",
    gif: "/assets/gif/New_Team_Members_Productive_in_Days.gif",
  },
];

export default function FeaturesHighlight() {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <section id="features" style={{ padding: "80px 0 60px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll animation="fadeUp" className="text-center" style={{ marginBottom: 48 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ marginBottom: 16 }}>
            Our{" "}<span className="text-orange">Features</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            AI-powered automation across every stage of your software delivery lifecycle.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp">
          <div style={{ border: "1px solid #1a1a1a", borderRadius: 20, overflow: "hidden", background: "#0a0a0a" }}>
            {/* Top: GIF display */}
            <div style={{ position: "relative", background: "#0d0d0d", padding: "32px 40px", minHeight: 380, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Subtle orange glow behind gif */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 300, height: 300, background: "radial-gradient(circle, rgba(241,127,13,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
              <img
                key={f.gif}
                src={f.gif}
                alt={f.title}
                style={{ maxWidth: "100%", maxHeight: 320, borderRadius: 12, position: "relative", zIndex: 1 }}
              />
            </div>

            {/* Bottom: Feature selector tabs */}
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${features.length}, 1fr)` }}>
              {features.map((item, i) => (
                <button
                  key={item.href}
                  onClick={() => setActive(i)}
                  style={{
                    padding: "20px 12px",
                    background: active === i ? "#111" : "transparent",
                    border: "none",
                    borderTop: active === i ? "2px solid #F17F0D" : "2px solid transparent",
                    cursor: "pointer",
                    textAlign: "center",
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: active === i ? "#F17F0D" : "#444", marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5 }}>
                    {item.subtitle}
                  </span>
                  <span style={{ display: "block", fontSize: 13, fontWeight: active === i ? 700 : 500, color: active === i ? "#fff" : "#666", transition: "color 0.2s", lineHeight: 1.3 }}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Description bar */}
            <div style={{ padding: "24px 32px", borderTop: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <p style={{ color: "#888", fontSize: 14, lineHeight: 1.7, margin: 0, flex: 1 }}>{f.desc}</p>
              <Link href={f.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#F17F0D", fontSize: 14, fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
                Explore
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
        @media (max-width: 900px) {
          #features [style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #features [style*="grid-template-columns: repeat(6"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
