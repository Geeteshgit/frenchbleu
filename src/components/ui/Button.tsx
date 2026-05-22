import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25",
    secondary:
      "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-secondary/25",
    ghost: "bg-transparent text-foreground hover:bg-muted",
    dark: "bg-foreground text-background hover:bg-foreground/90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm sm:text-base",
    lg: "px-6 py-4 text-base sm:text-lg",
  };

  const classNameValue = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classNameValue}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classNameValue}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}
