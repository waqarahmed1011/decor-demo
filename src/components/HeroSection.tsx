import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/home-banner.mp4" type="video/mp4" />
      </video>
      {/* Cinematic gradient overlay — dark at bottom for legibility, airy at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <Image
          src="/images/festive-flair-logo.png"
          alt="Festive Flair Event Planner"
          width={600}
          height={561}
          priority
          className="mb-8 h-auto w-[170px] md:w-[210px]"
          style={{
            filter: "brightness(0) invert(1)",
            animation: "hero-fade-up 1s cubic-bezier(0.25,1,0.5,1) both 0.1s",
          }}
        />

        <h1
          className="font-display text-[34px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[46px] md:text-[62px]"
          style={{ animation: "hero-fade-up 1s cubic-bezier(0.25,1,0.5,1) both 0.45s" }}
        >
          Creating Moments You&apos;ll Never Forget.
        </h1>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/17737861127"
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/55 px-8 py-4 text-[14px] uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:bg-white hover:text-black"
          style={{ animation: "hero-fade-in 0.8s ease both 0.75s" }}
        >
          Plan Your Event
        </a>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Navigate to the next section"
          className="mt-8 flex h-11 w-7 items-start justify-center rounded-full border border-white/70 pt-2"
          style={{ animation: "hero-fade-in 0.8s ease both 0.9s" }}
        >
          <span
            className="block h-2 w-2 rounded-full bg-white"
            style={{ animation: "site-scroll-dot 1.6s ease-in-out infinite" }}
          />
        </a>
      </div>
    </section>
  );
}
