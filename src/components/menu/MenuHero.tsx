import FadeUp from "../animations/FadeUp";
import Container from "../ui/Container";
import { menuHero } from "@/data/menu";
import HeroTitle from "../ui/HeroTitle";

export default function MenuHero() {
  return (
    <section className="bg-primary mx-auto py-24">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <HeroTitle title={menuHero.title} />
          <FadeUp delay={0.1}>
            <p className="max-w-4xl text-xl text-primary-foreground">
              {menuHero.subtitle}
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
