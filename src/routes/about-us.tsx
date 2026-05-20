import { createFileRoute } from "@tanstack/react-router";
import excavator from "@docs/op-excavator.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Lebano Mining" },
      {
        name: "description",
        content:
          "Lebano Mining is an established South African mining and export company with over a decade of operational history locally and globally.",
      },
    ],
  }),
  component: About,
});

const cardHover =
  "rounded border border-border bg-card shadow-elevated transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

const companyOverview = [
  "Lebano Mining (Pty) Ltd is a South African bulk commodity mining and export company, founded in 2012 by Mr. Livhuwani Mutavhatsindi and headquartered in Midrand, Gauteng. The company operates across the full commodity value chain from mineral exploration and asset development through to integrated rail and road solutions and international export with a primary focus on thermal coal and gold with an expanding exploration portfolio in Lithium, Copper and Chrome.",
  "Over more than a decade of active operations, Lebano Mining has grown from a domestic bulk commodity logistics provider into a fully integrated mining and export company with active development assets locally and globally.",
] as const;

const values = [
  {
    title: "Operational Integrity",
    body: "Delivering consistently on commitments to stakeholders, partners and host communities with transparency and rigour at every level of the organisation.",
  },
  {
    title: "Responsible Development",
    body: "Conducting every aspect of mining and logistics operations with full regard for the safety of our workforce, the protection of the natural environment, and the long-term wellbeing of the communities in which we operate.",
  },
  {
    title: "Enduring Value Creation",
    body: "Building assets, institutional relationships and operational capability that generate sustainable, long-term value across the commodity value chain for stakeholders, partners and the communities that host our operations.",
  },
] as const;

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img src={excavator} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container-narrow py-24 md:py-32 text-center">
          <div className="about-hero-enter mx-auto max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-tight">
              Lebano Mining does not simply hold assets.
              <br />
              <span className="text-gradient-gold">It operates them.</span>
            </h1>
            <p className="mt-8 mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed font-light">
              Lebano Mining is an established South African mining and export company with over a decade
              of operational history and active development assets.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="container-narrow py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-4">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Who we are</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase leading-tight text-gradient-gold">
                Lebano Mining (Pty) Ltd
              </h2>
              <div className="mt-8 hidden h-px w-16 bg-gradient-gold lg:block" aria-hidden />
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-6 border-l-0 pl-0 text-muted-foreground leading-relaxed md:text-lg lg:border-l lg:border-primary/40 lg:pl-10">
                {companyOverview.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-20 md:py-28">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Values</div>
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-12">What We Stand For</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className={`p-8 ${cardHover}`}>
              <h3 className="font-display text-xl uppercase text-foreground mb-4">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{v.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
