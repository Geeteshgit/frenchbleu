import { splitPromoCopy } from "@/data/home";
import PromoPane from "./PromoPane";

export default function SplitPromo() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <PromoPane
          title={splitPromoCopy.left.title}
          subtitle={splitPromoCopy.left.subtitle}
          cta={splitPromoCopy.left.cta}
          href={splitPromoCopy.left.href}
          image={splitPromoCopy.left.image}
          bgClassName="bg-primary"
          align="left"
        />

        <PromoPane
          title={splitPromoCopy.right.title}
          subtitle={splitPromoCopy.right.subtitle}
          cta={splitPromoCopy.right.cta}
          href={splitPromoCopy.right.href}
          image={splitPromoCopy.right.image}
          bgClassName="bg-secondary"
          align="right"
        />
      </div>
    </section>
  );
}
