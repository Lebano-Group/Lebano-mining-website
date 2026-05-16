import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { VerticalTimeline } from "@/components/VerticalTimeline";
import { CommoditiesCubeCarousel } from "@/components/CommoditiesCubeCarousel";
import heroImg from "@docs/op-stockpile.jpg";
import excavator from "@docs/op-excavator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Business — Lebano Mining | Lebano Group" },
      {
        name: "description",
        content:
          "Established South African bulk commodity mining and export — Mpumalanga to Richards Bay, 1Mt+ annually, thermal coal plus exploration in lithium, copper and chrome.",
      },
    ],
  }),
  component: Home,
});

const cardHover =
  "rounded border border-border bg-card shadow-elevated transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

function HeroMarqueeHeadline() {
  const phrase = (
    <>
      Resources Extracted with <span className="text-gradient-gold">Purpose</span>. Delivered with{" "}
      <span className="text-gradient-gold">Precision</span>.
    </>
  );
  return (
    <>
      <h1 className="sr-only">
        Resources Extracted with Purpose. Delivered with Precision.
      </h1>
      <div
        aria-hidden="true"
        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] max-w-full overflow-hidden"
      >
        <div className="hero-headline-track flex w-max gap-12 md:gap-20 lg:gap-28">
          <span className="inline-block shrink-0 whitespace-nowrap">{phrase}</span>
          <span className="hero-marquee-duplicate inline-block shrink-0 whitespace-nowrap">
            {phrase}
          </span>
        </div>
      </div>
    </>
  );
}

const stats = [
  {
    figure: "1Mt+",
    label: "Coal exported annually",
  },
  {
    figure: "12+",
    label: "Years of active operations",
  },
  {
    figure: "5",
    label: "Coal development regions — Mpumalanga",
  },
  {
    figure: "4",
    label: "Commodities — producing & exploring",
  },
  {
    figure: "2",
    label: "International export markets",
  },
] as const;

const whatWeDo = [
  {
    n: "01",
    title: "Exploration & Development",
    body: "Mineral rights and active development across Belfast, Hendrina, Ermelo, Carolina and Witbank. Exploration underway in Lithium, Copper and Chrome.",
  },
  {
    n: "02",
    title: "Mining & Production",
    body: "Operational mining across the bulk commodity value chain — from early-stage exploration through to active thermal coal production and export.",
  },
  {
    n: "03",
    title: "Logistics & Rail",
    body: "End-to-end logistics mine to vessel — via Transnet and African Rail Corporation connecting Mpumalanga assets to the Richards Bay export corridor.",
  },
  {
    n: "04",
    title: "International Export",
    body: "Dedicated Richards Bay port allocation. 1Mt+ exported annually. Long-term partnerships with Vitol and NG Global Energy Solutions. Europe and Southeast Asia.",
  },
] as const;

const commodities = [
  {
    symbol: "◆",
    title: "Thermal Coal",
    tag: "● Active Production",
    body:
      "1Mt+ exported annually through Richards Bay. Five development regions across Mpumalanga Province. Long-term off-take with Vitol and NG Global Energy Solutions.",
  },
  {
    symbol: "◇",
    title: "Lithium",
    tag: "● Exploration Stage",
    body:
      "Active exploration programme underway. Lithium is a critical mineral for the global energy transition — battery technology, electric vehicles and grid storage.",
  },
  {
    symbol: "◇",
    title: "Copper",
    tag: "● Exploration Stage",
    body:
      "Active exploration programme underway. Copper is fundamental to electrification, renewable energy infrastructure and the global transition to a low-carbon economy.",
  },
  {
    symbol: "◇",
    title: "Chrome",
    tag: "● Exploration Stage",
    body:
      "Active exploration programme underway. Chrome is a critical input for stainless steel production and a key commodity in South Africa's mineral export economy.",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Coal stockpile at port"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container-narrow py-32 md:py-44">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] mb-8 transition-transform duration-300 hover:scale-[1.02] max-w-full">
            <span className="size-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-left leading-snug normal-case tracking-normal">
              Welcome to Lebano Mining — A Division of Lebano Group
            </span>
          </div>
          <HeroMarqueeHeadline />
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Active across five regions of Mpumalanga. Exporting in excess of one million metric tons
            annually through Richards Bay to Europe and Southeast Asia. Exploring the commodities
            that will power tomorrow.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="group/cta inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Explore Our Operations{" "}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-primary/50 text-primary uppercase tracking-wider text-sm transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 hover:border-primary active:translate-y-0"
            >
              Get In Touch
            </Link>
          </div>
          <p className="mt-12 text-sm uppercase tracking-[0.2em] text-muted-foreground flex flex-wrap gap-x-4 gap-y-2">
            <span>Mined with Purpose</span>
            <span className="text-primary/40 hidden sm:inline" aria-hidden>
              ·
            </span>
            <span>Delivered with Precision</span>
            <span className="text-primary/40 hidden sm:inline" aria-hidden>
              ·
            </span>
            <span className="text-primary">Lebano Mining</span>
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="container-narrow py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((s) => (
            <div key={s.label} className={`p-6 md:p-8 text-center ${cardHover}`}>
              <div className="font-display text-4xl md:text-5xl uppercase text-gradient-gold mb-3">
                {s.figure}
              </div>
              <p className="text-sm text-muted-foreground leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="container-narrow py-24 grid lg:grid-cols-2 gap-12 items-start">
        <div className={`p-8 md:p-10 ${cardHover}`}>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Approach</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            Built on Operational Depth. Proven at International Scale.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Lebano Mining is an established South African bulk commodity mining and export company —
            founded in 2012 and built from the ground up through direct engagement with the full
            commodity supply chain. From mineral exploration and asset development across Mpumalanga
            Province through to integrated rail logistics and international export via the Richards
            Bay Coal Terminal, the company controls every stage of the journey from ground to market.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond coal, Lebano Mining is actively exploring for Lithium, Copper and Chrome —
            positioning the company at the frontier of the commodities that will define Africa&apos;s
            industrial and energy future.
          </p>
        </div>
        <div className="relative group/img lg:justify-self-end w-full max-w-xl">
          <div
            className="pointer-events-none absolute -right-2 top-1/4 h-24 w-1.5 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary via-primary/60 to-transparent opacity-80 shadow-[0_0_20px_oklch(0.74_0.14_75/0.45)]"
            aria-hidden
          />
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-transparent to-primary/10 blur-3xl transition-opacity duration-500 group-hover/img:opacity-90" />
          <div className="mining-photo-shell relative transition-transform duration-500 ease-out group-hover/img:-translate-y-1">
            <div className="mining-photo-frame w-full">
              <div className="mining-photo-frame__inner aspect-[4/3] w-full">
                <img
                  src={excavator}
                  alt="Excavator at Lebano operation"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PURPOSE */}
      <section className="container-narrow py-24 text-center max-w-4xl mx-auto">
        <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Purpose</div>
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          To unlock the long-term value of South Africa&apos;s mineral resources — delivering
          reliable supply to global markets, building institutional-grade partnerships, and creating
          enduring economic opportunity for every stakeholder we serve.
        </p>
        <p className="font-display text-xl md:text-2xl uppercase text-foreground tracking-tight">
          Operational depth. International reach. Enduring value.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="container-narrow py-24">
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
            An Integrated Mining & Export Operation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Lebano Mining operates across the full bulk commodity value chain — from mineral
            exploration in Mpumalanga through to international export via Richards Bay — while actively
            developing an exploration portfolio in the commodities of tomorrow.
          </p>
        </div>
        <VerticalTimeline
          items={whatWeDo.map((item) => ({
            kicker: item.n,
            title: item.title,
            body: item.body,
          }))}
        />
      </section>

      {/* OUR COMMODITIES */}
      <section className="relative container-narrow overflow-hidden pb-28 md:pb-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-[12%] top-24 h-[min(480px,65vw)] w-[min(480px,65vw)] rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.12_78/0.18),transparent_68%)] blur-3xl"
        />
        <div className="relative mb-14 max-w-3xl md:mb-16">
          <div className="text-sm text-primary mb-4">Our Commodities</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Producing Today. Exploring for Tomorrow.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Lebano Mining&apos;s portfolio spans active production in thermal coal and an expanding
            exploration programme across the commodities that will define Africa&apos;s industrial and
            energy future.
          </p>
        </div>
        <div className="relative flex justify-center">
          <CommoditiesCubeCarousel
            className="w-full max-w-[560px]"
            items={commodities.map((c) => ({
              symbol: c.symbol,
              title: c.title,
              badge: c.tag,
              body: c.body,
            }))}
          />
        </div>
      </section>
    </>
  );
}
