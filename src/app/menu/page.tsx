"use client";

import { useEffect } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import MenuHero from "@/components/menu/MenuHero";
import MenuProducts from "@/components/menu/MenuProducts";
import MenuCategories from "@/components/menu/MenuCategories";

const menuCategories = categories;

export default function MenuPage() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) return;

      const elementId = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    scrollToHash();

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <main className="bg-background flex flex-col gap-8 sm:gap-16 pb-8">
      <MenuHero />
      <MenuCategories categories={menuCategories} />
      <section className="space-y-12 sm:space-y-18">
        {menuCategories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category.name,
          );

          return (
            <MenuProducts
              key={category.id}
              categoryId={category.id}
              categoryName={category.name}
              products={categoryProducts}
            />
          );
        })}
      </section>
    </main>
  );
}
