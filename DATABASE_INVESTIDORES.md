# Sistema de Armazenamento de Investidores

## Visão Geral

O formulário de investidores agora salva todos os dados em um banco de dados SQLite local. Todos os registros são armazenados com:

- **Nome completo**
- **Telefone**
- **Cidade de interesse**
- **Data de registro**
- **IP do usuário** (para análise)
- **User Agent** (navegador/dispositivo)

## Arquivos Criados

```
📁 .data/
    └── fitness-exclusive.db    # Banco de dados SQLite

📄 src/lib/db.ts               # Funções de banco de dados
📄 src/app/api/investidor/route.ts  # API de investidores
```

## Como Acessar os Dados

### 1. Via API (Recomendado)

#### Listar Investidores
```bash
curl "http://localhost:3000/api/investidor?action=list&senha=seu-admin-password"
```

**Parâmetros:**
- `action=list` - Listar investidores
- `senha` - Senha de administrador (var. ambiente ADMIN_PASSWORD)
- `limit` - Quantidade máxima (padrão: 100)
- `offset` - Deslocamento para paginação (padrão: 0)

**Exemplo de resposta:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "nome": "João Silva",
      "telefone": "(88) 99999-9999",
      "cidade": "Juazeiro do Norte",
      "data_criacao": "2026-04-09 14:30:00"
    }
  ]
}
```

#### Estatísticas
```bash
curl "http://localhost:3000/api/investidor?action=stats&senha=seu-admin-password"
```

**Exemplo de resposta:**
```json
{
  "success": true,
  "data": {
    "total": 25,
    "cidades_unicas": 8,
    "dias_com_adesoes": 5,
    "top_cidades": [
      {"cidade": "Juazeiro do Norte", "quantidade": 12},
      {"cidade": "Crato", "quantidade": 8}
    ]
  }
}
```

### 2. Diretamente via Banco de Dados

Se você quiser acessar os dados sem a API:

```bash
# Navegar até o diretório
cd .data

# Abrir SQLite3
sqlite3 fitness-exclusive.db

# Ver todos os investidores
SELECT * FROM investidores ORDER BY data_criacao DESC;

# Ver estatísticas por cidade
SELECT cidade, COUNT(*) FROM investidores GROUP BY cidade;

# Ver últimos 10 registros
SELECT * FROM investidores ORDER BY data_criacao DESC LIMIT 10;
```

## Variáveis de Ambiente

Adicione ao seu `.env.local`:

```env
# Senha para acessar endpoints protegidos da API
ADMIN_PASSWORD=seu-admin-password-super-secreto
```

⚠️ **IMPORTANTE**: Altere a senha padrão (`admin123`) em produção!

## Estrutura da Tabela

```sql
CREATE TABLE investidores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  telefone TEXT NOT NULL,
  cidade TEXT NOT NULL,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  user_agent TEXT
);
```

## Índices para Performance

- `idx_investidores_telefone` - Para buscar por telefone
- `idx_investidores_data` - Para consultas por data

## Fluxo do Formulário

```
1. Usuário preenche formulário
        ↓
2. POST para /api/investidor
        ↓
3. Validação de dados
        ↓
4. Salva no banco de dados SQLite
        ↓
5. Retorna sucesso
        ↓
6. Redireciona para WhatsApp
```

## Segurança

- ✅ Validação de campos obrigatórios
- ✅ Proteção com senha na API
- ✅ Registro de IP e User Agent
- ✅ Banco de dados local (não exposto)
- ✅ Índices para evitar duplicatas

## Migrations Futuras

Quando precisar migrar para um banco de dados de produção (PostgreSQL, MySQL):

1. Exporte os dados: `SELECT * FROM investidores` em JSON
2. Crie a mesma estrutura no novo BD
3. Importe os dados migrados
4. Atualize `src/lib/db.ts` para conectar ao novo BD

## Backup

Para fazer backup do banco de dados:

```bash
# Copiar arquivo
cp .data/fitness-exclusive.db .data/fitness-exclusive.db.backup

# Ou exportar como SQL
sqlite3 .data/fitness-exclusive.db ".dump" > backup.sql
```

## Troubleshooting

### "Erro ao registrar interesse"
- Verifique se `better-sqlite3` está instalado: `npm list better-sqlite3`
- Verifique permissões na pasta `.data/`
- Reinicie o servidor

### API retorna 401 (Não autorizado)
- Confira se está passando o parâmetro `senha` na URL
- Verifique se a senha está correta em `.env.local`

### Banco de dados "locked"
- Apenas uma conexão por vez com better-sqlite3
- Se receber erro de lock, reinicie o servidor
