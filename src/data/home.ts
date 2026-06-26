import productBannerImage from "@/assets/product-banner.png";
import homeHeroImage from "@/assets/home-hero.png";
import storyBannerImage from "@/assets/story-banner.png";
import customCakeImage from "@/assets/custom-cake.png";
import customDessertBoxImage from "@/assets/custom-dessert-box.png";

export const homeHero = {
  title: "FrenchBleu",
  subtitle:
    "Handcrafted desserts, editorial presentation, and a playful boutique mood designed to feel indulgent, airy, and irresistibly cute.",
  image: homeHeroImage,
};

export const popularCategories = {
  title: "Popular Categories",
};

export const productBanner = {
  title: "Macarons lined up in blue display.",
  subtitle:
    "Light almond shells, glossy fillings, and a perfectly playful presentation for gifting or events.",
  cta: "Browse macarons",
  image: productBannerImage,
};

export const splitPromoCopy = {
  left: {
    title: "Gift the FrenchBleu Experience",
    subtitle: "Build your own dessert box.",
    cta: "Build Your Own Hamper",
    href: "/hampers",
    image: customDessertBoxImage,
  },
  right: {
    title: "Your Vision, Beautifully Baked.",
    subtitle: "Create a cake that's uniquely yours.",
    cta: "Design A Cake",
    href: "/contact",
    image: customCakeImage,
  },
};

export const aboutPreview = {
  title: "About FrenchBleu",
  content: [
    "We create desserts that feel airy, polished, and softly luxurious, with pastel colors and refined details in every layer.",

    "Every dessert is crafted to balance elegance and comfort, combining delicate textures, refined presentation, and memorable flavors that feel both modern and timeless. Every dessert is crafted to balance elegance and comfort, combining delicate textures, refined presentation, and memorable flavors that feel both modern and timeless.",
  ],
};

export const storyBanner = {
  title: "Desserts for celebrations worth remembering.",
  image: storyBannerImage,
};
