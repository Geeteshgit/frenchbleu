import Image from "next/image";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import { aboutHeroCopy } from "@/data/about";
import HeroTitle from "../ui/HeroTitle";
import ScaleIn from "../animations/ScaleIn";

export default function AboutHero() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <HeroTitle title={aboutHeroCopy.title} />
          <FadeUp delay={0.1}>
            <p className="max-w-xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
              {aboutHeroCopy.subtitle}
            </p>
          </FadeUp>
        </div>
        <ScaleIn delay={0.1} scale={0.96}>
          <div className="relative h-56 w-56 sm:h-84 sm:w-84 lg:h-104 lg:w-104">
            <Image
              src={aboutHeroCopy.image}
              alt="Pastel cupcake"
              priority
              fill
            />
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
