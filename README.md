# 💪 Fitness Exclusive - Site da Academia

Site moderno e responsivo para a academia Fitness Exclusive, desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## � Sobre o Projeto

A Fitness Exclusive é uma academia que nasceu de um sonho em uma garagem e hoje marca presença em várias cidades do Nordeste. Este site foi desenvolvido com **duas versões otimizadas**: uma para **desktop** e outra para **mobile**, proporcionando a melhor experiência em cada dispositivo.

## 🌟 Novidades - Versão Mobile One-Page

### 📱 One-Page View com Dock Navigation

A versão mobile foi **completamente redesenhada** como uma **one-page view** moderna com navegação via **Dock** (estilo macOS/iOS):

#### 🎯 Dock Navigation
- **Dock fixo** na parte inferior com animação magnification
- **6 ícones** de navegação principais
- **Botão WhatsApp** destacado em verde
- **Labels** que aparecem ao hover
- **Haptic feedback** em cada interação
- **Tracking automático** da seção ativa

#### 🚀 Componentes One-Page

1. **DockNavigation** - Dock animado estilo macOS
2. **OnePageMobile** - Layout one-page fluido
   - Hero + Contador
   - Planos + Benefícios
   - Estrutura + Diferenciais
   - Unidades + Avaliações
   - FAQ + Contato

### 📱 Componentes Mobile Exclusivos (anteriores)

O site agora possui **6 componentes totalmente redesenhados para mobile**:

1. **HeaderMobile** - Menu hamburguer com animações suaves
2. **HeroCarrosselMobile** - Carrossel com swipe gestures nativos
3. **PlanosMobile** - Scroll horizontal touch-friendly
4. **BeneficiosMobile** - Grid compacto com bottom sheets
5. **FAQMobile** - Accordion otimizado
6. **FooterMobile** - Footer colapsável e organizado

### ⚡ Melhorias de Performance Mobile

- ✅ Feedback háptico em todas as interações
- ✅ Touch targets de 44px+ (padrão Apple)
- ✅ Swipe gestures nativos
- ✅ Lazy loading inteligente
- ✅ Animações GPU-accelerated
- ✅ Code splitting por dispositivo

## 📚 Documentação

Consulte a documentação completa:

- **[DOCS_INDEX.md](DOCS_INDEX.md)** - Índice de toda documentação
- **[ONE_PAGE_MOBILE.md](ONE_PAGE_MOBILE.md)** - Documentação One-Page + Dock ⭐⭐
- **[MOBILE_SUMMARY.md](MOBILE_SUMMARY.md)** - Resumo das melhorias mobile ⭐
- **[MOBILE_COMPONENTS.md](MOBILE_COMPONENTS.md)** - Documentação técnica completa
- **[MOBILE_DESKTOP_STRUCTURE.md](MOBILE_DESKTOP_STRUCTURE.md)** - Arquitetura do projeto

## 🚀 Funcionalidades Principais

### Desktop
- 🖥️ Layout expansivo em 3 colunas
- 🖱️ Hover effects elaborados
- 📊 Grid de planos lado a lado
- 🎨 Animações complexas

### Mobile
- 📱 Layout compacto em 1-2 colunas
- 👆 Touch interactions otimizadas
- 📲 Scroll horizontal de planos
- ⚡ Performance otimizada

### Compartilhadas
- 🎨 Design moderno com gradientes dourados
- 💳 3 modalidades de planos
- 🏋️ Informações de estrutura e equipamentos
- � Depoimentos de clientes
- 📍 10 unidades pelo Nordeste
- ❓ FAQ interativo
- 💬 WhatsApp flutuante

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização moderna
- **Device Detection** - Renderização condicional
- **Haptic Feedback API** - Vibração mobile
- **Touch Events API** - Gestures nativos

## 💻 Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar build estático (arquivos em /out)
```

Acesse: `http://localhost:3000`

**Para testar no celular:**
```bash
# Descobrir seu IP local
ipconfig  # Windows

# Acessar no celular
http://SEU_IP:3000
```

## � Deploy

### GitHub Pages

1. **Preparar:**
```bash
git add .
git commit -m "Deploy para GitHub Pages"
git push origin main
```

2. **Configurar:**
   - Vá em Settings > Pages
   - Source: GitHub Actions
   - Deploy automático ativado

3. **Acessar:**
   - URL: `https://caiquegaldino.github.io/site-next`

## 📊 Performance Metrics

### Mobile
- **LCP**: < 2.5s ✅
- **FID**: < 100ms ✅
- **CLS**: < 0.1 ✅
- **Performance Score**: 90+ ✅

### Desktop
- **LCP**: < 2.0s ✅
- **FID**: < 100ms ✅
- **CLS**: < 0.1 ✅
- **Performance Score**: 95+ ✅

## 📁 Estrutura do Projeto

```
site-next/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Entry point (DeviceDetector)
│   │   ├── page-desktop.tsx      # Versão Desktop
│   │   └── page-mobile.tsx       # Versão Mobile ⭐
│   │
│   ├── components/
│   │   ├── mobile/               # Componentes Mobile ⭐
│   │   ├── desktop/              # Componentes Desktop
│   │   ├── DeviceDetector.tsx    # Detector de dispositivo
│   │   └── [compartilhados]/
│   │
│   └── lib/
│       ├── mobileUtils.ts        # Utilidades mobile ⭐
│       └── utils.ts
│
├── DOCS_INDEX.md                 # Índice da documentação
├── MOBILE_SUMMARY.md             # Resumo mobile
├── MOBILE_COMPONENTS.md          # Docs técnica
└── MOBILE_DESKTOP_STRUCTURE.md   # Arquitetura
```

## � Como Usar

### Para Desenvolvedores
1. Clone o repositório
2. Leia `DOCS_INDEX.md`
3. Consulte `MOBILE_SUMMARY.md` para overview
4. Veja exemplos em `src/components/mobile/`

### Para Designers
1. Consulte `MOBILE_COMPONENTS.md` para design tokens
2. Veja componentes funcionais em desenvolvimento
3. Touch targets, espaçamentos, tipografia documentados

### Para Product Owners
1. Leia `MOBILE_SUMMARY.md` para entender melhorias
2. Teste em dispositivos reais
3. Veja comparação Desktop vs Mobile

## � Próximas Melhorias

- [ ] PWA capabilities
- [ ] Offline mode
- [ ] Push notifications
- [ ] Analytics tracking
- [ ] A/B testing
- [ ] Native app (React Native)

## 📞 Contato Fitness Exclusive

- **📱 WhatsApp**: (87) 99359-5368
- **📧 Email**: fitnessexclusive@fitnessexclusive.com.br
- **📸 Instagram**: @academiafitnessexclusive

## 🏋️ Unidades

**Ceará**: Crato, Juazeiro do Norte (7 unidades)  
**Pernambuco**: Araripina (2 unidades)

---

**🏋️ Transforme seu corpo, transforme sua vida! 💪**

*Site desenvolvido com foco em excelência mobile e desktop*

---

## 📜 Licença

© 2025 Fitness Exclusive. Todos os direitos reservados.

**Desenvolvido com ❤️ para proporcionar a melhor experiência em todos os dispositivos**

