"use client";
import React, { useRef, useState } from "react";
import { diferenciais, sobreNos } from "../lib/dadosAcademia";
import ScrollReveal from "./ScrollReveal";

export default function Diferenciais() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % diferenciais.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + diferenciais.length) % diferenciais.length);
  };

  // Funções para touch/swipe nos diferenciais
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <>
      <div 
        ref={containerRef}
        id="diferenciais"
        className="relative"
        style={{ height: `${diferenciais.length * 50}vh` }}
      >
        {/* Container das seções empilhadas */}
        <div 
          className="sticky top-0 h-screen overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão anterior - lateral esquerda - Touch targets maiores */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-4 md:p-4 rounded-full transition-all duration-300 group backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
            aria-label="Diferencial anterior"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botão próximo - lateral direita - Touch targets maiores */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-4 md:p-4 rounded-full transition-all duration-300 group backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
            aria-label="Próximo diferencial"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1200 ease-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <section className="h-full bg-gradient-to-br from-black via-zinc-900 to-black relative flex items-center justify-center">
                {/* Background decorativo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/5 via-transparent to-[#FAC934]/5"></div>
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                  <ScrollReveal>
                    <div className="max-w-4xl mx-auto">
                      {/* Ícone */}
                      <div className="text-8xl mb-8 animate-pulse">
                        {diferencial.icone}
                      </div>
                      
                      {/* Título */}
                      <h2 className="text-6xl font-black mb-8 bg-gradient-to-r from-white via-[#EBA730] to-white bg-clip-text text-transparent">
                        {diferencial.titulo.toUpperCase()}
                      </h2>
                      
                      {/* Separador */}
                      <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-1 w-32 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
                        <div className="text-[#EBA730] text-2xl">⭐</div>
                        <div className="h-1 w-32 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
                      </div>
                      
                      {/* Descrição */}
                      <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        {diferencial.descricao}
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* Efeito de transição */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#EBA730]/10 via-transparent to-[#FAC934]/10 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </section>
            </div>
          ))}

          {/* Indicador de posição - único e sobreposto - Touch targets maiores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-3">
            {diferenciais.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`touch-manipulation transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 h-4 md:w-6 md:h-3 bg-[#EBA730] rounded-full' 
                    : 'w-4 h-4 md:w-3 md:h-3 rounded-full bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Ir para diferencial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sobre Nós */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/3 via-transparent to-[#FAC934]/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-12 border-2 border-[#EBA730] max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-6">
                  {sobreNos.titulo}
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  <p className="text-lg">{sobreNos.descricao}</p>
                  <p>{sobreNos.missao}</p>
                  <p>{sobreNos.equipe}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
