"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const card: React.CSSProperties = {};

const imgWrap: React.CSSProperties = {
  width: "80%",
  margin: "0 auto",
  borderRadius: 14,
  overflow: "hidden",
};

const img: React.CSSProperties = {
  width: "100%",
  display: "block",
  objectFit: "contain",
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
            WalnutAI connects documents, design, code, testing, and AI into a single intelligent system,
            eliminating gaps between intent and implementation.
          </p>
        </AnimateOnScroll>

        {/* All rows wrapper */}
        <div style={{ width: "80%", margin: "0 auto" }}>
          {/* Row 1 — 2 cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20, alignItems: "center" }}>
            <AnimateOnScroll animation="fadeUp">
              <div style={card}>
                <div style={imgWrap}>
                  <img src="/assets/features/documentation-structure.svg" alt="From Documents to Structured Requirements" style={img} />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp">
              <div style={card}>
                <div style={imgWrap}>
                  <img src="/assets/features/ide.svg" alt="AI-Powered IDE Development" style={img} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Row 2 — 2 cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20, alignItems: "center" }}>
            <AnimateOnScroll animation="fadeUp">
              <div style={card}>
                <div style={imgWrap}>
                  <img src="/assets/features/ai-modes.svg" alt="Three AI Interaction Modes" style={img} />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp">
              <div style={card}>
                <div style={imgWrap}>
                  <img src="/assets/features/ai-testcase.svg" alt="AI-Generated Test Cases at Scale" style={img} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Row 3 — 2 small stacked left + 1 big right */}
          <div style={{ display: "grid", gridTemplateColumns: "45% 55%", gap: 20 }}>
            {/* Left — two small cards stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <AnimateOnScroll animation="fadeUp">
                <div style={card}>
                  <div style={imgWrap}>
                    <img src="/assets/features/test-execution.svg" alt="Test Execution & Management" style={img} />
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeUp">
                <div style={card}>
                  <div style={imgWrap}>
                    <img src="/assets/features/unified-analytics.svg" alt="Unified Analytics & Insights" style={img} />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Right — one big card */}
            <AnimateOnScroll animation="fadeUp" style={{ height: "100%" }}>
              <div style={{ ...card, height: "100%" }}>
                <div style={{ ...imgWrap }}>
                  <img src="/assets/features/gap-analysis.svg" alt="Continuous Gap Analysis" style={img} />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
