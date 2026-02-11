"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const items = [
  { num: "01", text: "Decisions take hours or days" },
  { num: "02", text: "Mobilisation is conservative and slow" },
  { num: "03", text: "Downtime compounds across the fleet" },
  { num: "04", text: "Headcount scales linearly with assets" },
  { num: "05", text: "O&M costs stay bloated post-warranty" },
];

export default function Consequences() {
  return (
    <section className="bg-bg-primary px-16 py-20">
      <div className="flex flex-col items-center gap-5">
        <SectionLabel text="// AS_A_RESULT" color="text-orange" />
        <ScrollReveal>
          <h2 className="max-w-[900px] text-center font-heading text-4xl font-semibold leading-[1.2] text-text-primary">
            This is not a data problem. It is a coordination and decision latency problem.
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-12 grid grid-cols-5 gap-px"
      >
        {items.map((item) => (
          <motion.div
            key={item.num}
            variants={fadeUp}
            className="flex flex-col items-center gap-3 bg-surface px-6 py-8"
          >
            <span className="font-heading text-[32px] font-bold text-orange">
              {item.num}
            </span>
            <p className="text-center font-mono text-xs leading-[1.6] text-text-muted">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
