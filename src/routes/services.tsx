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
          "Richards Bay terminal logistics, bulk commodity export, exploration support and strategic resource planning.",
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
    body: "Thermal coal and bulk handling coordinated through Lebano's Richards Bay port allocation and mineral rights.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    body: "Richards Bay terminal logistics — transport, rail coordination, and port allocation for bulk export.",
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
            Integrated bulk commodity <span className="text-gradient-gold">services</span> at
            Richards Bay.
          </>
        }
        subtitle="From inbound logistics to vessel loading — coordinated through our Richards Bay allocation."
        image={port}
      />
      <section className="container-narrow py-16 md:py-24">
        <ServicesCircularCarousel items={items} />
      </section>
    </>
  );
}
