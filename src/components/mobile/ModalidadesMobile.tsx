"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Dumbbell, Building2, Target, Users } from "lucide-react";
import { diferenciais } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";
import AvaliacoesMobile from "./AvaliacoesMobile";

// Mapeamento de ícones
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Building2,
  Target,
  Users
};

export default function ModalidadesMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    hapticFeedback('light');
    setCurrentSlide((prev) => (prev + 1) % diferenciais.length);
  };

  const prevSlide = () => {
    hapticFeedback('light');
    setCurrentSlide((prev) => (prev - 1 + diferenciais.length) % diferenciais.length);
  };

  const handleSwipe = (offset: number) => {
    if (offset > 50) {
      prevSlide();
    } else if (offset < -50) {
      nextSlide();
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-zinc-900 to-black py-6 px-4">
      {/* Título da Seção */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-black text-white mb-2">
          DIFERENCIAIS
        </h2>
        <div className="flex items-center justify-center gap-2">
          <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
          <Star className="w-5 h-5 text-[#EBA730]" />
          <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
        </div>
      </div>

      {/* Carrossel de Diferenciais */}
      <div className="relative h-[50vh] flex items-center justify-center">
        {/* Botões de Navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
          aria-label="Diferencial anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
          aria-label="Próximo diferencial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Cards */}
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
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
            <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 border-2 border-[#EBA730]/30 shadow-2xl">
              {/* Ícone */}
              <div className="mb-4 flex justify-center">
                {React.createElement(iconMap[diferenciais[currentSlide].icone as keyof typeof iconMap], { 
                  className: "w-16 h-16 text-[#EBA730]" 
                })}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-black text-center mb-3 text-white">
                {diferenciais[currentSlide].titulo.toUpperCase()}
              </h3>

              {/* Separador */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
                <Star className="w-4 h-4 text-[#EBA730]" />
                <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
              </div>

              {/* Descrição */}
              <p className="text-gray-300 text-center leading-relaxed text-sm">
                {diferenciais[currentSlide].descricao}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores - Movido para cima */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
          {diferenciais.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                hapticFeedback('light');
                setCurrentSlide(index);
              }}
              className={`touch-manipulation transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 h-3 bg-[#EBA730] rounded-full' 
                  : 'w-3 h-3 rounded-full bg-gray-600'
              }`}
              aria-label={`Ir para diferencial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <AvaliacoesMobile />
    </div>
  );
}
