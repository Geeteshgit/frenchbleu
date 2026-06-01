import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import { faqItems } from "../../data/contact";
import { FaChevronDown } from "react-icons/fa6";

export default function FAQSection() {
  return (
    <section className="mt-8">
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="A quick overview of how we handle celebration cakes, events, and local delivery."
        centered
      />

      <Container className="mt-12 max-w-4xl">
        <div className="grid gap-3">
          {faqItems.map((faq) => (
            <Card
              key={faq.question}
              className="overflow-hidden rounded-lg bg-primary"
            >
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-xl font-medium text-primary-foreground">
                  <span>{faq.question}</span>
                  <FaChevronDown
                    className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="grid max-h-0 overflow-hidden transition-all duration-300 group-open:max-h-60">
                  <p className="px-4 pb-4 text-base leading-8 text-primary-foreground">
                    {faq.answer}
                  </p>
                </div>
              </details>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
