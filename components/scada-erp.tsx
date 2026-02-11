"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import {
  ShieldCheck,
  Waves,
  Timer,
  Anchor,
  Package,
  FileCheck,
} from "lucide-react";

const constraints = [
  { icon: ShieldCheck, text: "Safety certifications & access rules" },
  { icon: Waves, text: "Weather & wave limits by vessel type and task" },
  { icon: Timer, text: "Crew fatigue, shifts & certification validity" },
  { icon: Anchor, text: "Port, vessel & mobilisation logistics" },
  { icon: Package, text: "Parts readiness & substitution rules" },
  { icon: FileCheck, text: "Operator risk appetite & contract terms" },
];

export default function ScadaErp() {
  return (
    <section id="scada-erp" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <SectionLabel>Technical Differentiation</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
          >
            Why SCADA to ERP Doesn&rsquo;t Solve This
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[700px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            SCADA-to-ERP integrations move data. They do not make operational
            decisions. The real constraint is resolving competing operational
            constraints in real time:
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-2 gap-0 lg:grid-cols-3"
        >
          {constraints.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.text}
                variants={fadeUp}
                className="border border-paper-border bg-paper-surface p-6"
                style={{
                  borderLeft: i % 3 === 0 ? undefined : "none",
                  borderTop: i < 3 ? undefined : "none",
                }}
              >
                <Icon className="mb-3 h-5 w-5 text-paper-muted" strokeWidth={1.5} />
                <p className="font-body text-[14px] leading-[1.5] text-paper-text">
                  {c.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 font-display text-[20px] font-semibold leading-[1.4] text-teal-dark"
        >
          Helm is the decision layer that turns fragmented signals into a
          feasible daily plan.
        </motion.p>
      </div>
    </section>
  );
}
