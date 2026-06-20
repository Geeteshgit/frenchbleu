"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "../ui/Container";
import WaveDivider from "../ui/WaveDivider";
import MobileMenu from "./MobileMenu";

import { brand, navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-999 w-full">
      {/* Navbar */}
      <div className="bg-primary-foreground text-white py-4">
        <Container banner className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/">
            <div className="font-logo text-3xl text-primary">{brand.name}</div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 sm:flex">
            {navigationLinks.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "text-lg font-semibold transition duration-300",
                    active ? "text-primary" : "text-white hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center  text-white transition sm:hidden"
          >
            <span className="sr-only">Toggle menu</span>

            <span className="relative block h-4 w-5">
              <span
                className={clsx(
                  "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition",
                  open && "translate-y-2 rotate-45",
                )}
              />

              <span
                className={clsx(
                  "absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition",
                  open && "opacity-0",
                )}
              />

              <span
                className={clsx(
                  "absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </Container>

        <MobileMenu open={open} onClose={() => setOpen(false)} />
      </div>

      {/* Wave */}
      <WaveDivider
        tone="text-primary-foreground"
        desktopPath="M0 60 Q 10 20 20 60 T 40 60 T 60 60 T 80 60 T 100 60 T 120 60 T 140 60 T 160 60 T 180 60 T 200 60 T 220 60 T 240 60 T 260 60 T 280 60 T 300 60 T 320 60 T 340 60 T 360 60 T 380 60 T 400 60 T 420 60 T 440 60 T 460 60 T 480 60 T 500 60 T 520 60 T 540 60 T 560 60 T 580 60 T 600 60 T 620 60 T 640 60 T 660 60 T 680 60 T 700 60 T 720 60 T 740 60 T 760 60 T 780 60 T 800 60 T 820 60 T 840 60 T 860 60 T 880 60 T 900 60 T 920 60 T 940 60 T 960 60 T 980 60 T 1000 60 T 1020 60 T 1040 60 T 1060 60 T 1080 60 T 1100 60 T 1120 60 T 1140 60 T 1160 60 T 1180 60 T 1200 60 T 1220 60 T 1240 60 T 1260 60 T 1280 60 T 1300 60 T 1320 60 T 1340 60 T 1360 60 T 1380 60 T 1400 60 T 1420 60 T 1440 60 L1440 120 L0 120 Z"
        mobilePath="M0 60
Q30 20 60 60
T120 60
T180 60
T240 60
T300 60
T360 60
T420 60
T480 60
T540 60
T600 60
T660 60
T720 60
T780 60
T840 60
T900 60
T960 60
T1020 60
T1080 60
T1140 60
T1200 60
T1260 60
T1320 60
T1380 60
T1440 60
L1440 120
L0 120
Z"
      />
    </header>
  );
}
