import type { FooterColumn, NavItem, SocialLink } from "../types";
import { FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa6";

export const brand = {
  name: "FrenchBleu",
  tagline: "Luxury pastel bakes made to feel like a celebration.",
};

export const navigationLinks: NavItem[] = [
  { label: "Home", href: "/" },
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
    title: "Treats",
    links: [
      { label: "Cakes", href: "/gallery" },
      { label: "Macarons", href: "/gallery" },
      { label: "Cupcakes", href: "/gallery" },
      { label: "Celebration Boxes", href: "/contact" },
    ],
  },
  {
    title: "Visit",
    links: [
      { label: "Order by message", href: "/contact" },
      { label: "Private events", href: "/contact" },
      { label: "Custom cakes", href: "/contact" },
      { label: "Wedding desserts", href: "/contact" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { label: "Pinterest", icon: FaPinterestP, href: "https://pinterest.com" },
  { label: "TikTok", icon: FaTiktok, href: "https://tiktok.com" },
];

export const contactLinks: NavItem[] = [
  { label: "hello@sweetbakery.com", href: "mailto:hello@sweetbakery.com" },
  { label: "+1 (212) 555-0198", href: "tel:+12125550198" },
  { label: "15 Rose Avenue, New York", href: "#" },
];
