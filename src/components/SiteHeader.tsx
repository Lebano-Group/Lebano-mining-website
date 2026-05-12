import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@docs/logo.png";

/** Source artwork 2000×2500 (4:5). `width`/`height` preserve aspect ratio for layout. */
const LOGO_INTRINSIC = { width: 2000, height: 2500 } as const;

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
      <div className="container-narrow flex items-center justify-between min-h-20 md:min-h-28 py-2.5 md:py-3">
        <Link to="/" className="flex items-center group/logo">
          <img
            src={logo}
            alt="Lebano Mining"
            width={LOGO_INTRINSIC.width}
            height={LOGO_INTRINSIC.height}
            className="h-[4.25rem] sm:h-20 md:h-24 lg:h-[6.5rem] w-auto max-w-[min(280px,58vw)] sm:max-w-[min(320px,50vw)] md:max-w-[min(380px,42vw)] lg:max-w-[min(440px,36vw)] object-contain object-left shrink-0 transition-transform duration-300 group-hover/logo:scale-[1.02]"
          />
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
