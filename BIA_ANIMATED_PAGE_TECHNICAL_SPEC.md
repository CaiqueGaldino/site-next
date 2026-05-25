# Especificação Técnica - Página Animada de Bioimpedância (BIA)

## 1. Visão Geral

Página de análise visual de Bioimpedância (BIA - Bioelectrical Impedance Analysis) com animações 3D e efeitos visuais avançados. A página exibe dados corporais com renderização de corpo humano em 3D, gráficos animados, raios de luz e sistema de partículas dinâmico.

**Rota:** `/bia`

## 2. Estrutura Visual Geral

### 2.1 Layout Principal
- **Viewport Central 3D:** Renderização do corpo humano com indicadores visuais
- **Painéis de Dados Laterais:** Exibição de métricas em tempo real
- **Sistema de Partículas:** Fluxo de partículas ao redor do corpo
- **Raios de Luz:** Efeitos de iluminação dinâmica

### 2.2 Componentes Principais
```
┌─────────────────────────────────────────────────────────────┐
│  Header com Título e Controles                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐   │
│  │ Painel Info  │   │  Renderização │   │ Painel Info  │   │
│  │   Esquerda   │   │    3D Central │   │   Direita    │   │
│  │              │   │               │   │              │   │
│  │ • Massa Gorda│   │   ┌────────┐  │   │ • Hidratação │   │
│  │ • IMC        │   │   │ CORPO  │  │   │ • Idade      │   │
│  │ • Músculos   │   │   │  3D    │  │   │ • Risco      │   │
│  │              │   │   └────────┘  │   │              │   │
│  └──────────────┘   │   Partículas  │   └──────────────┘   │
│                     │   & Raios     │                      │
│                     │               │                      │
│                     └──────────────┘                       │
├─────────────────────────────────────────────────────────────┤
│  Gráficos Animados - Comparativo com Alvos                 │
└─────────────────────────────────────────────────────────────┘
```

## 3. Elementos Visuais Detalhados

### 3.1 Renderização 3D do Corpo
- **Modelo 3D:** Silhueta humana em pose frontal
- **Segmentação Corporal:**
  - Cabeça (zona neutra)
  - Braço Direito (zona ativa - músculos)
  - Braço Esquerdo (zona ativa - músculos)
  - Tronco (zona central - gordura visceral)
  - Perna Direita (zona ativa - resistência)
  - Perna Esquerda (zona ativa - resistência)

- **Cores Dinâmicas por Tipo:**
  - Verde: Músculos/Massa Magra (0-100%)
  - Amarelo: Gordura Subcutânea (0-100%)
  - Vermelho: Gordura Visceral/Risco
  - Azul: Hidratação (como aura)

### 3.2 Sistema de Raios de Luz
- **Quantidade:** 8-12 raios dinâmicos
- **Origem:** Pontos ao redor do corpo (360°)
- **Características:**
  - Raios de cor gradiente (azul → verde → amarelo)
  - Animação de intensidade pulsante
  - Movimento rotacional suave
  - Efeito "scanning" atravessando o corpo
  - Bloom e glow para impressão visual

### 3.3 Sistema de Partículas
- **Tipos de Partículas:**
  1. **Partículas de Hidratação:** Azuis, movimento vertical ascendente
  2. **Partículas de Energia:** Verdes, movimento orbital ao redor do corpo
  3. **Partículas de Análise:** Laranja/Amarelo, traçado aleatório
  4. **Partículas de Risco:** Vermelho, movimento descendente (se valores altos)

- **Propriedades:**
  - Lifetime: 2-4 segundos
  - Velocidade: 0.5-2.0 unidades/seg
  - Spawn rate: Dinâmico baseado em métrica ativa
  - Blend mode: Additive para efeito luminoso
  - Tamanho: 0.5-3px

### 3.4 Painéis de Dados Animados

**Painel Esquerdo (Composição Corporal):**
```
┌─ Massa Gorda ─────────────────────┐
│ 22.8%          [████░░░░░░]       │
│ Status: Ideal  Alvo: 20-25%       │
│ Mudança: -1.2% ↓ (últimos 30 dias)│
├─ Masa Magra (Músculos) ───────────┤
│ 47.6kg         [████████░░]       │
│ Status: Bom    Alvo: >45kg        │
└─ Resistência Celular ─────────────┘
```

**Painel Direito (Saúde Celular):**
```
┌─ Hidratação ──────────────────────┐
│ 60.0%          [█████████░]       │
│ Status: Bom    Alvo: 50-65%       │
├─ Idade Biológica ────────────────┤
│ 35 anos        Target: 28 anos    │
│ Diferença: +7 anos               │
├─ Índice de Risco ────────────────┤
│ 2.8            [████░░░░░░]       │
│ Status: Normal Alvo: <3.0        │
└─ Metabolismo ────────────────────┘
```

### 3.5 Gráficos Comparativos (Rodapé)
- **Gráficos Radiais (Gauge):** Um para cada métrica principal
- **Cores:** Verde (dentro do alvo), Amarelo (limítrofe), Vermelho (fora)
- **Animação:** Agulha desliza até o valor atual com easing suave

## 4. Tecnologia e Implementação

### 4.1 Stack Tecnológico
- **Framework 3D:** Three.js ou Babylon.js
- **Framework Web:** React 18+ / Next.js 14+
- **Animações:** Framer Motion + GSAP ou Three.js native
- **Renderização:** WebGL
- **Performance:** Instanced rendering para partículas

### 4.2 Componentes React
```
BioimpedanceAnimatedPage/
├── BioimpedanceViewer (Container Principal)
├── CanvasRenderer (Three.js Canvas)
│   ├── HumanBodyModel
│   ├── LightRaysSystem
│   ├── ParticleSystem
│   └── GlowEffect
├── DataPanelLeft
├── DataPanelRight
├── GaugeCharts
└── InteractiveControls
```

### 4.3 Dados de Entrada (Props/State)
```javascript
{
  // Composição Corporal
  bodyFat: 22.8,           // %
  muscleMass: 47.6,        // kg
  bodyWater: 60.0,         // %
  visceralFat: 2.8,        // score
  
  // Métricas de Saúde
  biologicalAge: 35,       // anos
  calorieExpenditure: 2300, // kcal/dia
  metabolicRate: 1700,     // kcal/dia
  
  // Segmentação Corporal
  rightArm: { muscle: 3.2, fat: 1.2 },
  leftArm: { muscle: 3.1, fat: 1.1 },
  trunk: { muscle: 12.5, fat: 8.3 },
  rightLeg: { muscle: 8.4, fat: 2.1 },
  leftLeg: { muscle: 8.3, fat: 2.0 },
  
  // Status
  status: 'ideal' | 'good' | 'warning' | 'risk',
  trends: {
    bodyFatChange: -1.2,    // % (últimos 30 dias)
    muscleTrend: 'stable' | 'improving' | 'declining'
  },
  
  // Comparação com Alvo
  targets: {
    bodyFat: { min: 20, max: 25 },
    muscleMass: { min: 45, max: 55 },
    bodyWater: { min: 50, max: 65 }
  }
}
```

## 5. Animações Específicas

### 5.1 Animação de Inicialização
1. **Fade In:** Canvas aparece com opacity gradual
2. **Câmera Zoom:** Câmera orbita ao redor do corpo de longe para perto (2s)
3. **Ativação Progressiva:**
   - Corpo aparece com gradual opacity (1.5s)
   - Raios de luz ativam sequencialmente (0.3s cada)
   - Sistema de partículas começa (1s)
   - Painéis de dados deslizam de fora para dentro

### 5.2 Animações Contínuas
- **Raios de Luz:** Rotação contínua, pulsação de intensidade (periodo: 3s)
- **Partículas:** Spawn contínuo, movimento natural com gravidade/forças
- **Corpo 3D:** Rotação lenta (periodo: 15s), oscilação vertical suave
- **Barra de Progresso:** Animação de preenchimento quando dados mudam

### 5.3 Animações de Interação
- **Hover em Métrica:** 
  - Valor destaca com glow
  - Partículas aumentam em direção dessa zona do corpo
  - Raios focalizam naquela seção
  
- **Click em Segmento Corporal:**
  - Zoom para aquela região
  - Exibição de dados detalhados em modal overlay
  - Animação de reveal

### 5.4 Animações de Mudança de Dados
- **Valor Muda:** Número anima de valor anterior para novo (1s)
- **Status Muda:** Cores transitam suavemente (0.5s)
- **Barra Progresso:** Desliza até nova posição com easing

## 6. Performance

### 6.1 Otimizações
- **Instanced Rendering:** Partículas renderizadas em batch
- **LOD (Level of Detail):** Modelo 3D com diferentes detalhes
- **Frustum Culling:** Partículas fora de vista não são renderizadas
- **WebGL Queries:** FPS capped em 60fps
- **Memory Pool:** Reutilização de objetos de partículas

### 6.2 Fallbacks
- **Canvas não suportado:** Mostrar versão estática 2D com SVG
- **WebGL desativado:** Versão HTML/CSS pura

## 7. Acessibilidade
- **Alt text:** Descrição de imagens
- **ARIA labels:** Para valores dinâmicos
- **Modo de Alto Contraste:** Suporte nativo
- **Teclado:** Navegação entre painéis com Tab

## 8. Arquivos de Ativos Necessários
- Modelo 3D do corpo humano (glTF/GLB)
- Texturas de corpo (albedo, normal, metallic)
- Shaders customizados (GLSL)
- Ícones para métricas
- Soundscape opcional (ambiente)

## 9. Fluxo de Dados
```
API/Props
    ↓
BioimpedanceAnimatedPage
    ├→ CanvasRenderer (Renderização 3D)
    │   ├→ Three.js Scene
    │   ├→ Human Model Update
    │   ├→ Light Rays Update
    │   └→ Particle System Update
    │
    ├→ DataPanels (Renderização 2D)
    │   └→ Animações de Números
    │
    └→ Charts (Gráficos)
        └→ Gauge Animations
```

## 10. Estados Possíveis da Página

- **Carregando:** Skeleton screens + animação de loading
- **Erro:** Mensagem com fallback visual
- **Vazio:** Dados não disponíveis (mostra UI educativa)
- **Dados Normais:** Todas as animações ativadas
- **Comparando Período:** Transições de dados com timeline

---

**Versão:** 1.0
**Data:** Maio 2026
**Status:** Especificação Completa
