import clsx from "clsx";
import Image from "next/image";
import Button from "../ui/Button";

type PromoPaneProps = {
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  bgClassName: string;
  align: "left" | "right";
};

export default function PromoPane({
  title,
  subtitle,
  cta,
  image,
  bgClassName,
  align,
}: PromoPaneProps) {
  return (
    <div className={bgClassName}>
      <div
        className={clsx(
          "flex w-full items-center px-5 py-8 sm:px-6 lg:px-8",
          align === "left"
            ? "ml-auto w-full max-w-[700]"
            : "mr-auto w-full max-w-[700]",
        )}
      >
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          {/* Content */}
          <div className="flex-1">
            <h3 className="text-3xl tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h3>

            <p className="mt-6 text-xl leading-8 text-primary-foreground">
              {subtitle}
            </p>

            <div className="mt-8">
              <Button
                href="/contact"
                variant={bgClassName === "bg-primary" ? "secondary" : "primary"}
              >
                {cta}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-80 w-full flex-1 sm:h-96 lg:h-105">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
