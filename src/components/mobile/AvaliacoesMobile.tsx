"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
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

  const handleSwipe = (offset: number) => {
    if (offset < -50) {
      nextDepoimento();
    } else if (offset > 50) {
      prevDepoimento();
    }
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
        {/* Conteúdo com AnimatePresence */}
        <AnimatePresence mode="wait" custom={currentIndex}>
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => handleSwipe(offset.x)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm mx-auto"
          >
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
          </motion.div>
        </AnimatePresence>

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
