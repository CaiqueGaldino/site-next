'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  decimals = 1,
  duration = 1000,
}) => {
  const [displayValue, setDisplayValue] = useState(value);
  const startValueRef = useRef(displayValue);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = Date.now();

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const newValue =
        startValueRef.current + (value - startValueRef.current) * easeOutQuad(progress);
      setDisplayValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [value, duration]);

  const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);

  return <span>{displayValue.toFixed(decimals)}</span>;
};

interface DataPanelsProps {
  metrics: {
    bodyFat: number;
    muscleMass: number;
    bodyWater: number;
    visceralFat: number;
    biologicalAge: number;
    calorieExpenditure: number;
  };
}

export const DataPanels: React.FC<DataPanelsProps> = ({ metrics }) => {
  const getStatus = (value: number, min: number, max: number) => {
    if (value < min) return { status: 'Baixo', color: 'text-blue-400' };
    if (value > max) return { status: 'Alto', color: 'text-red-400' };
    return { status: 'Ideal', color: 'text-green-400' };
  };

  const getStatusBar = (value: number, min: number, max: number) => {
    const percent = Math.min(Math.max((value - min) / (max - min) * 100, 0), 100);
    let bgColor = 'bg-green-500';
    if (percent < 0 || percent > 100) bgColor = 'bg-red-500';
    else if (percent < 30 || percent > 70) bgColor = 'bg-yellow-500';

    return percent;
  };

  const bodyFatStatus = getStatus(metrics.bodyFat, 15, 30);
  const bodyFatPercent = getStatusBar(metrics.bodyFat, 15, 30);

  const muscleMassStatus = getStatus(metrics.muscleMass, 30, 50);
  const muscleMassPercent = getStatusBar(metrics.muscleMass, 30, 50);

  const bodyWaterStatus = getStatus(metrics.bodyWater, 50, 65);
  const bodyWaterPercent = getStatusBar(metrics.bodyWater, 50, 65);

  const visceralFatStatus = getStatus(metrics.visceralFat, 0, 3);
  const visceralFatPercent = getStatusBar(metrics.visceralFat, 0, 3);

  return (
    <div className="flex flex-col gap-8 w-full px-6 mt-8">
      {/* TOP SECTION */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-yellow-400 mb-6">Composição Corporal</h3>

        {/* Massa Gorda */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-4 border border-yellow-600/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Massa Gorda</span>
            <span className={`text-sm font-bold ${bodyFatStatus.color}`}>
              {bodyFatStatus.status}
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-2">
            <AnimatedNumber value={metrics.bodyFat} decimals={1} />%
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-full transition-all duration-1000 rounded-full"
              style={{ width: `${bodyFatPercent}%` }}
            />
          </div>
          <div className="text-xs text-slate-400 mt-2">Alvo: 15-30%</div>
        </div>

        {/* Massa Magra */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-4 border border-yellow-600/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Massa Magra</span>
            <span className={`text-sm font-bold ${muscleMassStatus.color}`}>
              {muscleMassStatus.status}
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-2">
            <AnimatedNumber value={metrics.muscleMass} decimals={1} />
            kg
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-500 to-amber-500 h-full transition-all duration-1000 rounded-full"
              style={{ width: `${muscleMassPercent}%` }}
            />
          </div>
          <div className="text-xs text-slate-400 mt-2">Alvo: 30-50kg</div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-amber-400 mb-6">Saúde Celular</h3>

        {/* Hidratação */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-4 border border-yellow-600/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Hidratação</span>
            <span className={`text-sm font-bold ${bodyWaterStatus.color}`}>
              {bodyWaterStatus.status}
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-2">
            <AnimatedNumber value={metrics.bodyWater} decimals={1} />%
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-yellow-300 to-yellow-400 h-full transition-all duration-1000 rounded-full"
              style={{ width: `${bodyWaterPercent}%` }}
            />
          </div>
          <div className="text-xs text-slate-400 mt-2">Alvo: 50-65%</div>
        </div>

        {/* Gordura Visceral */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-lg p-4 border border-yellow-600/30">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-semibold">Gordura Visceral</span>
            <span className={`text-sm font-bold ${visceralFatStatus.color}`}>
              {visceralFatStatus.status}
            </span>
          </div>
          <div className="text-2xl font-bold text-yellow-400 mb-2">
            <AnimatedNumber value={metrics.visceralFat} decimals={1} />
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-400 to-red-500 h-full transition-all duration-1000 rounded-full"
              style={{ width: `${visceralFatPercent}%` }}
            />
          </div>
          <div className="text-xs text-slate-400 mt-2">Alvo: 0-3.0</div>
        </div>
      </div>
    </div>
  );
};
