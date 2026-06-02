import type { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={clsx("rounded-lg flex flex-col gap-2 bg-card", className)}>
      {children}
    </div>
  );
}
