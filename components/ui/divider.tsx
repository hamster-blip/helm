"use client";

import { motion } from "framer-motion";
import { growWidth } from "@/lib/animations";

interface DividerProps {
  color?: "border" | "teal";
}

export default function Divider({ color = "border" }: DividerProps) {
  const gradient =
    color === "teal"
      ? "from-transparent via-teal/40 to-transparent"
      : "from-transparent via-border to-transparent";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={growWidth}
      className={`h-px w-full bg-gradient-to-r ${gradient}`}
    />
  );
}
