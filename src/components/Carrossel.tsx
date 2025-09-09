"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { banners } from "../lib/dadosAcademia";

export default function HeroCarrossel() {
  const [atual, setAtual] = useState(0);

  const proximo = () => setAtual((atual + 1) % banners.length);
  const anterior = () => setAtual((atual - 1 + banners.length) % banners.length);

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(proximo, 5000);
    return () => clearInterval(interval);
  }, [atual]);

  return (
    <section id="inicio" className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      <div className="relative w-full h-full">
        <Image
          src={banners[atual].src}
          alt={banners[atual].alt}
          fill
          className="object-cover transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        


        {/* Botões de navegação */}
        <button 
          onClick={anterior} 
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all opacity-70 hover:opacity-100"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 12l-4-4 4-4"/>
          </svg>
        </button>
        <button 
          onClick={proximo} 
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur-sm transition-all opacity-70 hover:opacity-100"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 4l4 4-4 4"/>
          </svg>
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setAtual(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === atual ? "bg-yellow-400 scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
