"use client";

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Sem compromisso",
  "Totalmente gratuito",
  "Acompanhamento profissional",
];

export default function AulaExperimental() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="rounded-lg border border-[#EBA730]/35 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 p-8 md:p-12">
          <h2 className="section-title mx-auto max-w-3xl">
            Experimente gratuitamente antes de começar
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Conheça a estrutura, os equipamentos e a metodologia sem compromisso.
            Agende sua aula experimental gratuita agora mesmo.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="h-5 w-5 text-[#FAC934]" />
                <span className="text-sm font-semibold">{point}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/5588992637523?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20aula%20experimental"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-9"
          >
            Agendar agora
            <ArrowRight className="h-5 w-5" />
          </a>

          <p className="mt-5 text-sm text-zinc-400">
            Mais de 500 alunos já experimentaram e aprovaram.
          </p>
        </div>
      </div>
    </section>
  );
}
