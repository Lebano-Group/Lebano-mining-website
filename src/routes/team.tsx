import { createFileRoute } from "@tanstack/react-router";
import { UserRound } from "lucide-react";
import lebo from "@docs/team/lebo-mutavhatsindi.png";
import joel from "@docs/team/joel-kesler.png";
import shireen from "@docs/team/shireen-stow.png";
import kabelo from "@docs/team/kabelo-sebidi.png";
import teamSite from "@docs/op-team-onsite.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership — Lebano Mining" },
      {
        name: "description",
        content:
          "Board & executive leadership of Lebano Mining — Livhuwani Mutavhatsindi and the executive team.",
      },
    ],
  }),
  component: Leadership,
});

type Leader = {
  name: string;
  role: string;
  bio: readonly string[];
  hidden?: boolean;
  subtitle?: string;
} & (
  | { img: string; placeholder?: false }
  | { placeholder: true; img?: never }
);

const leaders: readonly Leader[] = [
  {
    img: lebo,
    name: "Mr. Livhuwani Mutavhatsindi",
    role: "Founder & Chief Executive Officer",
    subtitle: "Lebano Mining (Pty) Ltd",
    bio: [
      "Mr. Livhuwani Mutavhatsindi is the Founder and Chief Executive Officer of Lebano Mining — a multi-billion rand South African bulk commodity mining and export company with active development assets across five regions of Mpumalanga Province, an expanding exploration portfolio in Lithium, Copper and Chrome, and dedicated export operations through the Richards Bay Coal Terminal.",
      "With over two decades of sector experience, Mr. Mutavhatsindi has built Lebano Mining into one of South Africa's most prominent black-owned mining enterprises — exporting in excess of 1 million metric tons annually to off-takers across Europe and Southeast Asia, underpinned by institutional partnerships with Vitol, Transnet, African Rail Corporation and NG Global Energy Solutions.",
      "Prior to founding Lebano Mining, Mr. Mutavhatsindi ran the Buffelsfontein Gold Mine in Klerksdorp with Village Main Reef, and led a successful turnaround of Harmony Gold Mine assets between 2010 and 2014. He founded the Mashudu Francinah Foundation in 2022 — funding scholarships, financing school construction in Venda and making annual structured contributions to community upliftment across South Africa.",
    ],
  },
  {
    img: joel,
    name: "Mr. Joel Kesler",
    role: "Executive / Board",
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
    bio: [
      "Shireen is a Chartered Accountant (South Africa) with international experience across the assurance and finance functions of major mining and listed companies.",
      "In the USA, Shireen worked at PwC's assurance group covering large listed entities and start-ups across hospitality, biotech and technology. Subsequent to leaving PwC she has held various senior financial positions, including CFO at Atlatsa Resources Corporation, listed on the TSX, NYSE and JSE.",
      "She currently holds the position of Chief Financial Officer at the Tomahawk Group.",
    ],
  },
  {
    img: kabelo,
    name: "Mr. Kabelo Sebidi",
    role: "Legal Representative",
    hidden: true,
    bio: [
      "Mr. Kabelo Sebidi is an Admitted Attorney of the High Court of South Africa and serves as Legal Representative of Lebano Mining (Pty) Ltd. He holds a Bachelor of Laws (LLB) from the University of Fort Hare — one of South Africa's most distinguished institutions of higher learning.",
      "In his role at Lebano Mining, Mr. Sebidi provides expert legal counsel across the company's commercial, operational and regulatory affairs — ensuring that the company's partnerships, contracts and business activities are conducted within a rigorous and fully compliant legal framework.",
      "His appointment reflects Lebano Mining's commitment to the highest standards of legal governance and institutional integrity across all levels of the organisation.",
    ],
  },
  {
    placeholder: true,
    name: "Mr. Kgalamadi Ramotlhale",
    role: "To Be Confirmed",
    hidden: true,
    bio: ["Biography to be supplied prior to launch."],
  },
] as const;

const visibleLeaders = leaders.filter((m) => !m.hidden);

function Leadership() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border">
        <img
          src={teamSite}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative container-narrow py-24 md:py-32">
          <h1 className="font-display text-5xl md:text-7xl uppercase max-w-3xl">Leadership</h1>
          <h2 className="font-display text-2xl md:text-4xl uppercase max-w-4xl mt-6 tracking-tight">
            Board &amp; Executive Leadership
          </h2>
          <p className="mt-8 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Executives who have operated at the highest levels of South African and international
            mining, finance and legal sectors — bringing governance depth, commercial acumen and
            operational credibility to every level of the organisation.
          </p>
        </div>
      </section>

      <section className="border-t-2 border-primary/45">
        <div className="container-narrow py-16 md:py-24 space-y-24 md:space-y-32">
          {visibleLeaders.map((m, i) => (
            <article
              key={m.name}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-5 relative">
                <div className="absolute -inset-3 bg-gradient-gold opacity-25 blur-2xl rounded" />
                {"placeholder" in m && m.placeholder ? (
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded border border-dashed border-border/80 bg-muted/30 shadow-elevated">
                    <UserRound
                      className="size-14 text-muted-foreground/55"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                ) : (
                  <img
                    src={m.img}
                    alt={m.name}
                    className="relative aspect-[4/5] w-full rounded object-cover object-top bg-card shadow-elevated"
                  />
                )}
              </div>
              <div className="lg:col-span-7">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{m.role}</div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl uppercase mb-3">
                  {m.name}
                </h2>
                {m.subtitle ? (
                  <p className="text-muted-foreground text-base md:text-lg mb-8">{m.subtitle}</p>
                ) : null}
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  {m.bio.map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
