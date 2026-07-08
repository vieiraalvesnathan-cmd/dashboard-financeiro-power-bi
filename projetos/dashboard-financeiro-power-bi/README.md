# Dashboard Financeiro Pessoal em Power BI

Projeto de Business Intelligence para acompanhamento de financas pessoais, com foco em receitas, despesas, metas, patrimonio, saldo e comparacao entre valores previstos e realizados.

> Este projeto usa apenas dados ficticios no repositorio. Arquivos originais com dados pessoais, como `.pbix` e `.xlsx`, devem ficar fora do versionamento.

## Objetivo

Construir um dashboard financeiro interativo no Power BI, usando DAX, HTML Content, CSS e JavaScript para criar uma experiencia visual personalizada e mais flexivel que os visuais padrao.

O projeto foi pensado para responder perguntas como:

- Quanto foi realizado versus previsto no periodo?
- Quais categorias concentram mais despesas?
- Como evoluem saldo, metas e patrimonio ao longo do tempo?
- Quais filtros ajudam a analisar mes, ano, pessoa/conta, tipo de custo e categoria?

## Competencias demonstradas

- Modelagem de dados para Power BI
- Criacao de medida DAX com saida HTML
- Desenvolvimento de layout com HTML, CSS e JavaScript
- Design de dashboard com abas, filtros laterais, KPIs e graficos
- Tratamento de dados financeiros sensiveis
- Documentacao de projeto analitico para portfolio

## Estrutura

```text
projetos/dashboard-financeiro-power-bi/
├── README.md
├── .gitignore
├── PUBLICAR_NO_GITHUB.md
├── dados_exemplo/
│   ├── fluxo_de_caixa_exemplo.csv
│   └── metas_exemplo.csv
└── docs/
    └── modelo_de_dados.md
```

## Dados

A base publica deste repositorio e 100% ficticia. Ela replica a estrutura necessaria para o dashboard funcionar, mas nao contem valores, nomes, contas, instituicoes ou habitos financeiros reais.

Arquivos locais que nao devem ser publicados:

- `FLUXO.pbix`
- `FLUXO.xlsx`
- qualquer exportacao com dados reais

## Como usar

1. Abra o Power BI Desktop.
2. Importe a base ficticia de `dados_exemplo/` ou substitua por uma base propria com as mesmas colunas.
3. Crie ou atualize a medida DAX/HTML do dashboard.
4. Insira o visual HTML Content no relatorio.
5. Use a medida como campo do visual.

## Proximos passos

- Publicar um template `.pbit` sem dados reais.
- Criar capturas de tela com dados ficticios para demonstracao no README.
- Adicionar uma pagina explicando decisoes de design e storytelling analitico.
- Automatizar a geracao de base ficticia para testes.

## Observacao de privacidade

Este projeto trata de financas pessoais. Por isso, o repositorio foi preparado para publicar somente codigo, documentacao e dados simulados.
