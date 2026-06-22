import clsx from "clsx";

type WaveDividerProps = {
  desktopPath: string;
  mobilePath?: string;
  tone: string;
  className?: string;
};

export default function WaveDivider({
  desktopPath,
  mobilePath,
  tone,
  className,
}: WaveDividerProps) {
  return (
    <>
      <div
        className={clsx(
          "relative z-50 h-8 overflow-hidden -mb-8 hidden md:block",
          tone,
          className,
        )}
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute h-full w-full rotate-180"
        >
          <path fill="currentColor" d={desktopPath} />
        </svg>
      </div>

      {mobilePath && (
        <div
          className={clsx(
            "relative z-50 h-6 overflow-hidden -mb-6 md:hidden",
            tone,
            className,
          )}
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="absolute h-full w-full rotate-180"
          >
            <path fill="currentColor" d={mobilePath} />
          </svg>
        </div>
      )}
    </>
  );
}
