"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, GraduationCap, Target } from "lucide-react";
import { hapticFeedback } from "../../lib/mobileUtils";

const beneficios = [
  {
    icon: GraduationCap,
    label: "Universidade Exclusive",
    desc: "Treinamento presencial para operar com segurança.",
  },
  {
    icon: Target,
    label: "Metodologia comprovada",
    desc: "Planos por objetivo e atendimento especializado.",
  },
  {
    icon: BadgeCheck,
    label: "Marca consolidada",
    desc: "20 anos de experiência no mercado fitness.",
  },
];

export default function SejaFranqueadoMobile() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-14">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="mb-7"
      >
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#FAC934]">
          Franquia
        </p>
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white">
          Seja nosso <span className="gold-gradient-text">franqueado</span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Entregamos o negócio pronto para você operar com foco em performance,
          gestão e resultado.
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
            className="flex items-center gap-4 rounded-lg border border-white/10 bg-zinc-950 p-4"
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
        href="/franqueado"
        onClick={() => hapticFeedback("medium")}
        className="btn-primary w-full py-4 text-base active:scale-95"
      >
        Quero ser franqueado
        <ArrowRight className="h-5 w-5" />
      </Link>
    </section>
  );
}
