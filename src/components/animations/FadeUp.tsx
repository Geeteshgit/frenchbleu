"use client";

import { AnimationProps } from "@/types";
import { motion } from "motion/react";

export default function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once,
        margin: "-80px",
      }}
      transition={{
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
