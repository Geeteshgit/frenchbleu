import type { FooterColumn, NavItem, SocialLink } from "../types";
import { FaInstagram } from "react-icons/fa6";

export const brand = {
  name: "FrenchBleu",
  tagline: "Luxury pastel bakes made to feel like a celebration.",
};

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: navigationLinks,
  },
  {
    title: "Catalog",
    links: [
      { label: "Menu", href: "/menu" },
      { label: "Cakes", href: "/menu" },
      { label: "Macarons", href: "/menu" },
      { label: "Celebration Boxes", href: "/contact" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
];
