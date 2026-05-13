import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const DEFAULT_TO = "info@lebanomining.com";
const FORM_SOURCE = "Lebano Mining — Website inquiry";
const SITE_LABEL = "lebanomining.com contact form";

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
  lines.push("", "— End of inquiry —");
  return lines.join("\n");
}

const inquiryInput = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  company: z.string().trim().max(200).optional(),
  phone: z.string().trim().max(80).optional(),
  message: z.string().trim().min(1).max(12000),
});

export type ContactInquiryResult = { ok: true } | { ok: false; message: string };

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquiryInput.parse(data))
  .handler(async ({ data }): Promise<ContactInquiryResult> => {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = process.env.CONTACT_FROM?.trim();
    const to = (process.env.CONTACT_TO?.trim() || DEFAULT_TO).trim();

    if (!apiKey || !from) {
      console.error(
        "Contact form: set RESEND_API_KEY and CONTACT_FROM on the server (e.g. Vercel env).",
      );
      return {
        ok: false,
        message: "Message could not be sent. Please email us directly.",
      };
    }

    const text = buildInquiryEmailBody({
      name: data.name,
      email: data.email,
      company: data.company ?? "",
      phone: data.phone ?? "",
      visitorMessage: data.message,
    });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `${FORM_SOURCE} — ${data.name}`,
        text,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend API error:", res.status, detail);
      return {
        ok: false,
        message: "Message could not be sent. Please try again or email us directly.",
      };
    }

    return { ok: true };
  });
