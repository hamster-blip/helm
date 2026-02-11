"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const painCards = [
  {
    icon: "⚠",
    title: "Turbine alarms",
    desc: "Live in OEM portals. Siloed by manufacturer.",
  },
  {
    icon: "🌧",
    title: "Weather forecasts",
    desc: "Separate tools. No link to work orders.",
  },
  {
    icon: "👥",
    title: "Crew rosters",
    desc: "Live in spreadsheets. Updated manually.",
  },
  {
    icon: "🚢",
    title: "Vessel availability",
    desc: "Tracked via email. No real-time visibility.",
  },
  {
    icon: "📦",
    title: "Spare parts",
    desc: "Buried in SAP. Lead times unknown at planning time.",
  },
  {
    icon: "📋",
    title: "Daily planning",
    desc: "Done manually by senior engineers. Every morning.",
  },
];

export default function Reality() {
  return (
    <section id="problem" className="bg-bg-alt px-16 py-20">
      <div className="flex flex-col gap-4">
        <SectionLabel text="// THE_REALITY_TODAY" />
        <ScrollReveal>
          <h2 className="max-w-[800px] font-heading text-[40px] font-semibold leading-[1.15] text-text-primary">
            Offshore wind O&M is still run like a manual control room.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-[700px] font-mono text-sm leading-[1.7] text-text-secondary">
            Six critical systems. Zero coordination. Every decision routed through senior engineers and email chains.
          </p>
        </ScrollReveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-12 grid grid-cols-3 gap-4"
      >
        {painCards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="flex flex-col gap-4 border border-border bg-surface p-6"
          >
            <span className="text-xl text-orange">{card.icon}</span>
            <h3 className="font-heading text-base font-semibold text-text-primary">
              {card.title}
            </h3>
            <p className="font-mono text-xs leading-[1.6] text-text-secondary">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
