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
  "border border-primary/45 bg-black/35 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.08),inset_0_0_44px_-12px_oklch(0.74_0.14_75/0.14),0_0_48px_-10px_oklch(0.74_0.14_75/0.38)] backdrop-blur-xl";

const faceGlassFront =
  "border-primary/65 bg-black/40 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.1),inset_0_1px_0_0_oklch(0.82_0.12_78/0.22),0_0_68px_-6px_oklch(0.78_0.15_78/0.48),0_0_100px_-20px_oklch(0.62_0.12_70/0.28)] ring-2 ring-primary/35";

const faceGlassDim =
  "border-primary/35 bg-black/22 opacity-[0.9] saturate-95 brightness-95 shadow-[inset_0_0_0_1px_oklch(1_0_0/0.05),0_0_40px_-14px_oklch(0.55_0.1_75/0.25)] backdrop-blur-md";

/**
 * Gold glass prism — translucent faces with warm luminous edges.
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
  const [panelHalfPx, setPanelHalfPx] = useState(() =>
    typeof window !== "undefined" ? Math.min(window.innerWidth * 0.44, 320) : 320,
  );
  const [snapActive, setSnapActive] = useState(0);

  const spinnerRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const nearestIdxRef = useRef(0);

  const translateZ =
    n > 0 ? panelHalfPx / Math.tan(Math.PI / Math.max(n, 3)) : 0;

  useEffect(() => {
    function upd() {
      setPanelHalfPx(Math.min(window.innerWidth * 0.44, 320));
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
        className="pointer-events-none absolute -inset-8 -z-10 rounded-[50%] bg-[radial-gradient(closest-side,oklch(0.62_0.12_78/0.22),transparent_72%)] blur-3xl opacity-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 top-8 -z-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.1_70/0.16),transparent_68%)] blur-2xl"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[82%] h-14 w-[min(72%,440px)] -translate-x-1/2 rounded-[40%] bg-[radial-gradient(closest-side,oklch(0_0_0/0.45),transparent_70%)] opacity-80 blur-xl"
      />

      <div
        className="relative mx-auto flex h-[min(52vh,440px)] w-full max-w-[min(100%,520px)] items-center justify-center md:h-[min(54vh,460px)]"
        style={{
          perspective: "min(960px, 100vw)",
          perspectiveOrigin: "50% 40%",
        }}
        onMouseEnter={() => setPausedByHover(true)}
        onMouseLeave={() => setPausedByHover(false)}
      >
        <div className="relative h-full w-full [transform-style:preserve-3d]">
          <div
            ref={spinnerRef}
            className="absolute inset-0 m-auto flex h-[min(48vh,400px)] w-[min(90vw,480px)] max-w-[480px] items-center justify-center [transform-style:preserve-3d] will-change-transform"
          >
            {items.map((item, idx) => {
              const faceRot = idx * anglePerFace;
              const front = snapActive === idx;
              return (
                <div
                  key={item.title}
                  className="absolute flex h-[min(46vh,380px)] w-[min(88vw,440px)] max-w-[440px] [transform-style:preserve-3d] [backface-visibility:hidden]"
                  style={{
                    transform: `rotateY(${faceRot}deg) translateZ(${translateZ}px)`,
                  }}
                >
                  <div
                    role="article"
                    aria-current={front ? "true" : undefined}
                    className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl p-6 text-left text-foreground md:min-h-[300px] md:rounded-[1.25rem] md:p-8 ${faceGlass} ${
                      front ? faceGlassFront : faceGlassDim
                    }`}
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-90 [background:linear-gradient(135deg,oklch(0.88_0.1_78/0.16)_0%,transparent_40%,transparent_60%,oklch(0.22_0.04_60/0.22)_100%)]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent"
                    />

                    <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-hidden">
                      <div className="flex shrink-0 flex-col gap-2">
                        <span className="text-2xl leading-none text-primary md:text-3xl" aria-hidden>
                          {item.symbol}
                        </span>
                        <h3 className="font-display text-2xl font-normal leading-snug md:text-[1.625rem]">
                          {item.title}
                        </h3>
                        <p className="text-sm leading-snug text-primary md:text-[0.9375rem]">{item.badge}</p>
                      </div>
                      <p className="mt-4 max-h-[9.75rem] min-h-0 overflow-y-auto pr-1 text-sm leading-relaxed text-muted-foreground md:max-h-[10.75rem] md:text-[0.9375rem]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => rotateBySteps(-1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-primary/45 bg-black/45 text-primary shadow-[0_0_26px_-6px_oklch(0.74_0.14_75/0.4)] backdrop-blur-sm transition hover:border-primary hover:bg-primary/15"
            aria-label="Previous commodity"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex max-w-[min(100%,18rem)] flex-wrap items-center justify-center gap-2 rounded-full border border-primary/35 bg-black/35 px-3 py-2 backdrop-blur-md">
            {items.map((it, i) => (
              <button
                key={it.title}
                type="button"
                onClick={() => goToFace(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === snapActive
                    ? "w-7 bg-gradient-gold shadow-[0_0_14px_oklch(0.74_0.14_75/0.55)]"
                    : "w-1.5 bg-primary/35 hover:bg-primary/55"
                }`}
                aria-label={`Go to ${it.title}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => rotateBySteps(1)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-primary/45 bg-black/45 text-primary shadow-[0_0_26px_-6px_oklch(0.74_0.14_75/0.4)] backdrop-blur-sm transition hover:border-primary hover:bg-primary/15"
            aria-label="Next commodity"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
