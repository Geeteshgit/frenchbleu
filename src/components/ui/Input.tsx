import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputProps = {
  label?: string;
  wrapperClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  className,
  wrapperClassName,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <label className={clsx(wrapperClassName)} htmlFor={inputId}>
      {label ? (
        <span className="text-sm font-semibold text-foreground">{label}</span>
      ) : null}
      <input
        id={inputId}
        className={clsx(
          "mt-1 w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring",
          className,
        )}
        {...props}
      />
    </label>
  );
}
