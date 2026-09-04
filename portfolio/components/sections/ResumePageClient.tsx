import { Download } from "lucide-react";
import type { Experience, Education } from "@/lib/data";
import type { profile as profileType } from "@/lib/data";

type Profile = typeof profileType;

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="flex gap-4 py-6 border-l-4 border-border pl-6 transition-all">
      <div className="flex-1">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
          <h3 className="text-lg font-bold">
            {item.role}
            {item.current && (
              <span className="ml-3 text-xs px-2 py-1 border border-foreground/60 uppercase tracking-wider align-middle">
                CURRENT
              </span>
            )}
          </h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {item.period}
          </span>
        </div>
        <p className="text-sm font-semibold text-foreground/80 mb-1">
          {item.company} · {item.location}
        </p>
        <ul className="space-y-2 mt-3">
          {item.points.map((point, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—']"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function ResumePageClient({
  experience,
  education,
  profile,
}: {
  experience: Experience[];
  education: Education[];
  profile: Profile;
}) {
  return (
    <main className="md:ml-16">
      {/* Header */}
      <section className="pt-20 md:pt-8">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            01 // TRACK RECORD
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RESUME</h1>
          <div className="flex gap-4 flex-wrap mb-16">
            <a
              href={profile.cv}
              download
              className="px-8 py-3 bg-foreground text-background hover:opacity-90 transition-opacity font-semibold uppercase tracking-wider text-sm flex items-center gap-2"
            >
              <Download size={16} />
              DOWNLOAD CV
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              02 // EXPERIENCE
            </p>
            <h2 className="text-3xl font-bold">Where I&apos;ve built.</h2>
          </div>
          <div className="max-w-3xl">
            {experience.map((item) => (
              <ExperienceItem key={item.company} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              03 // EDUCATION
            </p>
            <h2 className="text-3xl font-bold">Where I learned.</h2>
          </div>
          <div className="max-w-3xl">
            {education.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 py-6 border-l-4 border-border pl-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground/80 mb-2">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
