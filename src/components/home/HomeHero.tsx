import Image from "next/image";
import { homeHero } from "@/data/home";
import ScaleIn from "../animations/ScaleIn";
import HeroContent from "../shared/HeroContent";
import Container from "../ui/Container";

export default function HomeHero() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-8">
        <HeroContent title={homeHero.title} subtitle={homeHero.subtitle} />
        <ScaleIn delay={0.1} scale={0.96}>
          <div className="relative h-56 w-56 sm:h-84 sm:w-84 lg:h-128 lg:w-128">
            <Image src={homeHero.image} alt="Pastel cupcake" priority fill />
          </div>
        </ScaleIn>
      </Container>
    </section>
  );
}
