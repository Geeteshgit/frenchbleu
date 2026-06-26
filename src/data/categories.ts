import type { Category } from "@/types";

import cakesIcon from "@/assets/categories/cakes-icon.svg";
import cupcakesIcon from "@/assets/categories/cupcakes-icon.svg";
import pastriesIcon from "@/assets/categories/pastries-icon.svg";
import macaronsIcon from "@/assets/categories/macarons-icon.svg";
import cookiesIcon from "@/assets/categories/cookies-icon.svg";
import donutsIcon from "@/assets/categories/donuts-icon.svg";
import croissantsIcon from "@/assets/categories/croissants-icon.svg";
import browniesIcon from "@/assets/categories/brownies-icon.svg";
import chocolavaIcon from "@/assets/categories/chocolava-icon.svg";
import rollsIcon from "@/assets/categories/rolls-icon.svg";
import puffsIcon from "@/assets/categories/puffs-icon.svg";

export const categories: Category[] = [
  {
    id: "cakes",
    name: "Cakes",
    icon: cakesIcon,
    popular: true,
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    icon: cupcakesIcon,
    popular: true,
  },
  {
    id: "pastries",
    name: "Pastries",
    icon: pastriesIcon,
    popular: false,
  },
  {
    id: "macarons",
    name: "Macarons",
    icon: macaronsIcon,
    popular: true,
  },
  {
    id: "cookies",
    name: "Cookies",
    icon: cookiesIcon,
    popular: false,
  },
  {
    id: "donuts",
    name: "Donuts",
    icon: donutsIcon,
    popular: false,
  },
  {
    id: "croissants",
    name: "Croissants",
    icon: croissantsIcon,
    popular: false,
  },
  {
    id: "brownies",
    name: "Brownies",
    icon: browniesIcon,
    popular: true,
  },
  {
    id: "chocolava",
    name: "Chocolava",
    icon: chocolavaIcon,
    popular: true,
  },
  {
    id: "rolls",
    name: "Rolls",
    icon: rollsIcon,
    popular: true,
  },
  {
    id: "puffs",
    name: "Puffs",
    icon: puffsIcon,
    popular: false,
  },
];
