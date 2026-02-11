"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import Image from "next/image";
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

        {/* Flow diagram SVG — now serves as the only "Inputs → Outcomes" visual */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-10 flex justify-center"
        >
          <Image
            src="/ink-flow.svg"
            alt="Agentic pipeline flow"
            width={750}
            height={375}
          />
        </motion.div>

        {/* 4-column detail grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={stagger}
          className="mt-6 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4"
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
                <Icon className="mb-4 h-5 w-5 text-paper-muted" strokeWidth={1.5} />
                <h3 className="font-display text-[16px] font-bold text-paper-text">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2">
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
      </div>
    </section>
  );
}
