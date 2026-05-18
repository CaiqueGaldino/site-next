import type { Metadata } from "next";
import { ProfileContactPage } from "@/components/shared/ProfileContactPage";

export const metadata: Metadata = {
  title: "Erick Coelho | Fitness Exclusive",
  description: "Apresentacao e contatos de Erick Coelho.",
};

export default function ErickCoelhoPage() {
  return (
    <ProfileContactPage
      name="Erick Coelho"
      imageSrc="/images/erick.png"
      imageAlt="Erick Coelho"
      imagePosition="center 16%"
      translations={{
        "pt-BR": {
          role: "Fitness Exclusive",
          summary:
            "Erick Coelho atua na Fitness Exclusive com foco em relacionamento, expansao e atendimento a parceiros. Entre em contato para conversar sobre oportunidades, apresentacoes comerciais e proximos passos.",
        },
        en: {
          role: "Fitness Exclusive",
          summary:
            "Erick Coelho works at Fitness Exclusive with a focus on relationships, expansion, and partner support. Get in touch to discuss opportunities, business introductions, and next steps.",
        },
      }}
      contacts={[
        {
          labelKey: "email",
          value: "erickcoelho@fitnessexclusive.com.br",
          href: "mailto:erickcoelho@fitnessexclusive.com.br",
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
          value: "erickcoelho",
          icon: "wechat",
        },
      ]}
    />
  );
}
