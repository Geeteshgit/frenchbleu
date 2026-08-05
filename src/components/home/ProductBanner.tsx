import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import productBannerImage from "@/assets/product-banner.png";

export default function ProductBanner() {
  return (
    <section className="bg-primary pt-16 pb-8 lg:pt-20 lg:pb-12">
      <Container banner>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <h2 className="text-3xl text-primary-foreground md:text-4xl lg:text-5xl">
              Delight in Every Bite
            </h2>

            <p className="text-primary-foreground sm:text-lg">
              Discover our handcrafted French macarons, made with delicate
              shells, creamy fillings, and irresistible flavors.
            </p>

            <Button href="/gallery" variant="secondary">
              Browse macarons
            </Button>
          </div>

          <div className="w-full lg:w-3/4">
            <Image
              src={productBannerImage}
              alt="macarons-banner"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
