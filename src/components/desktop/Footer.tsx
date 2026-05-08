import React from "react";
import Link from "next/link";
import { Instagram, Mail, Phone, Star } from "lucide-react";

const quickLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Planos", href: "#planos" },
  { label: "Diferenciais", href: "#modalidades" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-[#EBA730]/25 bg-black py-16 text-white">
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl font-extrabold text-white">
              Fitness Exclusive
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-zinc-400">
              Transformamos vidas através do exercício físico, oferecendo
              estrutura completa e acompanhamento profissional para você alcançar
              seus objetivos.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/investidor-imobiliario"
                className="inline-flex items-center gap-2 font-bold text-[#FAC934] transition hover:text-[#EBA730]"
              >
                <Star className="h-4 w-4 fill-[#FAC934]" />
                Seja um investidor
              </Link>
              <Link
                href="/franqueado"
                className="inline-flex items-center gap-2 font-bold text-[#FAC934] transition hover:text-[#EBA730]"
              >
                <Star className="h-4 w-4 fill-[#FAC934]" />
                Seja um Franqueado
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-[#FAC934]">
              Links rápidos
            </h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition hover:text-[#FAC934]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-bold text-[#FAC934]">
              Contato
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-[#FAC934]" />
                <span className="text-sm text-zinc-400">+55 (88) 99263-7523</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-[#FAC934]" />
                <span className="text-sm text-zinc-400">
                  fitnessexclusive@fitnessexclusive.com.br
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="h-5 w-5 flex-shrink-0 text-[#FAC934]" />
                <span className="text-sm text-zinc-400">
                  @academiafitnessexclusive
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Academia Fitness Exclusive. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
