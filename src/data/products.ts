import type { Product } from "../types";
import brownie1 from "@/assets/products/brownie-1.jpg";
import chocolavaCake from "@/assets/products/chocolava-cake.png";
import blackForestCake from "@/assets/products/cake-black-forest.webp";
import whhiteForestCake from "@/assets/products/cake-white-forest.webp";
import chocolateTruffleCake from "@/assets/products/cake-chocolate-truffle.webp";
import pineappleCake from "@/assets/products/cake-pineapple.avif";
import butterscotchCake from "@/assets/products/cake-butterscotch.jpg";
import redVelvetCake from "@/assets/products/cake-red-velvet.webp";
import vanillaCake from "@/assets/products/cake-vanilla.webp";
import whiteForestPastry from "@/assets/products/pastry-white-forest.jpeg";
import blackForestPastry from "@/assets/products/pastry-black-forest.webp";
import cheesecakePastry from "@/assets/products/pastry-cheesecake.webp";
import chocolateTrufflePastry from "@/assets/products/pastry-chocolate-truffle.avif";
import redVelvetPastry from "@/assets/products/pastry-red-velvet.webp";
import chocoVanillaOreoPastry from "@/assets/products/pastry-choco-vanilla-oreo.jpeg";
import doubleChocochipPastry from "@/assets/products/pastry-double-chocochip.jpeg";
import blueberrypastry from "@/assets/products/pastry-blueberry.webp";
import aalooPuff from "@/assets/products/puff-aaloo.jpg";
import chocolateFrostedDonut from "@/assets/products/donut-chocolate-frosted.jpg";
import chocolateGlazedDonut from "@/assets/products/donut-chocolate-glazed.jpg";
import bakedDonuts from "@/assets/products/donut-baked.jpg";
import butterCroissant from "@/assets/products/croissant-butter.jpg";

export const featuredTabs = ["Best Sellers", "New Arrivals"] as const;

export const products: Product[] = [
  {
    name: "Chocolate Truffle Cake",
    category: "Cakes",
    image: chocolateTruffleCake,
    tags: ["Best Sellers"],
  },
  {
    name: "Black Forest Cake",
    category: "Cakes",
    image: blackForestCake,
  },
  {
    name: "White Forest Cake",
    category: "Cakes",
    image: whhiteForestCake,
  },
  {
    name: "Pineapple Cake",
    category: "Cakes",
    image: pineappleCake,
  },
  {
    name: "Butterscotch Cake",
    category: "Cakes",
    image: butterscotchCake,
  },
  {
    name: "Red Velvet Cake",
    category: "Cakes",
    image: redVelvetCake,
  },
  {
    name: "Vanilla Cake",
    category: "Cakes",
    image: vanillaCake,
  },
  {
    name: "Chocolate Brownie",
    category: "Brownies",
    image: brownie1,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolava Cake",
    category: "Chocolava",
    image: chocolavaCake,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolate Truffle Pastry",
    category: "Pastries",
    image: chocolateTrufflePastry,
    tags: ["Best Sellers"],
  },
  {
    name: "White Forest Pastry",
    category: "Pastries",
    image: whiteForestPastry,
  },
  {
    name: "Black Forest Pastry",
    category: "Pastries",
    image: blackForestPastry,
  },
  {
    name: "Red Velvet Pastry",
    category: "Pastries",
    image: redVelvetPastry,
  },
  {
    name: "Cheesecake Pastry",
    category: "Pastries",
    image: cheesecakePastry,
    tags: ["Best Sellers"],
  },
  {
    name: "Choco Vanilla Oreo Pastry",
    category: "Pastries",
    image: chocoVanillaOreoPastry,
    tags: ["New Arrivals"],
  },
  {
    name: "Double Chocochip Pastry",
    category: "Pastries",
    image: doubleChocochipPastry,
    tags: ["New Arrivals"],
  },
  {
    name: "Blueberry Pastry",
    category: "Pastries",
    image: blueberrypastry,
    tags: ["New Arrivals"],
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
    name: "Chocolate Frosted Donut",
    category: "Donuts",
    image: chocolateFrostedDonut,
    tags: ["Best Sellers"],
  },
  {
    name: "Chocolate Glazed Donut",
    category: "Donuts",
    image: chocolateGlazedDonut,
    tags: ["New Arrivals"],
  },
  {
    name: "Baked Donuts",
    category: "Donuts",
    image: bakedDonuts,
  },
  {
    name: "Butter Croissant",
    category: "Croissants",
    image: butterCroissant,
    tags: ["New Arrivals"],
  },
  {
    name: "Aaloo Puff",
    category: "Puffs",
    image: aalooPuff,
    tags: ["Best Sellers"],
  },
];
