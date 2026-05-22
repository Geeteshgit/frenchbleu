"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { homeCtaCopy } from "../../data/home";

type CTASectionProps = {
  variant?: "home" | "about" | "contact";
};

export default function CTASection({ variant = "home" }: CTASectionProps) {
  const copy = homeCtaCopy;

  return (
    <section className="bg-background pb-20 pt-4 sm:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border bg-[linear-gradient(135deg,#ffe4ea_0%,#fff7f3_45%,#ebf7fb_100%)] p-8 shadow-[0_30px_90px_rgba(174,222,234,0.18)] sm:p-12 lg:p-16"
        >
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(248,162,171,0.16),transparent_60%)] lg:block" />
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative z-10 max-w-2xl">
              <Badge>
                {variant === "contact" ? "Get in touch" : copy.eyebrow}
              </Badge>
              <h2 className="mt-5 text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {variant === "contact"
                  ? "Bring your dessert vision to life."
                  : copy.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                {variant === "about"
                  ? "We build dessert moments with thoughtful color stories, premium ingredients, and a boutique finish."
                  : variant === "contact"
                    ? "Share the occasion, guest count, and style direction. We will guide the rest with care and clarity."
                    : copy.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">
                  {variant === "contact" ? "Message us" : copy.cta}
                </Button>
                <Button href="/gallery" variant="secondary">
                  View gallery
                </Button>
              </div>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-90">
              <motion.img
                src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&w=1200&q=80"
                alt="Bakery celebration spread"
                className="h-90 w-full rounded-4xl object-cover shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
