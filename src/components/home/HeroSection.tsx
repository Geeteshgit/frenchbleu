"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import { homeHero } from "../../data/home";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pt-4">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-24 h-56 w-56 rounded-full bg-secondary/20 blur-3xl"
        />
      </div>

      <Container className="relative grid items-center gap-12 py-4 lg:grid-cols-[1.1fr_0.9fr] sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center"
        >
          <h1 className="mt-6 text-4xl font-logo font-medium tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground sm:text-xl">
            {homeHero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mx-auto w-full max-w-140"
        >
          <div className="relative rounded-xl p-4 shadow-[0_28px_80px_rgba(248,162,171,0.2)] backdrop-blur-2xl">
            <Image
              src={homeHero.image}
              alt="Pastel cupcake"
              width={750}
              height={1200}
              priority
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 90vw"
              className="w-full rounded-4xl object-cover shadow-xl"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
