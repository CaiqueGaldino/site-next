"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { banners } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";

export default function HeroCarrosselMobile() {
  const [atual, setAtual] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const proximo = useCallback(() => {
    setAtual((prev) => (prev + 1) % banners.length);
    hapticFeedback('light');
  }, []);

  const anterior = useCallback(() => {
    setAtual((prev) => (prev - 1 + banners.length) % banners.length);
    hapticFeedback('light');
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 30;
    const isRightSwipe = distance < -30;

    if (isLeftSwipe) {
      proximo();
    } else if (isRightSwipe) {
      anterior();
    }
    
    setIsDragging(false);
    startAutoPlay();
  };

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(proximo, 4000);
  }, [proximo]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  const goToSlide = (index: number) => {
    setAtual(index);
    hapticFeedback('medium');
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    startAutoPlay();
  };

  return (
    <section id="inicio" className="relative w-full h-[550px] overflow-hidden">
      <div 
        className={`relative w-full h-full touch-pan-y ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Imagem com efeito de transição suave */}
        <div className="relative w-full h-full">
          <Image
            src={banners[atual].mobile} // Use .mobile em vez de .src
            alt={banners[atual].alt}
            fill
            priority={atual === 0}
            className="object-cover transition-opacity duration-500"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
        
        {/* Indicadores - Touch Friendly - Movido para cima */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`touch-manipulation transition-all duration-300 ${
                idx === atual 
                  ? "w-10 h-3 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full" 
                  : "w-3 h-3 bg-white/50 rounded-full active:bg-white/80"
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
