"use client";

import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../ui/Container";
import { brand, navigationLinks } from "../../data/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary-foreground text-white shadow-[0_10px_40px_rgba(74,46,42,0.18)] backdrop-blur-2xl">
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link href="/">
          <div className="font-logo text-3xl leading-none text-white">
            {brand.name}
          </div>
        </Link>

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

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 sm:hidden"
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
    </header>
  );
}
