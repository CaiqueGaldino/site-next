"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-50 right-50 bg-black/50 backdrop-blur-md shadow-2xl z-50 border border-[#EBA730]/20 rounded-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-12">
              <Image
                src="/images/logo.webp"
                alt="Fitness Exclusive"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Início</button>
            <button onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Planos</button>
            <button onClick={() => document.getElementById('estrutura')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Estrutura</button>
            <button onClick={() => document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Benefícios</button>
            <button onClick={() => document.getElementById('unidades')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Unidades</button>
            <button onClick={() => document.getElementById('avaliacoes')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Avaliações</button>
            <button onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })} className="text-white hover:text-[#EBA730] transition-colors font-medium text-sm bg-transparent border-0 cursor-pointer">Contato</button>
          </nav>

          {/* Botão CTA */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-4 py-1.5 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm">
              Matricule-se
            </button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#EBA730] p-1.5"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-3 space-y-1 bg-black/50 border-t border-[#EBA730]/20 rounded-b-2xl mt-2">
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Início</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Planos</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('estrutura')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Estrutura</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('beneficios')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Benefícios</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('unidades')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Unidades</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('avaliacoes')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Avaliações</button>
              <button onClick={() => { setIsMenuOpen(false); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }) }} className="block w-full text-left px-3 py-2 text-white hover:text-[#EBA730] text-sm bg-transparent border-0 cursor-pointer">Contato</button>
              <button className="w-full mt-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-4 py-2 rounded-full text-sm">
                Matricule-se
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
