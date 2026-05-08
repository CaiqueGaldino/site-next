"use client";

import Image from "next/image";

export default function HeroSectionMobile() {
  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/hero section mobile/fundo.webp"
          alt="Academia Fitness Exclusive"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black" />
      </div>

      <div className="absolute inset-x-0 bottom-24 top-16 z-10">
        <Image
          src="/images/hero section mobile/pessoas.webp"
          alt="Personal trainers da Fitness Exclusive"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] h-[46svh] bg-gradient-to-t from-black via-black/85 to-transparent" />

      <section className="relative z-20 flex min-h-[100svh] flex-col px-5 pb-32 pt-10">
        <div className="max-w-[280px]">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#FAC934]">
            Fitness Exclusive
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] text-white">
            Treine na{" "}
            <span className="block text-[#FAC934]">Melhor!</span>
          </h1>
        </div>

        <div className="mt-auto">
          <div className="mb-5 inline-flex items-end gap-2 rounded-lg border border-[#FAC934]/35 bg-black/70 px-4 py-3 backdrop-blur-md">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                Planos a partir de
              </p>
              <div className="mt-1 flex items-start leading-none text-[#FAC934]">
                <span className="mt-1 text-base font-black">R$</span>
                <span className="font-display text-5xl font-extrabold">97</span>
                <span className="mt-1 text-2xl font-black">,00</span>
              </div>
            </div>
          </div>

          <p className="max-w-sm text-sm font-semibold uppercase leading-relaxed text-white">
            Reconhecida pelo alto padrão, premiada pela qualidade e escolhida por
            quem busca resultados reais.
          </p>
        </div>
      </section>
    </main>
  );
}
