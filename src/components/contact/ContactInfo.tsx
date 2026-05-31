import Container from "../ui/Container";
import Card from "../ui/Card";
import FadeUp from "../animations/FadeUp";
import ContactForm from "./ContactForm";
import { contactInfoCards } from "@/data/contact";
import LocationMap from "./LocationMap";

export default function ContactInfo() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactInfoCards.map((card, index) => (
                <FadeUp key={card.title} delay={index * 0.08} y={18}>
                  <Card className="h-full flex-col border-0 bg-secondary/20 px-4 py-4 text-center">
                    <card.icon
                      className="mx-auto h-10 w-10 text-secondary"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold text-foreground">
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
            <LocationMap />
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
