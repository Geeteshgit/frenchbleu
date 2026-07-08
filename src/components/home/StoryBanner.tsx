import Image from "next/image";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import storyBannerImage from "@/assets/story-banner.png";

export default function StoryBanner() {
  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-8 sm:pt-28">
      <Container banner>
        <FadeUp>
          <p className="text-center text-xl font-light text-primary-foreground sm:text-3xl lg:text-4xl">
            Desserts for celebrations worth remembering.
          </p>
        </FadeUp>
      </Container>

      <div className="pointer-events-none absolute -top-8 left-1/2 w-full max-w-4xl -translate-x-1/2 sm:-top-16 md:-top-20 lg:-top-22">
        <Image
          src={storyBannerImage}
          alt="macarons-banner"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
