"use client";

import { AnimationProps } from "@/types";
import { motion } from "motion/react";

type ScaleInProps = AnimationProps & {
  scale?: number;
};

export default function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  once = true,
  scale = 0.95,
}: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
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
