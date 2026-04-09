import { NextRequest, NextResponse } from 'next/server';
import { saveInvestidor, getInvestidores, getStatisticas } from '@/lib/db';

export const runtime = 'nodejs';

/**
 * POST /api/investidor
 * Salva um novo investidor
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, telefone, cidade } = body;

    // Validar campos obrigatórios
    if (!nome || !telefone || !cidade) {
      return NextResponse.json(
        { success: false, error: 'Nome, telefone e cidade são obrigatórios' },
        { status: 400 }
      );
    }

    // Validar telefone (mínimo 10 dígitos)
    const telefoneDigitos = telefone.replace(/\D/g, '');
    if (telefoneDigitos.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Telefone inválido' },
        { status: 400 }
      );
    }

    // Validar nome (mínimo 3 caracteres)
    if (nome.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Nome deve ter no mínimo 3 caracteres' },
        { status: 400 }
      );
    }

    // Obter IP e User Agent
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'desconhecido';
    const userAgent = request.headers.get('user-agent') || 'desconhecido';

    // Salvar no banco de dados
    const result = saveInvestidor(
      nome.trim(),
      telefone.trim(),
      cidade.trim(),
      ipAddress,
      userAgent
    );

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: 'Interesse registrado com sucesso!',
          id: result.id
        },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: result.error || 'Erro ao salvar dados' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Erro na rota POST /api/investidor:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/investidor?action=list
 * Lista investidores (protegido por senha)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    const senha = searchParams.get('senha');

    // Validar senha
    const senhaCorreta = process.env.ADMIN_PASSWORD || 'admin123';
    if (senha !== senhaCorreta) {
      return NextResponse.json(
        { success: false, error: 'Não autorizado' },
        { status: 401 }
      );
    }

    if (action === 'list') {
      const limit = parseInt(searchParams.get('limit') || '100');
      const offset = parseInt(searchParams.get('offset') || '0');
      const result = getInvestidores(limit, offset);
      return NextResponse.json(result);
    } else if (action === 'stats') {
      const result = getStatisticas();
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { success: false, error: 'Action não reconhecido' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Erro na rota GET /api/investidor:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
