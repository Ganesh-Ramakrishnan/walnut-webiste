"use client";

import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

interface TitleSegment {
  text: string;
  orange?: boolean;
}

const carouselTitles: TitleSegment[][] = [
  [
    { text: "An " },
    { text: "AI ecosystem", orange: true },
    { text: " for software delivery from intent to production." },
  ],
  [
    { text: "An " },
    { text: "AI ecosystem", orange: true },
    { text: " for software delivery. Assign tasks to AI bots and wake up to code, tests, and apps already built." },
  ],
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isFirstRender = useRef(true);

  // Animate characters in
  const animateCharsIn = useCallback((delay = 0) => {
    if (!titleRef.current) return;
    const chars = titleRef.current.querySelectorAll(".hero-char");
    gsap.fromTo(
      chars,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.025,
        delay,
      }
    );
  }, []);

  // Initial entrance
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      animateCharsIn(0.3);
      gsap.from(subtitleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.4)",
        delay: 0.8,
      });
    }
  }, [animateCharsIn]);

  // Carousel auto-rotation
  const goToSlide = useCallback(
    (index: number) => {
      if (!titleRef.current) return;
      const chars = titleRef.current.querySelectorAll(".hero-char");

      gsap.to(chars, {
        opacity: 0,
        y: -15,
        duration: 0.25,
        stagger: 0.01,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex(index);
          // Small timeout to let React re-render new chars
          requestAnimationFrame(() => animateCharsIn(0));
        },
      });
    },
    [animateCharsIn]
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const next = (currentIndex + 1) % carouselTitles.length;
      goToSlide(next);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentIndex, goToSlide]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    goToSlide(index);
  };

  // Render title as individual character spans
  const renderTitle = (segments: TitleSegment[]) => {
    return segments.map((segment, si) =>
      [...segment.text].map((char, ci) => (
        <span
          key={`${si}-${ci}`}
          className={`hero-char${segment.orange ? " text-orange" : ""}`}
          style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </span>
      ))
    );
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      <img src="/assets/eclipse-left.svg" alt="" className="hero-eclipse hero-eclipse-left" />
      <img src="/assets/eclipse-right.svg" alt="" className="hero-eclipse hero-eclipse-right" />

      <div className="hero-content-wrapper">
        <div className="hero-carousel">
          <h1 ref={titleRef} className="hero-title">
            {renderTitle(carouselTitles[currentIndex])}
          </h1>

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

        <div className="hero-subtitle-fixed">
          <p ref={subtitleRef} className="hero-subtitle">
            A Neural Workspace for Teams Who Build the Future. WalnutAI analyzes your
            documents, codebase, and test coverage to show you exactly what&apos;s missing—
            before your users find out.
          </p>
        </div>
      </div>
    </section>
  );
}
