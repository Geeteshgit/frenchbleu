import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import ScaleIn from "../animations/ScaleIn";
import HeroTitle from "../ui/HeroTitle";
import { contactHeroCopy } from "@/data/contact";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 pb-18 text-center sm:px-6 sm:pb-28 lg:px-8">
        <HeroTitle title={contactHeroCopy.title} />

        <FadeUp delay={0.1}>
          <p className="text-xl">{contactHeroCopy.subtitle}</p>
        </FadeUp>
      </div>

      <ScaleIn delay={0.2}>
        <div className="pointer-events-none absolute -bottom-4 left-1/2 h-34 w-full -translate-x-1/2 translate-y-1/4 sm:h-48 md:h-38 lg:h-40">
          <Image
            src="/cupcakes-banner.png"
            alt="Cupcakes arranged on a tray"
            fill
            className="object-contain"
            priority
          />
        </div>
      </ScaleIn>
    </section>
  );
}
