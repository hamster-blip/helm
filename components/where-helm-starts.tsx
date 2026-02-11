"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import { Building2, CalendarClock, BarChart3 } from "lucide-react";

const wedge = {
  customer: {
    icon: Building2,
    title: "Target Customer",
    points: [
      "Post-warranty wind asset owner/operator",
      "Managing 0.5–5 GW with internal O&M team",
      "Third-party vessels and contractors",
    ],
  },
  workflow: {
    icon: CalendarClock,
    title: "First Workflow",
    points: [
      "Daily planning for corrective maintenance",
      "Constrained by weather, access, and parts",
      "Currently manual — senior engineers every morning",
    ],
  },
  kpis: {
    icon: BarChart3,
    title: "First KPIs",
    points: [
      "Fault-to-plan time",
      "Aborted mobilisations (%)",
      "Downtime hours avoided",
      "Vessel utilisation",
      "Schedule adherence",
    ],
  },
};

const steps = [wedge.customer, wedge.workflow, wedge.kpis];

export default function WhereHelmStarts() {
  return (
    <section id="where-helm-starts" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center"
        >
          <SectionLabel>Commercial Wedge</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
          >
            Where Helm Starts
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-[600px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Who buys first, for what exact job, and how success is measured.
          </motion.p>
        </motion.div>

        {/* Visual flow: 3 cards with arrows between them */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14"
        >
          {/* Use a 3-col grid with arrows overlaid on the borders between cards */}
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isMiddle = i === 1;
              return (
                <motion.div key={step.title} variants={fadeUp} className="relative">
                  <div
                    className={`h-full border border-paper-border bg-paper-surface p-6 ${i > 0 ? "lg:border-l-0" : ""
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full border ${isMiddle ? "border-teal bg-teal/10" : "border-paper-border bg-paper-bg"
                          }`}
                      >
                        <Icon
                          className={`h-4 w-4 ${isMiddle ? "text-teal-dark" : "text-paper-muted"}`}
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="font-display text-[16px] font-bold text-paper-text">
                        {step.title}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {step.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-start gap-2 font-body text-[13px] leading-[1.6] text-paper-muted"
                        >
                          <span
                            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${isMiddle ? "bg-teal" : "bg-paper-dim"
                              }`}
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow overlay — sits on top of the right border, centered vertically */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-paper-bg border border-paper-border">
                        <svg width="10" height="10" viewBox="0 0 10 10">
                          <polygon points="2,0 10,5 2,10" fill="#9A9A8A" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom label */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-center font-body text-[13px] font-semibold text-teal-dark"
          >
            Narrow enough to prove. Broad enough to scale.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
