"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";

const integrations = [
  {
    label: "Fault Data",
    desc: "Fault flags and alarm summaries from OEM systems or existing monitoring platforms",
  },
  {
    label: "CMMS",
    desc: "Work order systems (e.g. SAP PM, Maximo)",
  },
  {
    label: "Weather",
    desc: "Weather and wave forecast APIs",
  },
  {
    label: "Vessels",
    desc: "Vessel schedules (CSV or email ingestion initially)",
  },
  {
    label: "Inventory",
    desc: "Availability and lead-time fields",
  },
];

export default function Integration() {
  return (
    <section id="integration" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <SectionLabel>Integration</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
          >
            Integration: Start Lightweight
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[700px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Helm does not require raw SCADA ingestion to deliver value. Initial
            integrations focus on the primitives operators already use.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-3 lg:grid-cols-5"
        >
          {integrations.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="border border-paper-border bg-paper-surface p-6"
              style={{ borderLeft: i === 0 ? undefined : "none" }}
            >
              <p className="font-body text-[11px] font-semibold tracking-[2px] text-teal-dark">
                {item.label.toUpperCase()}
              </p>
              <p className="mt-3 font-body text-[13px] leading-[1.6] text-paper-muted">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 font-display text-[20px] font-semibold leading-[1.4] text-teal-dark"
        >
          Helm&rsquo;s agents operate on the same primitives operators already
          use.
        </motion.p>
      </div>
    </section>
  );
}
