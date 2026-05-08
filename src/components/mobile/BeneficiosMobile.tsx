"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Dumbbell,
  RefreshCw,
  Smartphone,
  Sparkles,
  Target,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { beneficiosExclusivos } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  RefreshCw,
  Sparkles,
  Target,
  Clock,
  Users,
  Dumbbell,
  Calendar,
};

export default function BeneficiosMobile() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    hapticFeedback("light");
  };

  return (
    <section id="beneficios" className="relative overflow-hidden bg-zinc-950 py-12">
      <div className="relative z-10 px-4">
        <div className="mb-7">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
            Benefícios
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white">
            Mais vantagens no seu treino
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            Recursos pensados para simplificar sua rotina e acelerar sua evolução.
          </p>
        </div>

        <div className="mb-8 space-y-3">
          {beneficiosExclusivos.map((beneficio, index) => {
            const IconComponent = iconMap[beneficio.icone] || Sparkles;
            return (
              <button
                key={beneficio.titulo}
                onClick={() => toggleExpand(index)}
                className="flex w-full items-start gap-4 rounded-lg border border-white/10 bg-black p-4 text-left transition-colors active:scale-[0.99] active:border-[#EBA730]/50"
              >
                <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#EBA730]/25 bg-[#EBA730]/10 text-[#FAC934]">
                  <IconComponent className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-sm font-bold leading-tight text-white">
                    {beneficio.titulo}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-zinc-400">
                    {beneficio.descricao}
                  </p>
                </div>

                <span className="mt-1 text-lg font-light leading-none text-[#FAC934]">
                  +
                </span>
              </button>
            );
          })}
        </div>

        {expandedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => {
              setExpandedIndex(null);
              hapticFeedback("light");
            }}
          >
            <div
              className="brand-card max-h-[72vh] w-full max-w-md overflow-hidden animate-scale-in"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative border-b border-white/10 p-5 text-center">
                <button
                  onClick={() => {
                    setExpandedIndex(null);
                    hapticFeedback("light");
                  }}
                  className="absolute right-3 top-3 rounded-full p-2 text-zinc-400 transition active:scale-95 active:bg-white/10"
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>

                {(() => {
                  const beneficio = beneficiosExclusivos[expandedIndex];
                  const IconComponent = iconMap[beneficio.icone] || Sparkles;

                  return (
                    <>
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-[#EBA730]/25 bg-[#EBA730]/10 text-[#FAC934]">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-xl font-extrabold text-white">
                        {beneficio.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                        {beneficio.descricao}
                      </p>
                    </>
                  );
                })()}
              </div>

              <div className="max-h-[calc(72vh-220px)] overflow-y-auto p-5">
                <div className="space-y-3">
                  {beneficiosExclusivos[expandedIndex].destaque.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EBA730]" />
                      <p className="text-sm leading-relaxed text-zinc-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 p-5">
                <button
                  onClick={() => {
                    setExpandedIndex(null);
                    hapticFeedback("light");
                  }}
                  className="btn-primary w-full py-3"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mb-20 rounded-lg border border-[#EBA730]/30 bg-black p-6 text-left">
          <h3 className="font-display text-xl font-extrabold text-white">
            Pronto para começar?
          </h3>
          <p className="mt-2 text-sm text-zinc-400">
            Aproveite todos esses benefícios exclusivos.
          </p>
          <a
            href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => hapticFeedback("heavy")}
            className="btn-primary mt-5 w-full py-4"
          >
            Quero fazer parte
          </a>
        </div>
      </div>
    </section>
  );
}
