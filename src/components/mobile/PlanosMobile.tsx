"use client";
import React, { useState, useRef } from "react";
import { planos } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";

interface PlanoDetalhes {
  nome: string;
  preco: string;
  periodo: string;
  descricao: string;
  beneficios: string[];
  popular: boolean;
}

export default function PlanosMobile() {
  const [selectedPlano, setSelectedPlano] = useState<PlanoDetalhes | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const planosDetalhados: PlanoDetalhes[] = planos.map((plano) => ({
    ...plano,
  }));

  // Encontrar o índice do plano popular
  const popularIndex = planosDetalhados.findIndex((plano) => plano.popular);

  React.useEffect(() => {
    // Scroll para o plano popular quando o componente montar
    if (scrollRef.current && popularIndex !== -1) {
      const cardWidth = 280 + 16; // largura do card + gap
      const scrollPosition = popularIndex * cardWidth - (window.innerWidth / 2 - 140);
      scrollRef.current.scrollLeft = scrollPosition;
    }
  }, [popularIndex]);

  const openModal = (plano: PlanoDetalhes) => {
    setSelectedPlano(plano);
    hapticFeedback('medium');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedPlano(null);
    hapticFeedback('light');
    document.body.style.overflow = 'unset';
  };

  const handleAssinar = (plano: PlanoDetalhes) => {
    hapticFeedback('heavy');
    window.open('https://wa.me/5587993595368?text=' + encodeURIComponent(`Olá! Gostaria de assinar o plano ${plano.nome} 💪`), '_blank');
  };

  return (
    <section id="planos" className="py-8 bg-zinc-900 min-h-screen flex flex-col">
      <div className="px-4 flex-1 flex flex-col">
        {/* Título */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-white mb-3">
            Escolha o Plano Ideal
          </h2>
          <p className="text-base text-gray-300">
            Planos flexíveis para todos os perfis
          </p>
        </div>

        {/* Scroll Horizontal de Planos */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-4 snap-x snap-mandatory scrollbar-hide touch-pan-x flex-1"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            maxHeight: 'calc(100vh - 220px)'
          }}
        >
          {planosDetalhados.map((plano, idx) => (
            <div 
              key={`${plano.nome}-${idx}`}
              className="flex-shrink-0 w-[280px] snap-center"
            >
              <div className={`relative ${plano.popular ? 'scale-105' : ''}`}>
                {/* Badge Popular */}
                {plano.popular && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      🔥 POPULAR
                    </span>
                  </div>
                )}

                <div
                  className={`bg-black rounded-2xl shadow-xl p-4 flex flex-col border-2 transition-all ${
                    plano.popular 
                      ? "border-[#EBA730] shadow-[#EBA730]/20" 
                      : "border-gray-700"
                  }`}
                >
                  {/* Header do Card */}
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {plano.nome}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2 line-clamp-2">
                      {plano.descricao}
                    </p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-2xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent">
                        {plano.preco}
                      </span>
                      <span className="text-xs text-gray-400 ml-1">
                        {plano.periodo}
                      </span>
                    </div>
                  </div>

                  {/* Benefícios */}
                  <ul className="space-y-1.5 mb-4 flex-grow">
                    {plano.beneficios.slice(0, 4).map((beneficio, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-xs leading-tight">{beneficio}</span>
                      </li>
                    ))}
                    {plano.beneficios.length > 4 && (
                      <li className="text-[#EBA730] text-xs font-semibold pl-6">
                        +{plano.beneficios.length - 4} benefícios
                      </li>
                    )}
                  </ul>

                  {/* Botões */}
                  <div className="space-y-2">
                    <button
                      onClick={() => openModal(plano)}
                      className="w-full bg-gray-700 active:bg-gray-600 text-white font-medium py-2.5 px-4 rounded-full transition-all text-sm touch-manipulation active:scale-95"
                    >
                      Ver Detalhes
                    </button>
                    <button 
                      onClick={() => handleAssinar(plano)}
                      className={`w-full py-2.5 rounded-full font-bold text-sm transition-all transform active:scale-95 touch-manipulation shadow-lg ${
                        plano.popular
                          ? "bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black"
                          : "bg-white text-black"
                      }`}
                    >
                      🚀 Assinar Agora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Modal de Detalhes - Fullscreen Mobile */}
      {selectedPlano && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col">
          {/* Header do Modal */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">
              Plano {selectedPlano.nome}
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-400 active:text-white text-2xl p-2 active:scale-95 touch-manipulation"
            >
              ✕
            </button>
          </div>

          {/* Conteúdo do Modal */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Preço Destacado */}
            <div className="text-center p-6 bg-zinc-900 rounded-2xl border border-[#EBA730]/30">
              <div className="text-3xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2">
                {selectedPlano.preco}
                <span className="text-base text-gray-400 ml-1">{selectedPlano.periodo}</span>
              </div>
              <p className="text-gray-300 text-sm">{selectedPlano.descricao}</p>
            </div>

            {/* Benefícios Completos */}
            <div className="bg-zinc-900 rounded-2xl p-5">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <span>✨</span> Benefícios Inclusos
              </h3>
              <ul className="space-y-3">
                {selectedPlano.beneficios.map((beneficio, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#EBA730] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300 text-sm">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informações Extras */}
            <div className="bg-zinc-900 rounded-2xl p-5 space-y-3">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <span>ℹ️</span> Informações
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Instalações:</span>
                  <span className="text-white font-medium">Completas</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Horários:</span>
                  <span className="text-white font-medium">Flexíveis</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Suporte:</span>
                  <span className="text-white font-medium">Dedicado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer do Modal - CTA Fixo */}
          <div className="p-4 bg-black border-t border-gray-700">
            <button 
              onClick={() => handleAssinar(selectedPlano)}
              className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold py-4 rounded-full transition-all transform active:scale-95 touch-manipulation shadow-lg text-base"
            >
              🚀 Assinar Plano {selectedPlano.nome}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
