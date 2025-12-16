import React from "react";

export default function Footer() {
  return (
    <footer id="contato" className="bg-black text-white py-16 border-t border-[#EBA730]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-white mb-4">
              Fitness Exclusive
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos vidas através do exercício físico, oferecendo a melhor estrutura 
              e acompanhamento profissional para você alcançar seus objetivos.
            </p>
            
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#EBA730]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-[#EBA730] transition-colors">Início</a></li>
              <li><a href="#planos" className="text-gray-300 hover:text-[#EBA730] transition-colors">Planos</a></li>
              <li><a href="#estrutura" className="text-gray-300 hover:text-[#EBA730] transition-colors">Estrutura</a></li>
              <li><a href="#avaliacoes" className="text-gray-300 hover:text-[#EBA730] transition-colors">Avaliações</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-[#EBA730] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#EBA730]">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-zinc-300 text-sm">+55 (88) 99263-7523</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-zinc-300 text-sm">fitnessexclusive@fitnessexclusive.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-zinc-300 text-sm">@academiafitnessexclusive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horários de Funcionamento */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-[#EBA730]">Horários de Funcionamento</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="font-semibold text-blue-400">Segunda a Sexta</p>
                <p className="text-zinc-300 text-sm">05:00 às 23:00</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-400">Sábados</p>
                <p className="text-zinc-300 text-sm">06:00 às 20:00</p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-blue-400">Domingos</p>
                <p className="text-zinc-300 text-sm">08:00 às 18:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 mt-8 pt-8 text-center">
          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Academia Fitness Exclusive. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
