"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TrendingUp, Shield, DollarSign, ArrowRight, Rocket } from "lucide-react";

const beneficios = [
  { icon: DollarSign, label: "Renda Perene", desc: "Retorno mensal previsível e estável" },
  { icon: Shield, label: "Garantia 10 Anos", desc: "Contrato com cláusulas de proteção" },
  { icon: TrendingUp, label: "Marca Sólida", desc: "Consolidada no mercado fitness" },
];

export default function SejaInvestidor() {
  return (
    <section className="relative py-28 bg-zinc-950 overflow-hidden">
      {/* Linha superior decorativa */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/40 to-transparent" />

      {/* Blobs de fundo sutis */}
      <div className="absolute -top-32 right-0 w-80 h-80 bg-[#FAC934]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-0 w-80 h-80 bg-[#EBA730]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge centralizado */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-[#FAC934]/10 border border-[#FAC934]/30 text-[#FAC934] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <Rocket className="w-3.5 h-3.5" />
            Oportunidade de Investimento
          </span>
        </motion.div>

        {/* Título centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
            Seja um{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC934] to-[#EBA730]">
              Investidor
            </span>{" "}
            Parceiro
          </h2>
        </motion.div>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-lg max-w-xl mx-auto mb-16"
        >
          Invista em unidades operacionais com infraestrutura completa, gestão profissional e renda garantida por contrato.
        </motion.p>

        {/* Cards de benefícios */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {beneficios.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 + 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white/[0.03] border border-white/8 hover:border-[#FAC934]/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FAC934]/10 border border-[#FAC934]/20 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#FAC934]" />
              </div>
              <p className="font-bold text-white mb-1">{item.label}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/investidor"
            className="inline-flex items-center gap-3 bg-[#FAC934] hover:bg-[#EBA730] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FAC934]/20 text-base"
          >
            Quero ser um Investidor
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      {/* Linha inferior decorativa */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#EBA730]/20 to-transparent" />
    </section>
  );
}
