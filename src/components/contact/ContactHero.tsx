"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { contactHeroCopy } from "../../data/contact";

export default function ContactHero() {
  return (
    <section className="bg-[linear-gradient(135deg,#ffe9ee_0%,#fff9f6_44%,#eef8fb_100%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>{contactHeroCopy.eyebrow}</Badge>
            <h1 className="mt-6 text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {contactHeroCopy.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {contactHeroCopy.subtitle}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1400&q=80"
              alt="Bakery celebration table"
              width={1400}
              height={900}
              priority
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-90 w-full rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(248,162,171,0.2)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
