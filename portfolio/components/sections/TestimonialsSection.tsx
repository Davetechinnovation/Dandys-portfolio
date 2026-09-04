"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/lib/data";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="border border-border bg-card/30 p-6 w-[320px] sm:w-[380px] flex-shrink-0 flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden relative border border-border flex-shrink-0">
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-bold">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="text-xs uppercase tracking-widest text-muted-foreground mt-4">
        {testimonial.date}
      </p>
    </article>
  );
}

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(
      container.scrollLeft + container.offsetWidth < container.scrollWidth - 5
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateScroll();
    container.addEventListener("scroll", updateScroll);
    window.addEventListener("resize", updateScroll);
    return () => {
      container.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[0] as HTMLElement | undefined;
    const amount = card ? card.offsetWidth + 20 : 400;
    container.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scrollBy(-1)}
          className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-background border border-border p-2 hover:bg-card transition-colors"
          aria-label="Scroll testimonials left"
        >
          <ChevronLeft size={20} />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scrollBy(1)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-background border border-border p-2 hover:bg-card transition-colors"
          aria-label="Scroll testimonials right"
        >
          <ChevronRight size={20} />
        </button>
      )}
      <div
        ref={scrollRef}
        className="flex flex-nowrap gap-5 overflow-x-auto scrollbar-thin py-2"
      >
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
