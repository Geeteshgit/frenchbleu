"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type EmblaCarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  containerClassName?: string;
  slideClassName?: string;
  prevLabel?: string;
  nextLabel?: string;
};

export default function EmblaCarousel<T>({
  items,
  renderItem,
  className,
  containerClassName,
  slideClassName,
  prevLabel = "Scroll previous",
  nextLabel = "Scroll next",
}: EmblaCarouselProps<T>) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;

    const updateControls = () => {
      setShowControls(emblaApi.scrollSnapList().length > 1);
    };

    updateControls();
    emblaApi.on("reInit", updateControls);

    return () => {
      emblaApi.off("reInit", updateControls);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={clsx("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={clsx("flex touch-pan-y", containerClassName)}>
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx("min-w-0 shrink-0 grow-0", slideClassName)}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <button
            type="button"
            aria-label={prevLabel}
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-primary bg-background text-primary transition hover:bg-background cursor-pointer"
          >
            <FaChevronLeft aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label={nextLabel}
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-sm border border-primary bg-background text-primary transition hover:bg-background cursor-pointer"
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </>
      )}
    </div>
  );
}
