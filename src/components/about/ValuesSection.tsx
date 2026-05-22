"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { valuesCopy } from "../../data/about";

export default function ValuesSection() {
  return (
    <section className="bg-primary/8 py-20 sm:py-24">
      <SectionTitle
        eyebrow="What we value"
        title="A bakery philosophy shaped by craftsmanship, beauty, and celebration."
        subtitle="Soft presentation and premium taste work together in every dessert we make."
        centered
      />

      <Container className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 md:grid-cols-3"
        >
          {valuesCopy.map((value) => (
            <motion.div
              key={value.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full bg-white p-7">
                <h3 className="text-3xl font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
