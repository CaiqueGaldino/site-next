import React from "react";

export default function AulaExperimental() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-yellow-400">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Experimente Gratuitamente!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Conheça nossa estrutura, equipamentos e metodologia sem compromisso. 
            Agende sua aula experimental gratuita agora mesmo!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Totalmente gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Acompanhamento profissional</span>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full shadow-xl transition-all transform hover:scale-105 text-lg">
              Agende Agora
            </button>
          </div>

          <p className="text-white/80 text-sm mt-4">
            💪 Mais de 500 alunos já experimentaram e aprovaram!
          </p>
        </div>
      </div>
    </section>
  );
}
