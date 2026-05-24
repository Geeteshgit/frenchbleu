import type { IconType } from "react-icons";

export type NavItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
};

export type Category = {
  id: string;
  name: string;
  image: string;
};

export type GalleryHeroSlide = {
  id: number;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
};

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  image: string;
  badge: string;
  description: string;
  tags: string[];
};

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "wide" | "tall" | "square";
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type InfoCard = {
  title: string;
  details: string[];
};
