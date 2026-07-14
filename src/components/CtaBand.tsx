import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ background: "linear-gradient(135deg, #4e1823 0%, #611F2C 50%, #72253a 100%)" }}
    >
      {/* Subtle texture ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full border border-white/5"
      />

      <Reveal className="relative z-10 mx-auto max-w-[820px] px-6 text-center">
        <p className="mb-5 text-[11px] uppercase tracking-[0.24em] text-white/40">
          Let&rsquo;s Create Something Beautiful
        </p>
        <h2 className="text-[32px] font-light leading-[1.1] text-white md:text-[50px]">
          Ready to bring your dream<br className="hidden md:block" /> event to life?
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[17px] leading-[27px] text-white/60">
          Every celebration deserves a flawless touch. Reach out via WhatsApp and
          we&rsquo;ll plan something extraordinary together.
        </p>
        <a
          href="https://wa.me/17737861127"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-[14px] font-medium uppercase tracking-[0.12em] text-brand transition-all hover:bg-brand-accent hover:text-white"
        >
          Chat on WhatsApp
          <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M16.004 5.333c-5.88 0-10.66 4.78-10.66 10.66 0 1.88.492 3.72 1.428 5.34L5.333 26.667l5.5-1.44a10.62 10.62 0 0 0 5.17 1.318h.004c5.88 0 10.66-4.78 10.662-10.66a10.6 10.6 0 0 0-3.12-7.54 10.6 10.6 0 0 0-7.545-3.112zm0 19.55h-.003a8.86 8.86 0 0 1-4.51-1.235l-.324-.192-3.263.856.87-3.18-.21-.327a8.83 8.83 0 0 1-1.354-4.712c0-4.885 3.976-8.86 8.864-8.86a8.8 8.8 0 0 1 6.264 2.598 8.8 8.8 0 0 1 2.594 6.268c-.002 4.887-3.978 8.862-8.862 8.862zm4.86-6.638c-.267-.133-1.576-.777-1.82-.866-.244-.09-.422-.133-.6.134-.177.266-.687.865-.842 1.043-.155.178-.31.2-.577.067-.267-.134-1.125-.415-2.143-1.323-.792-.706-1.327-1.578-1.482-1.845-.155-.266-.017-.41.117-.543.12-.12.267-.31.4-.466.134-.155.178-.266.267-.444.09-.178.045-.333-.022-.466-.067-.134-.6-1.446-.822-1.98-.216-.52-.437-.45-.6-.458l-.51-.01a.98.98 0 0 0-.71.333c-.244.266-.932.91-.932 2.222 0 1.31.955 2.577 1.088 2.755.134.178 1.88 2.87 4.554 4.023.636.275 1.132.44 1.52.563.638.203 1.22.174 1.68.106.512-.077 1.576-.644 1.798-1.266.222-.622.222-1.155.155-1.266-.066-.11-.244-.178-.51-.31z" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}
