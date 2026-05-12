import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import excavator from "@docs/op-excavator.jpg";
import port from "@docs/op-port.jpg";
import stockpile from "@docs/op-stockpile.jpg";
import fleet from "@docs/op-fleet.jpg";
import team from "@docs/op-team-onsite.jpg";
import lebano36 from "@docs/lebano-36.jpg";
import lebano37 from "@docs/lebano-37.jpg";
import lebano38 from "@docs/lebano-38.jpg";
import lebano40 from "@docs/lebano-40.jpg";
import lebano41 from "@docs/lebano-41.jpg";
import lebano43 from "@docs/lebano-43.jpg";
import lebano44 from "@docs/lebano-44.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Lebano Mining Operations" },
      {
        name: "description",
        content:
          "Photographs from Lebano Mining bulk handling, fleet and port operations at Richards Bay.",
      },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: lebano41, label: "Coal Yard Operations", region: "Operations" },
  { src: lebano37, label: "Fleet — Bell B40D ADTs", region: "Logistics" },
  { src: lebano43, label: "Loader & Stockpile", region: "Richards Bay" },
  { src: lebano36, label: "Articulated Fleet On Site", region: "Operations" },
  { src: lebano40, label: "Port & Cranes — Transnet", region: "Richards Bay" },
  { src: lebano44, label: "Port Bulk Handling", region: "Richards Bay" },
  { src: lebano38, label: "Branded Haul Truck — ADT #240", region: "Fleet" },
  { src: excavator, label: "Bulk handling — Richards Bay", region: "Richards Bay" },
  { src: team, label: "Field Team On-Site", region: "Operations" },
  { src: fleet, label: "Heavy Haul Fleet", region: "Logistics" },
  { src: stockpile, label: "Coal Stockpile", region: "Richards Bay Terminal" },
  { src: port, label: "Port Operations", region: "Richards Bay" },
];

function Gallery() {
  return (
    <>
      <PageHeader
        title={
          <>
            Richards Bay <span className="text-gradient-gold">operations</span> & logistics.
          </>
        }
        subtitle="A visual journey through our port allocation, fleet and bulk handling at Richards Bay."
        image={lebano41}
      />

      <section className="container-narrow py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <figure
              key={`${p.label}-${p.region}`}
              className={`group relative overflow-hidden rounded border border-border shadow-elevated ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <img
                src={p.src}
                alt={p.label}
                className={`w-full h-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]" : "aspect-[4/3]"}`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-coal/95 via-coal/60 to-transparent">
                <div className="text-xs uppercase tracking-[0.25em] text-primary">{p.region}</div>
                <div className="font-display text-xl uppercase text-foreground">{p.label}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
