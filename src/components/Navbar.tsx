"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Feature", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Discord", href: "https://discord.gg/Tcw88yu6q" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo - left aligned */}
        <a href="#home" className="shrink-0 relative z-10">
          <Image
            src="/assets/logo/Walnut-White.png"
            alt="WalnutAI"
            width={180}
            height={60}
            className="w-[130px] sm:w-[180px] h-auto"
            priority
          />
        </a>

        {/* Desktop Nav - absolutely centered on page */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="nav-pill">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              Contact Us
            </a>
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

        {/* Empty spacer for desktop to maintain layout */}
        <div className="hidden md:block w-[120px]" />
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/5 px-4 sm:px-6 py-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-gray-300 hover:text-white transition-colors border-b border-white/5 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-5 py-2.5 text-sm font-medium text-white gradient-orange rounded-full text-center"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
