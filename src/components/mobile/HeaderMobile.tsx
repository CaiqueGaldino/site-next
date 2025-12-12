"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "../../lib/utils";
import { hapticFeedback, smoothScrollTo } from "../../lib/mobileUtils";

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('header')) {
        setIsMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    hapticFeedback('light');
    setIsMenuOpen(false);
    smoothScrollTo(sectionId);
  };

  const toggleMenu = () => {
    hapticFeedback('medium');
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] bg-black/50 backdrop-blur-md shadow-2xl z-50 border border-[#EBA730]/20 rounded-full">
      <div className="px-4">
        <div className="flex items-center justify-between h-12">
          {/* Logo Mobile */}
          <div className="flex-shrink-0">
            <div className="relative w-28 h-7">
              <Image
                src={getAssetPath("/images/logo.webp")}
                alt="Fitness Exclusive"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Menu Mobile - Touch Target Otimizado */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-[#EBA730] p-3 rounded-full hover:bg-white/10 transition-all will-change-transform active:scale-95"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 z-50">
            <div className="mx-2 bg-black/95 backdrop-blur-md border border-[#EBA730]/20 rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
              <div className="py-2">
                <button 
                  onClick={() => handleNavigation('inicio')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Início
                </button>
                <button 
                  onClick={() => handleNavigation('planos')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Planos
                </button>
                <button 
                  onClick={() => handleNavigation('estrutura')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Estrutura
                </button>
                <button 
                  onClick={() => handleNavigation('beneficios')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Benefícios
                </button>
                <button 
                  onClick={() => handleNavigation('unidades')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Unidades
                </button>
                <button 
                  onClick={() => handleNavigation('avaliacoes')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Avaliações
                </button>
                <button 
                  onClick={() => handleNavigation('contato')} 
                  className="w-full text-left px-6 py-4 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all active:bg-white/10"
                >
                  Contato
                </button>
                
                {/* Divider */}
                <div className="border-t border-[#EBA730]/20 mx-4 my-2"></div>
                
                {/* CTA Button Mobile */}
                <div className="px-4 pb-3">
                  <button 
                    onClick={() => {
                      hapticFeedback('medium');
                      setIsMenuOpen(false);
                      window.open('https://wa.me/5588992637523?text=' + encodeURIComponent('Olá! Gostaria de me matricular na Fitness Exclusive!'), '_blank');
                    }}
                    className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-4 rounded-xl text-base transition-all transform active:scale-95"
                  >
                    Matricule-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
