import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { aboutParagraphs } from "@/lib/content";


export function WhoWeAre() {
  return (
    <section id="about" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-16">
        {/* Left image */}
        <Reveal>
          <div className="overflow-hidden rounded-[14px] shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/images/decor-alt.jpg"
              alt="Elegant banquet setup"
              width={720}
              height={860}
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        {/* Right text */}
        <Reveal delay={120}>
          <div className="max-w-[520px]">
            <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-brand">Our Story</p>
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
                src="/images/decorpic1.jpg"
                alt="Outdoor ceremony with floral arch and elegant draping"
                width={720}
                height={480}
                className="w-full"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
