"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Light/dark switch. The theme is applied to <html data-theme> by the inline
 * script in the root layout before first paint; this component only keeps the
 * button in sync and writes the user's choice back to localStorage.
 *
 * Light is the default; dark is opt-in and remembered.
 */
export default function ThemeToggle() {
  // Starts at "light" to match the server-rendered <html data-theme="light">,
  // then reconciles with whatever the pre-paint script actually applied.
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = document.documentElement.getAttribute("data-theme");
    setTheme(stored === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode — the choice just won't persist */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      className="theme-toggle-fab"
    >
      {/* Shows the theme you'd switch TO. */}
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
