"use client";

import { useEffect } from "react";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import MenuHero from "@/components/menu/MenuHero";
import MenuProducts from "@/components/menu/MenuProducts";
import MenuCategories from "@/components/menu/MenuCategories";
import MenuProductsContainer from "@/components/menu/MenuProductsContainer";

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
    <main className="bg-background flex flex-col gap-8 sm:gap-10 pb-8">
      <MenuHero />
      <MenuCategories categories={menuCategories} />
      <MenuProductsContainer />
    </main>
  );
}
