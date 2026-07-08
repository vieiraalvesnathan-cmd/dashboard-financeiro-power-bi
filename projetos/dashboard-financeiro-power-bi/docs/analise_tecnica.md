# Analise Tecnica do Projeto

## Nivel analitico demonstrado

Este projeto demonstra uma abordagem acima de um dashboard operacional simples. Ele combina:

- entendimento de problema de negocio;
- modelagem de dados;
- regras de classificacao financeira;
- comparacao entre expectativa e realidade;
- visualizacao executiva;
- governanca de privacidade;
- camada visual customizada.

## Decisoes de modelagem

A tabela principal `FLUXO DE CAIXA` foi pensada para armazenar eventos financeiros em granularidade transacional. Cada linha representa um lancamento com data, valor, classificacao, categoria, responsavel e cenario analitico.

A coluna `TAG` separa dois cenarios importantes:

- `EXPECTATIVA`: valor previsto ou planejado;
- `REALIDADE`: valor efetivamente realizado.

A coluna `CLASSIFICACAO FINANCEIRA` permite separar a leitura de negocio:

- `RECEITA`;
- `DESPESA`;
- `META`;
- `PATRIMONIO`.

Essa separacao evita depender apenas do tipo original da transacao e torna o modelo mais flexivel para novas analises.

## Regras de negocio

O dashboard permite analisar:

- receitas realizadas e previstas;
- despesas realizadas e previstas;
- saldo do periodo;
- taxa de investimento;
- progresso de metas;
- formacao patrimonial;
- variacao entre previsto e realizado;
- ranking de categorias;
- leitura mensal e anual.

## Camada visual customizada

O projeto usa uma medida DAX que transforma os dados do modelo em uma estrutura JSON consumida por HTML, CSS e JavaScript no visual HTML Content.

Essa decisao permite criar componentes de interface mais flexiveis, como:

- abas internas;
- filtros laterais;
- cards de KPIs;
- listas ranqueadas;
- graficos em barras customizados;
- mensagens analiticas;
- layout responsivo.

## Privacidade e governanca

Como o dominio envolve financas pessoais, a publicacao foi planejada para nao expor dados reais.

Foram adotadas tres praticas:

1. Uso de `.gitignore` para bloquear arquivos sensiveis.
2. Criacao de bases ficticias em `dados_exemplo/`.
3. Documentacao clara sobre o que pode e nao pode ser publicado.

## Como apresentar em entrevista

Uma boa narrativa para entrevistas:

> Desenvolvi um dashboard financeiro em Power BI tratando o problema como um produto analitico: modelei a base transacional, defini regras de classificacao financeira, criei comparacoes entre previsto e realizado e desenvolvi uma camada visual customizada com HTML, CSS e JavaScript dentro do Power BI. Tambem estruturei o projeto para publicacao segura no GitHub, usando dados ficticios e documentacao tecnica.

## Pontos que demonstram maturidade

- Separacao entre dado real e dado demonstrativo.
- Dicionario de dados documentado.
- Regras de negocio explicitas.
- Estrutura pensada para evolucao.
- Interface orientada a usabilidade.
- Preocupacao com privacidade e exposicao publica.
