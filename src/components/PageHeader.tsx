import { ReactNode } from "react";

export function PageHeader({
  title,
  subtitle,
  image,
}: {
  title: ReactNode;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="relative container-narrow py-24 md:py-32">
        <h1 className="font-display text-5xl md:text-7xl uppercase max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
