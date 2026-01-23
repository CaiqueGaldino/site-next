"use client";
import React, { useState } from "react";
import { Smartphone, RefreshCw, Sparkles, Music, Clock, Users, Dumbbell, Calendar } from "lucide-react";
import { beneficiosExclusivos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";
import FormularioAgendamento from "../shared/FormularioAgendamento";

const iconNames = [
  "Smartphone",
  "RefreshCw",
  "Sparkles",
  "Music",
  "Clock",
  "Users",
  "Dumbbell",
  "Calendar",
] as const;

type IconName = typeof iconNames[number];

const iconMap: Record<IconName, React.FC<any>> = {
  Smartphone,
  RefreshCw,
  Sparkles,
  Music,
  Clock,
  Users,
  Dumbbell,
  Calendar,
};

export default function Beneficios() {
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

  return (
    <section id="beneficios" className="py-20 bg-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/3 via-transparent to-[#FAC934]/3"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#EBA730]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FAC934]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-white">
              BENEFÍCIOS EXCLUSIVOS
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
              <Sparkles className="w-6 h-6 text-[#EBA730]" />
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Descubra as vantagens únicas que só a Fitness Exclusive oferece para transformar sua experiência fitness
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {beneficiosExclusivos.map((beneficio, index) => {
            const IconComponent = iconMap[beneficio.icone as IconName];
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="group bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border-2 border-gray-700 hover:border-[#EBA730]/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#EBA730]/20 h-full">
                  {/* Ícone */}
                  <div className="text-[#EBA730] mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-[#EBA730] transition-colors">
                    {beneficio.titulo}
                  </h3>
                  
                  {/* Descrição */}
                  <p className="text-gray-400 text-sm mb-6 text-center leading-relaxed">
                    {beneficio.descricao}
                  </p>
                  
                  {/* Destaques */}
                  <div className="space-y-2">
                    {beneficio.destaque.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{transitionDelay: `${i * 100}ms`}}>
                        <div className="w-2 h-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Efeito de hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EBA730]/5 via-transparent to-[#FAC934]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Call to action */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-8 border-2 border-[#EBA730] max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4">
                  Pronto para começar sua transformação?
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  Aproveite todos esses benefícios exclusivos e muito mais na Fitness Exclusive
                </p>
                <a 
                  href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
                >
                  Quero fazer parte!
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <FormularioAgendamento 
        isOpen={modalAgendamentoAberto}
        onClose={() => setModalAgendamentoAberto(false)}
        tipo="quero-fazer-parte"
      />
    </section>
  );
}
