"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "../../lib/utils";

const navItems = [
  { label: "Início", target: "inicio" },
  { label: "Planos", target: "planos" },
  { label: "Diferenciais", target: "modalidades" },
  { label: "Benefícios", target: "beneficios" },
  { label: "Unidades", target: "unidades" },
  { label: "Avaliações", target: "avaliacoes" },
  { label: "Contato", target: "contato" },
];

export default function HeaderDesktop() {
  const [isFranchiseOpen, setIsFranchiseOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsFranchiseOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsFranchiseOpen(false);
    }, 150);
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-full border border-white/10 bg-zinc-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl">
      <div className="px-8">
        <div className="flex h-16 items-center justify-between gap-8">
          <div className="flex-shrink-0">
            <div className="relative h-12 w-40">
              <Image
                src={getAssetPath("/images/logo.webp")}
                alt="Fitness Exclusive"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavigation(item.target)}
                className="rounded-full px-3 py-2 text-sm font-semibold text-zinc-200 transition duration-200 hover:bg-white/10 hover:text-[#FAC934]"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blog"
              className="inline-block rounded-full px-3 py-2 text-sm font-semibold text-zinc-200 transition duration-200 hover:bg-white/10 hover:text-[#FAC934]"
            >
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Botão Franquia com Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setIsFranchiseOpen(!isFranchiseOpen)}
                className="btn-primary px-6 py-2.5 text-sm"
              >
                Franquia
              </button>
              
              {/* Dropdown Menu */}
              {isFranchiseOpen && (
                <div className="absolute top-full mt-2 w-48 rounded-lg border border-white/10 bg-zinc-900/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
                  <Link
                    href="/investidor"
                    className="block w-full px-4 py-3 text-left text-sm font-semibold text-zinc-200 transition duration-200 hover:bg-white/10 hover:text-[#FAC934] rounded-t-lg"
                  >
                    Seja Investidor
                  </Link>
                  <Link
                    href="/franqueado"
                    className="block w-full px-4 py-3 text-left text-sm font-semibold text-zinc-200 transition duration-200 hover:bg-white/10 hover:text-[#FAC934] rounded-b-lg"
                  >
                    Seja Franqueado
                  </Link>
                </div>
              )}
            </div>

            <a
              href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 text-sm"
            >
              Matricule-se
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
