import type { TeamMember, Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mila R.",
    role: "Wedding client",
    quote: "The cake looked like a couture centerpiece and tasted even better.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Amara S.",
    role: "Birthday host",
    quote: "Every box felt custom-made, polished, and impossibly photogenic.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Noah T.",
    role: "Event planner",
    quote:
      "Soft colors, clean details, and premium presentation from box to bite.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];

export const teamHighlights: TeamMember[] = [
  {
    id: 1,
    name: "Claire Beaumont",
    role: "Pastry Chef",
    bio: "Designs the bakery's signature cakes and finishes every order with editorial precision.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Mina Laurent",
    role: "Macaron Artist",
    bio: "Balances delicate shells, vibrant fillings, and pastel palettes for each collection.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Theo Maren",
    role: "Celebration Stylist",
    bio: "Builds layered dessert tables, florals, and packaging that feel like an event.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1000&q=80",
  },
];
