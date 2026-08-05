import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeUp from "@/components/animations/FadeUp";

export default function AboutPreview() {
  const aboutPreviewContent = [
    "At FrenchBleu, we believe every bake should bring comfort, joy, and a touch of elegance. From artisan breads to handcrafted pastries and cakes, every creation is made fresh with care and passion.",
    "Inspired by the timeless traditions of French baking, we use quality ingredients and thoughtful craftsmanship to create treats that are both beautiful and delicious. Whether you're visiting for your daily favorite or celebrating a special occasion, we're here to make every moment a little sweeter.",
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
