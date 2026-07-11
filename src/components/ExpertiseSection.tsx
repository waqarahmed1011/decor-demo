import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/lib/content";

export function ExpertiseSection() {
  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <Reveal>
          <p className="mb-4 text-[18px] uppercase tracking-[0.05em] text-black">Expertise</p>
          <h2 className="mb-6 text-[38px] font-light leading-[1.1] text-black md:text-[56px]">
            Dual excellence in event crafting
          </h2>
          <p className="max-w-[520px] text-[17px] leading-[26px] text-black/90">
            With a wealth of experience exceeding four years, we bring seasoned proficiency to every
            event providing the <strong className="font-semibold">best event management in Bangalore</strong>,
            ensuring a seamless and polished execution. And, our broad network of trusted vendors,
            including skilled photographers and makeup artists, ensures access to top-tier
            professionals, enhancing the quality of your event.
          </p>

          <div className="mt-10 flex gap-14">
            {stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-[54px] font-light leading-none text-black md:text-[74px]">
                  {stat.value}
                </div>
                <div className="mt-3 whitespace-pre-line text-[17px] leading-[22px] text-black">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Layered images */}
        <Reveal delay={120}>
          <div className="relative min-h-[420px] md:min-h-[520px]">
            <div className="ml-auto w-[80%] overflow-hidden rounded-[14px]">
              <Image
                src="/images/dual-ex1.jpg"
                alt="Team joining hands"
                width={600}
                height={460}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[62%] overflow-hidden rounded-[18px] shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
              <Image
                src="/images/dual-ex2.jpg"
                alt="Bespoke stationery and invitation design"
                width={520}
                height={620}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
