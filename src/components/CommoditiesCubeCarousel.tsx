import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Full lap ~52s */
const DEG_PER_MS = 360 / 52_000;

function usePrefersReducedMotion(): boolean {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduce(mq.matches);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

export type CommoditySlide = {
  symbol: string;
  title: string;
  badge: string;
  body: string;
};

const faceGlass =
  "border border-sky-300/45 bg-black/35 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.08),inset_0_0_42px_-12px_oklch(0.75_0.12_215/0.12),0_0_52px_-10px_oklch(0.72_0.14_220/0.42)] backdrop-blur-xl";

const faceGlassFront =
  "border-sky-200/65 bg-black/42 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.12),inset_0_1px_0_0_oklch(0.92_0.05_215/0.2),0_0_72px_-8px_oklch(0.78_0.12_220/0.5),0_0_120px_-24px_oklch(0.65_0.14_200/0.35)]";

const faceGlassDim =
  "border-sky-400/35 bg-black/22 opacity-[0.88] saturate-90 brightness-95 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.05),0_0_48px_-16px_oklch(0.55_0.1_215/0.28)] backdrop-blur-md";

/**
 * Translucent prism with wireframe‑style luminous edges & depth (reference: floating glass cube hero).
 */
export function CommoditiesCubeCarousel({
  items,
  className = "",
}: {
  items: CommoditySlide[];
  className?: string;
}) {
  const reduceMotion = usePrefersReducedMotion();
  const n = items.length;
  const anglePerFace = n > 0 ? 360 / n : 0;

  const [pausedByHover, setPausedByHover] = useState(false);
  /** Tighter chord in sidebar layout */
  const [panelHalfPx, setPanelHalfPx] = useState(() =>
    typeof window !== "undefined" ? Math.min(window.innerWidth * 0.42, 300) : 300,
  );
  const [snapActive, setSnapActive] = useState(0);

  const spinnerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const nearestIdxRef = useRef(0);

  const translateZ =
    n > 0 ? panelHalfPx / Math.tan(Math.PI / Math.max(n, 3)) : 0;

  useEffect(() => {
    function upd() {
      const capped = typeof window.matchMedia !== "undefined" &&
        window.matchMedia("(min-width: 1024px)").matches
        ? Math.min(window.innerWidth * 0.2, 210)
        : Math.min(window.innerWidth * 0.42, 300);
      setPanelHalfPx(capped);
    }
    upd();
    window.addEventListener("resize", upd);
    return () => window.removeEventListener("resize", upd);
  }, []);

  const applySpinnerTransform = useCallback(() => {
    const el = spinnerRef.current;
    if (el) {
      el.style.transform = `translateZ(-${translateZ}px) rotateY(${-angleRef.current}deg) rotateX(11deg)`;
    }
    if (n <= 0 || anglePerFace <= 0) return;
    const a = ((-angleRef.current % 360) + 360) % 360;
    const nearest = Math.round(a / anglePerFace) % n;
    if (nearest !== nearestIdxRef.current) {
      nearestIdxRef.current = nearest;
      setSnapActive(nearest);
    }
  }, [anglePerFace, n, translateZ]);

  useEffect(() => {
    let raf = 0;
    let prevTs: number | null = null;

    const hidden = () =>
      typeof document !== "undefined" &&
      typeof document.visibilityState !== "undefined"
        ? document.hidden
        : false;

    const loop = (t: number) => {
      const shouldSpin =
        !reduceMotion && !pausedByHover && n > 1 && !hidden();

      if (prevTs !== null && shouldSpin) {
        angleRef.current += DEG_PER_MS * (t - prevTs);
      }
      prevTs = t;

      applySpinnerTransform();
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [applySpinnerTransform, n, pausedByHover, reduceMotion]);

  useEffect(() => {
    applySpinnerTransform();
  }, [applySpinnerTransform]);

  const rotateBySteps = useCallback(
    (dir: -1 | 1) => {
      angleRef.current += dir * anglePerFace;
      applySpinnerTransform();
    },
    [anglePerFace, applySpinnerTransform],
  );

  const goToFace = useCallback(
    (i: number) => {
      const target = (((i % n) + n) % n) * anglePerFace;
      const cur = ((-angleRef.current % 360) + 360) % 360;
      let delta = target - cur;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      angleRef.current += delta;
      applySpinnerTransform();
    },
    [anglePerFace, applySpinnerTransform, n],
  );

  if (n <= 0) return null;

  const currentTitle = items[snapActive]?.title ?? "";

  return (
    <div
      className={`relative ${className}`}
      aria-roledescription="carousel"
      aria-label="Our commodities"
    >
      <span className="sr-only" aria-live="polite">
        {currentTitle ? `Current: ${currentTitle}` : ""}
      </span>

      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[50%] bg-[radial-gradient(closest-side,oklch(0.45_0.12_175/0.22),transparent_72%)] blur-3xl opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-10 -z-10 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.5_0.14_155/0.18),transparent_68%)] blur-2xl"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[82%] h-14 w-[min(72%,440px)] -translate-x-1/2 rounded-[40%] bg-[radial-gradient(closest-side,oklch(0_0_0/0.45),transparent_70%)] opacity-80 blur-xl"
      />

      <div
        className="relative mx-auto flex h-[min(52vh,420px)] w-full max-w-[min(100%,520px)] items-center justify-center lg:max-w-none lg:mx-0 md:h-[min(54vh,440px)]"
        style={{
          perspective: "min(900px, 100vw)",
          perspectiveOrigin: "50% 40%",
        }}
        onMouseEnter={() => setPausedByHover(true)}
        onMouseLeave={() => setPausedByHover(false)}
      >
        <div className="relative h-full w-full [transform-style:preserve-3d]">
          <div
            ref={spinnerRef}
            className="absolute inset-0 m-auto flex h-[min(48vh,380px)] w-[min(88vw,460px)] max-w-[460px] items-center justify-center [transform-style:preserve-3d] will-change-transform lg:h-[min(50vh,400px)] lg:w-[min(100%,440px)]"
          >
            {items.map((item, idx) => {
              const faceRot = idx * anglePerFace;
              const front = snapActive === idx;
              return (
                <div
                  key={item.title}
                  className="absolute flex h-[min(46vh,360px)] w-[min(86vw,420px)] max-w-[420px] [transform-style:preserve-3d] [backface-visibility:hidden] lg:h-[min(48vh,380px)] lg:max-w-[400px]"
                  style={{
                    transform: `rotateY(${faceRot}deg) translateZ(${translateZ}px)`,
                  }}
                >
                  <div
                    role="article"
                    aria-current={front ? "true" : undefined}
                    className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl p-6 text-left text-foreground md:min-h-[280px] md:rounded-[1.25rem] md:p-8 ${faceGlass} ${
                      front ? faceGlassFront : faceGlassDim
                    }`}
                  >
                    {/* Wireframe rim accent */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-95 [background:linear-gradient(135deg,oklch(0.92_0.06_215/0.14)_0%,transparent_38%,transparent_62%,oklch(0.35_0.08_200/0.2)_100%)]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent"
                    />

                    <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
                      <div className="flex shrink-0 items-start justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-sky-300/40 bg-sky-950/35 px-3 py-2 shadow-[inset_0_-1px_0_0_oklch(0_0_0/0.25)] backdrop-blur-sm">
                          <span className="text-xl leading-none text-sky-200" aria-hidden>
                            {item.symbol}
                          </span>
                          <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.2em] text-sky-100/95 sm:text-[10px]">
                            {item.badge}
                          </span>
                        </div>
                        <span className="hidden text-[9px] uppercase tracking-[0.28em] text-sky-200/65 sm:inline sm:text-[10px]">
                          {String(idx + 1).padStart(2, "0")} ·{" "}
                          {String(n).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="mt-4 flex min-h-0 flex-col">
                        <h3 className="font-display text-xl uppercase leading-tight text-[oklch(0.97_0.01_80)] md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 max-h-[9.5rem] overflow-y-auto pr-1 text-sm leading-relaxed text-foreground/80 md:max-h-[10.25rem] md:text-[0.9375rem]">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4 lg:items-stretch">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => rotateBySteps(-1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-sky-400/40 bg-black/40 text-sky-100 shadow-[0_0_24px_-6px_oklch(0.65_0.12_220/0.45)] backdrop-blur-sm transition hover:border-sky-300/70 hover:bg-sky-950/50"
            aria-label="Previous commodity"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex max-w-[min(100%,18rem)] flex-wrap items-center justify-center gap-2 rounded-full border border-sky-400/35 bg-black/35 px-3 py-2 backdrop-blur-md">
            {items.map((it, i) => (
              <button
                key={it.title}
                type="button"
                onClick={() => goToFace(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === snapActive
                    ? "w-7 bg-[linear-gradient(90deg,oklch(0.82_0.1_220),oklch(0.7_0.12_200))] shadow-[0_0_14px_oklch(0.75_0.12_220/0.6)]"
                    : "w-1.5 bg-sky-500/35 hover:bg-sky-400/55"
                }`}
                aria-label={`Go to ${it.title}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => rotateBySteps(1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-sky-400/40 bg-black/40 text-sky-100 shadow-[0_0_24px_-6px_oklch(0.65_0.12_220/0.45)] backdrop-blur-sm transition hover:border-sky-300/70 hover:bg-sky-950/50"
            aria-label="Next commodity"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
