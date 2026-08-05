import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import ScaleIn from "../animations/ScaleIn";
import HeroTitle from "../ui/HeroTitle";
import contactHeroImage from "@/assets/contact-hero.png";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 pb-18 text-center sm:px-6 sm:pb-28 lg:px-8">
        <HeroTitle title="Contact Us" />

        <FadeUp delay={0.1}>
          <p className="text-xl">{`Have a question or custom order? We'd love to hear from you.`}</p>
        </FadeUp>
      </div>

      <ScaleIn delay={0.2}>
        <div className="pointer-events-none absolute -bottom-8 sm:-bottom-14 md:-bottom-18 left-1/2 w-full max-w-md sm:max-w-3xl -translate-x-1/2">
          <Image
            src={contactHeroImage}
            alt="cupcakes-banner"
            className="w-full h-auto"
            priority
          />
        </div>
      </ScaleIn>
    </section>
  );
}
