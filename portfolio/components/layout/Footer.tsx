import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink">
      <div className="mx-auto max-w-[72rem] px-6 py-16 md:px-16 md:py-24">
        <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-extrabold leading-none tracking-[-0.02em]">
          Got something to build?
          <br />
          <a href={`mailto:${profile.email}`} className="cta-underline text-blue">
            Let&apos;s talk.
          </a>
        </h2>
        <div className="mt-12 flex flex-wrap justify-between gap-3 text-[15px] text-dim">
          <a href={`mailto:${profile.email}`} className="hover:text-blue">
            {profile.email}
          </a>
          <div className="flex gap-6">
            <Link
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue"
            >
              GitHub
            </Link>
            <Link
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue"
            >
              LinkedIn
            </Link>
            <Link
              href={profile.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue"
            >
              X
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
