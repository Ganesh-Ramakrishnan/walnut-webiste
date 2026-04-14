"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const stats = [
  { value: "96%", label: "Avg Requirement\nCoverage" },
  { value: "80%", label: "Cut release risk" },
  { value: "15+ hrs", label: "Saved Per Sprint" },
  { value: "5 min", label: "First Gap Analysis" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const els = sectionRef.current.querySelectorAll(".hero-anim");
    gsap.fromTo(
      els,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12, delay: 0.2 }
    );
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: "100vh", paddingTop: 100, paddingBottom: 60 }}>
      <Image src="/assets/eclipse-left.svg" alt="" role="presentation" className="hero-eclipse hero-eclipse-left" width={600} height={600} priority />
      <Image src="/assets/eclipse-right.svg" alt="" role="presentation" className="hero-eclipse hero-eclipse-right" width={600} height={600} priority />

      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 20px", textAlign: "center", width: "100%", zIndex: 1 }}>
        {/* Badge */}
        <div className="hero-anim" style={{ marginBottom: 28 }}>
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            AI-Powered SDLC Automation
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-anim hero-main-title">
          From Requirement to Release<br />
          - <span className="text-orange">Automated.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-anim hero-main-subtitle">
          Built for <strong style={{ color: "#fff" }}>engineering leaders, QA teams, and developers</strong> who are done duct-taping
          tools together. WalnutAI eliminates that overhead — with AI that writes code,
          generates test cases, detects gaps, and keeps your entire SDLC connected. From your
          first prompt to your final release.
        </p>

        {/* CTA Buttons */}
        <div className="hero-anim hero-cta-wrapper" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
          <a href="https://app.walnutai.ai" className="hero-btn-primary">
            Start Free Trial &rarr;
          </a>
          <a href="#features" className="hero-btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
              <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
            </svg>
            Watch 2-min demo
          </a>
        </div>

        {/* Trust Badges */}
        <div className="hero-anim hero-trust">
          <span className="hero-trust-item">&#10003; No credit card required</span>
          <span className="hero-trust-sep">&middot;</span>
          <span className="hero-trust-item">&#10003; SOC2 Type II Certified</span>
          <span className="hero-trust-sep">&middot;</span>
          <span className="hero-trust-item">&#10003; GDPR Ready</span>
        </div>
        <div className="hero-anim hero-trust" style={{ marginTop: 4 }}>
          <span className="hero-trust-item">&#10003; Works with Jira, GitHub, GitLab &amp; Azure DevOps</span>
        </div>

        {/* Stats */}
        <div className="hero-anim hero-stats-row">
          {stats.map((s) => (
            <div key={s.label} className="hero-stat-card">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
