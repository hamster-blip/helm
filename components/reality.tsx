"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  AlertTriangle,
  CloudRain,
  Users,
  Ship,
  Package,
  ClipboardList,
} from "lucide-react";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const painCards = [
  {
    Icon: AlertTriangle,
    title: "Turbine Alarms",
    desc: "Live in OEM portals. Siloed by manufacturer.",
  },
  {
    Icon: CloudRain,
    title: "Weather Forecasts",
    desc: "Separate tools. No link to work orders.",
  },
  {
    Icon: Users,
    title: "Crew Rosters",
    desc: "Live in spreadsheets. Updated manually.",
  },
  {
    Icon: Ship,
    title: "Vessel Availability",
    desc: "Tracked via email. No real-time visibility.",
  },
  {
    Icon: Package,
    title: "Spare Parts",
    desc: "Buried in SAP. Lead times unknown at planning time.",
  },
  {
    Icon: ClipboardList,
    title: "Daily Planning",
    desc: "Done manually by senior engineers. Every morning.",
  },
];

export default function Reality() {
  return (
    <section id="problem" className="relative bg-bg-alt px-16 py-24">
      <div className="flex flex-col gap-5">
        <SectionLabel text="// THE_REALITY_TODAY" />
        <ScrollReveal>
          <h2 className="max-w-[800px] font-heading text-5xl font-semibold leading-[1.1] text-text-primary">
            Offshore wind O&M is still run like a manual control room.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="max-w-[700px] font-mono text-base leading-[1.7] text-text-secondary">
            Six critical systems. Zero coordination. Every decision routed through senior engineers and email chains.
          </p>
        </ScrollReveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-3 gap-4"
      >
        {painCards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="group relative flex flex-col gap-5 border border-border bg-surface p-8 transition-colors hover:border-orange/30"
          >
            {/* Icon glow */}
            <div className="absolute top-6 left-6 h-12 w-12 rounded-full bg-orange/10 blur-xl" />
            <card.Icon className="relative h-6 w-6 text-orange" strokeWidth={1.5} />
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              {card.title}
            </h3>
            <p className="font-mono text-sm leading-[1.6] text-text-secondary">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
