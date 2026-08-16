"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

/**
 * Tape-liner strip announcing the hackathon, shown at the top of the homepage.
 * Sits directly under the fixed navbar and links through to /hackathon.
 */
export default function HackathonBanner() {
  return (
    <Link href="/hackathon" className="hkb-strip" aria-label="WalnutAI Hackathon, 26 to 27 September 2026 — register now">
      <span className="hkb-inner">
        <span className="hkb-tag">
          <Sparkles size={13} />
          Hackathon
        </span>
        <span className="hkb-text">
          <strong>26–27 September 2026</strong>
          <span className="hkb-sep hkb-sep--hide" aria-hidden="true">·</span>
          <span className="hkb-prize">₹1 Lakh+ prize pool</span>
        </span>
        <span className="hkb-cta">
          Register now
          <ArrowRight size={14} />
        </span>
      </span>
    </Link>
  );
}
