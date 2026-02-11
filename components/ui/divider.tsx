"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

export default function Divider() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeIn}
      className="h-px w-full bg-gradient-to-r from-transparent via-dark-border to-transparent"
    />
  );
}
