import Image from "next/image";
import type { profile, skills as skillsType } from "@/lib/data";

type Profile = typeof profile;
type Skills = typeof skillsType;

export function AboutPageClient({
  profile,
  skills,
}: {
  profile: Profile;
  skills: Skills;
}) {
  return (
    <main className="md:ml-14">
      {/* Editorial hero: name + portrait */}
      <section className="mx-auto flex min-h-[80dvh] max-w-[72rem] flex-col justify-center px-6 pb-16 pt-28 md:px-16 md:pt-20">
        <p className="mb-5 font-display text-xs font-medium tracking-[0.06em] text-dim">
          The engineer
        </p>
        <h1 className="text-[clamp(2.6rem,7vw,5.5rem)]">
          Started at
          <br />
          sixteen. <span className="text-blue">Still at it.</span>
        </h1>
        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] md:gap-16">
          <div className="max-w-[60ch] space-y-4">
            {profile.longBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="self-start">
            <figure className="rotate-[2deg] border border-ink bg-paper p-2.5 shadow-[5px_5px_0_var(--ink)] transition-transform duration-300 ease-signature hover:rotate-[0.5deg] w-[220px]">
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={profile.photo}
                  alt="Udoka Dandave Chibuzor"
                  width={440}
                  height={587}
                  sizes="220px"
                  className="h-full w-full object-cover [filter:grayscale(100%)_contrast(1.05)]"
                />
              </div>
              <figcaption className="pt-2 font-display text-[11px] text-dim">
                Udoka Dandave Chibuzor
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Skills: plain editorial lists under a rule, no boxes */}
      <section className="mx-auto max-w-[72rem] px-6 pb-24 md:px-16 md:pb-32">
        <div className="mb-8 flex items-baseline justify-between border-b border-hair pb-4">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05]">
            The toolkit
          </h2>
        </div>
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="font-display text-[15px] font-semibold">
                {skillGroup.category
                  .toLowerCase()
                  .replace(/\b\w/g, (c: string) => c.toUpperCase())}
              </h3>
              <ul className="mt-3 space-y-1">
                {skillGroup.items.map((tech) => (
                  <li key={tech} className="text-[15.5px] text-dim">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
