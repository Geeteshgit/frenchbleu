import Link from "next/link";
import Container from "../ui/Container";
import WaveDivider from "../ui/WaveDivider";
import {
  brand,
  footerColumns,
  socialLinks,
  contactLinks,
} from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground text-white">
      <WaveDivider
        path="M0,64 C9,18 21,18 30,64 C39,110 51,110 60,64 C69,18 81,18 90,64 C99,110 111,110 120,64 C129,18 141,18 150,64 C159,110 171,110 180,64 C189,18 201,18 210,64 C219,110 231,110 240,64 C249,18 261,18 270,64 C279,110 291,110 300,64 C309,18 321,18 330,64 C339,110 351,110 360,64 C369,18 381,18 390,64 C399,110 411,110 420,64 C429,18 441,18 450,64 C459,110 471,110 480,64 C489,18 501,18 510,64 C519,110 531,110 540,64 C549,18 561,18 570,64 C579,110 591,110 600,64 C609,18 621,18 630,64 C639,110 651,110 660,64 C669,18 681,18 690,64 C699,110 711,110 720,64 C729,18 741,18 750,64 C759,110 771,110 780,64 C789,18 801,18 810,64 C819,110 831,110 840,64 C849,18 861,18 870,64 C879,110 891,110 900,64 C909,18 921,18 930,64 C939,110 951,110 960,64 C969,18 981,18 990,64 C999,110 1011,110 1020,64 C1029,18 1041,18 1050,64 C1059,110 1071,110 1080,64 C1089,18 1101,18 1110,64 C1119,110 1131,110 1140,64 C1149,18 1161,18 1170,64 C1179,110 1191,110 1200,64 C1209,18 1221,18 1230,64 C1239,110 1251,110 1260,64 C1269,18 1281,18 1290,64 C1299,110 1311,110 1320,64 C1329,18 1341,18 1350,64 C1359,110 1371,110 1380,64 C1389,18 1401,18 1410,64 C1419,110 1431,110 1440,64 L1440,120 L0,120 Z"
        tone="text-primary-foreground"
      />
      <Container className="flex flex-col gap-12 pb-14 pt-8 sm:pb-16">
        <div className="grid gap-12 xl:grid-cols-[1fr_1.5fr] xl:items-start">
          <div className="max-w-xl">
            <div className="font-logo text-4xl text-white">{brand.name}</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              {brand.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="font-bold tracking-[0.24em] text-muted-foreground transition hover:-translate-y-0.5 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon aria-hidden="true" className="text-lg" />
                </Link>
              ))}
            </div>

            <div className="mt-8 grid gap-3 text-sm text-white/70">
              {contactLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  {column.title}
                </h3>
                <div className="mt-4 grid gap-3 text-sm text-white/70">
                  {column.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 FrenchBleu. All desserts and designs are made for joyful
            moments.
          </p>
          <p>Luxury pastel bakery showcase built with Next.js.</p>
        </div>
      </Container>
    </footer>
  );
}
