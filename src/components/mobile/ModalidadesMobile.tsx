"use client";

import React from "react";
import { Activity, ClipboardCheck, Dumbbell, Smartphone } from "lucide-react";

const highlights = [
  {
    icon: ClipboardCheck,
    title: "Avaliação física",
    description: "Ponto de partida para entender seu momento e acompanhar evolução.",
  },
  {
    icon: Dumbbell,
    title: "Treino por objetivo",
    description: "Planos organizados para hipertrofia, emagrecimento, condicionamento e saúde.",
  },
  {
    icon: Smartphone,
    title: "App Fitness Exclusive",
    description: "Treinos, pagamentos e acompanhamento reunidos em uma rotina mais simples.",
  },
];

export default function ModalidadesMobile() {
  return (
    <section id="modalidades" className="bg-black px-4 py-12">
      <div className="mb-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
          Experiência
        </p>
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white">
          Treinos pensados para cada objetivo
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
          Uma rotina mais clara, com orientação profissional, acompanhamento e
          estrutura completa para você evoluir com consistência.
        </p>
      </div>

      <div className="rounded-lg border border-white/10 bg-zinc-950 p-5">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#FAC934]/30 bg-[#FAC934]/10 text-[#FAC934]">
            <Activity className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Método Exclusive</p>
            <p className="text-xs text-zinc-500">Avaliar, orientar e evoluir</p>
          </div>
        </div>

        <div className="space-y-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-black p-4">
              <div className="mb-3 flex items-center gap-3">
                <item.icon className="h-5 w-5 text-[#FAC934]" />
                <h3 className="font-display text-base font-bold text-white">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
