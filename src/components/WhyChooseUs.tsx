import Image from "next/image";
import { whyCards } from "@/lib/content";
import {
  ElegantIcon,
  PersonalizedIcon,
  TrophyIcon,
  SnowflakeIcon,
} from "@/components/icons";

const ICONS = [ElegantIcon, PersonalizedIcon, TrophyIcon, SnowflakeIcon];

export function WhyChooseUs() {
  return (
    <section id="why" className="bg-[#191919]">
      <div className="py-14 md:py-20">
        <h2 className="text-center text-[34px] font-light text-white md:text-[52px]">
          Why Choose Us?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {whyCards.map((card, i) => {
          const Icon = ICONS[i];
          return (
            <div
              key={card.title}
              className="group relative h-[400px] overflow-hidden md:h-[460px]"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-9">
                <Icon className="mb-6 h-10 w-10 text-white" />
                <h3 className="text-[30px] font-light leading-[1.08] text-white md:text-[34px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[16px] text-white/85">{card.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
