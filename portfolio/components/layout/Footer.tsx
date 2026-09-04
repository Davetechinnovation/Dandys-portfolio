import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-20 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} UDOKA DANDAVE. ENGINEERED WITH PRECISION.
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GITHUB
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LINKEDIN
          </Link>
          <a
            href={profile.cv}
            download
            className="hover:text-foreground transition-colors"
          >
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
