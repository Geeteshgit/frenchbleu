import type { Product } from "../types";

export const featuredTabs = [
  "Best Sellers",
  "New Arrivals",
  "Popular",
] as const;

export const products: Product[] = [
  {
    id: 1,
    title: "Pastel Macaron Box",
    price: "$24",
    category: "Macarons",
    image:
      "https://images.unsplash.com/photo-1528376856106-2734b194f9b5?auto=format&fit=crop&w=1200&q=80",
    badge: "Best Seller",
    description:
      "A polished assortment of almond shells in rose, cream, and cloud-blue.",
    tags: ["Best Sellers", "Popular"],
  },
  {
    id: 2,
    title: "Vanilla Swirl Cupcakes",
    price: "$18",
    category: "Cupcakes",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1200&q=80",
    badge: "New",
    description: "Fluffy cupcakes topped with silky frosting and sugar pearls.",
    tags: ["New Arrivals", "Best Sellers"],
  },
  {
    id: 3,
    title: "Blueberry Cloud Cheesecake",
    price: "$32",
    category: "Cheesecake",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1200&q=80",
    badge: "Popular",
    description: "Creamy layers with a berry crown and a crisp biscuit base.",
    tags: ["Popular", "Best Sellers"],
  },
  {
    id: 4,
    title: "Unicorn Celebration Cake",
    price: "$68",
    category: "Cakes",
    image:
      "https://images.unsplash.com/photo-1558303420-9e669e9f0f44?auto=format&fit=crop&w=1200&q=80",
    badge: "Signature",
    description:
      "A whimsical pastel showpiece with dreamy layers and finishing flourishes.",
    tags: ["New Arrivals", "Popular"],
  },
  {
    id: 5,
    title: "Ribbon Cake Pops",
    price: "$20",
    category: "Cake Pops",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    badge: "Cute",
    description: "Hand-finished pops that look like little celebration gems.",
    tags: ["Best Sellers", "Popular"],
  },
  {
    id: 6,
    title: "Pink Glaze Donuts",
    price: "$16",
    category: "Donuts",
    image:
      "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    badge: "Fresh",
    description:
      "Glossy donuts with a soft sheen and a luxurious bakery finish.",
    tags: ["New Arrivals", "Popular"],
  },
];
