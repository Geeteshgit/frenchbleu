import clsx from "clsx";

type WaveDividerProps = {
  path: string;
  tone: string;
  className?: string;
};

export default function WaveDivider({
  path,
  tone,
  className,
}: WaveDividerProps) {
  return (
    <div
      className={clsx(
        "relative z-50 h-8 overflow-hidden -mb-8",
        tone,
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full rotate-180"
      >
        <path fill="currentColor" d={path} />
      </svg>
    </div>
  );
}
