import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { projects, testimonials } from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Sidebar />
      <ThemeToggle />
      <SmoothScroll />
      <main className="md:ml-14">
        <HeroSection />
        <SelectedWorkSection projects={featured} />
        <section className="mx-auto max-w-[72rem] px-6 pb-8 pt-4 md:px-16">
          <div className="mb-10 max-w-[52rem] border-l-2 border-blue pl-6 md:pl-8">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-extrabold leading-[1.05]">
              Words from clients.
            </h2>
          </div>
          <TestimonialsSection items={testimonials} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
