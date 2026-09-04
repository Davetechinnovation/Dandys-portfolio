"use client";

import { useState } from "react";
import type { profile as profileType } from "@/lib/data";

type Profile = typeof profileType;

const projectTypes = [
  "FULL STACK DEV",
  "MOBILE APP",
  "SYSTEM ARCHITECTURE",
  "OTHER",
];

export function ContactPageClient({ profile }: { profile: Profile }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [types, setTypes] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — stays empty for humans
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  const toggleType = (t: string) => {
    setTypes((prev) =>
      prev.includes(t) ? prev.filter((p) => p !== t) : [...prev, t]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, types, message, website }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setName("");
      setEmail("");
      setTypes([]);
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <main className="md:ml-16">
      <div className="min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              01 // TRANSMISSION
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Let&apos;s build<br />something.
            </h1>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed max-w-md">
              Available for freelance engagements, contracts, and full-time
              remote roles. Response time is typically within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  DIRECT LINE
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  PHONE
                </p>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  {profile.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  BASE OF OPERATIONS
                </p>
                <p className="text-lg">{profile.location}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  FAST RESPONSE
                </p>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 text-sm uppercase tracking-widest flex-wrap">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                GITHUB
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                TWITTER / X
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                INSTAGRAM
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="border border-border p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
                >
                  IDENTIFICATION
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name / company"
                  className="w-full bg-background border-b border-border py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
                >
                  RETURN ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full bg-background border-b border-border py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  WHAT ARE WE BUILDING?
                </label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={types.includes(t)}
                        onChange={() => toggleType(t)}
                        className="w-4 h-4 accent-white bg-background border border-border"
                      />
                      <span className="text-xs uppercase tracking-widest">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-widest text-muted-foreground mb-3"
                >
                  TRANSMISSION DATA
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What are we building? Scope, timeline, budget — whatever you have."
                  rows={6}
                  className="w-full bg-background border border-border p-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>

              {/* Honeypot — hidden from humans, catches spam bots */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-3 bg-foreground cursor-pointer text-background hover:opacity-90 transition-opacity font-semibold uppercase tracking-wider text-sm disabled:opacity-50"
                >
                  {status === "sending" ? "TRANSMITTING…" : "TRANSMIT ➜"}
                </button>

                {status === "success" && (
                  <p className="text-sm text-foreground mt-3">
                    ✓ Message sent — I&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm mt-3">
                    {error}{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="underline hover:opacity-70"
                    >
                      Or email me directly.
                    </a>
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-xs text-muted-foreground mt-3">
                    Goes straight to my inbox — no email client needed.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
