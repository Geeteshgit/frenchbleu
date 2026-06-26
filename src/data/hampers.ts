import type { Hamper } from "../types";
import hampersHeroImage from "@/assets/hampers-hero.png";
import ribbon from "@/assets/personalization-icons/ribbon-icon.svg";
import card from "@/assets/personalization-icons/card-icon.svg";
import dessert from "@/assets/personalization-icons/dessert-icon.svg";
import wallet from "@/assets/personalization-icons/wallet-icon.svg";
import box from "@/assets/personalization-icons/box-icon.svg";
import candle from "@/assets/personalization-icons/candle-icon.svg";
import balloons from "@/assets/personalization-icons/balloons-icon.svg";
import nametag from "@/assets/personalization-icons/nametag-icon.svg";
import palette from "@/assets/personalization-icons/palette-icon.svg";

export const hampersHero = {
  title: "Luxury Hampers",
  subtitle:
    "Every FrenchBleu hamper is thoughtfully handcrafted and customized to suit your celebration. Speak with our gifting experts to create something truly memorable.",
  image: hampersHeroImage,
  cta: "Contact to Customize",
};

export const personalizations = [
  {
    image: ribbon,
    title: "Ribbon Color",
  },
  {
    image: card,
    title: "Greeting Card",
  },
  {
    image: dessert,
    title: "Dessert Selection",
  },
  {
    image: wallet,
    title: "Budget Friendly",
  },
  {
    image: box,
    title: "Box Size",
  },
  {
    image: candle,
    title: "Candles & Decor",
  },
  {
    image: nametag,
    title: "Name Tag",
  },
  {
    image: palette,
    title: "Theme Colors",
  },
];

export const hampers: Hamper[] = [
  {
    name: "Rose Macaron Tower",
    description:
      "A stunning tower of rose-flavored macarons, perfect for any special occasion.",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Velvet Cupcake Bouquet",
    description:
      "A delightful arrangement of velvety cupcakes, ideal for any celebration.",
    image:
      "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Celebration Cake Detail",
    description:
      "A beautiful detail of our celebration cake, perfect for any special occasion.",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Sugared Donut Stack",
    description:
      "A delightful stack of sugared donuts, perfect for any sweet craving.",
    image:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Wedding Cake Swirls",
    description:
      "A beautiful swirl of our wedding cake, perfect for any special occasion.",
    image:
      "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Cookie Ribbon Tray",
    description:
      "A delightful arrangement of cookie ribbons, perfect for any sweet craving.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Pastel Pastry Tray",
    description:
      "A delightful arrangement of pastel pastries, perfect for any sweet craving.",
    image:
      "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Baby Blue Macarons",
    description:
      "A delightful arrangement of baby blue macarons, perfect for any special occasion.",
    image:
      "https://images.unsplash.com/photo-1616690710400-7c3c1dba0f35?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Cupcake Frosting Closeup",
    description:
      "A delightful closeup of our cupcake frosting, perfect for any sweet craving.",
    image:
      "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1400&q=80",
  },
];
