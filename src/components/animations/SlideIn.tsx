"use client";

import { motion } from "motion/react";
import { AnimationProps } from "@/types";

type SlideInProps = AnimationProps & {
  direction?: "left" | "right";
  distance?: number;
};

export default function SlideIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  direction = "left",
  distance = 40,
}: SlideInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -distance : distance,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
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
