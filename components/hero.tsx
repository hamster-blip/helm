"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-bg-primary px-16 pt-[120px] pb-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[800px] rounded-full bg-teal/[0.03] blur-[120px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ delay: 0.3 }}
          className="mb-10 flex items-center gap-3 border border-border px-5 py-2"
        >
          <span className="h-2 w-2 rounded-full bg-teal shadow-[0_0_8px_rgba(0,212,170,0.6)]" />
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
          className="max-w-[1100px] text-center font-heading text-8xl font-bold leading-[1.02] text-text-primary"
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
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-[800px] text-center font-mono text-lg leading-[1.7] text-text-secondary"
        >
          Agentic AI that runs your daily planning and mobilisation loop.
          <br />
          One system. One plan. Every morning.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.9 }}
          className="mt-12 flex items-center gap-4"
        >
          <a
            href="#cta"
            className="bg-teal px-10 py-4 font-mono text-[13px] font-semibold tracking-[1px] text-bg-primary shadow-[0_0_30px_rgba(0,212,170,0.2)] transition-all hover:shadow-[0_0_40px_rgba(0,212,170,0.3)]"
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
      </div>
    </section>
  );
}
