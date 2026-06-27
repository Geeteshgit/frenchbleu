import type { Hamper } from "../types";
import hampersHeroImage from "@/assets/hampers-hero.png";
import ribbon from "@/assets/personalisation-icons/ribbon-icon.svg";
import card from "@/assets/personalisation-icons/card-icon.svg";
import dessert from "@/assets/personalisation-icons/dessert-icon.svg";
import wallet from "@/assets/personalisation-icons/wallet-icon.svg";
import box from "@/assets/personalisation-icons/box-icon.svg";
import candle from "@/assets/personalisation-icons/candle-icon.svg";
import nametag from "@/assets/personalisation-icons/nametag-icon.svg";
import palette from "@/assets/personalisation-icons/palette-icon.svg";
import hamper1 from "@/assets/hampers/hamper-1.jpeg";
import hamper2 from "@/assets/hampers/hamper-2.jpeg";
import hamper3 from "@/assets/hampers/hamper-3.jpeg";
import hamper4 from "@/assets/hampers/hamper-4.jpeg";
import hamper5 from "@/assets/hampers/hamper-5.jpeg";
import hamper6 from "@/assets/hampers/hamper-6.jpeg";
import hamper7 from "@/assets/hampers/hamper-7.jpeg";
import hamper8 from "@/assets/hampers/hamper-8.jpeg";
import hamper9 from "@/assets/hampers/hamper-9.jpeg";
import hamper10 from "@/assets/hampers/hamper-10.jpeg";

export const hampersHero = {
  title: "Luxury Hampers",
  subtitle:
    "Every FrenchBleu hamper is thoughtfully handcrafted and customized to suit your celebration. Speak with our gifting experts to create something truly memorable.",
  image: hampersHeroImage,
  cta: "Contact to Customize",
};

export const personalisations = [
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
    name: "The 'Thank You' I Could Never Put Into Words",
    description:
      "For the people who gave you everything and still say, \'You don\'t have to get us anything.",
    image: hamper1,
  },
  {
    name: "Berry Romance",
    description: "You Still Make My Heart Skip a Beat.",
    image: hamper2,
  },
  {
    name: "Fresh Out of the Oven, Straight to the Heart",
    description:
      "Because they have a way of making every house feel like home.",
    image: hamper3,
  },
  {
    name: "A Hug, Beautifully Wrapped",
    description:
      "When your arms can't reach them, let this gift do the hugging.",
    image: hamper5,
  },
  {
    name: "The Chocolate Emergency Kit",
    description: "Because therapy is expensive, but chocolate is convincing.",
    image: hamper8,
  },
  {
    name: "Just Because I Thought of You",
    description: "No occasion. No reason. Just you.",
    image: hamper4,
  },
  {
    name: "The Birthday Hero",
    description: "Birthdays deserve more than just candles.",
    image: hamper9,
  },
  {
    name: "Let's Catch Up",
    description: "Best enjoyed with tea and the people you've missed.",
    image: hamper6,
  },
  {
    name: "Let's Cancel Our Plans... and Eat This Instead",
    description: "Made for conversations that last longer than the tea.",
    image: hamper7,
  },
  {
    name: "You Earned Every Bite",
    description:
      "For promotions, milestones and every victory worth celebrating.",
    image: hamper10,
  },
];
