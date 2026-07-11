"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WORDS = ["moments.", "memories."];

export function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative h-svh min-h-[640px] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/home-banner.jpg"
      >
        <source src="/videos/home-banner.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <Image
          src="/images/logo-white.png"
          alt="The Perfect Affair emblem"
          width={600}
          height={561}
          priority
          className="mb-8 h-auto w-[170px] md:w-[210px]"
        />

        <h1 className="font-display text-[34px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[46px] md:text-[62px]">
          Creating timeless{" "}
          <span className="relative inline-grid">
            {WORDS.map((word, i) => (
              <span
                key={word}
                aria-hidden={i !== index}
                className="col-start-1 row-start-1 transition-all duration-700 ease-out"
                style={{
                  opacity: i === index ? 1 : 0,
                  transform: i === index ? "translateY(0)" : "translateY(-0.35em)",
                }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Navigate to the next section"
          className="mt-10 flex h-11 w-7 items-start justify-center rounded-full border border-white/70 pt-2"
        >
          <span
            className="block h-2 w-2 rounded-full bg-white"
            style={{ animation: "tpa-scroll-dot 1.6s ease-in-out infinite" }}
          />
        </a>
      </div>
    </section>
  );
}
