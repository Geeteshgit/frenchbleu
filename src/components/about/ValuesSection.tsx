import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import FadeUp from "../animations/FadeUp";
import { valuesCopy } from "@/data/about";

export default function ValuesSection() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <SectionTitle
        title="A bakery philosophy shaped by craftsmanship, beauty, and celebration."
        subtitle="Soft presentation and premium taste work together in every dessert we make."
        centered
      />

      <Container className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          {valuesCopy.map((value, index) => (
            <FadeUp key={value.title} delay={index * 0.1} y={20}>
              <Card className="h-full bg-white p-7">
                <h3 className="text-3xl font-medium text-foreground">
                  {value.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
