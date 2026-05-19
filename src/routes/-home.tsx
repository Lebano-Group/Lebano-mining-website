import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { VerticalTimeline } from "@/components/VerticalTimeline";
import { CommoditiesCubeCarousel } from "@/components/CommoditiesCubeCarousel";
import heroImg from "@docs/op-stockpile.jpg";

export const homeHead = () => ({
  meta: [
    { title: "Home — Lebano Mining | Lebano Group" },
    {
      name: "description",
      content:
        "Established South African bulk commodity mining and export — Mpumalanga to Richards Bay, 1Mt+ annually, thermal coal plus exploration in lithium, copper and chrome.",
    },
  ],
});

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

const whatWeDo = [
  {
    n: "01",
    title: "Exploration & Development",
    body: "Mineral rights and active development locally and globally. Exploration underway in Lithium, Copper and Chrome.",
  },
  {
    n: "02",
    title: "Mining & Production",
    body: "Operational mining across the bulk commodity value chain from early-stage exploration through to active thermal coal production and export.",
  },
  {
    n: "03",
    title: "Logistics & Rail",
    body: "Pit to port solutions for mine to vessel through Transnet and African Rail Corporation.",
  },
  {
    n: "04",
    title: "International Export",
    body: "Dedicated Richards Bay port allocation. 1Mt+ exported annually. Long-term partnerships including Vitol SA and NG Global Energy Solutions. Europe, India, China and Southeast Asia.",
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
      "Active exploration programme underway. Lithium is a critical mineral for the global energy transition battery technology, electric vehicles and grid storage.",
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
    title: "Gold-Arizona, USA",
    tag: "● Exploration Stage",
    body:
      "Lebano Mining holds active gold exploration interests in the state of Arizona, United States, one of the most historically significant and geologically prospective gold-producing jurisdictions in North America. This international exploration programme reflects the company's commitment to building a diversified, globally positioned mineral portfolio.",
  },
  {
    symbol: "◇",
    title: "Magnesium",
    tag: "● Exploration Stage",
    body:
      "Active exploration programme underway. Magnesium is one of the lightest structural metals and a critical material in the automotive, aerospace and clean energy sectors — with growing strategic importance as global industries accelerate their transition to lightweight, low-emission technologies.",
  },
  {
    symbol: "◇",
    title: "Iron Ore",
    tag: "● Exploration Stage",
    body:
      "Active exploration programme underway. Iron ore is a foundational bulk commodity the primary input for global steel production and a commodity in which South Africa holds significant reserve endowments and established export infrastructure.",
  },
  {
    symbol: "◇",
    title: "Chrome",
    tag: "● Exploration Stage",
    body:
      "Active exploration programme underway. Chrome is a critical input for stainless steel production and a key commodity in South Africa's mineral export economy.",
  },
] as const;

export function Home() {
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
            Active locally and globally. Exporting in excess of one million metric tons
            annually through Richards Bay to Europe, Southeast Asia, India and China. Exploring the commodities
            that will power tomorrow.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/operations"
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
              ●
            </span>
            <span>Delivered with Precision</span>
            <span className="text-primary/40 hidden sm:inline" aria-hidden>
              ●
            </span>
            <span className="text-primary">Lebano Mining</span>
          </p>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="container-narrow py-24">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6 text-gradient-gold">
            An Integrated Mining & Export Operation
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Lebano Mining operates across the full bulk commodity value chain from mineral
            exploration in Mpumalanga through to international export through Richards Bay while actively
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
        <div className="relative grid items-start gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 flex justify-center overflow-hidden lg:order-1">
            <CommoditiesCubeCarousel
              className="mx-auto w-full max-w-[min(100%,340px)]"
              items={commodities.map((c) => ({
                symbol: c.symbol,
                title: c.title,
                badge: c.tag,
                body: c.body,
              }))}
            />
          </div>
          <div className="order-1 min-w-0 max-w-xl lg:order-2 lg:pt-4">
            <div className="text-sm text-primary mb-4">Our Commodities</div>
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-gradient-gold">
              Producing Today. Exploring for Tomorrow.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lebano Mining&apos;s portfolio spans active production in thermal coal and an expanding
              exploration programme across the commodities that will define Africa&apos;s industrial and
              energy future.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

