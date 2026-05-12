import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
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

function About() {
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

      {/* Core values */}
      <section className="container-narrow py-24">
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-12 text-center text-gradient-gold">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Responsible Mineral Development",
              b: "Stakeholder engagement, upliftment of host communities, local economic development and skills transfer.",
            },
            {
              t: "Safety, Health & Environment",
              b: "Unwavering dedication to health and safety standards, proactive environmental responsibility.",
            },
            {
              t: "Strategic Partnerships",
              b: "Key partnerships with industry customers, global commodity trading houses and logistics providers across Africa.",
            },
          ].map((v) => (
            <div key={v.t} className={`p-8 rounded border border-border bg-card ${aboutCardMotion}`}>
              <h3 className="font-display text-2xl uppercase mb-3">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{v.b}</p>
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
          <p className="max-w-3xl leading-relaxed">
            Established by Lebano Mining in 2022, the foundation funds scholarships for
            underprivileged learners at primary and tertiary educational institutions across South
            Africa, alongside feeding and support programs for underprivileged South Africans.
          </p>
        </div>
      </section>
    </>
  );
}
