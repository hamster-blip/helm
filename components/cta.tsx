"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const steps = [
  "Connect fault logs, crew rosters, and vessel plans",
  "Generate daily plans with confidence scores and constraints",
  "Measure improvement versus baseline planning time and aborted missions",
  "Operator retains full control at all times",
];

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 px-6">
      <div className="mx-auto max-w-[700px]">
        {/* Divider */}
        <div className="mx-auto mb-14 h-px w-full bg-paper-border" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-display text-[36px] font-bold leading-[1.1] text-paper-text"
          >
            Pilot in 30 Days
          </motion.h2>

          <motion.ul
            variants={stagger}
            className="mt-8 space-y-3 text-left"
          >
            {steps.map((step) => (
              <motion.li
                key={step}
                variants={fadeUp}
                className="flex items-start gap-3 font-body text-[15px] leading-[1.5] text-paper-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {step}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-10"
          >
            <a
              href="https://www.linkedin.com/in/haamidadam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-paper-text px-10 py-4 font-body text-[15px] font-semibold text-paper-bg transition-opacity hover:opacity-85"
            >
              Follow the Build
            </a>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-body text-[13px] text-paper-dim"
          >
            linkedin.com/in/haamidadam
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
