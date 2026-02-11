"use client";

import type { ReactNode } from "react";

interface SectionDarkProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export default function SectionDark({ children, className = "", id, noPadding }: SectionDarkProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-dark-bg text-dark-text ${className}`}
    >
      {/* Scanline texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.015) 2px, rgba(255,255,255,0.015) 4px)",
        }}
      />
      <div className={noPadding ? "relative" : "relative mx-auto max-w-[1200px] px-6 py-20"}>
        {children}
      </div>
    </section>
  );
}
