# Sistema de Banco de Dados de Investidores - Guia Rápido

## ✅ Instalação & Configuração

### 1. Variáveis de Ambiente

Crie ou atualize `.env.local`:

```env
ADMIN_PASSWORD=sua-senha-super-secreta-aqui
```

### 2. Iniciar o Servidor

```bash
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

## 🎯 Como Funciona

```
Usuário preenche formulário
         ↓
Clica em "Enviar Interesse"
         ↓
POST para /api/investidor
         ↓
Valida dados (nome, telefone, cidade)
         ↓
Salva no banco SQLite (.data/fitness-exclusive.db)
         ↓
Redireciona para WhatsApp
```

## 📊 Acessar os Dados

### Via API (Seguro com Senha)

**Listar investidores:**
```bash
curl "http://localhost:3000/api/investidor?action=list&senha=sua-senha-super-secreta-aqui"
```

**Estatísticas:**
```bash
curl "http://localhost:3000/api/investidor?action=stats&senha=sua-senha-super-secreta-aqui"
```

### Via SQLite Direto

```bash
# Abrir banco de dados
sqlite3 .data/fitness-exclusive.db

# Ver todos os investidores
SELECT * FROM investidores ORDER BY data_criacao DESC;

# Contar por cidade
SELECT cidade, COUNT(*) FROM investidores GROUP BY cidade;

# Sair
.quit
```

## 🌐 Exemplo de Integração

Se quiser acessar os dados via JavaScript:

```javascript
const password = 'sua-senha-super-secreta-aqui';

// Listar investidores
const investidores = await fetch(
  `/api/investidor?action=list&senha=${password}`
).then(r => r.json());

console.log(investidores.data);

// Estatísticas
const stats = await fetch(
  `/api/investidor?action=stats&senha=${password}`
).then(r => r.json());

console.log('Total:', stats.data.total);
console.log('Cidades:', stats.data.cidades_unicas);
console.log('Top cidades:', stats.data.top_cidades);
```

## 📁 Arquivos Modificados/Criados

```
✨ NOVO:
  src/lib/db.ts                    # Funções de banco de dados
  src/app/api/investidor/route.ts  # API REST
  DATABASE_INVESTIDORES.md         # Documentação detalhada
  .env.example                     # Variáveis de ambiente

📝 MODIFICADO:
  next.config.ts                   # Removeu output: 'export'
  src/app/investidor/page.tsx      # Formulário agora salva dados
  .gitignore                        # Adicionou .data/
```

## ⚠️ IMPORTANTE: Implicações

### ❌ Antes (Static Export)
```
- Site: 100% estático (HTML puro)
- Deploy: Simples (nginx, vercel, github pages)
- Nenhuma API dinâmica
```

### ✅ Agora (Server Runtime)
```
- Site: Node.js server required
- Deploy: Vercel, Railway, etc (não estático)
- APIs dinâmicas funcionam
```

## 🚀 Deploy em Produção

Para Vercel:
1. Push do código para GitHub
2. Conectar repo no Vercel
3. Vercel detecta Next.js automaticamente
4. Será deployado em modo server (automático)
5. Adicionar `ADMIN_PASSWORD` nas variáveis de ambiente do Vercel

Para servidor próprio:
```bash
npm run build
npm run start
```

## 🔒 Segurança

- ✅ Validação de campos
- ✅ Proteção com senha na API
- ✅ Registro de IP do usuário
- ✅ Banco local não exposto
- ⚠️ **TODO**: Implementar rate limiting

## 📈 Próximas Melhorias

- [ ] Dashboard para visualizar investidores
- [ ] Exportar dados como CSV/Excel
- [ ] Rate limiting na API
- [ ] Envio de empreendimento automático para email
- [ ] Notificações em tempo real
- [ ] Migração para PostgreSQL em produção

---

**Mais detalhes em:** [DATABASE_INVESTIDORES.md](./DATABASE_INVESTIDORES.md)
