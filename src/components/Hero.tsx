"use client";

import Image from "next/image";
import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

interface TitleSegment {
  text: string;
  orange?: boolean;
}

const carouselTitles: TitleSegment[][] = [
  [
    { text: "The " },
    { text: "AI software development platform", orange: true },
    { text: " that takes you from intent to production." },
  ],
  [
    { text: "An " },
    { text: "AI software development platform", orange: true },
    { text: " for automated test case generation, AI code generation, and AI SDLC automation." },
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

  // Render title as individual character spans, grouped by word to prevent mid-word breaks
  const renderTitle = (segments: TitleSegment[]) => {
    let wordIndex = 0;
    return segments.map((segment, si) => {
      const words = segment.text.split(" ");
      return words.map((word, wi) => {
        const currentWordIndex = wordIndex++;
        return (
          <span key={`w-${si}-${wi}`} style={{ whiteSpace: "nowrap" }}>
            {[...word].map((char, ci) => (
              <span
                key={`${currentWordIndex}-${ci}`}
                className={`hero-char${segment.orange ? " text-orange" : ""}`}
                style={{ display: "inline-block" }}
              >
                {char}
              </span>
            ))}
            {wi < words.length - 1 && (
              <span
                className={`hero-char${segment.orange ? " text-orange" : ""}`}
                style={{ display: "inline-block", whiteSpace: "pre" }}
              >
                {" "}
              </span>
            )}
          </span>
        );
      });
    });
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center justify-center">
      <Image src="/assets/eclipse-left.svg" alt="" role="presentation" className="hero-eclipse hero-eclipse-left" width={600} height={600} priority />
      <Image src="/assets/eclipse-right.svg" alt="" role="presentation" className="hero-eclipse hero-eclipse-right" width={600} height={600} priority />

      <div className="hero-content-wrapper">
        <div className="hero-carousel">
          <h1
            ref={titleRef}
            className="hero-title"
            aria-label={carouselTitles[currentIndex].map(s => s.text).join("")}
          >
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
            WalnutAI is an AI software development platform that intelligently orchestrates
            requirements, AI code generation, and automated test case generation — transforming
            your AI requirements tool into a complete AI SDLC automation engine.
          </p>
        </div>
      </div>
    </section>
  );
}
