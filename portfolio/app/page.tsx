import { Sidebar } from "@/components/layout/Sidebar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { projects, testimonials } from "@/lib/data";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Sidebar />
      <main className="md:ml-16">
        <HeroSection />
        <SelectedWorkSection projects={featured} />
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-16">
            <div className="mb-16">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
                03 // FIELD REPORTS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Words from clients.
              </h2>
            </div>
            <TestimonialsSection items={testimonials} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
