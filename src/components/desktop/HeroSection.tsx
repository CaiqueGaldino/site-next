"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getAssetPath } from "../../lib/utils";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToPlanos = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const parallaxOffset = scrollY * 0.12;

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24"
    >
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <Image
          src={getAssetPath("/images/hero section/hs-fundo.webp")}
          alt="Academia Fitness Exclusive"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black" />
      </div>

      <div className="pointer-events-none absolute bottom-[-18vh] right-[-8vw] z-10 hidden h-[124vh] w-[74vw] max-w-[1180px] lg:block">
        <div
          className={`relative h-full w-full transition duration-700 ${
            isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}
          style={{
            transform: `translate3d(${isLoaded ? "0" : "40px"}, ${-parallaxOffset * 0.08}px, 0)`,
          }}
        >
          <Image
            src={getAssetPath("/images/hero section/pessoas.webp")}
            alt="Equipe Fitness Exclusive"
            fill
            className="object-contain object-bottom"
            priority
            quality={100}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-80 bg-gradient-to-b from-transparent via-black/78 to-black" />

      <div className="section-shell relative z-30 w-full">
        <div className="max-w-3xl pb-16">
          <h1
            className={`font-display text-5xl font-extrabold leading-[0.95] text-white transition duration-700 lg:text-6xl xl:text-7xl ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Treine em uma
            <br />
            <span className="gold-gradient-text whitespace-nowrap">
              academia completa
            </span>
          </h1>

          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-zinc-300 transition duration-700 delay-100 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Estrutura moderna, equipamentos de ponta e acompanhamento
            profissional para você começar hoje.
          </p>

          <div
            className={`mt-8 flex items-end gap-4 transition duration-700 delay-200 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <div>
              <p className="mb-1 text-sm font-extrabold uppercase text-[#FAC934]">
                Planos a partir de
              </p>
              <div className="flex items-end leading-none">
                <span className="font-display text-6xl font-extrabold text-white lg:text-7xl">
                  R$ 97
                </span>
                <span className="pb-1 font-display text-3xl font-extrabold text-white lg:text-4xl">
                  ,00
                </span>
              </div>
            </div>
          </div>

          <div
            className={`mt-8 flex flex-col gap-3 transition duration-700 delay-300 sm:flex-row ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <a
              href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Quero começar agora
              <ArrowRight className="h-5 w-5" />
            </a>

            <button onClick={handleScrollToPlanos} className="btn-secondary text-sm">
              Ver planos
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollToPlanos}
        className="absolute bottom-6 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/10 bg-black/40 p-3 text-[#FAC934] transition hover:border-[#EBA730]/60 hover:bg-[#EBA730]/10"
        aria-label="Ver planos"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  );
}
