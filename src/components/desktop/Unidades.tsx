"use client";
import React from "react";
import Image from "next/image";
import { unidades } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";

export default function Unidades() {
  const handleMapClick = (endereco: string, cidade: string) => {
    const query = encodeURIComponent(`${endereco}, ${cidade}`);
    window.open(`https://maps.google.com/maps?q=${query}`, "_blank");
  };

  const handleCallClick = (telefone: string) => {
    window.location.href = `tel:${telefone.replace(/\D/g, "")}`;
  };

  return (
    <section id="unidades" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Nossas Unidades
            </h2>
            <p className="text-xl text-gray-300">
              Encontre a unidade mais próxima de você
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {unidades.map((unidade, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="up" 
              delay={150 + (idx * 50)}
            >
              <div className="relative bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#EBA730]/20 transition-all duration-300 hover:-translate-y-2 border-2 border-gray-700">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={unidade.desktop}
                    alt={unidade.nome}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {unidade.nome}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-300 text-sm">{unidade.endereco}</p>
                        <p className="text-gray-400 text-xs">{unidade.cidade}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-gray-300 text-sm">{unidade.telefone}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-300 text-xs">{unidade.horarios}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button 
                      onClick={() => handleMapClick(unidade.endereco, unidade.cidade)}
                      className="flex-1 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-2 px-3 rounded-full text-xs transition-colors"
                    >
                      Mapa
                    </button>
                    <button 
                      onClick={() => handleCallClick(unidade.telefone)}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-full text-xs transition-colors"
                    >
                      Ligar
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Está planejando uma nova unidade em sua região? Entre em contato!
            </p>
            <button className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105">
              Solicitar Nova Unidade
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
