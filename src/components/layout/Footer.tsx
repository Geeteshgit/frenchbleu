import Link from "next/link";
import Container from "../ui/Container";
import WaveDivider from "../ui/WaveDivider";
import { brand, footerColumns, socialLinks } from "@/data/navigation";
import { contactInfoCards } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="bg-primary-foreground text-white">
      <WaveDivider
        path="M0 44C8 44 10 20 18 20C28 20 30 40 38 40C48 40 50 12 58 12C68 12 70 38 78 38C88 38 90 24 98 24C108 24 110 42 118 42C128 42 130 16 138 16C148 16 150 34 158 34C168 34 170 10 178 10C188 10 190 44 198 44C208 44 210 22 218 22C228 22 230 36 238 36C248 36 250 14 258 14C268 14 270 40 278 40C288 40 290 18 298 18C308 18 310 32 318 32C328 32 330 12 338 12C348 12 350 44 358 44C368 44 370 20 378 20C388 20 390 38 398 38C408 38 410 16 418 16C428 16 430 42 438 42C448 42 450 10 458 10C468 10 470 30 478 30C488 30 490 18 498 18C508 18 510 40 518 40C528 40 530 12 538 12C548 12 550 36 558 36C568 36 570 24 578 24C588 24 590 44 598 44C608 44 610 14 618 14C628 14 630 32 638 32C648 32 650 20 658 20C668 20 670 42 678 42C688 42 690 16 698 16C708 16 710 38 718 38C728 38 730 10 738 10C748 10 750 34 758 34C768 34 770 22 778 22C788 22 790 44 798 44C808 44 810 18 818 18C828 18 830 36 838 36C848 36 850 12 858 12C868 12 870 40 878 40C888 40 890 24 898 24C908 24 910 30 918 30C928 30 930 14 938 14C948 14 950 42 958 42C968 42 970 18 978 18C988 18 990 34 998 34C1008 34 1010 10 1018 10C1028 10 1030 44 1038 44C1048 44 1050 20 1058 20C1068 20 1070 38 1078 38C1088 38 1090 12 1098 12C1108 12 1110 36 1118 36C1128 36 1130 16 1138 16C1148 16 1150 42 1158 42C1168 42 1170 22 1178 22C1188 22 1190 30 1198 30C1208 30 1210 14 1218 14C1228 14 1230 40 1238 40C1248 40 1250 18 1258 18C1268 18 1270 34 1278 34C1288 34 1290 10 1298 10C1308 10 1310 44 1318 44C1328 44 1330 20 1338 20C1348 20 1350 36 1358 36C1368 36 1370 12 1378 12C1388 12 1390 42 1398 42C1408 42 1410 18 1418 18C1428 18 1430 30 1438 30L1440 120H0Z"
        tone="text-background"
      />
      <Container banner className="flex flex-col gap-12 pb-8 pt-16">
        <div className="grid gap-12 xl:grid-cols-[2fr_1fr_1fr_2fr] xl:items-start">
          <div>
            <div className="font-logo text-4xl text-white">{brand.name}</div>
            <p className="mt-4 max-w-md text-sm text-white/80">
              {brand.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="font-bold text-white/80 transition hover:-translate-y-0.5 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon aria-hidden="true" className="text-xl" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {footerColumns[0].title}
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              {footerColumns[0].links.map((link) => (
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              {footerColumns[1].title}
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-white/80">
              {footerColumns[1].links.map((link) => (
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

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Contact
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {contactInfoCards.map((card) => (
                <div
                  key={card.title}
                  className="flex gap-4 text-sm text-white/80"
                >
                  <card.icon aria-hidden="true" className="text-lg" />
                  <div className="grid gap-2">
                    <span className="sr-only">{card.title}</span>
                    {card.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-sm text-white/80 text-center">
          <p>
            © 2026 FrenchBleu. All desserts and designs are made for joyful
            moments.
          </p>
        </div>
      </Container>
    </footer>
  );
}
