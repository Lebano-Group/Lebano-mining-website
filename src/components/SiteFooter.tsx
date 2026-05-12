import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import logo from "@docs/logo.jpg";

const footerLinkClass =
  "inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-primary";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-panel">
      <div className="container-narrow py-16 grid gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Lebano Mining"
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 ring-offset-background"
            />
            <div>
              <div className="font-display tracking-wider">LEBANO MINING</div>
              <div className="text-[10px] tracking-[0.25em] text-primary">EST. 2012</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A decade of excellence in coal mining, exploration, and end-to-end bulk commodity
            logistics across South Africa.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className={footerLinkClass}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className={footerLinkClass}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className={footerLinkClass}>
                Leadership
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
