import Image from "next/image";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import { homeHero } from "@/data/home";
import ScaleIn from "../animations/ScaleIn";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-primary py-34">
      <div className="absolute inset-0 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -left-10 top-16 h-40 w-40 animate-pulse rounded-full bg-primary blur-3xl"
        />
      </div>

      <Container className="relative grid items-center gap-12 py-4 lg:grid-cols-[1.1fr_0.9fr] sm:py-10">
        <FadeUp className="max-w-2xl text-center">
          <h1 className="mt-6 text-4xl font-logo font-medium tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground sm:text-xl lg:text-2xl">
            {homeHero.subtitle}
          </p>
        </FadeUp>
      </Container>

      <ScaleIn delay={0.1} scale={0.96} className="absolute bottom-0 right-50">
        <Image
          src={homeHero.image}
          alt="Pastel cupcake"
          width={500}
          height={500}
          priority
        />
      </ScaleIn>
    </section>
  );
}
