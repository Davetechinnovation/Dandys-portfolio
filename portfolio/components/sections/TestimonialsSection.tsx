"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import type { Testimonial } from "@/lib/data";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex w-[320px] flex-shrink-0 flex-col sm:w-[400px]">
      <blockquote className="flex-1 text-[1.1rem] italic leading-relaxed">
        <span className="font-display not-italic text-blue">&ldquo;</span>
        {testimonial.quote}
        <span className="font-display not-italic text-blue">&rdquo;</span>
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3.5">
        <span className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border border-hair">
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            fill
            sizes="44px"
            className="object-cover"
          />
        </span>
        <span className="text-[15px]">
          {testimonial.name}
          <span className="block text-[13.5px] text-dim">
            {testimonial.role}
          </span>
        </span>
      </figcaption>
    </figure>
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
      container.scrollLeft + container.offsetWidth < container.scrollWidth - 5,
    );
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    updateScroll();
    container.addEventListener("scroll", updateScroll, { passive: true });
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
      <div
        ref={scrollRef}
        className="scrollbar-thin flex flex-nowrap gap-10 overflow-x-auto py-2"
      >
        {items.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
      <div className="mt-8 flex gap-2">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canScrollLeft}
          className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-hair transition-colors hover:border-blue hover:text-blue disabled:opacity-30 disabled:hover:border-hair disabled:hover:text-inherit"
          aria-label="Previous testimonials"
        >
          <CaretLeft size={16} weight="bold" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canScrollRight}
          className="flex h-10 w-10 items-center justify-center rounded-[2px] border border-hair transition-colors hover:border-blue hover:text-blue disabled:opacity-30 disabled:hover:border-hair disabled:hover:text-inherit"
          aria-label="Next testimonials"
        >
          <CaretRight size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
}
