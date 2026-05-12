import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Compass, Mountain, Truck, Globe2, Map, Leaf, Users, ShieldCheck } from "lucide-react";
import port from "@/assets/op-port.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Lebano Mining" },
    { name: "description", content: "Mineral exploration, mining operations, end-to-end logistics, commodity export and strategic resource planning." },
  ]}),
  component: Services,
});

const items = [
  { icon: Compass, title: "Mineral Exploration", body: "Exploration across bulk commodities and precious metals asset classes." },
  { icon: Mountain, title: "Mining Operations", body: "Development and operational mining of thermal coal; mineral rights management." },
  { icon: Truck, title: "End-to-End Logistics", body: "Mine to port logistics — transport, rail coordination, and port allocation at Richards Bay." },
  { icon: Globe2, title: "Commodity Export", body: "Dry bulk export including iron ore and thermal coal to European and SE Asian markets." },
  { icon: Map, title: "Strategic Resource Planning", body: "Geological assessments and resource modeling for sustainable, long-term resource utilization." },
  { icon: Leaf, title: "Environmental Management", body: "R&D into reducing environmental impact; proactive environmental responsibility programs." },
  { icon: Users, title: "Community Development", body: "Local economic development, skills transfer and upliftment of host communities." },
  { icon: ShieldCheck, title: "Safety Management", body: "Stringent safety protocols and continuous training programs across all operations." },
];

function Services() {
  return (
    <>
      <PageHeader eyebrow="Capabilities" title={<>Integrated <span className="text-gradient-gold">mine-to-market</span> services.</>} subtitle="From geological assessment to dry bulk export — we operate across the full mining value chain." image={port} />
      <section className="container-narrow py-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((s) => (
          <div key={s.title} className="p-6 rounded border border-border bg-card hover:border-primary/60 transition shadow-elevated">
            <div className="size-12 rounded bg-gradient-gold flex items-center justify-center text-primary-foreground mb-5">
              <s.icon className="size-6" />
            </div>
            <h3 className="font-display text-xl uppercase mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
