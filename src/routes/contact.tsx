import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import port from "@/assets/op-port.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Lebano Mining" },
    { name: "description", content: "Get in touch with Lebano Mining — Midrand, Gauteng, South Africa. info@lebanomining.com · +27 10 824 8330." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title={<>Let's build a <span className="text-gradient-gold">partnership</span>.</>} subtitle="Have questions, inquiries, or ready to explore a partnership? Our dedicated team is here to assist you." image={port} />

      <section className="container-narrow py-24 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Physical Address", value: "Building 11, 94 Bekker Road, Vorna Valley, Midrand" },
            { icon: Building2, label: "Postal / CIPC", value: "Thornhill Office Park, Building 11, 94 Bekker Road, Waterfall, Gauteng, 2195" },
            { icon: Phone, label: "Phone", value: "+27 10 824 8330" },
            { icon: Mail, label: "Email", value: "info@lebanomining.com" },
            { icon: Clock, label: "Office Hours", value: "Monday to Friday, 08:00 – 16:00" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 p-6 rounded border border-border bg-card">
              <div className="size-12 shrink-0 rounded bg-gradient-gold flex items-center justify-center text-primary-foreground">
                <c.icon className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-1">{c.label}</div>
                <div className="text-foreground">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="p-8 rounded border border-border bg-gradient-panel shadow-elevated space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Thanks — we'll be in touch shortly."); }}>
          <h2 className="font-display text-3xl uppercase">Send a message</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Company" name="company" />
          </div>
          <Field label="Email" name="email" type="email" />
          <Field label="Phone" name="phone" />
          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">Message</label>
            <textarea required rows={5} className="w-full bg-input/50 border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
          </div>
          <button className="w-full px-6 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold hover:opacity-90 transition">
            Submit Inquiry
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">{label}</label>
      <input required name={name} type={type} className="w-full bg-input/50 border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary" />
    </div>
  );
}
