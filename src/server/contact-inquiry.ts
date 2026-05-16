import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const INBOX = "info@lebanomining.com";
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

/** Server-side FormSubmit — avoids browser CORS blocks on localhost/production. */
async function sendViaFormSubmit(params: {
  name: string;
  email: string;
  message: string;
}): Promise<ContactInquiryResult> {
  const ajaxUrl = `https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`;

  const res = await fetch(ajaxUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      _subject: `${FORM_SOURCE} — ${params.name}`,
      _replyto: params.email,
      _captcha: "false",
      _template: "table",
      email: params.email,
      message: params.message,
    }),
  });

  const data: unknown = await res.json().catch(() => null);
  const successVal =
    data && typeof data === "object" && "success" in data
      ? (data as Record<string, unknown>).success
      : undefined;
  const ok = res.ok && (successVal === true || successVal === "true");

  if (!ok) {
    console.error("FormSubmit error:", res.status, data);
    return {
      ok: false,
      message: "Could not send your message. Please try again or email us directly.",
    };
  }

  return { ok: true };
}

export const submitContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inquiryInput.parse(data))
  .handler(async ({ data }): Promise<ContactInquiryResult> => {
    const message = buildInquiryEmailBody({
      name: data.name,
      email: data.email,
      company: data.company ?? "",
      phone: data.phone ?? "",
      visitorMessage: data.message,
    });

    return sendViaFormSubmit({
      name: data.name,
      email: data.email,
      message,
    });
  });
