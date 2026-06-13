import clsx from "clsx";
import Link from "next/link";
import { navigationLinks } from "@/data/navigation";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div
      className={clsx(
        "absolute left-0 right-0 top-full z-40 bg-primary-foreground px-4 py-5 transition-all duration-200 sm:hidden",
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
            className="block px-4 py-3 font-semibold text-white transition hover:bg-white/10 hover:text-white"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
