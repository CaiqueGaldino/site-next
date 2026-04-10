"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Building2,
  MapPin,
  Shield,
  Zap,
  Smartphone,
  ArrowLeft,
  CheckCircle2,
  Rocket,
  Users,
  DollarSign,
  TrendingUp,
  ArrowRight,
  Send,
} from "lucide-react";
import { unidades } from "@/lib/dadosAcademia";

interface FormData {
  nome: string;
  telefone: string;
  cidade: string;
}

const estrutura = [
  { icon: Building2, title: "Espaço Amplo", description: "750m² principal + 330m² de estacionamento" },
  { icon: MapPin, title: "Localização Estratégica", description: "Avenidas principais com fácil acesso" },
  { icon: Smartphone, title: "Transporte Público", description: "Área com transporte de qualidade" },
  { icon: Shield, title: "Segurança", description: "Bairros com baixa criminalidade" },
  { icon: Users, title: "Alta Densidade", description: "Mín. 2.500 habitantes/km²" },
  { icon: Zap, title: "Capacidade Elétrica", description: "Rede elétrica para operação completa" },
  { icon: MapPin, title: "Zona Residencial", description: "Área residencial ou comercial consolidada" },
  { icon: Building2, title: "Estacionamento", description: "Mín. 20 vagas para carros e 30 para motos" },
];

const vantagens = [
  { icon: DollarSign, title: "Renda Perene", desc: "Fluxo de caixa mensal previsível e estável." },
  { icon: Shield, title: "Garantia 10 Anos", desc: "Contrato com cláusulas de proteção de receita." },
  { icon: TrendingUp, title: "Gestão Profissional", desc: "Equipe especializada cuida de toda operação." },
  { icon: CheckCircle2, title: "Marca Consolidada", desc: "Reconhecimento sólido no mercado fitness." },
];

export default function Investidor() {
  const [formData, setFormData] = useState<FormData>({ nome: "", telefone: "", cidade: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/salvar-lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        const mensagem = `Olá! Tenho interesse em investir na Fitness Exclusive!\n\nNome: ${formData.nome}\nTelefone: ${formData.telefone}\nCidade de interesse: ${formData.cidade}`;
        window.open(`https://wa.me/5588992637523?text=${encodeURIComponent(mensagem)}`, "_blank");
        setFormData({ nome: "", telefone: "", cidade: "" });
        setEnviado(true);
        setTimeout(() => setEnviado(false), 5000);
      } else {
        alert(`Erro: ${result.error || "Falha ao registrar interesse"}`);
      }
    } catch {
      alert("Erro ao registrar seu interesse. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-zinc-950/90 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao site
          </Link>
          <span className="text-base font-bold text-[#FAC934]">Fitness Exclusive</span>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAC934]/6 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#EBA730]/30 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-[#FAC934]/10 border border-[#FAC934]/30 text-[#FAC934] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <Rocket className="w-3.5 h-3.5" />
              Investidor Parceiro
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
          >
            Investimento{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC934] to-[#EBA730]">
              Premium
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Invista em unidades operacionais da Fitness Exclusive com infraestrutura completa,
            gestão profissional e renda perene garantida por contrato.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 bg-[#FAC934] hover:bg-[#EBA730] text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-[#FAC934]/20 text-base"
            >
              <Send className="w-4 h-4" />
              Tenho Interesse
            </a>
            <a
              href="#estrutura"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-base"
            >
              Saiba mais
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── VANTAGENS ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Por que investir conosco</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Investimento seguro com retorno consistente e suporte total da nossa equipe
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vantagens.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#FAC934]/30 rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.05]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAC934]/10 border border-[#FAC934]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#FAC934]" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTRUTURA ── */}
      <section id="estrutura" className="py-24 border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Requisitos de Espaço</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Critérios cuidadosamente definidos para garantir o sucesso de cada unidade
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {estrutura.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 bg-white/[0.03] border border-white/8 hover:border-[#FAC934]/25 rounded-xl p-5 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FAC934]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-[#FAC934]" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm mb-1">{item.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UNIDADES ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Nossas Unidades</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Unidades operacionais em cidades estratégicas, já gerando resultados
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {unidades.map((unidade, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                viewport={{ once: true }}
                className="group bg-white/[0.03] border border-white/8 hover:border-[#FAC934]/25 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={unidade.desktop}
                    alt={unidade.nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-[#FAC934] mb-1">{unidade.nome}</p>
                  <p className="text-gray-400 text-sm">{unidade.endereco}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{unidade.cidade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <section id="formulario" className="py-24 border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-[#FAC934]/10 border border-[#FAC934]/30 text-[#FAC934] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                <Send className="w-3 h-3" />
                Registre seu interesse
              </span>
              <h2 className="text-4xl font-black text-white mb-3 mt-4">Fale Conosco</h2>
              <p className="text-gray-400">
                Preencha abaixo e entraremos em contato com detalhes exclusivos sobre o investimento
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#FAC934]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#FAC934]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                  placeholder="(88) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Cidade de Interesse</label>
                <input
                  type="text"
                  required
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-[#FAC934]/60 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                  placeholder="Ex: Juazeiro do Norte, Fortaleza..."
                />
              </div>

              {enviado && (
                <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-emerald-300 text-sm">Obrigado! Em breve entraremos em contato.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FAC934] hover:bg-[#EBA730] disabled:opacity-60 text-black font-bold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] text-base shadow-lg shadow-[#FAC934]/20 mt-2"
              >
                {loading ? "Enviando..." : "Enviar Interesse"}
              </button>

              <p className="text-gray-500 text-xs text-center mt-4">
                Você será redirecionado ao WhatsApp após o envio
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fitness Exclusive. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
