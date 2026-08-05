import type { FAQItem, Info } from "../types";
import { FaClock, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export const contactInfo: Info[] = [
  {
    title: "Phone",
    details: ["+91 8745125698"],
    icon: FaPhone,
  },
  {
    title: "Email",
    details: ["frenchbleubakery@gmail.com"],
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
    question: "Is your bakery fully vegetarian?",
    answer:
      "Yes. All of our products are 100% vegetarian, and we do not use any non-vegetarian ingredients in our bakery.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Our opening hours are listed on the Contact page and may vary during holidays or special occasions. Please check before visiting.",
  },
  {
    question: "Do you bake fresh every day?",
    answer:
      "Yes. We bake fresh breads, pastries, cakes, and other baked goods daily to ensure the best quality and taste.",
  },
  {
    question: "Do you make custom cakes?",
    answer:
      "Yes. We create custom cakes for birthdays, anniversaries, weddings, and other special occasions. Contact us in advance to discuss your design and requirements.",
  },
  {
    question: "How far in advance should I place a custom order?",
    answer:
      "We recommend placing custom cake orders at least 2-3 days in advance. Larger or more detailed orders may require additional notice.",
  },
  {
    question: "Do you offer eggless cakes?",
    answer:
      "Yes. We offer delicious eggless cakes and desserts. Please contact us to learn about available flavors and customization options.",
  },
  {
    question: "Can I place an order online?",
    answer:
      "You can contact us through our website or by phone to enquire about products and place an order, subject to availability.",
  },
  {
    question: "Where is French Bleu Bakery located?",
    answer:
      "Our address and an interactive Google Map are available on the Contact page to help you find us easily.",
  },
  {
    question: "How can I contact the bakery?",
    answer:
      "You can reach us through the contact form on our website, by phone, or by visiting us during business hours.",
  },
];
