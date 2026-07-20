# Dashboard Financeiro em Power BI

**Case de Business Intelligence para análise de receitas, despesas, metas, patrimônio e comparação entre valores previstos e realizados.**

Este projeto demonstra competências aplicáveis a vagas de **Analista de Dados, Analista de BI e Desenvolvedor Power BI**, com foco em modelagem, DAX, storytelling e governança de dados sensíveis.

> A publicação utiliza somente dados fictícios. Arquivos pessoais, bases reais, PBIX e planilhas originais não fazem parte do repositório.

## Problema de negócio

Informações financeiras dispersas dificultam entender o resultado do período, identificar categorias que pressionam o orçamento e acompanhar metas. O case organiza esses dados para responder:

- o mês fechou positivo ou negativo?
- quais categorias concentram as despesas?
- qual é a diferença entre previsto e realizado?
- quanto está sendo direcionado para metas e patrimônio?
- como os indicadores evoluem por mês, ano, pessoa e categoria?

## Solução

O dashboard foi estruturado como um produto analítico, combinando:

- base transacional fictícia;
- regras de classificação financeira;
- modelo de dados para Power BI;
- medidas DAX;
- comparação entre expectativa e realidade;
- camada visual customizada com HTML, CSS e JavaScript;
- documentação técnica e cuidados de privacidade.

## Competências demonstradas

- Power BI e modelagem de dados;
- Power Query e preparação de bases;
- DAX e indicadores financeiros;
- visualização e storytelling analítico;
- HTML, CSS e JavaScript no HTML Content;
- documentação de regras de negócio;
- anonimização e publicação segura.

## Arquitetura

```mermaid
flowchart LR
    A[CSV e Excel fictícios] --> B[Power Query]
    B --> C[Modelo Power BI]
    C --> D[Medidas DAX]
    D --> E[JSON para HTML Content]
    E --> F[Dashboard interativo]
```

## Conteúdo

- [análise técnica](docs/analise_tecnica.md);
- [modelo de dados](docs/modelo_de_dados.md);
- [guia de demonstração segura](docs/demo_powerbi.md);
- [dados fictícios](dados_exemplo).

## Tecnologias

`Power BI` · `Power Query` · `DAX` · `Excel` · `HTML` · `CSS` · `JavaScript` · `Modelagem de dados`

## Privacidade

Como o domínio envolve finanças pessoais, o repositório publica somente código, documentação e dados simulados. Nenhum valor, conta, instituição ou hábito financeiro real é exposto.
