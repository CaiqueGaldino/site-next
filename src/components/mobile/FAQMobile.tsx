"use client";
import React, { useState } from "react";
import { Clock, Target, Dumbbell, MapPin, User, FileText, Users, Apple } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";
import FormularioAgendamento from "../shared/FormularioAgendamento";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function FAQMobile() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

  const faqItems: FAQItem[] = [
    {
      question: "Horário de funcionamento?",
      answer: "Segunda a sexta: 5h-22h | Sábados: 6h-20h | Domingos: 8h-18h. Algumas unidades têm horários estendidos 24h.",
      icon: Clock
    },
    {
      question: "Aula experimental gratuita?",
      answer: "Sim! Oferecemos aula experimental gratuita para novos alunos. Agende pelo WhatsApp ou visite uma unidade.",
      icon: Target
    },
    {
      question: "Quais modalidades incluídas?",
      answer: "Musculação, cardio, aulas funcionais, cross training, yoga e pilates. Modalidades especiais podem ter custo adicional.",
      icon: Dumbbell
    },
    {
      question: "Posso usar qualquer unidade?",
      answer: "Sim! Sua matrícula permite treinar em qualquer uma das 10 unidades, oferecendo total flexibilidade.",
      icon: MapPin
    },
    {
      question: "Têm personal trainer?",
      answer: "Sim, temos personal trainers qualificados. O acompanhamento personalizado tem custo adicional.",
      icon: User
    },
    {
      question: "Como funciona o cancelamento?",
      answer: "Pode ser solicitado com 30 dias de antecedência na unidade com documento e comprovante de residência.",
      icon: FileText
    },
    {
      question: "Posso levar acompanhantes?",
      answer: "Convidados podem treinar mediante taxa diária. Consulte nossa política de visitantes na recepção.",
      icon: Users
    },
    {
      question: "Acompanhamento nutricional?",
      answer: "Sim, algumas unidades contam com nutricionistas parceiros. Consulte disponibilidade e valores na unidade.",
      icon: Apple
    }
  ];

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
          {faqItems.map((item, index) => (
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
                  <item.icon className="w-6 h-6" />
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
          ))}
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
                  window.open('https://wa.me/5588992984986?text=' + encodeURIComponent('Olá! Tenho algumas dúvidas sobre a Fitness Exclusive 🤔'), '_blank');
                }}
                className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-6 py-4 rounded-full transition-all active:scale-95 touch-manipulation shadow-lg"
              >
                💬 Falar no WhatsApp
              </button>
              <button 
                onClick={() => {
                  hapticFeedback('medium');
                  setModalAgendamentoAberto(true);
                }}
                className="w-full bg-transparent border-2 border-[#EBA730] text-[#EBA730] font-bold px-6 py-3 rounded-full transition-all active:scale-95 touch-manipulation"
              >
                📅 Agendar Visita
              </button>
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
