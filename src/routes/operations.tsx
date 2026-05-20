import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ServicesCircularCarousel } from "@/components/ServicesCircularCarousel";
import { VerticalTimeline } from "@/components/VerticalTimeline";
import excavator from "@docs/op-excavator.jpg";
import port from "@docs/op-port.jpg";
import safetyEnvironment from "@docs/Gallery pictures/IMG-20200727-WA0013.jpg";

export const Route = createFileRoute("/operations")({
  head: () => ({
    meta: [
      { title: "Operations — Lebano Mining" },
      {
        name: "description",
        content:
          "Coal assets across five Mpumalanga regions, Richards Bay export infrastructure, exploration in lithium copper and chrome, and institutional off-take partnerships.",
      },
    ],
  }),
  component: Operations,
});

const cardHover =
  "rounded border border-border bg-card shadow-elevated transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

const coalSites = [
  { name: "Belfast", detail: "active development" },
  { name: "Hendrina", detail: "active development" },
  { name: "Ermelo", detail: "active development" },
  { name: "Carolina", detail: "active development" },
  { name: "Witbank", detail: "active development" },
] as const;

const coalCarouselSlides = coalSites.map((site) => ({
  icon: MapPin,
  title: site.name,
  body: `Mpumalanga — ${site.detail}`,
  badge: "Development Region",
}));

const explorationItems = [
  {
    title: "Lithium",
    body:
      "Lebano Mining is actively exploring for Lithium, a critical mineral at the heart of the global energy transition. Lithium is the foundational input for battery technology, electric vehicle production and large-scale grid storage systems, making it one of the most strategically significant commodities of the next decade.",
  },
  {
    title: "Copper",
    body:
      "Lebano Mining is actively exploring copper, the metal of electrification. Copper is fundamental to renewable energy infrastructure, power grid expansion, electric vehicles and the full spectrum of technologies that underpin the global transition to a low-carbon economy.",
  },
  {
    title: "Chrome",
    body:
      "Lebano Mining is actively exploring for Chrome, a critical South African export commodity and a key input for stainless steel production, aerospace alloys and industrial applications. South Africa holds the world's largest known chrome reserves, making it a natural focus for domestic exploration.",
  },
] as const;

function Operations() {
  return (
    <>
      <PageHeader
        title="Operations"
        image={excavator}
      />

      {/* Coal Assets — rotational carousel (services-style) */}
      <section className="container-narrow py-24">
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Coal Assets</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Mpumalanga Province — Five Development Regions
          </h2>
          <p className="text-sm uppercase tracking-wider text-muted-foreground leading-relaxed mb-8 flex flex-wrap gap-x-3 gap-y-2">
            <span>South Africa&apos;s primary thermal coal producing jurisdiction</span>
            <span className="text-primary/50" aria-hidden>|</span>
            <span>Established infrastructure</span>
            <span className="text-primary/50" aria-hidden>|</span>
            <span className="text-primary/50" aria-hidden>|</span>
            <span>Direct rail and road access to ports</span>
          </p>
        </div>
        <ServicesCircularCarousel items={[...coalCarouselSlides]} />
      </section>

      {/* Value chain — sequential flow (timeline) */}
      <section className="container-narrow border-t border-border py-20 md:py-24">
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Integrated flow</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">From Ground to Market</h2>
          <p className="text-muted-foreground leading-relaxed">
            Lebano Mining traces a single chain from development assets through
            integrated rail and road solutions to long-term export
            corridors in Europe, India, China and Southeast Asia.
          </p>
        </div>
        
      </section>

      {/* Export Infrastructure */}
      <section className="relative isolate overflow-hidden border-y border-border">
        <img
          src={port}
          alt="Richards Bay coal terminal infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-coal/88" />
        <div className="relative container-narrow py-24">
          <div className={`max-w-2xl p-8 md:p-10 ${cardHover} bg-card/95 backdrop-blur-sm`}>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Export Infrastructure
            </div>
            <h2 className="font-display text-3xl md:text-4xl uppercase mb-6">
              Richards Bay Coal Terminal
            </h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed mb-8">
              <li>
                <span className="text-foreground font-medium">Annual throughput capacity: </span>
                58Mt+
              </li>
              <li>
                <span className="text-foreground font-medium">Lebano Mining: </span>
                Dedicated port allocation
              </li>
              <li>
                <span className="text-foreground font-medium">Export volume: </span>
                1Mt+ per annum
              </li>
              <li>
                <span className="text-foreground font-medium">Markets: </span>
                Europe | India | China | Southeast Asia
              </li>
            </ul>
            <Link
              to="/contact"
              className="group/cta mt-12 inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Discuss Off-Take{" "}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Exploration Portfolio */}
      <section className="container-narrow py-24">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            Exploration Portfolio
          </div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Exploring the Commodities of Tomorrow
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coal, Lebano Mining is actively exploring for other critical minerals positioning
            the company at the frontier of global commodity demand and South Africa&apos;s
            expanding mineral economy.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {explorationItems.map((item) => (
            <div key={item.title} className={`p-8 md:p-10 ${cardHover}`}>
              <p className="text-xs uppercase tracking-wider text-primary mb-4">● Exploration Stage</p>
              <h3 className="font-display text-2xl uppercase mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Safety & Environment */}
      <section className="bg-gradient-panel border-y border-border/60 py-20">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={safetyEnvironment}
            alt="Excavator loading a haul truck at an open-pit mining operation"
            className="rounded shadow-elevated aspect-[4/3] object-cover w-full"
          />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
              Safety &amp; Environment
            </div>
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
              Safety &amp; Environment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Rigorous health and safety protocols aligned with South Africa&apos;s Mine Health and
              Safety Act and international best-practice standards. Environmental management plans covering land use,
              water management, dust control and progressive rehabilitation maintained across all active
              development sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
