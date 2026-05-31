import Image from "next/image";
import FadeUp from "../animations/FadeUp";
import { contactHeroCopy } from "../../data/contact";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-14 pb-0 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-6xl px-4 pb-24 text-center sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
        <FadeUp y={16} className="mx-auto max-w-3xl text-primary-foreground">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
            {contactHeroCopy.title}
          </h1>
          <p className="mt-3 text-base leading-7 text-primary-foreground sm:text-lg sm:leading-8">
            {contactHeroCopy.subtitle}
          </p>
        </FadeUp>
      </div>

      <FadeUp
        y={18}
        delay={0.08}
        className="pointer-events-none absolute inset-x-0 -bottom-3.5 sm:-bottom-45"
      >
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
      </FadeUp>
    </section>
  );
}
