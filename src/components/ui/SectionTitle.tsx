import React from "react";
import clsx from "clsx";
import Container from "./Container";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
  children?: React.ReactNode;
};

export default function SectionTitle({
  title,
  subtitle,
  className,
  centered = false,
  children,
}: SectionTitleProps) {
  return (
    <Container className={className}>
      <div className={clsx("max-w-3xl", centered && "mx-auto text-center")}>
        <h2 className="text-xl font-semibold uppercase tracking-[0.14em] text-primary-foreground md:text-2xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-base leading-8 text-foreground sm:text-lg">
            {subtitle}
          </p>
        ) : null}
        {children}
      </div>
    </Container>
  );
}
