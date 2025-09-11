# Fitness Exclusive - Site da Academia

Site moderno e responsivo para a academia Fitness Exclusive, desenvolvido com Next.js 15 e Tailwind CSS.

## 🚀 Deploy no GitHub Pages

Este site está configurado para deploy automático no GitHub Pages. Siga os passos abaixo:

### 1. Preparar o Repositório
```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Configuração para GitHub Pages"

# Enviar para o GitHub
git push origin main
```

### 2. Configurar GitHub Pages

1. Vá para o seu repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**
5. O deploy será feito automaticamente

### 3. Acessar o Site

Após o deploy, seu site estará disponível em:
```
https://caiquegaldino.github.io/site-next
```

## ⚠️ Problemas Comuns e Soluções

### Site aparece como HTML básico:
- ✅ **Corrigido**: Configurado `basePath` e `assetPrefix` no `next.config.ts`
- ✅ **Corrigido**: Adicionado arquivo `.nojekyll` para GitHub Pages
- ✅ **Corrigido**: Configurado output estático correto

### CSS não carrega:
- ✅ **Corrigido**: Configuração de assets com paths corretos
- ✅ **Corrigido**: Tailwind CSS configurado para build estático

## ✨ Funcionalidades

- 🎨 Design moderno com gradientes dourados
- 📱 Totalmente responsivo
- 🖼️ Carrossel de banners automático
- 💳 Seção de planos com destaque especial no central
- 🏋️ Slides interativos dos diferenciais com navegação lateral
- 💬 Depoimentos de clientes
- 📍 Informações de unidades
- ❓ FAQ interativo
- 💬 Botão WhatsApp flutuante
- 🔄 Scroll suave entre seções

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização moderna
- **GitHub Actions** - Deploy automático
- **GitHub Pages** - Hospedagem gratuita

## � Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar build estático
# Os arquivos estarão em /out
```

## 📝 Configurações Importantes

- **Static Export**: Site gerado como arquivos estáticos
- **Image Optimization**: Desabilitada para GitHub Pages
- **Base Path**: Configurado automaticamente para produção
- **No Jekyll**: Configurado para evitar conflitos

## 🎯 Performance

- ⚡ Carregamento rápido (18.3 kB página principal)
- 🔍 SEO otimizado
- 📊 Build otimizado para produção
- 🖼️ Imagens otimizadas
- 📱 Mobile-first design

---

**Desenvolvido com ❤️ para Fitness Exclusive**
