import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { aboutParagraphs } from "@/lib/content";

export function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Faint brand emblem watermark */}
      <Image
        src="/images/tpa-logo-black.png"
        alt=""
        aria-hidden
        width={300}
        height={300}
        className="pointer-events-none absolute left-1/2 top-10 z-0 w-[150px] -translate-x-1/2 opacity-[0.06] md:top-16 md:w-[190px]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        {/* Left image */}
        <Reveal>
          <div className="overflow-hidden rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/decor-alt.jpg"
              alt="Elegant banquet setup by The Perfect Affair"
              width={720}
              height={860}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right text */}
        <Reveal delay={120}>
          <div className="max-w-[520px]">
            <h3 className="mb-8 text-[36px] font-medium leading-[1.1] text-black md:text-[52px]">
              Who We Are?
            </h3>
            {aboutParagraphs.map((p) => (
              <p key={p} className="mb-6 text-[17px] leading-[26px] text-black/90">
                {p}
              </p>
            ))}

            <div className="mt-8 overflow-hidden rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
              <Image
                src="/images/memories.jpg"
                alt="Wedding rings held in hands"
                width={720}
                height={460}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
