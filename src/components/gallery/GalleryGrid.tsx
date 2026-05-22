"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { GalleryItem } from "../../types";
import Card from "../ui/Card";

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <motion.div
      key={items.map((item) => item.id).join("-")}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
      className="grid auto-rows-[12rem] gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {items.map((item) => {
        const spanClass =
          item.size === "wide"
            ? "md:col-span-2 row-span-1"
            : item.size === "tall"
              ? "row-span-2"
              : "row-span-1";

        return (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className={spanClass}
          >
            <Card className="group h-full overflow-hidden bg-white">
              <div className="relative h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/35 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-white/75">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-medium">{item.title}</h3>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
