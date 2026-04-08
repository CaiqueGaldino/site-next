/**
 * ============================================================
 * 🖊️  ARQUIVO DE GERENCIAMENTO DO BLOG
 * ============================================================
 *
 * ➕ CRIAR novo post:
 *    Adicione um novo objeto ao array `blogPosts` abaixo.
 *    Certifique-se de que o `id` seja único e sequencial,
 *    o `slug` seja único e em kebab-case (ex: "meu-novo-post"),
 *    e o `status` seja "published" para aparecer no site.
 *
 * ✏️  EDITAR um post:
 *    Encontre o objeto com o `slug` desejado e edite seus campos.
 *
 * 🗑️  EXCLUIR um post:
 *    Remova o objeto correspondente do array `blogPosts`.
 *    Atualize também `featuredPostSlug` se o post excluído
 *    estava em destaque.
 *
 * ⭐ DEFINIR o POST EM DESTAQUE:
 *    Altere o valor de `featuredPostSlug` abaixo para o `slug`
 *    do post que deseja destacar no topo do blog e na home.
 *    Use `null` para não ter nenhum post em destaque.
 *
 * ============================================================
 */

import { Post, PostListResponse } from "@/lib/types";

/**
 * ⭐ POST EM DESTAQUE
 * Defina aqui o slug do post que aparece em destaque.
 * Altere para `null` para remover o destaque.
 */
export const featuredPostSlug: string | null = "como-comecar-jornada-fitness";

// ============================================================
// 📝 LISTA DE POSTS DO BLOG
// ============================================================
export const blogPosts: Post[] = [
  // ----------------------------------------------------------
  // POST 1
  // ----------------------------------------------------------
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
      nome: "Fitness Exclusive - Crato",
      localizacao: "São Miguel, Crato - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/comecar fitness.jpg",
          alt: "Pessoa começando treino de fitness",
        },
        desktop: {
          url: "/images/blog/comecar fitness.jpg",
          alt: "Pessoa começando treino de fitness",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Guia completo para começar sua jornada de fitness com sucesso.",
      metaKeywords: ["fitness", "treino", "iniciante", "musculação"],
    },
    viewCount: 245,
    publishedAt: new Date(2026, 2, 5).toISOString(),
    createdAt: new Date(2026, 2, 5).toISOString(),
    updatedAt: new Date(2026, 2, 5).toISOString(),
  },

  // ----------------------------------------------------------
  // POST 5
  // ----------------------------------------------------------
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
      id: 2,
      documentId: "unidade-2",
      nome: "Fitness Exclusive - Premium",
      localizacao: "Lagoa Seca, Juazeiro do Norte - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/alimentos.jpg",
          alt: "Alimentos saudáveis para recuperação",
        },
        desktop: {
          url: "/images/blog/alimentos.jpg",
          alt: "Alimentos saudáveis para recuperação",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Os 10 alimentos que você deve comer após o treino para maximizar a recuperação e ganhos.",
      metaKeywords: ["nutrição", "recuperação", "alimentos", "pós-treino"],
    },
    viewCount: 678,
    publishedAt: new Date(2026, 2, 4).toISOString(),
    createdAt: new Date(2026, 2, 4).toISOString(),
    updatedAt: new Date(2026, 2, 4).toISOString(),
  },

  // ----------------------------------------------------------
  // POST 7
  // ----------------------------------------------------------
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
      id: 3,
      documentId: "unidade-3",
      nome: "Fitness Exclusive - Tiradentes",
      localizacao: "Tiradentes, Juazeiro do Norte - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/hiit.jpg",
          alt: "Treino HIIT de alta intensidade",
        },
        desktop: {
          url: "/images/blog/hiit.jpg",
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

  // ----------------------------------------------------------
  // POST 8
  // ----------------------------------------------------------
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
      id: 4,
      documentId: "unidade-4",
      nome: "Fitness Exclusive - São José",
      localizacao: "São José, Juazeiro do Norte - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/suplementacao.jpg",
          alt: "Suplementos fitness",
        },
        desktop: {
          url: "/images/blog/suplementacao.jpg",
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

  // ----------------------------------------------------------
  // POST 9
  // ----------------------------------------------------------
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
      id: 5,
      documentId: "unidade-5",
      nome: "Fitness Exclusive - Parque Ecológico",
      localizacao: "Lagoa Seca, Juazeiro do Norte - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/sono.jpg",
          alt: "Pessoa dormindo para recuperação",
        },
        desktop: {
          url: "/images/blog/sono.jpg",
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

  // ----------------------------------------------------------
  // POST 10
  // ----------------------------------------------------------
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
      id: 6,
      documentId: "unidade-6",
      nome: "Fitness Exclusive - Matriz Araripina",
      localizacao: "Centro, Araripina - PE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/musculacao feminina.jpg",
          alt: "Mulher treinando com pesos",
        },
        desktop: {
          url: "/images/blog/musculacao feminina.jpg",
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

  // ----------------------------------------------------------
  // POST 11
  // ----------------------------------------------------------
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
      id: 7,
      documentId: "unidade-7",
      nome: "Fitness Exclusive - Tianguá",
      localizacao: "Rodoviaria, Tianguá - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/mobilidade.jpg",
          alt: "Exercícios de mobilidade",
        },
        desktop: {
          url: "/images/blog/mobilidade.jpg",
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

  // ----------------------------------------------------------
  // POST 12
  // ----------------------------------------------------------
  {
    id: 12,
    documentId: "post-12",
    title: "Hidratação: O Combustível Invisível do seu Treino",
    slug: "hidratacao-combustivel-invisivel-treino",
    content: `
      <h2>A Água e Sua Performance</h2>
      <p>A hidratação é frequentemente subestimada, mas é um dos pilares mais cruciais para um bom desempenho físico e recuperação muscular. Quando você sente sede, seu corpo já está desidratado.</p>
      <h3>Por que a água é tão importante?</h3>
      <p>Nossos músculos são compostos por cerca de 75% de água. A desidratação de apenas 2% do peso corporal já pode reduzir significativamente a força e a resistência durante o exercício.</p>
      <h3>Regulando a temperatura do corpo</h3>
      <p>Durante o treino, a transpiração é o mecanismo natural do corpo para manter a temperatura estável. Repor esses líquidos perdidos é essencial para evitar fadiga precoce e cãibras.</p>
      <h3>Quanto e quando beber?</h3>
      <p>A recomendação geral é beber entre 35ml a 50ml por quilo corporal ao dia. Durante o treino, o ideal é consumir cerca de 500ml de água para cada hora de exercício, em pequenos goles frequentes.</p>
    `,
    excerpt: "Descubra como a hidratação adequada pode melhorar sua performance no treino e acelerar a recuperação muscular.",
    type: "blog",
    status: "published",
    unidade: {
      id: 1,
      documentId: "unidade-1",
      nome: "Fitness Exclusive - Crato",
      localizacao: "São Miguel, Crato - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/hidratacao.png",
          alt: "Pessoa bebendo água durante o treino",
        },
        desktop: {
          url: "/images/blog/hidratacao.png",
          alt: "Pessoa bebendo água durante o treino",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Saiba por que beber água é essencial para o treino, construção muscular e perda de peso.",
      metaKeywords: ["hidratação", "água", "performance", "recuperação", "treino"],
    },
    viewCount: 421,
    publishedAt: new Date(2026, 2, 20).toISOString(),
    createdAt: new Date(2026, 2, 20).toISOString(),
    updatedAt: new Date(2026, 2, 20).toISOString(),
  },

  // ----------------------------------------------------------
  // POST 13
  // ----------------------------------------------------------
  {
    id: 13,
    documentId: "post-13",
    title: "Fortalecimento do Core: Muito Além de um Abdômen Definido",
    slug: "fortalecimento-core-muito-alem-abdomen",
    content: `
      <h2>O Centro de Força do Seu Corpo</h2>
      <p>Quando falamos de core, muitos pensam apenas no "tanquinho". Porém, o core abrange os músculos abdominais, lombares, pélvicos e do quadril, formando um verdadeiro cinturão de sustentação para o seu corpo.</p>
      <h3>A base de todos os movimentos</h3>
      <p>Ter um core forte é fundamental para a estabilidade do tronco e da coluna vertebral. Ele age transferindo a força entre os membros inferiores e superiores de forma eficiente.</p>
      <h3>Prevenção de Lesões</h3>
      <p>Muitas dores na região lombar ou mesmo nos joelhos podem ser causadas por fraqueza no core. Uma musculatura estabilizadora forte protege a coluna de sobrecargas excessivas em exercícios agachamentos e levantamentos.</p>
      <h3>Melhores exercícios para o Core</h3>
      <p>Pranchas (frontal e lateral), elevação de pernas, dead bug, exercícios com rodinha abdominal e variações de abdominais oblíquos são excelentes opções para fortalecer a região como um todo.</p>
    `,
    excerpt: "Entenda a importância de um core forte para a sua saúde, postura e performance, além da estética.",
    type: "blog",
    status: "published",
    unidade: {
      id: 2,
      documentId: "unidade-2",
      nome: "Fitness Exclusive - Premium",
      localizacao: "Lagoa Seca, Juazeiro do Norte - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/core.png",
          alt: "Pessoa fazendo prancha para fortalecer o core",
        },
        desktop: {
          url: "/images/blog/core.png",
          alt: "Pessoa fazendo prancha para fortalecer o core",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Descubra como o fortalecimento do core melhora sua postura, previne lesões e potencializa os treinos.",
      metaKeywords: ["core", "abdômen", "prancha", "lombar", "estabilidade"],
    },
    viewCount: 512,
    publishedAt: new Date(2026, 2, 22).toISOString(),
    createdAt: new Date(2026, 2, 22).toISOString(),
    updatedAt: new Date(2026, 2, 22).toISOString(),
  },

  // ----------------------------------------------------------
  // POST 14
  // ----------------------------------------------------------
  {
    id: 14,
    documentId: "post-14",
    title: "Mente e Músculo: O Segredo da Conexão para Hipertrofia",
    slug: "mente-musculo-segredo-conexao-hipertrofia",
    content: `
      <h2>Foco total em cada repetição</h2>
      <p>Levantar peso do ponto A para o ponto B não é o suficiente para gerar os melhores resultados de hipertrofia. É preciso que exista uma forte conexão mente-músculo durante a execução.</p>
      <h3>O que é a Conexão Mente-Músculo?</h3>
      <p>É a capacidade de direcionar o seu foco consciente para o músculo específico que você está treinando, maximizando o recrutamento de fibras musculares durante a contração.</p>
      <h3>A Ciência por trás</h3>
      <p>Estudos indicam que indivíduos que se concentram mentalmente no músculo ativado podem ter um recrutamento de fibras de até 20% maior do que aqueles que apenas movem a carga de maneira automática e desatenta.</p>
      <h3>Como desenvolver essa conexão?</h3>
      <p>Comece com cargas mais leves. Feche os olhos, sinta o músculo alongando na fase excêntrica e se contraindo ao máximo na fase concêntrica. Esqueça o peso por um instante e foque inteiramente no controle do movimento.</p>
    `,
    excerpt: "Saiba por que o foco mental durante o exercício pode mudar drasticamente seus resultados de hipertrofia.",
    type: "blog",
    status: "published",
    unidade: {
      id: 3,
      documentId: "unidade-3",
      nome: "Fitness Exclusive - Tiradentes",
      localizacao: "Tiradentes, Juazeiro do Norte - CE",
    },
    author: {
      id: 1,
      documentId: "author-1",
      username: "Fitness Exclusive",
      email: "@academiafitnessexclusive",
    },
    media: {
      images: {
        mobile: {
          url: "/images/blog/conexao.png",
          alt: "Pessoa muito concentrada durante exercício com pesos",
        },
        desktop: {
          url: "/images/blog/conexao.png",
          alt: "Pessoa muito concentrada durante exercício com pesos",
        },
      },
    },
    featured: { isFeatured: false },
    seo: {
      metaDescription: "Conexão mente-músculo: entenda o que é e como aplicar para acelerar a hipertrofia e melhorar os resultados no treino.",
      metaKeywords: ["hipertrofia", "conexão mente-músculo", "foco", "musculação"],
    },
    viewCount: 389,
    publishedAt: new Date(2026, 2, 25).toISOString(),
    createdAt: new Date(2026, 2, 25).toISOString(),
    updatedAt: new Date(2026, 2, 25).toISOString(),
  },

  // ----------------------------------------------------------
  // ➕ ADICIONE NOVOS POSTS AQUI
  // ----------------------------------------------------------
];

// ============================================================
// 🛠️  FUNÇÕES AUXILIARES — não edite abaixo desta linha
// ============================================================

/** Retorna todos os posts publicados, ordenados do mais recente ao mais antigo */
export function getBlogPostsResponse(limit = 10): PostListResponse {
  const published = blogPosts.filter((p) => p.status === "published");
  const sorted = [...published].sort(
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
        total: published.length,
      },
    },
  };
}

/** Retorna um post pelo slug ou undefined se não encontrado */
export function getBlogPostBySlug(slug: string): Post | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

/** Retorna o post em destaque conforme definido em `featuredPostSlug` */
export function getFeaturedPost(): Post | undefined {
  if (!featuredPostSlug) return undefined;
  return blogPosts.find(
    (post) => post.slug === featuredPostSlug && post.status === "published"
  );
}

// Aliases para retrocompatibilidade com strapi.ts / mock-data.ts
export const mockPosts = blogPosts;
export const getMockPostsResponse = getBlogPostsResponse;
export const getMockPostBySlug = getBlogPostBySlug;
