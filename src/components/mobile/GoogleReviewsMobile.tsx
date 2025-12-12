"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";
import { unidades } from "../../lib/dadosAcademia";

export default function GoogleReviewsMobile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    hapticFeedback('medium');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    hapticFeedback('light');
    setIsModalOpen(false);
  };

  const handleUnitClick = (placeId: string) => {
    hapticFeedback('medium');
    window.open(`https://search.google.com/local/reviews?placeid=${placeId}`, '_blank');
    closeModal();
  };

  return (
    <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 py-8 px-4">
      {/* Título da Seção */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-white mb-2">
          AVALIAÇÕES GOOGLE
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
          <X className="w-5 h-5 text-[#EBA730]" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
        </div>
      </div>

      {/* Card Principal */}
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-gradient-to-br from-[#EBA730] to-[#FAC934] rounded-2xl p-8 text-center shadow-2xl">
            <div className="flex flex-col items-center gap-4">
              {/* Estrelas */}
              <div className="text-5xl">⭐⭐⭐⭐⭐</div>
              
              {/* Texto */}
              <div className="text-black">
                <p className="text-2xl font-bold mb-1">Veja nossas avaliações</p>
                <p className="text-sm opacity-80">Escolha uma unidade</p>
              </div>
              
              {/* Botão Call to action */}
              <button
                onClick={openModal}
                className="flex items-center gap-2 mt-2 bg-black text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="font-semibold">Ver Avaliações</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Seleção de Unidades */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden shadow-2xl border border-gray-700">
            {/* Header do Modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-black">
              <h3 className="text-white font-bold text-lg">Escolha uma Unidade</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Lista de Unidades */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)] p-4">
              {unidades.map((unidade, index) => (
                <button
                  key={index}
                  onClick={() => handleUnitClick(unidade.placeId)}
                  className="w-full text-left p-4 bg-zinc-800 hover:bg-gradient-to-r hover:from-[#EBA730] hover:to-[#FAC934] rounded-xl transition-all duration-300 border border-gray-700 hover:border-[#EBA730] group mb-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold group-hover:text-black transition-colors">
                        {unidade.nome}
                      </p>
                      <p className="text-gray-400 text-sm group-hover:text-black/70 transition-colors">
                        {unidade.cidade}
                      </p>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
