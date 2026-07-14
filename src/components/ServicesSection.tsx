"use client";

import { useRef } from "react";
import Image from "next/image";
import { services } from "@/lib/content";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section id="services" className="overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto max-w-[1425px] px-6 lg:px-10">
        <Reveal className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[12px] uppercase tracking-[0.2em] text-brand">What We Do</p>
            <h2 className="text-[34px] font-light leading-tight text-black md:text-[46px]">
              Our Services
            </h2>
          </div>
          <div className="hidden shrink-0 gap-3 md:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next services"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-6 px-6 pb-4 lg:scroll-pl-10 lg:px-10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            card
            delay={i * 75}
            as="article"
            className="group w-[300px] shrink-0 snap-start sm:w-[360px] lg:w-[400px]"
          >
            <div className="overflow-hidden rounded-[14px]">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={300}
                className="h-[240px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-[280px]"
              />
            </div>
            <h4 className="mt-5 text-[22px] font-medium text-black">{service.title}</h4>
            <p className="mt-2 text-[17px] leading-[26px] text-black/70">
              {service.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
