import Image from "next/image";
import { homeHero } from "@/data/home";
import ScaleIn from "../animations/ScaleIn";
import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import HeroTitle from "../ui/HeroTitle";

export default function HomeHero() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col md:flex-row justify-between items-center md:gap-20 pt-12 md:pt-10 md:pb-6 lg:pt-0 lg:pb-4">
        <div className="flex flex-col gap-6 text-center">
          <HeroTitle title={homeHero.title} />
          <FadeUp delay={0.1}>
            <p className="max-w-xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
              {homeHero.subtitle}
            </p>
          </FadeUp>
        </div>
        <ScaleIn delay={0.1} scale={0.96}>
          <div className="">
            <Image
              src={homeHero.image}
              alt="cupcakes"
              className="h-auto w-full"
              priority
            />
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
