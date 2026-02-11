"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import ScrollReveal from "@/components/ui/scroll-reveal";

const beforeItems = [
  { text: "Alarm fires in OEM portal", highlight: false },
  { text: "Engineer checks weather separately", highlight: false },
  { text: "Emails crew coordinator", highlight: false },
  { text: "Calls vessel operator", highlight: false },
  { text: "Decision made hours later", highlight: true },
];

const afterItems = [
  { text: "Alarm ingested automatically", highlight: false },
  { text: "Cross-referenced with weather + access", highlight: false },
  { text: "Crew + vessel matched to task", highlight: false },
  { text: "Plan generated with confidence score", highlight: false },
  { text: "Decision ready in minutes", highlight: true },
];

export default function Insight() {
  return (
    <section id="solution" className="bg-bg-alt px-16 py-[100px]">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <SectionLabel text="// THE_HELM_INSIGHT" />
          <ScrollReveal>
            <h2 className="text-center font-heading text-[56px] font-bold text-text-primary">
              From Insight to Action
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="max-w-[800px] text-center font-mono text-[15px] leading-[1.7] text-text-secondary">
              Existing platforms show alarms, KPIs, and dashboards. They stop at insight. Helm closes the loop from alarm to plan to mobilisation.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid w-full grid-cols-2 gap-0.5">
          {/* Before Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="flex flex-col items-center gap-5 bg-surface px-8 py-10"
          >
            <span className="font-mono text-[11px] font-semibold tracking-[2px] text-orange">
              WITHOUT HELM
            </span>
            <div className="flex w-full flex-col gap-3">
              {beforeItems.map((item) => (
                <p
                  key={item.text}
                  className={`font-mono text-[13px] leading-[1.6] ${
                    item.highlight ? "text-orange" : "text-text-secondary"
                  }`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* After Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="flex flex-col items-center gap-5 border border-teal/20 bg-[#0D1A1A] px-8 py-10"
          >
            <span className="font-mono text-[11px] font-semibold tracking-[2px] text-teal">
              WITH HELM
            </span>
            <div className="flex w-full flex-col gap-3">
              {afterItems.map((item) => (
                <p
                  key={item.text}
                  className={`font-mono text-[13px] leading-[1.6] ${
                    item.highlight ? "font-semibold text-teal" : "text-text-light"
                  }`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
