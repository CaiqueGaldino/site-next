/**
 * Mock data for offline testing
 * This file contains sample blog posts to test the blog functionality
 * without needing Strapi running
 */

import { Post, PostListResponse } from "@/lib/types";

export const mockPosts: Post[] = [
  {
    id: 1,
    documentId: "post-1",
    title: "Como Começar sua Jornada de Fitness",
    slug: "como-comecar-jornada-fitness",
    content: `
      <h2>O Primeiro Passo</h2>
      <p>Começar uma jornada de fitness pode parecer assustador, mas com os passos certos, você estará no caminho para o sucesso. Neste artigo, vamos explorar como dar seus primeiros passos rumo a uma vida mais saudável.</p>
      
      <h3>1. Defina seus objetivos</h3>
      <p>Antes de começar qualquer programa de fitness, é importante saber o que você quer alcançar. Seus objetivos podem ser perda de peso, ganho de massa muscular, melhor saúde em geral, ou simplesmente se sentir melhor consigo mesmo.</p>
      
      <h3>2. Escolha uma modalidade</h3>
      <p>Existem muitas opções disponíveis: musculação, CrossFit, aeróbicos, yoga, natação e muito mais. Escolha algo que você goste e se sinta motivado a fazer regularmente.</p>
      
      <h3>3. Comece devagar</h3>
      <p>Não tente fazer tudo de uma vez. Comece com 2-3 dias de treino por semana e aumente gradualmente. Seu corpo precisa de tempo para se adaptar.</p>
      
      <h3>4. Invista em uma boa alimentação</h3>
      <p>Fitness não é apenas exercício. Uma boa nutrição é fundamental para alcançar seus objetivos.</p>
    `,
    excerpt: "Descubra como dar seus primeiros passos rumo a uma vida mais saudável e alcançar seus objetivos fitness.",
    type: "blog",
    status: "published",
    unidade: {
      id: 1,
      documentId: "unidade-1",
      nome: "Fitness Exclusive - Centro",
      localizacao: "Centro de Fortaleza",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "coach_gabriel",
      email: "carlos@fitnessexclusive.com.br",
    },
    media: {
      images: {
        mobile: {
          url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop",
          alt: "Pessoa começando treino de fitness",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
          alt: "Pessoa começando treino de fitness",
        },
      },
    },
    featured: {
      isFeatured: true,
      position: "top",
      priority: 1,
      startDate: new Date(2026, 2, 8).toISOString(),
      endDate: new Date(2026, 2, 15).toISOString(),
    },
    seo: {
      metaDescription: "Guia completo para começar sua jornada de fitness com sucesso.",
      metaKeywords: ["fitness", "treino", "iniciante", "musculação"],
    },
    viewCount: 245,
    publishedAt: new Date(2026, 2, 5).toISOString(),
    createdAt: new Date(2026, 2, 5).toISOString(),
    updatedAt: new Date(2026, 2, 5).toISOString(),
  },
  {
    id: 2,
    documentId: "post-2",
    title: "5 Exercícios de CrossFit para Queimar Calorias",
    slug: "5-exercicios-crossfit-queimar-calorias",
    content: `
      <h2>Maximize seu Treino</h2>
      <p>O CrossFit é uma forma intensa de exercício que combina levantamento de peso, ginástica e cardio. Aqui estão 5 exercícios que vão ajudá-lo a queimar o máximo de calorias.</p>
      
      <h3>1. Burpee</h3>
      <p>Um exercício de corpo inteiro que trabalha praticamente todos os músculos. Comece em pé, abaixe-se, faça uma flexão, pule de volta e termine pulando para o ar.</p>
      
      <h3>2. Kettlebell Swing</h3>
      <p>Este exercício explosivo trabalha sua cadeia posterior e queima uma quantidade significativa de calorias.</p>
      
      <h3>3. Box Jumps</h3>
      <p>Pule em uma caixa de forma explosiva. Este exercício é excelente para desenvolver potência nos membros inferiores.</p>
      
      <h3>4. Double Unders</h3>
      <p>Pule corda, mas a corda passa duas vezes por cada salto. É um exercício cardiovascular intenso.</p>
      
      <h3>5. Wall Balls</h3>
      <p>Levante uma bola medicinal acima de sua cabeça e jogue contra a parede. Repita o máximo de vezes possível.</p>
    `,
    excerpt: "Descubra 5 exercícios de CrossFit que vão turbinar sua queima de calorias.",
    type: "blog",
    status: "published",
    unidade: {
      id: 2,
      documentId: "unidade-2",
      nome: "Fitness Exclusive - Messejana",
      localizacao: "Messejana",
    },
    author: {
      id: 2,
      documentId: "author-2",
      username: "ana_cross",
      email: "ana@fitnessexclusive.com.br",
    },
    media: {
      images: {
        mobile: {
          url: "https://images.unsplash.com/photo-1538805060514-97d6b6663834?w=500&h=300&fit=crop",
          alt: "Treino de CrossFit intenso",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1538805060514-97d6b6663834?w=1200&h=600&fit=crop",
          alt: "Treino de CrossFit intenso",
        },
      },
    },
    featured: {
      isFeatured: true,
      position: "banner",
      priority: 2,
      startDate: new Date(2026, 2, 7).toISOString(),
      endDate: new Date(2026, 2, 20).toISOString(),
    },
    seo: {
      metaDescription: "5 exercícios de CrossFit para queimar o máximo de calorias em pouco tempo.",
      metaKeywords: ["crossfit", "exercícios", "queimar calorias", "treino"],
    },
    viewCount: 512,
    publishedAt: new Date(2026, 2, 3).toISOString(),
    createdAt: new Date(2026, 2, 3).toISOString(),
    updatedAt: new Date(2026, 2, 3).toISOString(),
  },
  {
    id: 3,
    documentId: "post-3",
    title: "Confira o Novo Espaço de Cardio da Fitness Exclusive",
    slug: "novo-espaco-cardio-fitness-exclusive",
    content: `
      <h2>Uma Revolução no Seu Treino Cardiovascular</h2>
      <p>Temos o prazer de anunciar a abertura do nosso novo espaço de cardio, com os equipamentos mais modernos do mercado.</p>
      
      <h3>O que há de novo?</h3>
      <p>15 esteiras de última geração, 10 bikes estacionárias, 8 elípticos e 5 máquinas de remo. Todos os equipamentos são equipados com telas touchscreen e programas de treino personalizados.</p>
      
      <h3>Ambiente climatizado</h3>
      <p>O novo espaço é completamente climatizado, garantindo conforto total durante seu treino, independentemente das condições climáticas externas.</p>
      
      <h3>Personal Trainers disponíveis</h3>
      <p>Nossos personal trainers estão disponíveis para ajudá-lo a configurar um programa de treino cardio personalizado de acordo com seus objetivos.</p>
    `,
    excerpt: "Conheça o novo espaço de cardio da Fitness Exclusive com os equipamentos mais modernos.",
    type: "social",
    status: "published",
    unidade: {
      id: 1,
      documentId: "unidade-1",
      nome: "Fitness Exclusive - Centro",
      localizacao: "Centro de Fortaleza",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "coach_gabriel",
      email: "carlos@fitnessexclusive.com.br",
    },
    media: {
      socialUrl: "https://instagram.com/fitnessexclusive",
    },
    featured: {
      isFeatured: false,
      position: "carousel",
      priority: 3,
    },
    seo: {
      metaDescription: "Conheça o novo espaço de cardio da Fitness Exclusive com equipamentos de última geração.",
      metaKeywords: ["cardio", "novo", "equipamentos", "treino"],
    },
    viewCount: 890,
    publishedAt: new Date(2026, 2, 1).toISOString(),
    createdAt: new Date(2026, 2, 1).toISOString(),
    updatedAt: new Date(2026, 2, 1).toISOString(),
  },
  {
    id: 4,
    documentId: "post-4",
    title: "Assista: Dicas Estratégicas de Treino com Pesos",
    slug: "dicas-treino-pesos-video",
    content: `
      <h2>Maximize seus Resultados</h2>
      <p>Neste vídeo, nossos especialistas compartilham as estratégias mais eficazes para o treinamento com pesos.</p>
      
      <h3>O que você vai aprender:</h3>
      <ul>
        <li>Técnica correta de levantamento</li>
        <li>Progressão de peso adequada</li>
        <li>Frequência de treino ideal</li>
        <li>Recuperação e descanso</li>
        <li>Nutrição para ganho de massa</li>
      </ul>
      
      <p>Assista ao vídeo completo para mais detalhes e demonstrações práticas!</p>
    `,
    excerpt: "Descubra as dicas estratégicas dos nossos especialistas para maximizar seus resultados no treino com pesos.",
    type: "video",
    status: "published",
    unidade: {
      id: 2,
      documentId: "unidade-2",
      nome: "Fitness Exclusive - Messejana",
      localizacao: "Messejana",
    },
    author: {
      id: 2,
      documentId: "author-2",
      username: "ana_cross",
      email: "ana@fitnessexclusive.com.br",
    },
    media: {
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    featured: {
      isFeatured: false,
    },
    seo: {
      metaDescription: "Vídeo com dicas estratégicas para treino com pesos. Assista e maximize seus resultados.",
      metaKeywords: ["vídeo", "treino", "pesos", "musculação"],
    },
    viewCount: 1250,
    publishedAt: new Date(2026, 2, 2).toISOString(),
    createdAt: new Date(2026, 2, 2).toISOString(),
    updatedAt: new Date(2026, 2, 2).toISOString(),
  },
  {
    id: 5,
    documentId: "post-5",
    title: "Os 10 Alimentos Mais Importantes para Recuperação Pós-Treino",
    slug: "10-alimentos-recuperacao-pos-treino",
    content: `
      <h2>Nutrição Inteligente</h2>
      <p>O que você come após o treino é tão importante quanto o treino em si. A recuperação começa com a nutrição adequada.</p>
      
      <h3>Proteína de rápida absorção</h3>
      <p>Ovos, frango, iogurte grego e whey protein são excelentes fontes de proteína que seus músculos precisam.</p>
      
      <h3>Carboidratos complexos</h3>
      <p>Batata doce, arroz integral e aveia ajudam a reabastecer seus estoques de glicogênio.</p>
      
      <h3>Gorduras boas</h3>
      <p>Abacate, azeite e nozes são ricas em gorduras monoinsaturadas que apoiam a recuperação e a saúde geral.</p>
      
      <h3>Frutas e vegetais</h3>
      <p>Banana, melancia, melão e vegetais folhosos são ricos em vitaminas e minerais essenciais.</p>
    `,
    excerpt: "Conheça os 10 alimentos mais importantes para uma recuperação eficaz pós-treino.",
    type: "blog",
    status: "published",
    unidade: {
      id: 3,
      documentId: "unidade-3",
      nome: "Fitness Exclusive - Aldeota",
      localizacao: "Aldeota",
    },
    author: {
      id: 3,
      documentId: "author-3",
      username: "nutri_carlos",
      email: "nutri@fitnessexclusive.com.br",
    },
    media: {
      images: {
        mobile: {
          url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=300&fit=crop",
          alt: "Alimentos saudáveis para recuperação",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&h=600&fit=crop",
          alt: "Alimentos saudáveis para recuperação",
        },
      },
    },
    featured: {
      isFeatured: false,
    },
    seo: {
      metaDescription: "Os 10 alimentos que você deve comer após o treino para maximizar a recuperação e ganhos.",
      metaKeywords: ["nutrição", "recuperação", "alimentos", "pós-treino"],
    },
    viewCount: 678,
    publishedAt: new Date(2026, 2, 4).toISOString(),
    createdAt: new Date(2026, 2, 4).toISOString(),
    updatedAt: new Date(2026, 2, 4).toISOString(),
  },
  {
    id: 6,
    documentId: "post-6",
    title: "Yoga para Iniciantes: Um Guia Completo",
    slug: "yoga-iniciantes-guia-completo",
    content: `
      <h2>Encontre seu Caminho para o Bem-Estar</h2>
      <p>Yoga é uma prática antiga que combina movimento físico, respiração e meditação. É perfeita para iniciantes de qualquer idade.</p>
      
      <h3>Benefícios do Yoga</h3>
      <p>Flexibilidade aumentada, força muscular aprimorada, alívio do estresse, melhor postura e equilíbrio emocional.</p>
      
      <h3>Posturas básicas para começar</h3>
      <p>Tadasana (postura da montanha), Urdhva Mukha Svanasana (cão para cima), Adho Mukha Svanasana (cão para baixo) e muitas outras.</p>
      
      <h3>Frequência recomendada</h3>
      <p>Para iniciantes, 2-3 vezes por semana é ideal. Conforme você progride, pode aumentar para 4-5 vezes por semana.</p>
    `,
    excerpt: "Aprenda o fundamento do yoga e descubra como essa prática milenar pode transformar sua vida.",
    type: "blog",
    status: "published",
    unidade: {
      id: 1,
      documentId: "unidade-1",
      nome: "Fitness Exclusive - Centro",
      localizacao: "Centro de Fortaleza",
    },
    author: {
      id: 4,
      documentId: "author-4",
      username: "instrutor_yoga",
      email: "yoga@fitnessexclusive.com.br",
    },
    media: {
      images: {
        mobile: {
          url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
          alt: "Aula de yoga em grupo",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
          alt: "Aula de yoga em grupo",
        },
      },
    },
    featured: {
      isFeatured: false,
    },
    seo: {
      metaDescription: "Guia completo de yoga para iniciantes. Aprenda os fundamentos e comece sua jornada wellness.",
      metaKeywords: ["yoga", "iniciante", "bem-estar", "meditação"],
    },
    viewCount: 432,
    publishedAt: new Date(2026, 1, 28).toISOString(),
    createdAt: new Date(2026, 1, 28).toISOString(),
    updatedAt: new Date(2026, 1, 28).toISOString(),
  },
];

/**
 * Helper function to get mock posts response
 */
export function getMockPostsResponse(limit = 10): PostListResponse {
  const sorted = [...mockPosts].sort(
    (a, b) =>
      new Date(b.publishedAt || 0).getTime() -
      new Date(a.publishedAt || 0).getTime()
  );

  const paginated = sorted.slice(0, limit);

  return {
    data: paginated,
    meta: {
      pagination: {
        page: 1,
        pageSize: limit,
        pageCount: 1,
        total: mockPosts.length,
      },
    },
  };
}

/**
 * Helper function to get a single mock post by slug
 */
export function getMockPostBySlug(slug: string): Post | undefined {
  return mockPosts.find((post) => post.slug === slug);
}
