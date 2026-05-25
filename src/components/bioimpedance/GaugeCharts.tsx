'use client';

import { useEffect, useRef, useState } from 'react';

interface GaugeChartProps {
  value: number;
  max: number;
  label: string;
  unit?: string;
  color?: string;
}

const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  max,
  label,
  unit = '',
  color = '#00ff88',
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let animationId: number;
    const startTime = Date.now();
    const startValue = displayValue;
    const duration = 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
      const newValue = startValue + (value - startValue) * easeOutQuad(progress);
      setDisplayValue(newValue);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value]);

  const percentage = (displayValue / max) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  // Determine color based on value
  let statusColor = '#fbbf24'; // amarelo
  if (displayValue > max * 0.7) statusColor = '#f59e0b'; // amber
  if (displayValue > max * 0.9) statusColor = '#ff6b6b'; // vermelho

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-32 h-32 mb-4">
        {/* Gauge background */}
        <svg className="w-full h-full" viewBox="0 0 120 120">
          {/* Background arc */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke="#1f2937"
            strokeWidth="8"
            opacity="0.5"
          />

          {/* Colored arc */}
          <circle
            cx="60"
            cy="60"
            r="50"
            fill="none"
            stroke={statusColor}
            strokeWidth="8"
            strokeDasharray={`${(percentage / 100) * Math.PI * 100} 999`}
            strokeLinecap="round"
            opacity="0.8"
            style={{ transition: 'stroke-dasharray 0.5s ease-out' }}
          />

          {/* Needle */}
          <g style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '60px 60px' }}>
            <line
              x1="60"
              y1="60"
              x2="60"
              y2="15"
              stroke={statusColor}
              strokeWidth="3"
              opacity="0.9"
              style={{ transition: 'stroke 0.3s' }}
            />
            <circle cx="60" cy="60" r="4" fill={statusColor} />
          </g>

          {/* Center circle */}
          <circle cx="60" cy="60" r="6" fill="#0a0e27" />
          <circle cx="60" cy="60" r="4" fill={statusColor} opacity="0.5" />
        </svg>

        {/* Value text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-white">
            {displayValue.toFixed(1)}
            {unit && <span className="text-sm">{unit}</span>}
          </span>
        </div>
      </div>

      {/* Label */}
      <h4 className="text-center text-sm font-semibold text-gray-300 mt-2">{label}</h4>
    </div>
  );
};

interface GaugeChartsProps {
  metrics: {
    bodyFat: number;
    muscleMass: number;
    bodyWater: number;
    visceralFat: number;
    biologicalAge: number;
  };
}

export const GaugeCharts: React.FC<GaugeChartsProps> = ({ metrics }) => {
  return (
    <div className="w-full px-6 py-8 border-t border-slate-700">
      <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
        Análise Comparativa
      </h3>

      <div className="grid grid-cols-1 gap-4 max-w-lg mx-auto">
        <GaugeChart value={metrics.bodyFat} max={50} label="Massa Gorda" unit="%" />
        <GaugeChart value={metrics.muscleMass} max={60} label="Massa Magra" unit="kg" />
        <GaugeChart value={metrics.bodyWater} max={100} label="Hidratação" unit="%" />
        <GaugeChart value={metrics.visceralFat} max={10} label="Gordura Visceral" unit="" />
        <GaugeChart value={metrics.biologicalAge} max={80} label="Idade Biológica" unit="a" />
      </div>
    </div>
  );
};
