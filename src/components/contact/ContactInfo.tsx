"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { contactInfoCards, contactSocialCopy } from "../../data/contact";
import { socialLinks } from "../../data/navigation";

export default function ContactInfo() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <SectionTitle
        eyebrow="Contact details"
        title="A simple, polished way to reach the bakery team."
        subtitle="We reply to custom order inquiries, event requests, and dessert table ideas with care and clarity."
        centered
      />

      <Container className="mt-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {contactInfoCards.map((card) => (
            <motion.div
              key={card.title}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <Card className="h-full bg-white p-7">
                <h3 className="text-3xl font-medium text-foreground">
                  {card.title}
                </h3>
                <div className="mt-5 space-y-3 text-base leading-7 text-muted-foreground">
                  {card.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 rounded-[2.5rem] border border-border bg-secondary/18 p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-foreground">
                {contactSocialCopy.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
                {contactSocialCopy.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  href={social.href}
                  variant="secondary"
                  size="sm"
                >
                  {social.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
