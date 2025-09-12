"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getAssetPath } from "../lib/utils";
import { hapticFeedback, smoothScrollTo } from "../lib/mobileUtils";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on escape
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
      document.body.style.overflow = 'hidden'; // Prevent background scroll
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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-black/50 backdrop-blur-md shadow-2xl z-50 border border-[#EBA730]/20 rounded-full">
      <div className="px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-8 md:w-40 md:h-12">
              <Image
                src={getAssetPath("/images/logo.webp")}
                alt="Fitness Exclusive"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <button onClick={() => handleNavigation('inicio')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Início</button>
            <button onClick={() => handleNavigation('planos')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Planos</button>
            <button onClick={() => handleNavigation('estrutura')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Estrutura</button>
            <button onClick={() => handleNavigation('beneficios')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Benefícios</button>
            <button onClick={() => handleNavigation('unidades')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Unidades</button>
            <button onClick={() => handleNavigation('avaliacoes')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Avaliações</button>
            <button onClick={() => handleNavigation('contato')} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1">Contato</button>
          </nav>

          {/* Botão CTA */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                hapticFeedback('medium');
                window.open('https://wa.me/5587993595368?text=' + encodeURIComponent('Olá! Gostaria de me matricular na Fitness Exclusive! 💪'), '_blank');
              }}
              className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-4 py-1.5 lg:px-6 lg:py-2 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm"
            >
              Matricule-se
            </button>
          </div>

          {/* Menu Mobile - Touch Target Otimizado */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-[#EBA730] p-3 rounded-full hover:bg-white/10 transition-all will-change-transform"
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
        </div>

        {/* Menu Mobile Dropdown - Simplificado */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-1 z-50">
            <div className="mx-2 bg-black/95 backdrop-blur-md border border-[#EBA730]/20 rounded-2xl shadow-2xl overflow-hidden">
              <div className="py-2">
                <button 
                  onClick={() => handleNavigation('inicio')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Início
                </button>
                <button 
                  onClick={() => handleNavigation('planos')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Planos
                </button>
                <button 
                  onClick={() => handleNavigation('estrutura')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Estrutura
                </button>
                <button 
                  onClick={() => handleNavigation('beneficios')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Benefícios
                </button>
                <button 
                  onClick={() => handleNavigation('unidades')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Unidades
                </button>
                <button 
                  onClick={() => handleNavigation('avaliacoes')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Avaliações
                </button>
                <button 
                  onClick={() => handleNavigation('contato')} 
                  className="w-full text-left px-6 py-3 text-white hover:text-[#EBA730] hover:bg-white/5 text-base font-medium bg-transparent border-0 cursor-pointer transition-all"
                >
                  Contato
                </button>
                
                {/* Divider */}
                <div className="border-t border-[#EBA730]/20 mx-4 my-2"></div>
                
                {/* CTA Button Mobile */}
                <div className="px-4 pb-2">
                  <button 
                    onClick={() => {
                      hapticFeedback('medium');
                      setIsMenuOpen(false);
                      window.open('https://wa.me/5587993595368?text=' + encodeURIComponent('Olá! Gostaria de me matricular na Fitness Exclusive! 💪'), '_blank');
                    }}
                    className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-3 rounded-xl text-base transition-all transform active:scale-95"
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
