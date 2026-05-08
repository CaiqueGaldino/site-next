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
import ScrollReveal from "../shared/ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";

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

export default function Beneficios() {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  return (
    <section id="beneficios" className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/35 to-transparent" />

      <div className="section-shell relative z-10">
        <ScrollReveal>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="section-title">
              Mais conforto, tecnologia e liberdade{" "}
              <span className="gold-gradient-text">no seu treino</span>
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl">
              Vantagens pensadas para deixar sua rotina mais simples, motivadora
              e conectada aos seus objetivos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {beneficiosExclusivos.map((beneficio, index) => {
            const IconComponent = iconMap[beneficio.icone] || Sparkles;
            return (
              <ScrollReveal key={beneficio.titulo} delay={index * 0.1}>
                <button
                  onClick={() => setSelectedBenefit(index)}
                  className="brand-card group flex h-full w-full flex-col p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#EBA730]/45 hover:bg-zinc-900"
                  aria-label={`Ver detalhes de ${beneficio.titulo}`}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-[#EBA730]/25 bg-[#EBA730]/10 text-[#FAC934] transition duration-300 group-hover:border-[#FAC934]/45 group-hover:bg-[#EBA730]/20">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-[#FAC934]">
                    {beneficio.titulo}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {beneficio.descricao}
                  </p>

                  <span className="mt-6 text-sm font-extrabold text-[#FAC934]">
                    Ver detalhes
                  </span>
                </button>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="mt-16 rounded-lg border border-[#EBA730]/30 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 p-8 text-center">
            <h3 className="font-display text-3xl font-extrabold text-white">
              Pronto para começar sua transformação?
            </h3>
            <p className="section-copy mx-auto mt-4 max-w-2xl">
              Aproveite esses benefícios e conheça uma estrutura preparada para
              acompanhar sua evolução.
            </p>
            <a
              href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7"
            >
              Quero fazer parte
            </a>
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selectedBenefit !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedBenefit(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 22 }}
              className="brand-card relative max-h-[90vh] w-full max-w-2xl overflow-y-auto p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBenefit(null)}
                className="absolute right-4 top-4 rounded-full p-2 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Fechar detalhes"
              >
                <X className="h-5 w-5" />
              </button>

              {(() => {
                const beneficio = beneficiosExclusivos[selectedBenefit];
                const IconComponent = iconMap[beneficio.icone] || Sparkles;

                return (
                  <>
                    <div className="mb-8 text-center">
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg border border-[#EBA730]/30 bg-[#EBA730]/10 text-[#FAC934]">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="font-display text-3xl font-extrabold text-white">
                        {beneficio.titulo}
                      </h3>
                      <p className="mt-3 text-lg leading-relaxed text-zinc-300">
                        {beneficio.descricao}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-display text-lg font-bold text-[#FAC934]">
                        Benefícios
                      </h4>
                      {beneficio.destaque.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.06 }}
                          className="flex items-start gap-3"
                        >
                          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EBA730]" />
                          <span className="leading-relaxed text-zinc-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 border-t border-white/10 pt-6 text-center">
                      <a
                        href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Quero aproveitar
                      </a>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
