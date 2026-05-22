import type { ReactNode } from "react";
import clsx from "clsx";
import Container from "./Container";
import Badge from "./Badge";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  children?: ReactNode;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
  centered = false,
  children,
}: SectionTitleProps) {
  return (
    <Container className={className}>
      <div className={clsx("max-w-3xl", centered && "mx-auto text-center")}>
        {eyebrow ? <Badge tone="blue">{eyebrow}</Badge> : null}
        <h2 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </Container>
  );
}
