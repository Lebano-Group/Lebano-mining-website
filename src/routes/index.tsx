import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Leaf, Users } from "lucide-react";
import heroImg from "@docs/op-stockpile.jpg";
import excavator from "@docs/op-excavator.jpg";
import port from "@docs/op-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lebano Mining — Coal Mining Excellence in South Africa" },
      {
        name: "description",
        content:
          "A decade of unwavering commitment to excellence in coal mining, exploration and bulk commodity logistics.",
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
      Your Trusted Partner in <span className="text-gradient-gold">Coal Mining</span> Excellence
    </>
  );
  return (
    <>
      <h1 className="sr-only">Your Trusted Partner in Coal Mining Excellence</h1>
      <div
        aria-hidden="true"
        className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] max-w-full overflow-hidden"
      >
        <div className="hero-headline-track flex w-max gap-12 md:gap-20 lg:gap-28">
          <span className="inline-block shrink-0 whitespace-nowrap">{phrase}</span>
          <span className="hero-marquee-duplicate inline-block shrink-0 whitespace-nowrap">{phrase}</span>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Coal stockpile at port" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container-narrow py-32 md:py-44">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] mb-8 transition-transform duration-300 hover:scale-[1.02]">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Est. 2012 · South Africa
          </div>
          <HeroMarqueeHeadline />
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            At Lebano Mining we don't just extract coal — we cultivate partnerships and foster progress. A decade of
            disciplined operations from Mpumalanga to Richards Bay and beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group/cta inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold transition-all duration-300 hover:opacity-95 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              Schedule a Visit{" "}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-primary/50 text-primary uppercase tracking-wider text-sm transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5 hover:border-primary active:translate-y-0"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-narrow py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className={`p-8 md:p-10 ${cardHover}`}>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Who We Are</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">A decade of unwavering commitment to excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As a reputable mining company based in South Africa, Lebano Mining has consistently delivered excellent
            services, contributing significantly to the energy landscape.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We continuously invest in research and development, exploring new technologies and methodologies to enhance
            efficiency, reduce environmental impact, and meet the evolving demands of our clients and stakeholders.
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

      {/* VALUES */}
      <section className="container-narrow py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Our Values</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase">Built on Trust, Safety & Stewardship</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Safety First",
              body: "Stringent safety protocols and continuous training ensure every person returns home safely.",
            },
            {
              icon: Leaf,
              title: "Environment",
              body: "Proactive environmental responsibility and R&D for reduced impact across operations.",
            },
            {
              icon: Users,
              title: "Community",
              body: "Local economic development, skills transfer and upliftment of host communities.",
            },
          ].map((v) => (
            <div key={v.title} className={`p-8 ${cardHover} group/value`}>
              <v.icon className="size-8 text-primary mb-4 transition-transform duration-300 group-hover/value:scale-110 group-hover/value:text-primary" />
              <h3 className="font-display text-2xl uppercase mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden">
        <img src={port} alt="Port operations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-coal/85" />
        <div className="relative container-narrow py-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl uppercase max-w-3xl mx-auto transition-transform duration-500 hover:scale-[1.02]">
            Explore a world of <span className="text-gradient-gold">possibilities</span> with a trusted leader.
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold transition-all duration-300 hover:opacity-95 hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          >
            Get in Touch <ArrowRight className="size-4 transition-transform duration-300 hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
