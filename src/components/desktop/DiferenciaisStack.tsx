"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Star, Dumbbell, Building2, Target, Users } from "lucide-react";
import { diferenciais, sobreNos } from "../../lib/dadosAcademia";
import ScrollReveal from "../shared/ScrollReveal";
import { getAssetPath } from "../../lib/utils";

// Mapeamento de ícones
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Dumbbell,
  Building2,
  Target,
  Users
};

// Imagens da estrutura para o slide "Ambiente Moderno"
const estruturaImages = [
  getAssetPath("/images/Slide-Estrutura/1 (1).webp"),
  getAssetPath("/images/Slide-Estrutura/1 (2).webp"),
  getAssetPath("/images/Slide-Estrutura/1 (3).webp"),
  getAssetPath("/images/Slide-Estrutura/1 (8).webp"),
  getAssetPath("/images/Slide-Estrutura/1 (9).webp"),
  getAssetPath("/images/Slide-Estrutura/1 (10).webp")
];

// Imagens das aulas para o slide "Aulas diversificadas"
const aulasImages = [
  getAssetPath("/images/Slide-Aulas/1 (1).webp"),
  getAssetPath("/images/Slide-Aulas/1 (2).webp"),
  getAssetPath("/images/Slide-Aulas/1 (3).webp")
];

export default function Diferenciais() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate das imagens dos slides "Ambiente Moderno" e "Aulas diversificadas"
  useEffect(() => {
    // Reset do índice ao trocar de slide
    setCurrentImageIndex(0);
    
    if (currentSlide === 1) { // índice 1 é o segundo slide "Ambiente moderno"
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % estruturaImages.length);
      }, 4000); // Troca a cada 4 segundos
      
      return () => clearInterval(interval);
    } else if (currentSlide === 2) { // índice 2 é o terceiro slide "Aulas diversificadas"
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % aulasImages.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % diferenciais.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + diferenciais.length) % diferenciais.length);
  };

  // Funções para touch/swipe nos diferenciais
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <>
      <div 
        ref={containerRef}
        id="diferenciais"
        className="relative"
        style={{ height: `${diferenciais.length * 50}vh` }}
      >
        {/* Container das seções empilhadas */}
        <div 
          className="sticky top-0 h-screen overflow-hidden cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Botão anterior - lateral esquerda - Touch targets maiores */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-4 md:p-4 rounded-full transition-all duration-300 group backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
            aria-label="Diferencial anterior"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Botão próximo - lateral direita - Touch targets maiores */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-[#EBA730]/80 text-white p-4 md:p-4 rounded-full transition-all duration-300 group backdrop-blur-sm border border-gray-600 hover:border-[#EBA730] touch-manipulation"
            aria-label="Próximo diferencial"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {diferenciais.map((diferencial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1200 ease-out ${
                index === currentSlide ? 'translate-x-0' : 
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <section className="h-full bg-gradient-to-br from-black via-zinc-900 to-black relative flex items-center justify-center">
                {/* Background para o slide "Planos Flexíveis" (index 0) */}
                {index === 0 && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#590dfb] to-[#902aec]"></div>
                    <div className="absolute inset-0">
                      <Image
                        src={getAssetPath("/images/Slide-App/Slide---App.png")}
                        alt="App Fitness Exclusive"
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                      />
                    </div>
                  </>
                )}
                
                {/* Background para o slide "Ambiente Moderno" (index 1) */}
                {index === 1 && (
                  <>
                    {estruturaImages.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Estrutura ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                          priority={imgIndex === 0}
                          quality={90}
                        />
                      </div>
                    ))}
                    {/* Overlay escuro para melhorar legibilidade */}
                    <div className="absolute inset-0 bg-black/60"></div>
                  </>
                )}
                
                {/* Background para o slide "Aulas diversificadas" (index 2) */}
                {index === 2 && (
                  <>
                    {aulasImages.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Aulas ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                          priority={imgIndex === 0}
                          quality={90}
                        />
                      </div>
                    ))}
                    {/* Overlay escuro para melhorar legibilidade */}
                    <div className="absolute inset-0 bg-black/60"></div>
                  </>
                )}
                
                {/* Background decorativo para outros slides */}
                {index !== 0 && index !== 1 && index !== 2 && index !== 3 && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/5 via-transparent to-[#FAC934]/5"></div>
                )}
                
                {/* Background para o slide "Profissionais qualificados" (index 3) */}
                {index === 3 && (
                  <div className="absolute inset-0">
                    <Image
                      src={getAssetPath("/images/Slide-Avaliacao/Slide---Avaliacao.png")}
                      alt="Avaliação Profissional"
                      fill
                      className="object-cover"
                      priority={false}
                      quality={90}
                    />
                  </div>
                )}
                
                {/* Conteúdo - oculto no primeiro e último slide */}
                {index !== 0 && index !== 3 && (
                  <div className="container mx-auto px-6 relative z-10 text-center">
                    <ScrollReveal>
                      <div className="max-w-4xl mx-auto">
                        {/* Ícone - semi-transparente nos slides "Ambiente Moderno" e "Aulas diversificadas" */}
                        <div className="mb-8 flex justify-center">
                          {React.createElement(iconMap[diferencial.icone as keyof typeof iconMap], { 
                            className: `w-24 h-24 text-[#EBA730] ${(index === 1 || index === 2) ? 'opacity-30' : ''}` 
                          })}
                        </div>
                        
                        {/* Título - semi-transparente nos slides "Ambiente Moderno" e "Aulas diversificadas" */}
                        <h2 className={`text-6xl font-black mb-8 text-white ${(index === 1 || index === 2) ? 'opacity-100' : ''}`}>
                          {diferencial.titulo.toUpperCase()}
                        </h2>
                        
                        {/* Separador */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                          <div className={`h-1 w-32 bg-gradient-to-r from-transparent to-[#EBA730] ${(index === 1 || index === 2) ? 'opacity-100' : ''}`}></div>
                          <Star className={`w-6 h-6 text-[#EBA730] ${(index === 1 || index === 2) ? 'opacity-100' : ''}`} />
                          <div className={`h-1 w-32 bg-gradient-to-l from-transparent to-[#FAC934] ${(index === 1 || index === 2) ? 'opacity-100' : ''}`}></div>
                        </div>
                        
                        {/* Subtítulo especial para o slide "Aulas diversificadas" */}
                        {index === 2 && (
                          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto opacity-100 mb-8">
                            Aulas coletivas, Spinning, Funcional e Funcional Kids
                          </p>
                        )}
                        
                        {/* Descrição - semi-transparente no slide "Ambiente Moderno" apenas */}
                        {index !== 2 && (
                          <p className={`text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto ${index === 1 ? 'opacity-100' : ''}`}>
                            {diferencial.descricao}
                          </p>
                        )}
                      </div>
                    </ScrollReveal>
                  </div>
                )}
                
                {/* Texto pequeno para o slide "Aulas diversificadas" - posicionado no limite inferior */}
                {index === 2 && (
                  <div className="absolute bottom-20 left-0 right-0 z-20 text-center">
                    <p className="text-sm text-gray-300 opacity-80">
                      Verifique disponibilidade na sua unidade
                    </p>
                  </div>
                )}

                {/* Efeito de transição */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#EBA730]/10 via-transparent to-[#FAC934]/10 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </section>
            </div>
          ))}

          {/* Indicador de posição - único e sobreposto - Touch targets maiores */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center gap-3">
            {diferenciais.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`touch-manipulation transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 h-4 md:w-6 md:h-3 bg-[#EBA730] rounded-full' 
                    : 'w-4 h-4 md:w-3 md:h-3 rounded-full bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Ir para diferencial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sobre Nós */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-black to-zinc-900 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/3 via-transparent to-[#FAC934]/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-zinc-900 via-black to-zinc-900 rounded-3xl p-12 border-2 border-[#EBA730] max-w-5xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#EBA730]/10 via-transparent to-[#FAC934]/10 rounded-3xl"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-black text-white mb-6">
                  {sobreNos.titulo}
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  <p className="text-lg">{sobreNos.descricao}</p>
                  <p>{sobreNos.missao}</p>
                  <p>{sobreNos.equipe}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
