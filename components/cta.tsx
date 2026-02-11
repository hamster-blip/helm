"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function CTA() {
  return (
    <section id="cta" className="flex flex-col items-center gap-10 bg-bg-alt px-16 py-[100px]">
      <ScrollReveal>
        <h2 className="max-w-[900px] text-center font-heading text-5xl font-bold leading-[1.15] text-text-primary">
          Ready to Run Your Operations Differently?
        </h2>
      </ScrollReveal>
      <ScrollReveal>
        <p className="max-w-[700px] text-center font-mono text-[15px] leading-[1.7] text-text-secondary">
          Helm is being built for operators who are done with spreadsheet planning and email-driven mobilisation.
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <a
          href="https://www.linkedin.com/in/haamidadam"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal px-14 py-5 font-mono text-sm font-bold tracking-[2px] text-bg-primary transition-opacity hover:opacity-90"
        >
          TALK TO THE FOUNDER
        </a>
      </ScrollReveal>
      <ScrollReveal>
        <a
          href="https://www.linkedin.com/in/haamidadam"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-teal transition-opacity hover:opacity-80"
        >
          linkedin.com/in/haamidadam
        </a>
      </ScrollReveal>
    </section>
  );
}
