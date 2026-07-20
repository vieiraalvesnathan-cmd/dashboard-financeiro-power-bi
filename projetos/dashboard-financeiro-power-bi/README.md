# Dashboard Financeiro Pessoal em Power BI

Case de Business Intelligence desenvolvido para simular a gestão financeira pessoal com foco em receitas, despesas, metas, patrimônio, saldo e comparação entre valores previstos e realizados.

> Este projeto usa apenas dados fictícios. Arquivos originais com dados pessoais, como `.pbix` e `.xlsx`, ficam fora do versionamento por segurança e privacidade.

## Visão do case

O projeto foi tratado como um produto analítico completo, combinando modelagem de dados, regras de negócio, DAX, HTML, CSS, JavaScript, governança de privacidade e storytelling para tomada de decisão.

Finanças pessoais geralmente ficam dispersas entre planilhas, faturas, contas, investimentos e metas. Isso dificulta responder perguntas simples:

- o mês fechou positivo ou negativo?
- quais categorias mais pressionam o orçamento?
- o realizado está acima ou abaixo do previsto?
- quanto está sendo direcionado para metas e patrimônio?
- como a visão muda por mês, ano, pessoa, tipo de custo ou categoria?

## Solução desenvolvida

Foi criado um dashboard em Power BI com uma camada visual customizada via HTML Content. O relatório organiza a leitura em abas analíticas, filtros, KPIs, gráficos e comparações entre expectativa e realidade.

Principais visões:

- visão geral do período;
- análise de despesas por categoria;
- evolução de saldo;
- metas financeiras;
- patrimônio;
- planejamento futuro;
- previsto versus realizado.

## Competências demonstradas

- modelagem de dados para Power BI;
- definição de regras de negócio e classificação financeira;
- criação de medidas DAX com saída HTML/JSON;
- desenvolvimento de layout customizado com HTML, CSS e JavaScript;
- design de dashboard com abas, filtros, KPIs e gráficos;
- separação entre dados reais e fictícios para publicação segura;
- documentação técnica e dicionário de dados;
- storytelling analítico orientado à decisão.

## Arquitetura

```text
Excel / CSV fictício
        |
        v
Power Query / Modelo Power BI
        |
        v
Medidas DAX e regras de negócio
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
    ├── modelo_de_dados.md
    ├── analise_tecnica.md
    └── demo_powerbi.md
```

## Dados demonstrativos

A base pública é 100% fictícia. Ela replica a estrutura necessária para demonstrar o dashboard, mas não contém valores, nomes, contas, instituições ou hábitos financeiros reais.

Arquivos locais que não devem ser publicados:

- `FLUXO.pbix`;
- `FLUXO.xlsx`;
- qualquer exportação com dados reais.

## Como explorar

1. Consulte o [modelo de dados](docs/modelo_de_dados.md).
2. Leia a [análise técnica](docs/analise_tecnica.md).
3. Examine as bases em [`dados_exemplo`](dados_exemplo).
4. Veja o [guia de demonstração segura](docs/demo_powerbi.md).

## Próximos passos

- adicionar screenshots do relatório com dados fictícios;
- publicar um template `.pbit` revisado e sem dados reais;
- automatizar a geração da base fictícia para testes.

## Privacidade

A publicação contém somente código, documentação e dados simulados. O objetivo é demonstrar raciocínio analítico e implementação sem expor informações pessoais.
