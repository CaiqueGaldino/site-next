"use client";

import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Award } from "lucide-react";

export default function Marquee() {
  const items = [
    { icon: Building2, text: "Planos Corporativos Exclusivos" },
    { icon: Users, text: "Saúde e Bem-estar para sua Equipe" },
    { icon: TrendingUp, text: "Aumente a Produtividade" },
    { icon: Award, text: "Descontos Especiais para Empresas" },
    { icon: Building2, text: "13 Unidades Disponíveis" },
    { icon: Users, text: "Retenção de Talentos" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#EBA730] to-[#FAC934] py-8">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-black/10" />
      
      <div className="relative">
        {/* Marquee wrapper */}
        <div className="flex">
          {/* First set */}
          <motion.div
            className="flex gap-12 pr-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {items.map((item, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <item.icon className="w-6 h-6 text-black" />
                <span className="text-xl font-bold text-black">
                  {item.text}
                </span>
                <span className="text-3xl text-black/30">•</span>
              </div>
            ))}
          </motion.div>

          {/* Second set (duplicate for seamless loop) */}
          <motion.div
            className="flex gap-12 pr-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {items.map((item, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <item.icon className="w-6 h-6 text-black" />
                <span className="text-xl font-bold text-black">
                  {item.text}
                </span>
                <span className="text-3xl text-black/30">•</span>
              </div>
            ))}
          </motion.div>

          {/* Third set (another duplicate for smooth scrolling) */}
          <motion.div
            className="flex gap-12 pr-12"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {items.map((item, index) => (
              <div
                key={`third-${index}`}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <item.icon className="w-6 h-6 text-black" />
                <span className="text-xl font-bold text-black">
                  {item.text}
                </span>
                <span className="text-3xl text-black/30">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative mt-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
          Transforme a Saúde da Sua Empresa
        </h3>
        <p className="text-base md:text-lg text-black/80 mb-6 max-w-2xl mx-auto px-4">
          Planos corporativos com condições especiais para empresas de todos os tamanhos
        </p>
        <a
          href={`https://wa.me/5588992637523?text=${encodeURIComponent(
            "Olá! Gostaria de saber mais sobre os planos corporativos da Fitness Exclusive."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-[#EBA730] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          <Users className="w-6 h-6" />
          Solicitar Proposta Corporativa
        </a>
      </div>
    </section>
  );
}
