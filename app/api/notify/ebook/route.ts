import { NextRequest, NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const TO_EMAIL = "nicol.weddings@gmail.com";
const TO_NAME = "Nicol Weddings";

export async function POST(req: NextRequest) {
  if (!BREVO_API_KEY) {
    return NextResponse.json({ ok: false, error: "Brevo API key missing" }, { status: 500 });
  }

  const { name, email } = await req.json();

  const html = `
    <div style="background:#f5f3ed;padding:40px 20px;font-family:sans-serif;">
      <div style="max-width:540px;margin:0 auto;background:#fff;border-radius:4px;overflow:hidden;">
        <div style="background:#363025;padding:28px 32px;">
          <p style="margin:0;font-family:sans-serif;font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.5);">Nicol Weddings & Events</p>
          <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:26px;font-weight:300;color:#fff;">E-book letöltve</h1>
        </div>
        <div style="padding:28px 32px;">
          <table style="width:100%;border-collapse:collapse;">
            <tbody>
              <tr>
                <td style="padding:10px 0;font-family:sans-serif;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em;width:120px;">Név</td>
                <td style="padding:10px 0;font-family:sans-serif;font-size:14px;color:#363025;">${name || "—"}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;font-family:sans-serif;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em;">E-mail</td>
                <td style="padding:10px 0;font-family:sans-serif;font-size:14px;color:#363025;">${email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style="padding:0 32px 28px;">
          <p style="margin:0;font-family:sans-serif;font-size:12px;color:#bbb;">nicol.weddings@gmail.com</p>
        </div>
      </div>
    </div>
  `;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Nicol Weddings Weboldal", email: TO_EMAIL },
      to: [{ email: TO_EMAIL, name: TO_NAME }],
      subject: "Új e-book letöltés",
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Brevo error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
