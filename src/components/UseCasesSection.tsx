"use client";

import { useRef, useState, useEffect } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

const useCases = [
  {
    icon: "🚀",
    title: "Fresh Application Development",
    points: [
      {
        highlight: "Start smarter and faster:",
        text: "AI-powered analysis and roadmaps reduce guesswork, helping you launch projects efficiently.",
      },
      {
        highlight: "Build products users want:",
        text: "Market research integration ensures features align with real customer needs.",
      },
      {
        highlight: "Focus on impact:",
        text: "MVP planning and risk assessment prioritize high-value work and prevent costly mistakes.",
      },
    ],
  },
  {
    icon: "⚙️",
    title: "Modernization & Tech Upgrade",
    points: [
      {
        highlight: "Upgrade confidently:",
        text: "Analyze legacy systems to understand risks and inefficiencies before starting.",
      },
      {
        highlight: "Ensure smooth transitions:",
        text: "Gradual rollouts and migration planning minimize disruption to ongoing operations.",
      },
      {
        highlight: "Improve performance:",
        text: "Modernized systems run more reliably and efficiently, reducing future maintenance effort.",
      },
    ],
  },
  {
    icon: "📋",
    title: "Requirements Engineering",
    points: [
      {
        highlight: "Reduce misalignment:",
        text: "Automated validation means no requirement goes uncaptured.",
      },
      {
        highlight: "Focus on what matters:",
        text: "AI-driven priority setting highlights the most critical items.",
      },
      {
        highlight: "Align teams faster:",
        text: "Shared requirement dashboards keep developers and stakeholders in sync.",
      },
    ],
  },
  {
    icon: "🧪",
    title: "Quality Assurance & Testing",
    points: [
      {
        highlight: "Test smarter:",
        text: "AI generates comprehensive test cases from requirements in seconds.",
      },
      {
        highlight: "Catch bugs early:",
        text: "Continuous gap analysis identifies missing coverage before release.",
      },
      {
        highlight: "Ship confidently:",
        text: "End-to-end traceability ensures every requirement is verified.",
      },
    ],
  },
  {
    icon: "🔄",
    title: "CI/CD & DevOps Integration",
    points: [
      {
        highlight: "Automate pipelines:",
        text: "Seamless integration with your existing CI/CD tools and workflows.",
      },
      {
        highlight: "Faster deployments:",
        text: "Automated testing gates ensure quality without slowing delivery.",
      },
      {
        highlight: "Monitor continuously:",
        text: "Real-time dashboards track pipeline health and deployment metrics.",
      },
    ],
  },
];

export default function UseCasesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  // Auto-scroll
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Scroll to active card
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[activeIndex] as HTMLElement;
    if (!card) return;
    const scrollLeft = card.offsetLeft - (track.offsetWidth / 2 - card.offsetWidth / 2);
    track.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, [activeIndex]);

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = trackRef.current?.scrollLeft || 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !trackRef.current) return;
    const dx = e.clientX - dragStartX.current;
    trackRef.current.scrollLeft = scrollStartX.current - dx;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 60) {
      if (dx < 0 && activeIndex < useCases.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (dx > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  return (
    <section id="usecases" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Use Case &{" "}<span className="text-orange">Scenarios</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            WalnutAI adapts to your specific development needs
          </p>
        </AnimateOnScroll>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="usecase-track"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className={`usecase-card ${i === activeIndex ? "usecase-card-active" : ""}`}
            onClick={() => setActiveIndex(i)}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="usecase-icon">
                <span className="text-sm">{uc.icon}</span>
              </div>
              <h3 className="usecase-card-title">{uc.title}</h3>
            </div>

            {/* Bullet points */}
            <div className="flex flex-col gap-3">
              {uc.points.map((point) => (
                <p key={point.highlight} className="usecase-card-text">
                  <span className="text-orange font-medium">{point.highlight}</span>{" "}
                  {point.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {useCases.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`usecase-dot ${i === activeIndex ? "usecase-dot-active" : ""}`}
            aria-label={`Go to use case ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
