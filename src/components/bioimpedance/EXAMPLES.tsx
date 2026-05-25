'use client';

/**
 * EXEMPLOS AVANÇADOS DE USO - BioimpedanceViewer
 * 
 * Este arquivo contém exemplos de customizações avançadas
 * e padrões de integração com seu sistema.
 */

import { BioimpedanceViewer } from '@/components/bioimpedance';
import { useState } from 'react';

/**
 * EXEMPLO 1: Página com dados estáticos
 */
export const Example1_StaticData = () => {
  return <BioimpedanceViewer mockData={true} />;
};

/**
 * EXEMPLO 2: Página com alternância entre modo demo e produção
 */
export const Example2_DemoProduction = () => {
  const [isProduction, setIsProduction] = useState(false);

  return (
    <div>
      <div className="bg-slate-900 p-4 text-white">
        <button
          onClick={() => setIsProduction(!isProduction)}
          className="px-4 py-2 bg-cyan-600 rounded hover:bg-cyan-500"
        >
          {isProduction ? 'Modo Demo' : 'Modo Produção'} (Atual)
        </button>
      </div>
      <BioimpedanceViewer mockData={!isProduction} />
    </div>
  );
};

/**
 * EXEMPLO 3: Com carregamento de dados de usuário autenticado
 */
export const Example3_WithUserData = ({ userId }: { userId: string }) => {
  // Aqui você buscaria dados do usuário
  // const { data: userMetrics } = useSWR(`/api/users/${userId}/bioimpedance`)

  return <BioimpedanceViewer mockData={true} />;
};

/**
 * EXEMPLO 4: Componente de comparação entre datas
 */
export const Example4_DateComparison = () => {
  const [selectedDate, setSelectedDate] = useState('today');

  // Simular diferentes dados para diferentes datas
  const getMockDataForDate = (date: string) => {
    const baseData = {
      bodyFat: 22.8,
      muscleMass: 47.6,
      bodyWater: 60.0,
      visceralFat: 2.8,
      biologicalAge: 35,
      calorieExpenditure: 2300,
    };

    // Simular variação histórica
    const variations: { [key: string]: number } = {
      'week-ago': 0.8,
      'month-ago': 2.1,
      'today': 0,
    };

    const variation = variations[date] || 0;
    return {
      ...baseData,
      bodyFat: baseData.bodyFat + variation,
      muscleMass: baseData.muscleMass - variation * 0.3,
    };
  };

  return (
    <div>
      <div className="bg-slate-900 p-6 text-white border-b border-slate-700">
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setSelectedDate('month-ago')}
            className={`px-4 py-2 rounded ${
              selectedDate === 'month-ago'
                ? 'bg-cyan-600'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Há 1 mês
          </button>
          <button
            onClick={() => setSelectedDate('week-ago')}
            className={`px-4 py-2 rounded ${
              selectedDate === 'week-ago'
                ? 'bg-cyan-600'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Há 1 semana
          </button>
          <button
            onClick={() => setSelectedDate('today')}
            className={`px-4 py-2 rounded ${
              selectedDate === 'today'
                ? 'bg-cyan-600'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Hoje
          </button>
        </div>
        <p className="text-sm text-slate-400">
          Dados comparativos selecionados: {selectedDate}
        </p>
      </div>
      {/* Renderizar o componente com dados variados */}
      {/* <BioimpedanceViewer data={getMockDataForDate(selectedDate)} /> */}
      <BioimpedanceViewer mockData={true} />
    </div>
  );
};

/**
 * EXEMPLO 5: Contexto de tema customizado
 */
interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

const themeConfigs: { [key: string]: ThemeConfig } = {
  default: {
    primaryColor: '#00ff88',
    secondaryColor: '#4a90ff',
    accentColor: '#ff00ff',
  },
  professional: {
    primaryColor: '#0084ff',
    secondaryColor: '#00b4ff',
    accentColor: '#00ff88',
  },
  energetic: {
    primaryColor: '#ff0080',
    secondaryColor: '#ff6600',
    accentColor: '#00ffff',
  },
};

export const Example5_ThemeSelector = () => {
  const [theme, setTheme] = useState<keyof typeof themeConfigs>('default');

  return (
    <div>
      <div className="bg-slate-900 p-6 text-white border-b border-slate-700">
        <div className="flex gap-4">
          {Object.keys(themeConfigs).map((themeName) => (
            <button
              key={themeName}
              onClick={() => setTheme(themeName as keyof typeof themeConfigs)}
              className={`px-4 py-2 rounded capitalize ${
                theme === themeName
                  ? 'bg-cyan-600'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              {themeName}
            </button>
          ))}
        </div>
      </div>
      {/* Aqui você passaria o tema como prop */}
      <BioimpedanceViewer mockData={true} />
    </div>
  );
};

/**
 * EXEMPLO 6: Com histórico de avaliações
 */
export const Example6_HistoryView = () => {
  const mockHistory = [
    { date: '2026-05-21', bodyFat: 22.8, muscleMass: 47.6 },
    { date: '2026-05-14', bodyFat: 23.1, muscleMass: 47.3 },
    { date: '2026-05-07', bodyFat: 23.4, muscleMass: 47.0 },
    { date: '2026-04-30', bodyFat: 24.1, muscleMass: 46.5 },
  ];

  const [selectedRecord, setSelectedRecord] = useState(mockHistory[0]);

  return (
    <div>
      <div className="bg-slate-900 p-6 text-white border-b border-slate-700">
        <h3 className="text-lg font-bold mb-4">Histórico de Avaliações</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {mockHistory.map((record, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRecord(record)}
              className={`p-3 rounded cursor-pointer transition ${
                selectedRecord === record
                  ? 'bg-cyan-600'
                  : 'bg-slate-700 hover:bg-slate-600'
              }`}
            >
              <p className="text-sm">{record.date}</p>
              <p className="text-xs text-slate-300">
                Gordura: {record.bodyFat}% | Magra: {record.muscleMass}kg
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Renderizar com dados do histórico */}
      <BioimpedanceViewer mockData={true} />
    </div>
  );
};

/**
 * EXEMPLO 7: Componente customizado em modal
 */
export const Example7_ModalViewer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500"
      >
        Abrir Análise de Bioimpedância
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-slate-900 rounded-lg w-11/12 h-5/6 overflow-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white bg-red-600 px-4 py-2 rounded hover:bg-red-500 z-10"
            >
              Fechar
            </button>
            <div className="w-full h-full">
              <BioimpedanceViewer mockData={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * EXEMPLO 8: Com webhooks para atualizar dados em tempo real
 */
export const Example8_RealTimeUpdates = () => {
  // Simulando conexão WebSocket
  // useEffect(() => {
  //   const ws = new WebSocket('wss://sua-api.com/bioimpedance/ws');
  //   ws.onmessage = (event) => {
  //     const newMetrics = JSON.parse(event.data);
  //     setMetrics(newMetrics);
  //   };
  //   return () => ws.close();
  // }, []);

  return <BioimpedanceViewer mockData={true} />;
};

/**
 * EXEMPLO 9: Exportar dados para PDF/CSV
 */
export const Example9_ExportData = () => {
  const handleExportPDF = () => {
    // Implementar exportação para PDF
    console.log('Exportando PDF...');
  };

  const handleExportCSV = () => {
    // Implementar exportação para CSV
    console.log('Exportando CSV...');
  };

  return (
    <div>
      <div className="bg-slate-900 p-6 text-white border-b border-slate-700 flex gap-4">
        <button
          onClick={handleExportPDF}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
        >
          Exportar PDF
        </button>
        <button
          onClick={handleExportCSV}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
        >
          Exportar CSV
        </button>
      </div>
      <BioimpedanceViewer mockData={true} />
    </div>
  );
};

/**
 * EXEMPLO 10: Integração com dashboard
 */
export const Example10_Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-slate-950">
      {/* Painel principal */}
      <div className="lg:col-span-2">
        <BioimpedanceViewer mockData={true} />
      </div>

      {/* Painel lateral com controles */}
      <div className="bg-slate-900 rounded-lg p-6 text-white h-fit">
        <h3 className="text-lg font-bold mb-4">Controles</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Atualização Automática</label>
            <input type="checkbox" className="w-4 h-4" defaultChecked />
          </div>
          <div>
            <label className="block text-sm mb-2">Comparar com</label>
            <select className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white">
              <option>Mês anterior</option>
              <option>Semana anterior</option>
              <option>Linha de base</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2">Zoom</label>
            <input type="range" className="w-full" min="50" max="200" defaultValue="100" />
          </div>
          <button className="w-full bg-cyan-600 hover:bg-cyan-500 py-2 rounded mt-4">
            Atualizar
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// INSTRUÇÕES DE USO:
// ============================================================================
/**
 * 1. Copie o exemplo desejado
 * 2. Crie um novo arquivo ou use em page.tsx
 * 3. Adapte conforme necessário
 * 4. Integre com sua API/backend
 * 5. Teste responsividade
 * 
 * Para produção:
 * - Remova mockData={true}
 * - Configure fetch de dados reais
 * - Configure autenticação
 * - Otimize performance
 * - Teste em todos os navegadores
 */
