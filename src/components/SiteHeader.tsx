import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@docs/logo.jpg";

const navLinkClass =
  "inline-block text-sm uppercase tracking-wider text-muted-foreground transition-all duration-200 ease-out hover:translate-x-1 hover:text-primary active:translate-x-0.5";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-narrow flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group/logo">
          <img
            src={logo}
            alt="Lebano Mining"
            className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 ring-offset-background transition-transform duration-300 group-hover/logo:scale-105"
          />
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wider text-foreground">LEBANO</div>
            <div className="text-[10px] tracking-[0.3em] text-primary">MINING</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={navLinkClass}
              activeProps={{ className: `${navLinkClass} text-primary translate-x-0` }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded bg-gradient-gold text-primary-foreground font-semibold text-sm uppercase tracking-wider shadow-gold transition-all duration-200 hover:opacity-90 hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0"
          >
            Schedule a Visit
          </Link>
        </nav>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-narrow py-4 flex flex-col gap-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={`${navLinkClass} py-2`}
                activeProps={{ className: `${navLinkClass} py-2 text-primary` }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
