"use client";
import React, { useState } from "react";
import { depoimentos } from "../../lib/dadosAcademia";

export default function Avaliacoes() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proximoDepoimento = () => {
    setCurrentIndex((atual) => (atual + 1) % depoimentos.length);
  };

  const anteriorDepoimento = () => {
    setCurrentIndex((atual) => (atual - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="avaliacoes" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4">
            O QUE DIZEM NOSSOS ALUNOS
          </h2>
          <p className="text-xl text-gray-300">
            Veja o que nossos alunos estão dizendo sobre nós
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Card do Depoimento */}
          <div className="bg-black rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700">
            <div className="text-center">
              {/* Estrelas */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(depoimentos[currentIndex].avaliacao)].map((_, i) => (
                  <svg key={i} className="w-7 h-7 text-[#EBA730] fill-[#EBA730]" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Comentário */}
              <p className="text-gray-300 text-xl leading-relaxed mb-6 italic max-w-3xl mx-auto">
                "{depoimentos[currentIndex].comentario}"
              </p>

              {/* Nome */}
              <p className="text-[#EBA730] font-bold text-2xl">
                {depoimentos[currentIndex].nome}
              </p>
            </div>
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={anteriorDepoimento}
            className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 bg-[#EBA730] hover:bg-[#FAC934] text-black rounded-full p-3 md:p-4 shadow-lg transition-all hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={proximoDepoimento}
            className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 bg-[#EBA730] hover:bg-[#FAC934] text-black rounded-full p-3 md:p-4 shadow-lg transition-all hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-[#EBA730] w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Ir para depoimento ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
