"use client";
import React from "react";
import Image from "next/image";
import { getAssetPath } from "../../lib/utils";

export default function HeaderDesktop() {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl bg-black/50 backdrop-blur-md shadow-2xl z-50 border border-[#EBA730]/20 rounded-full">
      <div className="px-10">
        <div className="flex items-center justify-between h-14">
          {/* Logo Desktop */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-12">
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
          <nav className="flex space-x-6">
            <button 
              onClick={() => handleNavigation('inicio')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Início
            </button>
            <button 
              onClick={() => handleNavigation('planos')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Planos
            </button>
            <button 
              onClick={() => handleNavigation('estrutura')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Estrutura
            </button>
            <button 
              onClick={() => handleNavigation('beneficios')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Benefícios
            </button>
            <button 
              onClick={() => handleNavigation('unidades')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Unidades
            </button>
            <button 
              onClick={() => handleNavigation('avaliacoes')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Avaliações
            </button>
            <button 
              onClick={() => handleNavigation('contato')} 
              className="text-white hover:text-[#EBA730] transition-colors duration-200 font-medium text-sm bg-transparent border-0 cursor-pointer px-2 py-1 hover:scale-105 transform"
            >
              Contato
            </button>
          </nav>

          {/* Botão CTA Desktop */}
          <button 
            onClick={() => {
              window.open('https://wa.me/5588992984986?text=' + encodeURIComponent('Olá! Gostaria de me matricular na Fitness Exclusive!'), '_blank');
            }}
            className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-6 py-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm"
          >
            Matricule-se
          </button>
        </div>
      </div>
    </header>
  );
}
