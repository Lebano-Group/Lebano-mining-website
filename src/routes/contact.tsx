import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import port from "@docs/op-port.jpg";

const INBOX = "info@lebanomining.com";
const FORM_SOURCE = "Lebano Mining — Website inquiry";
const SITE_LABEL = "lebanomining.com contact form";

/** Bold-looking text in plain-text mailto (Outlook does not render HTML in mailto bodies). */
function bold(text: string): string {
  return [...text]
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 0x41 && code <= 0x5a) return String.fromCodePoint(0x1d5d4 + (code - 0x41));
      if (code >= 0x61 && code <= 0x7a) return String.fromCodePoint(0x1d5ee + (code - 0x61));
      if (code >= 0x30 && code <= 0x39) return String.fromCodePoint(0x1d7ec + (code - 0x30));
      return char;
    })
    .join("");
}

function label(text: string): string {
  return `${bold(text)}`;
}

function buildInquiryEmailBody(params: {
  name: string;
  email: string;
  company: string;
  phone: string;
  visitorMessage: string;
}): string {
  const message = params.visitorMessage.trim() || "(No message text provided.)";
  const lines: string[] = [
    bold(FORM_SOURCE),
    `Source: ${SITE_LABEL}`,
    "",
    bold("CONTACT DETAILS"),
    "────────────────────────────",
    `${label("Name:")}     ${params.name}`,
    `${label("Email:")}    ${params.email}`,
  ];
  if (params.company.trim()) lines.push(`${label("Company:")}  ${params.company}`);
  if (params.phone.trim()) lines.push(`${label("Phone:")}    ${params.phone}`);
  lines.push(
    "",
    bold("MESSAGE"),
    "────────────────────────────",
    message,
    "",
    "— End of inquiry —",
  );
  return lines.join("\n");
}

function buildMailtoUrl(params: {
  name: string;
  email: string;
  company: string;
  phone: string;
  visitorMessage: string;
}): string {
  const subject = `${FORM_SOURCE} — ${params.name}`;
  const body = buildInquiryEmailBody(params);
  return `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Navigate to the system mail client (Outlook, Mail, etc.). */
function redirectToMailApp(mailtoUrl: string): void {
  const link = document.createElement("a");
  link.href = mailtoUrl;
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.location.assign(mailtoUrl);
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lebano Mining" },
      {
        name: "description",
        content:
          "Get in touch with Lebano Mining — Midrand, Gauteng, South Africa. info@lebanomining.com · +27 10 824 8330.",
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
          <span className="inline-block rounded bg-gradient-gold px-7 py-3.5 text-4xl md:text-5xl lg:text-6xl font-semibold uppercase leading-tight tracking-wider text-primary-foreground shadow-gold">
            Let&apos;s build a partnership.
          </span>
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
            { icon: Clock, label: "Office Hours", value: "Monday to Friday, 08:00 – 16:00 SAST" },
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
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const visitorMessage = String(fd.get("message") ?? "").trim();

    const mailtoUrl = buildMailtoUrl({ name, email, company, phone, visitorMessage });
    redirectToMailApp(mailtoUrl);
    form.reset();
  }

  return (
    <form
      className="p-8 rounded border border-border bg-gradient-panel shadow-elevated space-y-5"
      onSubmit={handleSubmit}
    >
      <h2 className="font-display text-3xl uppercase">Send a message</h2>
      <p className="text-sm text-muted-foreground">
        Submit opens Outlook or your default email app with your message ready to send to{" "}
        {INBOX}.
      </p>
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
        className="w-full px-6 py-3.5 rounded bg-gradient-gold text-primary-foreground font-semibold uppercase tracking-wider text-sm shadow-gold hover:opacity-90 transition"
      >
        Submit Inquiry
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
