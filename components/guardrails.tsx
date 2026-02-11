"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ShieldCheck, FileText, Gauge, Lock } from "lucide-react";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const cards = [
  {
    Icon: ShieldCheck,
    title: "Human Approval",
    desc: "Every recommendation requires human sign-off. Operators approve, override, or defer.",
  },
  {
    Icon: FileText,
    title: "Audit Trails",
    desc: "Full traceability for every recommendation. Every assumption logged. Every constraint explained.",
  },
  {
    Icon: Gauge,
    title: "Confidence Scores",
    desc: "Every decision shows its confidence level and the constraints that shaped it.",
  },
  {
    Icon: Lock,
    title: "Safe Defaults",
    desc: "When uncertainty is high, Helm defaults to conservative action. No silent failures.",
  },
];

export default function Guardrails() {
  return (
    <section className="bg-bg-alt px-16 py-24">
      <div className="flex flex-col items-center gap-5">
        <SectionLabel text="// AUTONOMY_WITH_GUARDRAILS" />
        <ScrollReveal>
          <h2 className="text-center font-heading text-5xl font-semibold text-text-primary">
            Designed for Mission-Critical Infrastructure
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-14 grid grid-cols-4 gap-4"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="group relative flex flex-col gap-5 border border-border bg-surface p-8 transition-colors hover:border-teal/30"
          >
            <div className="absolute top-6 left-6 h-12 w-12 rounded-full bg-teal/10 blur-xl" />
            <card.Icon className="relative h-7 w-7 text-teal" strokeWidth={1.5} />
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              {card.title}
            </h3>
            <p className="font-mono text-sm leading-[1.7] text-text-secondary">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
