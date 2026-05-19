import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { ServicesCircularCarousel } from "@/components/ServicesCircularCarousel";
import { VerticalTimeline } from "@/components/VerticalTimeline";
import excavator from "@docs/op-excavator.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — Lebano Mining" },
      {
        name: "description",
        content:
          "Lebano Mining is an established South African mining and export company with over a decade of operational history across Mpumalanga and Richards Bay.",
      },
    ],
  }),
  component: About,
});

const cardHover =
  "rounded border border-border bg-card shadow-elevated transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

const milestones = [
  {
    year: "2012",
    body: "Founded by Mr. Livhuwani Mutavhatsindi. Initial focus: domestic thermal coal logistics for Eskom.",
  },
  {
    year: "2014",
    body: "Expansion into mineral exploration. First Mpumalanga mineral rights acquired.",
  },
  {
    year: "2016",
    body: "Strategic partnerships established with Transnet and African Rail Corporation.",
  },
  {
    year: "2018",
    body: "Richards Bay Coal Terminal port allocation secured. International export operations commence.",
  },
  {
    year: "2020",
    body: "Long-term off-take partnership established with Vitol.",
  },
  {
    year: "2022",
    body: "Mashudu Francinah Foundation established. Carolina and Witbank regions added to portfolio.",
  },
  {
    year: "2024",
    body: "Export volume exceeds 1Mt per annum. Lithium, Copper and Chrome exploration programmes initiated.",
  },
] as const;

const values = [
  {
    title: "Operational Integrity",
    body: "Delivering consistently on commitments to shareholders, partners and host communities with transparency and rigour at every level of the organisation.",
  },
  {
    title: "Responsible Development",
    body: "Conducting every aspect of mining and logistics operations with full regard for the safety of our workforce, the protection of the natural environment, and the long-term wellbeing of the communities in which we operate.",
  },
  {
    title: "Enduring Value Creation",
    body: "Building assets, institutional relationships and operational capability that generate sustainable, long-term value across the commodity value chain for shareholders, partners and the communities that host our operations.",
  },
] as const;

const aboutSlides = [
  {
    icon: Building2,
    badge: "Who we are",
    title: "Lebano Mining (Pty) Ltd",
    body: "Lebano Mining (Pty) Ltd is a South African bulk commodity mining and export company, founded in 2012 by Mr. Livhuwani Mutavhatsindi and headquartered in Midrand, Gauteng. The company operates across the full commodity value chain from mineral exploration and asset development through to integrated rail logistics and international export with a primary focus on thermal coal and an expanding exploration portfolio in Lithium, Copper and Chrome. Over more than a decade of active operation, Lebano Mining has grown from a domestic bulk commodity logistics provider into a fully integrated mining and export company with active development assets across five regions of Mpumalanga Province, a dedicated port allocation at the Richards Bay Coal Terminal, and established commodity trading relationships spanning Europe and Southeast Asia.",
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
              of operational history, active development assets across Mpumalanga Province and proven export
              capability through Richards Bay.
            </p>
          </div>
        </div>
      </section>

      <section className="container-narrow py-16 md:py-24">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">History</div>
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-12">Timeline Milestones</h2>
        <VerticalTimeline
          items={milestones.map((m) => ({
            kicker: m.year,
            title: m.body,
          }))}
        />
      </section>

      <section className="container-narrow pb-24">
        <ServicesCircularCarousel
          items={aboutSlides.map((slide) => ({
            icon: slide.icon,
            title: slide.title,
            body: slide.body,
            badge: slide.badge,
          }))}
        />
      </section>

      <section className="container-narrow pb-28">
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
