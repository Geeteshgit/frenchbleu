import Image from "next/image";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";
import { storyCopy } from "@/data/about";
import ourStoryImage from "@/assets/our-story.png";

export default function StorySection() {
  return (
    <section className="bg-background py-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
          <FadeUp>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src={ourStoryImage}
                alt="FrenchBleu bakery"
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="grid gap-6">
            <div>
              <div className="inline-flex flex-col">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
                  Our Story
                </p>
                <span className="mt-1 h-0.5 w-1/6 rounded-full bg-secondary" />
              </div>

              <h2 className="mt-4 text-4xl font-medium tracking-tight text-foreground">
                Born from a love for French pâtisserie.
              </h2>

              <div className="mt-6 space-y-4 text-base text-muted-foreground sm:text-lg">
                {storyCopy.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
