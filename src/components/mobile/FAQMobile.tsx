"use client";
import React, { useState } from "react";
import { Clock, Target, MapPin, Users, FileText } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";
import FormularioAgendamento from "../shared/FormularioAgendamento";
import { faqItems } from "../../lib/dadosAcademia";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Target,
  MapPin,
  Users,
  FileText,
};

export default function FAQMobile() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      hapticFeedback('light');
    } else {
      setOpenIndex(index);
      hapticFeedback('medium');
    }
  };

  return (
    <section id="faq" className="py-12 bg-zinc-900">
      <div className="px-4">
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-white mb-3">
            Dúvidas Frequentes
          </h2>
          <p className="text-sm text-gray-300">
            Respostas rápidas para você
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-3 mb-8">
          {faqItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Clock;
            return (
            <div 
              key={index}
              className={`bg-black rounded-2xl border-2 transition-all ${
                openIndex === index 
                  ? 'border-[#EBA730] shadow-lg shadow-[#EBA730]/20' 
                  : 'border-gray-700'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left flex items-center gap-3 touch-manipulation active:bg-gray-900/50"
              >
                {/* Ícone */}
                <div className="text-[#EBA730] flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Pergunta */}
                <h3 className="flex-1 text-sm font-semibold text-white leading-tight">
                  {item.question}
                </h3>

                {/* Indicador */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#EBA730] transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {/* Resposta com animação */}
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 pt-1">
                  <div className="border-t border-gray-700 pt-3">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-black rounded-3xl p-6 border-2 border-[#EBA730]">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-300 mb-5 text-sm">
              Nossa equipe está pronta para ajudar!
            </p>
            <div className="space-y-3">
              <button 
                onClick={() => {
                  hapticFeedback('heavy');
                  window.open('https://wa.me/5588992637523?text=' + encodeURIComponent('Olá! Tenho algumas dúvidas sobre a Fitness Exclusive'), '_blank');
                }}
                className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-6 py-4 rounded-full transition-all active:scale-95 touch-manipulation shadow-lg"
              >
                Falar no WhatsApp
              </button>
              <a 
                href="https://wa.me/5588992637523?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => hapticFeedback('medium')}
                className="w-full bg-transparent border-2 border-[#EBA730] text-[#EBA730] font-bold px-6 py-3 rounded-full transition-all active:scale-95 touch-manipulation block text-center"
              >
                Agendar Visita
              </a>
            </div>
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
