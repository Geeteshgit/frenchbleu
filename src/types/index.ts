import type { StaticImageData } from "next/image";
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
  icon: StaticImageData;
  popular: boolean;
};

export type ProductTag = "Best Sellers" | "New Arrivals";

export type Product = {
  name: string;
  category: string;
  image: StaticImageData;
  tags?: ProductTag[];
};

export type Hamper = {
  name: string;
  description: string;
  image: StaticImageData;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
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
