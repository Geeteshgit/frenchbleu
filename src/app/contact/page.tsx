import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/contact/FAQSection";
import CTASection from "@/components/home/CTASection";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <FAQSection />
      <CTASection variant="contact" />
    </>
  );
};

export default ContactPage;
