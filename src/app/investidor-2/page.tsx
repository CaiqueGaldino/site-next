"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Award,
  DollarSign,
  Target,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Handshake,
  Rocket,
  Shield
} from "lucide-react";

export default function Investidor2() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-[#EBA730] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao site</span>
          </Link>
          <h1 className="text-xl font-bold text-[#EBA730]">Fitness Exclusive</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAC934]/10 via-transparent to-[#EBA730]/10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FAC934]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EBA730]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FAC934] to-[#EBA730] text-black font-bold px-6 py-2 rounded-full mb-6">
              <Rocket className="w-5 h-5" />
              <span>Investidor Parceiro Premium</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Seja um Investidor
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FAC934] to-[#EBA730]">
                Parceiro Premium
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Invista diretamente em unidades operacionais da Fitness Exclusive com gestão compartilhada. 
              Menor investimento, risco compartilhado e participação nos lucros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/5588992637523?text=${encodeURIComponent(
                  "Olá! Tenho interesse em ser um Investidor Parceiro Premium da Fitness Exclusive (Investidor 2)."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FAC934] to-[#EBA730] hover:from-[#EBA730] hover:to-[#FAC934] text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
              >
                <Handshake className="w-6 h-6" />
                Quero ser Parceiro
              </a>
              <a
                href="#detalhes"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-full transition-all border-2 border-gray-700 hover:border-[#FAC934]"
              >
                Saiba mais
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "30%", label: "Retorno Anual Esperado" },
              { number: "R$ 150k", label: "Investimento Inicial" },
              { number: "12-18", label: "Meses para Payback" },
              { number: "100%", label: "Gestão Compartilhada" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#FAC934] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="detalhes" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-black mb-4">
              Vantagens do Investidor Parceiro
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modelo de co-investimento com risco compartilhado e gestão profissional
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Menor Investimento",
                description: "Entrada de R$ 150.000 a R$ 250.000 com participação societária proporcional"
              },
              {
                icon: Shield,
                title: "Risco Compartilhado",
                description: "Investimento dividido com outros parceiros reduzindo exposição individual"
              },
              {
                icon: Users,
                title: "Gestão Profissional",
                description: "Equipe experiente da Fitness Exclusive gerencia toda a operação"
              },
              {
                icon: TrendingUp,
                title: "Lucro Distribuído",
                description: "Participação mensal nos lucros líquidos proporcional ao investimento"
              },
              {
                icon: Target,
                title: "Retorno Acelerado",
                description: "Payback estimado em 12 a 18 meses com receita recorrente"
              },
              {
                icon: Award,
                title: "Marca Estabelecida",
                description: "Invista em marca consolidada sem necessidade de construir do zero"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border-2 border-gray-700 hover:border-[#FAC934]/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-[#FAC934] mb-4" />
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-8 md:p-12 border-2 border-[#FAC934]"
            >
              <h3 className="text-3xl font-black mb-8 text-center">
                Detalhes do Investimento Premium
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FAC934] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Investimento Inicial</h4>
                    <p className="text-gray-400">De R$ 150.000 a R$ 250.000 com participação de 30% a 50% da unidade</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FAC934] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Modelo de Participação</h4>
                    <p className="text-gray-400">Sociedade com gestão compartilhada - você investe, nós gerenciamos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FAC934] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Distribuição de Lucros</h4>
                    <p className="text-gray-400">Mensal, proporcional à participação societária após despesas operacionais</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FAC934] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Prazo de Permanência</h4>
                    <p className="text-gray-400">Mínimo de 3 anos com opção de saída antecipada mediante aviso prévio</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FAC934] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Governança</h4>
                    <p className="text-gray-400">Relatórios financeiros mensais e reuniões trimestrais de resultados</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#FAC934] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Garantias</h4>
                    <p className="text-gray-400">Contrato societário registrado com direitos e deveres claramente definidos</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-black mb-4">
              Por que escolher o modelo Premium?
            </h3>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border-2 border-gray-700"
            >
              <h4 className="text-2xl font-bold mb-6 text-[#EBA730]">Franquia Tradicional</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Investimento: R$ 250k - R$ 450k</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Gestão: Responsabilidade total do franqueado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Risco: 100% individual</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">Payback: 24-36 meses</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#FAC934]/20 to-black p-8 rounded-3xl border-2 border-[#FAC934]"
            >
              <h4 className="text-2xl font-bold mb-6 text-[#FAC934]">Investidor Premium ✨</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FAC934] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Investimento: R$ 150k - R$ 250k</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FAC934] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Gestão: Profissional pela Fitness Exclusive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FAC934] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Risco: Compartilhado entre parceiros</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FAC934] flex-shrink-0 mt-0.5" />
                  <span className="text-white">Payback: 12-18 meses</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-4xl font-black mb-6">
              Invista com segurança e inteligência
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Receba nosso prospecto completo com projeções financeiras, termos do investimento e próximas unidades disponíveis.
            </p>
            <a
              href={`https://wa.me/5588992637523?text=${encodeURIComponent(
                "Olá! Gostaria de receber o prospecto completo sobre o investimento Premium na Fitness Exclusive (Investidor 2)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FAC934] to-[#EBA730] hover:from-[#EBA730] hover:to-[#FAC934] text-black font-bold px-10 py-5 rounded-full transition-all transform hover:scale-105 text-xl shadow-lg"
            >
              <Rocket className="w-7 h-7" />
              Receber Prospecto Completo
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fitness Exclusive. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
