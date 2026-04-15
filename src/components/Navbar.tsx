"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";

const products = [
  { name: "WalnutAI Intelligence Hub", href: "/features/intelligence-hub" },
  { name: "Walnut for VS Code", href: "/features/vscode-extension" },
  { name: "WalnutAI Autopilot", href: "/features/cloud-agent" },
  { name: "WalnutAI for Jira/Azure", href: "/features/jira-azure-import" },
];

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close products dropdown on outside click
  useEffect(() => {
    if (!productsOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [productsOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl nav-scrolled"
          : "bg-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-orange focus:text-white focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>
      <div className="relative w-full px-4 sm:px-6 lg:px-10 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="shrink-0 relative z-10" aria-label="WalnutAI Home">
          <Image
            src="/assets/logo/Walnut-White.png"
            alt="WalnutAI"
            width={180}
            height={60}
            className="w-[130px] sm:w-[180px] h-auto theme-logo"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="nav-pill">
            {/* Products dropdown */}
            <div ref={productsRef} className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 bg-transparent border-none cursor-pointer"
                aria-expanded={productsOpen}
                aria-haspopup="true"
                style={{
                  fontFamily: '"Plus Jakarta Sans", var(--font-sans), sans-serif',
                  fontSize: 15,
                  fontWeight: 600,
                  lineHeight: "37px",
                  color: "var(--text-primary)",
                  whiteSpace: "nowrap",
                  padding: 0,
                }}
              >
                Products
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {productsOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-[280px] rounded-2xl shadow-2xl overflow-hidden nav-dropdown"
                >
                  <div className="py-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setProductsOpen(false)}
                        className="block px-5 py-3 hover:bg-white/5 transition-colors"
                        style={{
                          fontFamily: '"Plus Jakarta Sans", var(--font-sans), sans-serif',
                          fontSize: 15,
                          fontWeight: 600,
                          color: "var(--text-primary)",
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="nav-cta">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1 relative z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Theme toggle + spacer */}
        <div className="hidden md:flex items-center gap-3 w-[120px] justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors theme-toggle-btn"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-slate-600" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-xl px-4 sm:px-6 py-4 nav-mobile-menu">
          {/* Mobile Products */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between py-3 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Products
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileProductsOpen && (
              <div className="pb-2">
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileProductsOpen(false);
                    }}
                    className="block py-2.5 pl-4 text-sm text-neutral-400 hover:text-orange transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-gray-300 hover:text-white transition-colors border-b border-white/5 last:border-0"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-5 py-2.5 text-sm font-medium text-white gradient-orange rounded-full text-center"
          >
            Contact Us
          </Link>
          <button
            onClick={toggleTheme}
            className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 text-sm text-gray-300 hover:text-white transition-colors border border-white/10 rounded-full"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
}
