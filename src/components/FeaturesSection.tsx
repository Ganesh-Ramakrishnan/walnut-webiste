"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const card: React.CSSProperties = {
  background: "linear-gradient(145deg, #141414 0%, #0d0d0d 100%)",
  border: "1px solid #222",
  borderRadius: 20,
  padding: 24,
  display: "flex",
  flexDirection: "column",
};

const imgWrap: React.CSSProperties = {
  width: "100%",
  height: 200,
  marginBottom: 16,
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid #2a2a2a",
  background: "#0a0a0a",
  flexShrink: 0,
};

const imgWrapSm: React.CSSProperties = {
  width: "100%",
  height: 170,
  marginBottom: 16,
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid #2a2a2a",
  background: "#0a0a0a",
  flexShrink: 0,
};

const img: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "contain",
  padding: 8,
};

const title: React.CSSProperties = {
  color: "#fff", fontSize: 17, fontWeight: 700, marginBottom: 6, lineHeight: 1.3,
};

const desc: React.CSSProperties = {
  color: "#9ca3af", fontSize: 12, lineHeight: 1.6, marginBottom: 8,
};

const outcome: React.CSSProperties = {
  background: "rgba(241,127,13,0.06)",
  border: "1px solid rgba(241,127,13,0.2)",
  borderRadius: 10, padding: "10px 14px", marginTop: "auto",
};

const bullet: React.CSSProperties = {
  color: "#9ca3af", fontSize: 11, lineHeight: 1.5, paddingLeft: 14, position: "relative",
};

const dot: React.CSSProperties = {
  position: "absolute", left: 0, color: "#F17F0D", fontWeight: "bold",
};

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "64px 0", overflow: "hidden", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our <span className="text-orange">Features</span>
          </h2>
          <p style={{ color: "#fff", fontSize: 16, fontWeight: 500, marginBottom: 8 }}>
            Build exactly what you intended — from requirements to production.
          </p>
          <p style={{ color: "#9ca3af", fontSize: 14, maxWidth: 600, margin: "0 auto" }}>
            Walnut connects documents, design, code, testing, and AI into a single intelligent system,
            eliminating gaps between intent and implementation.
          </p>
        </AnimateOnScroll>

        {/* Row 1 — 2 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrap}>
                <img src="/assets/features/documentation-structure.svg" alt="Documentation structure" style={img} />
              </div>
              <h3 style={title}>From Documents to Structured Requirements</h3>
              <p style={desc}>Centralize, extract, and organize requirements automatically.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 10px", display: "flex", flexDirection: "column", gap: 4 }}>
                {["Upload PDFs, DOCX, XLSX, CSV, and audio/video files",
                  "Figma design integration for automated story extraction",
                  "AI-powered hierarchical extraction (Modules → Features → User Stories)",
                  "Native integrations with Jira, Azure DevOps, GitHub, GitLab, Bitbucket",
                ].map((t) => (
                  <li key={t} style={bullet}><span style={dot}>•</span>{t}</li>
                ))}
              </ul>
              <div style={outcome}>
                <span style={{ color: "#F17F0D", fontSize: 12, fontWeight: 700 }}>Outcome : </span>
                <span style={{ color: "#d1d5db", fontSize: 11 }}>Requirements become structured, traceable, and implementation-ready</span>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrap}>
                <img src="/assets/features/ide.svg" alt="AI-Powered IDE" style={img} />
              </div>
              <h3 style={title}>AI-Powered IDE Development</h3>
              <p style={desc}>Walnut extends into VS Code, enabling developers to prompt, plan and implement without context switching.</p>
              <div style={{ marginTop: "auto" }}>
                <div style={outcome}>
                  <span style={{ color: "#F17F0D", fontSize: 12, fontWeight: 700 }}>Outcome : </span>
                  <span style={{ color: "#d1d5db", fontSize: 11 }}>Faster development with AI assistance directly in your workflow.</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Row 2 — 2 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}>
          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrap}>
                <img src="/assets/features/ai-modes.svg" alt="AI Interaction Modes" style={img} />
              </div>
              <h3 style={title}>Three AI Interaction Modes</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {[
                  { label: "Ask", color: "#22c55e", d: "Read-only assistance" },
                  { label: "Plan", color: "#F17F0D", d: "Plan → Review → Approve" },
                  { label: "Agent", color: "#a855f7", d: "Autonomous execution" },
                ].map((m) => (
                  <div key={m.label} style={{ background: "#1a1a2a", borderRadius: 8, padding: "6px 12px", display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ color: m.color, fontWeight: 700, fontSize: 12, minWidth: 42 }}>{m.label}</span>
                    <span style={{ color: "#555", fontSize: 10 }}>:</span>
                    <span style={{ color: "#bbb", fontSize: 11 }}>{m.d}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrap}>
                <img src="/assets/features/ai-testcase.svg" alt="AI-Generated Test Cases" style={img} />
              </div>
              <h3 style={title}>AI-Generated Test Cases at Scale</h3>
              <p style={desc}>Create comprehensive tests directly from user stories in under 30 seconds.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                {["Functional, UI, API, Integration, and Regression testing",
                  "Human-in-the-loop review and approval workflow",
                  "AI continuously learns from tester feedback",
                ].map((t) => (
                  <li key={t} style={bullet}><span style={dot}>•</span>{t}</li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Row 3 — 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrapSm}>
                <img src="/assets/features/test-execution.svg" alt="Test Execution" style={img} />
              </div>
              <h3 style={title}>Test Execution & Management</h3>
              <p style={desc}>Step-by-step execution, screenshot capture, data-driven testing with detailed reports.</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrapSm}>
                <img src="/assets/features/gap-analysis.svg" alt="Gap Analysis" style={img} />
              </div>
              <h3 style={title}>Continuous Gap Analysis</h3>
              <p style={desc}>Detect misalignment between intent and code before it becomes technical debt.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {[
                  { label: "Implementation Coverage", d: "Missing, incomplete, or outdated implementations" },
                  { label: "Requirement Quality", d: "Duplicate detection & AI-powered enhancements" },
                  { label: "Engineering Quality", d: "7-dimensional scoring: Architecture, Security, Testing, Documentation, Complexity, Best Practices, Anti-patterns" },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F17F0D", flexShrink: 0 }} />
                      <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>{item.label}</span>
                    </div>
                    <p style={{ color: "#9ca3af", fontSize: 10, lineHeight: 1.4, paddingLeft: 14, margin: 0 }}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeUp">
            <div style={card}>
              <div style={imgWrapSm}>
                <img src="/assets/features/unified-analytics.svg" alt="Unified Analytics" style={img} />
              </div>
              <h3 style={title}>Unified Analytics & Insights</h3>
              <p style={desc}>Make quality, velocity, and AI usage measurable.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
                {["Test execution trends", "LLM usage tracking", "Quality scores", "Team productivity"].map((tag) => (
                  <span key={tag} style={{ background: "#1e1e2e", color: "#bbb", fontSize: 10, padding: "4px 12px", borderRadius: 20, border: "1px solid #333" }}>{tag}</span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
