import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Truck, Globe2, Mountain, ShieldCheck, Leaf, Users } from "lucide-react";
import heroImg from "@/assets/op-stockpile.jpg";
import excavator from "@/assets/op-excavator.jpg";
import port from "@/assets/op-port.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lebano Mining — Coal Mining Excellence in South Africa" },
      { name: "description", content: "A decade of unwavering commitment to excellence in coal mining, exploration and bulk commodity logistics." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Compass, title: "Mineral Exploration", body: "Exploration across bulk commodities and precious metals asset classes." },
  { icon: Mountain, title: "Mining Operations", body: "Development and operational mining of thermal coal across Mpumalanga." },
  { icon: Truck, title: "End-to-End Logistics", body: "Mine to port — transport, rail coordination, port allocation at Richards Bay." },
  { icon: Globe2, title: "Commodity Export", body: "Iron ore and thermal coal to European and Southeast Asian markets." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroImg} alt="Coal stockpile at port" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container-narrow py-32 md:py-44">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.25em] mb-8">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" /> Est. 2012 · South Africa
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.95] max-w-4xl">
            Your Trusted Partner in <span className="text-gradient-gold">Coal Mining</span> Excellence
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            At Lebano Mining we don't just extract coal — we cultivate partnerships and foster progress.
            A decade of disciplined operations from Mpumalanga to Richards Bay and beyond.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold hover:opacity-90 transition">
              Schedule a Visit <ArrowRight className="size-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-primary/50 text-primary uppercase tracking-wider text-sm hover:bg-primary/10 transition">
              Our Story
            </Link>
          </div>
        </div>
        {/* Stats */}
        <div className="relative border-y border-border/60 bg-background/60 backdrop-blur">
          <div className="container-narrow grid grid-cols-2 md:grid-cols-4 divide-x divide-border/60">
            {[
              ["12+", "Years of Operation"],
              ["3.5M+", "Tons Exported"],
              ["20+", "Years Sector Experience"],
              ["3", "Mining Regions"],
            ].map(([k, v]) => (
              <div key={v} className="py-8 px-4 text-center">
                <div className="font-display text-3xl md:text-4xl text-gradient-gold">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-narrow py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Who We Are</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">A decade of unwavering commitment to excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            As a reputable mining company based in South Africa, Lebano Mining has consistently delivered excellent services,
            contributing significantly to the energy landscape.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We continuously invest in research and development, exploring new technologies and methodologies to enhance
            efficiency, reduce environmental impact, and meet the evolving demands of our clients and stakeholders.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-gold opacity-30 blur-2xl rounded" />
          <img src={excavator} alt="Excavator at Lebano operation" className="relative rounded shadow-elevated w-full aspect-[4/3] object-cover" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gradient-panel border-y border-border/60 py-24">
        <div className="container-narrow">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What We Do</div>
              <h2 className="font-display text-4xl md:text-5xl uppercase">Mine to Market</h2>
            </div>
            <Link to="/services" className="text-sm uppercase tracking-wider text-primary hover:underline">All Services →</Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="group p-6 rounded border border-border bg-card hover:border-primary/60 transition shadow-elevated">
                <div className="size-12 rounded bg-gradient-gold flex items-center justify-center text-primary-foreground mb-5">
                  <s.icon className="size-6" />
                </div>
                <h3 className="font-display text-xl uppercase mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
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
            { icon: ShieldCheck, title: "Safety First", body: "Stringent safety protocols and continuous training ensure every person returns home safely." },
            { icon: Leaf, title: "Environment", body: "Proactive environmental responsibility and R&D for reduced impact across operations." },
            { icon: Users, title: "Community", body: "Local economic development, skills transfer and upliftment of host communities." },
          ].map((v) => (
            <div key={v.title} className="p-8 rounded border border-border bg-card">
              <v.icon className="size-8 text-primary mb-4" />
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
          <h2 className="font-display text-4xl md:text-6xl uppercase max-w-3xl mx-auto">
            Explore a world of <span className="text-gradient-gold">possibilities</span> with a trusted leader.
          </h2>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold hover:opacity-90 transition">
            Get in Touch <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
