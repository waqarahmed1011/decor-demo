"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/content";
import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "@/components/icons";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 md:py-32">
      <Image
        src="/images/testimonial-banner.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto flex max-w-[1180px] items-center gap-4 px-4 md:gap-8">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-black"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </button>

        <div className="min-h-[260px] flex-1 md:min-h-[240px]">
          <div key={index} className="text-center animate-in fade-in duration-700">
            {/* Stars */}
            <div className="mb-5 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-[14px] w-[14px] text-brand-accent" />
              ))}
            </div>

            {/* Quote with large decorative mark */}
            <div className="relative">
              <span
                aria-hidden
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 select-none font-serif text-[110px] leading-none text-white/8"
              >
                &ldquo;
              </span>
              <p className="relative mx-auto max-w-[820px] font-serif text-[18px] leading-[30px] text-white md:text-[20px] md:leading-[32px]">
                {current.quote}
              </p>
            </div>

            {/* Attribution */}
            <div className="mt-7">
              <p className="font-serif text-[19px] text-white">{current.name}</p>
              {current.eventType && (
                <p className="mt-1.5 text-[12px] uppercase tracking-[0.16em] text-white/45">
                  {current.eventType}
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 text-center text-[15px] tracking-widest text-white/85">
            <span className="text-white">{index + 1}</span>
            <span className="mx-2">/</span>
            <span>{total}</span>
          </div>
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 text-white transition-colors hover:bg-white hover:text-black"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
