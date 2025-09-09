"use client";
import React, { useState } from "react";
import { planos } from "../lib/dadosAcademia";
import ScrollReveal from "./ScrollReveal";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {planosDetalhados.map((plano, idx) => (
            <ScrollReveal 
              key={plano.nome} 
              direction="up" 
              delay={200 + (idx * 100)}
            >
              <div
                className={`relative bg-black rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:-translate-y-2 border-4 ${
                  plano.popular 
                    ? "border-yellow-400 scale-105 shadow-yellow-400/20" 
                    : "border-gray-700"
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-yellow-400 text-black text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      MAIS POPULAR
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plano.nome}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {plano.descricao}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-black text-yellow-400">
                      {plano.preco}
                    </span>
                    <span className="text-lg text-gray-400 ml-1">
                      {plano.periodo}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedPlano(plano)}
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors"
                  >
                    Ver Detalhes
                  </button>
                  <button 
                    className={`w-full py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 ${
                      plano.popular
                        ? "bg-yellow-400 hover:bg-yellow-500 text-black shadow-lg"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
                  >
                    Assinar {plano.nome}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modal de Detalhes */}
        {selectedPlano && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-zinc-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-yellow-400/20">
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
                  <div className="text-3xl font-black text-yellow-400 mb-2">
                    {selectedPlano.preco}{selectedPlano.periodo}
                  </div>
                  <p className="text-gray-300">{selectedPlano.descricao}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Instalações Incluídas</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {selectedPlano.detalhes.instalacoes.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
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
                        <svg className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <span className="text-yellow-400 mr-2">+</span>
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

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition-colors">
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
