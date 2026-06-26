import FadeUp from "../animations/FadeUp";

type HeroTitleProps = {
  title: string;
};

const HeroTitle = ({ title }: HeroTitleProps) => {
  return (
    <FadeUp>
      <h1 className="text-5xl font-logo font-medium text-primary-foreground sm:text-6xl lg:text-7xl">
        {title}
      </h1>
    </FadeUp>
  );
};

export default HeroTitle;
