import HeroContent from "../shared/HeroContent";
import { galleryHero } from "@/data/gallery";

export default function GalleryHero() {
  return (
    <section className="bg-primary">
      <HeroContent title={galleryHero.title} subtitle={galleryHero.subtitle} />
    </section>
  );
}
