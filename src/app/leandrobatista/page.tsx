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
      role="Fitness Exclusive"
      imageSrc="/images/hero section/hs-leandro.webp"
      imageAlt="Leandro Batista"
      imagePosition="center top"
      summary="Leandro Batista lidera iniciativas da Fitness Exclusive com foco em crescimento, experiencia do cliente e parcerias estrategicas. Entre em contato para apresentacoes, agenda comercial e oportunidades."
      contacts={[
        {
          label: "Email",
          value: "leandrobatista@fitnessexclusive.com.br",
          href: "mailto:leandrobatista@fitnessexclusive.com.br",
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
          value: "leandrobatista",
          icon: "wechat",
        },
      ]}
    />
  );
}
