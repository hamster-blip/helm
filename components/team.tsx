"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import SectionLabel from "@/components/ui/section-label";
import { Linkedin } from "lucide-react";

const team = [
    {
        photo: "/haamid.jpg",
        name: "Haamid Adam",
        title: "MIT Sloan · Chartered Engineer",
        linkedin: "https://linkedin.com/in/haamidadam",
        summary:
            "Built East Asia's first offshore wind farms with Siemens. Diligenced Deep Tech at DCVC.",
    },
    {
        photo: "/brandon.jpg",
        name: "Christian Cierny",
        title: "Harvard T.H. Chan · Heidelberg University",
        linkedin:
            "https://www.linkedin.com/in/christian-cierny-579940378/",
        summary:
            "Trained to make decisions under real-world constraints. Brings clinical urgency, systems thinking, and distribution-first execution to Helm.",
    },
    {
        photo: "/christian.jpg",
        name: "Brandon Karagozian",
        title: "Harvard MPP",
        linkedin:
            "https://www.linkedin.com/in/brandon-karagozian/",
        summary:
            "Brandon brings expertise in risk modeling and decision-making under uncertainty, with experience across infrastructure investing, public-sector deployment, and applied analytics. At Helm, he applies optimization and simulation methods to operational constraints like weather volatility, resource scarcity, and contract penalties to build interpretable decision models that improve offshore wind O&M outcomes.",
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
                                {/* Headshot */}
                                <div className="relative h-28 w-28 overflow-hidden rounded-full border border-paper-border">
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Name + LinkedIn */}
                                <div className="mt-4 flex items-center gap-2">
                                    <h3 className="font-display text-[22px] font-bold text-paper-text">
                                        {member.name}
                                    </h3>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-paper-dim transition-colors hover:text-paper-text"
                                    >
                                        <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                                    </a>
                                </div>

                                {/* Title */}
                                <p className="mt-1 font-body text-[14px] text-paper-muted">
                                    {member.title}
                                </p>

                                {/* Summary */}
                                <p className="mt-3 font-body text-[14px] leading-[1.65] text-paper-muted">
                                    {member.summary}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
