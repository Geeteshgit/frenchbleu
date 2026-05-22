"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Product } from "../../types";
import Button from "./Button";
import Card from "./Card";
import Badge from "./Badge";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col overflow-hidden bg-white">
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <Badge>{product.badge}</Badge>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="mt-2 text-2xl font-medium tracking-tight text-foreground">
                  {product.title}
                </h3>
              </div>
              <p className="text-xl font-semibold text-primary-foreground">
                {product.price}
              </p>
            </div>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {product.description}
            </p>
          </div>

          <div className="mt-auto flex items-center justify-between gap-3">
            <Button href="/contact" variant="secondary" size="sm">
              Request this treat
            </Button>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {product.tags.join(" / ")}
            </p>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
