"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import SectionLabel from "@/components/ui/section-label";

const credentials = [
  "MIT Sloan",
  "Chartered Engineer",
  "Offshore wind development experience in Japan and Taiwan",
];

export default function Founder() {
  return (
    <section id="founder" className="bg-bg-primary px-16 py-20">
      <ScrollReveal>
        <div className="flex items-center gap-16">
          {/* Avatar */}
          <div className="flex h-[200px] w-[200px] shrink-0 items-center justify-center border border-border bg-surface">
            <span className="font-heading text-5xl font-bold text-text-dim">HA</span>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            <SectionLabel text="// FOUNDER" />
            <h2 className="font-heading text-4xl font-bold text-text-primary">
              Haamid Adam
            </h2>
            <div className="flex flex-col gap-2">
              {credentials.map((c) => (
                <p key={c} className="font-mono text-sm leading-[1.6] text-text-muted">
                  {c}
                </p>
              ))}
            </div>
            <p className="max-w-[600px] font-mono text-[13px] font-medium leading-[1.7] text-text-secondary">
              This is not speculative AI. This is applied operational intelligence.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
