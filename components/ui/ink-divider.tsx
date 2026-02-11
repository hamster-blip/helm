"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import Image from "next/image";

export default function InkDivider() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={fadeIn}
      className="flex items-center justify-center py-4"
    >
      <Image
        src="/ink-turbine.svg"
        alt="Ink turbine illustration"
        width={700}
        height={280}
      />
    </motion.div>
  );
}
