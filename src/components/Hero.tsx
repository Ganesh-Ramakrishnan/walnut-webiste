"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, { y: 40, opacity: 0, duration: 1 })
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
      .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] pt-32 sm:pt-40 lg:pt-44 pb-6 sm:pb-8 overflow-hidden">
      {/* Left eclipse */}
      <img src="/assets/eclipse-left.svg" alt="" className="hero-eclipse hero-eclipse-left" />
      {/* Right eclipse */}
      <img src="/assets/eclipse-right.svg" alt="" className="hero-eclipse hero-eclipse-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Main heading */}
        <h1
          ref={titleRef}
          className="hero-title"
        >
          An <span className="text-orange">AI operating system</span> for software
          <br className="hidden lg:block" />
          delivery {" "}from intent to production, with
          <br className="hidden lg:block" />
          zero blind spots.
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          A Neural Workspace for Teams Who Build the Future. Also walnut analyzes your
          documents, codebase, and test coverage to show you exactly what&apos;s missing—
          before your users find out.
        </p>

        {/* CTA buttons */}
        <div ref={ctaRef} className="hero-cta-wrapper">
          <a href="#" className="hero-btn-secondary">
            See how we reduced bugs by 73%
            <ArrowRight size={18} />
          </a>
          <a href="#pricing" className="hero-btn-primary">
            Start Finding Gaps Free
          </a>
        </div>
      </div>
    </section>
  );
}
