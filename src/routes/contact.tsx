import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { toast } from "sonner";
import port from "@docs/op-port.jpg";

const INBOX = "info@lebanomining.com";
const FORM_SOURCE = "Lebano Mining ΓÇö Website inquiry";
const SITE_LABEL = "lebanomining.com contact form";

/** One tidy plain-text email: branding + contact block + message block (FormSubmit lists fewer separate fields). */
function buildInquiryEmailBody(params: {
  name: string;
  email: string;
  company: string;
  phone: string;
  visitorMessage: string;
}): string {
  const lines: string[] = [
    `${FORM_SOURCE}`,
    `Source: ${SITE_LABEL}`,
    "",
    "CONTACT DETAILS",
    `Name:    ${params.name}`,
    `Email:   ${params.email}`,
  ];
  if (params.company.trim()) lines.push(`Company: ${params.company}`);
  if (params.phone.trim()) lines.push(`Phone:   ${params.phone}`);
  lines.push("", "MESSAGE", "");
  lines.push(params.visitorMessage.trim() || "(No message text provided.)");
  lines.push("", "ΓÇö End of inquiry ΓÇö");
  return lines.join("\n");
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lebano Mining" },
      {
        name: "description",
        content:
          "Get in touch with Lebano Mining ΓÇö Midrand, Gauteng, South Africa. info@lebanomining.com ┬╖ +27 10 824 8330.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader
        title={
          <>
            Let's build a <span className="text-gradient-gold">partnership</span>.
          </>
        }
        subtitle="Have questions, inquiries, or ready to explore a partnership? Our dedicated team is here to assist you."
        image={port}
      />

      <section className="container-narrow py-24 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            {
              icon: MapPin,
              label: "Physical Address",
              value: "Building 11, 94 Bekker Road, Vorna Valley, Midrand",
            },
            {
              icon: Building2,
              label: "Postal / CIPC",
              value: "Thornhill Office Park, Building 11, 94 Bekker Road, Waterfall, Gauteng, 2195",
            },
            { icon: Phone, label: "Phone", value: "+27 10 824 8330" },
            { icon: Mail, label: "Email", value: INBOX },
            { icon: Clock, label: "Office Hours", value: "Monday to Friday, 08:00 ΓÇô 16:00" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 p-6 rounded border border-border bg-card">
              <div className="size-12 shrink-0 rounded bg-gradient-gold flex items-center justify-center text-primary-foreground">
                <c.icon className="size-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary mb-1">
                  {c.label}
                </div>
                <div className="text-foreground">{c.value}</div>
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </section>
    </>
  );
}

function ContactForm() {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const visitorMessage = String(fd.get("message") ?? "").trim();

    const message = buildInquiryEmailBody({
      name,
      email,
      company,
      phone,
      visitorMessage,
    });

    const ajaxUrl = `https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`;

    setPending(true);
    try {
      const res = await fetch(ajaxUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `${FORM_SOURCE} ΓÇö ${name}`,
          _gotcha: "",
          email,
          message,
        }),
      });

      const data: unknown = await res.json().catch(() => null);
      const successVal =
        data && typeof data === "object" && "success" in data
          ? (data as Record<string, unknown>).success
          : undefined;
      // FormSubmit returns success as boolean true or string "true" depending on endpoint/version.
      const ok = res.ok && (successVal === true || successVal === "true");

      if (!ok) {
        console.error("FormSubmit:", res.status, data);
        toast.error("Could not send your message. Please try again or email us directly.");
        return;
      }

      toast.success("Message sent ΓÇö we'll be in touch shortly.");
      form.reset();
    } catch {
      toast.error("Could not send your message. Please email info@lebanomining.com directly.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="p-8 rounded border border-border bg-gradient-panel shadow-elevated space-y-5"
      onSubmit={handleSubmit}
    >
      <h2 className="font-display text-3xl uppercase">Send a message</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required={false} />
      </div>
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone" name="phone" required={false} />
      <div>
        <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">
          Message
        </label>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full bg-input/50 border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full px-6 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold hover:opacity-90 transition disabled:opacity-60"
      >
        {pending ? "SendingΓÇª" : "Submit Inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required: req = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-primary mb-2">{label}</label>
      <input
        required={req}
        name={name}
        type={type}
        className="w-full bg-input/50 border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
      />
    </div>
  );
}
