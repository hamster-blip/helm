"use client";

import type { ReactNode } from "react";

interface SectionPaperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionPaper({ children, className = "", id }: SectionPaperProps) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden bg-paper-bg text-paper-text ${className}`}
    >
      {/* Paper grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(0,0,0,0.03) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.02) 1px, transparent 1px)",
          backgroundSize: "4px 4px, 6px 6px",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-16">
        {children}
      </div>
    </section>
  );
}
