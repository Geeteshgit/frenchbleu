import Button from "../ui/Button";
import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";

type PageCTASectionProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  secondaryLabel?: string;
  href?: string;
  secondaryHref?: string;
};

export default function PageCTASection({
  title,
  subtitle,
  ctaLabel,
  secondaryLabel,
  href = "/contact",
  secondaryHref = "/gallery",
}: PageCTASectionProps) {
  return (
    <section className="bg-background py-6 sm:py-8">
      <div className="relative overflow-hidden bg-secondary py-8 sm:py-12 lg:py-16">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(248,162,171,0.16),transparent_60%)] lg:block" />
        <Container>
          <FadeUp className="relative z-10 mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={href}>{ctaLabel}</Button>
              {secondaryLabel ? (
                <Button href={secondaryHref} variant="secondary">
                  {secondaryLabel}
                </Button>
              ) : null}
            </div>
          </FadeUp>
        </Container>
      </div>
    </section>
  );
}
