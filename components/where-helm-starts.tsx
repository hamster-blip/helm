"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import { Building2, CalendarClock, BarChart3 } from "lucide-react";

const cards = [
  {
    icon: Building2,
    title: "Target Customer",
    desc: "Post-warranty wind asset owner/operator (not OEM). Managing 0.5\u20135 GW with an internal O&M team and third-party vessels and contractors.",
  },
  {
    icon: CalendarClock,
    title: "First Workflow",
    desc: "Daily planning and mobilisation for corrective maintenance and deferred defects. Constrained by weather windows, access rules, and parts readiness.",
  },
  {
    icon: BarChart3,
    title: "First KPIs",
    desc: "Fault-to-plan time. Percentage of aborted mobilisations. Downtime hours avoided. Vessel utilisation. Schedule adherence.",
  },
];

export default function WhereHelmStarts() {
  return (
    <section id="where-helm-starts" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
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
            className="mt-4 max-w-[600px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Who buys first, for what exact job, and how success is measured.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-3"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="border border-paper-border bg-paper-surface p-6"
                style={{ borderLeft: i === 0 ? undefined : "none" }}
              >
                <Icon className="mb-3 h-5 w-5 text-paper-muted" strokeWidth={1.5} />
                <h3 className="font-display text-[15px] font-bold text-paper-text">
                  {card.title}
                </h3>
                <p className="mt-2 font-body text-[13px] leading-[1.6] text-paper-muted">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
