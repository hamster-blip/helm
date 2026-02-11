"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import {
  Database,
  BrainCircuit,
  Scale,
  Rocket,
} from "lucide-react";

const columns = [
  {
    icon: Database,
    heading: "Inputs",
    items: [
      "Turbine alarms (SCADA)",
      "Weather forecasts",
      "Crew rosters & certs",
      "Vessel schedules",
      "Parts inventory",
    ],
  },
  {
    icon: BrainCircuit,
    heading: "Agents",
    items: [
      "Triage agent",
      "Weather-window agent",
      "Crew-match agent",
      "Logistics agent",
      "Risk-scoring agent",
    ],
  },
  {
    icon: Scale,
    heading: "Decisions",
    items: [
      "Prioritised task list",
      "Crew–vessel pairing",
      "Go / No-Go recommendation",
      "Confidence score",
      "Escalation flags",
    ],
  },
  {
    icon: Rocket,
    heading: "Outcomes",
    items: [
      "Morning plan published",
      "Team mobilised",
      "Audit trail logged",
      "KPIs updated live",
      "Feedback loop closed",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <SectionLabel>How Helm Works</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
          >
            The Agentic Pipeline
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[560px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Multiple specialised AI agents work in concert — each responsible for one
            domain — producing a unified plan every morning.
          </motion.p>
        </motion.div>

        {/* Connected pipeline — nodes use same 4-col grid as cards to align perfectly */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mt-14"
        >
          {/* Pipeline header row — 4-col grid matching cards */}
          <div className="hidden lg:grid lg:grid-cols-4">
            {columns.map((col, i) => {
              const Icon = col.icon;
              const isLast = i === columns.length - 1;
              return (
                <motion.div key={col.heading} variants={fadeUp} className="relative flex flex-col items-center">
                  {/* Node circle */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full border ${isLast ? "border-teal bg-teal/10" : "border-paper-border bg-paper-bg"}`}>
                    <Icon className={`h-5 w-5 ${isLast ? "text-teal-dark" : "text-paper-muted"}`} strokeWidth={1.5} />
                  </div>
                  <p className={`mt-2 font-display text-[13px] font-bold ${isLast ? "text-teal-dark" : "text-paper-text"}`}>
                    {col.heading}
                  </p>
                  {/* Dashed arrow to next node — spans from right edge of this cell to left edge of next */}
                  {i < columns.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+30px)] right-[-50%+30px]" style={{ right: "calc(-50% + 30px)" }}>
                      <div className="flex items-center w-full">
                        <div className="flex-1 border-t border-dashed border-paper-dim" />
                        <svg width="6" height="10" viewBox="0 0 6 10" className="shrink-0 ml-[-1px]">
                          <polygon points="0,0 6,5 0,10" fill="#9A9A8A" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {/* Vertical connector down to card */}
                  <div className="mt-2 h-4 w-px border-l border-dashed border-paper-dim" />
                </motion.div>
              );
            })}
          </div>

          {/* 4-column detail grid */}
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
          >
            {columns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div
                  key={col.heading}
                  variants={fadeUp}
                  className="border border-paper-border bg-paper-surface p-6"
                  style={{
                    borderLeft: i === 0 ? undefined : "none",
                  }}
                >
                  {/* Mobile-only icon header */}
                  <div className="flex items-center gap-2 mb-4 lg:hidden">
                    <Icon className="h-4 w-4 text-paper-muted" strokeWidth={1.5} />
                    <h3 className="font-display text-[16px] font-bold text-paper-text">
                      {col.heading}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li
                        key={item}
                        className="font-body text-[13px] leading-[1.6] text-paper-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
