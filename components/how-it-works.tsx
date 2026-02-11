"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainerSlow } from "@/lib/animations";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const columns = [
  {
    header: "INPUTS",
    items: [
      "Fault flags / alarms",
      "Weather + wave forecasts",
      "Access constraints",
      "Crew rosters + certs",
      "Vessel availability",
      "Inventory signals",
    ],
  },
  {
    header: "AGENTS",
    items: [
      { name: "Planning Agent", desc: "Builds the daily plan" },
      { name: "Replanning Agent", desc: "Updates as conditions change" },
      { name: "Constraints Agent", desc: "Enforces safety + certs + access" },
      { name: "Parts Readiness Agent", desc: "Flags inventory + lead-time risk" },
      { name: "Closeout Agent", desc: "Converts notes into learning" },
    ],
  },
  {
    header: "DECISIONS",
    items: [
      "Ranked priorities",
      "Mobilisation plan",
      "Crew + vessel assignments",
      "Act now / defer / monitor",
      "Confidence + constraints",
    ],
  },
  {
    header: "OUTCOMES",
    items: [
      "Faster mobilisation",
      "Fewer aborted missions",
      "Reduced downtime",
      "Scalable operations",
      "Lower headcount growth",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-bg-primary px-16 py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-teal/[0.02] blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center gap-5">
          <SectionLabel text="// HOW_HELM_WORKS" />
          <ScrollReveal>
            <h2 className="text-center font-heading text-[56px] font-bold text-text-primary">
              Inputs. Agents. Decisions. Outcomes.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="max-w-[700px] text-center font-mono text-base leading-[1.7] text-text-secondary">
              Helm runs a continuous loop. Operational signals flow in. Ranked, cost-aware plans flow out.
            </p>
          </ScrollReveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerSlow}
          className="mt-16 grid grid-cols-4 gap-0"
        >
          {columns.map((col, colIdx) => (
            <motion.div key={col.header} variants={fadeUp} className="relative flex flex-col">
              {/* Arrow connector */}
              {colIdx < 3 && (
                <div className="absolute -right-3 top-8 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-bg-primary">
                  <ArrowRight className="h-3 w-3 text-teal" strokeWidth={2} />
                </div>
              )}
              <div className="bg-teal px-5 py-4">
                <span className="font-mono text-xs font-bold tracking-[2px] text-bg-primary">
                  {col.header}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 border border-border bg-surface p-6">
                {col.items.map((item) =>
                  typeof item === "string" ? (
                    <p key={item} className="font-mono text-sm leading-[1.6] text-text-muted">
                      {item}
                    </p>
                  ) : (
                    <div key={item.name} className="flex flex-col gap-1">
                      <span className="font-heading text-base font-semibold text-text-primary">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs leading-[1.5] text-text-secondary">
                        {item.desc}
                      </span>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
