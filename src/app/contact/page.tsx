import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

const ContactPage = () => {
  return (
    <main className="flex flex-col gap-16 pb-8">
      <ContactHero />
      <ContactInfo />
    </main>
  );
};

export default ContactPage;
