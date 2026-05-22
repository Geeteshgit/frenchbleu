"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { aboutHeroCopy } from "../../data/about";

export default function AboutHero() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffe9ee_0%,#fff9f6_45%,#edf8fb_100%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>{aboutHeroCopy.eyebrow}</Badge>
            <h1 className="mt-6 text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {aboutHeroCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {aboutHeroCopy.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&w=1400&q=80"
              alt="Elegant pastel bakery table"
              width={1400}
              height={900}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="relative h-115 w-full rounded-[2.5rem] object-cover shadow-[0_25px_80px_rgba(248,162,171,0.22)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
