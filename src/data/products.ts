import type { Product } from "../types";
import brownie1 from "@/assets/products/brownie-1.jpg";
import chocolavaCake from "@/assets/products/chocolava-cake.png";
import tiramisuCake from "@/assets/products/tiramisu-cake.jpg";
import creamRoll1 from "@/assets/products/cream-roll-1.png";
import chocolateTruffleCake1 from "@/assets/products/chocolate-truffle-cake-1.png";
import AalooPuff from "@/assets/products/aaloo-puff.jpg";

export const featuredTabs = ["Best Sellers", "New Arrivals"] as const;

export const products: Product[] = [
  {
    name: "Chocolate Brownie",
    category: "Brownies",
    image: brownie1,
    tags: ["Best Sellers", "New Arrivals"],
  },
  {
    name: "Tiramisu Cake",
    category: "Cakes",
    image: tiramisuCake,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolava Cake",
    category: "Chocolava",
    image: chocolavaCake,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolate Cream Roll",
    category: "Rolls",
    image: creamRoll1,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    image: chocolateTruffleCake1,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolate Croissant",
    category: "Cakes",
    image: brownie1,
    tags: ["New Arrivals"],
  },
  {
    name: "Aaloo Puff",
    category: "Puffs",
    image: AalooPuff,
    tags: ["New Arrivals", "Best Sellers"],
  },
  {
    name: "Cherry Cream Donuts",
    category: "Donuts",
    image: brownie1,
    tags: ["New Arrivals"],
  },
  {
    name: "Vanilla Bean Croissant",
    category: "Croissants",
    image: brownie1,
    tags: ["New Arrivals"],
  },
  {
    name: "Vanilla Cloud Cake",
    category: "Cakes",
    image: brownie1,
  },
  {
    name: "Berry Ribbon Cake",
    category: "Cakes",
    image: brownie1,
  },
  {
    name: "Lemon Silk Cake",
    category: "Cakes",
    image: brownie1,
  },
  {
    name: "Strawberry Whisper Cake",
    category: "Cakes",
    image: brownie1,
  },
  {
    name: "Lavender Velvet Cake",
    category: "Cakes",
    image: brownie1,
  },
  {
    name: "Blueberry Meadow Cake",
    category: "Cakes",
    image: brownie1,
  },
  {
    name: "Vanilla Blossom Cupcake",
    category: "Cupcakes",
    image: brownie1,
  },
  {
    name: "Salted Caramel Cupcake",
    category: "Cupcakes",
    image: brownie1,
  },
  {
    name: "Chocolate Cloud Cupcake",
    category: "Cupcakes",
    image: brownie1,
  },
  {
    name: "Rosewater Cupcake",
    category: "Cupcakes",
    image: brownie1,
  },
  {
    name: "Berry Cream Cupcake",
    category: "Cupcakes",
    image: brownie1,
  },
  {
    name: "Vanilla Sprinkle Cupcake",
    category: "Cupcakes",
    image: brownie1,
  },
  {
    name: "Pastel Macaron Box",
    category: "Macarons",
    image: brownie1,
  },
  {
    name: "Rose Garden Macarons",
    category: "Macarons",
    image: brownie1,
  },
  {
    name: "Cloud Nine Macarons",
    category: "Macarons",
    image: brownie1,
  },
  {
    name: "Peach Bloom Macarons",
    category: "Macarons",
    image: brownie1,
  },
  {
    name: "Mint Cloud Macarons",
    category: "Macarons",
    image: brownie1,
  },
  {
    name: "Berry Luxe Macarons",
    category: "Macarons",
    image: brownie1,
  },
  {
    name: "Vanilla Twist Pastry",
    category: "Pastries",
    image: brownie1,
  },
  {
    name: "Berry Puff Pastry",
    category: "Pastries",
    image: brownie1,
  },
  {
    name: "Cinnamon Cream Pastry",
    category: "Pastries",
    image: brownie1,
  },
  {
    name: "Apricot Almond Pastry",
    category: "Pastries",
    image: brownie1,
  },
  {
    name: "Chocolate Ribbon Pastry",
    category: "Pastries",
    image: brownie1,
  },
  {
    name: "Vanilla Pearl Pastry",
    category: "Pastries",
    image: brownie1,
  },
];
