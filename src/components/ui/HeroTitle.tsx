import FadeUp from "../animations/FadeUp";

type HeroTitleProps = {
  title: string;
};

const HeroTitle = ({ title }: HeroTitleProps) => {
  return (
    <FadeUp>
      <h1 className="text-4xl font-logo font-medium tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
        {title}
      </h1>
    </FadeUp>
  );
};

export default HeroTitle;
