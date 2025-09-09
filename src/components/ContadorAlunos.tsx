"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContadorAlunos() {
  const [stats, setStats] = useState({
    alunos: 0,
    unidades: 0,
    treinadores: 0,
    anos: 0,
  });

  const finalStats = {
    alunos: 2847,
    unidades: 10,
    treinadores: 45,
    anos: 8,
  };

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
  }, []);

  const estatisticas = [
    {
      numero: stats.alunos.toLocaleString(),
      label: "Alunos Ativos",
      icone: "👥",
      cor: "text-yellow-400"
    },
    {
      numero: stats.unidades,
      label: "Unidades",
      icone: "🏢",
      cor: "text-green-400"
    },
    {
      numero: stats.treinadores,
      label: "Treinadores",
      icone: "💪",
      cor: "text-blue-400"
    },
    {
      numero: stats.anos,
      label: "Anos de Experiência",
      icone: "⭐",
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
              <div className="text-center bg-zinc-900 rounded-3xl p-8 border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{stat.icone}</div>
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
            <div className="bg-zinc-900 rounded-3xl p-8 border-2 border-yellow-400 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏆 Conquiste Seus Objetivos Conosco!
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Faça parte da maior rede de academias da região e transforme sua vida!
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-full shadow-lg transition-all transform hover:scale-105 text-lg">
                Comece Hoje Mesmo
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
