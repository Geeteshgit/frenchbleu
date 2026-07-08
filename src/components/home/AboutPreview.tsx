import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";

export default function AboutPreview() {
  const aboutPreviewContent = [
    "We create desserts that feel airy, polished, and softly luxurious, with pastel colors and refined details in every layer.",
    "Every dessert is crafted to balance elegance and comfort, combining delicate textures, refined presentation, and memorable flavors that feel both modern and timeless. Every dessert is crafted to balance elegance and comfort, combining delicate textures, refined presentation, and memorable flavors that feel both modern and timeless.",
  ];

  return (
    <section className="bg-card py-6 md:py-10">
      <SectionTitle title="About FrenchBleu" centered />

      <Container className="mt-6">
        <div className="mx-auto max-w-4xl text-foreground">
          {aboutPreviewContent.map((para, index) => (
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
