"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Shield, DollarSign, ArrowRight, Rocket } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";

const beneficios = [
  { icon: DollarSign, label: "Renda Perene", desc: "Retorno mensal previsível" },
  { icon: Shield, label: "10 Anos de Garantia", desc: "Contrato com proteção" },
  { icon: TrendingUp, label: "Gestão Profissional", desc: "Sem preocupação operacional" },
];

export default function SejaInvestidorMobile() {
  return (
    <section className="relative py-16 px-4 bg-zinc-950 overflow-hidden">
      {/* Linhas decorativas */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/40 to-transparent" />
      <div className="absolute -top-24 right-0 w-56 h-56 bg-[#FAC934]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 bg-[#FAC934]/10 border border-[#FAC934]/30 text-[#FAC934] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Rocket className="w-3 h-3" />
            Investimento Premium
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl font-black text-white mb-3 leading-tight">
            Seja um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC934] to-[#EBA730]">
              Investidor
            </span>{" "}
            Parceiro
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
            Invista em unidades operacionais com renda garantida por contrato.
          </p>
        </motion.div>

        {/* Cards de benefícios */}
        <div className="space-y-3 mb-8 mt-8">
          {beneficios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 bg-white/[0.03] border border-white/8 rounded-2xl p-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#FAC934]/10 border border-[#FAC934]/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-[#FAC934]" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">{item.label}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/investidor"
            onClick={() => hapticFeedback("medium")}
            className="flex items-center justify-center gap-2 w-full bg-[#FAC934] active:bg-[#EBA730] text-black font-bold py-4 rounded-full transition-all active:scale-95 touch-manipulation shadow-lg shadow-[#FAC934]/20 text-base"
          >
            Quero ser um Investidor
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/20 to-transparent" />
    </section>
  );
}
