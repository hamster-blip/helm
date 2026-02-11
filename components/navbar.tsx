"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "PROBLEM", href: "#problem" },
  { label: "SOLUTION", href: "#solution" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "FOUNDER", href: "#founder" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex h-[72px] items-center justify-between px-16 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 14, 20, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <span className="font-heading text-2xl font-bold tracking-[4px] text-text-primary">
        HELM
      </span>
      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-mono text-[11px] font-medium tracking-[2px] text-text-secondary transition-colors hover:text-text-primary"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#cta"
          className="bg-teal px-6 py-2.5 font-mono text-[11px] font-semibold tracking-[1px] text-bg-primary transition-opacity hover:opacity-90"
        >
          TALK TO FOUNDER
        </a>
      </div>
    </motion.nav>
  );
}
