"use client";
import Image from "next/image";

export default function HeroSectionMobile() {
  return (
    <main className="relative w-full min-h-screen bg-neutral-900 overflow-hidden">
      
      {/* 1. Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero section mobile/fundo.webp"
          alt="Academia Fitness Exclusive"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        
        {/* Gradiente sutil na base para garantir leitura do texto rodapé */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      {/* 2. Topo Amarelo Curvo */}
      <div className="relative z-10 w-full bg-[#FFD700] pt-8 pb-6 rounded-b-[60px] shadow-lg">
        <h1 className="text-center text-6xl leading-[0.9] text-black uppercase tracking-tight font-black">
          Treine na
          <br />
          <span className="block">Melhor!</span>
        </h1>
      </div>

      {/* 3. Imagem das Pessoas */}
      <div className="absolute top-[-60px] left-0 right-0 z-10 flex justify-center">
        <div className="relative w-full h-[900px]">
          <Image
            src="/images/hero section mobile/pessoas.webp"
            alt="Personal Trainers"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 4. Etiqueta de Preço */}
      <div className="absolute top-[55%] right-0 z-20 flex flex-col items-end">
        
        {/* Pílula Preta: "Planos a partir de" */}
        <div className="bg-black border-2 border-[#FFD700] text-white text-[10px] font-bold uppercase py-1.5 px-6 rounded-tl-lg mb-[-8px] mr-[-12px] z-0 tracking-wider text-center">
          Planos a partir de
        </div>

        {/* Bloco Amarelo: Preço */}
        <div className="bg-[#FFD700] text-black py-2 pl-6 pr-4 rounded-l-3xl shadow-2xl flex items-start leading-none z-10">
          <span className="text-lg font-bold mt-1 mr-1">R$</span>
          <span className="text-6xl font-black tracking-tighter">129</span>
          <span className="text-3xl font-bold mt-1">,90</span>
        </div>
      </div>

      {/* 5. Texto do Rodapé */}
      <div className="absolute bottom-40 left-0 w-full z-20 px-6 text-center">
        <p className="text-white text-[12px] md:text-xs font-bold uppercase leading-relaxed tracking-wide">
          Reconhecida pelo alto padrão, premiada pela qualidade e escolhida por quem busca resultados reais.
        </p>
      </div>

      {/* 6. Seta para Baixo Piscando */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 animate-pulse">
        <svg 
          className="w-8 h-8 text-[#FFD700]" 
          fill="none" 
          strokeWidth="3" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </main>
  );
}
