"use client";

import { useState } from "react";
import type { profile as profileType } from "@/lib/data";

type Profile = typeof profileType;

const projectTypes = ["Full stack dev", "Mobile app", "System architecture", "Other"];

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
      prev.includes(t) ? prev.filter((p) => p !== t) : [...prev, t],
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
    <main className="md:ml-14">
      <div className="mx-auto grid min-h-[100dvh] w-full max-w-[72rem] grid-cols-1 gap-14 px-6 pb-20 pt-28 md:grid-cols-2 md:px-16 md:pt-24">
        {/* Left: invitation + direct lines */}
        <div className="flex flex-col justify-center">
          <p className="mb-5 font-display text-xs font-medium tracking-[0.06em] text-dim">
            Contact
          </p>
          <h1 className="text-[clamp(2.6rem,7vw,5rem)]">
            Let&apos;s build
            <br />
            <span className="text-blue">something.</span>
          </h1>
          <p className="mt-8 max-w-md">
            Available for freelance engagements, contracts and full-time remote
            roles. I reply within 24 hours, usually faster.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="font-display text-[11px] font-semibold tracking-[0.05em] text-dim">
                Direct
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="text-lg hover:text-blue"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="font-display text-[11px] font-semibold tracking-[0.05em] text-dim">
                Phone
              </p>
              <a href={`tel:${profile.phoneHref}`} className="text-lg hover:text-blue">
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="font-display text-[11px] font-semibold tracking-[0.05em] text-dim">
                Fastest
              </p>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-blue"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 font-display text-[14.5px]">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-blue"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-blue"
            >
              LinkedIn
            </a>
            <a
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-blue"
            >
              X
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dim hover:text-blue"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right: the form, hairline style */}
        <div className="self-center">
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-display text-[11px] font-semibold tracking-[0.05em] text-dim"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name or company"
                className="w-full border-b border-hair bg-transparent py-2.5 placeholder:text-dim/60 focus:border-blue focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-display text-[11px] font-semibold tracking-[0.05em] text-dim"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full border-b border-hair bg-transparent py-2.5 placeholder:text-dim/60 focus:border-blue focus:outline-none"
              />
            </div>

            <fieldset>
              <legend className="mb-3 font-display text-[11px] font-semibold tracking-[0.05em] text-dim">
                What are we building?
              </legend>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {projectTypes.map((t) => (
                  <label key={t} className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      checked={types.includes(t)}
                      onChange={() => toggleType(t)}
                      className="h-4 w-4 accent-[var(--blue)]"
                    />
                    <span className="text-[15px]">{t}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-display text-[11px] font-semibold tracking-[0.05em] text-dim"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Scope, timeline, budget. Whatever you have."
                rows={5}
                className="w-full resize-none border border-hair bg-transparent p-4 placeholder:text-dim/60 focus:border-blue focus:outline-none"
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

            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-primary disabled:opacity-50"
              >
                {status === "sending" ? "Sending" : "Send message"}
              </button>

              {status === "success" && (
                <p className="mt-4 text-[15px]" role="status">
                  <span className="text-blue">Sent.</span> I&apos;ll get back to
                  you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-[15px] text-dim" role="alert">
                  {error}{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-blue underline underline-offset-4"
                  >
                    Email me directly instead.
                  </a>
                </p>
              )}
              {status === "idle" && (
                <p className="mt-4 text-[13.5px] text-dim">
                  Goes straight to my inbox, no email client needed.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
