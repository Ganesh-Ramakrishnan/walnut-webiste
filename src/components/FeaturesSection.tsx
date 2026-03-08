"use client";

import AnimateOnScroll from "./AnimateOnScroll";

/* ---- Mockup 1: Documents → Brain → Structured ---- */
function DocsMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, height: "100%" }}>
        {/* Left: file icons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
          {[
            { icon: "📄", label: "Documents", color: "#3b82f6" },
            { icon: "🎵", label: "Audio Files", color: "#a855f7" },
            { icon: "🎬", label: "Video Files", color: "#ef4444" },
          ].map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "#1e1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>{f.icon}</div>
              <span style={{ color: "#9ca3af", fontSize: 9 }}>{f.label}</span>
            </div>
          ))}
        </div>
        {/* Arrows left */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {[0,1,2].map((i) => (
            <div key={i} style={{ width: 40, height: 1, borderTop: "1px dashed #F17F0D" }} />
          ))}
        </div>
        {/* Brain center */}
        <div style={{ width: 64, height: 64 }}>
          <img src="/assets/walnut-logo.svg" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        {/* Arrows right */}
        <div style={{ width: 40, height: 1, borderTop: "1px dashed #F17F0D" }} />
        {/* Right: structured output */}
        <div style={{ background: "#1e1e2e", borderRadius: 10, padding: 10, display: "flex", flexDirection: "column", gap: 6, minWidth: 120 }}>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ height: 8, flex: 1, background: "#333", borderRadius: 3 }} />
            <div style={{ height: 8, flex: 1, background: "#333", borderRadius: 3 }} />
          </div>
          <div style={{ height: 6, background: "#2a2a3a", borderRadius: 3, width: "80%" }} />
          <div style={{ height: 6, background: "#2a2a3a", borderRadius: 3, width: "60%" }} />
          <div style={{ height: 6, background: "#2a2a3a", borderRadius: 3, width: "90%" }} />
          <div style={{ height: 6, background: "#2a2a3a", borderRadius: 3, width: "70%" }} />
        </div>
      </div>
    </div>
  );
}

/* ---- Mockup 2: IDE with brain + tech icons ---- */
function IDEMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", position: "relative" }}>
        {/* Brain center */}
        <div style={{ width: 56, height: 56, marginBottom: 8 }}>
          <img src="/assets/walnut-logo.svg" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        {/* Connected tech icons around */}
        <div style={{ position: "absolute", top: 12, left: 20 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#fff", fontWeight: 700 }}>A</div>
        </div>
        <div style={{ position: "absolute", top: 12, right: 20 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1e1e2e", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>⚡</div>
        </div>
        <div style={{ position: "absolute", bottom: 20, left: 30 }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: "#F7DF1E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#000", fontWeight: 700 }}>JS</div>
        </div>
        <div style={{ position: "absolute", bottom: 20, right: 30 }}>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#1e1e2e", border: "1px solid #333", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>🔧</div>
        </div>
        {/* Connecting lines */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <line x1="30%" y1="25%" x2="45%" y2="42%" stroke="#333" strokeWidth="1" />
          <line x1="70%" y1="25%" x2="55%" y2="42%" stroke="#333" strokeWidth="1" />
          <line x1="35%" y1="78%" x2="45%" y2="60%" stroke="#333" strokeWidth="1" />
          <line x1="65%" y1="78%" x2="55%" y2="60%" stroke="#333" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

/* ---- Mockup 3: AI Chat interface ---- */
function AIModesMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ background: "#1a1a2e", borderRadius: 10, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Chat input */}
        <div style={{ padding: "10px 12px", borderBottom: "1px solid #222" }}>
          <div style={{ background: "#111", borderRadius: 8, padding: "8px 12px", display: "flex", alignItems: "center" }}>
            <span style={{ color: "#555", fontSize: 11 }}>Ask Walnut anything... (type @ to add files)</span>
          </div>
        </div>
        {/* Empty space */}
        <div style={{ flex: 1 }} />
        {/* Bottom badges */}
        <div style={{ padding: "10px 12px", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: "#22c55e", color: "#fff", fontSize: 10, fontWeight: 600, padding: "4px 10px", borderRadius: 14, display: "flex", alignItems: "center", gap: 4 }}>
            <span>✦</span> Agent
          </div>
          <div style={{ background: "#333", color: "#aaa", fontSize: 10, padding: "4px 10px", borderRadius: 14, display: "flex", alignItems: "center", gap: 4 }}>
            <span>●</span> 23% used
          </div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            <span style={{ color: "#555", fontSize: 14 }}>📎</span>
            <span style={{ color: "#555", fontSize: 12 }}>/</span>
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#F17F0D", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 12 }}>↑</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Mockup 4: File upload + test generation UI ---- */
function TestGenMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ display: "flex", gap: 8, height: "100%" }}>
        {/* Left: file list */}
        <div style={{ width: 40, display: "flex", flexDirection: "column", gap: 6, paddingTop: 8 }}>
          {["📄", "📄", "📄"].map((icon, i) => (
            <div key={i} style={{ width: 32, height: 32, borderRadius: 6, background: "#1e1e2e", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{icon}</div>
          ))}
        </div>
        {/* Center: upload area */}
        <div style={{ flex: 1, background: "#1e1e2e", borderRadius: 10, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ padding: "8px 10px", fontSize: 10, color: "#fff", fontWeight: 600 }}>Upload Files</div>
          <div style={{ flex: 1, margin: "0 10px 10px", border: "1px dashed #333", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "#2a2a3a", margin: "0 auto 6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>📁</div>
              <span style={{ color: "#555", fontSize: 8 }}>Drag & drop or click to browse</span>
            </div>
          </div>
          <div style={{ padding: "4px 10px 8px", color: "#444", fontSize: 7 }}>Supports PDF, DOCX, XLSX, CSV, TXT, MD, PPT, RTF, ODT</div>
        </div>
        {/* Right: actions */}
        <div style={{ width: 100, display: "flex", flexDirection: "column", gap: 6, paddingTop: 8 }}>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ background: "#F17F0D", borderRadius: 4, padding: "3px 6px", fontSize: 7, color: "#fff" }}>Stories</div>
            <span style={{ color: "#555", fontSize: 7 }}>Test Cases</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ background: "#ef4444", borderRadius: 4, padding: "3px 6px", fontSize: 7, color: "#fff" }}>Flows</div>
            <span style={{ color: "#555", fontSize: 7 }}>Mode</span>
            <span style={{ color: "#555", fontSize: 7 }}>Integrate</span>
          </div>
          <div style={{ marginTop: 6, background: "#1e1e2e", borderRadius: 6, padding: 6, flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ color: "#aaa", fontSize: 7 }}>Ask me to modify, create, or manage your stories.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Mockup 5: Test runner UI ---- */
function TestExecMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ background: "#1a1a2e", borderRadius: 10, height: "100%", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <div style={{ padding: "8px 12px", borderBottom: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 4 }}>
            <div style={{ height: 8, width: 80, background: "#333", borderRadius: 4 }} />
            <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#333" }} />
          </div>
        </div>
        {/* Action buttons */}
        <div style={{ padding: "10px 12px", display: "flex", gap: 8 }}>
          <div style={{ background: "#22c55e", color: "#fff", fontSize: 9, fontWeight: 600, padding: "5px 12px", borderRadius: 6, display: "flex", alignItems: "center", gap: 4 }}>💬 Chat with AI</div>
          <div style={{ background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: 600, padding: "5px 12px", borderRadius: 6, display: "flex", alignItems: "center", gap: 4 }}>🔄 Re Test Case</div>
          <div style={{ background: "#222", color: "#fff", fontSize: 9, padding: "5px 12px", borderRadius: 6, border: "1px solid #444", display: "flex", alignItems: "center", gap: 4 }}>📋 Export to Playwright</div>
        </div>
        {/* Tab bar */}
        <div style={{ padding: "6px 12px", borderTop: "1px solid #222", display: "flex", gap: 16 }}>
          {["For Screens", "Add", "tcr/st", "Find", "tcr/st", "Save"].map((t) => (
            <span key={t} style={{ color: "#555", fontSize: 9 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- Mockup 6: Gap Analysis - Brain with connected nodes ---- */
function GapAnalysisMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Brain center */}
        <div style={{ width: 56, height: 56, zIndex: 2 }}>
          <img src="/assets/walnut-logo.svg" alt="" style={{ width: "100%", height: "100%" }} />
        </div>
        {/* Corner nodes */}
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <div style={{ background: "#22c55e", color: "#fff", fontSize: 9, fontWeight: 600, padding: "5px 14px", borderRadius: 6 }}>Requirements</div>
        </div>
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <div style={{ background: "#ef4444", color: "#fff", fontSize: 9, fontWeight: 600, padding: "5px 14px", borderRadius: 6 }}>Code</div>
        </div>
        <div style={{ position: "absolute", bottom: 10, left: 10 }}>
          <div style={{ background: "#3b82f6", color: "#fff", fontSize: 9, fontWeight: 600, padding: "5px 14px", borderRadius: 6 }}>Debug</div>
        </div>
        <div style={{ position: "absolute", bottom: 10, right: 10 }}>
          <div style={{ background: "#F17F0D", color: "#fff", fontSize: 9, fontWeight: 600, padding: "5px 14px", borderRadius: 6 }}>Test Cases</div>
        </div>
        {/* Connecting lines */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <line x1="28%" y1="22%" x2="42%" y2="42%" stroke="#444" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="72%" y1="22%" x2="58%" y2="42%" stroke="#444" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="28%" y1="78%" x2="42%" y2="58%" stroke="#444" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="72%" y1="78%" x2="58%" y2="58%" stroke="#444" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
        {/* Small dots on lines */}
        <div style={{ position: "absolute", top: "32%", left: "32%", width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
        <div style={{ position: "absolute", top: "32%", right: "32%", width: 6, height: 6, borderRadius: "50%", background: "#ef4444" }} />
        <div style={{ position: "absolute", bottom: "32%", left: "32%", width: 6, height: 6, borderRadius: "50%", background: "#3b82f6" }} />
        <div style={{ position: "absolute", bottom: "32%", right: "32%", width: 6, height: 6, borderRadius: "50%", background: "#F17F0D" }} />
      </div>
    </div>
  );
}

/* ---- Mockup 7: Analytics dashboard ---- */
function AnalyticsMockup() {
  return (
    <div className="feat-mockup feat-mockup-tall">
      <div style={{ display: "flex", gap: 10, height: "100%" }}>
        {/* Left: donut charts */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            {["Sprint Completion", "Release Progress"].map((label) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", border: "3px solid #06b6d4", borderTopColor: "transparent", margin: "0 auto 4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", border: "3px solid #06b6d4", borderRightColor: "transparent" }} />
                </div>
                <span style={{ color: "#888", fontSize: 7 }}>{label}</span>
              </div>
            ))}
          </div>
          {/* Bar chart */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3, flex: 1, padding: "0 8px" }}>
            {[40, 55, 45, 60, 50, 70, 55, 80, 60, 75, 65, 85].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, background: i >= 8 ? "#8b5cf6" : "rgba(139,92,246,0.3)", borderRadius: 2 }} />
            ))}
          </div>
          {/* Bottom bars */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: "0 8px" }}>
            <div style={{ height: 6, background: "#2a2a3a", borderRadius: 3, width: "100%" }} />
            <div style={{ height: 6, background: "#2a2a3a", borderRadius: 3, width: "75%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Main Section ---- */
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

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 20 }}>

          {/* Card 1 — From Documents */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <DocsMockup />
            <h3 className="feat-card-title">From Documents to Structured Requirements</h3>
            <p className="feat-card-desc">Centralize, extract, and organize requirements automatically.</p>
            <ul className="feat-card-list">
              <li>Upload PDFs, DOCX, XLSX, CSV, and audio/video files</li>
              <li>Figma design integration for automated story extraction</li>
              <li>AI-powered hierarchical extraction (Modules Features User Stories)</li>
              <li>Native integrations with Jira, Azure DevOps, GitHub, GitLab, Bitbucket</li>
            </ul>
            <div className="feat-outcome">
              <span className="feat-outcome-label">Outcome :</span>
              <span className="feat-outcome-text">Requirements become structured, traceable, and implementation-ready</span>
            </div>
          </AnimateOnScroll>

          {/* Card 2 — AI IDE */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <IDEMockup />
            <h3 className="feat-card-title">AI-Powered IDE Development</h3>
            <p className="feat-card-desc">Walnut extends into VS Code, enabling developers to prompt, plan and implement without context switching.</p>
            <div style={{ marginTop: "auto" }}>
              <div className="feat-outcome">
                <span className="feat-outcome-label">Outcome :</span>
                <span className="feat-outcome-text">Faster development with AI assistance directly in your workflow.</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Card 3 — AI Modes */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <AIModesMockup />
            <h3 className="feat-card-title">Three AI Interaction Modes</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
              {[
                { label: "Ask", color: "#22c55e", desc: "Read-only assistance" },
                { label: "Plan", color: "#F17F0D", desc: "Plan  →  Review  →  Approve" },
                { label: "Agent", color: "#a855f7", desc: "Autonomous executione" },
              ].map((m) => (
                <div key={m.label} style={{ background: "#1a1a2a", borderRadius: 8, padding: "8px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ color: m.color, fontWeight: 700, fontSize: 13, minWidth: 46 }}>{m.label}</span>
                  <span style={{ color: "#555", fontSize: 11 }}>:</span>
                  <span style={{ color: "#bbb", fontSize: 12 }}>{m.desc}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Card 4 — Test Cases */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <TestGenMockup />
            <h3 className="feat-card-title">AI-Generated Test Cases at Scale</h3>
            <p className="feat-card-desc">Create comprehensive tests directly from user stories in under 30 seconds.</p>
            <ul className="feat-card-list">
              <li>Functional, UI, API, Integration, and Regression testing</li>
              <li>Human-in-the-loop review and approval workflow</li>
              <li>AI continuously learns from tester feedback</li>
            </ul>
          </AnimateOnScroll>

          {/* Card 5 — Test Execution */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <TestExecMockup />
            <h3 className="feat-card-title">Test Execution & Management</h3>
            <p className="feat-card-desc">Step-by-step execution, screenshot capture, data-driven testing with detailed reports.</p>
          </AnimateOnScroll>

          {/* Card 6 — Gap Analysis */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <GapAnalysisMockup />
            <h3 className="feat-card-title">Continuous Gap Analysis</h3>
            <p className="feat-card-desc">Detect misalignment between intent and code before it becomes technical debt.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
              {[
                { label: "Implementation Coverage", color: "#F17F0D", desc: "Missing, incomplete, or outdated implementations" },
                { label: "Requirement Quality", color: "#F17F0D", desc: "Duplicate detection & AI-powered enhancements" },
                { label: "Engineering Quality", color: "#F17F0D", desc: "7-dimensional scoring: Architecture, Security, Testing, Documentation, Complexity, Best Practices, Anti-patterns" },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: item.color, flexShrink: 0 }} />
                    <span style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{item.label}</span>
                  </div>
                  <p style={{ color: "#9ca3af", fontSize: 11, lineHeight: 1.5, paddingLeft: 18, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Card 7 — Analytics (half width) */}
          <AnimateOnScroll animation="fadeUp" className="feat-card">
            <AnalyticsMockup />
            <h3 className="feat-card-title">Unified Analytics & Insights</h3>
            <p className="feat-card-desc">Make quality, velocity, and AI usage measurable.</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8 }}>
              {["Test execution trends", "LLM usage tracking", "Quality scores", "Team productivity"].map((tag) => (
                <span key={tag} style={{ background: "#1e1e2e", color: "#bbb", fontSize: 11, padding: "5px 14px", borderRadius: 20, border: "1px solid #333" }}>{tag}</span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
