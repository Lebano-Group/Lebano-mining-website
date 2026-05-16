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

type ExecMember = {
  img: string;
  name: string;
  role: string;
  bio: readonly string[];
};

type PlaceholderMember = {
  placeholder: true;
  name: string;
  role: string;
  bio: string;
};

type OtherMember = ExecMember | PlaceholderMember;

function isPlaceholderMember(m: OtherMember): m is PlaceholderMember {
  return "placeholder" in m && m.placeholder === true;
}

const cardShell =
  "rounded border border-border bg-card shadow-elevated h-full flex flex-col p-6 md:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

const others: readonly OtherMember[] = [
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
    bio: "Biography to be supplied prior to launch.",
  },
] as const;

function Leadership() {
  return (
    <>
      {/* Hero */}
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

      {/* Founder & CEO — full-width hero row (attachment layout) */}
      <section className="border-t-2 border-primary/45">
        <div className="container-narrow py-16 md:py-24">
          <article className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            <div className="lg:col-span-5 relative shrink-0 flex">
              <div className="absolute -inset-3 bg-gradient-gold opacity-25 blur-2xl rounded" />
              <img
                src={lebo}
                alt="Mr. Livhuwani Mutavhatsindi"
                className="relative rounded shadow-elevated w-full flex-1 min-h-[28rem] sm:min-h-[34rem] lg:min-h-[40rem] xl:min-h-[44rem] max-h-[52rem] lg:max-h-none object-cover object-top bg-card"
              />
            </div>
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">
                Founder &amp; Chief Executive Officer
              </div>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase mb-3">
                Mr. Livhuwani Mutavhatsindi
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8">
                Lebano Mining (Pty) Ltd
              </p>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl">
                <p>
                  Mr. Livhuwani Mutavhatsindi is the Founder and Chief Executive Officer of Lebano
                  Mining — a multi-billion rand South African bulk commodity mining and export company
                  with active development assets across five regions of Mpumalanga Province, an
                  expanding exploration portfolio in Lithium, Copper and Chrome, and dedicated export
                  operations through the Richards Bay Coal Terminal.
                </p>
                <p>
                  With over two decades of sector experience, Mr. Mutavhatsindi has built Lebano
                  Mining into one of South Africa&apos;s most prominent black-owned mining enterprises —
                  exporting in excess of 1 million metric tons annually to off-takers across Europe and
                  Southeast Asia, underpinned by institutional partnerships with Vitol, Transnet,
                  African Rail Corporation and NG Global Energy Solutions.
                </p>
                <p>
                  Prior to founding Lebano Mining, Mr. Mutavhatsindi ran the Buffelsfontein Gold Mine
                  in Klerksdorp with Village Main Reef, and led a successful turnaround of Harmony Gold
                  Mine assets between 2010 and 2014. He founded the Mashudu Francinah Foundation in
                  2022 — funding scholarships, financing school construction in Venda and making annual
                  structured contributions to community upliftment across South Africa.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Secondary leadership — card grid below CEO (attachment layout) */}
      <section className="border-t border-border">
        <div className="container-narrow py-16 md:py-24">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((m) => {
              if (isPlaceholderMember(m)) {
                return (
                  <article key={m.name} className={cardShell}>
                    <div className="relative w-full shrink-0 aspect-[4/5] rounded-md bg-muted/30 border border-dashed border-border/80 mb-6 flex items-center justify-center">
                      <UserRound
                        className="size-14 text-muted-foreground/55"
                        strokeWidth={1.25}
                        aria-hidden
                      />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-2">
                      {m.name}
                    </h3>
                    <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                      {m.role}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-auto">{m.bio}</p>
                  </article>
                );
              }

              return (
                <article key={m.name} className={cardShell}>
                  <div className="relative shrink-0 w-full aspect-[4/5] rounded-md overflow-hidden border border-border/60 mb-6 bg-muted/20">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover object-top bg-card"
                    />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl uppercase text-foreground mb-2">
                    {m.name}
                  </h3>
                  <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{m.role}</div>
                  <div className="space-y-3 text-muted-foreground leading-relaxed text-sm mt-auto">
                    {m.bio.map((p, k) => (
                      <p key={k}>{p}</p>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
