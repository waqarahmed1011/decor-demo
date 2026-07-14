import { Reveal } from "@/components/Reveal";

export function TaglineBand() {
  return (
    <section className="bg-background px-6 py-16 md:py-20">
      <Reveal className="mx-auto max-w-[1100px]">
        {/* Decorative divider */}
        <div className="mb-10 flex items-center gap-5">
          <span className="h-px flex-1 bg-black/12" />
          <span className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-black/35">
            Festive Flair
          </span>
          <span className="h-px flex-1 bg-black/12" />
        </div>

        <h2 className="text-center text-[30px] font-light leading-[1.18] text-black md:text-[52px]">
          Crafting Moments, Perfecting Celebrations, Every Time.
        </h2>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/17737861127"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-brand px-8 py-4 text-[14px] uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-85"
          >
            Plan Your Event
          </a>
        </div>
      </Reveal>
    </section>
  );
}
