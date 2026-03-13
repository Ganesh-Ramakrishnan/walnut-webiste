"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    title: "Every requirement.\nEvery code. Every test\nconnected",
    subtitle: "Full Traceability Across Your Stack",
    desc: "Your entire requirements-to-code-to-test structure is visible. Trace any feature from story to implementation to test case — nothing falls through the cracks.",
    image: "/assets/images-logo/every-requirement-connected.png",
  },
  {
    title: "Continuous Quality\nmonitoring",
    subtitle: "Quality That Never Sleeps",
    desc: "WalnutAI continuously monitors your codebase against requirements, catching drift and gaps in real time so quality issues are found before they reach production.",
    image: "/assets/images-logo/continuous-quality-monitoring.png",
  },
  {
    title: "New team members\nproductive in days",
    subtitle: "Onboarding Made Effortless",
    desc: "Your entire requirements-to-code-to-test structure is visible. New engineers can trace any feature from story to implementation and start contributing faster.",
    image: "/assets/images-logo/new-team-members.png",
  },
  {
    title: "Stop writing tests\nmanually",
    subtitle: "AI-Generated Tests in Seconds",
    desc: "WalnutAI generates comprehensive test cases directly from your user stories. Functional, integration, and regression tests — created in under 30 seconds.",
    image: "/assets/images-logo/stop-writing-tests.png",
  },
  {
    title: "Idea to Production",
    subtitle: "Ship Features End-to-End",
    desc: "From requirement capture to code implementation to test validation — WalnutAI connects every stage so nothing gets lost between idea and deployment.",
    image: "/assets/images-logo/idea-to-production.png",
  },
  {
    title: "Fix code issues\nbefore.....",
    subtitle: "Catch Issues Before They Ship",
    desc: "WalnutAI's gap analysis identifies missing implementations, incomplete features, and misaligned code before they become costly production bugs.",
    image: "/assets/images-logo/fix-code-issues.png",
  },
  {
    title: "Tech debt visibility\nyou can't ignore",
    subtitle: "Surface Hidden Technical Debt",
    desc: "Get a clear, quantified view of your technical debt. WalnutAI scores your codebase across architecture, security, testing, and best practices so you can prioritize what matters.",
    image: "/assets/images-logo/tech-debt-visibility.png",
  },
];

export default function AchievementsSection() {
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (index: number) => {
      if (index === active) return;
      setFade(false);
      setTimeout(() => {
        setActive(index);
        setFade(true);
      }, 400);
    },
    [active]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <section style={{ padding: "80px 0", overflow: "hidden", position: "relative", minHeight: 650 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{ color: "#fff", fontSize: 48, fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
            What Teams Achieve With <span style={{ color: "#F17F0D" }}>WalnutAI</span>
          </h2>
          <p style={{ color: "#9ca3af", fontSize: 16 }}>
            Real outcomes from teams who stopped guessing and started knowing what&apos;s missing
          </p>
        </div>

        {/* Content: left text + right image */}
        <div style={{ display: "flex", alignItems: "center", gap: 60, minHeight: 450 }}>
          {/* Left: dots + text */}
          <div style={{ flex: "0 0 380px", display: "flex", gap: 24 }}>
            {/* Dot indicators */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 8 }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: "none",
                    cursor: "pointer",
                    background: i === active ? "#F17F0D" : "rgba(255,255,255,0.15)",
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>

            {/* Text */}
            <div
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease",
              }}
            >
              <h3
                style={{
                  color: "#fff",
                  fontSize: 36,
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: 20,
                  whiteSpace: "pre-line",
                }}
              >
                {slide.title}
              </h3>
              <p style={{ color: "#fff", fontSize: 16, fontWeight: 600, marginBottom: 16 }}>
                {slide.subtitle}
              </p>
              <p style={{ color: "#9ca3af", fontSize: 14, lineHeight: 1.7, maxWidth: 340 }}>
                {slide.desc}
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div
            style={{
              flex: 1,
              opacity: fade ? 1 : 0,
              transform: fade ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div
              style={{
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid #222",
                background: "#111",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title.replace(/\n/g, " ")}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
