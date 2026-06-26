import Image from "next/image";
import { hampersHero } from "@/data/hampers";
import FadeUp from "../animations/FadeUp";
import HeroTitle from "../ui/HeroTitle";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function HampersHero() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 pt-12 md:pt-10 md:pb-6 lg:pt-12 lg:pb-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
          <HeroTitle title={hampersHero.title} />
          <FadeUp delay={0.1}>
            <p className="max-w-2xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
              {hampersHero.subtitle}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Button href="/contact" variant="secondary">
              {hampersHero.cta}
            </Button>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="max-w-lg lg:max-w-full">
            <Image
              src={hampersHero.image}
              alt="FrenchBleu premium gift hamper"
              className="h-auto w-full"
              priority
            />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
