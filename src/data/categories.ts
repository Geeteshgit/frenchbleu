import type { Category } from "@/types";

import cakesIcon from "@/assets/categories/cakes-icon.png";
import cupcakesIcon from "@/assets/categories/cupcakes-icon.png";
import pastriesIcon from "@/assets/categories/pastries-icon.png";
import macaronsIcon from "@/assets/categories/macarons-icon.png";
import cookiesIcon from "@/assets/categories/cookies-icon.png";
import donutsIcon from "@/assets/categories/donuts-icon.png";
import croissantsIcon from "@/assets/categories/croissants-icon.png";
import browniesIcon from "@/assets/categories/brownies-icon.png";

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
    id: "patties",
    name: "Patties",
    icon: pastriesIcon,
    popular: false,
  },
  {
    id: "donuts",
    name: "Donuts",
    icon: donutsIcon,
    popular: true,
  },
  {
    id: "croissants",
    name: "Croissants",
    icon: croissantsIcon,
    popular: true,
  },
  {
    id: "brownies",
    name: "Brownies",
    icon: browniesIcon,
    popular: true,
  },
];
