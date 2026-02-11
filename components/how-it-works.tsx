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
    color: "text-paper-muted",
    borderColor: "border-paper-border",
    bgColor: "bg-paper-bg",
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
    color: "text-paper-muted",
    borderColor: "border-paper-border",
    bgColor: "bg-paper-bg",
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
    color: "text-paper-muted",
    borderColor: "border-paper-border",
    bgColor: "bg-paper-bg",
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
    color: "text-teal-dark",
    borderColor: "border-teal",
    bgColor: "bg-teal/10",
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

        {/* Connected pipeline: node → arrow → node → arrow → ... with cards below */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mt-14"
        >
          {/* Pipeline header row: circles + arrows */}
          <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-0">
            {columns.map((col, i) => {
              const Icon = col.icon;
              return (
                <motion.div key={col.heading} variants={fadeUp} className="flex items-center">
                  {/* Node */}
                  <div className="flex flex-col items-center">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-full border-2 ${col.borderColor} ${col.bgColor}`}>
                      <Icon className={`h-6 w-6 ${col.color}`} strokeWidth={1.5} />
                    </div>
                    <p className={`mt-2 font-display text-[13px] font-bold ${i === columns.length - 1 ? "text-teal-dark" : "text-paper-text"}`}>
                      {col.heading}
                    </p>
                  </div>
                  {/* Arrow between nodes */}
                  {i < columns.length - 1 && (
                    <div className="mx-6 flex items-center">
                      <div className="w-16 border-t border-dashed border-paper-dim" />
                      <svg width="8" height="12" viewBox="0 0 8 12" className="ml-[-1px]">
                        <polygon points="0,0 8,6 0,12" fill="#9A9A8A" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Vertical connectors from pipeline nodes to cards */}
          <div className="hidden lg:grid lg:grid-cols-4 mt-3">
            {columns.map((col) => (
              <div key={col.heading} className="flex justify-center">
                <div className="h-6 w-px border-l border-dashed border-paper-dim" />
              </div>
            ))}
          </div>

          {/* 4-column detail grid */}
          <motion.div
            variants={stagger}
            className="mt-0 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
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
