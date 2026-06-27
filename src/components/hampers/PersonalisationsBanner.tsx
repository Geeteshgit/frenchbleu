import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import FadeUp from "../animations/FadeUp";
import { personalisations } from "@/data/hampers";

export default function PersonalisationsBanner() {
  return (
    <section className="bg-card py-10">
      <SectionTitle title="Personalisation Options" centered />

      <Container className="mt-8 md:mt-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8">
          {personalisations.map((item, index) => (
            <FadeUp key={item.title} delay={index * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div className="relative h-10 w-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <span className="mt-3 whitespace-pre-line text-base font-medium text-foreground">
                  {item.title}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
