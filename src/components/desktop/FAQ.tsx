"use client";
import React, { useState } from "react";
import { Clock, Target, MapPin, Users, FileText } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";
import FormularioAgendamento from "../shared/FormularioAgendamento";
import { faqItems } from "../../lib/dadosAcademia";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Target,
  MapPin,
  Users,
  FileText,
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-300">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Clock;
            return (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={150 + (index * 50)}
            >
              <div className="bg-black rounded-2xl border-2 border-gray-700 hover:border-[#EBA730] transition-all duration-300 flex items-center">
                <div className="flex-shrink-0 p-6 text-[#EBA730]">
                  <IconComponent className="w-6 h-6" />
                </div>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex-1 p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-[#EBA730] transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-12">
            <div className="bg-black rounded-3xl p-8 border-2 border-[#EBA730] max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-300 mb-6">
                Nossa equipe está pronta para ajudar você!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/5588992637523?text=' + encodeURIComponent('Olá! Gostaria de mais informações 😊'), '_blank')}
                  className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  Falar no WhatsApp
                </button>
                <a
                  href="https://wa.me/5588992637523?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-[#EBA730] text-[#EBA730] hover:bg-gradient-to-r hover:from-[#EBA730] hover:to-[#FAC934] hover:text-black font-bold px-6 py-3 rounded-full transition-all inline-block"
                >
                  Agendar Visita
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
