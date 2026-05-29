"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Handshake,
  MapPin,
  Rocket,
  Send,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { unidades } from "@/lib/dadosAcademia";

interface FormData {
  nome: string;
  telefone: string;
  cidade: string;
}

const indicadores = [
  { value: "20 anos", label: "de experiência no mercado fitness" },
  { value: "13+", label: "unidades em operação no Nordeste" },
  { value: "10", label: "planos por objetivo para vender melhor" },
];

const estrutura = [
  { icon: Building2, title: "Espaço amplo", description: "750m² principal + 330m² de estacionamento" },
  { icon: MapPin, title: "Localização estratégica", description: "Avenidas principais com fácil acesso" },
  { icon: Smartphone, title: "Transporte público", description: "Área com transporte de qualidade" },
  { icon: Shield, title: "Segurança", description: "Bairros com baixa criminalidade" },
  { icon: Users, title: "Alta densidade", description: "Mín. 2.500 habitantes/km²" },
  { icon: Zap, title: "Capacidade elétrica", description: "Rede elétrica para operação completa" },
  { icon: MapPin, title: "Zona consolidada", description: "Área residencial ou comercial em crescimento" },
  { icon: Building2, title: "Estacionamento", description: "Mín. 20 vagas para carros e 30 para motos" },
];

const vantagens = [
  {
    icon: GraduationCap,
    title: "Universidade EXCLUSIVE",
    desc: "Treinamento presencial para preparar sua operação, equipe e rotina comercial desde a implantação.",
  },
  {
    icon: ClipboardCheck,
    title: "Metodologia comprovada",
    desc: "Planos por objetivo, atendimento consultivo e processos de acompanhamento para gerar resultado ao aluno.",
  },
  {
    icon: Award,
    title: "Marca consolidada",
    desc: "Uma rede com história, posicionamento regional forte e operação testada em diferentes cidades.",
  },
];

const operacao = [
  {
    icon: TrendingUp,
    title: "Modelo replicável",
    desc: "Padrão de implantação, jornada comercial e rotina operacional para acelerar a abertura.",
  },
  {
    icon: BadgeCheck,
    title: "Suporte de campo",
    desc: "Orientação para layout, equipe, treinamento, atendimento e padrão de experiência da marca.",
  },
  {
    icon: CalendarDays,
    title: "Plano de longo prazo",
    desc: "Estrutura pensada para operar com consistência, previsibilidade e foco em retenção.",
  },
];

const etapas = [
  "Análise da cidade e do ponto comercial",
  "Implantação com padrão Fitness Exclusive",
  "Treinamento presencial da equipe",
  "Acompanhamento da operação após a abertura",
];

export default function Franqueado() {
  const [formData, setFormData] = useState<FormData>({ nome: "", telefone: "", cidade: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const heroImage =
    unidades.find((unidade) => unidade.nome === "Aeroporto")?.desktop ??
    "/images/unidades/unidade-aeroporto.webp";
  const unidadeOperacaoPrincipal =
    unidades.find((item) => item.nome === "Tianguá") ?? unidades[0];
  const unidadeFormulario = unidades.find((item) => item.nome === "Barbalha");
  const galeria = [
    { unidade: unidades.find((item) => item.nome === "Aeroporto"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "Tianguá"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "Barbalha"), destaque: true },
  ].filter(
    (item): item is { unidade: (typeof unidades)[number]; destaque: boolean } =>
      Boolean(item.unidade),
  );
  const unidadesDestaque = [
    { unidade: unidades.find((item) => item.nome === "Barbalha"), destaque: true },
    { unidade: unidades.find((item) => item.nome === "AABB Crato"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "Tianguá"), destaque: true },
    { unidade: unidades.find((item) => item.nome === "Tiradentes"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "Lagoa Seca"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "São José"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "Salesianos"), destaque: false },
    { unidade: unidades.find((item) => item.nome === "Aeroporto"), destaque: true },
    { unidade: unidades.find((item) => item.nome === "Matriz Araripina"), destaque: false },
  ].filter(
    (item): item is { unidade: (typeof unidades)[number]; destaque: boolean } =>
      Boolean(item.unidade),
  );

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
        const mensagem = `Olá! Tenho interesse em ser franqueado da Fitness Exclusive!\n\nNome: ${formData.nome}\nTelefone: ${formData.telefone}\nCidade de interesse: ${formData.cidade}`;
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
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
          <span className="text-base font-bold text-[#FAC934]">Fitness Exclusive</span>
        </div>
      </header>

      <section className="relative flex min-h-[86vh] items-center overflow-hidden px-6 pb-16 pt-28">
        <Image
          src={heroImage}
          alt="Unidade Fitness Exclusive com estrutura moderna"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />

        <div className="relative mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FAC934]/40 bg-black/40 px-4 py-2 text-sm font-semibold text-[#FAC934] backdrop-blur">
              <Rocket className="h-4 w-4" />
              Oportunidade de franquia
            </span>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
              Franquia Fitness Exclusive
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
              Abra uma academia com marca, método, treinamento e suporte para operar com foco em
              performance, experiência do aluno e crescimento sustentável.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAC934] px-7 py-4 text-sm font-bold text-black shadow-lg shadow-[#FAC934]/20 transition hover:bg-[#EBA730]"
              >
                <Send className="h-4 w-4" />
                Quero ser franqueado
              </a>
              <a
                href="#modelo"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Ver modelo de operação
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 grid max-w-4xl gap-3 sm:grid-cols-3"
          >
            {indicadores.map((item) => (
              <div
                key={item.value}
                className="rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur"
              >
                <p className="text-2xl font-black text-[#FAC934]">{item.value}</p>
                <p className="mt-1 text-sm leading-snug text-zinc-300">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="modelo" className="border-t border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FAC934]/30 bg-[#FAC934]/10 px-4 py-2 text-sm font-semibold text-[#FAC934]">
              <Handshake className="h-4 w-4" />
              Operação guiada
            </span>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Você entra com o investimento. A gente entra com o caminho.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-400">
              Nosso modelo combina padrão de unidade, metodologia de vendas, treinamento de equipe e
              suporte para que o franqueado comece com clareza no que precisa ser feito.
            </p>

            <div className="mt-8 space-y-3">
              {etapas.map((etapa) => (
                <div key={etapa} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#FAC934]" />
                  <span className="text-sm text-zinc-200">{etapa}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 sm:row-span-2">
              <Image
                src={unidadeOperacaoPrincipal?.desktop ?? heroImage}
                alt={`Unidade ${unidadeOperacaoPrincipal?.nome ?? "Fitness Exclusive"}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-sm font-semibold text-[#FAC934]">
                  Unidade {unidadeOperacaoPrincipal?.nome ?? "Fitness Exclusive"}
                </p>
                <p className="mt-1 text-xl font-black text-white">Ambiente moderno, amplo e equipado</p>
              </div>
            </div>

            {galeria.map(({ unidade, destaque }) => (
              <div
                key={unidade.nome}
                className={`relative overflow-hidden rounded-lg border border-white/10 ${
                  destaque ? "min-h-[220px] sm:col-span-2" : "min-h-[172px]"
                }`}
              >
                <Image src={unidade.desktop} alt={unidade.nome} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">
                  Unidade {unidade.nome}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-900/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-black text-white sm:text-4xl">Por que investir conosco</h2>
            <p className="mt-4 text-zinc-400">
              Uma marca de academia feita para unir operação, atendimento e resultado em uma
              experiência consistente.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {vantagens.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-zinc-950/80 p-6 transition hover:border-[#FAC934]/40"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#FAC934]/20 bg-[#FAC934]/10">
                  <item.icon className="h-5 w-5 text-[#FAC934]" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {operacao.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-black p-6 transition hover:border-white/30"
              >
                <item.icon className="h-6 w-6 text-[#FAC934]" />
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="estrutura" className="border-t border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 max-w-2xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-200">
              <Building2 className="h-4 w-4 text-[#FAC934]" />
              Ponto comercial
            </span>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Requisitos de espaço</h2>
            <p className="mt-4 text-zinc-400">
              Critérios pensados para preservar a experiência do aluno, a eficiência da operação e o
              potencial comercial da unidade.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {estrutura.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#FAC934]/30"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAC934]/10">
                  <item.icon className="h-4 w-4 text-[#FAC934]" />
                </div>
                <p className="text-sm font-bold text-white">{item.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-zinc-900/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FAC934]/30 bg-[#FAC934]/10 px-4 py-2 text-sm font-semibold text-[#FAC934]">
                <Star className="h-4 w-4" />
                Rede ativa
              </span>
              <h2 className="text-3xl font-black text-white sm:text-4xl">Unidades que mostram o padrão</h2>
              <p className="mt-4 max-w-2xl text-zinc-400">
                Estruturas reais da Fitness Exclusive em cidades estratégicas, com operação em andamento
                e marca presente na rotina dos alunos.
              </p>
            </div>
            <a
              href="#formulario"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FAC934]/50"
            >
              Conversar sobre cidade
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {unidadesDestaque.map(({ unidade, destaque }, i) => (
              <motion.div
                key={unidade.nome}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`group overflow-hidden rounded-lg border border-white/10 bg-zinc-950 transition hover:border-[#FAC934]/30 ${
                  destaque ? "md:col-span-2" : ""
                }`}
              >
                <div className={`relative overflow-hidden ${destaque ? "h-56" : "h-44"}`}>
                  <Image
                    src={unidade.desktop}
                    alt={unidade.nome}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <p className="font-bold text-[#FAC934]">{unidade.nome}</p>
                  <p className="mt-2 text-sm text-zinc-300">{unidade.endereco}</p>
                  <p className="mt-1 text-xs text-zinc-500">{unidade.cidade}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="border-t border-white/10 bg-zinc-950 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FAC934]/30 bg-[#FAC934]/10 px-4 py-2 text-sm font-semibold text-[#FAC934]">
              <Send className="h-4 w-4" />
              Registre seu interesse
            </span>
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Vamos avaliar sua cidade e o melhor formato para começar.
            </h2>
            <p className="mt-5 text-zinc-400">
              Preencha os dados e nossa equipe encaminha seu contato para a conversa de franquia pelo
              WhatsApp.
            </p>

            <div className="relative mt-9 min-h-[320px] overflow-hidden rounded-lg border border-white/10">
              <Image
                src={unidadeFormulario?.desktop ?? heroImage}
                alt={unidadeFormulario ? `Unidade ${unidadeFormulario.nome}` : "Ambiente de treino Fitness Exclusive"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="text-sm font-semibold text-[#FAC934]">Fitness Exclusive</p>
                <p className="mt-2 max-w-sm text-xl font-black text-white">
                  Uma academia pensada para vender experiência e entregar resultado.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg border border-white/10 bg-zinc-900/80 p-6 shadow-2xl shadow-black/30 sm:p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-black text-white">Fale conosco</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Informe seus dados para receber o atendimento de franquia.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Nome completo</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FAC934]/70"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Telefone</label>
                <input
                  type="tel"
                  required
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FAC934]/70"
                  placeholder="(88) 99999-9999"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">Cidade de interesse</label>
                <input
                  type="text"
                  required
                  value={formData.cidade}
                  onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                  className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#FAC934]/70"
                  placeholder="Ex: Juazeiro do Norte, Fortaleza..."
                />
              </div>

              {enviado && (
                <div className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                  <p className="text-sm text-emerald-300">Obrigado! Em breve entraremos em contato.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FAC934] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#EBA730] disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {loading ? "Enviando..." : "Enviar interesse"}
              </button>

              <p className="text-center text-xs text-zinc-500">
                Você será redirecionado ao WhatsApp após o envio.
              </p>
            </div>
          </motion.form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Fitness Exclusive. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
