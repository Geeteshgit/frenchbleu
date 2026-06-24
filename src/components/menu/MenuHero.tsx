import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import HeroTitle from "../ui/HeroTitle";
import { menuHero, menuHeroStickers } from "@/data/menu";

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32 lg:py-40">
      {menuHeroStickers.map((sticker, index) => (
        <Image
          key={index}
          src={sticker.src}
          alt=""
          aria-hidden
          className={`pointer-events-none absolute ${sticker.className}`}
        />
      ))}

      <Container>
        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <HeroTitle title={menuHero.title} />

          <FadeUp delay={0.1}>
            <p className="max-w-4xl text-base text-primary-foreground sm:text-lg md:text-xl">
              {menuHero.subtitle}
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
