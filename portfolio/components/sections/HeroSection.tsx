import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/data";

export function HeroSection() {
  return (
    <header className="flex min-h-[100dvh] flex-col pt-14 md:pt-10">
      <div className="mx-auto flex w-full max-w-[72rem] flex-1 grid-cols-[minmax(0,1fr)_auto] items-center gap-8 px-6 md:grid md:gap-16 md:px-16">
        <div>
          <p className="mb-5 font-display text-xs font-medium tracking-[0.06em] text-dim">
            Udoka Dandave Chibuzor, software engineer
          </p>
          <h1 className="text-[clamp(3.2rem,10vw,9rem)]">
            <span className="reveal">
              <span>I build things</span>
            </span>
            <span className="reveal">
              <span>that</span>
            </span>
            <span className="reveal">
              <span className="text-blue">ship.</span>
            </span>
          </h1>
          <p className="mt-8 max-w-[32rem] text-[1.0625rem] leading-relaxed md:text-xl">
            Full-stack engineer in Enugu, Nigeria. Four years turning fintech,
            streaming and B2B ideas into products people actually use: React
            and React Native up front, Node and Laravel behind, Docker
            underneath.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link href="/work" className="btn btn-primary">
              View work
            </Link>
            <a href={profile.cv} download className="btn btn-ghost">
              Download CV
            </a>
          </div>
        </div>

        {/* the polaroid: one hand-made object */}
        <figure className="hidden rotate-[2.5deg] border border-ink bg-paper p-2.5 shadow-[5px_5px_0_var(--ink)] transition-transform duration-300 ease-signature hover:rotate-[0.5deg] md:block md:w-[clamp(170px,21vw,290px)]">
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src={profile.photo}
              alt="Udoka Dandave Chibuzor"
              width={580}
              height={773}
              priority
              sizes="(min-width: 768px) 290px, 0px"
              className="h-full w-full object-cover [filter:grayscale(100%)_contrast(1.05)]"
            />
          </div>
          <figcaption className="pt-2 font-display text-[11px] text-dim">
            Udoka Dandave Chibuzor
          </figcaption>
        </figure>
      </div>

      {/* fact strip */}
      <div className="mx-auto w-full max-w-[72rem] px-6 md:px-16">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-hair py-5 md:grid-cols-4 md:justify-items-start">
          <Fact k="Base" v="Enugu, NG · remote worldwide" />
          <Fact k="Stack" v="React · Next · RN · Node · Laravel" />
          <Fact k="Shipped in" v="Fintech · streaming · B2B" />
          <Fact k="Status" v="Open to senior roles" />
        </div>
      </div>
    </header>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="font-display text-[11px] font-semibold tracking-[0.05em] text-dim">
        {k}
      </div>
      <div className="text-[15px]">{v}</div>
    </div>
  );
}
