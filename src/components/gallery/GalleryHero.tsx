"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import Badge from "../ui/Badge";

export default function GalleryHero() {
  return (
    <section className="bg-[linear-gradient(135deg,#edf8fb_0%,#fff9f6_45%,#ffe8ec_100%)] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge tone="blue">Gallery</Badge>
            <h1 className="mt-6 text-5xl font-medium tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              A responsive dessert gallery with masonry energy and soft hover
              motion.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Explore cupcakes, macarons, cakes, and pastries in a refined
              pastel arrangement.
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1400&q=80"
              alt="Luxury dessert spread"
              width={1400}
              height={900}
              priority
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="h-90 w-full rounded-[2.5rem] object-cover shadow-[0_30px_80px_rgba(174,222,234,0.22)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
