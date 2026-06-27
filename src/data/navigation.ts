import type { FooterColumn, NavItem, SocialLink } from "../types";
import { FaInstagram } from "react-icons/fa6";

export const brand = {
  name: "FrenchBleu",
  tagline: "Luxury pastel bakes made to feel like a celebration.",
};

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Hampers", href: "/hampers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Explore",
    links: navigationLinks,
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
];
