import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/lib/content";

export function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <Reveal>
          <p className="mb-4 text-[18px] uppercase tracking-[0.05em] text-black">Expertise</p>
          <h2 className="mb-6 text-[38px] font-light leading-[1.1] text-black md:text-[56px]">
            Excellence  in event spaces
          </h2>
          <p className="max-w-[520px] text-[17px] leading-[26px] text-black/90">
            With years of hands-on experience, we bring seasoned proficiency to every event,
            ensuring a seamless and polished execution from concept to cleanup. Our broad network of
            trusted vendors — including skilled photographers, caterers, and makeup artists — ensures
            access to top-tier professionals, elevating the quality of your celebration.
          </p>

          <div className="mt-10 flex gap-8">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="mb-3 h-[2px] w-7 rounded-full bg-brand-accent" />
                <div className="text-[48px] font-light leading-none text-black md:text-[54px] lg:text-[70px]">
                  {stat.value}
                </div>
                <div className="mt-3 whitespace-pre-line text-[17px] leading-[22px] text-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Images */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[360px] overflow-hidden rounded-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.13)]">
              <Image
                src="/images/decorpic3.jpg"
                alt="Clear tent reception with hanging floral installation"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 h-[360px] overflow-hidden rounded-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.13)]">
              <Image
                src="/images/decorpic4.jpg"
                alt="Outdoor banquet table with balloon garland and draping"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
