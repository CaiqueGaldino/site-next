# Estrutura Mobile/Desktop

## 📁 Nova Organização

A aplicação foi reorganizada para separar as versões **mobile** e **desktop**, permitindo otimizações específicas para cada plataforma.

## 🏗️ Estrutura de Arquivos

```
src/
├── app/
│   ├── page.tsx              # Ponto de entrada - usa DeviceDetector
│   ├── page-desktop.tsx      # Layout completo para desktop
│   └── page-mobile.tsx       # Layout otimizado para mobile
│
└── components/
    ├── DeviceDetector.tsx    # Detecta o dispositivo e renderiza a versão correta
    │
    ├── desktop/              # Componentes específicos para desktop
    │   ├── HeaderDesktop.tsx
    │   └── README.md
    │
    ├── mobile/               # Componentes específicos para mobile
    │   ├── HeaderMobile.tsx
    │   └── README.md
    │
    └── [componentes compartilhados]
```

## 🔄 Como Funciona

### 1. DeviceDetector
O componente `DeviceDetector` é responsável por:
- Detectar o tipo de dispositivo (mobile/desktop)
- Verificar o tamanho da tela
- Identificar se é um dispositivo touch
- Renderizar a versão apropriada da página

### 2. Detecção de Dispositivo
A detecção é feita através de três critérios:
```typescript
// Tamanho da tela
const isMobileScreen = window.innerWidth < 768;

// User Agent
const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

// Capacidade Touch
const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
```

### 3. Carregamento Dinâmico
Os componentes são carregados dinamicamente usando Next.js `dynamic`:
- Evita flash de conteúdo incorreto (FOIC)
- Reduz o bundle inicial
- Melhora a performance

## 🎯 Quando Criar Versões Separadas

### ✅ Criar versões mobile e desktop para:
- **Header/Navigation**: Navegação hamburguer vs menu horizontal
- **Hero/Carrossel**: Layout e controles diferentes
- **Cards/Grids**: Número de colunas e espaçamento
- **Modais**: Comportamento fullscreen vs centralizado
- **Formulários**: Layouts e validações específicas

### ❌ NÃO criar versões separadas para:
- Componentes puramente visuais sem lógica de interação
- Componentes que já usam CSS responsivo adequadamente
- Elementos simples (botões, ícones, badges)

## 🚀 Como Adicionar Novos Componentes

### Componente Desktop
```typescript
// src/components/desktop/MeuComponenteDesktop.tsx
export default function MeuComponenteDesktop() {
  return (
    <div className="hidden md:block">
      {/* Layout otimizado para desktop */}
    </div>
  );
}
```

### Componente Mobile
```typescript
// src/components/mobile/MeuComponenteMobile.tsx
import { hapticFeedback } from "../../lib/mobileUtils";

export default function MeuComponenteMobile() {
  const handleClick = () => {
    hapticFeedback('light');
    // lógica
  };

  return (
    <div className="md:hidden">
      {/* Layout otimizado para mobile */}
    </div>
  );
}
```

### Usar nos Layouts
```typescript
// page-desktop.tsx
import MeuComponenteDesktop from "../components/desktop/MeuComponenteDesktop";

// page-mobile.tsx
import MeuComponenteMobile from "../components/mobile/MeuComponenteMobile";
```

## 📱 Otimizações Mobile

### Feedback Háptico
```typescript
import { hapticFeedback } from "../lib/mobileUtils";

// Uso
hapticFeedback('light');  // Feedback leve
hapticFeedback('medium'); // Feedback médio
hapticFeedback('heavy');  // Feedback pesado
```

### Scroll Suave
```typescript
import { smoothScrollTo } from "../lib/mobileUtils";

smoothScrollTo('section-id');
```

### Touch-Friendly
- Targets de toque mínimos de 44x44px
- Active states com scale
- Feedback visual imediato
- Prevenção de double-tap zoom

## 🖥️ Otimizações Desktop

### Hover Effects
- Transições suaves
- Scale transforms
- Mudanças de cor
- Sombras dinâmicas

### Mouse Interactions
- Scroll suave com mouse wheel
- Arrastar e soltar
- Menu de contexto personalizado

## 🎨 Classes CSS Responsivas

### Breakpoints Tailwind
```css
/* Mobile First */
.classe              /* < 640px */
sm:classe           /* ≥ 640px */
md:classe           /* ≥ 768px */
lg:classe           /* ≥ 1024px */
xl:classe           /* ≥ 1280px */
2xl:classe          /* ≥ 1536px */
```

### Exemplos
```jsx
{/* Visível apenas em mobile */}
<div className="md:hidden">Mobile only</div>

{/* Visível apenas em desktop */}
<div className="hidden md:block">Desktop only</div>

{/* Responsivo */}
<div className="px-4 md:px-8 lg:px-12">
  Padding responsivo
</div>
```

## 🔧 Manutenção

### Checklist ao Adicionar Features
- [ ] A feature precisa de versões separadas?
- [ ] O componente mobile usa feedback háptico?
- [ ] O componente desktop tem hover states?
- [ ] As imagens estão otimizadas para cada plataforma?
- [ ] Os touch targets são grandes o suficiente (mobile)?
- [ ] As animações são suaves em ambas as versões?

## 🐛 Debugging

### Ver qual versão está carregando
Abra o DevTools e procure por:
- `HomeDesktop` renderizado = versão desktop
- `HomeMobile` renderizado = versão mobile

### Forçar uma versão específica
Para testes, você pode modificar temporariamente o `DeviceDetector`:
```typescript
// Força desktop
setIsMobile(false);

// Força mobile
setIsMobile(true);
```

## 📊 Performance

### Métricas Esperadas
- **Mobile**: FCP < 1.8s, LCP < 2.5s
- **Desktop**: FCP < 1.2s, LCP < 2.0s

### Otimizações Aplicadas
- ✅ Code splitting por device
- ✅ Lazy loading de componentes
- ✅ Dynamic imports
- ✅ Prevenção de FOIC
- ✅ Responsive images

## 🎯 Próximos Passos

1. Criar versões mobile/desktop para outros componentes principais
2. Implementar lazy loading de imagens específicas
3. Adicionar service worker para PWA
4. Otimizar animações por dispositivo
5. Implementar testes A/B entre versões

---

**Dica**: Sempre teste em dispositivos reais, não apenas no DevTools!
