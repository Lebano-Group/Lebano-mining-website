import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { UserRound } from "lucide-react";
import lebo from "@docs/team/lebo-mutavhatsindi.png";
import joel from "@docs/team/joel-kesler.png";
import shireen from "@docs/team/shireen-stow.png";
import kabelo from "@docs/team/kabelo-sebidi.png";
import kgalamadi from "@docs/team/Kgalamadi final pic.jpg";

export const Route = createFileRoute("/leadership")({
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
  bioExpandable?: boolean;
} & (
  | { img: string; placeholder?: false }
  | { placeholder: true; img?: never }
);

const leaders: readonly Leader[] = [
  {
    img: lebo,
    name: "Mr. Livhuwani Mutavhatsindi",
    role: "Founder & Chief Executive Officer",
    bio: [
      "Mr. Livhuwani Mutavhatsindi is the Founder and Chief Executive Officer of Lebano Mining a multi-billion rand South African bulk commodity mining and export company with active development assets locally and globally with an expanding exploration portfolio.",
      "With over two decades of sector experience, Mr. Mutavhatsindi has built Lebano Mining into one of South Africa's most prominent black-owned mining enterprises exporting in excess of 1 million metric tons annually to off-takers across Europe, India, China and Southeast Asia, underpinned by institutional partnerships.",
      "Prior to founding Lebano Mining, Mr. Mutavhatsindi participated in mining activities in the DRC, Lubumbashi, Katanga and Tshikapa between 2006 to 2009. Additionally, he acquired the Buffelsfontein Gold Mine in Klerksdorp (Orkney) in partnership with Village Main Reef, and led a successful turnaround of old Harmony Gold Mine assets between 2010 and 2016 returning a financially distressed operation to profitability.",
      "A committed advocate for the transformation of South Africa's mining sector and the empowerment of its communities, Mr. Mutavhatsindi founded the Mashudu Francinah Foundation in 2022 funding scholarships for learners at institutions across South Africa, building schools in Venda, and making annual structured contributions to feeding and community upliftment programmes across the country in honor of his late mother Mashudu Francinah Mutavhatsindi.",
    ],
  },
  {
    img: joel,
    name: "Mr. Joel Kesler",
    role: "Non-Executive Director",
    bioExpandable: true,
    bio: [
      "Mr. Joel Kesler is a qualified attorney with degrees in Commerce and Law (cum Laude) from the University of Cape Town. He brings 25 years of experience in international mergers and acquisitions, corporate finance and strategic business development both as a principal and in an advisory capacity to his role on the Lebano Mining board.",
      "Over an 18-year international executive career, Mr. Kesler held senior positions with public companies listed on the NYSE, TSX and JSE, including as main board director of Atlatsa Resources Corporation a Canadian and South African exploration and mining company specialising in platinum group metals, in joint venture with Anglo American Platinum.",
      "Mr. Kesler is co-founder and principal of the Tomahawk Group, a multi-family office managing a diversified global portfolio with investments across natural resources, technology, industrials, specialty spirits and real estate.",
    ],
  },
  {
    img: shireen,
    name: "Ms. Shireen Stow",
    role: "Chief Financial Officer",
    bioExpandable: true,
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
    bioExpandable: true,
    bio: [
      "Mr. Kabelo Sebidi is an Admitted Attorney of the High Court of South Africa and serves as Legal Representative of Lebano Mining (Pty) Ltd. He holds a Bachelor of Laws (LLB) from the University of Fort Hare — one of South Africa's most distinguished institutions of higher learning.",
      "In his role at Lebano Mining, Mr. Sebidi provides expert legal counsel across the company's commercial, operational and regulatory affairs — ensuring that the company's partnerships, contracts and business activities are conducted within a rigorous and fully compliant legal framework.",
      "His appointment reflects Lebano Mining's commitment to the highest standards of legal governance and institutional integrity across all levels of the organisation.",
    ],
  },
  {
    img: kgalamadi,
    name: "Mr. Kgalamadi Ramotlhale",
    role: "Operations & Stakeholder Executive",
    bioExpandable: true,
    bio: [
      "Mr. Kgalamadi Ramotlhale is an experienced operations, portfolio management and stakeholder engagement professional whose career spans over a decade of direct involvement in South Africa's rail freight sector, community development landscape and local economic development space. Trained and forged at Transnet Freight Rail where he progressed from freight train operations through to Portfolio Manager. His institutional knowledge of South Africa's rail freight infrastructure is a direct asset to Lebano Mining's pit-to-port supply chain operations.",
      "Beyond his operational career, Mr. Ramotlhale is widely recognised in community and development circles as a pioneer in stakeholder engagement, particularly for his work bridging communities, government structures, businesses and social initiatives across Pretoria and the broader Gauteng region.",
      "In a consulting capacity, he has worked with organisations including PropertyPoint and the Public Investment Corporation (PIC), contributing to local economic development projects, housing and civic engagement initiatives, and the building of meaningful relationships between residents, institutions and private sector stakeholders.",
      "His ability to bring different groups together around shared interests building trust between communities and decision-makers, advocating for service delivery and grassroots participation, and using both formal and informal platforms to strengthen community cooperation has established him as a recognised voice in stakeholder engagement and community mobilisation across Gauteng.",
      "At Lebano Mining, Mr. Ramotlhale's dual capability operational depth in rail logistics and proven expertise in stakeholder and community engagement positions him as a critical bridge between the company's mining operations, its institutional partners and the host communities in which it operates.",
    ],
  },
] as const;

const visibleLeaders = leaders.filter((m) => !m.hidden);
const ceo = visibleLeaders[0];
const executiveTeam = visibleLeaders.slice(1);

function LeaderRole({ role }: { role: string }) {
  return <div className="gold-container mb-3">{role}</div>;
}

function LeaderBio({
  paragraphs,
  expandable = false,
  compact = false,
  expanded = false,
  onToggle,
}: {
  paragraphs: readonly string[];
  expandable?: boolean;
  compact?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}) {
  const canExpand = expandable && paragraphs.length > 0;
  const textClass = compact
    ? "text-xs leading-relaxed text-muted-foreground"
    : "text-sm leading-relaxed text-muted-foreground";
  const buttonClass =
    "font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary/80";

  if (!canExpand) {
    return (
      <div className={`space-y-2 ${textClass}`}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  }

  return (
    <div>
      {expanded ? (
        <div className={`space-y-2 ${textClass}`}>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ) : (
        <p className={`${textClass} line-clamp-[7] h-[9.75rem] overflow-hidden`}>
          {paragraphs.join(" ")}
        </p>
      )}
      <button
        type="button"
        onClick={onToggle}
        className={`${compact ? "pt-3 text-xs" : "mt-3 text-sm"} ${buttonClass}`}
        aria-expanded={expanded}
      >
        {expanded ? "Read less" : "Read more"}
      </button>
    </div>
  );
}

function LeaderPhoto({
  leader,
  objectPosition = "top",
  fillHeight = false,
}: {
  leader: Leader;
  objectPosition?: "top" | "center";
  fillHeight?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded ${fillHeight ? "h-full" : ""}`}
    >
      <div
        className={`pointer-events-none absolute rounded bg-gradient-gold opacity-20 blur-xl ${
          fillHeight ? "inset-0" : "-inset-2"
        }`}
        aria-hidden
      />
      {"placeholder" in leader && leader.placeholder ? (
        <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded border border-dashed border-border/80 bg-muted/30 shadow-elevated">
          <UserRound
            className="size-14 text-muted-foreground/55"
            strokeWidth={1.25}
            aria-hidden
          />
        </div>
      ) : (
        <img
          src={leader.img}
          alt={leader.name}
          className={`relative w-full rounded object-cover bg-card shadow-elevated ${
            fillHeight ? "h-full min-h-[300px] lg:min-h-0" : "aspect-[4/5]"
          } ${objectPosition === "center" ? "object-center" : "object-top"}`}
        />
      )}
    </div>
  );
}

function CeoProfile({ leader }: { leader: Leader }) {
  return (
    <article className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(260px,320px)_1fr] lg:items-stretch lg:gap-14">
      <div className="mx-auto w-full max-w-xs lg:mx-0 lg:h-full lg:max-w-none">
        <LeaderPhoto leader={leader} objectPosition="center" fillHeight />
      </div>
      <div className="min-w-0">
        <LeaderRole role={leader.role} />
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase mb-6">
          {leader.name}
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {leader.bio.map((p, k) => (
            <p key={k}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}

function ExecutiveLeaderCard({ leader }: { leader: Leader }) {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <article className="flex min-w-0 flex-col gap-5">
      <LeaderPhoto leader={leader} />
      <div>
        <LeaderRole role={leader.role} />
        <h3 className="font-display text-xl md:text-2xl uppercase mb-3 leading-tight">
          {leader.name}
        </h3>
        <LeaderBio
          paragraphs={leader.bio}
          expandable={leader.bioExpandable}
          compact
          expanded={bioExpanded}
          onToggle={() => setBioExpanded((v) => !v)}
        />
      </div>
    </article>
  );
}

function Leadership() {
  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="container-narrow py-24 md:py-32 text-center">
          <div className="leadership-hero-enter mx-auto max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl uppercase leading-tight text-gradient-gold">
              Leadership
            </h1>
            <h2 className="font-display text-2xl md:text-4xl uppercase mt-6 tracking-tight text-gradient-gold">
              Board &amp; Executive Leadership
            </h2>
            <p className="mt-8 mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Executives who have operated at the highest levels of South African and international
            mining, finance and legal sectors bringing governance depth, commercial acumen and
            operational credibility to every level of the organisation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t-2 border-primary/45">
        <div className="container-narrow">
          {ceo ? (
            <div className="border-b border-border py-16 md:py-24 lg:py-28">
              <CeoProfile leader={ceo} />
            </div>
          ) : null}

          {executiveTeam.length > 0 ? (
            <div className="grid grid-cols-1 items-start gap-10 py-16 sm:grid-cols-2 md:gap-8 md:py-24 lg:grid-cols-3 lg:gap-10">
              {executiveTeam.map((m) => (
                <ExecutiveLeaderCard key={m.name} leader={m} />
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
