import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import HeroTitle from "../ui/HeroTitle";
import { menuHero } from "@/data/menu";

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32 lg:py-40">
      {/* Top */}
      <Image
        src="/cookie-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute top-[8%] left-[6%] w-10 rotate-[-20deg] sm:w-14 lg:w-20"
      />

      <Image
        src="/cupcake-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute top-[5%] left-[35%] hidden w-8 rotate-[15deg] md:block lg:w-12"
      />

      <Image
        src="/pastry-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute top-[12%] right-[25%] w-12 rotate-[25deg] sm:w-16 lg:w-20"
      />

      {/* Middle */}
      <Image
        src="/brownie-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute top-[35%] left-[10%] w-10 rotate-[18deg] sm:w-12 lg:w-16"
      />

      <Image
        src="/chocolate-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute top-[28%] right-[5%] hidden w-10 rotate-[-12deg] md:block lg:w-14"
      />

      {/* Bottom */}
      <Image
        src="/pastry-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute bottom-[28%] hidden md:block left-[6%] w-10 rotate-[-25deg] sm:w-14 lg:w-16"
      />

      <Image
        src="/croissant-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute bottom-[10%] left-[20%] w-10 rotate-[20deg] lg:w-18"
      />

      <Image
        src="/macaron-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute bottom-[10%] right-[25%] w-12 rotate-[30deg] sm:w-16 lg:w-20"
      />

      <Image
        src="/cupcake-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute bottom-[8%] right-[45%] hidden w-8 rotate-[-18deg] md:block lg:w-12"
      />

      <Image
        src="/cupcake-sticker.png"
        alt=""
        aria-hidden
        width={100}
        height={100}
        className="pointer-events-none absolute bottom-[5%] right-[5%] w-10 rotate-[15deg] sm:w-14 lg:w-16"
      />

      {/* Content */}
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
