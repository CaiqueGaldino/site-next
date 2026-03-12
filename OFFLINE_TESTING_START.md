# 🧪 Teste Offline - Blog Sistema

O blog está pronto para testes **100% offline** sem necessidade do Strapi.

## 🚀 Início Rápido (2 passos)

### 1️⃣ Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 2️⃣ Abra seu navegador:
- **Home Page**: http://localhost:3000
- **Blog**: http://localhost:3000/blog
- **Post Individual**: http://localhost:3000/blog/como-comecar-jornada-fitness

## 📊 Dados Mock Disponíveis

O sistema está usando **6 posts de exemplo** do arquivo `src/lib/mock-data.ts`:

### Posts em Destaque (Featured):
| Slug | Tipo | Posição | Descrição |
|------|------|---------|-----------|
| `como-comecar-jornada-fitness` | Blog | TOP (Banner Grande) | Como Começar sua Jornada de Fitness |
| `5-exercicios-crossfit-queimar-calorias` | Blog | BANNER | 5 Exercícios de CrossFit para Queimar Calorias |

### Posts Regulares:
| Slug | Tipo | Descrição |
|------|------|-----------|
| `novo-espaco-cardio-fitness-exclusive` | Social | Novo Espaço de Cardio (com link Instagram) |
| `dicas-treino-pesos-video` | Video | Dicas Treino Pesos (YouTube embed) |
| `10-alimentos-recuperacao-pos-treino` | Blog | 10 Alimentos para Recuperação Pós-Treino |
| `yoga-iniciantes-guia-completo` | Blog | Yoga para Iniciantes - Guia Completo |

## ✅ O que Testar

### 1. Página Inicial (`/`)
- [ ] Seção "Blog Recente" no desktop (últimos 3 posts)
- [ ] Seção "Blog Recente" no mobile (últimos 2 posts)
- [ ] Links funcionando para `/blog`
- [ ] Cards com imagens carregando

### 2. Listagem de Posts (`/blog`)
- [ ] **Featured Banner Top**: "Como Começar sua Jornada de Fitness" aparece em grande destaque
- [ ] **Featured Banner**: "5 Exercícios de CrossFit" aparece como segundo destaque
- [ ] Posts regulares listados em grid abaixo
- [ ] Responsividade (desktop/mobile)
- [ ] Carregamento de imagens

### 3. Posts Individuais (`/blog/[slug]`)
Teste cada post para verificar carregamento correto:

**Blog Post** (como-comecar-jornada-fitness):
- [ ] Título, data, autor, categoria visíveis
- [ ] Imagem desktop carregada
- [ ] Conteúdo de texto renderizado
- [ ] Breadcrumb funcionando
- [ ] Botão "Voltar para Blog" funciona

**Video Post** (dicas-treino-pesos-video):
- [ ] Título e descrição visíveis
- [ ] Video YouTube embed carregado
- [ ] Responsive em mobile

**Social Post** (novo-espaco-cardio-fitness-exclusive):
- [ ] Título e descrição visíveis
- [ ] Link para Instagram clicável
- [ ] Ícone de social media exibido

### 4. Responsividade
- [ ] Teste em desktop (1920x1080)
- [ ] Teste em tablet (768x1024)
- [ ] Teste em mobile (375x667)
- [ ] Layout do blog adapta corretamente

### 5. Funcionalidades Extras
- [ ] Escuro/Claro mode funciona em posts
- [ ] Scroll suave entre seções
- [ ] Imagens com otimização Next.js
- [ ] Transições/animações suaves

## 🔍 Verificação do Console

Quando o servidor inicia em modo mock, você verá no terminal:

```
📊 Using mock data for posts (development mode)
📄 Fetching from mock - Post: "como-comecar-jornada-fitness"
```

**Isso significa que o sistema está usando dados locais, não o Strapi.**

## 🔄 Mudar entre Mock e Real (Depois)

Para testar com **Strapi real**, edite `.env.local`:

```diff
- NEXT_PUBLIC_USE_MOCK_DATA=true
+ NEXT_PUBLIC_USE_MOCK_DATA=false
+ STRAPI_API_TOKEN=seu_token_aqui
```

Reinicie o servidor (`npm run dev`).

## 📝 Editar Dados Mock

Para alterar os dados de teste, edite:
```
src/lib/mock-data.ts
```

Cada post segue esta estrutura:
```typescript
{
  id: 1,
  documentId: "post_1",
  title: "Titulo do Post",
  slug: "titulo-do-post",
  content: "Conteúdo em HTML...",
  description: "Descrição curta",
  type: "blog", // "blog" | "video" | "social"
  category: "Fitness",
  isFeatured: true,
  featuredSettings: {
    position: "top", // "top" | "banner" | "carousel"
    startDate: "2026-03-08T00:00:00Z",
    endDate: "2026-03-15T23:59:59Z"
  },
  media: {
    desktop: { url: "..." },
    mobile: { url: "..." }
  },
  videoUrl: "https://youtube.com/...",
  socialLinks: { instagram: "https://instagram.com/..." }
}
```

## ❌ Troubleshooting

**Problema**: "Posts não aparecem no /blog"
- Verificar se servidor iniciou sem erros
- Limpar `.next/` e rebuild: `npm run build`
- Verificar console do navegador (F12) para erros

**Problema**: "Imagens não carregam"
- Verificar se caminho em `mock-data.ts` está correto
- Verificar se arquivo existe em `public/images/...`

**Problema**: "Vídeo YouTube não aparece"
- Verificar se URL contém `youtu.be/` ou `youtube.com/watch?v=`
- O sistema extrai o ID automaticamente

**Problema**: "Featured posts não aparecem em destaque"
- Verificar se `isFeatured: true` está configurado
- Verificar se dados de `startDate` e `endDate` são válidos
- Datas precisam estar no futuro em relação a "hoje" no mock data (março de 2026)

## 📚 Documentação Completa

Para documentação detalhada:
- **Offline Testing**: [OFFLINE_TESTING_GUIDE.md](./OFFLINE_TESTING_GUIDE.md)
- **Implementação Técnica**: [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
- **Setup do Strapi**: [STRAPI_SETUP_GUIDE.md](./STRAPI_SETUP_GUIDE.md)
- **Quick Reference**: [QUICKSTART.md](./QUICKSTART.md)

## 💡 Próximos Passos

1. ✅ **Agora**: Teste offline com mock data
2. ⏳ **Após validação**: Instale Strapi em `cms.fitnessexclusive.com.br`
3. ⏳ **Após Strapi**: Altere `.env.local` para usar API real

---

**Dúvidas?** Verifique os arquivos de documentação ou o console do navegador (DevTools F12).
