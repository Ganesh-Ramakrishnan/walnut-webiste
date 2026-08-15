import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * Theme-aware WalnutAI logo.
 *
 * Both lockups are rendered and CSS shows exactly one, so the correct logo is
 * present in the server-rendered HTML and swaps with the theme without a
 * client round-trip or a hydration mismatch. The hidden one uses display:none,
 * so screen readers only announce the visible lockup.
 */
export default function Logo({
  width = 180,
  height = 60,
  className = "",
  priority = false,
}: LogoProps) {
  return (
    <>
      <Image
        src="/assets/logo/Walnut-White.png"
        alt="WalnutAI"
        width={width}
        height={height}
        className={`logo-img logo-img--dark ${className}`}
        priority={priority}
      />
      {/* Built from public/assets/walnut-logo.svg with the white fills swapped
          for slate; the orange mark is untouched. `unoptimized` because Next's
          image optimizer rejects SVG unless dangerouslyAllowSVG is enabled. */}
      <Image
        src="/assets/logo/Walnut-Dark.svg"
        alt="WalnutAI"
        width={width}
        height={height}
        className={`logo-img logo-img--light ${className}`}
        priority={priority}
        unoptimized
      />
    </>
  );
}
