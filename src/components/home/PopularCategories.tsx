import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import CategoryCard from "../ui/CategoryCard";
import { categories } from "@/data/categories";
import { popularCategories } from "@/data/home";
import FadeUp from "../animations/FadeUp";

export default function PopularCategories() {
  const popularHomeCategories = categories.filter(
    (category) => category.popular,
  );

  return (
    <section className="bg-background py-6">
      <SectionTitle title={popularCategories.title} centered />

      <Container className="mt-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {popularHomeCategories.map((category, index) => (
            <FadeUp key={category.id} delay={index * 0.08} y={24}>
              <CategoryCard category={category} href="/menu" />
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
