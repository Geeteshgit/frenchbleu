import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "pink" | "blue" | "neutral";
};

export default function Badge({
  children,
  className,
  tone = "pink",
}: BadgeProps) {
  const tones = {
    pink: "bg-primary text-primary-foreground",
    blue: "bg-secondary text-secondary-foreground",
    neutral: "bg-muted text-muted-foreground",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
