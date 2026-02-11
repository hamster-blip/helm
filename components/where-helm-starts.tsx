"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import { Building2, CalendarClock, BarChart3, ArrowRight } from "lucide-react";

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

        {/* Visual funnel: Customer → Workflow → KPIs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14"
        >
          <div className="flex flex-col items-stretch gap-0 lg:flex-row lg:items-start lg:gap-0">
            {/* Customer */}
            <motion.div
              variants={fadeUp}
              className="flex-1 border border-paper-border bg-paper-surface p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-border bg-paper-bg">
                  <Building2 className="h-4 w-4 text-paper-muted" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[16px] font-bold text-paper-text">
                  {wedge.customer.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {wedge.customer.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-[13px] leading-[1.6] text-paper-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper-dim" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow */}
            <motion.div variants={fadeIn} className="flex items-center justify-center py-2 lg:py-0 lg:px-0">
              <ArrowRight className="hidden lg:block h-5 w-5 text-paper-dim" />
              <span className="lg:hidden font-body text-paper-dim">↓</span>
            </motion.div>

            {/* Workflow */}
            <motion.div
              variants={fadeUp}
              className="flex-1 border border-paper-border bg-paper-surface p-6 lg:border-l-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-teal bg-teal/10">
                  <CalendarClock className="h-4 w-4 text-teal-dark" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[16px] font-bold text-paper-text">
                  {wedge.workflow.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {wedge.workflow.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-[13px] leading-[1.6] text-paper-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Arrow */}
            <motion.div variants={fadeIn} className="flex items-center justify-center py-2 lg:py-0 lg:px-0">
              <ArrowRight className="hidden lg:block h-5 w-5 text-paper-dim" />
              <span className="lg:hidden font-body text-paper-dim">↓</span>
            </motion.div>

            {/* KPIs */}
            <motion.div
              variants={fadeUp}
              className="flex-1 border border-paper-border bg-paper-surface p-6 lg:border-l-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-paper-border bg-paper-bg">
                  <BarChart3 className="h-4 w-4 text-paper-muted" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[16px] font-bold text-paper-text">
                  {wedge.kpis.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {wedge.kpis.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 font-body text-[13px] leading-[1.6] text-paper-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper-dim" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
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
