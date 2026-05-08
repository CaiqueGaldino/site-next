"use client";
import React, { useState } from "react";
import { ChevronDown, Clock, Target, MapPin, Users, FileText } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";
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
    <section id="faq" className="bg-zinc-950 py-12">
      <div className="px-4">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
            FAQ
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white">
            Dúvidas frequentes
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            Respostas rápidas sobre planos, benefícios e atendimento.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {faqItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Clock;
            return (
            <div 
              key={index}
              className={`rounded-lg border bg-black transition-colors ${
                openIndex === index 
                  ? 'border-[#EBA730]/60'
                  : 'border-white/10'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left flex items-center gap-3 touch-manipulation active:bg-gray-900/50"
              >
                <div className="flex-shrink-0 text-[#EBA730]">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="flex-1 text-sm font-semibold text-white leading-tight">
                  {item.question}
                </h3>

                <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-[#EBA730] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 pt-1">
                  <div className="border-t border-white/10 pt-3">
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

        <div className="rounded-lg border border-[#EBA730]/35 bg-black p-6">
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
                className="w-full rounded-lg bg-[#FAC934] px-6 py-4 font-bold text-black transition-colors active:scale-95 touch-manipulation hover:bg-[#EBA730]"
              >
                Falar no WhatsApp
              </button>
              <a 
                href="https://wa.me/5588992637523?text=Olá!%20Gostaria%20de%20agendar%20uma%20visita"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => hapticFeedback('medium')}
                className="block w-full rounded-lg border border-[#EBA730]/60 bg-transparent px-6 py-3 text-center font-bold text-[#EBA730] transition-colors active:scale-95 touch-manipulation hover:bg-[#EBA730]/10"
              >
                Agendar Visita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
