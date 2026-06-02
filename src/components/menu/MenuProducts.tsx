import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProductCard from "../ui/ProductCard";
import EmblaCarousel from "../ui/EmblaCarousel";
import type { Product } from "@/types";

type MenuProductsProps = {
  categoryId: string;
  categoryName: string;
  products: Product[];
};

export default function MenuProducts({
  categoryId,
  categoryName,
  products,
}: MenuProductsProps) {
  const hasProducts = products.length > 0;

  return (
    <section id={categoryId} className="scroll-mt-24 py-12">
      <SectionTitle title={categoryName} centered />

      <Container className="mt-10">
        {hasProducts ? (
          <EmblaCarousel
            items={products}
            className="mx-auto max-w-6xl"
            viewportClassName="py-2"
            containerClassName="-ml-6"
            slideClassName="flex-[0_0_auto] pl-6"
            renderItem={(item) => <ProductCard product={item} />}
          />
        ) : (
          <div className="mx-auto max-w-2xl rounded-sm border border-border bg-background/60 px-6 py-10 text-center text-sm text-muted-foreground">
            More items for {categoryName} are coming soon.
          </div>
        )}
      </Container>
    </section>
  );
}
