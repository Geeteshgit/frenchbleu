import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-border bg-card shadow-[0_20px_60px_rgba(233,123,123,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
