import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * WalnutAI logo.
 *
 * One asset for both themes. The lockup is white, so the light theme darkens
 * it in CSS (see .logo-img in globals.css) — that renders it monochrome and
 * loses the orange mark, but keeps the correct "WalnutAI" wordmark.
 *
 * The repo's walnut-logo.svg is an older lockup reading just "Walnut", so it
 * cannot stand in for the light theme. Replace this with a proper dark-text
 * lockup when one exists and drop the filter.
 */
export default function Logo({
  width = 180,
  height = 60,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <Image
      src="/assets/logo/Walnut-White.png"
      alt="WalnutAI"
      width={width}
      height={height}
      className={`logo-img ${className}`}
      priority={priority}
    />
  );
}
