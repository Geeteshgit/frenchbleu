"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { aboutPreviewCopy } from "../../data/home";

export default function AboutPreview() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <SectionTitle
        eyebrow={aboutPreviewCopy.eyebrow}
        title={aboutPreviewCopy.title}
        subtitle={aboutPreviewCopy.subtitle}
        centered
      />

      <Container className="mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl rounded-[2.5rem] border border-border bg-white p-8 text-center shadow-[0_30px_80px_rgba(248,162,171,0.12)] sm:p-12"
        >
          <p className="text-sm uppercase tracking-[0.26em] text-muted-foreground">
            Editorial bakery mood
          </p>
          <p className="mt-6 text-2xl leading-10 text-foreground sm:text-3xl lg:text-4xl">
            We create desserts that feel airy, polished, and softly luxurious,
            with pastel colors and refined details in every layer.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
