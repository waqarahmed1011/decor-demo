import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { events } from "@/lib/content";

export function EventsSection() {
  return (
    <section id="events" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-[1425px] gap-12 px-6 lg:grid-cols-[300px_1fr] lg:gap-16 lg:px-10">
        {/* Intro */}
        <Reveal>
          <h2 className="text-[34px] font-light leading-[1.1] text-black md:text-[46px]">
            Events we undertake
          </h2>
          <p className="mt-6 text-[17px] leading-[26px] text-black/80">
            From intimate gatherings to grand celebrations, we expertly curate events with seamless
            precision. Every detail is meticulously crafted, ensuring unforgettable moments tailored
            to your unique vision.
          </p>
          <a
            href="#footer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand px-6 py-[15px] text-[18px] text-white transition-opacity hover:opacity-90"
          >
            <span className="h-px w-6 bg-white/70" />
            Know More
          </a>
        </Reveal>

        {/* Icon grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {events.map((event, i) => (
            <Reveal
              key={event.label}
              delay={(i % 4) * 80}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={event.icon}
                alt={event.label}
                width={120}
                height={120}
                className="h-[86px] w-auto object-contain md:h-[96px]"
              />
              <span className="mt-4 text-[17px] leading-tight text-black">{event.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
