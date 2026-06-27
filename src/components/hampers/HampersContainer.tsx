import Container from "../ui/Container";
import HamperCard from "../ui/HamperCard";
import SectionTitle from "../ui/SectionTitle";
import { hampers } from "@/data/hampers";

export default function HampersContainer() {
  return (
    <section className="bg-background py-10">
      <SectionTitle title="Your Hampers, Your Moments" centered />

      <Container className="mt-8 sm:mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-15 md:gap-y-20 lg:gap-y-25 sm:grid-cols-2">
          {hampers.map((hamper) => (
            <div key={hamper.name} className="flex flex-col">
              <HamperCard hamper={hamper} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
