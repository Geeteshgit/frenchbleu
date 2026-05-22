"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CategoryCard from "../ui/CategoryCard";
import { categories } from "../../data/categories";
import { categorySectionCopy } from "../../data/home";

export default function CategoriesSection() {
  return (
    <section className="bg-background py-8 sm:py-14">
      <SectionTitle title={categorySectionCopy.title} centered />

      <Container className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
