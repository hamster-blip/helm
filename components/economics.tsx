"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";

const costLines = [
  {
    label: "CTV day rate",
    range: "$10k–25k",
    note: "per vessel, per day — wasted on an aborted mobilisation",
  },
  {
    label: "SOV day rate",
    range: "$80k–150k+",
    note: "chartered whether used efficiently or not",
  },
  {
    label: "Single turbine offline",
    range: "$5k–15k/day",
    note: "in lost revenue, compounding across the fleet",
  },
  {
    label: "Missed weather window",
    range: "3–7 days",
    note: "until the next viable access — one missed slot cascades",
  },
];

export default function Economics() {
  return (
    <section id="economics" className="relative py-24 px-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <SectionLabel>The Cost of the Status Quo</SectionLabel>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
          >
            Where the Money Goes
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-[700px] font-body text-[16px] leading-[1.7] text-paper-muted"
          >
            Offshore wind O&amp;M costs are dominated by two things: downtime
            and mobilisation. Every hour of decision latency compounds into
            vessel costs, lost generation, and stranded crews.
          </motion.p>
        </motion.div>

        {/* Cost breakdown — stacked rows, not boxes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="mt-14 border-t border-paper-border"
        >
          {costLines.map((line) => (
            <motion.div
              key={line.label}
              variants={fadeUp}
              className="grid grid-cols-[160px_120px_1fr] items-baseline gap-6 border-b border-paper-border py-5 sm:grid-cols-[200px_140px_1fr]"
            >
              <span className="font-body text-[14px] font-semibold text-paper-text">
                {line.label}
              </span>
              <span className="font-display text-[22px] font-bold text-paper-text leading-none">
                {line.range}
              </span>
              <span className="font-body text-[13px] leading-[1.5] text-paper-muted">
                {line.note}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* What Helm targets */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="mt-16"
        >
          <motion.p
            variants={fadeUp}
            className="font-body text-[12px] font-semibold tracking-[2px] text-teal-dark"
          >
            HELM IS DESIGNED TO REDUCE
          </motion.p>
          <motion.div
            variants={stagger}
            className="mt-6 flex flex-col gap-5 sm:flex-row sm:gap-10"
          >
            {[
              { metric: "Planning latency", from: "hours", to: "minutes" },
              { metric: "Aborted mobilisations", from: "routine", to: "rare" },
              { metric: "Missed weather windows", from: "frequent", to: "exception" },
            ].map((item) => (
              <motion.div key={item.metric} variants={fadeUp} className="flex-1">
                <p className="font-display text-[15px] font-bold text-paper-text">
                  {item.metric}
                </p>
                <p className="mt-1 font-body text-[13px] text-paper-muted">
                  From{" "}
                  <span className="text-orange line-through">{item.from}</span>
                  {" → "}
                  <span className="font-semibold text-teal-dark">{item.to}</span>
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Callout */}
        <motion.blockquote
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 border-l-2 border-teal pl-6"
        >
          <p className="font-display text-[20px] font-semibold leading-[1.4] text-paper-text">
            &ldquo;An aborted vessel day can cost five figures. A missed weather
            window can strand a turbine for days. Helm is designed to reduce
            both.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
