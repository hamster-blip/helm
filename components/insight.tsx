"use client";

import { motion } from "framer-motion";
import { slideLeft, slideRight } from "@/lib/animations";
import { ArrowRight, Zap } from "lucide-react";
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
    <section id="solution" className="relative bg-bg-alt px-16 py-[100px]">
      <div className="flex flex-col items-center gap-14">
        <div className="flex flex-col items-center gap-5">
          <SectionLabel text="// THE_HELM_INSIGHT" />
          <ScrollReveal>
            <h2 className="text-center font-heading text-6xl font-bold text-text-primary">
              From Insight to Action
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="max-w-[800px] text-center font-mono text-base leading-[1.7] text-text-secondary">
              Existing platforms show alarms, KPIs, and dashboards. They stop at insight. Helm closes the loop from alarm to plan to mobilisation.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-stretch gap-0">
          {/* Before Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideLeft}
            className="flex flex-col gap-6 bg-surface p-10"
          >
            <span className="font-mono text-xs font-semibold tracking-[2px] text-orange">
              WITHOUT HELM
            </span>
            <div className="flex flex-col gap-4">
              {beforeItems.map((item, i) => (
                <div key={item.text} className="flex items-start gap-3">
                  <ArrowRight
                    className={`mt-1 h-4 w-4 shrink-0 ${
                      item.highlight ? "text-orange" : "text-border"
                    }`}
                    strokeWidth={1.5}
                  />
                  <p
                    className={`font-mono text-sm leading-[1.6] ${
                      item.highlight ? "font-semibold text-orange" : "text-text-secondary"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center divider */}
          <div className="flex w-px flex-col items-center bg-border/30">
            <div className="absolute top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 bg-bg-alt">
              <Zap className="h-4 w-4 text-teal" strokeWidth={2} />
            </div>
          </div>

          {/* After Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="flex flex-col gap-6 border border-teal/20 bg-[#0D1A1A] p-10"
          >
            <span className="font-mono text-xs font-semibold tracking-[2px] text-teal">
              WITH HELM
            </span>
            <div className="flex flex-col gap-4">
              {afterItems.map((item, i) => (
                <div key={item.text} className="flex items-start gap-3">
                  <ArrowRight
                    className={`mt-1 h-4 w-4 shrink-0 ${
                      item.highlight ? "text-teal" : "text-teal/40"
                    }`}
                    strokeWidth={1.5}
                  />
                  <p
                    className={`font-mono text-sm leading-[1.6] ${
                      item.highlight ? "font-semibold text-teal" : "text-text-light"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
