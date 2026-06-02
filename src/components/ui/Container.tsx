import type { ReactNode } from "react";
import clsx from "clsx";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  banner?: boolean;
};

export default function Container({
  children,
  className,
  banner,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        banner && "max-w-[1400]",
        className,
      )}
    >
      {children}
    </div>
  );
}
