"use client";
import React from "react";
import Image from "next/image";
import { sobreNos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";

export default function SobreNos() {
  return (
    <section className="relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/3 via-transparent to-[#FAC934]/3"></div>
      
      <ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center relative z-10">
          {/* Texto à Esquerda */}
          <div className="py-20 px-12 lg:px-20 text-left">
            <h2 className="text-4xl font-black text-white mb-6">
              {sobreNos.titulo}
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">{sobreNos.descricao}</p>
              <p>{sobreNos.missao}</p>
              <p>{sobreNos.equipe}</p>
            </div>
          </div>

          {/* Imagem à Direita com Gradiente */}
          <div className="relative h-full min-h-[600px]">
            <Image
              src="/images/exclusive1.webp"
              alt="Fitness Exclusive"
              fill
              className="object-cover"
              priority
            />
            {/* Gradiente Preto Horizontal - Mais Forte */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
