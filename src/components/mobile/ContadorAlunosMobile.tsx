"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { getAssetPath } from "../../lib/utils";

export default function ContadorAlunosMobile() {
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
    const duration = 2000;
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
    },
    {
      numero: stats.unidades,
      label: "Unidades",
      icone: getAssetPath("/images/icones/unidades.png"),
    },
    {
      numero: stats.treinadores,
      label: "Treinadores",
      icone: getAssetPath("/images/icones/treinadores.png"),
    },
    {
      numero: stats.anos,
      label: "Anos",
      icone: getAssetPath("/images/icones/experiencia.png"),
    }
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @property --border-angle-stats {
          syntax: "<angle>";
          inherits: true;
          initial-value: 0deg;
        }

        @keyframes border-spin-stats {
          100% {
            --border-angle-stats: 360deg;
          }
        }

        .animate-border-stats {
          animation: border-spin-stats 6s linear infinite;
        }
      `}} />
      
      <section className="py-8 px-4 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="animate-border-stats"
          style={{
            background: 'linear-gradient(45deg, #000, rgb(24 24 27) 50%, #000) padding-box, conic-gradient(from var(--border-angle-stats), rgba(255,255,255,0.2) 80%, rgb(250 204 21) 86%, #EBA730 90%, #FAC934 94%, rgba(255,255,255,0.2)) border-box',
            borderRadius: '1rem',
            border: '2px solid transparent'
          }}
        >
          <div className="bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 shadow-2xl">
            {/* Título */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black text-white mb-2">
                Números que Impressionam
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-[#EBA730]"></div>
                <BarChart3 className="w-5 h-5 text-[#EBA730]" />
                <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-[#FAC934]"></div>
              </div>
            </div>

        {/* Grid de Estatísticas */}
        <div className="grid grid-cols-2 gap-4">
          {estatisticas.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="bg-black/50 rounded-xl p-4 border border-[#EBA730]/20 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 mb-2">
                  <Image
                    src={stat.icone}
                    alt={stat.label}
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-3xl font-black text-white">
                  {stat.numero}
                </div>
                <p className="text-gray-400 text-xs font-medium text-center mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
