"use client";
import React, { useState } from "react";
import Image from "next/image";
import { estruturas } from "../lib/dadosAcademia";
import ScrollReveal from "./ScrollReveal";

interface EstruturaDetalhes {
  titulo: string;
  descricao: string;
  imagem: string;
  destaque: boolean;
  video: string;
  equipamentos: string[];
  horarios: string;
  beneficios: string[];
  especificacoes: {
    area: string;
    equipamentos: string;
    capacidade: string;
  };
}

export default function EstruturaModerna() {
  const [selectedEstrutura, setSelectedEstrutura] = useState<EstruturaDetalhes | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="estrutura" className="py-20 bg-black relative overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/5 via-transparent to-[#FAC934]/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-white via-[#EBA730] to-white bg-clip-text text-transparent">
              Nossa Estrutura
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Equipamentos de última geração e ambiente premium
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
              <div className="text-[#EBA730]">⭐</div>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
            </div>
          </div>
        </ScrollReveal>

        {/* Grid principal com cards uniformes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {estruturas.map((estrutura, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="up" 
              delay={200 + (idx * 100)}
            >
              <div
                className={`relative group cursor-pointer transition-all duration-500 ${
                  hoveredCard === idx ? "scale-105 z-10" : ""
                }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedEstrutura(estrutura)}
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#EBA730]/20 transition-all duration-500 border-2 border-gray-700 hover:border-[#EBA730]/50 h-full flex flex-col">
                  
                  {/* Área da imagem - altura uniforme */}
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <Image
                      src={estrutura.imagem}
                      alt={estrutura.titulo}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    
                    {/* Overlay com gradiente animado */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/70 transition-all duration-500" />
                    
                    {/* Efeito de brilho no hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EBA730]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Conteúdo sobre a imagem */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {estrutura.titulo}
                        </h3>
                        <span className="text-[#EBA730]">→</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        {estrutura.descricao}
                      </p>
                      
                      {/* Info rápida */}
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <span>📍 {estrutura.especificacoes.area}</span>
                        <span>👥 {estrutura.especificacoes.capacidade}</span>
                      </div>
                    </div>
                  </div>

                  {/* Área de informações uniforme */}
                  <div className="p-4 flex-1 flex flex-col">
                    <div className="grid grid-cols-1 gap-3 flex-1">
                      <div>
                        <h4 className="text-[#EBA730] font-bold text-sm mb-1">Horários</h4>
                        <p className="text-white text-xs line-clamp-2">{estrutura.horarios}</p>
                      </div>
                      <div>
                        <h4 className="text-[#EBA730] font-bold text-sm mb-1">Equipamentos</h4>
                        <p className="text-white text-xs line-clamp-2">{estrutura.especificacoes.equipamentos}</p>
                      </div>
                    </div>
                    
                    <button className="w-full mt-3 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 text-sm flex-shrink-0">
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Estatísticas da infraestrutura */}
        <ScrollReveal direction="up" delay={600}>
          <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-8 border-2 border-[#EBA730] max-w-6xl mx-auto relative overflow-hidden">
            {/* Background decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10"></div>
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                🏆 Infraestrutura de Excelência
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">200+</div>
                  <p className="text-gray-300">Equipamentos Premium</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">1200m²</div>
                  <p className="text-gray-300">Área Total</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">100%</div>
                  <p className="text-gray-300">Climatizado</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">24h</div>
                  <p className="text-gray-300">Monitoramento</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Modal de detalhes */}
        {selectedEstrutura && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
            <div className="bg-zinc-900 rounded-3xl p-6 max-w-4xl w-full h-full max-h-[95vh] border-2 border-[#EBA730]/50 relative flex flex-col overflow-hidden">
              {/* Botão fechar */}
              <button
                onClick={() => setSelectedEstrutura(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center z-10"
              >
                ✕
              </button>

              {/* Conteúdo com scroll customizado */}
              <div className="flex-1 overflow-y-auto scrollbar-hide pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                  {/* Imagem principal */}
                  <div className="relative h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden">
                    <Image
                      src={selectedEstrutura.imagem}
                      alt={selectedEstrutura.titulo}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  {/* Informações detalhadas */}
                  <div className="flex flex-col">
                    <h2 className="text-3xl font-bold text-white mb-4">{selectedEstrutura.titulo}</h2>
                    <p className="text-gray-300 mb-6">{selectedEstrutura.descricao}</p>

                    {/* Especificações */}
                    <div className="bg-black/50 rounded-2xl p-6 mb-6">
                      <h3 className="text-[#EBA730] font-bold mb-4">📊 Especificações</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-400">Área:</span>
                          <p className="text-white font-bold">{selectedEstrutura.especificacoes.area}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Equipamentos:</span>
                          <p className="text-white font-bold">{selectedEstrutura.especificacoes.equipamentos}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Capacidade:</span>
                          <p className="text-white font-bold">{selectedEstrutura.especificacoes.capacidade}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Horários:</span>
                          <p className="text-white font-bold">{selectedEstrutura.horarios}</p>
                        </div>
                      </div>
                    </div>

                    {/* Equipamentos */}
                    <div className="mb-6">
                      <h3 className="text-[#EBA730] font-bold mb-3">🏋️ Equipamentos Disponíveis</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedEstrutura.equipamentos.map((equipamento, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <span className="w-2 h-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] rounded-full mr-2 flex-shrink-0"></span>
                            {equipamento}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefícios */}
                    <div className="mb-6">
                      <h3 className="text-[#EBA730] font-bold mb-3">💪 Benefícios</h3>
                      <div className="space-y-2">
                        {selectedEstrutura.beneficios.map((beneficio, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <span className="text-[#EBA730] mr-2 flex-shrink-0">✓</span>
                            {beneficio}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-auto">
                      🎯 Conhecer Pessoalmente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
