"use client";
import React, { useState } from "react";
import { hapticFeedback } from "../../lib/mobileUtils";

export default function FooterMobile() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
    hapticFeedback('light');
  };

  const handleNavigation = (sectionId: string) => {
    hapticFeedback('light');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contato" className="bg-black text-white py-12 border-t-2 border-[#EBA730]">
      <div className="px-4">
        {/* Logo e Descrição */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-3">
            Fitness Exclusive
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Transformamos vidas através do exercício físico
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => hapticFeedback('medium')}
            className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] p-3 rounded-full active:scale-95 transition-transform touch-manipulation"
          >
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </button>
          <button 
            onClick={() => hapticFeedback('medium')}
            className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] p-3 rounded-full active:scale-95 transition-transform touch-manipulation"
          >
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </button>
          <button 
            onClick={() => hapticFeedback('medium')}
            className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] p-3 rounded-full active:scale-95 transition-transform touch-manipulation"
          >
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </button>
        </div>

        {/* Seções Colapsáveis */}
        <div className="space-y-3 mb-8">
          {/* Links Rápidos */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('links')}
              className="w-full p-4 flex items-center justify-between touch-manipulation active:bg-gray-800"
            >
              <span className="text-[#EBA730] font-bold">Links Rápidos</span>
              <svg
                className={`w-5 h-5 text-[#EBA730] transition-transform ${
                  activeSection === 'links' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeSection === 'links' && (
              <div className="px-4 pb-4 space-y-2">
                <button onClick={() => handleNavigation('inicio')} className="block w-full text-left py-2 text-gray-300 active:text-[#EBA730] text-sm">Início</button>
                <button onClick={() => handleNavigation('planos')} className="block w-full text-left py-2 text-gray-300 active:text-[#EBA730] text-sm">Planos</button>
                <button onClick={() => handleNavigation('estrutura')} className="block w-full text-left py-2 text-gray-300 active:text-[#EBA730] text-sm">Estrutura</button>
                <button onClick={() => handleNavigation('beneficios')} className="block w-full text-left py-2 text-gray-300 active:text-[#EBA730] text-sm">Benefícios</button>
                <button onClick={() => handleNavigation('avaliacoes')} className="block w-full text-left py-2 text-gray-300 active:text-[#EBA730] text-sm">Avaliações</button>
              </div>
            )}
          </div>

          {/* Contato */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('contato')}
              className="w-full p-4 flex items-center justify-between touch-manipulation active:bg-gray-800"
            >
              <span className="text-[#EBA730] font-bold">Contato</span>
              <svg
                className={`w-5 h-5 text-[#EBA730] transition-transform ${
                  activeSection === 'contato' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeSection === 'contato' && (
              <div className="px-4 pb-4 space-y-3">
                <a 
                  href="tel:+5587993595368"
                  className="flex items-center gap-3 py-2 active:scale-95 transition-transform"
                  onClick={() => hapticFeedback('light')}
                >
                  <svg className="w-5 h-5 text-[#EBA730] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300 text-sm">(87) 99359-5368</span>
                </a>
                <a 
                  href="mailto:fitnessexclusive@fitnessexclusive.com.br"
                  className="flex items-center gap-3 py-2 active:scale-95 transition-transform"
                  onClick={() => hapticFeedback('light')}
                >
                  <svg className="w-5 h-5 text-[#EBA730] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300 text-sm break-all">contato@fitnessexclusive.com</span>
                </a>
                <div className="flex items-center gap-3 py-2">
                  <svg className="w-5 h-5 text-[#EBA730] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-300 text-sm">@academiafitnessexclusive</span>
                </div>
              </div>
            )}
          </div>

          {/* Horários */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-gray-700">
            <button
              onClick={() => toggleSection('horarios')}
              className="w-full p-4 flex items-center justify-between touch-manipulation active:bg-gray-800"
            >
              <span className="text-[#EBA730] font-bold">Horários</span>
              <svg
                className={`w-5 h-5 text-[#EBA730] transition-transform ${
                  activeSection === 'horarios' ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeSection === 'horarios' && (
              <div className="px-4 pb-4 space-y-2">
                <div className="flex justify-between py-2">
                  <span className="text-[#EBA730] text-sm font-semibold">Seg - Sex</span>
                  <span className="text-gray-300 text-sm">05:00 - 23:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#EBA730] text-sm font-semibold">Sábados</span>
                  <span className="text-gray-300 text-sm">06:00 - 20:00</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-[#EBA730] text-sm font-semibold">Domingos</span>
                  <span className="text-gray-300 text-sm">08:00 - 18:00</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Final */}
        <div className="mb-8">
          <button 
            onClick={() => {
              hapticFeedback('heavy');
              window.open('https://wa.me/5587993595368?text=' + encodeURIComponent('Olá! Gostaria de me matricular na Fitness Exclusive! 💪'), '_blank');
            }}
            className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold py-4 rounded-full shadow-lg active:scale-95 transition-transform touch-manipulation"
          >
            💬 Fale Conosco no WhatsApp
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-zinc-800">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Fitness Exclusive
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
