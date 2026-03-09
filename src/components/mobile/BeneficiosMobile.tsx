"use client";
import React, { useState } from "react";
import { Sparkles } from "lucide-react";
import { beneficiosExclusivos } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";
import FormularioAgendamento from "../shared/FormularioAgendamento";

// Map dos ícones
const iconMap: { [key: string]: any } = {
  "Smartphone": require("lucide-react").Smartphone,
  "RefreshCw": require("lucide-react").RefreshCw,
  "Sparkles": Sparkles,
  "Music": require("lucide-react").Music,
  "Clock": require("lucide-react").Clock,
  "Users": require("lucide-react").Users,
  "Dumbbell": require("lucide-react").Dumbbell,
  "Calendar": require("lucide-react").Calendar,
};

export default function BeneficiosMobile() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    hapticFeedback('light');
  };

  return (
    <section id="beneficios" className="py-12 bg-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/5 via-transparent to-[#FAC934]/5"></div>
      
      <div className="px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black mb-3 text-white">
            BENEFÍCIOS EXCLUSIVOS
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
            <Sparkles className="w-5 h-5 text-[#EBA730]" />
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
          </div>
          <p className="text-gray-400 text-sm px-4">
            Vantagens únicas que só a Fitness Exclusive oferece
          </p>
        </div>

        {/* Grid de benefícios - 2 colunas */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {beneficiosExclusivos.map((beneficio, index) => {
            const IconComponent = iconMap[beneficio.icone] || Sparkles;
            return (
              <button
                key={index}
                onClick={() => toggleExpand(index)}
                className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-4 border-2 border-gray-700 active:border-[#EBA730]/50 transition-all active:scale-95 touch-manipulation text-left h-full"
              >
                {/* Ícone */}
                <div className="text-[#EBA730] mb-3 flex justify-center">
                  <IconComponent className="w-8 h-8" />
                </div>
                
                {/* Título */}
                <h3 className="text-sm font-bold text-white mb-2 text-center leading-tight">
                  {beneficio.titulo}
                </h3>
                
                {/* Descrição */}
                <p className="text-gray-400 text-xs text-center leading-snug line-clamp-2">
                  {beneficio.descricao}
                </p>

                {/* Badge "Ver mais" */}
                <div className="mt-3 text-center">
                  <span className="text-[#EBA730] text-xs font-semibold">
                    {expandedIndex === index ? '↑ Ver menos' : '↓ Ver mais'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detalhes Expandidos - Dialog Centralizado Overlay */}
        {expandedIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => {
              setExpandedIndex(null);
              hapticFeedback('light');
            }}
          >
            <div 
              className="bg-gradient-to-br from-zinc-900 to-black rounded-3xl w-full max-w-md max-h-[70vh] overflow-hidden border-2 border-[#EBA730]/50 shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header do Modal */}
              <div className="bg-gradient-to-r from-[#EBA730]/20 to-[#FAC934]/20 p-5 border-b border-gray-700 relative">
                <button
                  onClick={() => {
                    setExpandedIndex(null);
                    hapticFeedback('light');
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white active:text-[#EBA730] text-2xl p-2 active:scale-95 touch-manipulation transition-colors"
                  aria-label="Fechar"
                >
                  ✕
                </button>
                <div className="text-center">
                  <div className="text-[#EBA730] mb-3 flex justify-center">
                    {React.createElement(iconMap[beneficiosExclusivos[expandedIndex].icone] || Sparkles, { className: "w-12 h-12" })}
                  </div>
                  <h3 className="text-xl font-black text-white mb-1">
                    {beneficiosExclusivos[expandedIndex].titulo}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {beneficiosExclusivos[expandedIndex].descricao}
                  </p>
                </div>
              </div>

              {/* Conteúdo do Modal - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(70vh-240px)] p-5">
                <div className="text-gray-200 text-sm leading-relaxed">
                  Todos os benefícios desta funcionalidade incluídos no seu plano.
                </div>
              </div>

              {/* Footer do Modal */}
              <div className="p-5 bg-zinc-900/90 border-t border-gray-700">
                <button
                  onClick={() => {
                    setExpandedIndex(null);
                    hapticFeedback('light');
                  }}
                  className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold py-3 rounded-full touch-manipulation active:scale-95"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Call to action */}
        <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-6 border-2 border-[#EBA730] relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-black text-white mb-3">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Aproveite todos esses benefícios exclusivos
            </p>
            <a 
              href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => hapticFeedback('heavy')}
              className="block w-full text-center bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-6 py-4 rounded-full transition-all active:scale-95 touch-manipulation shadow-lg"
            >
              Quero fazer parte!
            </a>
          </div>
        </div>
      </div>

      <FormularioAgendamento 
        isOpen={modalAgendamentoAberto}
        onClose={() => setModalAgendamentoAberto(false)}
        tipo="quero-fazer-parte"
      />
    </section>
  );
}
