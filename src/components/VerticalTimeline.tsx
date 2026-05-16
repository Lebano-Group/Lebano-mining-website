import type { ReactNode } from "react";

export type TimelineItem = {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
};

/** Use for sequential / value-chain narratives (not generic card grids). */
export function VerticalTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mx-auto max-w-4xl space-y-10 md:space-y-14">
      <span
        aria-hidden
        className="absolute left-[0.9375rem] top-10 bottom-8 w-[2px] bg-gradient-to-b from-primary/55 via-primary/25 to-transparent md:left-[1rem]"
      />
      {items.map((item, idx) => (
        <li key={idx} className="relative grid grid-cols-1 gap-3 pl-[3rem] md:pl-[4.75rem]">
          <span
            aria-hidden
            className="absolute left-[0.6875rem] top-1 size-4 rounded-full border-[3px] border-background bg-primary shadow-[0_0_16px_-2px_oklch(0.74_0.14_75/0.5)] md:left-[1.125rem]"
          />
          {item.kicker ? (
            <p className="text-xs uppercase tracking-[0.28em] text-primary">{item.kicker}</p>
          ) : null}
          <div className="font-display text-lg uppercase text-foreground md:text-xl">{item.title}</div>
          {item.body ? (
            <div className="text-sm leading-relaxed text-muted-foreground md:text-base">{item.body}</div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
