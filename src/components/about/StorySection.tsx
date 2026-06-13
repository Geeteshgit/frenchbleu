import Container from "../ui/Container";
import Card from "../ui/Card";
import FadeUp from "../animations/FadeUp";
import { storyCopy } from "@/data/about";

export default function StorySection() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <FadeUp>
            <h2 className="mt-5 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
              From a tiny pastel studio to a full celebration bakery.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
              {storyCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {storyCopy.metrics.map((metric) => (
                <Card key={metric.label} className="bg-white p-5 text-center">
                  <p className="text-3xl font-medium text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                    {metric.label}
                  </p>
                </Card>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="grid gap-6">
            <Card className="bg-secondary p-6 sm:p-8">
              <p className="mt-5 text-2xl leading-10 text-foreground sm:text-3xl">
                {storyCopy.philosophy}
              </p>
            </Card>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
