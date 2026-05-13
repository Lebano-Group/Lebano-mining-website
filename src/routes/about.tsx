import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, ShieldCheck, Leaf, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import excavator from "@docs/op-excavator.jpg";
import team from "@docs/op-team-onsite.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lebano Mining — Our Journey & Values" },
      {
        name: "description",
        content:
          "Founded in 2012, Lebano Mining delivers thermal coal and bulk commodity logistics through Richards Bay.",
      },
    ],
  }),
  component: About,
});

const aboutCardMotion =
  "shadow-elevated transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_70px_-20px_oklch(0_0_0/0.75)] hover:border-primary/50 hover:ring-1 hover:ring-primary/20";

const foundationCardMotion =
  "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_oklch(0.74_0.14_75/0.55)]";

const mashuduInitiatives = [
  {
    id: "univen",
    title: "University of Venda",
    lines: [
      "The foundation donated R1 million to the University of Venda to support the institution and its students.",
    ],
  },
  {
    id: "venda-community",
    title: "Community of Venda",
    lines: [
      "Fifteen full football kits were donated to community teams in Venda.",
    ],
  },
  {
    id: "kingsway",
    title: "Kingsway Centre",
    lines: [
      "The foundation contributed R10,000 every month for one year to Kingsway Centre.",
    ],
  },
  {
    id: "st-laurence",
    title: "St Laurence Centre",
    lines: [
      "Monthly donations of R15,000 were made to St Laurence Centre.",
      "Representatives visited the centre to hand out gifts: seven bicycles, Woolworths shopping vouchers to the value of R10,000, and McDonald's meals for all forty-two children present.",
    ],
  },
  {
    id: "soweto-schools",
    title: "Soweto school donations",
    lines: [
      "The foundation's work was covered in the Daily Sun.",
      "Ditwana Primary School (Orlando East): fifty McDonald's meals were handed out.",
      "Tshebedisano Primary School (Pimville): fifty McDonald's meals were handed out.",
    ],
  },
  {
    id: "venda-event",
    title: "Event in Venda",
    lines: [
      "A community event in Venda honoured legacy artists from the region so their contributions are remembered. Artists recognised included:",
    ],
    bullets: [
      "David Mmbi",
      "Dr Roxley Mitchell",
      "Jambo (Zimbabwe)",
      "Dr Colbert Mukhwevo",
      "Julia Nemakhavhani",
      "Tshimangadzo Esther Sinyegwe",
      "Adziambei Band",
    ],
  },
] as const;

type MashuduId = (typeof mashuduInitiatives)[number]["id"];

function About() {
  const [mashuduOpenId, setMashuduOpenId] = useState<MashuduId | null>(null);
  const activeMashudu = mashuduInitiatives.find((i) => i.id === mashuduOpenId);

  return (
    <>
      <PageHeader
        title={
          <>
            Cultivating <span className="text-gradient-gold">Partnerships.</span> Fostering
            Progress.
          </>
        }
        subtitle="South African bulk commodity logistics centred on Richards Bay — export coordination and domestic supply."
        image={excavator}
      />

      <section className="container-narrow py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3 space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="font-display text-3xl md:text-4xl uppercase text-foreground">
            Our Journey
          </h2>
          <p>
            Lebano Mining was established 12 years ago by its founder and industrialist,{" "}
            <span className="text-foreground">Livhuwani Mutavhatsindi</span>. Today, Lebano Mining
            focuses on thermal coal and bulk commodity logistics through its Richards Bay port
            allocation — coordinating stockpiling, loading and export for domestic and international
            markets.
          </p>
          <p>
            During the past three years, Lebano Mining has exported over{" "}
            <span className="text-primary font-semibold">3.5 million metric tons</span> of bulk
            commodities through its port allocation at Richards Bay, including iron ore and thermal
            coal products to European and Southeast Asian markets.
          </p>
          <p>
            Over the course of more than a decade, Lebano Mining has cultivated strategic
            relationships with{" "}
            <span className="text-foreground">Vittol, African Rail Corporation and Transnet</span> —
            partnerships pivotal to the growth and success of the company.
          </p>
        </div>
        <aside
          className={`lg:col-span-2 p-8 rounded border border-border bg-card h-fit ${aboutCardMotion}`}
        >
          <h3 className="font-display text-xl uppercase text-primary mb-4">Lebano Operations</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lebano Mining&apos;s activities are centred on bulk commodity handling and logistics
            through its <span className="text-foreground">Richards Bay</span> port allocation —
            coordinating stockpiling, loading and export movements for thermal coal and related bulk
            products for domestic supply and international markets.
          </p>
        </aside>
      </section>

      {/* Safety */}
      <section className="bg-gradient-panel border-y border-border/60 py-20">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={team}
            alt="Lebano team on site"
            className="rounded shadow-elevated aspect-[4/3] object-cover w-full"
          />
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Safety First</div>
            <h2 className="font-display text-4xl md:text-5xl uppercase mb-6">
              Not just a priority — a core value.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We understand the profound impact our industry can have on the well-being of our
              workforce and the communities in which we operate. Our stringent safety protocols and
              continuous training programs reflect our commitment to ensuring that every person
              involved in our operations returns home safely.
            </p>
          </div>
        </div>
      </section>

      {/* Core values (from home) */}
      <section className="container-narrow py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Core values</div>
          <h2 className="font-display text-4xl md:text-5xl uppercase">
            Built on Trust, Safety & Stewardship
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Safety First",
              body: "Stringent safety protocols and continuous training ensure every person returns home safely.",
            },
            {
              icon: Leaf,
              title: "Environment",
              body: "Proactive environmental responsibility and R&D for reduced impact across operations.",
            },
            {
              icon: Users,
              title: "Community",
              body: "Local economic development, skills transfer and upliftment of host communities.",
            },
          ].map((v) => (
            <div key={v.title} className={`p-8 rounded border border-border bg-card ${aboutCardMotion} group/value`}>
              <v.icon className="size-8 text-primary mb-4 transition-transform duration-300 group-hover/value:scale-110" />
              <h3 className="font-display text-2xl uppercase mb-3">{v.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Foundation */}
      <section className="container-narrow pb-24">
        <div
          className={`rounded-lg p-10 md:p-14 bg-gradient-gold text-primary-foreground shadow-gold ${foundationCardMotion}`}
        >
          <div className="text-xs uppercase tracking-[0.3em] mb-3 opacity-80">
            Social Responsibility
          </div>
          <h2 className="font-display text-3xl md:text-5xl uppercase mb-4">
            Mashudu Francina Foundation
          </h2>
          <p className="max-w-3xl leading-relaxed mb-8 opacity-95">
            Established by Lebano Mining in 2022, the Mashudu Francina Foundation extends our
            social investment across education, child welfare and the arts. The following programmes
            are recorded in our foundation documentation — open each item for the full account.
          </p>
          <nav aria-label="Foundation programmes" className="max-w-3xl">
            <ul className="flex flex-col gap-2.5 text-left">
              {mashuduInitiatives.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={mashuduOpenId === item.id}
                    onClick={() => setMashuduOpenId(item.id)}
                    className="group/link inline-flex max-w-full cursor-pointer items-center gap-2 rounded-sm text-left text-base font-medium text-blue-950 transition-colors hover:opacity-90 active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-950 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-100"
                  >
                    <ChevronRight
                      className="size-4 shrink-0 text-blue-950 transition-transform group-hover/link:translate-x-0.5"
                      aria-hidden
                    />
                    <span className="underline decoration-blue-950/70 decoration-2 underline-offset-[5px] group-hover/link:decoration-blue-950">
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <Dialog open={mashuduOpenId !== null} onOpenChange={(open) => !open && setMashuduOpenId(null)}>
        <DialogContent className="max-h-[min(85vh,640px)] overflow-y-auto sm:max-w-lg">
          {activeMashudu ? (
            <>
              <DialogHeader>
                <DialogTitle>{activeMashudu.title}</DialogTitle>
                <DialogDescription>
                  Foundation programme details for {activeMashudu.title}.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 text-sm text-muted-foreground">
                {activeMashudu.lines.map((line) => (
                  <p key={line} className="leading-relaxed">
                    {line}
                  </p>
                ))}
                {"bullets" in activeMashudu && activeMashudu.bullets ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {activeMashudu.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
