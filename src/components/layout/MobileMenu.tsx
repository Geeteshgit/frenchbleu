"use client";

import clsx from "clsx";
import Link from "next/link";
import { navigationLinks, socialLinks } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={clsx(
        "absolute left-0 right-0 top-full z-40 border-b border-white/10 bg-primary-foreground px-4 py-5 shadow-2xl shadow-black/5 backdrop-blur-xl transition-all duration-200 sm:hidden",
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0",
      )}
      aria-hidden={!open}
    >
      <nav className="space-y-3">
        {navigationLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="block rounded-2xl px-4 py-3 text-base font-semibold text-white transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-5 flex items-center gap-3">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold tracking-[0.2em] text-white/80 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
            aria-label={social.label}
          >
            <social.icon aria-hidden="true" className="text-lg" />
          </Link>
        ))}
      </div>
    </div>
  );
}
