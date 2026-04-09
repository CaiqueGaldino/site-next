import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Diretório de dados
const dbDir = path.join(process.cwd(), '.data');

// Garantir que o diretório existe
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(dbDir, 'fitness-exclusive.db');

let db: Database.Database | null = null;

/**
 * Inicializa e retorna a conexão com o banco de dados
 */
export function getDatabase(): Database.Database {
  if (db) return db;

  db = new Database(dbPath);
  db.pragma('journal_mode = WAL');

  // Criar tabela se não existir
  db.exec(`
    CREATE TABLE IF NOT EXISTS investidores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      telefone TEXT NOT NULL,
      cidade TEXT NOT NULL,
      data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
      ip_address TEXT,
      user_agent TEXT
    );

    CREATE INDEX IF NOT EXISTS idx_investidores_telefone ON investidores(telefone);
    CREATE INDEX IF NOT EXISTS idx_investidores_data ON investidores(data_criacao);
  `);

  return db;
}

/**
 * Salva um novo investidor no banco de dados
 */
export function saveInvestidor(
  nome: string,
  telefone: string,
  cidade: string,
  ipAddress?: string,
  userAgent?: string
): { success: boolean; id?: number; error?: string } {
  try {
    const database = getDatabase();

    const stmt = database.prepare(`
      INSERT INTO investidores (nome, telefone, cidade, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(nome, telefone, cidade, ipAddress || null, userAgent || null);

    return {
      success: true,
      id: typeof result.lastInsertRowid === 'bigint' 
        ? Number(result.lastInsertRowid) 
        : result.lastInsertRowid
    };
  } catch (error) {
    console.error('Erro ao salvar investidor:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido'
    };
  }
}

/**
 * Obtém todos os investidores (para Analytics)
 */
export function getInvestidores(limit = 100, offset = 0) {
  try {
    const database = getDatabase();

    const stmt = database.prepare(`
      SELECT id, nome, telefone, cidade, data_criacao
      FROM investidores
      ORDER BY data_criacao DESC
      LIMIT ? OFFSET ?
    `);

    const investidores = stmt.all(limit, offset);
    return { success: true, data: investidores };
  } catch (error) {
    console.error('Erro ao buscar investidores:', error);
    return { success: false, error: 'Erro ao buscar investidores' };
  }
}

/**
 * Obtém estatísticas dos investidores
 */
export function getStatisticas() {
  try {
    const database = getDatabase();

    const stats = database.prepare(`
      SELECT 
        COUNT(*) as total,
        COUNT(DISTINCT cidade) as cidades_unicas,
        COUNT(DISTINCT DATE(data_criacao)) as dias_com_adesoes
      FROM investidores
    `).get() as { total: number; cidades_unicas: number; dias_com_adesoes: number };

    const posCidades = database.prepare(`
      SELECT cidade, COUNT(*) as quantidade
      FROM investidores
      GROUP BY cidade
      ORDER BY quantidade DESC
      LIMIT 10
    `).all();

    return {
      success: true,
      data: {
        total: stats.total,
        cidades_unicas: stats.cidades_unicas,
        dias_com_adesoes: stats.dias_com_adesoes,
        top_cidades: posCidades
      }
    };
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return { success: false, error: 'Erro ao buscar estatísticas' };
  }
}

/**
 * Fecha a conexão com o banco de dados
 */
export function closeDatabase() {
  if (db) {
    db.close();
    db = null;
  }
}
