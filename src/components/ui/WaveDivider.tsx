import clsx from "clsx";

type WaveDividerProps = {
  path: string;
  direction?: "up" | "down";
  tone: string;
  className?: string;
};

export default function WaveDivider({
  path,
  direction = "down",
  tone,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={clsx(
        "relative z-10 h-10 overflow-hidden -mb-10",
        tone,
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={clsx(
          "absolute inset-0 h-full w-full",
          direction === "down" && "rotate-180",
        )}
      >
        <path fill="currentColor" d={path} />
      </svg>
    </div>
  );
}
