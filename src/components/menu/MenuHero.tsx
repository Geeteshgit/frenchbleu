import HeroContent from "../shared/HeroContent";
import Container from "../ui/Container";
import { menuHero } from "@/data/menu";

export default function MenuHero() {
  return (
    <section className="bg-primary mx-auto py-16">
      <Container>
        <HeroContent title={menuHero.title} subtitle={menuHero.subtitle} />
      </Container>
    </section>
  );
}
