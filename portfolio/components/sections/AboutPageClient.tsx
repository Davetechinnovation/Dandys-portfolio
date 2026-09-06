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
    <main className="md:ml-16">
      {/* Hero Section */}
      <section className="pt-20 md:pt-0 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-8 md:px-16 py-20 md:py-0 w-full">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            01 // THE ENGINEER
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Building seamless<br />digital experiences<br />across platforms.
          </h1>
          <div className="flex flex-col sm:flex-row gap-10 items-start">
            <div className="w-32 h-32 border border-border p-2 shrink-0 hidden sm:block">
              <div className="w-full h-full relative overflow-hidden">
                <Image
                  src={profile.photo}
                  alt="Udoka Dandave Chibuzor — software engineer"
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 text-muted-foreground max-w-2xl">
              {profile.longBio.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-xs uppercase tracking-widest pt-4">
                {profile.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="mb-16">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
              02 // SYSTEMS & SYNTAX
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">The toolkit.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="border border-border p-8 rounded-none hover:bg-card/30 transition-colors"
              >
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 border border-border text-foreground/70 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
