import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import ValuesSection from "@/components/about/ValuesSection";
import PageCTASection from "@/components/shared/PageCTASection";

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <PageCTASection
        title="We build dessert moments with thoughtful color stories."
        subtitle="Premium ingredients, boutique finishing, and a calm process from first sketch to final setup."
        ctaLabel="Plan your event"
        secondaryLabel="Browse gallery"
      />
    </>
  );
};

export default AboutPage;
