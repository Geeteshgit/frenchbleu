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
        <div className="flex flex-col gap-6">
          <HeroTitle title={aboutHeroCopy.title} />
          <FadeUp delay={0.1}>
            <p className="max-w-xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
              {aboutHeroCopy.subtitle}
            </p>
          </FadeUp>
        </div>
        <ScaleIn delay={0.1} scale={0.96}>
          <div>
            <Image
              src={aboutHeroCopy.image}
              alt="Pastel cupcake"
              className="h-auto w-full"
              priority
            />
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
