"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

const carouselTitles = [
  <>An <span className="text-orange">AI ecosystem</span> for software delivery from intent to production.</>,
  <>An <span className="text-orange">AI ecosystem</span> for software delivery. Assign tasks to AI bots and wake up to code, tests, and apps already built.</>,
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initial entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(titleRef.current, { y: 40, opacity: 0, duration: 1 })
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.5");
  }, []);

  // Carousel auto-rotation
  const goToSlide = useCallback((index: number) => {
    if (!titleRef.current) return;
    gsap.to(titleRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const next = (currentIndex + 1) % carouselTitles.length;
      goToSlide(next);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, goToSlide]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    goToSlide(index);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Left eclipse */}
      <img src="/assets/eclipse-left.svg" alt="" className="hero-eclipse hero-eclipse-left" />
      {/* Right eclipse */}
      <img src="/assets/eclipse-right.svg" alt="" className="hero-eclipse hero-eclipse-right" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Carousel title */}
        <div className="hero-carousel">
          <h1 ref={titleRef} className="hero-title">
            {carouselTitles[currentIndex]}
          </h1>

          {/* Dots */}
          <div className="hero-carousel-dots">
            {carouselTitles.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`hero-carousel-dot ${i === currentIndex ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p ref={subtitleRef} className="hero-subtitle">
          A Neural Workspace for Teams Who Build the Future. WalnutAI analyzes your
          documents, codebase, and test coverage to show you exactly what&apos;s missing—
          before your users find out.
        </p>
      </div>
    </section>
  );
}
