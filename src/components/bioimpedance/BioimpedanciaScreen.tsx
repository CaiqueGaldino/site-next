"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  CircleDot,
  Droplets,
  Dumbbell,
  Flame,
  Gauge,
  HeartPulse,
  Layers3,
  Maximize2,
  Minimize2,
  Scale,
  ShieldCheck,
  Split,
  Waves,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const DURATION = 26000;

type SlideKind =
  | "overview"
  | "fat"
  | "muscle"
  | "ratio"
  | "hydration"
  | "water"
  | "metabolism"
  | "cellular";

type BiomarkerSlide = {
  eyebrow: string;
  title: string;
  body: string;
  kind: SlideKind;
  details: string[];
};

const slides: BiomarkerSlide[] = [
  {
    eyebrow: "BIO MARCADORES",
    title: "A bioimpedância traduz sinais do corpo em indicadores acompanháveis.",
    body: "A b.IA organiza biomarcadores para apoiar a leitura profissional da composição corporal, hidratação, metabolismo e saúde celular.",
    kind: "overview",
    details: [
      "Valores exibidos em kg, percentual e zonas de interpretação.",
      "As faixas orientam risco, atenção clínica e acompanhamento.",
      "A leitura final depende do contexto e do julgamento profissional.",
    ],
  },
  {
    eyebrow: "GORDURA",
    title: "Um marcador essencial para risco metabólico, inflamatório e funcional.",
    body: "A gordura total é apresentada em valores absolutos e percentual do peso corporal total. As cores indicam zonas por sexo e faixa etária.",
    kind: "fat",
    details: [
      "Inclui gordura essencial, gordura baixa, média, acima da média, alta e muito alta.",
      "As faixas clínicas ajudam a apontar risco e zonas de atenção.",
      "A interpretação considera o perfil do avaliado e sua evolução.",
    ],
  },
  {
    eyebrow: "MASSA MAGRA E MUSCULAR",
    title: "A massa livre de gordura mostra a estrutura que sustenta performance.",
    body: "Massa magra inclui músculos, ossos e órgãos. A massa muscular avalia especificamente a quantidade de músculo, ambas em kg e percentual.",
    kind: "muscle",
    details: [
      "Massa magra: composição livre de gordura.",
      "Massa muscular: quantidade estimada de músculo.",
      "O acompanhamento ajuda a preservar função, força e saúde metabólica.",
    ],
  },
  {
    eyebrow: "RAZÃO MÚSCULO-GORDURA",
    title: "Emagrecer bem é preservar ou ganhar músculo enquanto reduz gordura.",
    body: "Esse biomarcador diferencia processos anabólicos, com manutenção ou ganho muscular, de processos catabólicos, com perda de músculo.",
    kind: "ratio",
    details: [
      "Ajuda a avaliar a eficiência da redução de peso.",
      "Permite ajustar treino e nutrição com mais precisão.",
      "Favorece um emagrecimento mais saudável e sustentável.",
    ],
  },
  {
    eyebrow: "HIDRATAÇÃO",
    title: "O equilíbrio hídrico influencia composição corporal e desempenho.",
    body: "A hidratação é avaliada por água corporal total, índice de hidratação e água na massa magra.",
    kind: "hydration",
    details: [
      "Água corporal total: referência de 45%-55% para mulheres e 55%-65% para homens.",
      "Índice de hidratação: identifica desidratação, retenção ou equilíbrio.",
      "Água na massa magra: idealmente igual ou superior a 70%.",
    ],
  },
  {
    eyebrow: "ÁGUA INTRA E EXTRACELULAR",
    title: "A relação AIC/AEC é um sinal importante da saúde celular.",
    body: "A membrana celular regula a troca de nutrientes e eletrólitos, evitando a perda excessiva de água para o meio extracelular.",
    kind: "water",
    details: [
      "Má alimentação, desidratação, estresse, sono ruim e sedentarismo podem alterar essa relação.",
      "Nutrição, hidratação, sono e atividade física fortalecem a membrana celular.",
      "O controle desses fatores direciona o gráfico para a zona azul.",
    ],
  },
  {
    eyebrow: "IMC E TMB",
    title: "Peso e gasto energético precisam ser lidos com contexto.",
    body: "O IMC relaciona peso e altura, mas não diferencia músculo e gordura. A TMB estima calorias em repouso para funções vitais.",
    kind: "metabolism",
    details: [
      "IMC é um indicativo inicial, não uma análise completa da composição corporal.",
      "TMB apoia a personalização de dietas e treinos.",
      "Esse dado ajuda a otimizar perda de gordura e manutenção muscular.",
    ],
  },
  {
    eyebrow: "ANÁLISE CELULAR E ÂNGULO DE FASE",
    title: "O ângulo de fase ajuda a observar integridade e função celular.",
    body: "Ângulos baixos sugerem menor capacidade celular de armazenar energia; ângulos mais altos refletem membranas íntegras e boa função celular.",
    kind: "cellular",
    details: [
      "Apoia o monitoramento de estresse oxidativo, inflamação subclínica, muscularidade e longevidade.",
      "A idade celular reflete estado metabólico e envelhecimento biológico.",
      "O marcador auxilia estratégias para saúde, performance e evolução.",
    ],
  },
];

const textEffects = [
  {
    eyebrow: { initial: { opacity: 0, x: -22 }, animate: { opacity: 1, x: 0 } },
    title: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
    body: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
  },
  {
    eyebrow: { initial: { opacity: 0, scale: 0.94 }, animate: { opacity: 1, scale: 1 } },
    title: { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 } },
    body: { initial: { opacity: 0, x: -22 }, animate: { opacity: 1, x: 0 } },
  },
  {
    eyebrow: { initial: { opacity: 0, y: -14 }, animate: { opacity: 1, y: 0 } },
    title: { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 } },
    body: { initial: { opacity: 0, y: 20, filter: "blur(6px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" } },
  },
  {
    eyebrow: { initial: { opacity: 0, letterSpacing: "0.12em" }, animate: { opacity: 1, letterSpacing: "0.25em" } },
    title: { initial: { opacity: 0, y: 16, rotateX: 12 }, animate: { opacity: 1, y: 0, rotateX: 0 } },
    body: { initial: { opacity: 0, scale: 1.03 }, animate: { opacity: 1, scale: 1 } },
  },
];

export function BioimpedanciaScreen() {
  const [active, setActive] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, DURATION);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", syncFullscreenState);
    syncFullscreenState();

    const attemptFullscreen = window.setTimeout(() => {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {
          // Browsers usually require a user gesture for fullscreen.
        });
      }
    }, 300);

    return () => {
      window.clearTimeout(attemptFullscreen);
      document.removeEventListener("fullscreenchange", syncFullscreenState);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  };

  const slide = slides[active];
  const textEffect = textEffects[active % textEffects.length];

  return (
    <main className="bia-viewport">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <button
        className="fullscreen-toggle"
        type="button"
        onClick={toggleFullscreen}
        aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
        title={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}
      >
        {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
      </button>

      <section
        className="bia-display"
        aria-label="Conteúdo informativo sobre avaliação de bioimpedância"
      >
        <AnimatePresence mode="wait">
          <motion.article
            key={active}
            className="slide"
            initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -28, filter: "blur(8px)" }}
            transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="graphic-stage">
              <SlideVisual kind={slide.kind} />
            </div>

            <motion.section className="copy-panel">
              <motion.p
                className="eyebrow"
                initial={textEffect.eyebrow.initial}
                animate={textEffect.eyebrow.animate}
                transition={{ delay: 0.12, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
              >
                {slide.eyebrow}
              </motion.p>
              <motion.h1
                initial={textEffect.title.initial}
                animate={textEffect.title.animate}
                transition={{ delay: 0.2, duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="intro"
                initial={textEffect.body.initial}
                animate={textEffect.body.animate}
                transition={{ delay: 0.34, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
              >
                {slide.body}
              </motion.p>

              <motion.ul
                className="detail-list"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.11, delayChildren: 0.58 } },
                }}
              >
                {slide.details.map((detail) => (
                  <motion.li
                    key={detail}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: { opacity: 1, x: 0 },
                    }}
                  >
                    {detail}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          </motion.article>
        </AnimatePresence>

        <Footer active={active} setActive={setActive} />
      </section>

      <style>{`
        :root {
          --black: #050505;
          --white: #f7f5ef;
          --muted: rgba(247,245,239,.64);
          --soft: rgba(247,245,239,.78);
          --line: rgba(255,255,255,.12);
          --gold: #f3c63a;
          --gold-soft: rgba(243,198,58,.16);
          --cyan: #39d9d1;
          --green: #43d477;
          --red: #f0524d;
          --blue: #4aa8ff;
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: #000; }
        .bia-viewport {
          position: relative;
          width: 100vw;
          min-height: 100dvh;
          display: flex;
          justify-content: center;
          overflow: hidden;
          background: #000;
          color: var(--white);
          font-family: Arial, Helvetica, sans-serif;
        }
        .bia-display {
          position: relative;
          z-index: 1;
          width: min(100vw, calc(100dvh * 0.5625));
          height: 100dvh;
          min-height: 100vh;
          padding: clamp(30px, 4.2vh, 76px) clamp(30px, 5.2vw, 66px) clamp(30px, 3.8vh, 70px);
          display: grid;
          grid-template-rows: 1fr auto;
          background: #000;
        }
        .ambient {
          position: absolute;
          border-radius: 999px;
          pointer-events: none;
          filter: blur(110px);
          opacity: .14;
        }
        .ambient-one { width: 360px; height: 360px; background: var(--gold); top: 10%; right: calc(50% - 250px); }
        .ambient-two { width: 260px; height: 260px; background: var(--cyan); bottom: 16%; left: calc(50% - 220px); opacity: .08; }
        .fullscreen-toggle {
          position: fixed;
          top: clamp(14px, 2vh, 24px);
          right: clamp(14px, 2vh, 24px);
          z-index: 20;
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(243,198,58,.38);
          border-radius: 999px;
          background: rgba(5,5,5,.72);
          color: var(--gold);
          box-shadow: 0 12px 40px rgba(0,0,0,.28);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: transform .2s ease, border-color .2s ease, background .2s ease;
        }
        .fullscreen-toggle:hover {
          transform: scale(1.06);
          border-color: rgba(243,198,58,.72);
          background: rgba(20,20,20,.82);
        }
        .slide {
          min-height: 100%;
          display: grid;
          grid-template-rows: minmax(310px, .92fr) auto;
          gap: clamp(18px, 2.6vh, 42px);
        }
        .graphic-stage {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 0;
        }
        .visual-shell {
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 30px;
          background:
            radial-gradient(circle at 22% 12%, rgba(243,198,58,.12), transparent 32%),
            rgba(255,255,255,.018);
          padding: clamp(22px, 2.8vh, 38px);
          overflow: hidden;
        }
        .copy-panel {
          padding-bottom: clamp(8px, 1vh, 14px);
        }
        .eyebrow {
          margin: 0 0 clamp(14px, 1.7vh, 24px);
          color: var(--gold);
          font-weight: 700;
          letter-spacing: .25em;
          font-size: clamp(10px, .98vh, 14px);
        }
        h1 {
          max-width: 96%;
          margin: 0;
          font-size: clamp(31px, 3.65vh, 55px);
          line-height: 1.08;
          font-weight: 500;
        }
        .intro {
          max-width: 94%;
          margin: clamp(15px, 1.8vh, 28px) 0 0;
          font-size: clamp(14px, 1.35vh, 20px);
          line-height: 1.55;
          color: var(--muted);
        }
        .detail-list {
          list-style: none;
          margin: clamp(16px, 1.9vh, 28px) 0 0;
          padding: 0;
          display: grid;
          gap: clamp(9px, 1vh, 14px);
        }
        .detail-list li {
          position: relative;
          padding-left: 20px;
          color: var(--soft);
          font-size: clamp(12px, 1.12vh, 16px);
          line-height: 1.42;
        }
        .detail-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .64em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 14px rgba(243,198,58,.58);
        }
        .metric-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 22px;
        }
        .mini-card {
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 16px;
          background: rgba(0,0,0,.18);
        }
        .mini-card span {
          display: block;
          color: var(--muted);
          font-size: clamp(10px, .95vh, 13px);
          letter-spacing: .12em;
          margin-bottom: 10px;
        }
        .mini-card strong {
          display: block;
          color: var(--gold);
          font-size: clamp(21px, 2.3vh, 34px);
          font-weight: 500;
        }
        .overview-orbit,
        .ratio-zone,
        .cell-zone {
          position: relative;
          display: grid;
          place-items: center;
          min-height: clamp(280px, 34vh, 450px);
        }
        .orbit-label {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 10px 13px;
          background: rgba(0,0,0,.32);
          color: var(--soft);
          font-size: clamp(10px, 1vh, 14px);
        }
        .orbit-label svg { color: var(--gold); }
        .ol-1 { top: 5%; left: 5%; }
        .ol-2 { top: 15%; right: 4%; }
        .ol-3 { bottom: 17%; left: 0; }
        .ol-4 { bottom: 6%; right: 8%; }
        .ring-center {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          text-align: center;
        }
        .ring-center span { color: var(--muted); letter-spacing: .16em; font-size: clamp(10px, 1vh, 14px); }
        .ring-center strong { font-size: clamp(45px, 5.7vh, 82px); font-weight: 500; color: var(--gold); }
        .ring-center small { color: var(--muted); font-size: clamp(11px, 1.05vh, 16px); }
        .zone-stack {
          display: grid;
          gap: 8px;
          margin-top: 20px;
        }
        .zone-row {
          display: grid;
          grid-template-columns: 92px 1fr;
          gap: 12px;
          align-items: center;
          color: var(--muted);
          font-size: clamp(10px, .95vh, 13px);
        }
        .zone-track {
          height: 9px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          overflow: hidden;
        }
        .zone-fill {
          height: 100%;
          border-radius: 999px;
        }
        .dual-bars {
          display: grid;
          gap: 18px;
        }
        .large-bar-label {
          display: flex;
          justify-content: space-between;
          color: var(--muted);
          font-size: clamp(12px, 1.08vh, 16px);
          margin-bottom: 9px;
        }
        .large-bar-label strong {
          color: var(--gold);
          font-weight: 500;
        }
        .large-track {
          height: 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          overflow: hidden;
        }
        .large-fill {
          height: 100%;
          border-radius: 999px;
        }
        .ratio-circles {
          position: relative;
          width: min(100%, 440px);
          height: clamp(260px, 30vh, 390px);
        }
        .ratio-circle {
          position: absolute;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid var(--line);
          background: rgba(255,255,255,.025);
          text-align: center;
        }
        .ratio-circle strong { display: block; font-size: clamp(36px, 4.7vh, 66px); font-weight: 500; }
        .ratio-circle span { display: block; margin-top: 6px; color: var(--muted); font-size: clamp(10px, .95vh, 14px); letter-spacing: .14em; }
        .muscle-circle { width: 58%; aspect-ratio: 1; left: 0; top: 8%; color: var(--green); }
        .fat-circle { width: 45%; aspect-ratio: 1; right: 0; bottom: 3%; color: var(--gold); }
        .ratio-badge {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 118px;
          height: 118px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #050505;
          border: 1px solid rgba(243,198,58,.36);
          color: var(--white);
          text-align: center;
        }
        .hydration-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 13px;
        }
        .water-drop {
          min-height: clamp(190px, 23vh, 300px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid rgba(57,217,209,.24);
          border-radius: 24px;
          background: rgba(57,217,209,.045);
          padding: clamp(16px, 2vh, 25px);
        }
        .water-drop svg { color: var(--cyan); }
        .water-drop strong { color: var(--cyan); font-size: clamp(29px, 3.5vh, 52px); font-weight: 500; }
        .water-drop span { color: var(--muted); font-size: clamp(10px, .95vh, 14px); line-height: 1.35; }
        .compartment-bars {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: end;
          min-height: clamp(270px, 33vh, 420px);
        }
        .compartment {
          position: relative;
          min-height: clamp(230px, 29vh, 360px);
          border: 1px solid var(--line);
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          align-items: end;
          justify-content: center;
          padding: 18px;
          background: rgba(255,255,255,.018);
        }
        .compartment-fill {
          position: absolute;
          inset-inline: 0;
          bottom: 0;
          border-radius: 28px 28px 0 0;
        }
        .compartment-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .compartment-content strong { display: block; font-size: clamp(35px, 4.4vh, 62px); font-weight: 500; }
        .compartment-content span { color: var(--muted); letter-spacing: .18em; font-size: clamp(10px, .95vh, 14px); }
        .metabolism-layout {
          display: grid;
          grid-template-columns: .92fr 1fr;
          gap: 18px;
          align-items: stretch;
        }
        .bmi-card,
        .tmb-card {
          border: 1px solid var(--line);
          border-radius: 26px;
          padding: clamp(20px, 2.4vh, 32px);
          background: rgba(255,255,255,.02);
        }
        .bmi-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(250px, 29vh, 380px);
        }
        .bmi-card span,
        .tmb-card span {
          color: var(--muted);
          letter-spacing: .18em;
          font-size: clamp(10px, .95vh, 14px);
        }
        .bmi-card strong {
          color: var(--gold);
          font-size: clamp(52px, 7vh, 96px);
          font-weight: 500;
        }
        .tmb-card {
          display: grid;
          place-items: center;
          text-align: center;
        }
        .tmb-card strong {
          display: block;
          margin: 16px 0 7px;
          color: var(--gold);
          font-size: clamp(38px, 4.8vh, 72px);
          font-weight: 500;
        }
        .phase-wrap { position: relative; width: min(100%, 570px); margin-bottom: clamp(52px, 5.4vh, 88px); }
        .phase-svg { width: 100%; height: auto; display: block; }
        .phase-value { position: absolute; bottom: -23%; inset-inline: 0; text-align: center; }
        .phase-value strong { display: block; font-size: clamp(42px, 5.2vh, 72px); color: var(--gold); font-weight: 500; }
        .phase-value span { display: block; margin-top: 6px; color: var(--muted); letter-spacing: .16em; font-size: clamp(10px, 1vh, 14px); }
        .footer { display: flex; flex-direction: column; gap: clamp(22px, 2.5vh, 38px); }
        .disclaimer { margin: 0; color: rgba(247,245,239,.42); line-height: 1.5; font-size: clamp(10px, .9vh, 13px); }
        .slide-nav { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--line); padding-top: clamp(20px, 2.2vh, 30px); }
        .dots { display: flex; align-items: center; gap: 8px; }
        .dot {
          height: 5px; width: 18px; padding: 0; border: 0; cursor: pointer;
          border-radius: 50px; background: rgba(255,255,255,.16); overflow: hidden;
        }
        .dot.active { width: 58px; background: rgba(243,198,58,.2); }
        .dot-progress { display: block; height: 100%; width: 100%; background: var(--gold); transform-origin: left; }
        .footer-logo {
          position: relative;
          width: clamp(118px, 13vh, 176px);
          height: clamp(32px, 3.9vh, 50px);
          opacity: .9;
        }
        @media (max-width: 560px) {
          .slide { grid-template-rows: minmax(290px, .84fr) auto; }
          .metric-row,
          .hydration-grid,
          .metabolism-layout {
            grid-template-columns: 1fr;
          }
          .metric-row,
          .hydration-grid {
            gap: 10px;
          }
          .water-drop { min-height: 112px; }
          .compartment-bars { gap: 11px; }
          .mini-card { padding: 13px; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
        }
      `}</style>
    </main>
  );
}

function SlideVisual({ kind }: { kind: SlideKind }) {
  switch (kind) {
    case "overview":
      return <OverviewVisual />;
    case "fat":
      return <FatVisual />;
    case "muscle":
      return <MuscleVisual />;
    case "ratio":
      return <RatioVisual />;
    case "hydration":
      return <HydrationVisual />;
    case "water":
      return <WaterVisual />;
    case "metabolism":
      return <MetabolismVisual />;
    case "cellular":
      return <CellularVisual />;
  }
}

function OverviewVisual() {
  return (
    <div className="visual-shell overview-orbit">
      <svg width="78%" viewBox="0 0 360 360" aria-hidden="true">
        <circle cx="180" cy="180" r="138" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="18" />
        <motion.circle
          cx="180"
          cy="180"
          r="138"
          fill="none"
          stroke="#f3c63a"
          strokeWidth="18"
          strokeLinecap="round"
          transform="rotate(-90 180 180)"
          pathLength="1"
          strokeDasharray=".72 1"
          initial={{ strokeDashoffset: 1 }}
          animate={{ strokeDashoffset: 0.28 }}
          transition={{ duration: 1.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.circle
          cx="180"
          cy="180"
          r="104"
          fill="none"
          stroke="rgba(57,217,209,.25)"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        />
      </svg>
      <div className="ring-center">
        <span>LEITURA INTEGRADA</span>
        <strong>b.IA</strong>
        <small>biomarcadores corporais</small>
      </div>
      <motion.div className="orbit-label ol-1" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }}>
        <Scale size={16} /> Gordura
      </motion.div>
      <motion.div className="orbit-label ol-2" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
        <Dumbbell size={16} /> Massa
      </motion.div>
      <motion.div className="orbit-label ol-3" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.85 }}>
        <Droplets size={16} /> Hidratação
      </motion.div>
      <motion.div className="orbit-label ol-4" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }}>
        <Waves size={16} /> Célula
      </motion.div>
    </div>
  );
}

function FatVisual() {
  const zones = [
    { label: "Essencial", color: "#39d9d1", width: "16%" },
    { label: "Baixa", color: "#43d477", width: "31%" },
    { label: "Média", color: "#f3c63a", width: "55%" },
    { label: "Alta", color: "#f0a647", width: "76%" },
    { label: "Muito alta", color: "#f0524d", width: "92%" },
  ];

  return (
    <div className="visual-shell">
      <div className="overview-orbit">
        <svg width="70%" viewBox="0 0 360 360" aria-hidden="true">
          <circle cx="180" cy="180" r="126" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="22" />
          <motion.circle
            cx="180"
            cy="180"
            r="126"
            fill="none"
            stroke="#f3c63a"
            strokeWidth="22"
            strokeLinecap="round"
            transform="rotate(-90 180 180)"
            pathLength="1"
            strokeDasharray="1 1"
            initial={{ strokeDashoffset: 1 }}
            animate={{ strokeDashoffset: 0.38 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="ring-center">
          <span>GORDURA TOTAL</span>
          <strong>24,8%</strong>
          <small>18,4 kg</small>
        </div>
      </div>
      <div className="zone-stack">
        {zones.map((zone, index) => (
          <div className="zone-row" key={zone.label}>
            <span>{zone.label}</span>
            <div className="zone-track">
              <motion.div
                className="zone-fill"
                style={{ background: zone.color }}
                initial={{ width: 0 }}
                animate={{ width: zone.width }}
                transition={{ duration: 0.8, delay: 0.15 + index * 0.08 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MuscleVisual() {
  return (
    <div className="visual-shell">
      <div className="dual-bars">
        {[
          { label: "Massa magra", value: "55,8 kg", pct: "75%", color: "#43d477" },
          { label: "Massa muscular", value: "31,0 kg", pct: "56%", color: "#f3c63a" },
          { label: "Reserva funcional", value: "estável", pct: "68%", color: "#39d9d1" },
        ].map((item, index) => (
          <div key={item.label}>
            <div className="large-bar-label">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <div className="large-track">
              <motion.div
                className="large-fill"
                style={{ background: item.color }}
                initial={{ width: 0 }}
                animate={{ width: item.pct }}
                transition={{ duration: 1, delay: 0.2 + index * 0.14, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="metric-row">
        <div className="mini-card">
          <span>LIVRE DE GORDURA</span>
          <strong>75%</strong>
        </div>
        <div className="mini-card">
          <span>MÚSCULO</span>
          <strong>31,0</strong>
        </div>
        <div className="mini-card">
          <span>FUNÇÃO</span>
          <strong>OK</strong>
        </div>
      </div>
    </div>
  );
}

function RatioVisual() {
  return (
    <div className="visual-shell ratio-zone">
      <div className="ratio-circles">
        <motion.div className="ratio-circle muscle-circle" initial={{ scale: 0.82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75 }}>
          <div>
            <strong>31,0</strong>
            <span>KG MÚSCULO</span>
          </div>
        </motion.div>
        <motion.div className="ratio-circle fat-circle" initial={{ scale: 0.82, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.75, delay: 0.16 }}>
          <div>
            <strong>18,4</strong>
            <span>KG GORDURA</span>
          </div>
        </motion.div>
        <motion.div className="ratio-badge" initial={{ opacity: 0, rotate: -12 }} animate={{ opacity: 1, rotate: 0 }} transition={{ delay: 0.42 }}>
          <div>
            <Split size={24} color="#f3c63a" />
            <span>1,68</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function HydrationVisual() {
  return (
    <div className="visual-shell hydration-grid">
      {[
        { label: "Água corporal total", value: "53,2%", icon: Droplets },
        { label: "Índice de hidratação", value: "Adeq.", icon: ShieldCheck },
        { label: "Água na massa magra", value: "70%+", icon: Activity },
      ].map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            className="water-drop"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12, duration: 0.66 }}
          >
            <Icon size={30} strokeWidth={1.7} />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

function WaterVisual() {
  return (
    <div className="visual-shell compartment-bars">
      <div className="compartment">
        <motion.div
          className="compartment-fill"
          style={{ background: "linear-gradient(180deg, rgba(74,168,255,.85), rgba(57,217,209,.35))" }}
          initial={{ height: "0%" }}
          animate={{ height: "72%" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <div className="compartment-content">
          <strong style={{ color: "#39d9d1" }}>AIC</strong>
          <span>INTRACELULAR</span>
        </div>
      </div>
      <div className="compartment">
        <motion.div
          className="compartment-fill"
          style={{ background: "linear-gradient(180deg, rgba(243,198,58,.75), rgba(243,198,58,.22))" }}
          initial={{ height: "0%" }}
          animate={{ height: "43%" }}
          transition={{ duration: 1.1, delay: 0.18, ease: "easeOut" }}
        />
        <div className="compartment-content">
          <strong style={{ color: "#f3c63a" }}>AEC</strong>
          <span>EXTRACELULAR</span>
        </div>
      </div>
    </div>
  );
}

function MetabolismVisual() {
  return (
    <div className="visual-shell metabolism-layout">
      <div className="bmi-card">
        <Gauge size={32} color="#f3c63a" strokeWidth={1.7} />
        <div>
          <span>IMC</span>
          <strong>24,2</strong>
        </div>
      </div>
      <div className="tmb-card">
        <div>
          <Flame size={42} color="#f3c63a" strokeWidth={1.6} />
          <strong>1.610</strong>
          <span>KCAL EM REPOUSO</span>
        </div>
      </div>
    </div>
  );
}

function CellularVisual() {
  const points = useMemo(
    () => [
      { label: "Estresse", icon: HeartPulse, x: "7%", y: "7%" },
      { label: "Inflamação", icon: CircleDot, x: "72%", y: "12%" },
      { label: "Músculo", icon: Dumbbell, x: "2%", y: "73%" },
      { label: "Longevidade", icon: Layers3, x: "67%", y: "78%" },
    ],
    []
  );

  return (
    <div className="visual-shell cell-zone">
      <div className="phase-wrap">
        <svg className="phase-svg" viewBox="0 0 500 300" aria-hidden="true">
          <path d="M 55 250 A 195 195 0 0 1 445 250" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="23" strokeLinecap="round" />
          <path d="M 55 250 A 195 195 0 0 1 445 250" fill="none" stroke="#f0524d" strokeWidth="23" strokeLinecap="round" pathLength="1" strokeDasharray=".18 .82" />
          <path d="M 55 250 A 195 195 0 0 1 445 250" fill="none" stroke="#f3c63a" strokeWidth="23" pathLength="1" strokeDasharray=".31 .69" strokeDashoffset="-.18" />
          <path d="M 55 250 A 195 195 0 0 1 445 250" fill="none" stroke="#43d477" strokeWidth="23" pathLength="1" strokeDasharray=".31 .69" strokeDashoffset="-.49" />
          <path d="M 55 250 A 195 195 0 0 1 445 250" fill="none" stroke="#39d9d1" strokeWidth="23" pathLength="1" strokeDasharray=".20 .80" strokeDashoffset="-.80" strokeLinecap="round" />
          <motion.line
            x1="250"
            y1="248"
            x2="170"
            y2="104"
            stroke="#f3c63a"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ rotate: -78 }}
            animate={{ rotate: 0 }}
            style={{ transformOrigin: "250px 248px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <circle cx="250" cy="248" r="10" fill="#f3c63a" />
        </svg>
        <div className="phase-value">
          <strong>6,8°</strong>
          <span>ÂNGULO DE FASE</span>
        </div>
      </div>
      {points.map((point, index) => {
        const Icon = point.icon;

        return (
          <motion.div
            key={point.label}
            className="orbit-label"
            style={{ left: point.x, top: point.y }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 + index * 0.1 }}
          >
            <Icon size={15} /> {point.label}
          </motion.div>
        );
      })}
    </div>
  );
}

function Footer({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) {
  return (
    <footer className="footer">
      <p className="disclaimer">
        Indicadores exibidos apenas para demonstração visual. A interpretação
        da avaliação deve ser feita por um profissional.
      </p>
      <div className="slide-nav">
        <div className="dots">
          {slides.map((slide, index) => (
            <button
              key={slide.kind}
              className={`dot ${index === active ? "active" : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Abrir tela ${index + 1}`}
            >
              {index === active && (
                <motion.span
                  className="dot-progress"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: DURATION / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
        <div className="footer-logo" aria-label="Fitness Exclusive">
          <Image
            src="/images/logo.webp"
            alt="Fitness Exclusive"
            fill
            sizes="176px"
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
