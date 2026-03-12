"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleUp" | "stagger";
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  staggerChildren?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  className = "",
  style,
  staggerChildren = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animations: Record<string, gsap.TweenVars> = {
      fadeUp: { y: 60, opacity: 0 },
      fadeIn: { opacity: 0 },
      fadeLeft: { x: -60, opacity: 0 },
      fadeRight: { x: 60, opacity: 0 },
      scaleUp: { scale: 0.8, opacity: 0 },
    };

    if (animation === "stagger") {
      const children = el.children;
      gsap.set(children, { y: 40, opacity: 0 });
      gsap.to(children, {
        y: 0,
        opacity: 1,
        duration,
        stagger: staggerChildren,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    } else {
      const from = animations[animation] || animations.fadeUp;
      gsap.set(el, from);
      gsap.to(el, {
        ...Object.fromEntries(Object.keys(from).map((k) => [k, k === "opacity" ? 1 : k === "scale" ? 1 : 0])),
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el || (el && t.trigger && el.contains(t.trigger as Node))) {
          t.kill();
        }
      });
    };
  }, [animation, delay, duration, staggerChildren]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
