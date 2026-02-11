"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const metrics = [
  {
    label: "DOWNTIME",
    value: "Reduced",
    desc: "Faster fault-to-fix. Fewer missed weather windows.",
  },
  {
    label: "HEADCOUNT",
    value: "Efficient",
    desc: "Scale operations without scaling the team linearly.",
  },
  {
    label: "AVAILABILITY",
    value: "Predictable",
    desc: "Better planning yields more consistent energy production.",
  },
  {
    label: "POST-WARRANTY",
    value: "At Scale",
    desc: "Operate independently from OEMs at lower cost.",
  },
];

export default function Metrics() {
  return (
    <section className="bg-bg-primary px-16 py-20">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel text="// WHY_IT_MATTERS" />
          <ScrollReveal>
            <h2 className="max-w-[900px] text-center font-heading text-[40px] font-semibold leading-[1.2] text-text-primary">
              The system operators open first every morning.
            </h2>
          </ScrollReveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid w-full grid-cols-4 gap-px"
        >
          {metrics.map((m) => (
            <motion.div
              key={m.label}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 bg-surface px-7 py-10"
            >
              <span className="font-mono text-[11px] font-semibold tracking-[2px] text-teal">
                {m.label}
              </span>
              <span className="font-heading text-[28px] font-bold text-text-primary">
                {m.value}
              </span>
              <p className="text-center font-mono text-[11px] leading-[1.6] text-text-secondary">
                {m.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
