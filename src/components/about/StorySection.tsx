"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import Card from "../ui/Card";
import { storyCopy } from "../../data/about";
import { testimonials } from "../../data/testimonials";

export default function StorySection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge tone="blue">Our story</Badge>
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              From a tiny pastel studio to a full celebration bakery.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              {storyCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storyCopy.metrics.map((metric) => (
                <Card key={metric.label} className="bg-white p-5 text-center">
                  <p className="text-3xl font-medium text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {metric.label}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-6"
          >
            <Card className="bg-secondary/20 p-6 sm:p-8">
              <Badge>Philosophy</Badge>
              <p className="mt-5 text-2xl leading-10 text-foreground sm:text-3xl">
                {storyCopy.philosophy}
              </p>
            </Card>

            <div className="grid gap-4">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="flex gap-4 bg-white p-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={96}
                    height={96}
                    sizes="96px"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="mt-2 text-base leading-7 text-foreground">
                      “{testimonial.quote}”
                    </p>
                    <p className="mt-3 text-sm font-semibold text-primary-foreground">
                      {testimonial.name}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
