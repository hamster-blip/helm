"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 px-6">
      <div className="mx-auto max-w-[700px] text-center">
        {/* Divider */}
        <div className="mx-auto mb-14 h-px w-full bg-paper-border" />

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-display text-[36px] font-bold leading-[1.1] text-paper-text"
        >
          Follow the Build
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="mt-4 font-body text-[16px] text-paper-muted"
        >
          Helm is being built for operators who are done with spreadsheet
          planning and email-driven mobilisation.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="https://www.linkedin.com/in/haamidadam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-paper-text px-10 py-4 font-body text-[15px] font-semibold text-paper-bg transition-opacity hover:opacity-85"
          >
            Follow the Build on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
