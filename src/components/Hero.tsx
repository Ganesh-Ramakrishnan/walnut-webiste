"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(titleRef.current, { y: 40, opacity: 0, duration: 1 })
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
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
          An <span className="text-orange">AI ecosystem</span> for software
          <br className="hidden lg:block" />
          delivery from intent to production.
          <br className="hidden lg:block" />
          Build with zero blind spots and
          <br className="hidden lg:block" />
          No Human-in-loop.
        </h1>

        <p ref={subtitleRef} className="hero-subtitle">
          A Neural Workspace for Teams Who Build the Future. WalnutAI analyzes your
          documents, codebase, and test coverage to show you exactly what&apos;s missing—
          before your users find out.
        </p>
      </div>
    </section>
  );
}
