"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import {
  AlertTriangle,
  Wrench,
  CloudSun,
  Ship,
  Package,
  ArrowDown,
} from "lucide-react";

const sources = [
  { icon: AlertTriangle, label: "Fault Data", sub: "OEM alarm summaries" },
  { icon: Wrench, label: "CMMS", sub: "SAP PM, Maximo" },
  { icon: CloudSun, label: "Weather", sub: "Wind & wave forecasts" },
  { icon: Ship, label: "Vessels", sub: "CTV & SOV schedules" },
  { icon: Package, label: "Inventory", sub: "Parts & lead times" },
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
            Start Lightweight
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[700px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Helm does not require raw SCADA ingestion to deliver value. Initial
            integrations focus on the primitives operators already use.
          </motion.p>
        </motion.div>

        {/* Convergence diagram */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-16"
        >
          {/* Source nodes */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {sources.map((s) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-paper-border bg-paper-surface">
                    <Icon className="h-5 w-5 text-paper-muted" strokeWidth={1.5} />
                  </div>
                  <p className="mt-3 font-display text-[14px] font-bold text-paper-text">
                    {s.label}
                  </p>
                  <p className="mt-1 font-body text-[12px] text-paper-muted">
                    {s.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Connector lines — vertical stubs + horizontal bar */}
          <motion.div variants={fadeIn} className="relative mt-6">
            {/* Vertical dashed stubs from each node */}
            <div className="hidden lg:grid lg:grid-cols-5">
              {sources.map((s) => (
                <div key={s.label} className="flex justify-center">
                  <div className="h-8 w-px border-l border-dashed border-paper-dim" />
                </div>
              ))}
            </div>
            {/* Horizontal connecting bar */}
            <div className="hidden lg:block">
              <div className="mx-auto h-px w-full bg-paper-dim" />
            </div>
            {/* Center vertical line down */}
            <div className="flex justify-center">
              <div className="h-10 w-px border-l border-dashed border-paper-dim" />
            </div>
          </motion.div>

          {/* Helm hub */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 border border-paper-border bg-paper-surface px-8 py-4">
              <div className="h-2.5 w-2.5 rounded-full bg-teal" />
              <span className="font-display text-[18px] font-bold tracking-tight text-paper-text">
                Helm
              </span>
            </div>
          </motion.div>

          {/* Arrow down to output */}
          <motion.div variants={fadeIn} className="flex justify-center">
            <ArrowDown className="my-3 h-5 w-5 text-paper-dim" strokeWidth={1.5} />
          </motion.div>

          {/* Output */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center text-center"
          >
            <p className="font-display text-[22px] font-bold text-teal-dark">
              Feasible Daily Plan
            </p>
            <p className="mt-2 max-w-[400px] font-body text-[13px] leading-[1.6] text-paper-muted">
              Crew assignments, vessel routing, weather-window timing,
              parts allocation — ready for operator approval.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
