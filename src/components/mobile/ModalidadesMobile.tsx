"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";
import AvaliacoesMobile from "./AvaliacoesMobile";
import Image from "next/image";

const slides = [
  "/images/slide-mobile/avaliacao-mobile-app.webp",
  "/images/slide-mobile/slide-app-mobile.webp"
];

export default function ModalidadesMobile() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    hapticFeedback('light');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    hapticFeedback('light');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSwipe = (offset: number) => {
    if (offset > 50) {
      prevSlide();
    } else if (offset < -50) {
      nextSlide();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-zinc-900 to-black">
      {/* Carrossel em Tela Cheia */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Slides com Imagens */}
        <AnimatePresence mode="wait" custom={currentSlide}>
          <motion.div
            key={currentSlide}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset }) => handleSwipe(offset.x)}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                fill
                className="object-fill"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
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
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
          {/* Setinha Piscando */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-12 h-12 text-[#EBA730]" />
        </motion.div>
        </div>

        
      </div>
      
    </div>
  );
}
