import Image from "next/image";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import { storyBanner } from "@/data/home";

export default function StoryBanner() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-8 sm:pt-28">
      <div className="pointer-events-none absolute -top-6 left-1/2 h-18 w-full max-w-4xl -translate-x-1/2 sm:-top-16 sm:h-40">
        <Image src={storyBanner.leftImage} alt="Macarons" fill />
      </div>

      <Container banner>
        <FadeUp>
          <p className="text-center text-xl font-light text-primary-foreground sm:text-3xl lg:text-4xl">
            {storyBanner.title}
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
