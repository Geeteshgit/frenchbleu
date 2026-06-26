import Image from "next/image";
import type { Product } from "@/types";
import Card from "./Card";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col items-center gap-3">
      <Card className="group overflow-hidden h-40 w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 rounded-sm">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Card>

      <h3 className="text-center text-foreground">{product.name}</h3>
    </article>
  );
}
