import Container from "../ui/Container";
import Card from "../ui/Card";
import FadeUp from "../animations/FadeUp";
import FadeIn from "../animations/FadeIn";
import SlideIn from "../animations/SlideIn";
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";
import { contactInfoCards } from "@/data/contact";

export default function ContactInfo() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="space-y-8">
            <div className="grid gap-2 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {contactInfoCards.map((card, index) => (
                <FadeUp key={card.title} delay={index * 0.08}>
                  <Card className="h-full flex-col border-0 bg-secondary/20 px-4 py-4 text-center rounded-xl">
                    <card.icon
                      className="mx-auto h-6 w-6 sm:h-10 sm:w-10 text-secondary"
                      aria-hidden="true"
                    />

                    <h3 className="text-lg font-semibold text-foreground ">
                      {card.title}
                    </h3>

                    <div className="space-y-1 text-sm leading-6 text-muted-foreground">
                      {card.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                  </Card>
                </FadeUp>
              ))}
            </div>

            <FadeIn>
              <LocationMap />
            </FadeIn>
          </div>

          <SlideIn direction="right">
            <div className="lg:sticky lg:top-24">
              <ContactForm />
            </div>
          </SlideIn>
        </div>
      </Container>
    </section>
  );
}
