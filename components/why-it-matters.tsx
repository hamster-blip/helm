"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import Image from "next/image";
import { ShieldCheck, FileText, Gauge, Lock, UserCheck, CheckCircle } from "lucide-react";

const guardrails = [
    {
        icon: ShieldCheck,
        title: "Human Approval",
        desc: "No automated dispatch without explicit human approval. Operators approve, override, or defer every recommendation.",
    },
    {
        icon: FileText,
        title: "Immutable Audit Logs",
        desc: "Immutable audit logs for every recommendation. Every decision, assumption, and constraint is recorded and traceable.",
    },
    {
        icon: Gauge,
        title: "Confidence Scoring",
        desc: "Each recommendation carries a confidence score so you know what to trust.",
    },
    {
        icon: Lock,
        title: "Safe Defaults",
        desc: "When uncertainty is high, Helm defaults to conservative action. No silent failures.",
    },
    {
        icon: UserCheck,
        title: "Role-Based Access",
        desc: "Operators, planners, and managers see only what they need. Permissions configurable per role and site.",
    },
    {
        icon: CheckCircle,
        title: "Safety Processes Unchanged",
        desc: "Existing permit-to-work systems and compliance procedures remain fully in place. Helm layers on top, never bypasses.",
    },
];

const metrics = [
    { label: "Downtime", value: "−40%", note: "Faster mobilisation, fewer weather-miss days", pct: 40 },
    { label: "Resource Optimisation", value: "−30%", note: "Planning hours redeployed from routine scheduling to high-value decisions", pct: 30 },
    { label: "Availability", value: "+5 pts", note: "Better weather-window utilisation", pct: 60 },
    { label: "Post-Warranty", value: "−25%", note: "O&M cost reduction through optimised logistics", pct: 25 },
];

export default function WhyItMatters() {
    return (
        <section id="why-it-matters" className="relative py-24 px-6">
            <div className="mx-auto max-w-[1100px]">
                {/* Guardrails — centered */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                    className="text-center"
                >
                    <SectionLabel>Built for Trust</SectionLabel>
                    <motion.h2
                        variants={fadeUp}
                        className="mt-4 font-display text-[40px] font-bold leading-[1.08] tracking-tight text-paper-text"
                    >
                        Guardrails
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="mx-auto mt-4 max-w-[600px] font-body text-[15px] font-semibold leading-[1.6] text-teal-dark"
                    >
                        Helm recommends. Operators decide. Existing safety
                        processes and permits remain unchanged.
                    </motion.p>
                </motion.div>

                {/* Shield SVG centered under heading */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mt-6 flex justify-center"
                >
                    <Image
                        src="/ink-shield.svg"
                        alt="Trust shield"
                        width={140}
                        height={110}
                        className="opacity-70"
                    />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {guardrails.map((g, i) => {
                        const Icon = g.icon;
                        return (
                            <motion.div
                                key={g.title}
                                variants={fadeUp}
                                className="border border-paper-border bg-paper-surface p-6"
                                style={{
                                    borderLeft: i % 3 === 0 ? undefined : "none",
                                    borderTop: i < 3 ? undefined : "none",
                                }}
                            >
                                <Icon className="mb-3 h-5 w-5 text-paper-muted" strokeWidth={1.5} />
                                <h3 className="font-display text-[15px] font-bold text-paper-text">
                                    {g.title}
                                </h3>
                                <p className="mt-2 font-body text-[13px] leading-[1.6] text-paper-muted">
                                    {g.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Metrics — with visual bars */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={stagger}
                    className="mt-20"
                >
                    <div className="text-center">
                        <SectionLabel>Projected Impact</SectionLabel>
                    </div>
                    <motion.div
                        variants={stagger}
                        className="mt-8 grid grid-cols-2 gap-0 lg:grid-cols-4"
                    >
                        {metrics.map((m, i) => (
                            <motion.div
                                key={m.label}
                                variants={fadeUp}
                                className="border border-paper-border p-6"
                                style={{ borderLeft: i === 0 ? undefined : "none" }}
                            >
                                <p className="font-display text-[32px] font-bold text-paper-text leading-none">
                                    {m.value}
                                </p>
                                <p className="mt-2 font-body text-[13px] font-semibold text-paper-text">
                                    {m.label}
                                </p>
                                {/* Visual bar */}
                                <div className="mt-3 h-1.5 w-full bg-paper-border">
                                    <div
                                        className="h-full bg-teal"
                                        style={{ width: `${m.pct}%`, opacity: 0.6 }}
                                    />
                                </div>
                                <p className="mt-2 font-body text-[12px] text-paper-muted leading-[1.5]">
                                    {m.note}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
