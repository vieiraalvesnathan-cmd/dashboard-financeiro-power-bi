# Análise técnica

## Abordagem

O projeto combina entendimento do problema de negócio, modelagem de dados, regras de classificação financeira, comparação entre expectativa e realidade, visualização executiva e governança de privacidade.

## Decisões de modelagem

A tabela principal foi definida em granularidade transacional: cada linha representa um lançamento com data, valor, classificação, categoria, responsável fictício e cenário analítico.

`TAG` separa:

- `EXPECTATIVA`: valor previsto;
- `REALIDADE`: valor realizado.

`CLASSIFICACAO FINANCEIRA` separa:

- `RECEITA`;
- `DESPESA`;
- `META`;
- `PATRIMONIO`.

Essa estrutura evita depender apenas do tipo original da transação e facilita novas análises.

## Indicadores

O modelo foi planejado para analisar:

- receitas e despesas previstas e realizadas;
- saldo do período;
- taxa de investimento;
- progresso de metas;
- formação patrimonial;
- variação entre previsto e realizado;
- ranking de categorias;
- evolução mensal e anual.

## Camada visual

Uma medida DAX transforma dados do modelo em JSON consumido por HTML, CSS e JavaScript no visual HTML Content. A abordagem permite construir abas, filtros, KPIs, rankings e gráficos customizados.

## Privacidade

Foram adotados:

1. `.gitignore` para bloquear arquivos sensíveis;
2. bases fictícias em `dados_exemplo`;
3. documentação do conteúdo permitido na publicação.

## Narrativa para entrevista

> Desenvolvi um dashboard financeiro em Power BI tratando o problema como um produto analítico: modelei a base transacional, defini regras de classificação financeira, criei comparações entre previsto e realizado e desenvolvi uma camada visual customizada com HTML, CSS e JavaScript. Também estruturei a publicação com dados fictícios e documentação técnica.
