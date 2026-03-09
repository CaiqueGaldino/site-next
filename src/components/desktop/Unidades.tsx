"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { unidades } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";

export default function Unidades() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleMapClick = (endereco: string, cidade: string) => {
    const query = encodeURIComponent(`${endereco}, ${cidade}`);
    window.open(`https://maps.google.com/maps?q=${query}`, "_blank");
  };

  const handleCallClick = (telefone: string) => {
    window.location.href = `tel:${telefone.replace(/\D/g, "")}`;
  };

  // Gera sugestões baseadas no termo de busca
  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const lowerSearch = searchTerm.toLowerCase();
    const suggestionsArray: { nome: string; cidade: string; tipo: "cidade" | "unidade" }[] = [];
    const addedCities = new Set<string>();
    const addedUnidades = new Set<string>();

    // Primeiro: adiciona cidades únicas
    unidades.forEach((unidade) => {
      const cidadeLower = unidade.cidade.toLowerCase();
      // Formato: "Bairro, Cidade - Estado" -> pega "Cidade"
      const cidadeNome = unidade.cidade.split(',')[1]?.split('-')[0]?.trim() || unidade.cidade;

      if (cidadeLower.includes(lowerSearch) && !addedCities.has(cidadeNome)) {
        // Extrai estado (último item após traço)
        const estado = unidade.cidade.split('-')[1]?.trim() || 'Ceará';
        suggestionsArray.push({
          nome: cidadeNome,
          cidade: estado,
          tipo: "cidade"
        });
        addedCities.add(cidadeNome);
      }
    });

    // Depois: adiciona unidades por nome
    unidades.forEach((unidade) => {
      const nomeLower = unidade.nome.toLowerCase();

      if (nomeLower.includes(lowerSearch) && !addedUnidades.has(unidade.nome)) {
        suggestionsArray.push({
          nome: unidade.nome,
          cidade: unidade.cidade,
          tipo: "unidade"
        });
        addedUnidades.add(unidade.nome);
      }
    });

    return suggestionsArray.slice(0, 8);
  }, [searchTerm]);

  // Filtra unidades baseado no termo de busca ou filtro selecionado
  const filteredUnidades = useMemo(() => {
    let filtered = unidades;

    if (selectedFilter) {
      filtered = filtered.filter((unidade) => 
        unidade.nome.toLowerCase() === selectedFilter.toLowerCase() || 
        unidade.cidade.includes(selectedFilter)
      );
    } else if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      filtered = filtered.filter((unidade) =>
        unidade.nome.toLowerCase().includes(lowerSearch) ||
        unidade.cidade.toLowerCase().includes(lowerSearch)
      );
    }

    return filtered;
  }, [searchTerm, selectedFilter]);

  return (
    <section id="unidades" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              NOSSAS UNIDADES
            </h2>
            <p className="text-2xl text-gray-300">
              Encontre a unidade mais próxima de você
            </p>
          </div>
        </ScrollReveal>

        {/* Barra de Busca */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <div className="flex items-center bg-zinc-900 border-2 border-gray-700 rounded-full px-6 py-3 focus-within:border-[#EBA730] transition-colors">
              <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por nome ou cidade..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                  setSelectedFilter(null);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilter(null);
                  }}
                  className="text-gray-500 hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sugestões */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border-2 border-[#EBA730] rounded-2xl shadow-xl z-50">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedFilter(suggestion.nome);
                      setSearchTerm("");
                      setShowSuggestions(false);
                    }}
                    className="w-full px-6 py-3 text-left hover:bg-black/50 border-b border-gray-700 last:border-b-0 transition-colors"
                  >
                    <p className="text-white font-semibold">{suggestion.nome}</p>
                    <p className="text-gray-400 text-sm">{suggestion.cidade}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Badge do filtro ativo */}
          {selectedFilter && (
            <div className="mt-4 inline-flex items-center gap-2 bg-[#EBA730]/20 border border-[#EBA730] rounded-full px-4 py-2">
              <span className="text-[#EBA730] font-semibold text-sm">Filtro: {selectedFilter}</span>
              <button
                onClick={() => setSelectedFilter(null)}
                className="text-[#EBA730] hover:text-[#FAC934] ml-1"
              >
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Grid de Unidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUnidades.length > 0 ? (
            filteredUnidades.map((unidade, idx) => (
            <ScrollReveal 
              key={idx} 
              direction="up" 
              delay={150 + (idx * 50)}
            >
              <a
                href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[#EBA730]/20 transition-all duration-300 hover:-translate-y-2 border-2 border-gray-700 hover:border-[#EBA730] cursor-pointer"
              >
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMapClick(unidade.endereco, unidade.cidade);
                      }}
                      className="flex-1 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold py-2 px-3 rounded-full text-xs transition-colors"
                    >
                      Mapa
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCallClick(unidade.telefone);
                      }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-3 rounded-full text-xs transition-colors"
                    >
                      Ligar
                    </button>
                  </div>
                </div>
              </a>
            </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">Nenhuma unidade encontrada. Tente outra busca.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
