import FadeUp from "../animations/FadeUp";

type HeroContentProps = {
  title: string;
  subtitle: string;
};

export default function HeroContent({ title, subtitle }: HeroContentProps) {
  return (
    <div className="text-center">
      <FadeUp>
        <h1 className="text-4xl font-logo font-medium tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
          {title}
        </h1>
      </FadeUp>
      <FadeUp delay={0.1}>
        <p className="mt-6 max-w-xl text-lg text-primary-foreground sm:text-xl lg:text-2xl">
          {subtitle}
        </p>
      </FadeUp>
    </div>
  );
}
