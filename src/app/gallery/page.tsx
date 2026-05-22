"use client";

import { useMemo, useState } from "react";
import GalleryHero from "../../components/gallery/GalleryHero";
import GalleryFilters from "../../components/gallery/GalleryFilters";
import GalleryGrid from "../../components/gallery/GalleryGrid";
import { galleryFilters, galleryItems } from "../../data/gallery";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <GalleryHero />
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryFilters
            activeFilter={activeFilter}
            filters={galleryFilters}
            onChange={setActiveFilter}
          />
          <GalleryGrid items={filteredItems} />
        </div>
      </section>
    </>
  );
}
