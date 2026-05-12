import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ServicesCircularCarousel } from "@/components/ServicesCircularCarousel";
import { Compass, Mountain, Truck, Globe2, Map, Leaf, Users, ShieldCheck } from "lucide-react";
import port from "@docs/op-port.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lebano Mining" },
      {
        name: "description",
        content:
          "Mineral exploration, mining operations, end-to-end logistics, commodity export and strategic resource planning.",
      },
    ],
  }),
  component: Services,
});

const items = [
  {
    icon: Compass,
    title: "Mineral Exploration",
    body: "Exploration across bulk commodities and precious metals asset classes.",
  },
  {
    icon: Mountain,
    title: "Mining Operations",
    body: "Development and operational mining of thermal coal; mineral rights management.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    body: "Mine to port logistics — transport, rail coordination, and port allocation at Richards Bay.",
  },
  {
    icon: Globe2,
    title: "Commodity Export",
    body: "Dry bulk export including iron ore and thermal coal to European and SE Asian markets.",
  },
  {
    icon: Map,
    title: "Strategic Resource Planning",
    body: "Geological assessments and resource modeling for sustainable, long-term resource utilization.",
  },
  {
    icon: Leaf,
    title: "Environmental Management",
    body: "R&D into reducing environmental impact; proactive environmental responsibility programs.",
  },
  {
    icon: Users,
    title: "Community Development",
    body: "Local economic development, skills transfer and upliftment of host communities.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Management",
    body: "Stringent safety protocols and continuous training programs across all operations.",
  },
];

function Services() {
  return (
    <>
      <PageHeader
        title={
          <>
            Integrated <span className="text-gradient-gold">mine-to-market</span> services.
          </>
        }
        subtitle="From geological assessment to dry bulk export — we operate across the full mining value chain."
        image={port}
      />
      <section className="container-narrow py-16 md:py-24">
        <ServicesCircularCarousel items={items} />
      </section>
    </>
  );
}
