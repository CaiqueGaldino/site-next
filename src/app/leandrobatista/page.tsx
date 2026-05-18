import type { Metadata } from "next";
import { ProfileContactPage } from "@/components/shared/ProfileContactPage";

export const metadata: Metadata = {
  title: "Leandro Batista | Fitness Exclusive",
  description: "Apresentacao e contatos de Leandro Batista.",
};

export default function LeandroBatistaPage() {
  return (
    <ProfileContactPage
      name="Leandro Batista"
      imageSrc="/images/leandro.png"
      imageAlt="Leandro Batista"
      imagePosition="center 18%"
      mobileLayout="narrow"
      translations={{
        "pt-BR": {
          role: "Fitness Exclusive",
          summary:
            "Leandro Batista lidera iniciativas da Fitness Exclusive com foco em crescimento, experiencia do cliente e parcerias estrategicas. Entre em contato para apresentacoes, agenda comercial e oportunidades.",
        },
        en: {
          role: "Fitness Exclusive",
          summary:
            "Leandro Batista leads Fitness Exclusive initiatives focused on growth, customer experience, and strategic partnerships. Get in touch for introductions, business meetings, and new opportunities.",
        },
      }}
      contacts={[
        {
          labelKey: "email",
          value: "leandrobatista@fitnessexclusive.com.br",
          href: "mailto:leandrobatista@fitnessexclusive.com.br",
          icon: "mail",
        },
        {
          labelKey: "phone",
          value: "+55 (88) 99263-7523",
          href: "tel:+5588992637523",
          icon: "phone",
        },
        {
          labelKey: "wechat",
          value: "leandrobatista",
          icon: "wechat",
        },
      ]}
    />
  );
}
