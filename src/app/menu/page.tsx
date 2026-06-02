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
    <main className="bg-background pb-16">
      <MenuHero />
      <MenuCategories categories={menuCategories} />

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
    </main>
  );
}
