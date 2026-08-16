type LogoProps = {
  /** Height of the orange mark in px; the wordmark scales with it. */
  height?: number;
  className?: string;
  /** Accepted for call-site compatibility; the lockup sizes from height. */
  width?: number;
  priority?: boolean;
};

/**
 * WalnutAI lockup: the orange brain mark beside the wordmark.
 *
 * Composed rather than a single image so it is genuinely two-tone in both
 * themes — the mark stays orange while the wordmark follows --text-primary
 * (dark on light, white on dark). The previous single-asset approach used a
 * white PNG darkened by a CSS filter, which forced the mark to go dark too.
 *
 * The wordmark is real text, so screen readers announce it and it stays sharp
 * at any size; the mark is decorative.
 */
export default function Logo({ height = 32, className = "" }: LogoProps) {
  return (
    <span className={`logo-lockup ${className}`} style={{ ["--logo-h" as string]: `${height}px` }}>
      <img src="/assets/logo/walnut-mark.svg" alt="" aria-hidden="true" className="logo-mark" />
      <span className="logo-wordmark">WalnutAI</span>
    </span>
  );
}
