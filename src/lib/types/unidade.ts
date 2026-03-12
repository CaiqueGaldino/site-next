/**
 * Unidade (Unit/Location) type definitions
 */

export interface Unidade {
  id: number;
  documentId: string;
  nome: string;
  localizacao?: string;
  endereco?: string;
  telefone?: string;
  email?: string;
  horarios?: string;
  createdAt: string;
  updatedAt: string;
}
