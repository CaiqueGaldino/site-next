"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAssetPath } from "../../lib/utils";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay menor para animação começar mais rápido
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
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

  // Efeito parallax - fundo se move mais devagar
  const parallaxOffset = scrollY * 0.2;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background com efeito parallax */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <Image
          src={getAssetPath("/images/hero section/hs-fundo.webp")}
          alt="Background Academia"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Overlay gradiente para melhorar legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Lado Esquerdo - Texto e Botões */}
          <div className="space-y-4 max-w-3xl">
            {/* Título Principal */}
            <h1 className={`text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none tracking-tight whitespace-nowrap transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              TREINE EM UMA
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                ACADEMIA COMPLETA
              </span>
            </h1>

            {/* Preço em Destaque */}
            <div className={`space-y-1 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <p className="text-xl lg:text-4xl text-white font-bold tracking-wide whitespace-nowrap">
                PLANOS A PARTIR DE{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-[#EBA730] rounded-lg transform -skew-x-[18deg]"></span>
                  <span className="relative text-black px-4 py-1 font-black">
                    R$ 129,90
                  </span>
                </span>
              </p>
            </div>

            {/* Descrição */}
            <p className={`text-sm lg:text-base text-gray-300 max-w-xl leading-relaxed tracking-wider transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              ESTRUTURA MODERNA E EQUIPAMENTOS DE PONTA.
            </p>

            {/* Botões de Call-to-Action */}
            <div className={`flex flex-col sm:flex-row gap-3 pt-2 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              {/* Botão Primário */}
              <a
                href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold text-sm rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#EBA730]/50 text-center"
              >
                <span className="relative z-10">QUERO COMEÇAR AGORA</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>

              {/* Botão Secundário */}
              <button
                onClick={handleScrollToPlanos}
                className="group relative px-6 py-3 bg-transparent text-[#EBA730] font-bold text-sm rounded-lg border-2 border-[#EBA730] overflow-hidden transition-all duration-300 hover:bg-[#EBA730] hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-[#EBA730]/50"
              >
                <span className="relative z-10">VER PLANOS DISPONÍVEIS</span>
              </button>
            </div>
          </div>

          {/* Lado Direito - Imagem do Homem */}
          <div className="relative h-[650px] lg:h-[750px] hidden lg:block">
            <div
              className={`relative w-full h-full transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{
                transform: `translate3d(${isLoaded ? '0' : '80px'}, ${-parallaxOffset * 0.15}px, 0)`,
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
            >
              <Image
                src={getAssetPath("/images/hero section/hs-leandro.webp")}
                alt="Personal Trainer"
                fill
                className="object-contain object-right"
                priority
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente de transição suave para a próxima seção - SOBRE todos os elementos */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b from-transparent via-[#0a0a0a]/70 to-[#0a0a0a] z-30 pointer-events-none" />
    </section>
  );
}
