"use client";
import React, { useState } from "react";
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
  <div className="inline-flex items-center gap-2 bg-[#EBA730]/20 text-[#EBA730] text-xs font-bold px-3 py-1 rounded-full tracking-wider">
    <span className="w-2 h-2 bg-[#EBA730] rounded-full"></span>
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
    className={`w-full text-center py-3.5 rounded-full font-bold text-sm transition-all duration-300 ease-in-out transform active:scale-95 touch-manipulation shadow-lg block ${
      isFeatured
        ? 'bg-white text-black hover:bg-gray-100'
        : 'bg-gradient-to-r from-[#EBA730] to-[#FAC934] text-black hover:from-[#FAC934] hover:to-[#EBA730]'
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
      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
        isFeatured ? 'bg-white/25' : 'bg-gray-800'
      }`}
    >
      <CheckIcon className={`${isFeatured ? 'text-white' : 'text-[#EBA730]'} w-3.5 h-3.5`} />
    </div>
    <span className={`text-xs ${isFeatured ? 'text-white/90' : 'text-gray-300'} leading-tight`}>{children}</span>
  </li>
);

const Header = () => (
  <header className="relative text-center mb-8 px-4 z-10">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EBA730]/20 rounded-full filter blur-3xl opacity-40 -z-10" aria-hidden="true"></div>

    <div className="flex justify-center mb-3 animate-fade-in-down" style={{animationDelay: '0.2s'}}>
      <Tag text="MAIS DE 5.000 ALUNOS" />
    </div>

    <h2 className="text-2xl font-black text-white leading-tight tracking-tight animate-fade-in-down mb-2">
      Planos para{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBA730] to-[#FAC934]">
        todos os objetivos
      </span>
    </h2>

    <p className="text-gray-400 text-sm max-w-md mx-auto animate-fade-in-down" style={{animationDelay: '0.4s'}}>
      Escolha o plano ideal e alcance seus objetivos com a Stack Fight
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
    className={`relative p-5 rounded-2xl transition-all duration-300 ease-in-out flex-shrink-0 w-[280px] snap-center ${
      popular
        ? 'bg-gradient-to-b from-[#EBA730] to-[#FAC934] text-white shadow-2xl scale-105'
        : 'bg-black border-2 border-gray-800 text-white shadow-xl'
    }`}
    aria-label={`${nome} plan`}
  >
    {popular && (
      <div className="absolute -top-3 right-6">
        <span className="inline-flex items-center gap-1 rounded-full bg-white/20 text-white text-xs font-bold px-3 py-1 backdrop-blur">
          <Flame className="w-3 h-3" /> POPULAR
        </span>
      </div>
    )}
    
    <div className="flex items-center gap-3 mb-3">
      <ProPlanIcon className={`w-4 h-4 ${popular ? 'text-white/80' : 'text-gray-500'}`} />
      <h3
        className={`text-xs font-bold tracking-widest uppercase ${
          popular ? 'text-white/80' : 'text-gray-500'
        }`}
      >
        {nome}
      </h3>
    </div>

    <div className="mb-3 flex items-baseline gap-1.5">
      <span className={`text-2xl font-black ${popular ? 'text-white' : 'text-white'}`}>{preco}</span>
      <span className={`${popular ? 'text-white/70' : 'text-gray-400'} text-xs`}>{periodo}</span>
    </div>

    <p className={`mb-5 text-xs ${popular ? 'text-white/85' : 'text-gray-400'} min-h-[2rem]`}>{descricao}</p>

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
        <li className={`text-xs font-semibold pl-8 ${popular ? 'text-white' : 'text-[#EBA730]'}`}>
          +{beneficios.length - 5} benefícios
        </li>
      )}
    </ul>
  </article>
);

export default function PlanosMobile() {
  const [modalAgendamentoAberto, setModalAgendamentoAberto] = useState(false);

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
      
      <section id="planos" className="py-6 bg-zinc-900 flex flex-col">
        <div className="px-4">
          <Header />
          
          <div 
            className="flex gap-4 overflow-x-auto pb-6 pt-6 snap-x snap-mandatory scrollbar-hide"
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
