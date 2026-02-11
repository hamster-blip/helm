"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 pt-24 pb-10">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ delay: 0.2 }}
          className="mb-6 flex items-center gap-2.5 border border-paper-border px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-paper-text" />
          <span className="font-body text-[11px] font-medium tracking-[1.5px] text-paper-muted">
            OPERATIONAL ORCHESTRATION
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
          className="max-w-[900px] text-center font-display text-[72px] font-bold leading-[1.02] tracking-tight text-paper-text"
        >
          Mission Control for
          <br />
          Offshore Wind
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="mt-5 max-w-[580px] text-center font-body text-[17px] leading-[1.6] text-paper-muted"
        >
          Agentic AI that runs your daily planning and mobilisation loop.
          One system. One plan. Every morning.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/haamidadam"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper-text px-8 py-3.5 font-body text-[14px] font-semibold text-paper-bg transition-opacity hover:opacity-85"
          >
            Follow the Build
          </a>
          <a
            href="#how-it-works"
            className="border border-paper-border px-8 py-3.5 font-body text-[14px] font-medium text-paper-muted transition-colors hover:border-paper-text hover:text-paper-text"
          >
            How It Works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
