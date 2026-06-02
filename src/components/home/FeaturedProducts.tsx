"use client";

import { useMemo, useState } from "react";
import Container from "../ui/Container";
import ProductCard from "../ui/ProductCard";
import { featuredTabs, products } from "@/data/products";
import clsx from "clsx";
import FadeUp from "../animations/FadeUp";
import EmblaCarousel from "../ui/EmblaCarousel";

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] =
    useState<(typeof featuredTabs)[number]>("Best Sellers");

  const filteredProducts = useMemo(
    () => products.filter((product) => product.tags?.includes(activeTab)),
    [activeTab],
  );

  return (
    <section className="bg-background py-14">
      <div className="flex justify-center gap-6">
        {featuredTabs.map((tab) => {
          const active = tab === activeTab;

          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "text-lg font-semibold cursor-pointer",
                active
                  ? "text-secondary"
                  : "text-foreground transition hover:text-secondary",
              )}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <Container className="mt-10">
        <FadeUp key={activeTab} y={18} className="relative">
          <EmblaCarousel
            items={filteredProducts}
            className="mx-auto max-w-6xl"
            viewportClassName="py-2"
            containerClassName="-ml-6"
            slideClassName="flex-[0_0_auto] pl-6"
            renderItem={(product) => <ProductCard product={product} />}
          />
        </FadeUp>
      </Container>
    </section>
  );
}
