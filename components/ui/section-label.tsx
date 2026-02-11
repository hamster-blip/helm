"use client";

import { motion } from "framer-motion";
import { fadeInLeft } from "@/lib/animations";

interface SectionLabelProps {
  text: string;
  color?: string;
}

export default function SectionLabel({ text, color = "text-teal" }: SectionLabelProps) {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInLeft}
      className={`font-mono text-xs font-medium tracking-[2px] ${color}`}
    >
      {text}
    </motion.p>
  );
}
