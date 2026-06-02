import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";

type CategoryCardProps = {
  category: Category;
  href?: string;
};

export default function CategoryCard({ category, href }: CategoryCardProps) {
  const content = (
    <>
      <div className="relative h-12 w-12">
        <Image
          src={category.icon}
          alt={category.name}
          fill
          className="object-contain transition duration-500 group-hover:scale-110"
        />
      </div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-sm">
        {category.name}
      </p>
    </>
  );

  return (
    <div className="text-center">
      {href ? (
        <Link
          href={href}
          className="group flex flex-col items-center gap-4 rounded-sm text-center cursor-pointer"
        >
          {content}
        </Link>
      ) : (
        <article className="group flex flex-col items-center gap-4 text-center cursor-pointer">
          {content}
        </article>
      )}
    </div>
  );
}
