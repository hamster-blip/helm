"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-8 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(244, 241, 234, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(212, 207, 196, 0.6)"
          : "1px solid transparent",
      }}
    >
      {/* Logo: ink-turbine SVG + HELM text */}
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

      <div className="flex items-center gap-8">
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
    </nav>
  );
}
