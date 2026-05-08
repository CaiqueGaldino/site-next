# Planejamento - Pagina do Investidor Imobiliario

## Objetivo

Criar a pagina `/investidor-imobiliario` para posicionar a Fitness Exclusive como uma oportunidade para investidor imobiliario: o investidor entra com o espaco/ativo, e a Fitness Exclusive opera a academia e o polo comercial associado.

## Conteudo obrigatorio

- Hero com a frase principal: "Voce investe e nos operamos".
- Texto institucional sobre a uniao entre academia de alto padrao, lojas selecionadas, fluxo comercial e receita perene.
- Beneficios comerciais:
  - 60 dias para ativacao operacional da academia.
  - Contrato minimo de 10 anos.
  - Lojas de alto retorno.
  - Renda perene por pelo menos 10 anos.
  - Alta comodidade e conveniencia.
  - Geracao de trafego intenso.
- Secao "Por que investir conosco" sem o card de gestao profissional.
- Novo card: "Investimento com seguranca e rentabilidade".
- Remocao da secao "Requisitos de Espaco".
- Formulario redirecionando para WhatsApp no numero +55 85 9164-5383.
- Imagens de unidades visiveis para dar materialidade ao investimento.

## Implementacao prevista

- Arquivo principal: `src/app/investidor-imobiliario/page.tsx`.
- Manter `src/app/investidor/page.tsx` como a pagina de investidor ja existente.
- Remover array e secao de requisitos de espaco.
- Reestruturar os arrays de beneficios/vantagens com textos atualizados.
- Manter o formulario existente, tentando preservar o envio do lead, mas garantindo o encaminhamento para o WhatsApp informado.
- Reaproveitar as imagens de `public/images/unidades` via dados existentes em `src/lib/dadosAcademia.ts`.

## Validacao

- Rodar lint ou build disponivel no projeto.
- Conferir erros de tipos/importacoes nao usadas.
- Iniciar servidor local de desenvolvimento se a validacao permitir.
