import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";

export default function MenuHero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <Container className="relative py-16 sm:py-20">
        <FadeUp y={18} className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-primary-foreground">
            Menu
          </p>
          <h1 className="mt-4 font-logo text-4xl leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            A carousel-driven menu built for browsing by category.
          </h1>
          <p className="mt-6 text-base leading-8 text-primary-foreground sm:text-lg">
            Explore handcrafted cakes, cupcakes, macarons, and pastries in a
            layout that keeps every category easy to scan.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
}
