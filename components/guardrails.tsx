"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const cards = [
  {
    icon: "🛡",
    title: "Human Approval",
    desc: "Every recommendation requires human sign-off. Operators approve, override, or defer.",
  },
  {
    icon: "📄",
    title: "Audit Trails",
    desc: "Full traceability for every recommendation. Every assumption logged. Every constraint explained.",
  },
  {
    icon: "📊",
    title: "Confidence Scores",
    desc: "Every decision shows its confidence level and the constraints that shaped it.",
  },
  {
    icon: "🔒",
    title: "Safe Defaults",
    desc: "When uncertainty is high, Helm defaults to conservative action. No silent failures.",
  },
];

export default function Guardrails() {
  return (
    <section className="bg-bg-alt px-16 py-20">
      <div className="flex flex-col items-center gap-4">
        <SectionLabel text="// AUTONOMY_WITH_GUARDRAILS" />
        <ScrollReveal>
          <h2 className="text-center font-heading text-[40px] font-semibold text-text-primary">
            Designed for Mission-Critical Infrastructure
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mt-12 grid grid-cols-4 gap-4"
      >
        {cards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeUp}
            className="flex flex-col gap-4 border border-border bg-surface p-7"
          >
            <span className="text-2xl text-teal">{card.icon}</span>
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              {card.title}
            </h3>
            <p className="font-mono text-xs leading-[1.7] text-text-secondary">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
