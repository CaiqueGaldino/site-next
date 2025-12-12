"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";
import { depoimentos } from "../../lib/dadosAcademia";

export default function AvaliacoesMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDepoimento = () => {
    hapticFeedback('light');
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    hapticFeedback('light');
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-8 px-4">
      {/* Título da Seção */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-white mb-2">
          O QUE DIZEM NOSSOS ALUNOS
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
          <X className="w-5 h-5 text-[#EBA730]" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
        </div>
      </div>

      {/* Card do Depoimento */}
      <div className="relative h-[60vh] flex items-center justify-center">
        {/* Botões de Navegação */}
        <button
          onClick={prevDepoimento}
          className="absolute left-2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextDepoimento}
          className="absolute right-2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Conteúdo */}
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-zinc-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
            {/* Estrelas */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(depoimentos[currentIndex].avaliacao)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[#EBA730] fill-[#EBA730]" />
              ))}
            </div>

            {/* Comentário */}
            <p className="text-gray-300 text-sm text-center leading-relaxed mb-4 italic">
              "{depoimentos[currentIndex].comentario}"
            </p>

            {/* Nome */}
            <p className="text-[#EBA730] font-bold text-center text-lg">
              {depoimentos[currentIndex].nome}
            </p>
          </div>
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {depoimentos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                hapticFeedback('light');
                setCurrentIndex(index);
              }}
              className={`touch-manipulation transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 h-3 bg-[#EBA730] rounded-full' 
                  : 'w-3 h-3 rounded-full bg-gray-600'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
