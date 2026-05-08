"use client";
import React, { useState, useEffect, useRef } from "react";
import { Flame } from "lucide-react";
import { planos } from "../../lib/dadosAcademia";
import { hapticFeedback } from "../../lib/mobileUtils";
import FormularioAgendamento from "../shared/FormularioAgendamento";

interface CheckIconProps {
  className?: string;
}

const CheckIcon = ({ className = 'w-6 h-6' }: CheckIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

interface ProPlanIconProps {
  className?: string;
}

const ProPlanIcon = ({ className = 'w-5 h-5' }: ProPlanIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
    <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"></path>
  </svg>
);

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => (
  <div className="inline-flex items-center gap-2 rounded-lg border border-[#EBA730]/30 bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAC934]">
    <span className="h-1.5 w-1.5 rounded-full bg-[#EBA730]"></span>
    {text}
  </div>
);

interface GetStartedButtonProps {
  isFeatured: boolean;
  label?: string;
  onClick: () => void;
}

const GetStartedButton = ({ isFeatured, label = 'Assinar Agora', onClick }: GetStartedButtonProps) => (
  <a
    href="https://fitnessexclusive.com.br/campanha/todasunidades.html"
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    aria-label={label}
    className={`block w-full rounded-lg py-3.5 text-center text-sm font-bold transition-colors duration-300 active:scale-95 touch-manipulation ${
      isFeatured
        ? 'bg-black text-white hover:bg-zinc-900'
        : 'bg-[#FAC934] text-black hover:bg-[#EBA730]'
    }`}
  >
    {label}
  </a>
);

interface FeatureListItemProps {
  children: React.ReactNode;
  isFeatured: boolean;
}

const FeatureListItem = ({ children, isFeatured }: FeatureListItemProps) => (
  <li className="flex items-start gap-3">
    <div
      className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-lg ${
        isFeatured ? 'bg-black/10' : 'bg-zinc-900'
      }`}
    >
      <CheckIcon className={`${isFeatured ? 'text-black' : 'text-[#EBA730]'} w-3.5 h-3.5`} />
    </div>
    <span className={`text-xs ${isFeatured ? 'text-black/75' : 'text-gray-300'} leading-tight`}>{children}</span>
  </li>
);

const Header = () => (
  <header className="relative z-10 mb-7 px-4 text-center">
    <div className="mb-3 flex justify-center animate-fade-in-down" style={{animationDelay: '0.2s'}}>
      <Tag text="MAIS DE 25.000 ALUNOS" />
    </div>

    <h2 className="mb-2 font-display text-2xl font-extrabold leading-tight text-white animate-fade-in-down">
      Planos para{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
        todos os objetivos
      </span>
    </h2>

    <p className="mx-auto max-w-md text-sm text-zinc-400 animate-fade-in-down" style={{animationDelay: '0.4s'}}>
      Escolha o plano ideal e alcance seus objetivos com a Fitness Exclusive.
    </p>
  </header>
);

interface PricingCardProps {
  nome: string;
  preco: string;
  periodo: string;
  descricao: string;
  beneficios: string[];
  popular: boolean;
  onAssinar: () => void;
}

const PricingCard = ({ nome, preco, periodo, descricao, beneficios, popular, onAssinar }: PricingCardProps) => (
  <article
    className={`relative w-[280px] flex-shrink-0 snap-center rounded-lg p-5 transition-colors duration-300 ${
      popular
        ? 'border border-[#FAC934]/50 bg-[#FAC934] text-black'
        : 'border border-white/10 bg-black text-white'
    }`}
    aria-label={`${nome} plan`}
  >
    {popular && (
      <div className="absolute -top-3 right-6">
        <span className="inline-flex items-center gap-1 rounded-lg bg-black px-3 py-1 text-xs font-bold text-[#FAC934]">
          <Flame className="w-3 h-3" /> POPULAR
        </span>
      </div>
    )}
    
    <div className="flex items-center gap-3 mb-3">
      <ProPlanIcon className={`w-4 h-4 ${popular ? 'text-black/55' : 'text-gray-500'}`} />
      <h3
        className={`text-xs font-bold uppercase ${
          popular ? 'text-black/60' : 'text-gray-500'
        }`}
      >
        {nome}
      </h3>
    </div>

    <div className="mb-3 flex items-baseline gap-1.5">
      <span className={`text-2xl font-black ${popular ? 'text-black' : 'text-white'}`}>{preco}</span>
      <span className={`${popular ? 'text-black/60' : 'text-gray-400'} text-xs`}>{periodo}</span>
    </div>

    <p className={`mb-5 min-h-[2rem] text-xs ${popular ? 'text-black/70' : 'text-gray-400'}`}>{descricao}</p>

    <div className="mb-5">
      <GetStartedButton isFeatured={popular} onClick={onAssinar} />
    </div>

    <ul className="space-y-2.5">
      {beneficios.slice(0, 5).map((beneficio, index) => (
        <FeatureListItem key={`${nome}-${index}`} isFeatured={popular}>
          {beneficio}
        </FeatureListItem>
      ))}
      {beneficios.length > 5 && (
        <li className={`pl-8 text-xs font-semibold ${popular ? 'text-black/70' : 'text-[#EBA730]'}`}>
          +{beneficios.length - 5} benefícios
        </li>
      )}
    </ul>
  </article>
);

export default function PlanosMobile() {
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Centraliza o plano popular ao carregar
    const container = scrollContainerRef.current;
    if (!container) return;

    const popularIndex = planos.findIndex(p => p.popular);
    if (popularIndex === -1) return;

    // Aguarda a renderização completa
    setTimeout(() => {
      const cardWidth = 280; // largura do card
      const gap = 16; // gap-4 = 16px
      const containerWidth = container.offsetWidth;
      const scrollPosition = (cardWidth + gap) * popularIndex - (containerWidth - cardWidth) / 2;
      
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }, 100);
  }, []);

  const handleAssinar = () => {
    hapticFeedback('heavy');
    setModalAgendamentoAberto(true);
  };

  return (
    <>
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out both;
        }
      `}</style>
      
      <section id="planos" className="flex flex-col bg-zinc-950 py-10">
        <div className="px-4">
          <Header />
          
          <div 
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-5 scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {planos.map((plano, index) => (
              <PricingCard
                key={`${plano.nome}-${index}`}
                nome={plano.nome}
                preco={plano.preco}
                periodo={plano.periodo}
                descricao={plano.descricao}
                beneficios={plano.beneficios}
                popular={plano.popular}
                onAssinar={handleAssinar}
              />
            ))}
          </div>
        </div>

        <FormularioAgendamento 
          isOpen={modalAgendamentoAberto}
          onClose={() => setModalAgendamentoAberto(false)}
          tipo="quero-fazer-parte"
        />
      </section>
    </>
  );
}
