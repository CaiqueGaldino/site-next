"use client";
import React from "react";
import Image from "next/image";
import { estruturas } from "../lib/dadosAcademia";
import ScrollReveal from "./ScrollReveal";

export default function Estrutura() {
  return (
    <section id="estrutura" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Nossa Estrutura
            </h2>
            <p className="text-xl text-gray-300">
              Equipamentos modernos e ambiente climatizado
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {estruturas.map((estrutura, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="up" 
              delay={200 + (idx * 75)}
            >
              <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#EBA730]/20 transition-all duration-300 hover:-translate-y-2 border-2 border-gray-700">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={estrutura.imagem}
                    alt={estrutura.titulo}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {estrutura.titulo}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {estrutura.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-16">
            <div className="bg-zinc-900 rounded-3xl p-8 border-2 border-gradient-to-r from-[#EBA730] to-[#FAC934] max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏆 Infraestrutura Completa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2">200+</div>
                  <p className="text-gray-300">Equipamentos Modernos</p>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2">100%</div>
                  <p className="text-gray-300">Climatizado</p>
                </div>
                <div>
                  <div className="text-3xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2">24h</div>
                  <p className="text-gray-300">Monitoramento</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
