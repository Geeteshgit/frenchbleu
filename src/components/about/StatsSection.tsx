import Container from "../ui/Container";
import FadeUp from "../animations/FadeUp";

const stats = [
  {
    value: "2026",
    label: "Serving Since",
  },
  {
    value: "500+",
    label: "Happy Customers",
  },
  {
    value: "2",
    label: "Bakery Location",
  },
];

export default function StatsSection() {
  return (
    <section className="pt-20 pb-16 text-foreground">
      <Container>
        <FadeUp className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] opacity-80">
            By The Numbers
          </p>

          <h2 className="mt-3 text-4xl font-medium">
            Baking happiness every day.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Every pastry, loaf, and cake reflects our passion for quality,
            craftsmanship, and exceptional service.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-2 gap-8 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <h3 className="text-5xl font-semibold">{stat.value}</h3>

                <p className="mt-3 text-sm sm:text-lg uppercase tracking-wider text-primary-foreground/75">
                  {stat.label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
