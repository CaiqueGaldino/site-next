# 🧪 Testing the Blog Offline - Mock Data Guide

Este guia mostra como testar o blog **completamente offline** usando dados mock, sem precisar do Strapi instalado.

## ✅ Status Atual

**Mock Mode**: ENABLED  
**Arquivo**: `.env.local` → `NEXT_PUBLIC_USE_MOCK_DATA=true`

---

## 🚀 Como Testar Offline

### 1️⃣ **Iniciar o servidor de desenvolvimento**

```bash
npm run dev
```

Você deve ver, no console:

```
✓ Compiled successfully
Ready in 1234ms
```

### 2️⃣ **Acessar as páginas de blog**

Abra seu navegador e visite:

#### Lista de Posts
```
http://localhost:3000/blog
```

Você verá:
- **6 posts de exemplo** com dados reais
- **1 post em destaque** "Como Começar sua Jornada de Fitness" (banner grande)
- **2 destaques secundários** em grid
- **3 posts regulares** abaixo

#### Post Individual
Clique em qualquer post para ver a página individual:
```
http://localhost:3000/blog/como-comecar-jornada-fitness
```

Você verá:
- ✓ Título grande em destaque
- ✓ Meta informações (data, unidade, views, tipo)
- ✓ Imagem responsiva (desktop/mobile)
- ✓ Conteúdo renderizado em HTML
- ✓ Badge "EM DESTAQUE" se aplicável
- ✓ Informações do autor
- ✓ Sem erros ou requisições a API

#### Seção Blog na Home
```
http://localhost:3000/
```

Você verá:
- Seção "Blog Fitness Exclusive"
- **Últimos 3 posts** com CTA
- Links para `/blog`

---

## 📊 Posts de Teste Disponíveis

6 posts mock estão disponíveis em `src/lib/mock-data.ts`:

| Slug | Título | Tipo | Destaque |
|------|--------|------|----------|
| `como-comecar-jornada-fitness` | Como Começar sua Jornada de Fitness | blog | ⭐ TOP |
| `5-exercicios-crossfit-queimar-calorias` | 5 Exercícios de CrossFit | blog | 🎯 BANNER |
| `novo-espaco-cardio-fitness-exclusive` | Novo Espaço de Cardio | social | ❌ Não |
| `dicas-treino-pesos-video` | Dicas Estratégicas de Treino | video | ❌ Não |
| `10-alimentos-recuperacao-pos-treino` | 10 Alimentos para Recuperação | blog | ❌ Não |
| `yoga-iniciantes-guia-completo` | Yoga para Iniciantes | blog | ❌ Não |

---

## 🔧 Como Funciona

### Timeline do Fluxo

```
┌─────────────────────────────────────────────────────┐
│ Você acessa http://localhost:3000/blog              │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Next.js renderiza app/blog/page.tsx                 │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Chama fetchPosts()                                  │
│ (em src/lib/strapi.ts)                              │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│ Verifica: USE_MOCK_DATA === 'true'?                 │
│ (em .env.local)                                     │
└─────────────┬───────────────────────────────────────┘
              │
              ├─ SIM → Retorna getMockPostsResponse()
              │         (dados em src/lib/mock-data.ts)
              │
              └─ NÃO → Tenta buscar de Strapi
                        Se falhar → fallback para mock
```

### Dados Mock

Os dados mock incluem:
- ✓ Todos os campos do Post completos
- ✓ 3 tipos: blog (texto + imagem), video (YouTube), social (Instagram)
- ✓ Destaques com datas válidas (testadas)
- ✓ SEO metadata completo
- ✓ Imagens reais da Unsplash (via URL)
- ✓ Conteúdo HTML renderizado

### Console Output

Quando você acessar `/blog`, veja o console (dev server):

```
📊 Using mock data for posts (development mode)
```

Ou ao acessar um post individual:

```
📄 Fetching post "como-comecar-jornada-fitness" from mock data
```

---

## ✨ Recursos Testáveis em Modo Mock

### ✅ Funcionando
- [x] Listar todos os posts
- [x] Filtros e sorting por data
- [x] Destaques com posições (top, banner, carousel)
- [x] Validação de datas de destaque
- [x] Posts individuais com rota dinâmica
- [x] Metadata SEO dinâmica
- [x] 3 tipos de post (blog, video, social)
- [x] Renderização de HTML content
- [x] Responsividade (mobile/desktop)
- [x] Loading states
- [x] Error states (graceful)
- [x] Integração na home page

### ❌ Não Funcionando (Esperado)
- [ ] Incremento de viewCount (não persiste)
- [ ] Criação/edição de posts
- [ ] Upload de imagens
- [ ] Autenticação de editors

---

## 🎨 Componentes Testáveis

### PostCard
```
http://localhost:3000/blog
```
Clique em qualquer card para testar o componente e a navegação.

### FeaturedPostBanner
```
http://localhost:3000/blog
```
Veja o banner grande no topo da página de posts.

### PostList
```
http://localhost:3000/blog
```
Veja o organizador automático com destaques separados.

### PostContent
```
http://localhost:3000/blog/como-comecar-jornada-fitness
```
Teste a renderização completa de um post.

### RecentBlogSection (Desktop)
```
http://localhost:3000/
```
Redimensione a tela para > 768px. Veja a seção na home.

### RecentBlogSectionMobile  
```
http://localhost:3000/
```
Redimensione a tela para < 768px. Veja a seção mobile otimizada.

---

## 🔄 Mudar Entre Mock e Real

### Para usar Mock Data (OFFLINE)
```env
# .env.local
NEXT_PUBLIC_USE_MOCK_DATA=true
```

### Para usar Strapi Real (ONLINE)
1. Instale Strapi em `cms.fitnessexclusive.com.br`
2. Configure e crie posts lá
3. Gere um API Token
4. Atualize `.env.local`:
   ```env
   NEXT_PUBLIC_USE_MOCK_DATA=false
   STRAPI_API_TOKEN=seu-token-real-aqui
   ```
5. Execute `npm run dev` novamente

O código **automaticamente detectará** e usará os dados reais!

---

## 🐛 Troubleshooting

### Problema: "Posts não carregam"
**Solução**: 
1. Verifique se `NEXT_PUBLIC_USE_MOCK_DATA=true` em `.env.local`
2. Reinicie o servidor: `npm run dev`

### Problema: "Imagens não aparecem"
**Solução**:
- Mock data usa URLs da Unsplash (externas)
- Sua conexão de internet está funcionando?
- Verifique console do navegador (F12 → Network)

### Problema: "Mock data parece desatualizado"
**Solução**:
- Edite `src/lib/mock-data.ts` diretamente
- O servidor reinicia automaticamente (Turbopack)
- Atualize a página no navegador (F5)

### Problema: "Rota /blog/[slug] retorna 404"
**Solução**:
- Verifique o slug exato em `src/lib/mock-data.ts`
- Use um dos slugs listados acima
- Devem começar sem `/blog/`

---

## 📝 Editar Dados Mock

Abra `src/lib/mock-data.ts` para:

### Adicionar um novo post
```typescript
export const mockPosts: Post[] = [
  // ... posts existentes...
  {
    id: 7,
    documentId: "post-7",
    title: "Seu novo post",
    slug: "seu-novo-post",
    content: "Seu conteúdo HTML aqui",
    excerpt: "Resumo curto",
    type: "blog",
    status: "published",
    // ... resto dos campos
  }
];
```

### Editar um post existente
Procure pelo `slug` correspondente e edite qualquer campo.

### Mudar datas de destaque
Edite `featured.startDate` e `featured.endDate`:
```typescript
featured: {
  isFeatured: true,
  startDate: new Date(2026, 2, 8).toISOString(),  // 8 de março
  endDate: new Date(2026, 2, 15).toISOString(),   // 15 de março
}
```

---

## 🎯 Casos de Teste Recomendados

### 1. Teste Responsividade
```bash
npm run dev
# Abra DevTools (F12)
# Toggle device toolbar (Ctrl+Shift+M)
# Teste em diferentes breakpoints
```

### 2. Teste Navegação
```
- Acesse /blog
- Clique em um post
- Veja rota mudar para /blog/[slug]
- Clique em "Voltar ao blog"
- Verifique volta para /blog
```

### 3. Teste 3 Tipos de Post
```
- blog: /blog/como-comecar-jornada-fitness (com imagem)
- video: /blog/dicas-treino-pesos-video (com embed YouTube)
- social: /blog/novo-espaco-cardio-fitness-exclusive (link social)
```

### 4. Teste Destaques
```
- Featured banner em top: como-comecar-jornada-fitness
- Featured grid em banner: 5-exercicios-crossfit-queimar-calorias
- Datas são validadas automaticamente
```

### 5. Teste Performance
```bash
npm run build
npm start
# Abra DevTools → Lighthouse
# Rode audit de performance
```

---

## 🚀 Próximos Passos

Quando estiver pronto para usar Strapi real:

1. **Instale Strapi**:
   ```bash
   npx create-strapi-app@latest fitness-cms --quickstart
   ```

2. **Siga STRAPI_SETUP_GUIDE.md** para criar collections

3. **Gere API Token** no admin Strapi

4. **Atualize .env.local**:
   ```env
   NEXT_PUBLIC_USE_MOCK_DATA=false
   STRAPI_API_TOKEN=seu-token-aqui
   ```

5. **Reinicie dev server**

---

## 📚 Arquivos Relacionados

- `src/lib/mock-data.ts` - Dados mock (editável)
- `src/lib/strapi.ts` - Cliente com suporte a mock
- `.env.local` - Configurações (incluindo USE_MOCK_DATA)
- `src/app/blog/page.tsx` - Página de listagem
- `src/app/blog/[slug]/page.tsx` - Página individual

---

## ✅ Conclusão

Você pode agora testar o **blog completamente offline** com 6 posts de exemplo! 

Todos os componentes, validações de destaque, renderização de HTML, tipos de post (blog/video/social) estão funcionando.

**Status**: ✅ Pronto para testes offline
**Próximo**: Instalar Strapi quando estiver pronto

---

**Dúvidas?** Consulte os comentários no código ou revise este guia! 🎉
