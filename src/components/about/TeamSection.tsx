"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { teamHighlights } from "../../data/testimonials";

export default function TeamSection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <SectionTitle
        eyebrow="Meet the team"
        title="The artisans behind the pink-and-blue bakery mood."
        subtitle="Every member shapes the look, flavor, and finishing touches of the bakery's signature style."
        centered
      />

      <Container className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {teamHighlights.map((member) => (
            <motion.div
              key={member.id}
              variants={{
                hidden: { opacity: 0, y: 22 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="overflow-hidden bg-white">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={1000}
                  height={900}
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="h-72 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    {member.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
