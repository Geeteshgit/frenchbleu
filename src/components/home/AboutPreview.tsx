import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";
import { aboutPreview } from "@/data/home";

export default function AboutPreview() {
  return (
    <section className="bg-card py-6 md:py-10">
      <SectionTitle title={aboutPreview.title} centered />

      <Container className="mt-6">
        <div className="mx-auto max-w-4xl text-foreground">
          {aboutPreview.content.map((para, index) => (
            <FadeUp
              key={index}
              delay={index * 0.15}
              className={index > 0 ? "mt-4" : ""}
            >
              <p>{para}</p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
