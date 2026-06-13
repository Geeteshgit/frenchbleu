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
    <section className="py-6 md:py-10">
      <SectionTitle
        title="Browse Our Categories"
        subtitle="Explore our full range of freshly baked treats, handcrafted for every occasion."
        centered
      />

      <Container className="mt-12">
        <FadeUp className="relative">
          <EmblaCarousel
            items={categories}
            className="mx-auto max-w-7xl"
            containerClassName="-ml-6"
            slideClassName="pl-6 flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_15%]"
            renderItem={(category) => (
              <CategoryCard category={category} href={`#${category.id}`} />
            )}
          />
        </FadeUp>
      </Container>
    </section>
  );
}
