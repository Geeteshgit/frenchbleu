"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";
import { featuredTabs, products } from "../../data/products";

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] =
    useState<(typeof featuredTabs)[number]>("Best Sellers");

  const filteredProducts = useMemo(
    () => products.filter((product) => product.tags.includes(activeTab)),
    [activeTab],
  );

  return (
    <section className="bg-background py-20 sm:py-24">
      <SectionTitle
        eyebrow="Featured selection"
        title="Elegant product cards with soft shadows and premium spacing."
        subtitle="Browse the bakery's signature treats, new arrivals, and crowd favorites in a polished editorial layout."
        centered
      >
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {featuredTabs.map((tab) => {
            const active = tab === activeTab;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={
                  active
                    ? "rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
                    : "rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:border-primary/30 hover:text-foreground"
                }
              >
                {tab}
              </button>
            );
          })}
        </div>
      </SectionTitle>

      <Container className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
