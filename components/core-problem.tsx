"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";

const silos = [
    "Turbine alarms live in OEM portals",
    "Weather lives in separate forecasting tools",
    "Crew rosters live in spreadsheets",
    "Vessel availability lives in emails",
    "Inventory/spares live in SAP or warehouse systems",
    "Daily planning is manual — done by senior engineers",
];

const results = [
    "Decisions take hours or days",
    "Mobilisation is conservative and slow",
    "Downtime compounds",
    "Headcount scales with assets",
    "O&M costs stay bloated post-warranty",
];

/* Timeline data for the Gantt-style visual */
const timeline = [
    { label: "Check SCADA alarms", start: 0, width: 22 },
    { label: "Pull weather forecasts", start: 18, width: 28 },
    { label: "Email crew coordinators", start: 34, width: 30 },
    { label: "Call vessel operator", start: 50, width: 22 },
    { label: "Check parts inventory", start: 62, width: 18 },
    { label: "Final decision", start: 82, width: 15, highlight: true },
];

export default function CoreProblem() {
    return (
        <section id="problem" className="relative py-24 px-6">
            <div className="mx-auto max-w-[1100px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <SectionLabel>The Core Problem</SectionLabel>

                    <motion.h2
                        variants={fadeUp}
                        className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
                    >
                        Six systems. Zero coordination.
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mt-5 max-w-[600px] font-body text-[16px] leading-[1.7] text-paper-muted"
                    >
                        Every critical decision in offshore wind O&M requires a senior
                        engineer to manually stitch together fragmented data — every
                        morning, across every site.
                    </motion.p>

                    {/* Silo bullets — 2 columns */}
                    <motion.div
                        variants={stagger}
                        className="mt-8 grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2"
                    >
                        {silos.map((item) => (
                            <motion.div
                                key={item}
                                variants={fadeUp}
                                className="flex items-start gap-3 font-body text-[15px] leading-[1.5] text-paper-text"
                            >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-paper-dim" />
                                {item}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Timeline: "Typical Morning Decision Cycle" — built in JSX for sharp rendering */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeIn}
                    className="mt-16 border border-paper-border bg-paper-surface p-8"
                >
                    <p className="font-body text-[11px] font-semibold tracking-[2px] text-paper-muted">
                        TYPICAL MORNING DECISION CYCLE
                    </p>

                    {/* Time axis */}
                    <div className="mt-6 flex items-center justify-between font-body text-[11px] text-paper-dim">
                        <span>05:00</span>
                        <span>06:00</span>
                        <span>07:00</span>
                        <span>08:00</span>
                        <span>09:00</span>
                        <span>10:00</span>
                    </div>
                    <div className="mt-1 h-px w-full bg-paper-border" />

                    {/* Rows */}
                    <div className="mt-5 space-y-4">
                        {timeline.map((row) => (
                            <div key={row.label} className="flex items-center gap-4">
                                <span
                                    className={`w-[180px] shrink-0 text-right font-body text-[13px] ${row.highlight
                                            ? "font-semibold text-orange"
                                            : "text-paper-muted"
                                        }`}
                                >
                                    {row.label}
                                </span>
                                <div className="relative flex-1">
                                    <div
                                        className={`h-5 rounded-sm ${row.highlight
                                                ? "border border-orange bg-orange/10"
                                                : "border border-paper-border bg-paper-bg"
                                            }`}
                                        style={{
                                            marginLeft: `${row.start}%`,
                                            width: `${row.width}%`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bracket: total time */}
                    <div className="mt-6 flex items-center gap-4">
                        <div className="w-[180px]" />
                        <div className="flex-1">
                            <div className="mx-auto flex max-w-[92%] items-center gap-2">
                                <div className="h-px flex-1 bg-orange/30" />
                                <span className="whitespace-nowrap font-body text-[12px] font-semibold text-orange">
                                    ~4–5 hours of sequential, manual work
                                </span>
                                <div className="h-px flex-1 bg-orange/30" />
                            </div>
                        </div>
                    </div>

                    {/* Helm comparison */}
                    <div className="mt-4 flex items-center gap-4">
                        <span className="w-[180px] shrink-0 text-right font-body text-[13px] font-semibold text-teal-dark">
                            With Helm
                        </span>
                        <div className="relative flex-1">
                            <div
                                className="h-5 rounded-sm border border-teal bg-teal/15"
                                style={{ width: "6%" }}
                            />
                        </div>
                        <span className="font-body text-[12px] font-semibold text-teal-dark">
                            ~15 min
                        </span>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="my-14 h-px w-full bg-paper-border" />

                {/* As a result */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                >
                    <span className="font-body text-[12px] font-semibold tracking-[2px] text-orange">
                        AS A RESULT
                    </span>
                    <ul className="mt-5 space-y-3">
                        {results.map((item) => (
                            <motion.li
                                key={item}
                                variants={fadeUp}
                                className="flex items-start gap-3 font-body text-[15px] leading-[1.5] text-paper-text"
                            >
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Quote */}
                <motion.blockquote
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-16 border-l-2 border-paper-text pl-6"
                >
                    <p className="font-display text-[22px] font-semibold leading-[1.35] text-paper-text">
                        &ldquo;This is not a data problem. It is a coordination and
                        decision-latency problem.&rdquo;
                    </p>
                </motion.blockquote>
            </div>
        </section>
    );
}
