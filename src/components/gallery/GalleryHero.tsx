"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import { galleryHeroSlides } from "../../data/gallery";

export default function GalleryHero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) =>
        currentSlide === galleryHeroSlides.length - 1 ? 0 : currentSlide + 1,
      );
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Container className="py-8 sm:py-12 lg:py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/45 shadow-[0_30px_80px_rgba(174,222,234,0.2)] backdrop-blur-sm">
        <motion.div
          animate={{ x: `-${activeSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          className="flex"
        >
          {galleryHeroSlides.map((slide) => (
            <article
              key={slide.id}
              className="relative min-h-112 w-full shrink-0 overflow-hidden sm:min-h-128 lg:min-h-152"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.12)_0%,rgba(10,10,10,0.32)_55%,rgba(10,10,10,0.72)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="max-w-2xl text-white">
                  <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-base leading-7 text-white/85 sm:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 sm:p-6">
          <div className="flex gap-2">
            {galleryHeroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Show gallery slide ${index + 1}`}
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
