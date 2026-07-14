import {
  Gem, Crown, Baby, Tag, Cake, Flower2, Home, GraduationCap,
  Package, Presentation, Heart, Shirt, ShoppingBag, Palette,
  Sun, Gift, Music2, UtensilsCrossed, HeartHandshake, Moon,
  Handshake, Sparkles, type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { events } from "@/lib/content";

const ICON_MAP: Record<string, LucideIcon> = {
  Gem, Crown, Baby, Tag, Cake, Flower2, Home, GraduationCap,
  Package, Presentation, Heart, Shirt, ShoppingBag, Palette,
  Sun, Gift, Music2, UtensilsCrossed, HeartHandshake, Moon,
  Handshake, Sparkles,
};

export function EventsSection() {
  return (
    <section id="events" className="bg-background py-20 md:py-28">
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
            href="https://wa.me/17737861127"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-full bg-brand px-7 py-4 text-[15px] uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
          >
            Get in Touch
          </a>
        </Reveal>

        {/* Icon grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {events.map((event, i) => {
            const Icon = ICON_MAP[event.icon];
            return (
              <Reveal
                key={event.label}
                delay={(i % 5) * 60}
                className="flex flex-col items-center text-center"
              >
                {Icon && (
                  <Icon className="h-[52px] w-[52px] text-brand" strokeWidth={1.25} />
                )}
                <span className="mt-3 text-[15px] leading-tight text-black">{event.label}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
