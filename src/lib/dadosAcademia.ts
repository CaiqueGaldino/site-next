// Dados da Academia - Corpo em Forma
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
    nome: "Mensal",
    preco: "R$ 149",
    periodo: "/mês",
    descricao: "Ideal para quem quer experimentar",
    beneficios: [
      "Acesso livre à academia",
      "Musculação completa", 
      "Aeróbicos",
      "Vestiário com armários",
      "Avaliação física inicial"
    ],
    popular: false
  },
  {
    nome: "Trimestral",
    preco: "R$ 119",
    periodo: "/mês",
    descricao: "Melhor custo-benefício",
    beneficios: [
      "Tudo do plano Mensal",
      "Aulas coletivas incluídas",
      "Cross training",
      "Treino funcional",
      "Acompanhamento nutricional",
      "2 sessões de personal trainer"
    ],
    popular: true
  },
  {
    nome: "Anual",
    preco: "R$ 89",
    periodo: "/mês",
    descricao: "Máximo resultado e economia",
    beneficios: [
      "Tudo do plano Trimestral",
      "Personal trainer ilimitado",
      "Acesso 24h",
      "Suplementação incluída",
      "Fisioterapia gratuita",
      "Convidados: 2 por mês"
    ],
    popular: false
  }
];

export const estruturas = [
  {
    titulo: "Musculação",
    descricao: "Equipamentos modernos para todos os grupos musculares",
    imagem: "/images/musculacao.jpg"
  },
  {
    titulo: "Cross Training",
    descricao: "Treinos funcionais de alta intensidade",
    imagem: "/images/cross.jpg"
  },
  {
    titulo: "Aeróbicos",
    descricao: "Esteiras, bikes e elípticos de última geração",
    imagem: "/images/aerobicos.jpg"
  },
  {
    titulo: "Funcional",
    descricao: "Espaço amplo para treinos funcionais e flexibilidade",
    imagem: "/images/funcional.jpg"
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
