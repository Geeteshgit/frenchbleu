"use client";

import { useMemo, useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { galleryFilters, galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <main className="space-y-8 pt-14 pb-8">
      <GalleryHero />
      <GalleryFilters
        activeFilter={activeFilter}
        filters={galleryFilters}
        onChange={setActiveFilter}
      />
      <GalleryGrid items={filteredItems} />
    </main>
  );
}
