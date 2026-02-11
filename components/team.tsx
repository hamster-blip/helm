"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";

const team = [
    {
        initials: "HA",
        name: "Haamid Adam",
        credentials: [
            "MIT Sloan",
            "Chartered Engineer",
            "Offshore wind development — Japan & Taiwan",
        ],
        bio: "Built East Asia's first offshore wind farms with Siemens. Diligenced Deep Tech at DCVC.",
    },
    {
        initials: "B",
        name: "Brandon",
        credentials: [],
        bio: "",
    },
    {
        initials: "C",
        name: "Christian",
        credentials: [],
        bio: "",
    },
];

export default function Team() {
    return (
        <section id="team" className="relative py-24 px-6">
            <div className="mx-auto max-w-[1100px]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={stagger}
                >
                    <SectionLabel>Who&apos;s Building This</SectionLabel>

                    <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
                        {team.map((member) => (
                            <motion.div
                                key={member.name}
                                variants={fadeUp}
                                className="flex flex-col"
                            >
                                {/* Avatar placeholder */}
                                <div className="flex h-24 w-24 items-center justify-center border border-paper-border bg-paper-surface">
                                    <span className="font-display text-[22px] font-bold text-paper-dim">
                                        {member.initials}
                                    </span>
                                </div>

                                {/* Info */}
                                <h3 className="mt-4 font-display text-[22px] font-bold text-paper-text">
                                    {member.name}
                                </h3>
                                {member.credentials.length > 0 && (
                                    <div className="mt-2 space-y-0.5 font-body text-[14px] text-paper-muted">
                                        {member.credentials.map((c) => (
                                            <p key={c}>{c}</p>
                                        ))}
                                    </div>
                                )}
                                {member.bio && (
                                    <p className="mt-3 font-body text-[14px] leading-[1.65] text-paper-muted">
                                        {member.bio}
                                    </p>
                                )}
                                {!member.bio && member.credentials.length === 0 && (
                                    <p className="mt-2 font-body text-[13px] italic text-paper-dim">
                                        Details coming soon
                                    </p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
