"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { banners } from "../lib/dadosAcademia";

export default function HeroCarrossel() {
  const [atual, setAtual] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const proximo = useCallback(() => setAtual((atual + 1) % banners.length), [atual]);
  const anterior = useCallback(() => setAtual((atual - 1 + banners.length) % banners.length), [atual]);

  // Funções para touch/swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    // Pausa autoplay durante o touch
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
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
      proximo();
    } else if (isRightSwipe) {
      anterior();
    }
    
    // Reinicia autoplay
    startAutoPlay();
  };

  // Auto-play do carrossel com controle melhorado
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(proximo, 5000);
  }, [proximo]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  return (
    <section id="inicio" className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] overflow-hidden">
      <div 
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={banners[atual].src}
          alt={banners[atual].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Botões de navegação - Touch targets maiores */}
        <button 
          onClick={anterior} 
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 md:p-2 backdrop-blur-sm transition-all opacity-80 hover:opacity-100 touch-manipulation"
          aria-label="Slide anterior"
        >
          <svg width="20" height="20" className="md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 12l-4-4 4-4"/>
          </svg>
        </button>
        <button 
          onClick={proximo} 
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-3 md:p-2 backdrop-blur-sm transition-all opacity-80 hover:opacity-100 touch-manipulation"
          aria-label="Próximo slide"
        >
          <svg width="20" height="20" className="md:w-4 md:h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 4l4 4-4 4"/>
          </svg>
        </button>

        {/* Indicadores - Touch targets otimizados */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setAtual(idx)}
              className={`touch-manipulation transition-all duration-300 ${
                idx === atual 
                  ? "w-8 h-3 md:w-6 md:h-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full" 
                  : "w-3 h-3 md:w-2 md:h-2 bg-white/60 hover:bg-white/80 rounded-full"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
