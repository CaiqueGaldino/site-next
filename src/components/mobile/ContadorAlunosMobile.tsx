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

  return null;
}
