"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, DollarSign, Shield, TrendingUp } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";

const beneficios = [
  { icon: DollarSign, label: "Renda perene", desc: "Retorno mensal previsível" },
  { icon: Shield, label: "Contrato de 10 anos", desc: "Segurança para o seu terreno" },
  { icon: TrendingUp, label: "Operação Exclusive", desc: "Você investe e nós operamos" },
];

export default function SejaInvestidorMobile() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 px-4 py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/35 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="mb-7"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
          Investidor
        </p>
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white">
          Seja um <span className="gold-gradient-text">investidor</span> parceiro
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Invista em unidades operacionais com segurança contratual e operação
          conduzida pela Fitness Exclusive.
        </p>
      </motion.div>

      <div className="mb-7 space-y-3">
        {beneficios.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 rounded-lg border border-white/10 bg-black p-4"
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#FAC934]/25 bg-[#FAC934]/10 text-[#FAC934]">
              <item.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-white">
                {item.label}
              </p>
              <p className="text-xs leading-relaxed text-zinc-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Link
        href="/investidor-imobiliario"
        onClick={() => hapticFeedback("medium")}
        className="btn-primary w-full py-4 text-base active:scale-95"
      >
        Quero ser investidor
        <ArrowRight className="h-5 w-5" />
      </Link>
    </section>
  );
}
