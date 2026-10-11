import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_EMAIL = "hello@dandaveudoka.com.ng";

// Naive in-memory rate limit: 5 submissions per IP per hour.
// Resets when the server restarts — fine for a portfolio contact form.
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  if (isRateLimited(request.headers.get("x-forwarded-for") ?? "unknown")) {
    return NextResponse.json(
      { error: "Too many messages sent. Try again later." },
      { status: 429 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const types = Array.isArray(body.types)
    ? body.types.map(String).filter(Boolean)
    : [];
  const message = String(body.message ?? "").trim();
  // Honeypot — real users never fill this hidden field, bots do
  const website = String(body.website ?? "").trim();

  if (website) {
    // Silently accept so the bot thinks it worked
    return NextResponse.json({ ok: true });
  }

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  if (!user || !pass || pass === "PASTE_YOUR_ZOHO_APP_PASSWORD_HERE") {
    return NextResponse.json(
      {
        error:
          "The contact form is not configured yet. Please email me directly.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: { user, pass },
    // Fail fast instead of hanging if Zoho is slow or unreachable
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      // Zoho requires the From address to match the authenticated account
      from: `"Portfolio Contact" <${user}>`,
      // Replies go straight to the client
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      to: CONTACT_EMAIL,
      subject: `Project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${types.join(", ") || "Not specified"}`,
        "",
        message,
      ].join("\n"),
    });

    // Auto-reply so the client knows the message landed.
    // Awaited — on serverless (Vercel) an unawaited send is killed when the
    // response returns, which silently dropped these replies. If it still
    // fails, the inquiry is safe; we just log it.
    const first = name.split(" ")[0];
    try {
      await transporter.sendMail({
        from: `"Udoka Dandave" <${user}>`,
        to: email,
        subject: "Got your message — Dandy",
        text: [
          `Hi ${first},`,
          "",
          "Thanks for reaching out through my site — your message just landed in my inbox.",
          "",
          "I'll read it properly and get back to you within 24 hours, usually much sooner.",
          "If it's urgent in the meantime, WhatsApp is the fastest way to reach me.",
          "",
          "— Dandy (Udoka Dandave)",
          "Full stack software engineer",
          "https://dandaveudoka.com.ng",
        ].join("\n"),
        html: [
          `<div style="font-family:Georgia,'Times New Roman',serif;max-width:560px;margin:0 auto;padding:32px 24px;color:#1a1815;line-height:1.6;">`,
          `  <p style="margin:0 0 20px;font-size:16px;">Hi ${first},</p>`,
          `  <p style="margin:0 0 20px;font-size:16px;">Thanks for reaching out through my site — your message just landed in my inbox.</p>`,
          `  <p style="margin:0 0 28px;font-size:16px;">I&#39;ll read it properly and get back to you <strong>within 24 hours</strong>, usually much sooner. If it&#39;s urgent in the meantime, WhatsApp is the fastest way to reach me.</p>`,
          `  <p style="margin:0 0 4px;font-size:15px;">— Dandy (Udoka Dandave)</p>`,
          `  <p style="margin:0 0 20px;font-size:13px;color:#6b675f;">Full stack software engineer</p>`,
          `  <p style="margin:0;font-size:14px;"><a href="https://dandaveudoka.com.ng" style="color:#1d39c4;">dandaveudoka.com.ng</a></p>`,
          `</div>`,
        ].join("\n"),
      });
    } catch (err) {
      console.error("auto-reply failed:", err);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Couldn't send your message right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
