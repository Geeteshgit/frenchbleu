"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Badge from "../ui/Badge";
import { splitPromoCopy } from "../../data/home";

function PromoPane({
  eyebrow,
  title,
  subtitle,
  cta,
  image,
  tone,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  tone: "blue" | "pink";
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className={
        tone === "blue"
          ? "rounded-[2.5rem] bg-secondary/55 p-6 sm:p-8"
          : "rounded-[2.5rem] bg-primary/12 p-6 sm:p-8"
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <Badge tone={tone}>{eyebrow}</Badge>
          <h3 className="mt-5 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">
            {subtitle}
          </p>
          <div className="mt-7">
            <Button
              href="/contact"
              variant={tone === "blue" ? "dark" : "primary"}
            >
              {cta}
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-4xl">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={900}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="h-72 w-full object-cover sm:h-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/18 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}

export default function SplitPromoSection() {
  return (
    <section className="bg-background py-6 sm:py-8">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <PromoPane tone="blue" {...splitPromoCopy.left} />
          <PromoPane tone="pink" {...splitPromoCopy.right} />
        </div>
      </Container>
    </section>
  );
}
