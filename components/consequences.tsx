"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const items = [
  "Decisions take hours or days",
  "Mobilisation is conservative and slow",
  "Downtime compounds across the fleet",
  "Headcount scales linearly with assets",
  "O&M costs stay bloated post-warranty",
];

export default function Consequences() {
  return (
    <section className="bg-bg-primary px-16 py-24">
      <div className="flex flex-col items-center gap-6">
        <SectionLabel text="// AS_A_RESULT" color="text-orange" />
        <ScrollReveal>
          <h2 className="max-w-[900px] text-center font-heading text-[44px] font-semibold leading-[1.15] text-text-primary">
            This is not a data problem. It is a coordination and decision latency problem.
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mx-auto mt-14 flex max-w-[900px] flex-col gap-0"
      >
        {items.map((item, i) => (
          <motion.div
            key={item}
            variants={fadeUp}
            className="group flex items-center gap-6 border-b border-border/50 py-5 transition-colors"
          >
            <div className="flex h-2 w-2 shrink-0 rounded-full bg-orange shadow-[0_0_8px_rgba(255,132,0,0.4)]" />
            <p className="font-mono text-base leading-[1.6] text-text-muted group-hover:text-text-primary transition-colors">
              {item}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
