import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { productBanner } from "@/data/home";

export default function ProductBanner() {
  return (
    <section className="overflow-hidden bg-primary">
      <Container banner className="pt-18">
        <div className="flex items-center gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {productBanner.title}
            </h2>

            <p className="mt-6 text-base leading-8 text-primary-foreground sm:text-lg">
              {productBanner.subtitle}
            </p>

            <div className="mt-8">
              <Button href="/gallery" variant="secondary">
                {productBanner.cta}
              </Button>
            </div>
          </div>

          <div className="relative h-80 w-full lg:h-90">
            <Image src={productBanner.image} alt="Macarons" fill priority />
          </div>
        </div>
      </Container>
    </section>
  );
}
