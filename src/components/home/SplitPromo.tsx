import PromoPane from "./PromoPane";
import customCakeImage from "@/assets/custom-cake.png";
import customDessertBoxImage from "@/assets/custom-dessert-box.png";

export default function SplitPromo() {
  const splitPromo = {
    left: {
      title: "Gift the FrenchBleu Experience",
      subtitle: "Build your own dessert box.",
      cta: "Shop Hampers",
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

  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <PromoPane
          title={splitPromo.left.title}
          subtitle={splitPromo.left.subtitle}
          cta={splitPromo.left.cta}
          href={splitPromo.left.href}
          image={splitPromo.left.image}
          bgClassName="bg-primary"
          align="left"
        />

        <PromoPane
          title={splitPromo.right.title}
          subtitle={splitPromo.right.subtitle}
          cta={splitPromo.right.cta}
          href={splitPromo.right.href}
          image={splitPromo.right.image}
          bgClassName="bg-secondary"
          align="right"
        />
      </div>
    </section>
  );
}
