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
      role="Fitness Exclusive"
      imageSrc="/images/hero section/pessoas.webp"
      imageAlt="Erick Coelho"
      imagePosition="72% center"
      summary="Erick Coelho atua na Fitness Exclusive com foco em relacionamento, expansao e atendimento a parceiros. Entre em contato para conversar sobre oportunidades, apresentacoes comerciais e proximos passos."
      contacts={[
        {
          label: "Email",
          value: "erickcoelho@fitnessexclusive.com.br",
          href: "mailto:erickcoelho@fitnessexclusive.com.br",
          icon: "mail",
        },
        {
          label: "Telefone",
          value: "+55 (88) 99263-7523",
          href: "tel:+5588992637523",
          icon: "phone",
        },
        {
          label: "WeChat",
          value: "erickcoelho",
          icon: "wechat",
        },
      ]}
    />
  );
}
