import Image from "next/image";
import Card from "../ui/Card";
import Container from "../ui/Container";
import type { GalleryItem } from "@/types";

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <Container className="columns-1 md:columns-2 xl:columns-3 gap-4 space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden break-inside-avoid">
          <Image
            src={item.image}
            alt={item.title}
            width={800}
            height={800}
            className="h-auto w-full hover:scale-105 transition-transform duration-300"
          />
        </Card>
      ))}
    </Container>
  );
}
