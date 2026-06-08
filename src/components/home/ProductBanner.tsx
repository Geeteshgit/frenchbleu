import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { productBanner } from "@/data/home";

export default function ProductBanner() {
  return (
    <section className="bg-primary">
      <Container banner className="pt-18">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div className="flex flex-col items-center sm:items-start gap-6 text-center sm:text-left">
            <h2 className="text-2xl text-primary-foreground sm:text-4xl lg:text-5xl">
              {productBanner.title}
            </h2>

            <p className="text-base text-primary-foreground sm:text-lg">
              {productBanner.subtitle}
            </p>

            <Button href="/gallery" variant="secondary">
              {productBanner.cta}
            </Button>
          </div>

          <div className="relative h-40 sm:h-80 w-full">
            <Image src={productBanner.image} alt="Macarons" fill />
          </div>
        </div>
      </Container>
    </section>
  );
}
