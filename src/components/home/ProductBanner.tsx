import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { productBanner } from "@/data/home";

export default function ProductBanner() {
  return (
    <section className="bg-primary pt-16 pb-8 lg:pt-20 lg:pb-12">
      <Container banner>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <h2 className="text-3xl text-primary-foreground md:text-4xl lg:text-5xl">
              {productBanner.title}
            </h2>

            <p className="text-primary-foreground sm:text-lg">
              {productBanner.subtitle}
            </p>

            <Button href="/gallery" variant="secondary">
              {productBanner.cta}
            </Button>
          </div>

          <div className="relative h-26 md:h-44 lg:h-52 w-full">
            <Image src={productBanner.image} alt="Macarons" fill />
          </div>
        </div>
      </Container>
    </section>
  );
}
