"use client";

import React from "react";
import Image from "next/image";
import { sobreNos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";

export default function SobreNos() {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="section-shell">
        <ScrollReveal>
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="section-title">{sobreNos.titulo}</h2>
              <div className="section-copy mt-6 max-w-xl space-y-4">
                <p>{sobreNos.descricao}</p>
                <p>{sobreNos.missao}</p>
                <p>{sobreNos.equipe}</p>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-zinc-950">
              <Image
                src="/images/exclusive1.webp"
                alt="Fitness Exclusive"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
