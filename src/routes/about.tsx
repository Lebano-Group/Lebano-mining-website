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
          "Founded in 2012, Lebano Mining is an emerging South African mining company in exploration, development and bulk commodity logistics.",
      },
    ],
  }),
  component: About,
});

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
        subtitle="An emerging South African mining company focused on exploration, development and the logistics of bulk commodities."
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
            is an emerging South African mining company, with a primary focus on the exploration,
            development and mining of bulk commodities and associated logistics services across the
            mining value supply chain.
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
        <aside className="lg:col-span-2 p-8 rounded border border-border bg-card h-fit">
          <h3 className="font-display text-xl uppercase text-primary mb-4">Lebano Operations</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Lebano holds mineral rights and interest in various exploration, development and
            operational assets for thermal coal production. Assets in development are situated in
            the <span className="text-foreground">Belfast, Hendrina and Ermelo</span> regions of
            Mpumalanga, supplying both domestic and export markets.
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
        <h2 className="font-display text-4xl md:text-5xl uppercase mb-12 text-center">
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
            <div key={v.t} className="p-8 rounded border border-border bg-card">
              <div className="font-display text-primary text-sm uppercase tracking-[0.2em] mb-3">
                Value
              </div>
              <h3 className="font-display text-2xl uppercase mb-3">{v.t}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Foundation */}
      <section className="container-narrow pb-24">
        <div className="rounded-lg p-10 md:p-14 bg-gradient-gold text-primary-foreground shadow-gold">
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
