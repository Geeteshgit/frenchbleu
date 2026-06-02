import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/contact/FAQSection";

const ContactPage = () => {
  return (
    <main className="flex flex-col gap-16 pb-8">
      <ContactHero />
      <ContactInfo />
      <FAQSection />
    </main>
  );
};

export default ContactPage;
