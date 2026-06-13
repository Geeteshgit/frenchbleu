import FadeUp from "../animations/FadeUp";
import { galleryHero } from "@/data/gallery";
import HeroTitle from "../ui/HeroTitle";

export default function GalleryHero() {
  return (
    <section className="bg-primary mx-auto py-24">
      <div className="flex flex-col items-center gap-10 text-center">
        <HeroTitle title={galleryHero.title} />
        <FadeUp delay={0.1}>
          <p className="max-w-4xl text-primary-foreground text-xl">
            {galleryHero.subtitle}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
