"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 md:px-8 transition-all duration-300"
        style={{
          backgroundColor: scrolled || menuOpen ? "rgba(244, 241, 234, 0.92)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(212, 207, 196, 0.6)"
              : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/ink-turbine.svg"
            alt="Helm logo"
            width={56}
            height={46}
            style={{ filter: "contrast(1.6) brightness(0.6)" }}
          />
          <span className="font-display text-[28px] font-bold tracking-[4px] text-paper-text">
            HELM
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-[13px] font-medium text-paper-muted transition-colors hover:text-paper-text"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/haamidadam"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-paper-text bg-paper-text px-5 py-2 font-body text-[13px] font-semibold text-paper-bg transition-opacity hover:opacity-85"
          >
            Follow the Build
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-paper-text" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6 text-paper-text" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-16 z-40 md:hidden"
          style={{ backgroundColor: "rgba(244, 241, 234, 0.98)" }}
        >
          <div className="flex flex-col items-center gap-6 pt-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-[18px] font-medium text-paper-text transition-colors hover:text-paper-muted"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/haamidadam"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-4 border border-paper-text bg-paper-text px-8 py-3 font-body text-[15px] font-semibold text-paper-bg transition-opacity hover:opacity-85"
            >
              Follow the Build
            </a>
          </div>
        </div>
      )}
    </>
  );
}
