import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import excavator from "@/assets/op-excavator.jpg";
import port from "@/assets/op-port.jpg";
import stockpile from "@/assets/op-stockpile.jpg";
import fleet from "@/assets/op-fleet.jpg";
import team from "@/assets/op-team-onsite.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — Lebano Mining Operations" },
    { name: "description", content: "Photographs from Lebano Mining operations, fleet, port stockpiles and field teams across South Africa." },
  ]}),
  component: Gallery,
});

const photos = [
  { src: excavator, label: "Open-Pit Excavation", region: "Mpumalanga" },
  { src: team, label: "Field Team On-Site", region: "Operations" },
  { src: fleet, label: "Heavy Haul Fleet", region: "Logistics" },
  { src: stockpile, label: "Coal Stockpile", region: "Richards Bay Terminal" },
  { src: port, label: "Port Operations", region: "Richards Bay" },
];

function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Gallery" title={<>From the <span className="text-gradient-gold">pit face</span> to the port.</>} subtitle="A visual journey through our mining operations, logistics and people." image={fleet} />

      <section className="container-narrow py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((p, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded border border-border shadow-elevated ${i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}>
              <img src={p.src} alt={p.label} className={`w-full h-full object-cover transition duration-700 group-hover:scale-105 ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`} />
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
