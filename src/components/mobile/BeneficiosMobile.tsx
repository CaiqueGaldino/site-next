"use client";
import React, { useState } from "react";
import { hapticFeedback } from "../../lib/mobileUtils";

const beneficios = [
  {
    titulo: "App Fitness",
    descricao: "Gerencie treinos e pagamentos facilmente",
    icone: "📱",
    destaque: ["Treinos personalizados", "Pagamentos online", "Progresso em tempo real"]
  },
  {
    titulo: "Portabilidade", 
    descricao: "Valor da sua academia por 3 meses",
    icone: "🔄",
    destaque: ["Sem custos", "Valor anterior garantido", "Processo rápido"]
  },
  {
    titulo: "Massagem",
    descricao: "Relaxamento e recuperação muscular",
    icone: "💆",
    destaque: ["Fisioterapeuta", "Cadeira de massagem", "Recuperação total"]
  },
  {
    titulo: "Aulas Coletivas",
    descricao: "Diversifique seu treino com várias opções",
    icone: "🎵",
    destaque: ["Dança fitness", "Spinning", "Pilates", "Yoga"]
  },
  {
    titulo: "Horário Livre",
    descricao: "Acesso em todos os horários",
    icone: "⏰",
    destaque: ["24h em unidades select", "Flexibilidade total", "Sem restrições"]
  },
  {
    titulo: "Leve 5 Amigos",
    descricao: "Treine com seus amigos",
    icone: "👥",
    destaque: ["Motivação em grupo", "Socialização", "Sem custos extras"]
  },
  {
    titulo: "Área Completa",
    descricao: "Acesso a todas as áreas da academia",
    icone: "🏋️",
    destaque: ["Musculação", "Cardio", "Funcional", "Cross training"]
  },
  {
    titulo: "Válido 7 Dias",
    descricao: "Todos os dias da semana",
    icone: "📅",
    destaque: ["Segunda a domingo", "Feriados inclusos", "Sem interrupções"]
  }
];

export default function BeneficiosMobile() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    hapticFeedback('light');
  };

  return (
    <section id="beneficios" className="py-12 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/5 via-transparent to-[#FAC934]/5"></div>
      
      <div className="px-4 relative z-10">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black mb-3 bg-gradient-to-r from-white via-[#EBA730] to-white bg-clip-text text-transparent">
            BENEFÍCIOS EXCLUSIVOS
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
            <div className="text-[#EBA730] text-xl">✨</div>
            <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
          </div>
          <p className="text-gray-400 text-sm px-4">
            Vantagens únicas que só a Fitness Exclusive oferece
          </p>
        </div>

        {/* Grid de benefícios - 2 colunas */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {beneficios.map((beneficio, index) => (
            <button
              key={index}
              onClick={() => toggleExpand(index)}
              className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-4 border-2 border-gray-700 active:border-[#EBA730]/50 transition-all active:scale-95 touch-manipulation text-left h-full"
            >
              {/* Ícone */}
              <div className="text-3xl mb-3 text-center">
                {beneficio.icone}
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
          ))}
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
                  <div className="text-5xl mb-3">
                    {beneficios[expandedIndex].icone}
                  </div>
                  <h3 className="text-xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-1">
                    {beneficios[expandedIndex].titulo}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {beneficios[expandedIndex].descricao}
                  </p>
                </div>
              </div>

              {/* Conteúdo do Modal - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(70vh-240px)] p-5">
                {/* Destaques */}
                <div className="space-y-3 mb-4">
                  {beneficios[expandedIndex].destaque.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-black/50 p-3 rounded-xl">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full flex-shrink-0 mt-2"></div>
                      <span className="text-sm text-gray-200 leading-relaxed">{item}</span>
                    </div>
                  ))}
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

        {/* Call to action - Movido para cima */}
        <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-6 border-2 border-[#EBA730] relative overflow-hidden mb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-3">
              Pronto para começar?
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Aproveite todos esses benefícios exclusivos
            </p>
            <button 
              onClick={() => {
                hapticFeedback('heavy');
                window.open('https://wa.me/5587993595368?text=' + encodeURIComponent('Olá! Quero fazer parte da Fitness Exclusive! 💪'), '_blank');
              }}
              className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-6 py-4 rounded-full transition-all active:scale-95 touch-manipulation shadow-lg"
            >
              Quero fazer parte! 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
