import { getAssetPath } from './utils';

export const banners = [
  {
    desktop: getAssetPath("/images/banners/desktop/banner1.webp"),
    mobile: getAssetPath("/images/banners/mobile/banner1.webp"),
    alt: "Treine com os melhores equipamentos",
    titulo: "Equipamentos de Última Geração",
    subtitulo: "Tecnologia e qualidade para o seu treino"
  },
  {
    desktop: getAssetPath("/images/banners/desktop/banner2.jpg"),
    mobile: getAssetPath("/images/banners/mobile/banner2.jpg"),
    alt: "Ambiente moderno e climatizado",
    titulo: "Ambiente Moderno e Climatizado",
    subtitulo: "Conforto e bem-estar em cada treino"
  },
  {
    desktop: getAssetPath("/images/banners/desktop/banner3.webp"),
    mobile: getAssetPath("/images/banners/mobile/banner3.webp"),
    alt: "Profissionais qualificados para te ajudar",
    titulo: "Profissionais Qualificados",
    subtitulo: "Acompanhamento especializado para seus objetivos"
  }
];

export const estruturas = [
  {
    titulo: "Musculação",
    descricao: "Equipamentos modernos para todos os grupos musculares",
    desktop: getAssetPath("/images/estruturas/desktop/musculacao.webp"),
    mobile: getAssetPath("/images/estruturas/mobile/musculacao.webp"),
    destaque: true,
    video: "/videos/musculacao.mp4",
    equipamentos: ["50+ Halteres", "20 Estações", "Cabos Reguláveis", "Barras Olímpicas"],
    horarios: "24h - Todas as unidades",
    beneficios: ["Ganho de massa", "Fortalecimento", "Definição muscular"],
    especificacoes: {
      area: "400m²",
      equipamentos: "80+ máquinas",
      capacidade: "60 pessoas"
    }
  },
  {
    titulo: "Cross Training",
    descricao: "Treinos funcionais de alta intensidade",
    desktop: getAssetPath("/images/estruturas/desktop/cross.webp"),
    mobile: getAssetPath("/images/estruturas/mobile/cross.webp"),
    destaque: false,
    video: "/videos/cross.mp4",
    equipamentos: ["Kettlebells", "Medicine Balls", "TRX", "Caixas Pliométricas"],
    horarios: "5h às 23h",
    beneficios: ["Queima de gordura", "Resistência", "Agilidade"],
    especificacoes: {
      area: "200m²",
      equipamentos: "50+ acessórios",
      capacidade: "25 pessoas"
    }
  },
  {
    titulo: "Aeróbicos",
    descricao: "Esteiras, bikes e elípticos de última geração",
    desktop: getAssetPath("/images/estruturas/desktop/aerobicos.webp"),
    mobile: getAssetPath("/images/estruturas/mobile/aerobicos.webp"),
    destaque: false,
    video: "/videos/aerobicos.mp4",
    equipamentos: ["15 Esteiras", "10 Bikes", "8 Elípticos", "5 Remo"],
    horarios: "24h - Climatizado",
    beneficios: ["Condicionamento", "Queima calórica", "Saúde cardiovascular"],
    especificacoes: {
      area: "300m²",
      equipamentos: "38 máquinas",
      capacidade: "40 pessoas"
    }
  },
  {
    titulo: "Funcional",
    descricao: "Espaço amplo para treinos funcionais e flexibilidade",
    desktop: getAssetPath("/images/estruturas/desktop/funcional.webp"),
    mobile: getAssetPath("/images/estruturas/mobile/funcional.webp"),
    destaque: false,
    video: "/videos/funcional.mp4",
    equipamentos: ["Suspensão", "Elásticos", "Steps", "Bosus"],
    horarios: "6h às 22h",
    beneficios: ["Mobilidade", "Coordenação", "Prevenção de lesões"],
    especificacoes: {
      area: "250m²",
      equipamentos: "30+ acessórios",
      capacidade: "20 pessoas"
    }
  }
];

export const depoimentos = [
  {
    nome: "Maria Silva",
    avaliacao: 5,
    comentario: "Melhor academia da região! Equipamentos novos e professores atenciosos. Já perdi 15kg em 6 meses!",
    foto: getAssetPath("/images/depoimentos/depoimento1.webp")
  },
  {
    nome: "Ana Costa",
    avaliacao: 5,
    comentario: "Ambiente motivador e limpo. O personal trainer me ajudou muito a alcançar meus objetivos.",
    foto: getAssetPath("/images/depoimentos/depoimento2.webp")
  },
  {
    nome: "João Santos",
    avaliacao: 5,
    comentario: "Adoro as aulas de cross training! A equipe é super qualificada e sempre dispostos a ajudar.",
    foto: getAssetPath("/images/depoimentos/depoimento3.webp")
  }
];

export const unidades = [
  {
    nome: "Crato",
    endereco: "Av. Padre Cícero, 1349, São Miguel",
    cidade: "Crato - CE",
    telefone: "(88) 99333-3152",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–14h | Dom 10h–12h",
    desktop: getAssetPath("/images/unidades/unidade-sao-luiz.webp"),
    mobile: getAssetPath("/images/unidades/unidade-sao-luiz.webp"),
    destaque: true
  },
  {
    nome: "Premium",
    endereco: "Av. Leão Sampaio, 1623",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 05h–22h | Sáb/Fer 06h–12h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-premium.webp"),
    mobile: getAssetPath("/images/unidades/unidade-premium.webp"),
    destaque: true
  },
  {
    nome: "Tiradentes",
    endereco: "Av. Radialista Coelho Alves, 181",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 05h–22h | Sáb 06h–12h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-tiradentes.webp"),
    mobile: getAssetPath("/images/unidades/unidade-tiradentes.webp"),
    destaque: false
  },
  {
    nome: "Lagoa Seca",
    endereco: "Av. Leão Sampaio, 1771A",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–16h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-lagoa-seca.webp"),
    mobile: getAssetPath("/images/unidades/unidade-lagoa-seca.webp"),
    destaque: false
  },
  {
    nome: "São José",
    endereco: "Rua Zeca Esmeraldo, 100",
    cidade: "Juazeiro do Norte - CE",
    telefone: "—",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–14h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-sao-jose.webp"),
    mobile: getAssetPath("/images/unidades/unidade-sao-jose.webp"),
    destaque: false
  },
  {
    nome: "Salesianos",
    endereco: "Rua Santa Cecília, 1162",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(89) 9906-6688",
    horarios: "Seg–Sex 05h–22h | Sáb 10h–18h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-salesianos.webp"),
    mobile: getAssetPath("/images/unidades/unidade-salesianos.webp"),
    destaque: false
  },
  {
    nome: "Parque Ecológico",
    endereco: "Rua Dr. Mário Malzoni, 899",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99333-3152",
    horarios: "Seg–Sex 05h–22h | Sáb 10h–16h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-parque-ecologico.webp"),
    mobile: getAssetPath("/images/unidades/unidade-parque-ecologico.webp"),
    destaque: false
  },
  {
    nome: "Centro",
    endereco: "Rua José Alves Batista, 222",
    cidade: "Araripina - PE",
    telefone: "(87) 99888-7766",
    horarios: "Seg–Sex 05h–22h | Sáb 06h–18h | Dom 08h–16h",
    desktop: getAssetPath("/images/unidades/unidade-centro.webp"),
    mobile: getAssetPath("/images/unidades/unidade-centro.webp"),
    destaque: false
  },
  {
    nome: "Avenida",
    endereco: "Av. Florentino Alves Batista, 91",
    cidade: "Araripina - PE",
    telefone: "(87) 99777-5544",
    horarios: "Seg–Sex 06h–22h | Sáb 07h–19h | Dom 08h–17h",
    desktop: getAssetPath("/images/unidades/unidade-avenida.webp"),
    mobile: getAssetPath("/images/unidades/unidade-avenida.webp"),
    destaque: false
  },
  {
    nome: "AABB",
    endereco: "Rua dos Atletas, 200",
    cidade: "Crato - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 06h–22h | Sáb 08h–20h | Dom 09h–18h",
    desktop: getAssetPath("/images/unidades/unidade-aabb.webp"),
    mobile: getAssetPath("/images/unidades/unidade-aabb.webp"),
    destaque: false
  }
  ,
  {
    nome: "Aeroporto",
    endereco: "Av. do Aeroporto, 1000",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99298-4986",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–16h | Dom 09h–13h",
    desktop: getAssetPath("/images/unidades/unidade-aeroporto.webp"),
    mobile: getAssetPath("/images/unidades/unidade-aeroporto.webp"),
    destaque: false
  }
];

export const diferenciais = [
  {
    titulo: "Planos flexíveis",
    descricao: "Descubra a liberdade de escolher o plano que combina com o seu ritmo. Aqui, você dita o tempo!",
    icone: "Dumbbell"
  },
  {
    titulo: "Ambiente moderno",
    descricao: "Energia renovada e estrutura acolhedora para cuidar do seu corpo com conforto.",
    icone: "Building2"
  },
  {
    titulo: "Aulas diversificadas",
    descricao: "A cada aula, uma nova aventura para manter o pique alto e o tédio longe.",
    icone: "Target"
  },
  {
    titulo: "Profissionais qualificados",
    descricao: "Especialistas dedicados para apoiar cada conquista na sua jornada fitness.",
    icone: "Users"
  }
];

export const sobreNos = {
  titulo: "SOBRE NÓS",
  descricao: "Somos a Fitness Exclusive, uma academia que nasceu de um sonho em uma garagem e hoje marca presença em várias cidades do Nordeste.",
  missao: "Nossa missão é transformar vidas através de experiências saudáveis, oferecendo um ambiente moderno, acolhedor e equipado com tecnologia de ponta.",
  equipe: "Nossa equipe apaixonada pelo fitness está pronta para ajudar você a alcançar seus objetivos com inovação, qualidade e muita energia positiva."
};

export const planos = [
  {
    nome: "Anual Recorrente",
    preco: "R$ 139,90",
    periodo: "/mês",
    descricao: "Plano com renovação automática",
    beneficios: [
      "App de treino",
      "Horário livre",
      "Área de musculação e aeróbicos",
      "Avaliação física",
      "Treino personalizado",
      "Acompanhamento profissional"
    ],
    popular: false,
    adesao: "Zero",
    anuidade: "Zero"
  },
  {
    nome: "Anual Crédito",
    preco: "R$ 119,90",
    periodo: "/mês",
    descricao: "Plano anual pago à vista",
    beneficios: [
      "App de treino",
      "Horário livre",
      "Leve até 5 amigos",
      "Área de musculação e aeróbicos",
      "Avaliação física",
      "Treino personalizado",
      "Acompanhamento profissional"
    ],
    popular: true,
    adesao: "Zero",
    anuidade: "Zero"
  },
  {
    nome: "Plano Mensal",
    preco: "R$ 195,90",
    periodo: "/mês",
    descricao: "Plano mensal com todos os benefícios",
    beneficios: [
      "App de treino",
      "Horário livre",
      "Área de musculação e aeróbicos",
      "Avaliação física",
      "Treino personalizado",
      "Acompanhamento profissional"
    ],
    popular: false,
    adesao: "Zero",
    anuidade: "Zero"
  }
];

// Benefícios exclusivos
export const beneficiosExclusivos = [
  {
    titulo: "App Fitness Exclusive",
    descricao: "Gerencie seus treinos e pagamentos de forma fácil e rápida.",
    icone: "📱"
  },
  {
    titulo: "Campanha Portabilidade Ativa",
    descricao: "Garanta o valor da sua academia anterior por 3 meses.",
    icone: "🔄"
  },
  {
    titulo: "Massagem e relaxamento",
    descricao: "Massagem do fisioterapeuta e cadeira de massagem disponíveis para recuperação e relaxamento.",
    icone: "💆"
  },
  {
    titulo: "Aulas coletivas",
    descricao: "Acesso às aulas coletivas e de dança para diversificar o treino.",
    icone: "🎵"
  }
];

// Informações de contato
export const contato = {
  telefone: "+55 (88) 99298-4986",
  email: "fitnessexclusive@fitnessexclusive.com.br",
  instagram: "@academiafitnessexclusive"
};
