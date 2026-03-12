# Guia de Configuração Strapi CMS

Este documento fornece instruções passo a passo para configurar o Strapi em seu subdomínio `cms.fitnessexclusive.com.br`.

## Índice
1. [Instalação e Setup Inicial](#instalação-e-setup-inicial)
2. [Criar Collection: Unidades](#criar-collection-unidades)
3. [Criar Collection: Posts](#criar-collection-posts)
4. [Configurar Roles & Permissions](#configurar-roles--permissions)
5. [Gerar API Token](#gerar-api-token)
6. [Integração com Next.js](#integração-com-nextjs)

---

## Instalação e Setup Inicial

### 1. Criar novo projeto Strapi

```bash
# No servidor, rode:
npx create-strapi-app@latest fitness-cms --quickstart

# Ou especificando database:
npx create-strapi-app@latest fitness-cms --db=sqlite
```

### 2. Acessar Admin Panel

Uma vez instalado, o Strapi abrirá automaticamente:
- **Local**: `http://localhost:1337/admin`
- **Em Produção**: `https://cms.fitnessexclusive.com.br/admin`

Crie um super admin durante o setup inicial.

### 3. Configurar Variáveis de Ambiente

Crie arquivo `.env` na raiz do projeto Strapi:

```env
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=./.tmp/data.db

# API
API_TOKEN_SALT=seu-salt-aleatorio-aqui

# Host
HOST=0.0.0.0
PORT=1337

# URL pública (para produção)
PUBLIC_URL=https://cms.fitnessexclusive.com.br

# Admin
ADMIN_JWT_SECRET=seu-jwt-secret-aleatorio-aqui
JWT_SECRET=seu-jwt-secret-aleatorio-aqui
```

---

## Criar Collection: Unidades

Esta collection já deve estar criada, mas aqui está como criar se não existir.

### Passos:

1. **Ir para Content-type Builder** (Engrenagem no menu lateral)
2. **Clicar em "Create new collection type"**
3. **Configurar**:

| Campo | Tipo | Obrigatório | Unique |
|-------|------|-------------|--------|
| nome | String | ✓ | ✓ |
| localizacao | String | | |
| endereco | String | | |
| telefone | String | | |
| email | String | | |
| horarios | String | | |

4. **Salvar e publicar**

---

## Criar Collection: Posts

Este é o collection principal do blog.

### 1. Criar Collection "Post"

1. **Ir para Content-type Builder**
2. **Clicar em "Create new collection type"**
3. **Nome**: `post` (singular, será pluralizado automaticamente)
4. **Descrição**: Artigos, vídeos e posts sociais do blog

### 2. Adicionar Campos

Adicione os campos **na seguinte ordem**:

#### a) **Campos Básicos**

| Campo | Tipo | Config | Obrigatório |
|-------|------|--------|-------------|
| `title` | String | Max length: 255, Unique | ✓ |
| `slug` | String | Max length: 255, Unique | ✓ |
| `excerpt` | String | Max length: 500 | ✓ |
| `content` | RichText | (usar Blocks editor nativo) | ✓ |

**Para slug**: Ative "Generative AI" se disponível, ou use padrão: `{{ title }}` em lowercase com hífens.

#### b) **Enumerações/Tipos**

| Campo | Tipo | Valores | Default |
|-------|------|---------|---------|
| `type` | Enumeration | blog, video, social | blog |
| `status` | Enumeration | draft, published | draft |
| `featured.position` | Enumeration | top, banner, carousel | top |

#### c) **Datas**

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `publishedAt` | DateTime | |
| `viewCount` | Integer | (default: 0) |

### 3. Criar Component "PostMedia"

Este é um **component reutilizável** que pega em "PostMedia".

1. **Ir em Content-type Builder → Components**
2. **Clicar "Create new component"**
3. **Nome**: `post-media` (categoria: `blog` ou criar nova)

**Campos do Component:**

```
post-media (Component)
├── images (Object/Component - não repeatable)
│   ├── mobile (Media)
│   ├── desktop (Media)
│   └── alt (String)
├── youtubeUrl (String) - conditional: type = video
└── socialUrl (String) - conditional: type = social
```

**Instrução para criar sub-componente:**

Na verdade, Strapi não suporta componentes dentro de componentes bem. Use esta abordagem:

1. **Criar uma estrutura simples:**

Em `post-media` Component, adicione:
- `mobileImage` - Media
- `desktopImage` - Media
- `imageAlt` - String
- `youtubeUrl` - String (com hint: "Ex: https://www.youtube.com/watch?v=VIDEO_ID")
- `socialUrl` - String (com hint: "Ex: https://www.instagram.com/p/POST_ID/")

### 4. Adicionar Relações ao Collection "Post"

Volte para o Collection "post" e adicione:

| Campo | Tipo | Relação | Obrigatório |
|-------|------|---------|-------------|
| `unidade` | Relation | Post belongs to Unidade (Many to One) | ✓ |
| `author` | Relation | Post belongs to User (Many to One) | ✓ |

### 5. Criar Component "FeaturedSettings"

1. **Content-type Builder → Components**
2. **Create new component**
3. **Nome**: `featured-settings` (categoria: blog)

**Campos:**

| Campo | Tipo | Config |
|-------|------|--------|
| `isFeatured` | Boolean | default: false |
| `priority` | Integer | default: 1, hint: "1-3" |
| `startDate` | DateTime | |
| `endDate` | DateTime | |

### 6. Adicionar Featured Settings ao Post

Volte para Collection "post" e adicione:
- `featured` - Relação para Component `featured-settings` (not repeatable)

### 7. Criar Component "PostSEO"

1. **Content-type Builder → Components**
2. **Create new component**
3. **Nome**: `post-seo` (categoria: blog)

**Campos:**

| Campo | Tipo |
|-------|------|
| `metaDescription` | String (Max 160) |
| `metaKeywords` | String (comma-separated) |
| `ogImage` | Media |

### 8. Adicionar SEO ao Post

Volte para Collection "post" e adicione:
- `seo` - Relação para Component `post-seo` (not repeatable)

### 9. Salvar e Publicar

Clique em **"Save"** e depois **"Publish"** na Collection "post".

---

## Configurar Roles & Permissions

### 1. Criar Role "Editor"

1. **Ir para Settings → Users & Permissions → Roles**
2. **Clique em "New role"**
3. **Nome**: `Editor`
4. **Descrição**: Editor de posts vinculado a uma unidade

### 2. Configurar Permissões do Editor

Procure por "Posts" e configure:

- ✓ **find** - Listar posts (somente da sua unidade via middleware)
- ✓ **findOne** - Ver um post específico
- ✓ **create** - Criar novo post
- ✓ **update** - Editar post próprio
- ✗ **delete** - Não pode deletar
- ✗ **publish** - Não pode publicar (optional, se quiser workflow de aprovação)

### 3. Configurar Outras Permissões

Procure por:
- **Unidades**: find, findOne (apenas leitura)
- **Users**: find (listar users)
- **API Tokens**: nenhuma

### 4. Salvar Role

---

## Gerar API Token

### 1. Acessar API Tokens

1. **Ir para Settings → API Tokens**
2. **Clique em "Create new API token"**

### 2. Configurar Token

| Campo | Valor |
|-------|-------|
| **Name** | `Next.js Blog` |
| **Description** | Blog integration with Next.js frontend |
| **Type** | `Full access` (ou `Read-only` se preferir segurança extra) |
| **Token duration** | Never (ou 30/90 dias) |

### 3. Salvar e Copiar Token

Após criar, você verá um token como:
```
abc123def456ghi789jkl012mno345
```

**⚠️ IMPORTANTE**: Copie este token imediatamente. Ele não será mostrado novamente.

### 4. Adicionar ao Next.js

No arquivo `.env.local` do Next.js:

```env
REVALIDATE_POSTS=3600
REVALIDATE_FEATURED=300
STRAPI_API_TOKEN=abc123def456ghi789jkl012mno345
```

---

## Integração com Next.js

### 1. Validar Conexão

Teste a conexão rodando localmente:

```bash
cd seu-projeto-next
npm run dev

# Acesse:
# http://localhost:3000/blog
```

Se funcionar, você verá:
- Página do blog carregando (mesmo que vazia inicialmente)
- Sem erros no console

### 2. Criar Primeiro Post (Teste)

No Strapi Admin:

1. **Content → Posts**
2. **Create new entry**
3. **Preencha**:
   - **title**: "Primeiro Post - Teste"
   - **slug**: "primeiro-post-teste"
   - **excerpt**: "Este é nosso primeiro post para testar"
   - **content**: "Conteúdo teste aqui"
   - **type**: blog
   - **unidade**: Selecione uma unidade existente
   - **author**: Seu usuário
   - **status**: published
   - **publishedAt**: Hoje

4. **Salve e Publish**

### 3. Verificar no Next.js

Acesse `http://localhost:3000/blog` e você deve ver:
- Card do post em destaque se tiver `featured.isFeatured = true`
- Post listado na grid

### 4. Testar Destaque

1. Abra o post criado no Strapi
2. Acesse a seção **"Featured"**
3. Ative **isFeatured**
4. Configure **position**: top
5. Configure **startDate/endDate**: hoje até amanhã
6. Salve

Atualize o blog no Next.js. Você deve ver o post como "DESTAQUE PRINCIPAL" no topo.

---

## Troubleshooting

### Erro: "Strapi API error: 401"

**Problema**: Token inválido ou expirado

**Solução**:
1. Vá em Settings → API Tokens
2. Regenere ou crie um novo token
3. Atualize `.env.local` no Next.js
4. Reinicie `npm run dev`

### Erro: "Cannot read property 'unidade' of undefined"

**Problema**: Posts não estão sendo populados com relações

**Solução**:
1. No Strapi, vá em Content-type Builder
2. Clique em `post`
3. Verifique se os campos `unidade` e `author` existem
4. Selecione um post e preencha esses campos
5. Salve e Publish

### Imagens não aparecem

**Problema**: Domínio da imagem não está na whitelist do Next.js

**Solução**:
1. Abra `next.config.ts`
2. Verifique se `cms.fitnessexclusive.com.br` está em `images.domains`
3. Se usar localhost para testar, adicione `localhost:1337`

### Posts não aparecem ordenados por data

**Problema**: ISR não revalidou

**Solução**:
1. Aguarde 5 minutos (intervalo padrão)
2. Ou execute `npm run build && npm start` para rebuild
3. Ou reduz `REVALIDATE_POSTS` em `.env.local` para `300` (5 minutos)

---

## Próximos Passos

1. ✅ **Collection "Posts" criado**
2. ✅ **API Token gerado**
3. ⬜ **Criar mais conteúdo** (posts, vídeos, links sociais)
4. ⬜ **Integrar na home page** do Next.js
5. ⬜ **Testar com usuários Editors** reais
6. ⬜ **Deploy em produção**

---

## Referências

- [Documentação Strapi](https://docs.strapi.io)
- [Strapi Content-Type Builder](https://docs.strapi.io/user-docs/content-manager/content-types-builder)
- [API Tokens Strapi](https://docs.strapi.io/user-docs/settings/API-tokens)
- [Query Parameters](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/api-parameters.html)
