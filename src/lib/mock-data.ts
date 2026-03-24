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
  {
    id: 7,
    documentId: "post-7",
    title: "HIIT: O Treino Que Transforma em Menos Tempo",
    slug: "hiit-treino-transforma-menos-tempo",
    content: `
      <h2>O Poder do Treinamento Intervalado de Alta Intensidade</h2>
      <p>O HIIT (High-Intensity Interval Training) é a modalidade queridinha de quem tem uma rotina agitada e quer resultados expressivos. Alternando períodos de esforço máximo com breves descansos, você consegue queimar muito mais gordura do que no cardio tradicional.</p>
      <h3>Por que o HIIT funciona?</h3>
      <p>O fenômeno chamado EPOC (Excess Post-Exercise Oxygen Consumption) faz com que seu metabolismo permaneça acelerado por até 24h após a sessão. Isso significa que você continua queimando calorias mesmo dormindo.</p>
      <h3>Como montar um treino HIIT</h3>
      <p>Uma sessão típica de HIIT dura entre 20 e 30 minutos. Escolha de 4 a 6 exercícios, execute cada um com máxima intensidade por 40 segundos e descanse por 20 segundos. Repita o circuito de 3 a 5 vezes.</p>
      <h3>Exercícios recomendados</h3>
      <p>Agachamento com salto, burpee, jumping jack, mountain climber, sprint na esteira e corda são excelentes opções para compor seu HIIT.</p>
      <h3>Frequência ideal</h3>
      <p>Por ser muito intenso, o HIIT deve ser realizado no máximo 3 vezes por semana, com pelo menos 48 horas de recuperação entre as sessões.</p>
    `,
    excerpt: "Descubra como o HIIT pode transformar seu condicionamento físico em apenas 20 minutos por dia.",
    type: "blog",
    status: "published",
    unidade: {
      id: 2,
      documentId: "unidade-2",
      nome: "Fitness Exclusive - Messejana",
      localizacao: "Messejana",
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
          url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
          alt: "Treino HIIT de alta intensidade",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop",
          alt: "Treino HIIT de alta intensidade",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Tudo sobre HIIT: como funciona, benefícios e como montar seu treino intervalado.",
      metaKeywords: ["hiit", "treino intervalado", "queimar gordura", "cardio"],
    },
    viewCount: 1087,
    publishedAt: new Date(2026, 2, 10).toISOString(),
    createdAt: new Date(2026, 2, 10).toISOString(),
    updatedAt: new Date(2026, 2, 10).toISOString(),
  },
  {
    id: 8,
    documentId: "post-8",
    title: "Guia Completo de Suplementação para Ganho de Massa",
    slug: "suplementacao-ganho-massa-muscular",
    content: `
      <h2>Suplementos: Aliado ou Mito?</h2>
      <p>A suplementação pode ser uma ferramenta poderosa, mas precisa ser usada com inteligência. Ninguém cresce só tomando suplemento — a base é sempre o treino e a alimentação.</p>
      <h3>Whey Protein</h3>
      <p>Rico em BCAA e de rápida absorção, é ideal para ser consumido logo após o treino. Acelera a recuperação muscular e a síntese proteica.</p>
      <h3>Creatina</h3>
      <p>Com mais de 500 estudos científicos comprovando sua eficácia, a creatina aumenta a força, a potência e o volume muscular. Tome 3-5g diariamente.</p>
      <h3>Cafeína</h3>
      <p>O pré-treino natural. A cafeína melhora o foco, a resistência e a performance. Consuma 200-400mg cerca de 30-60 minutos antes do treino.</p>
      <h3>O que NÃO existe</h3>
      <p>Nenhum suplemento substitui consistência, sono de qualidade e uma dieta bem estruturada. Consulte sempre um nutricionista esportivo.</p>
    `,
    excerpt: "Entenda quais suplementos realmente funcionam para ganho de massa muscular e como usá-los corretamente.",
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
          url: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&h=300&fit=crop",
          alt: "Suplementos fitness",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&h=600&fit=crop",
          alt: "Suplementos fitness",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Guia completo de suplementação para ganho de massa: whey, creatina, cafeína e mais.",
      metaKeywords: ["suplementação", "whey protein", "creatina", "ganho de massa"],
    },
    viewCount: 2340,
    publishedAt: new Date(2026, 2, 12).toISOString(),
    createdAt: new Date(2026, 2, 12).toISOString(),
    updatedAt: new Date(2026, 2, 12).toISOString(),
  },
  {
    id: 9,
    documentId: "post-9",
    title: "A importância do Sono para Quem Treina",
    slug: "importancia-sono-recuperacao-muscular",
    content: `
      <h2>Você não cresce na academia — você cresce enquanto dorme</h2>
      <p>É durante o sono que o hormônio do crescimento (GH) é secretado em sua maior quantidade, os músculos se reparam e o sistema nervoso central se recupera.</p>
      <h3>Quantas horas são necessárias?</h3>
      <p>Para quem pratica atividade física intensa, 7 a 9 horas de sono por noite são o ideal. Atletas de alto rendimento costumam dormir até 10 horas.</p>
      <h3>O que acontece com pouco sono</h3>
      <p>Com menos de 6 horas: queda de 11% nos níveis de testosterona, aumento do cortisol, piora da recuperação muscular, maior risco de lesões e menor performance cognitiva.</p>
      <h3>Dicas para dormir melhor</h3>
      <p>Mantenha um horário fixo; evite telas 1h antes de dormir; mantenha o quarto escuro e fresco; evite cafeína após as 16h; pratique meditação ou leitura leve antes de dormir.</p>
    `,
    excerpt: "Entenda por que o sono é tão importante quanto o treino e a alimentação para quem busca resultados.",
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
          url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&h=300&fit=crop",
          alt: "Pessoa dormindo para recuperação",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200&h=600&fit=crop",
          alt: "Pessoa dormindo para recuperação",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Saiba por que o sono é fundamental para quem pratica musculação e como melhorar sua qualidade.",
      metaKeywords: ["sono", "recuperação", "GH", "descanso", "musculação"],
    },
    viewCount: 876,
    publishedAt: new Date(2026, 2, 14).toISOString(),
    createdAt: new Date(2026, 2, 14).toISOString(),
    updatedAt: new Date(2026, 2, 14).toISOString(),
  },
  {
    id: 10,
    documentId: "post-10",
    title: "Musculação Feminina: Mitos e Verdades",
    slug: "musculacao-feminina-mitos-e-verdades",
    content: `
      <h2>Chega de mitos! A mulher e os pesos</h2>
      <p>Muitas mulheres ainda têm receio de treinar com pesos por medo de "ficar musculosa demais". Vamos desmistificar esse e outros mitos de uma vez por todas.</p>
      <h3>Mito 1: Pesos deixam a mulher masculinizada</h3>
      <p>FALSO. Mulheres produzem muito menos testosterona que homens (cerca de 10-20x menos). Isso torna biologicamente impossível desenvolver a musculatura masculina sem hormônios exógenos.</p>
      <h3>Mito 2: Musculação não queima gordura</h3>
      <p>FALSO. O treino de força aumenta a massa muscular, que eleva o metabolismo basal. Você queima mais calorias em repouso — o chamado efeito metabólico.</p>
      <h3>Benefícios reais</h3>
      <p>Aumento da densidade óssea, melhora da postura, redução dos sintomas da TPM, melhora da autoestima e corpo mais definido e firme.</p>
    `,
    excerpt: "Desmistificamos os principais mitos sobre musculação feminina e revelamos os benefícios reais para a saúde.",
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
          url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop",
          alt: "Mulher treinando com pesos",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&h=600&fit=crop",
          alt: "Mulher treinando com pesos",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Musculação feminina: descubra os reais benefícios e derrube os mitos de vez.",
      metaKeywords: ["musculação feminina", "treino", "mulher", "mitos", "saúde"],
    },
    viewCount: 3210,
    publishedAt: new Date(2026, 2, 16).toISOString(),
    createdAt: new Date(2026, 2, 16).toISOString(),
    updatedAt: new Date(2026, 2, 16).toISOString(),
  },
  {
    id: 11,
    documentId: "post-11",
    title: "Mobilidade: O Treino que Você Está Ignorando",
    slug: "mobilidade-treino-que-voce-ignora",
    content: `
      <h2>Mobilidade: a base de tudo</h2>
      <p>A maioria das pessoas ignora completamente o treino de mobilidade. Mas sem uma boa amplitude de movimento, sua performance fica comprometida e o risco de lesão aumenta drasticamente.</p>
      <h3>Mobilidade vs. Flexibilidade</h3>
      <p>Flexibilidade é a capacidade passiva de um músculo se alongar. Mobilidade é a capacidade ativa de mover uma articulação em sua amplitude máxima com controle.</p>
      <h3>Por que a mobilidade é importante?</h3>
      <p>Melhora a técnica nos exercícios, previne lesões, reduz dores crônicas (lombar, ombro, quadril) e potencializa a performance atlética geral.</p>
      <h3>Quando e como treinar mobilidade?</h3>
      <p>Idealmente todos os dias, por 10-15 minutos. Pode ser feito como aquecimento antes do treino ou como sessão dedicada separada.</p>
    `,
    excerpt: "Aprenda por que o treino de mobilidade é essencial para performance, prevenção de lesões e qualidade de vida.",
    type: "blog",
    status: "published",
    unidade: {
      id: 3,
      documentId: "unidade-3",
      nome: "Fitness Exclusive - Aldeota",
      localizacao: "Aldeota",
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
          url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop",
          alt: "Exercícios de mobilidade",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=600&fit=crop",
          alt: "Exercícios de mobilidade",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Descubra a importância da mobilidade para seu treino e aprenda exercícios essenciais.",
      metaKeywords: ["mobilidade", "flexibilidade", "prevenção de lesões", "performance"],
    },
    viewCount: 654,
    publishedAt: new Date(2026, 2, 18).toISOString(),
    createdAt: new Date(2026, 2, 18).toISOString(),
    updatedAt: new Date(2026, 2, 18).toISOString(),
  },

  {
    id: 12,
    documentId: "post-12",
    title: "Treino em Casa: Como Manter a Consistência",
    slug: "treino-em-casa-como-manter-consistencia",
    content: `
      <h2>Sem desculpa: dá para treinar em casa!</h2>
      <p>Falta de tempo, trânsito, ou simplesmente não querer sair de casa não precisa ser motivo para deixar o treino de lado. Com planejamento e estratégia, é possível ter ótimos resultados treinando em casa.</p>
      
      <h3>Equipamentos básicos que valem o investimento</h3>
      <p>Halteres ajustáveis, kettlebell, barra de pull-up para porta, ligas de resistência e um tapete de yoga são suficientes para montar um home gym funcional com investimento acessível.</p>
      
      <h3>Treino sem equipment (peso corporal)</h3>
      <p>Flexão, agachamento, afundo, prancha, burpee, pistol squat e elevação de quadril são exercícios poderosos que usam apenas o seu peso corporal. Com variações e progressão adequada, trarão excelentes resultados.</p>
      
      <h3>Como criar consistência em casa</h3>
      <p>Defina um horário fixo e trate como um compromisso. Separe um espaço dedicado ao treino. Use roupas de treino mesmo em casa — isso é um gatilho psicológico poderoso. Marque seus treinos no calendário.</p>
      
      <h3>Plataformas e apps para treinar em casa</h3>
      <p>Nike Training Club, Centr, FitOn, e YouTube são ótimas fontes de treinos gratuitos. Mas nada substitui um personal trainer qualificado para personalizar seu programa.</p>
    `,
    excerpt: "Estratégias práticas para manter a consistência nos treinos em casa e obter resultados reais sem academia.",
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
          url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=300&fit=crop",
          alt: "Treino em casa",
        },
        desktop: {
          url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&h=600&fit=crop",
          alt: "Treino em casa",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Como treinar em casa com consistência e obter resultados mesmo sem ir à academia.",
      metaKeywords: ["treino em casa", "home gym", "consistência", "exercício"],
    },
    viewCount: 1543,
    publishedAt: new Date(2026, 2, 20).toISOString(),
    createdAt: new Date(2026, 2, 20).toISOString(),
    updatedAt: new Date(2026, 2, 20).toISOString(),
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
