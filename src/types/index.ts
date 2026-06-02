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
  icon: string;
  popular: boolean;
};

export type GalleryHeroSlide = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type ProductTag = "Best Sellers" | "New Arrivals";

export type Product = {
  title: string;
  category: string;
  image: string;
  tags?: ProductTag[];
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
  icon: IconType;
};

export type AnimationProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};
