import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@docs/lebano-logo-black.png";

/** Source artwork 2000×2500 (4:5). `width`/`height` preserve aspect ratio for layout. */
const LOGO_INTRINSIC = { width: 2000, height: 2500 } as const;

const navLinkClass =
  "inline-block text-sm uppercase tracking-wider text-muted-foreground transition-all duration-200 ease-out hover:translate-x-1 hover:text-primary active:translate-x-0.5";

const contactCtaClass =
  "inline-block px-5 py-2 rounded bg-gradient-gold text-primary-foreground font-semibold text-sm uppercase tracking-wider shadow-gold transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0";

const navMain = [
  { to: "/", label: "Home" },
  { to: "/about-us", label: "About Us" },
  { to: "/operations", label: "Operations" },
  { to: "/leadership", label: "Leadership" },
  { to: "/social-responsibility", label: "Social Responsibility" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-narrow flex items-center justify-between min-h-20 md:min-h-28 py-2.5 md:py-3">
        <Link to="/" className="group/logo flex shrink-0">
          <span className="flex size-[4.25rem] sm:size-20 md:size-24 lg:size-[6.5rem] items-center justify-center overflow-hidden rounded-full border-2 border-primary/45 bg-card/60 p-1 shadow-[0_0_28px_-6px_oklch(0.74_0.14_75/0.4)] transition-transform duration-300 group-hover/logo:scale-[1.02]">
            <img
              src={logo}
              alt="Lebano Mining"
              width={LOGO_INTRINSIC.width}
              height={LOGO_INTRINSIC.height}
              className="size-full scale-[1.12] object-contain"
            />
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navMain.map((n) => (
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
            className={contactCtaClass}
            activeProps={{ className: `${contactCtaClass} opacity-100` }}
          >
            Contact
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
            {navMain.map((n) => (
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
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className={`${contactCtaClass} w-fit`}
              activeProps={{ className: `${contactCtaClass} w-fit opacity-100` }}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
