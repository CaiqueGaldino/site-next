"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, FileText, MapPin, Target, Users } from "lucide-react";
import ScrollReveal from "../shared/ScrollReveal";
import { faqItems } from "../../lib/dadosAcademia";

const iconMap = {
  Clock,
  Target,
  MapPin,
  Users,
  FileText,
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-zinc-950 py-24">
      <div className="section-shell">
        <ScrollReveal direction="fade" delay={100}>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="section-title">Dúvidas comuns, respostas diretas</h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl">
              Tire suas dúvidas sobre acompanhamento, planos e benefícios.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl space-y-3">
          {faqItems.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Clock;
            const isOpen = openIndex === index;

            return (
              <ScrollReveal
                key={item.question}
                direction="up"
                delay={150 + index * 50}
              >
                <div className="brand-card overflow-hidden transition duration-300 hover:border-[#EBA730]/45">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center gap-5 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-[#EBA730]/25 bg-[#EBA730]/10 text-[#FAC934]">
                      <IconComponent className="h-5 w-5" />
                    </span>
                    <span className="flex-1 font-display text-lg font-bold text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-[#FAC934] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 pl-[84px]">
                      <p className="border-t border-white/10 pt-4 leading-relaxed text-zinc-300">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="mx-auto mt-12 max-w-2xl rounded-lg border border-[#EBA730]/30 bg-black p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-white">
              Ainda tem dúvidas?
            </h3>
            <p className="section-copy mx-auto mt-3 max-w-xl">
              Nossa equipe está pronta para ajudar você a escolher a melhor
              unidade e o melhor plano.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/5588992637523?text=" +
                      encodeURIComponent("Olá! Gostaria de mais informações"),
                    "_blank",
                  )
                }
                className="btn-primary"
              >
                Falar no WhatsApp
              </button>
              <a
                href="https://wa.me/5588992637523?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Agendar visita
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
