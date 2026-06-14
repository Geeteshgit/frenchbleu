import Container from "../ui/Container";
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
    <section id={categoryId} className="scroll-mt-24 pt-10">
      <h2 className="text-lg font-semibold uppercase tracking-[0.22em] text-center text-muted-foreground md:text-2xl">
        {categoryName}
      </h2>

      <Container className="mt-6 md:mt-10">
        {hasProducts ? (
          <EmblaCarousel
            items={products}
            className="mx-auto max-w-6xl"
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
