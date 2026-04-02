"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";

const imgWrap: React.CSSProperties = {
  width: "100%",
  borderRadius: 14,
  overflow: "hidden",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  display: "block",
  objectFit: "contain",
};

export default function FeaturesHighlight() {
  return (
    <section id="features" className="relative py-16 sm:py-24 overflow-hidden">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Our{" "}<span className="text-orange">Features</span>
          </h2>
          <p style={{ color: "#fff", fontSize: 16, fontWeight: 500, marginBottom: 8 }}>
            Build exactly what you intended — from requirements to production.
          </p>
          <p style={{ color: "#9ca3af", fontSize: 14, maxWidth: 600, margin: "0 auto" }}>
            WalnutAI connects documents, design, code, testing, and AI into a single intelligent system,
            eliminating gaps between intent and implementation.
          </p>
        </AnimateOnScroll>

        <div className="features-wrapper">
          {/* Row 1 — SDLC card + Gap Analysis */}
          <div className="features-grid-2">
            <AnimateOnScroll animation="fadeUp">
              <div className="feature-card-full">
                <div className="feature-card-img">
                  <Image src="/assets/features/agent.webp" alt="AI-Orchestrated SDLC — automate software delivery from intent to production" loading="lazy" width={530} height={300} placeholder="blur" blurDataURL="data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoKAAcAAUAmJZQCsAEP1aFDOAAA/th/+iFi+kodtvsqrnR8YNrIU00ezJAC47dkJUp2rSqehMIAAA==" style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="feature-card-body">
                  <h3 className="feature-card-title">AI-Orchestrated SDLC</h3>
                  <p className="feature-card-desc">
                    Automate software delivery from intent to built application with no human-intervention.
                  </p>
                  <ul className="feature-card-list">
                    <li>Prompt WalnutAI or upload requirement files and assign tasks to specialized AI bots</li>
                    <li>AI bots exchange context and coordinate dependencies in real time to keep end-to-end execution aligned</li>
                    <li>AI bots generate requirements, code, and testing end to end</li>
                  </ul>
                  <div className="feature-card-outcome">
                    <span className="feature-card-outcome-label">Outcome :</span> Wake up to a completely built app with No human-in-loop
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp">
              <div style={imgWrap}>
                <img src="/assets/features/gap-analysis.svg" alt="Continuous Gap Analysis" style={imgStyle} loading="lazy" width={530} height={400} />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Row 2 — Documents + IDE */}
          <div className="features-grid-2">
            <AnimateOnScroll animation="fadeUp">
              <div style={imgWrap}>
                <img src="/assets/features/documentation-structure.svg" alt="From Documents to Structured Requirements" style={imgStyle} loading="lazy" width={530} height={400} />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp">
              <div style={imgWrap}>
                <img src="/assets/features/ide.svg" alt="AI-Powered IDE Development" style={imgStyle} loading="lazy" width={530} height={400} />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Row 3 — AI Testcase + Test Execution */}
          <div className="features-grid-2">
            <AnimateOnScroll animation="fadeUp">
              <div style={imgWrap}>
                <img src="/assets/features/ai-testcase.svg" alt="AI-Generated Test Cases at Scale" style={imgStyle} loading="lazy" width={530} height={400} />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp">
              <div style={imgWrap}>
                <img src="/assets/features/test-execution.svg" alt="Test Execution & Management" style={imgStyle} loading="lazy" width={530} height={400} />
              </div>
            </AnimateOnScroll>
          </div>
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
              Explore all features &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
