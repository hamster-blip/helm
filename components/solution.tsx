"use client";

import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import Image from "next/image";

const without = [
    "Alarm fires in OEM portal",
    "Engineer checks weather separately",
    "Emails crew coordinator",
    "Calls vessel operator",
];

const withHelm = [
    "Alarm ingested automatically",
    "Cross-referenced with weather + access",
    "Crew + vessel matched to task",
    "Plan generated with confidence score",
];

export default function Solution() {
    return (
        <section id="solution" className="relative py-24 px-6">
            <div className="mx-auto max-w-[1100px]">
                {/* Header with compass SVG */}
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={stagger}
                    >
                        <SectionLabel>The Helm Approach</SectionLabel>
                        <motion.h2
                            variants={fadeUp}
                            className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
                        >
                            From Alarm to Action Plan
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            className="mt-4 max-w-[600px] font-body text-[16px] leading-[1.7] text-paper-muted"
                        >
                            Existing platforms show alarms, KPIs, and dashboards. They stop at
                            insight. Helm closes the loop — from alarm to plan to mobilisation.
                        </motion.p>
                    </motion.div>

                    {/* Compass SVG */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideLeft}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <Image
                            src="/ink-compass.svg"
                            alt="Helm compass navigation"
                            width={220}
                            height={170}
                            className="opacity-70"
                        />
                    </motion.div>
                </div>

                {/* Before / After */}
                <div className="mt-14 grid grid-cols-1 gap-0 md:grid-cols-2">
                    {/* Without */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideRight}
                        className="border border-paper-border bg-paper-surface p-8"
                    >
                        <span className="font-body text-[11px] font-semibold tracking-[2px] text-orange">
                            WITHOUT HELM
                        </span>
                        <ul className="mt-5 space-y-4">
                            {without.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 font-body text-[14px] text-paper-muted"
                                >
                                    <span className="mt-0.5 text-paper-dim">→</span> {item}
                                </li>
                            ))}
                            <li className="flex items-start gap-3 font-body text-[14px] font-semibold text-orange">
                                <span className="mt-0.5">→</span> Decision made hours later
                            </li>
                        </ul>
                    </motion.div>

                    {/* With Helm */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideLeft}
                        className="border border-paper-border bg-paper-surface p-8 md:border-l-0"
                        style={{
                            borderLeft: "3px solid var(--color-teal)",
                        }}
                    >
                        <span className="font-body text-[11px] font-semibold tracking-[2px] text-teal-dark">
                            WITH HELM
                        </span>
                        <ul className="mt-5 space-y-4">
                            {withHelm.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-start gap-3 font-body text-[14px] text-paper-text"
                                >
                                    <span className="mt-0.5 text-teal">→</span> {item}
                                </li>
                            ))}
                            <li className="flex items-start gap-3 font-body text-[14px] font-semibold text-teal-dark">
                                <span className="mt-0.5">→</span> Decision ready in minutes
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
