"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";

const levers = [
  { label: "Planning Latency", value: "Hours \u2192 Minutes" },
  { label: "Aborted Mobilisations", value: "Reduced" },
  { label: "Missed Windows", value: "Fewer" },
  { label: "Part Surprises", value: "Eliminated" },
];

export default function Economics() {
  return (
    <section id="economics" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <SectionLabel>Economics</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
          >
            Economics (Order of Magnitude)
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[700px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Offshore wind O&amp;M economics are dominated by downtime hours and
            mobilisation costs &mdash; vessel and crew day rates, missed weather
            windows, and compounding delays.
          </motion.p>
        </motion.div>

        {/* Helm reduces */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-10 font-body text-[12px] font-semibold tracking-[2px] text-teal-dark"
        >
          HELM IS DESIGNED TO REDUCE
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-4 grid grid-cols-2 gap-0 lg:grid-cols-4"
        >
          {levers.map((l, i) => (
            <motion.div
              key={l.label}
              variants={fadeUp}
              className="border border-paper-border bg-paper-surface p-6"
              style={{ borderLeft: i === 0 ? undefined : "none" }}
            >
              <p className="font-display text-[24px] font-bold text-paper-text leading-none">
                {l.value}
              </p>
              <p className="mt-2 font-body text-[13px] text-paper-muted">
                {l.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout */}
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-14 border-l-2 border-teal pl-6"
        >
          <p className="font-display text-[20px] font-semibold leading-[1.4] text-paper-text">
            &ldquo;An aborted vessel day can cost five figures. A missed weather
            window can strand a turbine for days. Helm is designed to reduce
            both.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
