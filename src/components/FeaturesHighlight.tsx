"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

const features = [
  {
    title: "AI-Orchestrated SDLC",
    desc: "From a single prompt to a fully built, tested application. AI agents handle requirements, code, and testing — autonomously.",
    href: "/features/ai-sdlc-automation",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Continuous Gap Analysis",
    desc: "Scans requirements, code, and tests on every commit. Catches missing coverage before it reaches production.",
    href: "/features/requirements-gap-analysis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M8 11h6" /><path d="M11 8v6" />
      </svg>
    ),
  },
  {
    title: "AI Test Case Generation",
    desc: "Generates functional, edge case, regression, and security tests from your Jira stories — saving 15+ hours per sprint.",
    href: "/features/ai-test-case-generation",
    badge: "Most Popular",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F17F0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 2h6l3 7H6L9 2z" /><path d="M12 9v13" /><path d="M8 22h8" /><path d="M6 13h12" />
      </svg>
    ),
  },
];

export default function FeaturesHighlight() {
  return (
    <section id="features" className="relative py-16 sm:py-24 overflow-hidden">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll animation="fadeUp" className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our{" "}<span className="text-orange">Features</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 15, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            AI-powered automation across every stage of your software delivery lifecycle.
          </p>
        </AnimateOnScroll>

        {/* 3 Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="feat-home-grid">
          {features.map((f) => (
            <AnimateOnScroll key={f.href} animation="fadeUp">
              <Link href={f.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div className="feat-home-card-v2">
                  {f.badge && <span className="feat-home-badge">{f.badge}</span>}
                  <div className="feat-home-icon">{f.icon}</div>
                  <h3 className="feat-home-title">{f.title}</h3>
                  <p className="feat-home-desc">{f.desc}</p>
                  <span className="feat-home-link">Learn more &rarr;</span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fadeUp">
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link
              href="/features"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "rgba(241, 127, 13, 0.1)",
                border: "1px solid rgba(241, 127, 13, 0.3)",
                borderRadius: 50,
                color: "#F17F0D",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Explore all 8 features &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
