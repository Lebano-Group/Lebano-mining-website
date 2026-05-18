import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@docs/logo.png";

/** Source artwork 2000×2500 (4:5). `width`/`height` preserve aspect ratio for layout. */
const LOGO_INTRINSIC = { width: 2000, height: 2500 } as const;

const footerLinkClass =
  "inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-primary";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-panel">
      <div className="container-narrow py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="mb-4">
            <img
              src={logo}
              alt="Lebano Mining"
              width={LOGO_INTRINSIC.width}
              height={LOGO_INTRINSIC.height}
              className="h-[6.5rem] sm:h-28 md:h-32 w-auto max-w-[min(340px,88vw)] sm:max-w-[min(400px,75vw)] md:max-w-[min(460px,55vw)] object-contain object-left"
            />
            <div className="text-[10px] tracking-[0.25em] text-primary mt-2">EST. 2012</div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Thermal coal and bulk commodity logistics through Richards Bay — domestic supply and
            export since 2012.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className={footerLinkClass}>
                Our Business
              </Link>
            </li>
            <li>
              <Link to="/operations" className={footerLinkClass}>
                Operations
              </Link>
            </li>
            <li>
              <Link to="/leadership" className={footerLinkClass}>
                Leadership
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className={footerLinkClass}>
                Sustainability
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={footerLinkClass}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className={footerLinkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <MapPin className="size-4 mt-0.5 text-primary shrink-0" /> Building 11, 94 Bekker
              Road, Vorna Valley, Midrand
            </li>
            <li className="flex gap-2">
              <Phone className="size-4 mt-0.5 text-primary shrink-0" /> +27 10 824 8330
            </li>
            <li className="flex gap-2">
              <Mail className="size-4 mt-0.5 text-primary shrink-0" /> info@lebanomining.com
            </li>
            <li className="flex gap-2">
              <Clock className="size-4 mt-0.5 text-primary shrink-0" /> Mon – Fri, 08:00 – 16:00
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Registered</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            LEBANO MINING (PTY) LTD
            <br />
            Incorporated 14 December 2012
            <br />
            Thornhill Office Park, Waterfall, Gauteng
          </p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-narrow py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© 2012 Lebano Mining (Pty) Ltd. All rights reserved.</span>
          <span>Cultivating Partnerships. Fostering Progress.</span>
        </div>
      </div>
    </footer>
  );
}
