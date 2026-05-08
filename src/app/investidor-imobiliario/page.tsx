"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  Send,
  ShieldCheck,
  Store,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";
import { unidades } from "@/lib/dadosAcademia";

interface FormData {
  nome: string;
  telefone: string;
  cidade: string;
}

const whatsappNumber = "558591645383";

const heroStats = [
  { value: "60 dias", label: "para ativação operacional" },
  { value: "10 anos", label: "de contrato mínimo" },
  { value: "Receita perene", label: "com fluxo comercial recorrente" },
];

const vantagens = [
  {
    icon: WalletCards,
    title: "Renda perene",
    desc: "Modelo voltado para geração de receita estável e previsível ao longo do contrato.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia 10 anos",
    desc: "Contrato de longo prazo para dar segurança ao terreno e previsibilidade ao investidor.",
  },
  {
    icon: TrendingUp,
    title: "Investimento com segurança e rentabilidade",
    desc: "Operação estruturada para unir proteção contratual, fluxo de pessoas e potencial comercial.",
  },
  {
    icon: Building2,
    title: "Marca consolidada",
    desc: "Rede fitness em expansão, com unidades em operação e experiência no mercado regional.",
  },
];

const modeloComercial = [
  {
    icon: Clock3,
    title: "60 dias para ativação operacional da academia",
    desc: "Agilidade na implantação e início rápido das atividades, garantindo retorno acelerado para o investidor e movimentação imediata no local.",
  },
  {
    icon: CalendarCheck,
    title: "Contrato mínimo de 10 anos",
    desc: "Estabilidade e segurança para o terreno, com garantias de operação a longo prazo.",
  },
  {
    icon: Store,
    title: "Lojas de alto retorno",
    desc: "Lojas integradas ao complexo são escolhidas com foco em rentabilidade e sinergia com o público da academia.",
  },
  {
    icon: WalletCards,
    title: "Renda perene por pelo menos 10 anos",
    desc: "Estrutura jurídica e comercial voltada para garantir receitas estáveis e duradouras.",
  },
  {
    icon: MapPin,
    title: "Alta comodidade e conveniência",
    desc: "Empreendimento moderno, que agrega valor ao bairro e oferece soluções completas ao público frequentador.",
  },
  {
    icon: Zap,
    title: "Geração de tráfego intenso",
    desc: "O fluxo contínuo de clientes da academia impulsiona o consumo nas lojas e cria um ecossistema comercial vibrante.",
  },
];

const heroUnit = unidades.find((unidade) => unidade.nome === "Barbalha") ?? unidades[0];
const premiumUnit = unidades.find((unidade) => unidade.nome === "Premium") ?? unidades[0];

function buildWhatsAppUrl(formData: FormData) {
  const mensagem = `Olá! Tenho interesse na oportunidade de investidor imobiliário da Fitness Exclusive.

Nome: ${formData.nome}
Telefone: ${formData.telefone}
Cidade de interesse: ${formData.cidade}`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
}

export default function InvestidorImobiliario() {
  const [formData, setFormData] = useState<FormData>({ nome: "", telefone: "", cidade: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const whatsappUrl = buildWhatsAppUrl(formData);

    try {
      const response = await fetch("/salvar-lead.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();

        if (!result.success) {
          console.error("Falha ao registrar lead de investidor:", result.error);
        }
      }
    } catch (error) {
      console.error("Erro ao registrar lead de investidor:", error);
    } finally {
      setLoading(false);
      setEnviado(true);
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 w-full bg-black/85 backdrop-blur-md border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Você investe e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAC934] to-[#EBA730]">
                nós operamos
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Imagine um espaço onde saúde, bem-estar e comércio se encontram de forma
              estratégica e rentável. Nosso projeto une academias de alto padrão e lojas
              cuidadosamente selecionadas em um polo comercial com grande potencial de tráfego
              e receita perene.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-9 border-y border-white/10 py-5">
              {heroStats.map((stat) => (
                <div key={stat.value}>
                  <p className="text-[#FAC934] font-black text-xl">{stat.value}</p>
                  <p className="text-gray-400 text-xs leading-relaxed mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 bg-[#FAC934] hover:bg-[#EBA730] text-black font-bold px-8 py-4 rounded-lg transition-colors duration-300 text-base"
              >
                <Send className="w-4 h-4" />
                Tenho interesse
              </a>
              <a
                href="#unidades"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/15 hover:border-white/25 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-300 text-base"
              >
                Ver unidades
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-zinc-900"
          >
            <Image
              src={heroUnit.desktop}
              alt={heroUnit.nome}
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-3xl font-black text-white">{heroUnit.nome}</p>
              <p className="text-sm text-gray-300 mt-1">{heroUnit.cidade}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="modelo" className="py-24 border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
                Um polo de saúde, conveniência e consumo recorrente
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                O complexo nasce para movimentar o imóvel todos os dias: academia como âncora
                de tráfego, lojas com sinergia de público e operação conduzida pela Fitness
                Exclusive para criar valor ao bairro e ao investidor.
              </p>

              <div className="mt-10 overflow-hidden rounded-lg border border-white/10">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={premiumUnit.desktop}
                    alt={premiumUnit.nome}
                    fill
                    sizes="(min-width: 1024px) 420px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-black text-white">{premiumUnit.nome}</h3>
                    <p className="mt-1 text-sm text-gray-300">{premiumUnit.cidade}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-gray-400">
                    Uma referência visual do padrão de estrutura e presença comercial aplicado
                    às oportunidades para novos investidores.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {modeloComercial.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="border border-white/10 hover:border-[#FAC934]/30 rounded-lg p-5 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FAC934]/10 border border-[#FAC934]/20 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#FAC934]" />
                  </div>
                  <h3 className="font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">Por que investir conosco</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Um formato pensado para transformar imóveis estratégicos em operações de longo prazo.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vantagens.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group border border-white/10 hover:border-[#FAC934]/30 rounded-lg p-6 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAC934]/10 border border-[#FAC934]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#FAC934]" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="unidades" className="py-24 border-t border-white/5 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <div>
              <h2 className="text-4xl font-black text-white mb-4">Referências para o investidor</h2>
              <p className="text-gray-400 max-w-2xl">
                Imagens de unidades Fitness Exclusive ajudam a visualizar o padrão de estrutura,
                presença urbana e experiência que o projeto leva para novos pontos comerciais.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {unidades.map((unidade, i) => (
              <motion.div
                key={unidade.nome}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                viewport={{ once: true }}
                className="group border border-white/10 hover:border-[#FAC934]/25 rounded-lg overflow-hidden transition-colors duration-300"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={unidade.desktop}
                    alt={unidade.nome}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <p className="font-bold text-[#FAC934] mb-1">{unidade.nome}</p>
                  <p className="text-gray-300 text-sm">{unidade.endereco}</p>
                  <p className="text-gray-500 text-xs mt-1">{unidade.cidade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5">Fale com nosso time</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Preencha seus dados para iniciar a conversa pelo WhatsApp e receber os detalhes da
              oportunidade para investidores imobiliários.
            </p>

            <div className="space-y-4">
              {[
                "Operação conduzida pela Fitness Exclusive.",
                "Projeto com academia âncora e lojas selecionadas.",
                "Contrato de longo prazo para previsibilidade de receita.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#FAC934] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 border border-white/10 rounded-lg p-6 md:p-8"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-[#FAC934]/60 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
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
                className="w-full bg-white/5 border border-white/10 focus:border-[#FAC934]/60 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                placeholder="(85) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cidade de interesse</label>
              <input
                type="text"
                required
                value={formData.cidade}
                onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-[#FAC934]/60 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors text-sm"
                placeholder="Ex: Fortaleza, Juazeiro do Norte..."
              />
            </div>

            {enviado && (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <p className="text-emerald-300 text-sm">Dados enviados. Encaminhando para o WhatsApp.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#FAC934] hover:bg-[#EBA730] disabled:opacity-60 text-black font-bold py-4 rounded-lg transition-colors duration-300 text-base mt-2"
            >
              <Send className="w-4 h-4" />
              {loading ? "Enviando..." : "Enviar e falar no WhatsApp"}
            </button>

            <p className="text-gray-500 text-xs text-center mt-4">
              Você será encaminhado ao WhatsApp +55 85 9164-5383 após preencher o formulário.
            </p>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fitness Exclusive. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
