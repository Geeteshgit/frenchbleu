import type { Metadata } from "next";
import { Pacifico, Quicksand, Cormorant_Garamond } from "next/font/google";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "./globals.css";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FrenchBleu | Luxury Pastel Bakery",
  description:
    "A luxury pastel bakery showcase built with Next.js, Tailwind CSS v4, and Motion.dev.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pacifico.variable} ${quicksand.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
