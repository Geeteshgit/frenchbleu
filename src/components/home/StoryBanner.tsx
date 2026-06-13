import Image from "next/image";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import { storyBanner } from "@/data/home";

export default function StoryBanner() {
  return (
    <section className="relative overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-y-0 left-50 hidden w-[min(45vw,35rem)] -translate-x-1/2 lg:block">
        <Image
          src={storyBanner.leftImage}
          alt="Macarons"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-50 hidden w-[min(44vw,34rem)] translate-x-1/2 lg:block">
        <Image
          src={storyBanner.rightImage}
          alt="Macarons"
          fill
          className="object-contain object-right"
        />
      </div>
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(248,162,171,0.16),transparent_60%)] lg:block" />
      <Container banner>
        <FadeUp className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="mt-4 text-xl font-light tracking-tight text-primary-foreground sm:text-3xl lg:text-4xl">
            {storyBanner.title}
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
