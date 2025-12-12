"use client";
import React, { useState } from "react";
import { planos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";
import FormularioAgendamento from "../shared/FormularioAgendamento";
import { Check, Flame } from "lucide-react";

const CheckIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Tag = ({ text }: { text: string }) => (
  <div className="inline-flex items-center gap-2 bg-[#EBA730]/20 text-[#EBA730] text-sm font-bold px-4 py-2 rounded-full tracking-wider">
    <span className="w-2 h-2 bg-[#EBA730] rounded-full"></span>
    {text}
  </div>
);

export default function Planos() {
  const [agendamentoAberto, setAgendamentoAberto] = useState(false);

  return (
    <section id="planos" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Tag text="MAIS DE 5.000 ALUNOS" />
            </div>
            <h2 className="text-4xl font-black text-white mb-4">
              Planos para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                todos os objetivos
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Escolha o plano ideal e alcance seus objetivos com a Stack Fight
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de 3 planos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {planos.map((plano, idx) => (
            <ScrollReveal 
              key={`${plano.nome}-${idx}`} 
              direction="up" 
              delay={200 + (idx * 100)}
            >
              <article
                className={`relative p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 ${
                  plano.popular
                    ? 'bg-gradient-to-b from-[#EBA730] to-[#FAC934] text-white shadow-2xl md:scale-110'
                    : 'bg-black border-2 border-gray-800 text-white shadow-xl'
                }`}
              >
                {plano.popular && (
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/20 text-white text-sm font-bold px-4 py-2 backdrop-blur">
                      <Flame className="w-4 h-4" /> POPULAR
                    </span>
                  </div>
                )}
                
                <div className="mb-4">
                  <h3
                    className={`text-sm font-bold tracking-widest uppercase ${
                      plano.popular ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    {plano.nome}
                  </h3>
                </div>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${plano.popular ? 'text-white' : 'text-white'}`}>
                    {plano.preco}
                  </span>
                  <span className={`${plano.popular ? 'text-white/70' : 'text-gray-400'} text-sm`}>
                    {plano.periodo}
                  </span>
                </div>

                <p className={`mb-6 text-sm ${plano.popular ? 'text-white/85' : 'text-gray-400'} min-h-[3rem]`}>
                  {plano.descricao}
                </p>

                <div className="mb-6">
                  <button
                    type="button"
                    onClick={() => setAgendamentoAberto(true)}
                    className={`w-full text-center py-4 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      plano.popular
                        ? 'bg-white text-black hover:bg-gray-100'
                        : 'bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black hover:from-[#FAC934] hover:to-[#EBA730]'
                    }`}
                  >
                    Assinar Agora
                  </button>
                </div>

                <ul className="space-y-3">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                          plano.popular ? 'bg-white/25' : 'bg-gray-800'
                        }`}
                      >
                        <CheckIcon className={`${plano.popular ? 'text-white' : 'text-[#EBA730]'} w-4 h-4`} />
                      </div>
                      <span className={`text-sm ${plano.popular ? 'text-white/90' : 'text-gray-300'}`}>
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <FormularioAgendamento
          isOpen={agendamentoAberto}
          onClose={() => setAgendamentoAberto(false)}
          tipo="quero-fazer-parte"
        />
      </div>
    </section>
  );
}
