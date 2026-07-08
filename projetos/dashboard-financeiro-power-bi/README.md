# Dashboard Financeiro Pessoal em Power BI

Case de Business Intelligence desenvolvido para simular a gestao financeira pessoal com foco em receitas, despesas, metas, patrimonio, saldo e comparacao entre valores previstos e realizados.

> Este projeto usa apenas dados ficticios no repositorio. Arquivos originais com dados pessoais, como `.pbix` e `.xlsx`, ficam fora do versionamento por seguranca e privacidade.

## Por que este projeto se destaca

Este nao e apenas um dashboard visual. O projeto foi estruturado como um produto analitico completo, combinando modelagem de dados, regras de negocio, DAX, HTML, CSS, JavaScript, governanca de privacidade e storytelling para tomada de decisao.

A proposta demonstra capacidade de atuar em problemas reais de negocio: organizar dados sensiveis, transformar transacoes em indicadores, separar realizado de previsto, criar visoes executivas e construir uma experiencia interativa para acompanhamento continuo.

## Problema de negocio

Financas pessoais geralmente ficam dispersas entre planilhas, faturas, contas, investimentos e metas. Isso dificulta responder perguntas simples:

- O mes fechou positivo ou negativo?
- Quais categorias mais pressionam o orcamento?
- O realizado esta acima ou abaixo do previsto?
- Quanto esta sendo direcionado para metas e patrimonio?
- Como a visao muda por mes, ano, pessoa, tipo de custo ou categoria?

## Solucao desenvolvida

Foi criado um dashboard em Power BI com uma camada visual customizada em HTML, CSS e JavaScript via HTML Content. O relatorio organiza a leitura em abas analiticas, filtros laterais, KPIs, graficos e comparacoes entre expectativa e realidade.

Principais visoes:

- Visao geral do periodo
- Analise de despesas por categoria
- Evolucao de saldo
- Metas financeiras
- Patrimonio
- Planejamento futuro
- Previsto x realizado

## Competencias demonstradas

- Modelagem de dados para Power BI
- Definicao de regras de negocio e classificacao financeira
- Criacao de medida DAX com saida HTML/JSON
- Desenvolvimento de layout customizado com HTML, CSS e JavaScript
- Design de dashboard com abas, filtros laterais, KPIs e graficos
- Separacao entre dados reais e dados ficticios para publicacao segura
- Documentacao tecnica e dicionario de dados
- Storytelling analitico orientado a decisao

## Arquitetura da solucao

```text
Excel / CSV ficticio
        |
        v
Power Query / Modelo Power BI
        |
        v
Medidas DAX e regras de negocio
        |
        v
JSON gerado via DAX
        |
        v
HTML Content Visual
        |
        v
Interface customizada com HTML, CSS e JavaScript
```

## Estrutura no repositorio

```text
projetos/dashboard-financeiro-power-bi/
├── README.md
├── .gitignore
├── PUBLICAR_NO_GITHUB.md
├── dados_exemplo/
│   ├── fluxo_de_caixa_exemplo.csv
│   └── metas_exemplo.csv
└── docs/
    ├── modelo_de_dados.md
    ├── analise_tecnica.md
    └── demo_powerbi.md
```

## Dados

A base publica deste repositorio e 100% ficticia. Ela replica a estrutura necessaria para o dashboard funcionar, mas nao contem valores, nomes, contas, instituicoes ou habitos financeiros reais.

Arquivos locais que nao devem ser publicados:

- `FLUXO.pbix`
- `FLUXO.xlsx`
- qualquer exportacao com dados reais

## Como demonstrar o projeto

A melhor forma de destacar este projeto e publicar uma demonstracao usando somente dados ficticios. Existem tres caminhos seguros:

1. Publicar screenshots do relatorio com dados simulados.
2. Criar um arquivo `.pbit` como template sem dados reais.
3. Usar Publish to web do Power BI apenas se o relatorio estiver conectado a uma base 100% ficticia.

Veja o guia completo em [`docs/demo_powerbi.md`](docs/demo_powerbi.md).

## Como usar

1. Abra o Power BI Desktop.
2. Importe a base ficticia de `dados_exemplo/` ou substitua por uma base propria com as mesmas colunas.
3. Crie ou atualize a medida DAX/HTML do dashboard.
4. Insira o visual HTML Content no relatorio.
5. Use a medida como campo do visual.

## Proximos passos

- Publicar um template `.pbit` sem dados reais.
- Adicionar imagens do dashboard com dados ficticios.
- Criar um estudo de caso com problema, abordagem, decisao e resultado.
- Automatizar a geracao de base ficticia para testes.

## Observacao de privacidade

Este projeto trata de financas pessoais. Por isso, o repositorio foi preparado para publicar somente codigo, documentacao e dados simulados.
