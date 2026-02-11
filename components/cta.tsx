"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative flex flex-col items-center gap-12 overflow-hidden bg-bg-alt px-16 py-[120px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[400px] w-[600px] rounded-full bg-teal/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        <ScrollReveal>
          <h2 className="max-w-[900px] text-center font-heading text-6xl font-bold leading-[1.1] text-text-primary">
            Ready to Run Your Operations Differently?
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-[700px] text-center font-mono text-base leading-[1.7] text-text-secondary">
            Helm is being built for operators who are done with spreadsheet planning and email-driven mobilisation.
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <a
            href="https://www.linkedin.com/in/haamidadam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal px-14 py-5 font-mono text-base font-bold tracking-[2px] text-bg-primary shadow-[0_0_40px_rgba(0,212,170,0.2)] transition-all hover:shadow-[0_0_60px_rgba(0,212,170,0.3)]"
          >
            TALK TO THE FOUNDER
          </a>
        </ScrollReveal>
        <ScrollReveal>
          <a
            href="https://www.linkedin.com/in/haamidadam"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-teal transition-opacity hover:opacity-80"
          >
            linkedin.com/in/haamidadam
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
