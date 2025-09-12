"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { getAssetPath } from "../lib/utils";

export default function ContadorAlunos() {
  const [stats, setStats] = useState({
    alunos: 0,
    unidades: 0,
    treinadores: 0,
    anos: 0,
  });

  const finalStats = useMemo(() => ({
    alunos: 2847,
    unidades: 10,
    treinadores: 45,
    anos: 8,
  }), []);

  useEffect(() => {
    const duration = 2000; // 2 segundos
    const steps = 60;
    let currentStep = 0;

    const increments = {
      alunos: finalStats.alunos / steps,
      unidades: finalStats.unidades / steps,
      treinadores: finalStats.treinadores / steps,
      anos: finalStats.anos / steps,
    };

    const timer = setInterval(() => {
      currentStep++;
      
      setStats({
        alunos: Math.floor(increments.alunos * currentStep),
        unidades: Math.floor(increments.unidades * currentStep),
        treinadores: Math.floor(increments.treinadores * currentStep),
        anos: Math.floor(increments.anos * currentStep),
      });

      if (currentStep >= steps) {
        setStats(finalStats);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [finalStats]);

  const estatisticas = [
    {
      numero: stats.alunos.toLocaleString(),
      label: "Alunos Ativos",
      icone: getAssetPath("/images/icones/alunos.png"),
      cor: "bg-gradient-to-r from-[#EBA730] to-[#FAC934] bg-clip-text text-transparent"
    },
    {
      numero: stats.unidades,
      label: "Unidades",
      icone: getAssetPath("/images/icones/unidades.png"),
      cor: "text-green-400"
    },
    {
      numero: stats.treinadores,
      label: "Treinadores",
      icone: getAssetPath("/images/icones/treinadores.png"),
      cor: "text-blue-400"
    },
    {
      numero: stats.anos,
      label: "Anos de Experiência",
      icone: getAssetPath("/images/icones/experiencia.png"),
      cor: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="fade" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-4">
              Números que Impressionam
            </h2>
            <p className="text-xl text-gray-300">
              Resultados que falam por si só
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              delay={150 + (index * 75)}
            >
              <div className="text-center bg-zinc-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-gradient-to-r hover:from-[#EBA730] hover:to-[#FAC934] transition-all duration-300 hover:-translate-y-2">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16">
                    <Image
                      src={stat.icone}
                      alt={stat.label}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className={`text-4xl font-black mb-2 ${stat.cor}`}>
                  {stat.numero}
                </div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-16">
            <div className="bg-zinc-900 rounded-3xl p-8 border-2 border-gradient-to-r from-[#EBA730] to-[#FAC934] max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏆 Conquiste Seus Objetivos Conosco!
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Faça parte da maior rede de academias da região e transforme sua vida!
              </p>
              <button className="bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg">
                Comece Hoje Mesmo
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
