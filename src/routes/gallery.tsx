import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
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
  { src: lebano37, label: "Fleet — Bell B40D ADTs" },
  { src: lebano43, label: "Loader & Stockpile" },
  { src: lebano36, label: "Articulated Fleet On Site" },
  { src: lebano40, label: "Port & Cranes — Transnet" },
  { src: lebano44, label: "Port Bulk Handling", region: "Operations" },
  { src: lebano38, label: "Branded Haul Truck — ADT #240" },
  { src: excavator, label: "Bulk handling — Richards Bay" },
  { src: team, label: "Field Team On-Site" },
  { src: fleet, label: "Heavy Haul Fleet" },
  { src: stockpile, label: "Coal Stockpile" },
  { src: port, label: "Port Operations" },
];

function GalleryAlbum() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  const active = photos[current];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded border border-border bg-card p-4 shadow-elevated sm:p-6 md:p-8">
        <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
          <div className="relative">
            <CarouselContent className="-ml-0">
              {photos.map((p, i) => (
                <CarouselItem key={i} className="pl-0">
                  <div className="overflow-hidden rounded border border-border/80 bg-coal">
                    <img
                      src={p.src}
                      alt={p.label}
                      className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 top-1/2 border-border bg-card/90 backdrop-blur-sm hover:bg-card" />
            <CarouselNext className="right-3 top-1/2 border-border bg-card/90 backdrop-blur-sm hover:bg-card" />
          </div>

          <div className="mt-5 flex items-end justify-between gap-4 border-t border-border/60 pt-5">
            <div>
              {active.region ? (
                <div className="text-xs uppercase tracking-[0.25em] text-primary">{active.region}</div>
              ) : null}
              <div className="font-display text-xl uppercase text-foreground sm:text-2xl">{active.label}</div>
            </div>
            <div className="shrink-0 text-sm tabular-nums text-muted-foreground">
              {current + 1} / {photos.length}
            </div>
          </div>
        </Carousel>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {photos.map((p, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`View ${p.label}`}
              aria-current={i === current ? "true" : undefined}
              className={cn(
                "relative shrink-0 overflow-hidden rounded border transition-all duration-200",
                i === current
                  ? "border-primary ring-2 ring-primary/40 opacity-100"
                  : "border-border opacity-60 hover:opacity-90",
              )}
            >
              <img src={p.src} alt="" className="size-16 object-cover sm:size-20" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

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
        <GalleryAlbum />
      </section>
    </>
  );
}
