"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-bg-primary px-16 pt-[120px] pb-20">
      {/* Badge */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleIn}
        transition={{ delay: 0.3 }}
        className="mb-10 flex items-center gap-3 border border-border px-5 py-2"
      >
        <span className="h-2 w-2 rounded-full bg-teal" />
        <span className="font-mono text-[11px] font-medium tracking-[2px] text-teal">
          OPERATIONAL ORCHESTRATION PLATFORM
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.5 }}
        className="max-w-[1100px] text-center font-heading text-7xl font-bold leading-[1.05] text-text-primary"
      >
        Mission Control for Offshore Wind O&M
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.7 }}
        className="mt-6 max-w-[800px] text-center font-mono text-base leading-[1.7] text-text-secondary"
      >
        Agentic AI that runs your daily planning and mobilisation loop. One system. One plan. Every morning.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ delay: 0.9 }}
        className="mt-10 flex items-center gap-4"
      >
        <a
          href="#cta"
          className="bg-teal px-10 py-4 font-mono text-[13px] font-semibold tracking-[1px] text-bg-primary transition-opacity hover:opacity-90"
        >
          TALK TO THE FOUNDER
        </a>
        <a
          href="#how-it-works"
          className="border border-border px-10 py-4 font-mono text-[13px] font-medium tracking-[1px] text-text-secondary transition-colors hover:border-text-secondary hover:text-text-primary"
        >
          SEE HOW IT WORKS
        </a>
      </motion.div>
    </section>
  );
}
