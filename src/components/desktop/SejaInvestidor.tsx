"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  GraduationCap,
  Shield,
  Target,
  TrendingUp,
} from "lucide-react";

const investidor = [
  { icon: Shield, label: "Contrato de longo prazo" },
  { icon: TrendingUp, label: "Renda recorrente" },
  { icon: Building2, label: "Operação conduzida pela Exclusive" },
];

const franqueado = [
  { icon: GraduationCap, label: "Universidade Exclusive" },
  { icon: Target, label: "Metodologia comprovada" },
  { icon: BadgeCheck, label: "20 anos de experiência" },
];

export default function SejaInvestidor() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/20 to-transparent" />

      <div className="section-shell relative">
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="bg-black p-8 lg:p-10"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
              Investidor imobiliário
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white lg:text-4xl">
              Você investe e <span className="gold-gradient-text">nós operamos</span>
            </h2>
            <p className="section-copy mt-5 max-w-xl">
              Invista em unidades operacionais com estrutura comercial,
              implantação ágil e renda prevista por contrato.
            </p>

            <div className="mt-8 space-y-3">
              {investidor.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-zinc-300">
                  <item.icon className="h-4 w-4 flex-shrink-0 text-[#FAC934]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <Link href="/investidor-imobiliario" className="btn-primary mt-9">
              Quero investir
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55 }}
            viewport={{ once: true }}
            className="bg-zinc-950 p-8 lg:p-10 lg:text-right"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
              Franquia
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-white lg:text-4xl">
              Seja nosso <span className="gold-gradient-text">franqueado</span>
            </h2>
            <p className="section-copy mt-5 lg:ml-auto lg:max-w-xl">
              Te ensinamos como operar uma academia por no mínimo 10 anos,
              com negócio pronto e foco em performance, gestão e resultado.
            </p>

            <div className="mt-8 space-y-3">
              {franqueado.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-zinc-300 lg:flex-row-reverse"
                >
                  <item.icon className="h-4 w-4 flex-shrink-0 text-[#FAC934]" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <Link href="/franqueado" className="btn-primary mt-9 lg:ml-auto">
              Quero ser franqueado
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
