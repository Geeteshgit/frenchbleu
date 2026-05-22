import type { GalleryItem } from "../types";

export const galleryFilters = [
  "All",
  "Cakes",
  "Cupcakes",
  "Macarons",
  "Donuts",
  "Cookies",
  "Pastries",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Rose Macaron Tower",
    category: "Macarons",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1400&q=80",
    size: "tall",
  },
  {
    id: 2,
    title: "Velvet Cupcake Bouquet",
    category: "Cupcakes",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: 3,
    title: "Celebration Cake Detail",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1400&q=80",
    size: "wide",
  },
  {
    id: 4,
    title: "Sugared Donut Stack",
    category: "Donuts",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: 5,
    title: "Wedding Cake Swirls",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1400&q=80",
    size: "tall",
  },
  {
    id: 6,
    title: "Cookie Ribbon Tray",
    category: "Cookies",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=80",
    size: "wide",
  },
  {
    id: 7,
    title: "Pastel Pastry Tray",
    category: "Pastries",
    image:
      "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
  {
    id: 8,
    title: "Baby Blue Macarons",
    category: "Macarons",
    image:
      "https://images.unsplash.com/photo-1616690710400-7c3c1dba0f35?auto=format&fit=crop&w=1400&q=80",
    size: "wide",
  },
  {
    id: 9,
    title: "Cupcake Frosting Closeup",
    category: "Cupcakes",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1400&q=80",
    size: "square",
  },
];
