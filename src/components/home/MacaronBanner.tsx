"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { macaronBannerCopy } from "../../data/home";

export default function MacaronBanner() {
  return (
    <section className="bg-background">
      <div className="bg-secondary">
        <Container className="py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              <Badge tone="blue">{macaronBannerCopy.eyebrow}</Badge>
              <h2 className="mt-5 max-w-xl text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {macaronBannerCopy.title}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-secondary-foreground/80 sm:text-lg">
                {macaronBannerCopy.subtitle}
              </p>
              <div className="mt-8">
                <Button href="/gallery" variant="dark">
                  {macaronBannerCopy.cta}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-x-6 top-8 h-32 rounded-full bg-white/35 blur-3xl" />
              <div className="relative flex flex-wrap items-center justify-center gap-4 rounded-[2.5rem] border border-white/50 bg-white/55 px-6 py-8 shadow-[0_24px_70px_rgba(174,222,234,0.28)] backdrop-blur-xl sm:px-8">
                {[
                  "https://images.unsplash.com/photo-1616690710400-7c3c1dba0f35?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=900&q=80",
                  "https://images.unsplash.com/photo-1612203985720-b5c8c0c7a1c8?auto=format&fit=crop&w=900&q=80",
                ].map((image, index) => (
                  <motion.img
                    key={image}
                    src={image}
                    alt={`Macaron ${index + 1}`}
                    className="h-24 w-24 rounded-full object-cover shadow-lg ring-4 ring-white sm:h-28 sm:w-28"
                    animate={{ y: [0, index % 2 === 0 ? -10 : 10, 0] }}
                    transition={{
                      duration: 6 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  );
}
