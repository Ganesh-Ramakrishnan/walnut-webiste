"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const slides = [
  {
    title: "Every requirement.\nEvery code. Every test\nconnected",
    subtitle: "Full Traceability Across Your Stack",
    desc: "Your entire requirements-to-code-to-test structure is visible. Trace any feature from story to implementation to test case — nothing falls through the cracks.",
    image: "/assets/images-logo/every-requirement-connected.webp",
    blur: "data:image/webp;base64,UklGRloAAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAgAAAAsAEAnQEqCgAHAAFAJiWkAALnYOVwAAD+/qc4j4AAAAA=",
  },
  {
    title: "Continuous Quality\nmonitoring",
    subtitle: "Quality That Never Sleeps",
    desc: "WalnutAI continuously monitors your codebase against requirements, catching drift and gaps in real time so quality issues are found before they reach production.",
    image: "/assets/images-logo/continuous-quality-monitoring.webp",
    blur: "data:image/webp;base64,UklGRloAAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAgAAAAMAEAnQEqCgAHAAFAJiWkAANwAP775Ny5f3xtU7KgAAA=",
  },
  {
    title: "New team members\nproductive in days",
    subtitle: "Onboarding Made Effortless",
    desc: "Your entire requirements-to-code-to-test structure is visible. New engineers can trace any feature from story to implementation and start contributing faster.",
    image: "/assets/images-logo/new-team-members.webp",
    blur: "data:image/webp;base64,UklGRlwAAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAiAAAAMAEAnQEqCgAHAAFAJiWkAANwAP775x1qHqYK1ZnNiGAAAA==",
  },
  {
    title: "Stop writing tests\nmanually",
    subtitle: "AI-Generated Tests in Seconds",
    desc: "WalnutAI generates comprehensive test cases directly from your user stories. Functional, integration, and regression tests — created in under 30 seconds.",
    image: "/assets/images-logo/stop-writing-tests.webp",
    blur: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAyAAAAsAEAnQEqCgAHAAFAJiWkAALnYG3VkAD+/fW6W36FsDcHK/bKLd1SSjCmnaPUUYEAAAA=",
  },
  {
    title: "Idea to Production",
    subtitle: "Ship Features End-to-End",
    desc: "From requirement capture to code implementation to test validation — WalnutAI connects every stage so nothing gets lost between idea and deployment.",
    image: "/assets/images-logo/idea-to-production.webp",
    blur: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAkAAAA0AEAnQEqCgAHAAFAJiWkAAMX/ShNYgAA/v4cRUkX1+RAAAAA",
  },
  {
    title: "Fix code issues\nbefore.....",
    subtitle: "Catch Issues Before They Ship",
    desc: "WalnutAI's gap analysis identifies missing implementations, incomplete features, and misaligned code before they become costly production bugs.",
    image: "/assets/images-logo/fix-code-issues.webp",
    blur: "data:image/webp;base64,UklGRlYAAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAcAAAAMAEAnQEqCgAHAAFAJiWkAANwAP78IDoKJwAAAA==",
  },
  {
    title: "Tech debt visibility\nyou can't ignore",
    subtitle: "Surface Hidden Technical Debt",
    desc: "Get a clear, quantified view of your technical debt. WalnutAI scores your codebase across architecture, security, testing, and best practices so you can prioritize what matters.",
    image: "/assets/images-logo/tech-debt-visibility.webp",
    blur: "data:image/webp;base64,UklGRl4AAABXRUJQVlA4WAoAAAAQAAAACQAABgAAQUxQSBMAAAABD9D/iAgISBKh/68bEdH/TJ4AAFZQOCAkAAAAsAEAnQEqCgAHAAFAJiWkAALnXBWhgAD+/ncWIw/uQPaPigAA",
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
            What Teams Achieve With{" "}<span style={{ color: "#F17F0D" }}>WalnutAI</span>
          </h2>
          <p className="achv-subtitle">
            Real outcomes from teams who stopped guessing and started knowing what&apos;s missing
          </p>
        </div>

        {/* Content: left text + right image */}
        <div className="achv-content">
          {/* Left: dots + text */}
          <div className="achv-left">
            {/* Dot indicators — horizontal on mobile, vertical on desktop */}
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

            {/* Text */}
            <div
              className="achv-text"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h3 className="achv-slide-title">
                {slide.title}
              </h3>
              <p className="achv-slide-subtitle">
                {slide.subtitle}
              </p>
              <p className="achv-slide-desc">
                {slide.desc}
              </p>
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
                alt={slide.title.replace(/\n/g, " ")}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
                placeholder="blur"
                blurDataURL={slide.blur}
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
