import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import type { Experience, Education } from "@/lib/data";
import type { profile as profileType } from "@/lib/data";

type Profile = typeof profileType;

function ExperienceItem({ item }: { item: Experience }) {
  return (
    <div className="grid gap-2 border-b border-hair py-7 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:gap-6">
      <div className="font-display text-[16px] font-semibold">
        {item.company}
        <span className="block text-[13px] font-normal text-dim">
          {item.location}
        </span>
      </div>
      <div>
        <h3 className="font-display text-[17px] font-bold">
          {item.role}
          {item.current && (
            <span className="ml-3 align-middle font-body text-[13.5px] italic font-normal text-blue">
              current
            </span>
          )}
        </h3>
        <ul className="mt-2 space-y-1.5">
          {item.points.map((point, i) => (
            <li key={i} className="text-[15.5px] leading-relaxed text-dim">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <span className="font-display text-[13px] text-dim">{item.period}</span>
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
    <main className="md:ml-14">
      <div className="mx-auto max-w-[72rem] px-6 pb-24 pt-28 md:px-16 md:pt-24">
        <p className="mb-5 font-display text-xs font-medium tracking-[0.06em] text-dim">
          Track record
        </p>
        <h1 className="text-[clamp(2.6rem,7vw,5.5rem)]">
          The <span className="text-blue">resume.</span>
        </h1>
        <div className="mt-8">
          <a href={profile.cv} download className="btn btn-primary">
            <DownloadSimple
              size={16}
              weight="bold"
              className="mr-2 inline-block align-[-2px]"
            />
            Download CV
          </a>
        </div>

        {/* Experience */}
        <section className="pt-20">
          <h2 className="mb-2 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold">
            Where I&apos;ve built
          </h2>
          <div className="border-t border-hair">
            {experience.map((item) => (
              <ExperienceItem key={item.company} item={item} />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="pt-16">
          <h2 className="mb-2 font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-extrabold">
            Where I learned
          </h2>
          <div className="border-t border-hair">
            {education.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 border-b border-hair py-7 md:grid-cols-[11rem_minmax(0,1fr)_auto] md:gap-6"
              >
                <div className="font-display text-[16px] font-semibold">
                  {item.institution}
                </div>
                <div>
                  <h3 className="font-display text-[17px] font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[15.5px] leading-relaxed text-dim">
                    {item.detail}
                  </p>
                </div>
                <span className="font-display text-[13px] text-dim">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
