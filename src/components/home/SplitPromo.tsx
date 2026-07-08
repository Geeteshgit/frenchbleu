import { splitPromo } from "@/data/home";
import PromoPane from "./PromoPane";

export default function SplitPromo() {
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
