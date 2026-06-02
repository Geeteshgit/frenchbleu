import type { FAQItem, InfoCard } from "../types";
import { FaClock, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export const contactHeroCopy = {
  title: "Contact Us",
  subtitle:
    "Custom cakes, macaron boxes, cupcake towers, and event dessert tables are all welcome.",
};

export const contactInfoCards: InfoCard[] = [
  {
    title: "Phone",
    details: ["+91 8745125698"],
    icon: FaPhone,
  },
  {
    title: "Email",
    details: ["frenchbleu2025@gmail.com"],
    icon: FaEnvelope,
  },
  {
    title: "Address",
    details: ["15 Rose Avenue, New York, NY 10001"],
    icon: FaLocationDot,
  },
  {
    title: "Hours",
    details: ["Mon - Sat: 9am - 6pm", "Sun: closed"],
    icon: FaClock,
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Do you offer custom cakes?",
    answer:
      "Yes. We create custom flavors, colors, sizes, and decorative themes for celebrations of all kinds.",
  },
  {
    question: "Can I order a dessert table?",
    answer:
      "Absolutely. We can design a coordinated spread with cakes, cupcakes, macarons, and petite treats.",
  },
  {
    question: "How far in advance should I order?",
    answer:
      "For custom cakes and events, we recommend 5 to 10 days of lead time depending on scope and date.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Yes, local delivery is available for larger orders and special event desserts.",
  },
];

export const contactSocialCopy = {
  title: "Follow the bakery mood online",
  subtitle:
    "See new bakes, packaging details, and behind-the-scenes decorating moments.",
};
