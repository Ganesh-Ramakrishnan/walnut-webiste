"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    stat: "Minutes, not days",
    title: "From Meeting Notes to Working Software",
    desc: "Teams that used to spend 3\u20134 days turning a product brief into development-ready stories now do it before the meeting ends. Drop a transcript, doc, or brief in \u2014 walk out with structured requirements, assigned stories, and code already in progress.",
    image: "/assets/achieve1.png",
  },
  {
    stat: "80% fewer production defects",
    title: "Bugs That Used to Reach Users Don\u2019t Anymore",
    desc: "Before WalnutAI, teams found gaps in QA or worse \u2014 in production. Now they find them before the sprint ends. Teams using WalnutAI\u2019s gap analysis report up to 80% fewer defects escaping to release, because the gap between what was specified and what was built gets closed automatically.",
    image: "/assets/achieve2.png",
  },
  {
    stat: "15+ hours back every sprint",
    title: "QA Stops Writing. QA Starts Reviewing.",
    desc: "The hours QA used to spend writing test cases from scratch are now spent on judgment \u2014 reviewing, refining, and approving AI-generated cases that are already structured, complete, and linked to their requirements. Fifteen hours a sprint back in the hands of the team.",
    image: "/assets/achieve3.png",
  },
  {
    stat: "100% traceability, zero maintenance",
    title: "Audit Requests That Used to Take Days Take One Click",
    desc: "Compliance teams no longer chase engineers for evidence before an audit. Every requirement, test case, and defect is automatically linked and permanently traceable. When the auditor asks, the report is already there.",
    image: "/assets/achieve4.png",
  },
  {
    stat: "Issues caught before they escalate",
    title: "Engineering Leads Stop Being Surprised by Code Quality",
    desc: "Instead of discovering architectural drift or growing complexity after an incident, engineering leads see it as it happens \u2014 scored across 7 quality dimensions, ranked by impact, per story. The problems that used to surface in post-mortems now surface in sprint planning.",
    image: "/assets/achieve5.png",
  },
  {
    stat: "60% faster ramp-up",
    title: "New Engineers Stop Asking \u201CHow Does This Work?\u201D",
    desc: "When every feature is traceable from requirement to implementation to test, a new engineer doesn\u2019t need three weeks of shadowing to understand the codebase. They navigate it themselves on day one. Teams report 60% faster time-to-contribution for new members after adopting WalnutAI.",
    image: "/assets/achieve6.png",
  },
  {
    stat: "Every commit, always",
    title: "Technical Debt Stops Being a Surprise at the End of the Quarter",
    desc: "Teams that review technical debt quarterly are always reacting. Teams using WalnutAI see debt grow in real time \u2014 per commit, per module, per story. The conversation shifts from \u201Chow did we get here\u201D to \u201Clet\u2019s fix this before it compounds.\u201D",
    image: "/assets/achieve7.png",
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
    <section className="achv-section">
      <div className="achv-container">
        {/* Header */}
        <div className="achv-header">
          <h2 className="achv-title">
            What Teams Achieve Using{" "}
            <span style={{ color: "var(--accent)" }}>WalnutAI</span>
          </h2>
          <h3
            style={{
              color: "var(--text-secondary-strong)",
              fontSize: 20,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Outcomes teams see in their first 90 days with WalnutAI
          </h3>
          <p className="achv-subtitle">
            From faster sprints to fewer production defects &mdash; here&apos;s
            what changes when requirements, code, and testing run in one
            connected AI loop.
          </p>
        </div>

        {/* Content: left text + right image */}
        <div className="achv-content">
          {/* Left: dots + text */}
          <div className="achv-left">
            <div className="achv-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`achv-dot ${i === active ? "active" : ""}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div
              className="achv-text"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Stat */}
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                {slide.stat}
              </div>

              <h3 className="achv-slide-title" style={{ whiteSpace: "normal" }}>
                {slide.title}
              </h3>
              <p className="achv-slide-desc">{slide.desc}</p>
            </div>
          </div>

          {/* Right: image */}
          <div
            className="achv-right"
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? "translateX(0)" : "translateX(40px)",
            }}
          >
            <div className="achv-image-wrap">
              <Image
                src={slide.image}
                alt={slide.title}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
                {...(active === 0
                  ? { priority: true, fetchPriority: "high" }
                  : { loading: "lazy" })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
