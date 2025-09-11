// Dados da Academia - Fitness Exclusive
export const banners = [
  {
    src: "/images/banner1.png",
    alt: "Treine com os melhores equipamentos",
    titulo: "Equipamentos de Última Geração",
    subtitulo: "Tecnologia e qualidade para o seu treino"
  },
  {
    src: "/images/banner2.png",
    alt: "Ambiente moderno e climatizado",
    titulo: "Ambiente Moderno e Climatizado",
    subtitulo: "Conforto e bem-estar em cada treino"
  },
  {
    src: "/images/banner3.png",
    alt: "Profissionais qualificados para te ajudar",
    titulo: "Profissionais Qualificados",
    subtitulo: "Acompanhamento especializado para seus objetivos"
  }
];

export const planos = [
  {
    nome: "Anual Recorrente",
    preco: "R$ 139,90",
    periodo: "/mês",
    descricao: "Plano com renovação automática",
    beneficios: [
      "APP do treino",
      "Horário livre",
      "Área de musculação e aeróbicos",
      "Leve 5 amigos",
      "Massagem do fisioterapeuta",
      "Aulas coletivas e de dança",
      "Cadeira de massagem",
      "Válido por 7 dias"
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
      "APP do treino",
      "Horário livre",
      "Área de musculação e aeróbicos",
      "Leve 5 amigos",
      "Massagem do fisioterapeuta",
      "Aulas coletivas e de dança",
      "Cadeira de massagem",
      "Válido por 7 dias"
    ],
    popular: true,
    adesao: "Zero",
    anuidade: "Zero"
  },
  {
    nome: "Plano Benefício",
    preco: "R$ 9,90",
    periodo: "/mês",
    descricao: "Complemento dos planos anuais (não vendido separadamente)",
    beneficios: [
      "APP do treino",
      "Horário livre",
      "Área de musculação e aeróbicos",
      "Leve 5 amigos",
      "Massagem do fisioterapeuta",
      "Aulas coletivas e de dança",
      "Cadeira de massagem",
      "Válido por 7 dias"
    ],
    popular: false,
    adesao: "Zero",
    anuidade: "Zero",
    observacao: "Plano Benefício é um complemento dos planos Anual Recorrente e Anual Crédito. Não é vendido separadamente!"
  }
];

export const estruturas = [
  {
    titulo: "Musculação",
    descricao: "Equipamentos modernos para todos os grupos musculares",
    imagem: "/images/musculacao.jpg",
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
    imagem: "/images/cross.jpg",
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
    imagem: "/images/aerobicos.jpg",
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
    imagem: "/images/funcional.jpg",
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
    foto: "/images/depoimento1.jpg"
  },
  {
    nome: "João Santos",
    avaliacao: 5,
    comentario: "Ambiente motivador e limpo. O personal trainer me ajudou muito a alcançar meus objetivos.",
    foto: "/images/depoimento2.jpg"
  },
  {
    nome: "Ana Costa",
    avaliacao: 5,
    comentario: "Adoro as aulas de cross training! A equipe é super qualificada e sempre dispostos a ajudar.",
    foto: "/images/depoimento3.jpg"
  }
];

export const unidades = [
  {
    nome: "Crato",
    endereco: "Av. Padre Cícero, 1349, São Miguel",
    cidade: "Crato - CE",
    telefone: "(88) 99333-3152",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–14h | Dom 10h–12h",
    imagem: "/images/unidades/unidade-sao-luiz.jpg",
    destaque: true
  },
  {
    nome: "Premium",
    endereco: "Av. Leão Sampaio, 1623",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 05h–22h | Sáb/Fer 06h–12h | Dom 09h–13h",
    imagem: "/images/unidades/unidade-premium.jpg",
    destaque: true
  },
  {
    nome: "Tiradentes",
    endereco: "Av. Radialista Coelho Alves, 181",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 05h–22h | Sáb 06h–12h | Dom 09h–13h",
    imagem: "/images/unidades/unidade-tiradentes.jpg",
    destaque: false
  },
  {
    nome: "Lagoa Seca",
    endereco: "Av. Leão Sampaio, 1771A",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–16h | Dom 09h–13h",
    imagem: "/images/unidades/unidade-lagoa-seca.jpg",
    destaque: false
  },
  {
    nome: "São José",
    endereco: "Rua Zeca Esmeraldo, 100",
    cidade: "Juazeiro do Norte - CE",
    telefone: "—",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–14h | Dom 09h–13h",
    imagem: "/images/unidades/unidade-sao-jose.jpg",
    destaque: false
  },
  {
    nome: "Salesianos",
    endereco: "Rua Santa Cecília, 1162",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(89) 9906-6688",
    horarios: "Seg–Sex 05h–22h | Sáb 10h–18h | Dom 09h–13h",
    imagem: "/images/unidades/unidade-salesianos.jpg",
    destaque: false
  },
  {
    nome: "Parque Ecológico",
    endereco: "Rua Dr. Mário Malzoni, 899",
    cidade: "Juazeiro do Norte - CE",
    telefone: "(88) 99333-3152",
    horarios: "Seg–Sex 05h–22h | Sáb 10h–16h | Dom 09h–13h",
    imagem: "/images/unidades/unidade-parque-ecologico.jpg",
    destaque: false
  },
  {
    nome: "Centro",
    endereco: "Rua José Alves Batista, 222",
    cidade: "Araripina - PE",
    telefone: "(87) 99888-7766",
    horarios: "Seg–Sex 05h–22h | Sáb 06h–18h | Dom 08h–16h",
    imagem: "/images/unidades/unidade-centro.jpg",
    destaque: false
  },
  {
    nome: "Avenida",
    endereco: "Av. Florentino Alves Batista, 91",
    cidade: "Araripina - PE",
    telefone: "(87) 99777-5544",
    horarios: "Seg–Sex 06h–22h | Sáb 07h–19h | Dom 08h–17h",
    imagem: "/images/unidades/unidade-avenida.webp",
    destaque: false
  },
  {
    nome: "AABB",
    endereco: "Rua dos Atletas, 200",
    cidade: "Crato - CE",
    telefone: "(88) 99359-5368",
    horarios: "Seg–Sex 06h–22h | Sáb 08h–20h | Dom 09h–18h",
    imagem: "/images/unidades/unidade-aabb.jpg",
    destaque: false
  }
];

// Por que escolher a Fitness Exclusive
export const diferenciais = [
  {
    titulo: "Planos flexíveis",
    descricao: "Descubra a liberdade de escolher o plano que combina com o seu ritmo. Aqui, você dita o tempo!",
    icone: "💪"
  },
  {
    titulo: "Ambiente moderno",
    descricao: "Energia renovada e estrutura acolhedora para cuidar do seu corpo com conforto.",
    icone: "🏢"
  },
  {
    titulo: "Aulas diversificadas",
    descricao: "A cada aula, uma nova aventura para manter o pique alto e o tédio longe.",
    icone: "🎯"
  },
  {
    titulo: "Profissionais qualificados",
    descricao: "Especialistas dedicados para apoiar cada conquista na sua jornada fitness.",
    icone: "👥"
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

// Sobre nós
export const sobreNos = {
  titulo: "SOBRE NÓS",
  descricao: "Somos a Fitness Exclusive, uma academia que nasceu de um sonho em uma garagem e hoje marca presença em várias cidades do Nordeste.",
  missao: "Nossa missão é transformar vidas através de experiências saudáveis, oferecendo um ambiente moderno, acolhedor e equipado com tecnologia de ponta.",
  equipe: "Nossa equipe apaixonada pelo fitness está pronta para ajudar você a alcançar seus objetivos com inovação, qualidade e muita energia positiva."
};

// Informações de contato
export const contato = {
  telefone: "+55 (87) 99359-5368",
  email: "fitnessexclusive@fitnessexclusive.com.br",
  instagram: "@academiafitnessexclusive"
};
