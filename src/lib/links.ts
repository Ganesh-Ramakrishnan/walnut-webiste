/**
 * Single destination for every free-trial / sign-up CTA across the site.
 * Keep all "Start Free Trial", "Sign up", and "Get started free" buttons
 * pointing here so the funnel stays consistent.
 */
export const SIGNUP_URL = "https://app.walnutai.ai/signup";

/**
 * Official WalnutAI social accounts. These were previously duplicated across
 * the footer, contact page, navbar and hackathon form, which is how the site
 * ended up with a stale Discord invite in some places and not others — change
 * them here only.
 */
export const DISCORD_URL = "https://discord.com/invite/qCZ542wkqX";
export const LINKEDIN_URL = "https://www.linkedin.com/company/wal-nut/";
export const INSTAGRAM_URL = "https://www.instagram.com/meet_walnutai.ai/";
export const YOUTUBE_URL = "https://www.youtube.com/@walnutai_ai";

/** Careers listings live on the LinkedIn company page. */
export const CAREERS_URL = `${LINKEDIN_URL}jobs/`;

/** Product demo video. */
export const DEMO_URL = YOUTUBE_URL;

/** Registered office — the same address the legal pages carry. */
export const OFFICE_ADDRESS =
  "Ground Floor, BCIT, Bhartiya City, RK Hegde Nagar, Bengaluru, Karnataka 560064";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`;

/** Public inbox. */
export const CONTACT_EMAIL = "contact@walnutai.ai";
export const MAILTO_URL = `mailto:${CONTACT_EMAIL}`;
