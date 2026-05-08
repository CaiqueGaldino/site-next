"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Clock, MapPin, Phone, Search, X } from "lucide-react";
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

  const suggestions = useMemo(() => {
    if (!searchTerm.trim()) return [];

    const lowerSearch = searchTerm.toLowerCase();
    const suggestionsArray: { nome: string; cidade: string; tipo: "cidade" | "unidade" }[] = [];
    const addedCities = new Set<string>();
    const addedUnidades = new Set<string>();

    unidades.forEach((unidade) => {
      const cidadeLower = unidade.cidade.toLowerCase();
      const cidadeNome = unidade.cidade.split(",")[1]?.split("-")[0]?.trim() || unidade.cidade;

      if (cidadeLower.includes(lowerSearch) && !addedCities.has(cidadeNome)) {
        const estado = unidade.cidade.split("-")[1]?.trim() || "Ceará";
        suggestionsArray.push({
          nome: cidadeNome,
          cidade: estado,
          tipo: "cidade",
        });
        addedCities.add(cidadeNome);
      }
    });

    unidades.forEach((unidade) => {
      const nomeLower = unidade.nome.toLowerCase();

      if (nomeLower.includes(lowerSearch) && !addedUnidades.has(unidade.nome)) {
        suggestionsArray.push({
          nome: unidade.nome,
          cidade: unidade.cidade,
          tipo: "unidade",
        });
        addedUnidades.add(unidade.nome);
      }
    });

    return suggestionsArray.slice(0, 8);
  }, [searchTerm]);

  const filteredUnidades = useMemo(() => {
    if (selectedFilter) {
      const lowerFilter = selectedFilter.toLowerCase();
      return unidades.filter(
        (unidade) =>
          unidade.nome.toLowerCase() === lowerFilter ||
          unidade.cidade.toLowerCase().includes(lowerFilter),
      );
    }

    if (searchTerm.trim()) {
      const lowerSearch = searchTerm.toLowerCase();
      return unidades.filter(
        (unidade) =>
          unidade.nome.toLowerCase().includes(lowerSearch) ||
          unidade.cidade.toLowerCase().includes(lowerSearch),
      );
    }

    return unidades;
  }, [searchTerm, selectedFilter]);

  return (
    <section id="unidades" className="bg-black py-24">
      <div className="section-shell">
        <ScrollReveal direction="fade" delay={100}>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="section-title">
              Encontre a Fitness Exclusive mais perto de você
            </h2>
            <p className="section-copy mx-auto mt-5 max-w-2xl">
              Busque por cidade ou unidade e veja endereço, telefone e horários
              de funcionamento.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto mb-12 max-w-2xl">
          <div className="relative">
            <div className="flex items-center rounded-full border border-white/10 bg-zinc-950 px-5 py-3.5 shadow-2xl shadow-black/20 transition focus-within:border-[#EBA730]/70">
              <Search className="mr-3 h-5 w-5 flex-shrink-0 text-[#FAC934]" />
              <input
                type="text"
                placeholder="Buscar por nome ou cidade..."
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setShowSuggestions(true);
                  setSelectedFilter(null);
                }}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                className="flex-1 bg-transparent text-white placeholder:text-zinc-500 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedFilter(null);
                  }}
                  className="rounded-full p-1 text-zinc-500 transition hover:bg-white/10 hover:text-white"
                  aria-label="Limpar busca"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-[#EBA730]/45 bg-zinc-950 shadow-2xl shadow-black/40">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={`${suggestion.nome}-${index}`}
                    onClick={() => {
                      setSelectedFilter(suggestion.nome);
                      setSearchTerm("");
                      setShowSuggestions(false);
                    }}
                    className="w-full border-b border-white/10 px-5 py-3 text-left transition last:border-b-0 hover:bg-white/10"
                  >
                    <p className="font-semibold text-white">{suggestion.nome}</p>
                    <p className="mt-0.5 text-sm text-zinc-400">{suggestion.cidade}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedFilter && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#EBA730]/45 bg-[#EBA730]/10 px-4 py-2">
              <span className="text-sm font-semibold text-[#FAC934]">
                Filtro: {selectedFilter}
              </span>
              <button
                onClick={() => setSelectedFilter(null)}
                className="rounded-full p-1 text-[#FAC934] transition hover:bg-[#EBA730]/20"
                aria-label="Remover filtro"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredUnidades.length > 0 ? (
            filteredUnidades.map((unidade, index) => (
              <ScrollReveal
                key={`${unidade.nome}-${index}`}
                direction="up"
                delay={150 + index * 50}
              >
                <article className="brand-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-[#EBA730]/45">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={unidade.desktop}
                      alt={unidade.nome}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold text-white">
                      {unidade.nome}
                    </h3>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FAC934]" />
                        <div>
                          <p className="text-sm leading-relaxed text-zinc-300">
                            {unidade.endereco}
                          </p>
                          <p className="text-xs text-zinc-500">{unidade.cidade}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 flex-shrink-0 text-[#FAC934]" />
                        <p className="text-sm text-zinc-300">{unidade.telefone}</p>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FAC934]" />
                        <p className="text-xs leading-relaxed text-zinc-400">
                          {unidade.horarios}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto grid grid-cols-3 gap-2 pt-5">
                      <a
                        href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-3 rounded-full bg-gradient-to-r from-[#EBA730] to-[#FAC934] px-3 py-2.5 text-center text-xs font-extrabold text-black transition hover:from-[#FAC934] hover:to-[#EBA730]"
                      >
                        Matricular nesta unidade
                      </a>
                      <button
                        onClick={() => handleMapClick(unidade.endereco, unidade.cidade)}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-zinc-200 transition hover:border-[#EBA730]/45 hover:text-[#FAC934]"
                      >
                        Mapa
                      </button>
                      <button
                        onClick={() => handleCallClick(unidade.telefone)}
                        className="col-span-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-zinc-200 transition hover:border-[#EBA730]/45 hover:text-[#FAC934]"
                      >
                        Ligar
                      </button>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))
          ) : (
            <div className="col-span-full rounded-lg border border-white/10 bg-zinc-950 p-10 text-center">
              <p className="text-lg text-zinc-400">
                Nenhuma unidade encontrada. Tente outra busca.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
