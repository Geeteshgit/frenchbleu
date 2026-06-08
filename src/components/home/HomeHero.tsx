import Image from "next/image";
import { homeHero } from "@/data/home";
import ScaleIn from "../animations/ScaleIn";
import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import HeroTitle from "../ui/HeroTitle";

export default function HomeHero() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 sm:pt-0">
        <div className="flex flex-col items-center gap-6 text-center">
          <HeroTitle title={homeHero.title} />
          <FadeUp delay={0.1}>
            <p className="max-w-xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
              {homeHero.subtitle}
            </p>
          </FadeUp>
        </div>
        <ScaleIn delay={0.1} scale={0.96}>
          <div className="relative h-56 w-56 sm:h-84 sm:w-84 lg:h-128 lg:w-128">
            <Image src={homeHero.image} alt="Pastel cupcake" priority fill />
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
