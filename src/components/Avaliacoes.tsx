"use client";
import React, { useState } from "react";
import Image from "next/image";
import { depoimentos } from "../lib/dadosAcademia";

export default function Avaliacoes() {
  const [depoimentoAtual, setDepoimentoAtual] = useState(0);

  const proximoDepoimento = () => {
    setDepoimentoAtual((atual) => (atual + 1) % depoimentos.length);
  };

  const anteriorDepoimento = () => {
    setDepoimentoAtual((atual) => (atual - 1 + depoimentos.length) % depoimentos.length);
  };

  const renderEstrelas = (avaliacao: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < avaliacao ? "text-yellow-400" : "text-zinc-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="avaliacoes" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-gray-300">
            Histórias de transformação e sucesso
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-black rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={depoimentos[depoimentoAtual].foto}
                    alt={depoimentos[depoimentoAtual].nome}
                    fill
                    className="object-cover rounded-full border-4 border-yellow-400"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {renderEstrelas(depoimentos[depoimentoAtual].avaliacao)}
                </div>
                <blockquote className="text-lg md:text-xl text-white mb-4 italic">
                  "{depoimentos[depoimentoAtual].comentario}"
                </blockquote>
                <cite className="text-xl font-bold text-yellow-400">
                  {depoimentos[depoimentoAtual].nome}
                </cite>
              </div>
            </div>
          </div>

          {/* Botões de navegação */}
          <button
            onClick={anteriorDepoimento}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white rounded-full p-2 shadow-lg hover:bg-gray-800 transition-all border border-gray-700 z-10"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={proximoDepoimento}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-sm text-white rounded-full p-2 shadow-lg hover:bg-gray-800 transition-all border border-gray-700 z-10"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 gap-2">
            {depoimentos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setDepoimentoAtual(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === depoimentoAtual ? "bg-yellow-400 scale-110" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
