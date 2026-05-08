"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { depoimentos } from "../../lib/dadosAcademia";

export default function Avaliacoes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const depoimento = depoimentos[currentIndex];

  const proximoDepoimento = () => {
    setCurrentIndex((atual) => (atual + 1) % depoimentos.length);
  };

  const anteriorDepoimento = () => {
    setCurrentIndex((atual) => (atual - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="avaliacoes" className="bg-zinc-950 py-24">
      <div className="section-shell">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="section-title">
            Alunos que treinam e recomendam
          </h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">
            Experiências reais de quem vive a rotina Fitness Exclusive.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="brand-card p-8 md:p-12">
            <div className="mx-auto mb-7 flex h-12 w-12 items-center justify-center rounded-lg border border-[#EBA730]/25 bg-[#EBA730]/10 text-[#FAC934]">
              <Quote className="h-6 w-6" />
            </div>

            <div className="mb-6 flex justify-center gap-1.5">
              {[...Array(depoimento.avaliacao)].map((_, index) => (
                <Star
                  key={index}
                  className="h-6 w-6 fill-[#EBA730] text-[#EBA730]"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <p className="mx-auto max-w-3xl text-center text-xl leading-relaxed text-zinc-200">
              &ldquo;{depoimento.comentario}&rdquo;
            </p>

            <p className="mt-8 text-center font-display text-2xl font-bold text-[#FAC934]">
              {depoimento.nome}
            </p>
          </div>

          <button
            onClick={anteriorDepoimento}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 text-[#FAC934] shadow-lg backdrop-blur transition hover:border-[#EBA730]/60 hover:bg-[#EBA730]/10 md:-left-16"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={proximoDepoimento}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/60 p-3 text-[#FAC934] shadow-lg backdrop-blur transition hover:border-[#EBA730]/60 hover:bg-[#EBA730]/10 md:-right-16"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="mt-8 flex justify-center gap-2">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-[#EBA730]"
                    : "w-2.5 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
