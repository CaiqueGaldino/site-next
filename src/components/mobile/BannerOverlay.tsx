"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "../../lib/utils";
import { hapticFeedback } from "../../lib/mobileUtils";
import { X } from "lucide-react";

// Configurações do Banner
const BANNER_CONFIG = {
  imagePath: "/images/banners/mobile/banner2.png",
  isClickable: true, // true = clicável | false = apenas visual
  redirectUrl: "https://wa.me/5588992637523?text=" + encodeURIComponent('Olá! Vi o banner e quero saber mais! 💪'),
  alt: "Banner promocional"
};

export default function BannerOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar banner após um pequeno delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closeBanner = () => {
    hapticFeedback('light');
    setIsVisible(false);
  };

  const handleBannerClick = () => {
    if (BANNER_CONFIG.isClickable && BANNER_CONFIG.redirectUrl) {
      hapticFeedback('medium');
      window.open(BANNER_CONFIG.redirectUrl, '_blank');
      closeBanner();
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 bg-black z-[100] animate-fade-in"
      onClick={closeBanner}
    >
      <div 
        className="relative w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner Image - Tela Cheia */}
        <div 
          className={`relative w-full h-full ${
            BANNER_CONFIG.isClickable ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''
          }`}
          onClick={handleBannerClick}
        >
          {/* Botão Fechar - Sobre a imagem */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeBanner();
            }}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all active:scale-95 touch-manipulation z-20 border border-white/30 shadow-lg"
            aria-label="Fechar banner"
          >
            <X className="w-6 h-6" />
          </button>

          <Image
            src={getAssetPath(BANNER_CONFIG.imagePath)}
            alt={BANNER_CONFIG.alt}
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>
    </div>
  );
}
