import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FadeUp from "../animations/FadeUp";
import CategoryCard from "../ui/CategoryCard";
import EmblaCarousel from "../ui/EmblaCarousel";
import type { Category } from "@/types";

type MenuCategoriesProps = {
  categories: Category[];
};

export default function MenuCategories({ categories }: MenuCategoriesProps) {
  return (
    <section className="py-14">
      <SectionTitle
        title="Browse Our Categories"
        subtitle="Explore our full range of freshly baked treats, handcrafted for every occasion."
        centered
      />

      <Container className="mt-12">
        <FadeUp y={24} className="relative">
          <EmblaCarousel
            items={categories}
            className="mx-auto max-w-7xl"
            containerClassName="-ml-6"
            slideClassName="flex-[0_0_50%] pl-6 sm:flex-[0_0_33.3333%] md:flex-[0_0_25%] lg:flex-[0_0_14.2857%]"
            renderItem={(category) => (
              <CategoryCard category={category} href={`#${category.id}`} />
            )}
          />
        </FadeUp>
      </Container>
    </section>
  );
}
