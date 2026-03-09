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
  Handshake
} from "lucide-react";

export default function Investidor1() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#EBA730]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FAC934]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black font-bold px-6 py-2 rounded-full mb-6">
              <Building2 className="w-5 h-5" />
              <span>Oportunidade de Franquia</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              Invista no Sucesso da
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
                Fitness Exclusive
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seja parte da rede de academias que mais cresce no Nordeste. 
              Uma oportunidade única de investir em saúde, bem-estar e um mercado em constante expansão.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/5588992637523?text=${encodeURIComponent(
                  "Olá! Tenho interesse em ser um franqueado da Fitness Exclusive (Investidor 1)."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 text-lg shadow-lg"
              >
                <Handshake className="w-6 h-6" />
                Quero ser Franqueado
              </a>
              <a
                href="#detalhes"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-full transition-all border-2 border-gray-700 hover:border-[#EBA730]"
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
              { number: "13+", label: "Unidades em Operação" },
              { number: "2000+", label: "Alunos Ativos" },
              { number: "10+", label: "Anos de Mercado" },
              { number: "95%", label: "Satisfação dos Clientes" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-[#EBA730] mb-2">
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
              Por que investir na Fitness Exclusive?
            </h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Modelo de franquia testado e aprovado, com suporte completo e retorno garantido
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Retorno do Investimento",
                description: "ROI médio de 24 a 36 meses com modelo de negócio testado e aprovado"
              },
              {
                icon: Building2,
                title: "Marca Consolidada",
                description: "Marca forte e reconhecida no Nordeste com 13 unidades em operação"
              },
              {
                icon: Users,
                title: "Suporte Completo",
                description: "Treinamento, marketing, gestão e acompanhamento durante toda a operação"
              },
              {
                icon: Target,
                title: "Território Exclusivo",
                description: "Área de atuação protegida para garantir seu crescimento sem concorrência"
              },
              {
                icon: Award,
                title: "Know-How Comprovado",
                description: "10+ anos de experiência e processos otimizados para máxima eficiência"
              },
              {
                icon: DollarSign,
                title: "Modelo Escalável",
                description: "Possibilidade de expansão com novas unidades e múltiplas fontes de receita"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-zinc-900 to-black p-8 rounded-3xl border-2 border-gray-700 hover:border-[#EBA730]/50 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-[#EBA730] mb-4" />
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
              className="bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-8 md:p-12 border-2 border-[#EBA730]"
            >
              <h3 className="text-3xl font-black mb-8 text-center">
                Informações do Investimento
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#EBA730] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Taxa de Franquia</h4>
                    <p className="text-gray-400">Investimento inicial a partir de R$ 80.000,00</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#EBA730] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Investimento Total</h4>
                    <p className="text-gray-400">De R$ 250.000,00 a R$ 450.000,00 (incluindo estrutura e equipamentos)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#EBA730] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Royalties</h4>
                    <p className="text-gray-400">6% do faturamento bruto mensal</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#EBA730] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Prazo de Contrato</h4>
                    <p className="text-gray-400">5 anos com possibilidade de renovação</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#EBA730] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg mb-2">Área Mínima</h4>
                    <p className="text-gray-400">400m² a 800m² dependendo do formato</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-4xl font-black mb-6">
              Pronto para fazer parte desta história?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Entre em contato conosco e receba o material completo sobre nossa oportunidade de franquia.
            </p>
            <a
              href={`https://wa.me/5588992637523?text=${encodeURIComponent(
                "Olá! Gostaria de receber mais informações sobre a franquia Fitness Exclusive (Investidor 1)."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EBA730] to-[#FAC934] hover:from-[#FAC934] hover:to-[#EBA730] text-black font-bold px-10 py-5 rounded-full transition-all transform hover:scale-105 text-xl shadow-lg"
            >
              <Handshake className="w-7 h-7" />
              Solicitar Informações
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Fitness Exclusive. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
