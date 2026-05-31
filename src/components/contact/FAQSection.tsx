import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { faqItems } from "../../data/contact";

export default function FAQSection() {
  return (
    <section className="bg-primary py-20 sm:py-24">
      <SectionTitle
        title="Helpful answers for custom dessert orders."
        subtitle="A quick overview of how we handle celebration cakes, events, and local delivery."
        centered
      />

      <Container className="mt-12 max-w-4xl">
        <div className="grid gap-4">
          {faqItems.map((faq) => (
            <Card key={faq.question} className="bg-white p-0">
              <details className="group p-6 sm:p-7">
                <summary className="cursor-pointer list-none text-xl font-medium tracking-tight text-foreground">
                  {faq.question}
                </summary>
                <p className="mt-4 text-base leading-8 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
