"use client";

import React from "react";
import { planos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";
import { Check, Flame } from "lucide-react";

export default function Planos() {
  return (
    <section id="planos" className="bg-zinc-950 py-24">
      <div className="section-shell">
        <ScrollReveal direction="fade" delay={100}>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">
              Escolha seu plano e comece com{" "}
              <span className="gold-gradient-text">estrutura completa</span>
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl">
              Opções simples para treinar no seu ritmo, com acompanhamento
              profissional e acesso aos principais benefícios da Fitness Exclusive.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {planos.map((plano, idx) => (
            <ScrollReveal
              key={`${plano.nome}-${idx}`}
              direction="up"
              delay={200 + idx * 100}
            >
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-lg p-7 transition duration-300 hover:-translate-y-1 ${
                  plano.popular
                    ? "border border-[#FAC934] bg-gradient-to-br from-[#FAC934] to-[#EBA730] text-black shadow-2xl shadow-[#EBA730]/20 md:-translate-y-4"
                    : "brand-card text-white hover:border-[#EBA730]/45"
                }`}
              >
                {plano.popular && (
                  <div className="absolute right-5 top-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-black/15 px-3 py-1.5 text-xs font-extrabold text-black">
                      <Flame className="h-4 w-4" /> Mais escolhido
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-sm font-extrabold uppercase ${
                      plano.popular ? "text-black/70" : "text-[#FAC934]"
                    }`}
                  >
                    {plano.nome}
                  </p>
                  <div className="mt-4 flex items-end gap-2">
                    <span className="font-display text-4xl font-extrabold leading-none">
                      {plano.preco}
                    </span>
                    <span
                      className={`pb-1 text-sm font-semibold ${
                        plano.popular ? "text-black/65" : "text-zinc-400"
                      }`}
                    >
                      {plano.periodo}
                    </span>
                  </div>
                  <p
                    className={`mt-4 min-h-12 text-sm leading-relaxed ${
                      plano.popular ? "text-black/72" : "text-zinc-400"
                    }`}
                  >
                    {plano.descricao}
                  </p>
                </div>

                <a
                  href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mb-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-extrabold transition duration-300 ${
                    plano.popular
                      ? "bg-black text-white hover:bg-zinc-900"
                      : "bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black hover:from-[#FAC934] hover:to-[#EBA730]"
                  }`}
                >
                  Assinar agora
                </a>

                <ul className="mt-auto space-y-3">
                  {plano.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          plano.popular ? "bg-black/12" : "bg-[#EBA730]/12"
                        }`}
                      >
                        <Check
                          className={`h-3.5 w-3.5 ${
                            plano.popular ? "text-black" : "text-[#FAC934]"
                          }`}
                          strokeWidth={3}
                        />
                      </span>
                      <span
                        className={`text-sm leading-relaxed ${
                          plano.popular ? "text-black/76" : "text-zinc-300"
                        }`}
                      >
                        {beneficio}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
