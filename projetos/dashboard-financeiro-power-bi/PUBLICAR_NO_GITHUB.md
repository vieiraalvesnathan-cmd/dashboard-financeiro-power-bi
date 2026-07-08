# Como manter este projeto no GitHub

## 1. O que pode ser publicado

Arquivos seguros:

- `README.md`
- documentacao em `docs/`
- bases ficticias em `dados_exemplo/`
- codigo DAX/HTML sem dados reais

Nao publique:

- `FLUXO.pbix`
- `FLUXO.xlsx`
- bases reais
- prints que mostrem valores, nomes, contas ou informacoes pessoais

## 2. Estrutura recomendada

Este projeto foi organizado dentro de:

```text
projetos/dashboard-financeiro-power-bi/
```

Assim o repositorio pode receber outros projetos no futuro, como dashboards, automacoes, analises em Python ou projetos de carreira.

## 3. Estrategia de evolucao

1. Mantenha dados reais somente localmente.
2. Teste melhorias no Power BI local.
3. Quando uma melhoria estiver pronta, atualize a documentacao ou o arquivo de medida DAX/HTML.
4. Se precisar demonstrar dados, atualize apenas `dados_exemplo/`.
5. Faca commits pequenos com mensagens claras.

## 4. Exemplos de commits

```text
Melhora layout dos filtros laterais
Adiciona aba de metas ao dashboard
Cria dados ficticios para demonstracao
Documenta modelo de dados do projeto
```

## 5. Sugestao para LinkedIn

Desenvolvi um dashboard financeiro em Power BI com foco em analise de receitas, despesas, metas e patrimonio. O projeto combina DAX, HTML, CSS e JavaScript para criar uma experiencia mais interativa, usando dados ficticios para preservar privacidade.
