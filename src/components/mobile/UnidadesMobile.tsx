"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { unidades } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";

export default function UnidadesMobile() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleMapClick = (endereco: string, cidade: string) => {
    const query = encodeURIComponent(`${endereco}, ${cidade}`);
    window.open(`https://maps.google.com/maps?q=${query}`, "_blank");
    hapticFeedback('light');
  };

  const handleCallClick = (telefone: string) => {
    window.location.href = `tel:${telefone.replace(/\D/g, "")}`;
    hapticFeedback('medium');
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
    <section id="unidades" className="bg-zinc-950 py-12">
      <div className="px-4">
        <div className="mb-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
            Unidades
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white">
            Encontre a unidade mais próxima
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            Busque por nome ou cidade e veja os dados essenciais para chegar até a Fitness Exclusive.
          </p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <div className="flex items-center rounded-lg border border-white/10 bg-black px-4 py-3 transition-colors focus-within:border-[#EBA730]">
              <svg className="w-5 h-5 text-gray-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowSuggestions(true);
                  setSelectedFilter(null);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilter(null);
                  }}
                  className="text-gray-500 hover:text-gray-300 ml-2"
                >
                  ×
                </button>
              )}
            </div>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-[#EBA730]/40 bg-zinc-950 shadow-xl">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedFilter(suggestion.nome);
                      setSearchTerm("");
                      setShowSuggestions(false);
                      hapticFeedback('light');
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-black/50 border-b border-gray-700 last:border-b-0 transition-colors active:bg-black/70"
                  >
                    <p className="text-white font-semibold text-sm">{suggestion.nome}</p>
                    <p className="text-gray-400 text-xs">{suggestion.cidade}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedFilter && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[#EBA730]/40 bg-[#EBA730]/10 px-3 py-1.5">
              <span className="text-[#EBA730] font-semibold text-xs">Filtro: {selectedFilter}</span>
              <button
                onClick={() => setSelectedFilter(null)}
                className="text-[#EBA730] hover:text-[#FAC934]"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {filteredUnidades.length > 0 ? (
            filteredUnidades.map((unidade, idx) => (
              <a
                key={idx}
                href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black transition-colors duration-300 hover:border-[#EBA730]"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={unidade.mobile || unidade.desktop}
                    alt={unidade.nome}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-3">
                    {unidade.nome}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-300">{unidade.endereco}</p>
                        <p className="text-gray-400 text-xs">{unidade.cidade}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p className="text-gray-300">{unidade.telefone}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#EBA730] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-gray-300 text-xs">{unidade.horarios}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleMapClick(unidade.endereco, unidade.cidade);
                      }}
                      className="flex-1 rounded-lg bg-[#FAC934] py-2 text-xs font-bold text-black transition-colors active:scale-95 hover:bg-[#EBA730]"
                    >
                      Mapa
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleCallClick(unidade.telefone);
                      }}
                      className="flex-1 rounded-lg border border-white/10 bg-zinc-900 py-2 text-xs font-bold text-white transition-colors active:scale-95 hover:bg-zinc-800"
                    >
                      Ligar
                    </button>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">Nenhuma unidade encontrada.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
