import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import ScaleIn from "../animations/ScaleIn";
import HeroTitle from "../ui/HeroTitle";
import { contactHeroCopy } from "@/data/contact";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-14 pb-0 sm:pt-16 lg:pt-20">
      <div className="flex flex-col items-center gap-3 mx-auto max-w-6xl px-4 pb-24 text-center sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <HeroTitle title={contactHeroCopy.title} />
        <FadeUp delay={0.1}>
          <p className="text-xl">{contactHeroCopy.subtitle}</p>
        </FadeUp>
      </div>

      <ScaleIn delay={0.2}>
        <div className="pointer-events-none absolute inset-x-0 -bottom-3.5 sm:-bottom-65">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <Image
              src="/macarons.png"
              alt="Macarons arranged on a tray"
              width={1600}
              height={1000}
              priority
              className="block h-auto w-full"
            />
          </div>
        </div>
      </ScaleIn>
    </section>
  );
}
