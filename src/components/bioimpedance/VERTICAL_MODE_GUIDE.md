# 📱 Guia de Configuração - Modo Tela Vertical (FHD Portrait)

## Informações da Versão

- **Modo:** Tela Vertical (Portrait)
- **Resolução:** FHD (1920x1080 vertical = 1080x1920)
- **Cor Principal:** Amarelo (#FFD700) com destaque e amarelo-laranja
- **Status:** Otimizado para displays verticais

## 🎯 Características de Design para Vertical

### Layout Vertical
- Todos os componentes estão empilhados verticalmente
- Altura do canvas: 384px (96 * 4) - proporção otimizada
- Painéis de dados: Layout linear de cima para baixo
- Gráficos gauge: Grid de 1 coluna para melhor legibilidade

### Paleta de Cores - Amarelo
```
Amarelo Primário:     #FFD700 (Gold)
Amarelo Dourado:      #FFCC00
Amarelo Claro:        #FFDD00 e #FFDD33
Amarelo/Laranja:      #FFBB00, #FFAA00, #FF9900
Laranja Destaque:     #FF6600
Vermelho Alerta:      #FF3333, #ff6b6b
```

### Elementos do Canvas 3D
- **Iluminação Amarela:**
  - Ambient Light: 0xffcc00 (intensidade 0.6)
  - Point Light 1: 0xffdd33 (intensidade 1.2)
  - Point Light 2: 0xffaa00 (intensidade 0.9)

- **Componentes do Corpo:**
  - Cabeça: #FFD700 com emit #FFAA00
  - Tronco: #FFCC00 com emit #FF9900
  - Braços: #FFD700 com emit #FFBB00
  - Pernas: #FFDA44 com emit #FFAA00

- **Partículas:**
  - Cor: #FFDD00
  - Variação HSL: Amarelo a laranja (hue 0.12 a 0.17)

- **Raios de Luz:**
  - Cores gradiente baseadas em HSL
  - Tons amarelos-laranja-vermelhos
  - Pulsação sincronizada

### Painéis de Dados
- **Títulos:**
  - Composição: text-yellow-400
  - Saúde Celular: text-amber-400

- **Valores e Barras:**
  - Texto números: text-yellow-400
  - Barra Massa Gorda: from-yellow-400 to-yellow-500
  - Barra Massa Magra: from-yellow-500 to-amber-500
  - Barra Hidratação: from-yellow-300 to-yellow-400
  - Barra Gordura Visceral: from-orange-400 to-red-500

- **Bordas:** border-yellow-600/30 (transparente amarelo)

### Gráficos Gauge
- Cores dinâmicas:
  - Normal: #fbbf24 (Amarelo)
  - Limítrofe: #f59e0b (Amber)
  - Crítico: #ff6b6b (Vermelho)

## 📏 Dimensões e Proporções

### Viewport
```
Largura: 100% (sempre responsiva)
Altura: Responsiva com min-h-screen
Overflow: Hidden (sem scrollbar)
```

### Seções
```
Header:        pt-6 pb-3 (pequeno e conciso)
Canvas:        h-96 (384px)
Data Panels:   Variável com mt-8
Gauges:        py-8
Info Cards:    py-8 px-6
```

### Tipografia
```
Header h1:     text-3xl (não text-4xl)
Titles:        text-xl
Values:        text-2xl (números grandes)
Labels:        text-sm, text-xs
```

## 🎨 Elementos Visuais

### Background
```
Gradiente: from-slate-950 via-slate-900 to-slate-950
Efeito de glow:
  - Amarelo 500: opacity-20
  - Âmbar 500: opacity-20, animação pulsante
```

### Cartões de Informação
```
Fundo:    gradient-to-br from-yellow-900/30 to-slate-900
Borda:    border-yellow-600/30
Tamanho:  p-4 (compacto para vertical)
Grid:     1 coluna (100% largura)
```

## 🔧 Customizações para Vertical

### Para mudar a altura do canvas:
Em `BioimpedanceViewer.tsx`:
```tsx
<div className="h-96 bg-gradient-to-b...">  {/* h-96 = 384px */}
  <Canvas3DRenderer metrics={metrics} />
</div>
```

Opções de altura:
- `h-64`: 256px (compacto)
- `h-80`: 320px (médio)
- `h-96`: 384px (padrão recomendado)
- `h-screen`: tela inteira (não recomendado para este caso)

### Para mudar cores em componentes específicos:

**Alterar cor do heading:**
```tsx
<h1 className="...from-yellow-400 via-amber-400 to-yellow-500 bg-clip-text">
```

**Alterar cor das barras de progresso:**
```tsx
// Em DataPanels.tsx
className="bg-gradient-to-r from-yellow-400 to-yellow-500"
```

### Para ajustar padding em modo vertical:
```tsx
// Reduzir espaçamento externo
px-4  // Em vez de px-8
py-6  // Em vez de py-12
```

## 📊 Informações da Tela

### Detectar modo vertical em componentes:
```tsx
'use client';

import { useEffect, useState } from 'react';

export const YourComponent = () => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    checkOrientation();
    window.addEventListener('orientationchange', checkOrientation);
    window.addEventListener('resize', checkOrientation);

    return () => {
      window.removeEventListener('orientationchange', checkOrientation);
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  return (
    <div>
      {isPortrait ? '📱 Modo Portrait' : '🖥️ Modo Landscape'}
    </div>
  );
};
```

## 🎯 Otimizações para Display Vertical

### 1. Reduzir movimento de scroll
- Componentes empilhados verticalmente
- Cada seção visível de uma vez
- Sem necessidade de scroll horizontal

### 2. Melhorar clique/toque
- Elementos maiores e mais distantes
- Padding adequado para toque
- Sem elementos muito pequenos

### 3. Performance em Tela Vertical
- Canvas mantém boas proporções
- Partículas otimizadas (1500 partículas)
- Raios de luz (12 raios) não afetam performance

## 📱 Teste em Diferentes Resoluções

### Telas Verticais Comuns:
- **FHD:** 1080x1920 ✅ (padrão)
- **QHD:** 1440x2560
- **4K:** 2160x3840
- **Tablet Vertical:** 600x1024 até 1280x1920

### Testagem no DevTools do Chrome:
1. Abrir DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Selecionar device "Mobile" com orientação Portrait
4. Selecionar "iPhone Pro Max" (1080x2340) para teste próximo

## 🔌 Integração com Telas de Display (Kiosk/Signage)

### Configurações Recomendadas:
```html
<!-- Viewport meta tag -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<!-- Desabilitar rotação em navegador -->
<meta name="screen-orientation" content="portrait">

<!-- Fullscreen -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
```

### Para dispositivos específicos:
Se a tela é controlada por middleware (e.g., IPTV, Display Manager), certifique-se:
- Resolução: 1080x1920 ou nativa do device
- Refresh rate: 60Hz+ para animações suaves
- WebGL: Ativado
- Hardware acceleration: Ativado

## 🎬 Animações em Modo Vertical

Todas as animações foram otimizadas para vertical:
- **Canvas:** Rotação lenta e oscilação suave
- **Raios:** Pulsação sincronizada, 3s de período
- **Partículas:** Movimento orbital natural
- **Números:** Animação de 1s ao mudar

## 💡 Dicas de Implementação

### 1. Testar em navegador:
```bash
# Terminal no projeto
npm run dev
# Abrir http://localhost:3000/bia
# Usar DevTools em modo portrait
```

### 2. Testar em TV/Monitor vertical:
- Conectar computador na TV/monitor
- Colocar em modo fullscreen (F11)
- Girar monitor (se possível) ou ajustar resolução

### 3. Debug de performance:
Abrir DevTools > Performance > Record
- Verificar FPS (deve ser ~60fps)
- Verificar GPU rendering
- Monitorar memory usage

## 📞 Suporte e Issues

### Canvas não aparece em vertical?
- Verifique se WebGL está ativado
- Reduza particleCount em Canvas3DRenderer
- Verifique console para erros

### Animações lentas?
- Reduza `rayCount` de 12 para 8
- Reduza `particleCount` de 1500 para 800
- Diminua a altura do canvas

### Cores não aparecem como esperado?
- Verifique opacity dos backgrounds
- Ajuste `mix-blend-multiply` se necessário
- Teste em ambiente mais escuro

---

**Versão:** 1.0 - Modo Vertical  
**Data:** Maio 2026  
**Otimizado para:** FHD Portrait (1080x1920 ou similar)
