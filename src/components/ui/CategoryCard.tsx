import Image from "next/image";
import type { Category } from "../../types";
import Card from "./Card";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article>
      <Card className="group h-full overflow-hidden bg-white">
        <div className="relative aspect-5/4 overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-2 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            {category.name}
          </p>
        </div>
      </Card>
    </article>
  );
}
