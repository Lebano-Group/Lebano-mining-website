import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type ServiceSlide = { icon: LucideIcon; title: string; body: string };

export function ServicesCircularCarousel({ items }: { items: ServiceSlide[] }) {
  const [active, setActive] = useState(0);
  const n = items.length;

  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  return (
    <div className="relative py-8 md:py-12">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-44 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl" />
      <div className="relative mx-auto flex h-[420px] w-full max-w-[980px] items-center justify-center md:h-[440px]">
        {items.map((item, idx) => {
          const forward = (idx - active + n) % n;
          const isFront = forward === 0;
          const isLeft = n > 1 && forward === n - 1;
          const isRight = n > 1 && forward === 1;
          if (n > 1 && !isFront && !isLeft && !isRight) return null;

          let transform: string;
          let opacity: number;
          let z: number;

          if (isFront) {
            transform = "translateX(0) translateY(0) scale(1)";
            opacity = 1;
            z = 50;
          } else if (isRight) {
            transform = "translateX(33%) translateY(8%) scale(0.86)";
            opacity = 0.7;
            z = 30;
          } else {
            transform = "translateX(-33%) translateY(8%) scale(0.86)";
            opacity = 0.7;
            z = 30;
          }

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => !isFront && setActive(idx)}
              className={`absolute inset-x-0 mx-auto flex w-[min(88vw,700px)] max-w-[700px] flex-col justify-between overflow-hidden rounded-[1.75rem] border bg-gradient-panel p-7 text-left transition-all duration-500 ease-out md:h-[300px] md:rounded-[2.25rem] md:p-8 ${
                isFront
                  ? "border-primary/45 shadow-[0_28px_64px_-22px_oklch(0_0_0/0.72),0_0_0_1px_oklch(0.74_0.14_75/0.12),inset_0_1px_0_0_oklch(1_0_0/0.1),inset_0_-28px_56px_-24px_oklch(0_0_0/0.52)] ring-1 ring-primary/25"
                  : "cursor-pointer border-border/80 shadow-[0_20px_48px_-24px_oklch(0_0_0/0.65),inset_0_1px_0_0_oklch(1_0_0/0.05),inset_0_-22px_48px_-26px_oklch(0_0_0/0.45)] hover:border-primary/35"
              }`}
              style={{
                zIndex: z,
                opacity,
                transform,
                filter: isFront ? "none" : "saturate(0.85) brightness(0.85)",
              }}
              aria-current={isFront ? "true" : undefined}
              aria-label={isFront ? `${item.title} (current)` : `Show ${item.title}`}
            >
              {/* Curved-surface lighting: specular band + falloff (not a flat fill) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(120%_85%_at_50%_-8%,oklch(0.97_0.02_80/0.14),transparent_52%),radial-gradient(90%_70%_at_100%_0%,oklch(0.74_0.14_75/0.1),transparent_45%),linear-gradient(165deg,oklch(1_0_0/0.06)_0%,transparent_42%,oklch(0_0_0/0.22)_100%)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-[42%] left-1/2 h-[78%] w-[118%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,oklch(0.78_0.12_75/0.18),transparent_100%)] opacity-90 blur-2xl mix-blend-screen"
              />
              <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-between">
                <div className="flex items-start justify-between gap-6">
                  <div className="inline-flex items-center gap-3 rounded-full border border-primary/35 bg-primary/10 px-4 py-2 text-primary">
                    <item.icon className="size-5" />
                    <span className="text-xs uppercase tracking-[0.24em]">Core Service</span>
                  </div>
                  <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:inline">
                    {String(idx + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-5">
                  <h3 className="font-display text-2xl uppercase leading-tight md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                    {item.body}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-9 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={prev}
          className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card"
          aria-label="Previous service"
        >
          <ChevronLeft className="size-6" />
        </button>
        <div className="flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-8 bg-gradient-gold"
                  : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-background/90 text-foreground shadow-md transition hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card"
          aria-label="Next service"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
