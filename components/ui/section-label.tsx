"use client";

import { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="font-body text-[11px] font-semibold tracking-[2px] uppercase text-paper-muted">
      {children}
    </span>
  );
}
