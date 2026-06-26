import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import Button from "../ui/Button";

type PromoPaneProps = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: StaticImageData;
  bgClassName: string;
  align: "left" | "right";
};

export default function PromoPane({
  title,
  subtitle,
  cta,
  href,
  image,
  bgClassName,
  align,
}: PromoPaneProps) {
  return (
    <div className={bgClassName}>
      <div
        className={clsx(
          "flex w-full items-center px-5 py-12 sm:px-6 lg:px-8",
          align === "left"
            ? "ml-auto w-full max-w-[700]"
            : "mr-auto w-full max-w-[700]",
        )}
      >
        <div className="flex w-full flex-col items-center gap-5 lg:gap-10 lg:flex-row text-center lg:text-left">
          {/* Content */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <h3 className="text-3xl font-medium lg:font-normal text-primary-foreground lg:text-5xl">
              {title}
            </h3>

            <p className="text-lg lg:text-xl leading-8 text-primary-foreground">
              {subtitle}
            </p>

            <div className="mt-2">
              <Button
                href={href}
                variant={bgClassName === "bg-primary" ? "secondary" : "primary"}
              >
                {cta}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div>
            <Image src={image} alt={title} className="h-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
