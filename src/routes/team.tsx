import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import lebo from "@/assets/team-lebo.jpg";
import joel from "@/assets/team-joel.jpg";
import shireen from "@/assets/team-shireen.jpg";
import teamSite from "@/assets/op-team-onsite.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({ meta: [
    { title: "Leadership Team — Lebano Mining" },
    { name: "description", content: "Meet the founders and executives leading Lebano Mining: Lebo Mutavhatsindi, Joel Kesler and Shireen Stow." },
  ]}),
  component: Team,
});

const members = [
  {
    img: lebo,
    name: "Mr. Livhuwani (Lebo) Mutavhatsindi",
    role: "Founder & Chairman",
    facts: ["Founded Lebano Mining in 2012", "20+ years in mining & commodities"],
    bio: [
      "Mr. Mutavhatsindi is the founder and chairman of the Lebano Mining group of companies. With over 20 years of sector experience, his entrepreneurial approach has built a significant portfolio across both precious metals and bulk commodities asset classes in South Africa.",
      "Having entered logistics by transporting domestic thermal coal for ESKOM, today Lebano operates as a significant end-to-end logistics solutions provider from mine to port, including the export of dry bulk commodities through the Richards Bay terminal.",
      "Starting from humble beginnings, Mr. Mutavhatsindi remains committed to transforming the South African mining landscape by creating opportunities for black industrialists and entrepreneurs while driving socio-economic development.",
    ],
  },
  {
    img: joel,
    name: "Mr. Joel Kesler",
    role: "Executive / Board",
    facts: ["Commerce & Law (cum Laude), UCT", "25 yrs international M&A", "NYSE · TSX · JSE listed boards"],
    bio: [
      "Mr. Kesler is a qualified Lawyer with degrees in Commerce & Law (cum Laude) from the University of Cape Town, and 25 years of experience in international mergers & acquisitions, corporate finance and business development — both as principal and advisor.",
      "Over the past 18 years he has held senior international executive positions with public companies listed on the NYSE, TSX and JSE. He was a main board director at Atlatsa Resources Corporation, a Canadian–South African mining company specializing in PGMs alongside joint venture partner Anglo American Platinum.",
      "He is a co-founder and principal of the Tomahawk Group, a multi-family office holding a diversified global portfolio across natural resources, technology, industrials, specialty spirits and real estate.",
    ],
  },
  {
    img: shireen,
    name: "Ms. Shireen Stow",
    role: "Chief Financial Officer",
    facts: ["CA (SA) — Chartered Accountant", "PwC South Africa & USA assurance", "Former CFO, Atlatsa Resources"],
    bio: [
      "Shireen is a Chartered Accountant (South Africa) with international experience across the assurance and finance functions of major mining and listed companies.",
      "In the USA, Shireen worked at PwC's assurance group covering large listed entities and start-ups across hospitality, biotech and technology. Subsequent to leaving PwC she has held various senior financial positions, including CFO at Atlatsa Resources Corporation, listed on the TSX, NYSE and JSE.",
      "She currently holds the position of Chief Financial Officer at the Tomahawk Group.",
    ],
  },
];

function Team() {
  return (
    <>
      <PageHeader eyebrow="Leadership" title={<>The people behind <span className="text-gradient-gold">Lebano Mining</span>.</>} subtitle="A leadership team combining deep operational mining experience with international corporate finance and governance." image={teamSite} />

      <section className="container-narrow py-24 space-y-24">
        {members.map((m, i) => (
          <article key={m.name} className={`grid lg:grid-cols-12 gap-10 items-center ${i % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 bg-gradient-gold opacity-25 blur-2xl rounded" />
              <img src={m.img} alt={m.name} className="relative rounded shadow-elevated w-full aspect-[4/5] object-cover object-top bg-card" />
            </div>
            <div className="lg:col-span-7">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{m.role}</div>
              <h2 className="font-display text-3xl md:text-4xl uppercase mb-6">{m.name}</h2>
              <ul className="flex flex-wrap gap-2 mb-6">
                {m.facts.map((f) => (
                  <li key={f} className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground">{f}</li>
                ))}
              </ul>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {m.bio.map((p, k) => <p key={k}>{p}</p>)}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
