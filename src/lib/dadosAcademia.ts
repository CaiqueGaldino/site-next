import { getAssetPath } from './utils';

export const banners = [
  {
    src: getAssetPath("/images/banner1.png"),
    alt: "Equipamentos de última geração",
    titulo: "Equipamentos de Última Geração",
    subtitulo: "Tecnologia e qualidade para o seu treino"
  },
  {
    src: getAssetPath("/images/banner2.png"),
    alt: "Ambiente moderno e climatizado",
    titulo: "Ambiente Moderno e Climatizado",
    subtitulo: "Conforto e bem-estar em cada treino"
  }
];

export const estruturas = [
  {
    titulo: "Musculação",
    descricao: "Equipamentos modernos para todos os grupos musculares",
    imagem: getAssetPath("/images/musculacao.jpg"),
    destaque: true,
    video: "/videos/musculacao.mp4",
    equipamentos: ["50+ Halteres", "20 Estações", "Cabos Reguláveis"],
    horarios: "24h - Todas as unidades",
    beneficios: ["Ganho de massa", "Fortalecimento", "Definição muscular"],
    especificacoes: {
      area: "400m²",
      equipamentos: "80+ máquinas",
      capacidade: "60 pessoas"
    }
  }
];

export const depoimentos = [
  {
    nome: "Maria Silva",
    avaliacao: 5,
    comentario: "Melhor academia da região! Equipamentos novos e professores atenciosos.",
    foto: getAssetPath("/images/depoimento1.jpg")
  }
];

export const unidades = [
  {
    nome: "Crato",
    endereco: "Av. Padre Cícero, 1349, São Miguel",
    cidade: "Crato - CE",
    telefone: "(88) 99333-3152",
    horarios: "Seg–Sex 05h–22h | Sáb 08h–14h | Dom 10h–12h",
    imagem: getAssetPath("/images/banner1.png"),
    destaque: true
  }
];

export const diferenciais = [
  {
    titulo: "Planos flexíveis",
    descricao: "Descubra a liberdade de escolher o plano que combina com o seu ritmo.",
    icone: "💪"
  }
];

export const sobreNos = {
  titulo: "SOBRE NÓS",
  descricao: "Somos a Fitness Exclusive, uma academia que nasceu de um sonho.",
  missao: "Nossa missão é transformar vidas através de experiências saudáveis.",
  equipe: "Nossa equipe apaixonada pelo fitness está pronta para ajudar você."
};

export const planos = [
  {
    nome: "Anual Recorrente",
    preco: "R$ 139,90",
    periodo: "/mês",
    descricao: "Plano com renovação automática",
    beneficios: ["APP do treino", "Horário livre"],
    popular: false,
    adesao: "Zero",
    anuidade: "Zero"
  }
];
