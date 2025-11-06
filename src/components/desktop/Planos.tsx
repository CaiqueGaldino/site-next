"use client";
import React, { useState } from "react";
import { planos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";

interface PlanoDetalhes {
  nome: string;
  preco: string;
  periodo: string;
  descricao: string;
  beneficios: string[];
  popular: boolean;
  detalhes: {
    instalacoes: string[];
    horarios: string;
    suporte: string;
    extras: string[];
  };
}

export default function Planos() {
  const [selectedPlano, setSelectedPlano] = useState<PlanoDetalhes | null>(null);

  const planosDetalhados: PlanoDetalhes[] = planos.map((plano, index) => ({
    ...plano,
    detalhes: {
      instalacoes: index === 0 
        ? ["Musculação", "Aeróbicos", "Vestiários"] 
        : index === 1 
        ? ["Musculação", "Aeróbicos", "Aulas Coletivas", "Cross Training", "Funcional"]
        : ["Todas as instalações", "Área VIP", "Sala de personal", "Suplementação"],
      horarios: index === 2 ? "24 horas (unidades selecionadas)" : "Horário comercial",
      suporte: index === 2 ? "Suporte prioritário" : "Suporte padrão",
      extras: index === 0 
        ? ["App mobile", "Avaliação física"] 
        : index === 1 
        ? ["App mobile", "Avaliação física", "Plano nutricional", "2x personal/mês"]
        : ["App mobile", "Avaliação física", "Plano nutricional", "Personal ilimitado", "Fisioterapia", "Suplementação incluída"]
    }
  }));

  return (
    <section id="planos" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Escolha o Plano Ideal
            </h2>
            <p className="text-xl text-gray-300">
              Planos flexíveis para todos os perfis e objetivos
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {planosDetalhados.map((plano, idx) => (
            <ScrollReveal 
              key={`${plano.nome}-${idx}`} 
              direction="up" 
              delay={200 + (idx * 100)}
            >
              <div className={`relative ${idx === 1 ? 'md:scale-110 md:z-10' : 'md:scale-95'} transition-transform duration-300`}>
                {/* Brilho amarelo especial para o card do meio */}
                {idx === 1 && (
                  <div className="absolute -inset-3 rounded-3xl opacity-75 animate-pulse">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-[#EBA730]/40 to-transparent blur-lg"></div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-[#FAC934]/35 to-transparent blur-md" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#EBA730]/25 via-transparent to-[#FAC934]/25 blur-sm" style={{animationDelay: '1s'}}></div>
                  </div>
                )}
                
                {/* Brilho animado nas bordas externas (mantido para o popular) */}
                {plano.popular && (
                  <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-r from-transparent via-[#EBA730]/40 to-transparent blur-sm"></div>
                    <div className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-b from-transparent via-[#FAC934]/30 to-transparent blur-sm" style={{animationDelay: '0.5s'}}></div>
                  </div>
                )}
                
                <div
                  className={`relative bg-black rounded-2xl shadow-xl p-6 transition-all duration-300 hover:-translate-y-2 border-2 ${
                    plano.popular 
                      ? "border-gradient-to-r from-[#EBA730] to-[#FAC934] scale-105 shadow-[#EBA730]/20 group" 
                      : "border-gray-700"
                  }`}
                >
                {plano.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {plano.nome}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">
                    {plano.descricao}
                  </p>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-3xl font-black text-white">
                      {plano.preco}
                    </span>
                    <span className="text-sm text-gray-400 ml-1">
                      {plano.periodo}
                    </span>
                  </div>
                 
                  {(plano as { observacao?: string }).observacao && (
                    <p className="text-xs text-yellow-400 mt-2 italic">{(plano as { observacao?: string }).observacao}</p>
                  )}
                </div>

                <ul className="space-y-2 mb-6">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white text-sm">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedPlano(plano)}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 md:py-2 px-4 rounded-full transition-all text-base md:text-sm touch-manipulation active:scale-95"
                  >
                    Ver Detalhes
                  </button>
                  <button 
                    onClick={() => {
                      // Haptic feedback simulation
                      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
                        navigator.vibrate(100);
                      }
                      // Aqui você pode adicionar lógica para abrir formulário ou WhatsApp
                      window.open('https://wa.me/5587993595368?text=' + encodeURIComponent(`Olá! Gostaria de assinar o plano ${plano.nome}`), '_blank');
                    }}
                    className={`w-full py-4 md:py-3 rounded-full font-bold text-base md:text-sm transition-all transform hover:scale-105 active:scale-95 touch-manipulation shadow-lg ${
                      plano.popular
                        ? "bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    Assinar {plano.nome}
                  </button>
                </div>
              </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedPlano && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-zinc-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide border border-[#EBA730]/20">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Detalhes - Plano {selectedPlano.nome}
                </h2>
                <button
                  onClick={() => setSelectedPlano(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="text-center p-6 bg-black/50 rounded-2xl">
                  <div className="text-3xl font-black text-white mb-2">
                    {selectedPlano.preco}{selectedPlano.periodo}
                  </div>
                  <p className="text-gray-300">{selectedPlano.descricao}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Instalações Incluídas</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedPlano.detalhes.instalacoes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Benefícios Completos</h3>
                  <ul className="space-y-2">
                    {selectedPlano.beneficios.map((beneficio, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-[#EBA730] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {beneficio}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Extras Inclusos</h3>
                  <ul className="space-y-2">
                    {selectedPlano.detalhes.extras.map((extra, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="text-[#EBA730] mr-2">+</span>
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Horários:</span>
                    <p className="text-white">{selectedPlano.detalhes.horarios}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Suporte:</span>
                    <p className="text-white">{selectedPlano.detalhes.suporte}</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-3 px-6 rounded-full transition-colors">
                  Assinar Plano {selectedPlano.nome}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
