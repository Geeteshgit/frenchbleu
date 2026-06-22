import Button from "../ui/Button";
import Input from "../ui/Input";

const ContactForm = () => {
  return (
    <div className="bg-white">
      <h2 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
        Get In Touch
      </h2>
      <p className="mt-2 text-base leading-7 text-foreground">
        Tell us about your event, timeline, and dessert ideas. Our team will get
        back to you quickly.
      </p>

      <form className="flex flex-col gap-2 sm:gap-4 mt-6">
        <Input
          label="Name"
          type="text"
          name="name"
          placeholder="Your full name"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="you@example.com"
        />

        <Input
          label="Subject"
          type="text"
          name="subject"
          placeholder="What is this regarding?"
        />

        <label>
          <span className="text-sm font-semibold text-foreground">Message</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Your message"
            className="mt-1 w-full rounded-lg bg-background p-4 text-foreground border border-border outline-none transition focus:border-secondary focus:ring-2 focus:ring-ring"
          />
        </label>

        <Button variant="secondary" type="submit">
          Send message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
