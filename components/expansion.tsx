"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const tags = ["ONSHORE WIND", "UTILITY-SCALE SOLAR", "STORAGE", "HYBRID PLANTS"];

export default function Expansion() {
  return (
    <section className="bg-bg-alt px-16 py-20">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel text="// BEYOND_OFFSHORE_WIND" />
          <ScrollReveal>
            <h2 className="text-center font-heading text-[40px] font-semibold text-text-primary">
              Asset-Agnostic by Design
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="max-w-[800px] text-center font-mono text-sm leading-[1.7] text-text-secondary">
              The same daily planning problem exists wherever assets are remote, weather-dependent, and expensive to maintain. Helm starts offshore because the pain is sharpest and the ROI is clearest.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag}
              variants={fadeUp}
              className="border border-border px-5 py-2.5 font-mono text-[11px] font-medium tracking-[1px] text-text-secondary"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
