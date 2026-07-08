import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import HeroTitle from "../ui/HeroTitle";
import Button from "../ui/Button";
import Container from "../ui/Container";
import hampersHeroImage from "@/assets/hampers-hero.png";

export default function HampersHero() {
  return (
    <section className="bg-primary">
      <Container className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20 pt-12 md:pt-10 md:pb-6 lg:pt-12 lg:pb-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-8">
          <HeroTitle title="Luxury Hampers" />
          <FadeUp delay={0.1}>
            <p className="max-w-2xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
              Every FrenchBleu hamper is thoughtfully handcrafted and customized
              to suit your celebration. Speak with our gifting experts to create
              something truly memorable.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <Button href="/contact" variant="secondary">
              Contact to Customize
            </Button>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <div className="max-w-lg lg:max-w-full">
            <Image
              src={hampersHeroImage}
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
