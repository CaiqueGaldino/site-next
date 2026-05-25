'use client';

import { useEffect, useState, type ComponentType, type CSSProperties } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import {
  Activity,
  Goal,
  LineChart,
  Radar as RadarIcon,
  ScanLine,
  TrendingUp,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

interface BioimpedanceViewerProps {
  mockData?: boolean;
}

type SceneKind = 'score' | 'evolution' | 'goals' | 'precision' | 'comparison';
type SceneMood = 'center' | 'topText' | 'bottomText';

interface Scene {
  id: SceneKind;
  eyebrow: string;
  title: string;
  text: string;
  metric: string;
  metricLabel: string;
  accent: string;
  icon: ComponentType<{ className?: string }>;
  mood: SceneMood;
}

const brandYellow = '#fac934';

const scenes: Scene[] = [
  {
    id: 'score',
    eyebrow: 'Avaliacao fisica',
    title: 'Comece com clareza.',
    text: 'Entenda o ponto de partida antes de mudar treino, dieta ou meta. A evolucao fica mais facil quando existe um numero para acompanhar.',
    metric: '86',
    metricLabel: 'score corporal',
    accent: brandYellow,
    icon: Activity,
    mood: 'bottomText',
  },
  {
    id: 'evolution',
    eyebrow: 'Evolucao',
    title: 'Veja o progresso acontecer.',
    text: 'Nem todo resultado aparece na balanca. Acompanhe gordura, massa magra e medidas em uma leitura visual de progresso real.',
    metric: '+12%',
    metricLabel: 'massa magra',
    accent: '#ffcf45',
    icon: LineChart,
    mood: 'bottomText',
  },
  {
    id: 'goals',
    eyebrow: 'Metas inteligentes',
    title: 'Transforme dados em plano.',
    text: 'Metas ficam mais precisas quando usam composicao corporal, hidratacao, cintura e constancia como referencia.',
    metric: '4',
    metricLabel: 'focos ativos',
    accent: '#f6bd22',
    icon: Goal,
    mood: 'topText',
  },
  {
    id: 'precision',
    eyebrow: 'Direcao',
    title: 'Treine com estrategia.',
    text: 'A avaliacao ajuda o professor a ajustar intensidade, frequencia e prioridades para cada momento do aluno.',
    metric: '360',
    metricLabel: 'visao completa',
    accent: brandYellow,
    icon: RadarIcon,
    mood: 'bottomText',
  },
  {
    id: 'comparison',
    eyebrow: 'Resultado',
    title: 'Compare cada retorno.',
    text: 'O antes e depois vira uma prova visual do esforco. Isso aumenta foco, motivacao e aderencia ao plano.',
    metric: '30',
    metricLabel: 'dias de ciclo',
    accent: '#ffd866',
    icon: TrendingUp,
    mood: 'topText',
  },
];

const areaData = [
  { label: 'S1', gordura: 31, massa: 42 },
  { label: 'S2', gordura: 29, massa: 44 },
  { label: 'S3', gordura: 27, massa: 45 },
  { label: 'S4', gordura: 26, massa: 48 },
  { label: 'S5', gordura: 24, massa: 51 },
  { label: 'S6', gordura: 22, massa: 55 },
];

const goalData = [
  { name: 'Forca', value: 82 },
  { name: 'Cintura', value: 72 },
  { name: 'Agua', value: 61 },
  { name: 'Sono', value: 68 },
];

const radarData = [
  { subject: 'Forca', score: 82 },
  { subject: 'Mobilidade', score: 64 },
  { subject: 'Resistencia', score: 76 },
  { subject: 'Core', score: 70 },
  { subject: 'Postura', score: 74 },
  { subject: 'Controle', score: 88 },
];

const comparisonData = [
  { name: 'Inicio', gordura: 31, massa: 42, aderencia: 22 },
  { name: 'Agora', gordura: 24, massa: 55, aderencia: 81 },
];

const sceneVariants: Variants = {
  enter: {
    opacity: 0,
    y: 42,
    scale: 0.96,
    filter: 'blur(16px)',
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.95,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -36,
    scale: 1.025,
    filter: 'blur(18px)',
    transition: {
      duration: 0.62,
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

const chartVariants: Variants = {
  enter: { opacity: 0, y: 34, rotateX: 10, scale: 0.94 },
  center: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
  },
};

const copyVariants: Variants = {
  enter: { opacity: 0, y: 28 },
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, delay: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
};

const moodClass: Record<SceneMood, { chart: string; copy: string }> = {
  center: {
    chart: 'top-[204px] h-[360px]',
    copy: 'bottom-[72px]',
  },
  topText: {
    chart: 'bottom-[48px] h-[334px]',
    copy: 'top-[118px]',
  },
  bottomText: {
    chart: 'top-[112px] h-[392px]',
    copy: 'bottom-[62px]',
  },
};

const ChartShell = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={chartVariants}
    className="chart-shell relative h-full w-full rounded-[30px] border border-white/10 bg-white/[0.035] p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-xl"
  >
    <div className="absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_35%,rgba(250,201,52,0.10))]" />
    <div className="relative h-full w-full">{children}</div>
  </motion.div>
);

const ScoreChart = ({ scene }: { scene: Scene }) => {
  return (
    <ChartShell>
      <div className="absolute inset-0 grid place-items-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.74, rotate: -24 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute h-[300px] w-[300px] rounded-full p-[28px] shadow-[0_0_70px_rgba(250,201,52,0.20)]"
          style={{
            background:
              'conic-gradient(from 225deg, #fac934 0deg, #fac934 300deg, rgba(255,255,255,0.08) 300deg, rgba(255,255,255,0.08) 360deg)',
          }}
        >
          <div className="h-full w-full rounded-full border border-white/10 bg-[#080805]" />
        </motion.div>
        <motion.div
          className="absolute h-[202px] w-[202px] rounded-full border border-dashed border-white/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.55 }}
          className="absolute text-center"
        >
          <ScanLine className="mx-auto mb-4 h-9 w-9 text-[#fac934]" />
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-zinc-500">{scene.metricLabel}</p>
          <p className="text-8xl font-black leading-none text-white">{scene.metric}</p>
        </motion.div>
      </div>
    </ChartShell>
  );
};

const ScoreSpotlight = ({ scene }: { scene: Scene }) => (
  <motion.div
    initial={{ opacity: 0, y: 28, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
    className="absolute left-0 right-0 top-[132px] z-10 grid place-items-center"
  >
    <div className="relative grid h-[310px] w-[310px] place-items-center rounded-full">
      <motion.div
        className="absolute inset-0 rounded-full p-[28px] shadow-[0_0_90px_rgba(250,201,52,0.22)]"
        style={{
          background:
            'conic-gradient(from 225deg, #fac934 0deg, #fac934 300deg, rgba(255,255,255,0.08) 300deg, rgba(255,255,255,0.08) 360deg)',
        }}
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="h-full w-full rounded-full border border-white/10 bg-[#070704]" />
      </motion.div>
      <motion.div
        className="absolute h-[206px] w-[206px] rounded-full border border-dashed border-white/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 13, repeat: Infinity, ease: 'linear' }}
      />
      <div className="relative text-center">
        <ScanLine className="mx-auto mb-4 h-9 w-9 text-[#fac934]" />
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-zinc-500">{scene.metricLabel}</p>
        <p className="mt-2 text-8xl font-black leading-none text-white">{scene.metric}</p>
      </div>
    </div>
  </motion.div>
);

const EvolutionChart = ({ scene }: { scene: Scene }) => (
  <ChartShell>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={areaData} margin={{ top: 30, right: 8, left: -28, bottom: 4 }}>
        <defs>
          <linearGradient id="massGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={scene.accent} stopOpacity={0.55} />
            <stop offset="100%" stopColor={scene.accent} stopOpacity={0.02} />
          </linearGradient>
          <linearGradient id="fatGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.28} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(255,255,255,0.07)" vertical={false} />
        <XAxis dataKey="label" tick={{ fill: '#71717a', fontSize: 11, fontWeight: 800 }} axisLine={false} tickLine={false} />
        <YAxis hide domain={[18, 58]} />
        <Area
          type="monotone"
          dataKey="gordura"
          stroke="rgba(255,255,255,0.36)"
          strokeWidth={3}
          fill="url(#fatGradient)"
          isAnimationActive
          animationDuration={1700}
        />
        <Area
          type="monotone"
          dataKey="massa"
          stroke={scene.accent}
          strokeWidth={5}
          fill="url(#massGradient)"
          isAnimationActive
          animationDuration={1900}
        />
      </AreaChart>
    </ResponsiveContainer>
    <MetricPill scene={scene} />
  </ChartShell>
);

const GoalsChart = ({ scene }: { scene: Scene }) => (
  <ChartShell>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={goalData} layout="vertical" margin={{ top: 24, right: 18, left: 8, bottom: 12 }}>
        <XAxis type="number" hide domain={[0, 100]} />
        <YAxis
          type="category"
          dataKey="name"
          width={74}
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#a1a1aa', fontSize: 11, fontWeight: 900 }}
        />
        <Bar dataKey="value" radius={[0, 12, 12, 0]} background={{ fill: 'rgba(255,255,255,0.08)', radius: 12 }} isAnimationActive animationDuration={1500}>
          {goalData.map((entry, index) => (
            <Cell key={entry.name} fill={index === 0 ? scene.accent : `rgba(250,201,52,${0.86 - index * 0.13})`} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    <MetricPill scene={scene} />
  </ChartShell>
);

const PrecisionChart = ({ scene }: { scene: Scene }) => (
  <ChartShell>
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={radarData} outerRadius="72%" margin={{ top: 18, right: 24, bottom: 18, left: 24 }}>
        <PolarGrid stroke="rgba(255,255,255,0.12)" />
        <PolarAngleAxis dataKey="subject" tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 900 }} />
        <Radar
          dataKey="score"
          stroke={scene.accent}
          strokeWidth={4}
          fill={scene.accent}
          fillOpacity={0.32}
          isAnimationActive
          animationDuration={1500}
        />
      </RadarChart>
    </ResponsiveContainer>
    <MetricPill scene={scene} suffix="graus" />
  </ChartShell>
);

const ComparisonChart = ({ scene }: { scene: Scene }) => (
  <ChartShell>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={comparisonData} margin={{ top: 26, right: 12, left: -22, bottom: 10 }}>
        <CartesianGrid stroke="rgba(255,255,255,0.07)" vertical={false} />
        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 900 }} />
        <YAxis hide domain={[0, 90]} />
        <Bar dataKey="gordura" fill="rgba(255,255,255,0.18)" radius={[10, 10, 0, 0]} isAnimationActive animationDuration={1100} />
        <Bar dataKey="massa" fill={scene.accent} radius={[10, 10, 0, 0]} isAnimationActive animationDuration={1450} />
        <Bar dataKey="aderencia" fill="#ffffff" radius={[10, 10, 0, 0]} isAnimationActive animationDuration={1750} />
      </BarChart>
    </ResponsiveContainer>
    <MetricPill scene={scene} suffix="dias" />
  </ChartShell>
);

const MetricPill = ({ scene, suffix }: { scene: Scene; suffix?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -10, scale: 0.92 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay: 0.8, duration: 0.5 }}
    className="absolute right-5 top-5 rounded-2xl bg-[#fac934] px-4 py-3 text-black shadow-[0_18px_40px_rgba(250,201,52,0.24)]"
  >
    <p className="text-2xl font-black leading-none">
      {scene.metric}
      {suffix ? <span className="ml-1 text-xs uppercase tracking-[0.12em]">{suffix}</span> : null}
    </p>
    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] opacity-70">{scene.metricLabel}</p>
  </motion.div>
);

const ActiveChart = ({ scene }: { scene: Scene }) => {
  if (scene.id === 'score') return <ScoreChart scene={scene} />;
  if (scene.id === 'evolution') return <EvolutionChart scene={scene} />;
  if (scene.id === 'goals') return <GoalsChart scene={scene} />;
  if (scene.id === 'precision') return <PrecisionChart scene={scene} />;
  return <ComparisonChart scene={scene} />;
};

export const BioimpedanceViewer: React.FC<BioimpedanceViewerProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const activeScene = scenes[activeIndex];
  const Icon = activeScene.icon;
  const layout = moodClass[activeScene.mood];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scenes.length);
    }, 7200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden bg-black text-white">
      <main
        className="screensaver relative mx-auto h-full w-full max-w-[520px] overflow-hidden bg-[#050505]"
        style={{ '--accent': activeScene.accent } as CSSProperties}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(250,201,52,0.21),transparent_38%),linear-gradient(180deg,#060606_0%,#0a0905_54%,#050505_100%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:42px_42px]" />
        <motion.div
          className="absolute -left-32 top-0 h-full w-60 rotate-12 bg-[linear-gradient(90deg,transparent,rgba(250,201,52,0.18),transparent)]"
          animate={{ x: ['0%', '360%'] }}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        <Image
          src="/images/logo.webp"
          alt="Fitness Exclusive"
          width={190}
          height={54}
          priority
          className="absolute left-1/2 top-7 z-30 h-[54px] w-auto -translate-x-1/2 object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)]"
        />

        <AnimatePresence mode="wait">
          <motion.section
            key={activeScene.id}
            variants={sceneVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 z-10"
          >
            {activeScene.id === 'score' ? (
              <ScoreSpotlight scene={activeScene} />
            ) : (
              <motion.div
                variants={chartVariants}
                className={`absolute left-5 right-5 z-10 ${layout.chart}`}
                style={{ perspective: 1200 }}
              >
                {mounted ? <ActiveChart scene={activeScene} /> : <div className="h-full w-full rounded-[30px] bg-white/[0.035]" />}
              </motion.div>
            )}

            <motion.div
              variants={copyVariants}
              className={`copy-panel absolute left-6 right-6 z-20 rounded-[26px] border border-white/10 bg-black/58 p-5 shadow-[0_28px_80px_rgba(0,0,0,0.64)] backdrop-blur-2xl ${layout.copy}`}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#fac934] text-black shadow-[0_18px_40px_rgba(250,201,52,0.28)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#fac934]">{activeScene.eyebrow}</p>
                  <p className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-600">Fitness Exclusive</p>
                </div>
              </div>
              <h1 className="max-w-[10ch] text-[2.65rem] font-black leading-[0.96] text-white">{activeScene.title}</h1>
              <p className="mt-4 text-[1rem] font-medium leading-relaxed text-zinc-300">{activeScene.text}</p>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      </main>

      <style jsx>{`
        .screensaver {
          isolation: isolate;
        }

        .chart-shell::after {
          content: '';
          position: absolute;
          inset: 1px;
          border-radius: 29px;
          pointer-events: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.16), inset 0 -60px 120px rgba(250, 201, 52, 0.08);
        }

        .copy-panel::before {
          content: '';
          position: absolute;
          left: 20px;
          right: 20px;
          top: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
};
