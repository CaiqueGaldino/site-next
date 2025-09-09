"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-50 right-50 bg-black/50 backdrop-blur-md shadow-2xl z-50 border border-yellow-400/20 rounded-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-12">
              <Image
                src="/images/logo.png"
                alt="Fitness Exclusive"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">
              Início
            </a>
            <a href="#planos" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">
              Planos
            </a>
            <a href="#estrutura" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">
              Estrutura
            </a>
            <a href="#unidades" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">
              Unidades
            </a>
            <a href="#avaliacoes" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">
              Avaliações
            </a>
            <a href="#contato" className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">
              Contato
            </a>
          </nav>

          {/* Botão CTA */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-1.5 rounded-full shadow-lg transition-all transform hover:scale-105 text-sm">
              Matricule-se
            </button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 p-1.5"
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
            <div className="px-4 pt-2 pb-3 space-y-1 bg-black/50 border-t border-yellow-400/20 rounded-b-2xl mt-2">
              <a href="#inicio" className="block px-3 py-2 text-white hover:text-yellow-400 text-sm">Início</a>
              <a href="#planos" className="block px-3 py-2 text-white hover:text-yellow-400 text-sm">Planos</a>
              <a href="#estrutura" className="block px-3 py-2 text-white hover:text-yellow-400 text-sm">Estrutura</a>
              <a href="#unidades" className="block px-3 py-2 text-white hover:text-yellow-400 text-sm">Unidades</a>
              <a href="#avaliacoes" className="block px-3 py-2 text-white hover:text-yellow-400 text-sm">Avaliações</a>
              <a href="#contato" className="block px-3 py-2 text-white hover:text-yellow-400 text-sm">Contato</a>
              <button className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm">
                Matricule-se
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
