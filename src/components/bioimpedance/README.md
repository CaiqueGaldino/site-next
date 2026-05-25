# Página de Bioimpedância Animada

## 📋 Visão Geral

Página interativa de análise de Bioimpedância (BIA) localizada na rota `/bia` com visualização 3D em tempo real, sistema de partículas dinâmico e raios de luz animados.

## 🚀 Como Acessar

**URL:** `http://localhost:3000/bia`

## 📁 Estrutura de Arquivos

```
src/
├── app/
│   └── bia/
│       └── page.tsx                 # Página da rota /bia
└── components/
    └── bioimpedance/
        ├── index.ts                 # Exportações
        ├── Canvas3DRenderer.tsx     # Renderização 3D com Three.js
        ├── DataPanels.tsx           # Painéis de dados animados
        ├── GaugeCharts.tsx          # Gráficos tipo gauge
        └── BioimpedanceViewer.tsx   # Componente principal
```

## 🎨 Componentes

### Canvas3DRenderer.tsx
Responsável pela renderização 3D do corpo humano com:
- **Modelo 3D:** Silhueta humana em pose frontal (cabeça, tronco, braços, pernas)
- **Raios de Luz:** 12 raios dinâmicos com rotação contínua e pulsação
- **Sistema de Partículas:** 1500 partículas com movimento natural e atração ao centro
- **Iluminação:** Ambient light + 2 point lights com cores azul e magenta

**Props:**
```typescript
interface Canvas3DRendererProps {
  metrics: {
    bodyFat: number;
    muscleMass: number;
    bodyWater: number;
    visceralFat: number;
  };
}
```

### DataPanels.tsx
Exibe métricas em painéis lado a lado:
- **Painel Esquerdo:** Massa Gorda, Massa Magra
- **Painel Direito:** Hidratação, Gordura Visceral
- Barras de progresso animadas com cores dinâmicas
- Números animam quando os valores mudam

**Props:**
```typescript
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
```

### GaugeCharts.tsx
Gráficos tipo gauge circulares para 5 métricas principais:
- Massa Gorda (%)
- Massa Magra (kg)
- Hidratação (%)
- Gordura Visceral
- Idade Biológica (anos)

Animações: agulha desliza suavemente, cores mudam conforme valor

### BioimpedanceViewer.tsx
Componente principal que integra todos os outros.

**Props:**
```typescript
interface BioimpedanceViewerProps {
  mockData?: boolean;  // Se true, simula dados que mudam a cada 5s
}
```

## 🔧 Customização

### Alterar Dados de Entrada

Edite o estado inicial em `BioimpedanceViewer.tsx`:

```typescript
const [metrics, setMetrics] = useState({
  bodyFat: 22.8,        // % (altere o valor)
  muscleMass: 47.6,     // kg
  bodyWater: 60.0,      // %
  visceralFat: 2.8,     // score
  biologicalAge: 35,    // anos
  calorieExpenditure: 2300, // kcal/dia
});
```

### Integrar API Real

Em `BioimpedanceViewer.tsx`, na função `useEffect`:

```typescript
useEffect(() => {
  setAnimateIn(true);

  if (!mockData) {
    const fetchMetrics = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/bioimpedance');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMetrics();
  }
}, [mockData]);
```

Depois use na página:
```typescript
<BioimpedanceViewer mockData={false} />
```

### Alterar Cores

**Canvas3DRenderer.tsx:**
```typescript
// Cores dos componentes do corpo
const headMaterial = new THREE.MeshPhongMaterial({
  color: 0x88ccff,     // Alterar hex
  emissive: 0x2244ff,
});
```

**Raios de Luz:**
```typescript
const lineMaterial = new THREE.LineBasicMaterial({
  color: new THREE.Color().setHSL(hue, saturation, lightness),
});
```

**DataPanels.tsx:**
```typescript
// Classes Tailwind de cores
className="bg-gradient-to-r from-yellow-500 to-orange-500"
```

### Alterar Limites de Métricas

Em `DataPanels.tsx`, função `getStatus`:
```typescript
const getStatus = (value: number, min: number, max: number) => {
  if (value < min) return { status: 'Baixo', color: 'text-blue-400' };
  if (value > max) return { status: 'Alto', color: 'text-red-400' };
  return { status: 'Ideal', color: 'text-green-400' };
};
```

Altere `min` e `max` para suas necessidades.

### Velocidade de Animações

**Rotação do corpo:**
```typescript
bodyGroup.rotation.y = elapsed * 0.3;  // Aumentar número = mais rápido
```

**Raios de luz:**
```typescript
lightRaysGroup.rotation.z = elapsed * 1.5;  // Aumentar para girar mais rápido
```

**Pulsação de raios:**
```typescript
Math.sin(elapsed * 3 + index * 0.5) * 0.3 + 0.7;  // Aumentar o 3 para pulsar mais rápido
```

**Movimento de partículas:**
Altere em `particleVelocitiesRef.current`:
```typescript
particleVelocities[i] = (Math.random() - 0.5) * 0.02;  // Aumentar 0.02 para movimento mais rápido
```

### Quantidade de Partículas

Em `Canvas3DRenderer.tsx`:
```typescript
const particleCount = 1500;  // Altere para mais ou menos partículas
```

Mais partículas = mais visual impressionante mas menos performance.

### Quantidade de Raios de Luz

Em `Canvas3DRenderer.tsx`:
```typescript
const rayCount = 12;  // Altere para mais ou menos raios
```

## 📊 Dados de Exemplo

Os dados padrão simulados são baseados na imagem de dashboard anexada:

```javascript
{
  bodyFat: 22.8,           // 32.4% no dashboard
  muscleMass: 47.6,        // Calculado
  bodyWater: 60.0,         // 60.0% no dashboard
  visceralFat: 2.8,        // Índice de hidrataçao 2.8 no dashboard
  biologicalAge: 35,       // Estimado
  calorieExpenditure: 2300, // Calculado
}
```

## ⚡ Performance

### Otimizações Implementadas:

1. **Instanced Rendering:** Partículas renderizadas em batch
2. **Frustum Culling:** Partículas fora de vista não renderizadas
3. **RequestAnimationFrame:** Sincronizado com refresh rate
4. **Cleanup:** Dispose de recursos Three.js ao desmontar

### Dicas para Melhorar:

- Reduza `particleCount` se houver lag
- Reduza `rayCount` se necessário
- Use `shouldComponentUpdate` se a página for reutilizada
- Considere usar WebGL 2 para melhor performance

## 🐛 Troubleshooting

### Canvas não aparece
- Verifique se WebGL está ativado no navegador
- Abra DevTools > Console para verificar erros
- Verifique se Three.js foi importado corretamente

### Animações lentas
- Verifique a quantidade de partículas
- Reduza qualidade de sombras em `shadowMap`
- Feche abas do navegador para liberar recursos

### Valores não mudam
- Se `mockData={false}`, verifique a API
- Verifique o console para erros de fetch
- Confirm a estrutura de dados retornada pela API

## 📱 Responsividade

A página é responsiva em:
- Desktop: Layout completo com painéis laterais
- Tablet: Layout adaptado
- Mobile: Componentes empilhados (pode necessitar ajustes)

Para otimizar mobile, considere:
1. Reduzir tamanho do canvas
2. Simplificar visualização 3D
3. Usar view vertical

## 🔗 Integração com Backend

Para integrar com sua API de bioimpedância:

1. **Crie endpoint:** `/api/bioimpedance`
2. **Retorne JSON:** Conforme interface em props
3. **Use em page.tsx:**
```typescript
<BioimpedanceViewer mockData={false} />
```

## 📚 Referências

- [Three.js Documentation](https://threejs.org/docs/)
- [React Hooks API](https://react.dev/reference/react/hooks)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js App Router](https://nextjs.org/docs/app)

## 📝 Notas

- Todos os componentes são client-side (`'use client'`)
- Animações usam `requestAnimationFrame` para melhor performance
- Cores e tamanhos podem ser customizados via props
- Sistema de partículas tem atração ao centro (efeito de órbita)

---

**Criado em:** Maio 2026  
**Versão:** 1.0
