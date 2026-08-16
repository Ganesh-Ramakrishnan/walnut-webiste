"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { DISCORD_URL, SIGNUP_URL } from "@/lib/links";
import Logo from "@/components/Logo";

const products = [
  { name: "WalnutAI Intelligence Hub", href: "/features/intelligence-hub" },
  { name: "WalnutAI for VS Code", href: "/features/vscode-extension" },
  { name: "WalnutAI Autopilot", href: "/features/cloud-agent" },
  { name: "WalnutAI for Jira/Azure", href: "/features/jira-azure-import" },
];

const resources = [
  [
    { name: "Changelog", href: "/changelog" },
    { name: "Docs", href: "https://docs.walnutai.ai", external: true },
    { name: "Integrations", href: "/integrations" },
  ],
  [
    { name: "Blog", href: "/blog" },
    { name: "Reports", href: "/resources/reports" },
    { name: "Events", href: "/hackathon" },
    { name: "Community", href: DISCORD_URL, external: true },
    { name: "Contact Us", href: "/contact" },
  ],
];
const resourcesFlat = resources.flat();

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

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

  // Close resources dropdown on outside click
  useEffect(() => {
    if (!resourcesOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [resourcesOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "var(--nav-scrolled-bg, var(--surface-overlay))" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-default)" : "none",
      }}
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
          <Logo height={30} className="logo-nav" />
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
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 min-w-[280px] rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    background: "var(--surface-panel)",
                    border: "1px solid var(--border-default)",
                    padding: "12px 8px",
                    boxShadow: "0 20px 50px var(--shadow-strong)",
                  }}
                >
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      onClick={() => setProductsOpen(false)}
                      className="block px-4 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors"
                      style={{ fontSize: 14, fontWeight: 500, color: "var(--text-bright)" }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="nav-link">
                {link.name}
              </Link>
            ))}

            {/* Resources dropdown */}
            <div ref={resourcesRef} className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center gap-1 bg-transparent border-none cursor-pointer"
                aria-expanded={resourcesOpen}
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
                Resources
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesOpen && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 rounded-2xl shadow-2xl overflow-hidden"
                  style={{
                    background: "var(--surface-panel)",
                    border: "1px solid var(--border-default)",
                    width: 360,
                    padding: "20px 24px",
                    boxShadow: "0 20px 50px var(--shadow-strong)",
                  }}
                >
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {resources.map((col, ci) => (
                      <div key={ci} className="space-y-1">
                        {col.map((item) =>
                          item.external ? (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setResourcesOpen(false)}
                              className="block py-2 px-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                              style={{ fontSize: 14, fontWeight: 500, color: "var(--text-bright)", textDecoration: "none" }}
                            >
                              {item.name}
                            </a>
                          ) : (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setResourcesOpen(false)}
                              className="block py-2 px-2 rounded-lg hover:bg-white/[0.06] transition-colors"
                              style={{ fontSize: 14, fontWeight: 500, color: "var(--text-bright)" }}
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>


            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Sign up
            </a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-text-primary p-1 relative z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block w-[120px]" />
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-4 sm:px-6 py-4">
          {/* Mobile Products */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full flex items-center justify-between py-3 text-sm text-text-secondary-strong hover:text-text-primary transition-colors"
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
                    className="block py-2.5 pl-4 text-sm text-text-secondary hover:text-orange transition-colors"
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
              className="block py-3 text-sm text-text-secondary-strong hover:text-text-primary transition-colors border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          {/* Mobile Resources */}
          <div className="border-b border-white/5">
            <button
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              className="w-full flex items-center justify-between py-3 text-sm text-text-secondary-strong hover:text-text-primary transition-colors"
            >
              Resources
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileResourcesOpen && (
              <div className="pb-2">
                {resourcesFlat.map((item) =>
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileResourcesOpen(false);
                      }}
                      className="block py-2.5 pl-4 text-sm text-text-secondary hover:text-orange transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileResourcesOpen(false);
                      }}
                      className="block py-2.5 pl-4 text-sm text-text-secondary hover:text-orange transition-colors"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            )}
          </div>
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-5 py-2.5 text-sm font-medium text-text-primary gradient-orange rounded-full text-center"
          >
            Sign up
          </a>
        </div>
      )}
    </nav>
  );
}
