"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Users, BarChart3, Dumbbell, Target, Trophy } from "lucide-react";
import { estruturas } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";

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
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @property --border-angle-infra {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes border-spin-infra {
          100% {
            --border-angle-infra: 360deg;
          }
        }

        .animate-border-infra {
          animation: border-spin-infra 6s linear infinite;
        }
      `}} />
      
      <section id="estrutura" className="py-20 bg-black relative overflow-hidden">
      {/* Background com gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/5 via-transparent to-[#FAC934]/5 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 text-white">
              Nossa Estrutura
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Equipamentos de última geração e ambiente premium
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
              <Star className="w-5 h-5 text-[#EBA730]" />
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
                onClick={() => setSelectedEstrutura({
                  ...estrutura,
                  imagem: estrutura.desktop
                })}
              >
                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#EBA730]/20 transition-all duration-500 border-2 border-gray-700 hover:border-[#EBA730]/50 h-full flex flex-col">
                  
                  {/* Área da imagem - altura uniforme */}
                  <div className="relative overflow-hidden h-48 flex-shrink-0">
                    <Image
                      src={estrutura.desktop}
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
                        <MapPin className="w-4 h-4 inline mr-1" />{estrutura.especificacoes.area}
                        <Users className="w-4 h-4 inline mr-1" />{estrutura.especificacoes.capacidade}
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
          <div 
            className="max-w-6xl mx-auto animate-border-infra"
            style={{
              background: 'linear-gradient(45deg, #000, rgb(24 24 27) 50%, #000) padding-box, conic-gradient(from var(--border-angle-infra), rgba(255,255,255,0.2) 80%, rgb(250 204 21) 86%, #EBA730 90%, #FAC934 94%, rgba(255,255,255,0.2)) border-box',
              borderRadius: '1.5rem',
              border: '2px solid transparent'
            }}
          >
            <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-8 relative overflow-hidden">
              {/* Background decorativo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10"></div>
              
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  <Trophy className="w-6 h-6 mr-2 inline" /> Infraestrutura de Excelência
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                  <div className="group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">200+</div>
                    <p className="text-gray-300">Equipamentos Premium</p>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">1200m²</div>
                    <p className="text-gray-300">Área Total</p>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">100%</div>
                    <p className="text-gray-300">Climatizado</p>
                  </div>
                  <div className="group">
                    <div className="text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform">24h</div>
                    <p className="text-gray-300">Monitoramento</p>
                  </div>
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
              <div className="flex-1 overflow-y-auto scrollbar-hide pt-8 pb-24">
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
                      <h3 className="text-[#EBA730] font-bold mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5" /> Especificações
                      </h3>
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
                      <h3 className="text-[#EBA730] font-bold mb-3 flex items-center gap-2">
                        <Dumbbell className="w-5 h-5" /> Equipamentos Disponíveis
                      </h3>
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
                      <h3 className="text-[#EBA730] font-bold mb-3 flex items-center gap-2">
                        <Target className="w-5 h-5" /> Benefícios
                      </h3>
                      <div className="space-y-2">
                        {selectedEstrutura.beneficios.map((beneficio, i) => (
                          <div key={i} className="flex items-center text-gray-300 text-sm">
                            <span className="text-[#EBA730] mr-2 flex-shrink-0">✓</span>
                            {beneficio}
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 mt-auto mb-24">
                      <Target className="w-5 h-5 mr-2 inline" /> Conhecer Pessoalmente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
}
