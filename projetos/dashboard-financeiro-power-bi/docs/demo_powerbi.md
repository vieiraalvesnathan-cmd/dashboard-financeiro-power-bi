# Como demonstrar o Power BI com seguranca

## Recomendacao principal

Para portfolio publico, use somente dados ficticios. Nunca publique um relatorio conectado a dados pessoais, financeiros, corporativos ou confidenciais.

## Opcao 1: Screenshots no README

Melhor opcao para comecar.

Vantagens:

- segura;
- simples;
- nao exige licenca Pro;
- funciona bem para recrutadores;
- permite explicar o raciocinio do dashboard.

Como fazer:

1. Abra o relatorio com dados ficticios.
2. Tire prints das principais paginas.
3. Salve em uma pasta `assets/`.
4. Adicione as imagens ao README.

Sugestao de prints:

- Visao Geral;
- Despesas;
- Saldo;
- Metas;
- Patrimonio;
- Planejamento Futuro.

## Opcao 2: Template `.pbit`

Boa opcao para demonstrar estrutura sem publicar dados.

Segundo a documentacao da Microsoft, arquivos `.pbit` sao templates do Power BI que guardam paginas, visuais, modelo, medidas e consultas, mas nao incluem os dados carregados como um `.pbix` comum.

Cuidado: mesmo templates podem preservar alguns metadados e configuracoes. Antes de publicar, revise filtros, nomes, parametros e qualquer informacao sensivel.

Como criar:

1. Abra o relatorio no Power BI Desktop.
2. Troque a fonte para dados ficticios.
3. Revise nomes, filtros e parametros.
4. Va em `File > Export > Power BI template`.
5. Salve o arquivo `.pbit`.
6. Publique apenas se tiver certeza de que nao ha dados reais.

## Opcao 3: Publish to web

Opcao mais interativa, mas exige muito cuidado.

A documentacao da Microsoft informa que, ao usar `Publish to web`, qualquer pessoa na internet pode visualizar o relatorio sem autenticacao. A propria Microsoft alerta que isso pode incluir acesso a dados em nivel de detalhe e aos dados subjacentes do modelo.

Use esta opcao somente se:

- a base for 100% ficticia;
- nao houver dados pessoais;
- nao houver nomes reais;
- nao houver valores reais;
- voce revisou todas as paginas, tooltips, filtros e tabelas;
- voce aceita que o relatorio fique publico.

Como publicar:

1. Publique o relatorio no Power BI Service com dados ficticios.
2. Abra o relatorio publicado.
3. Use `File > Embed report > Publish to web (public)`.
4. Leia e confirme o aviso de publicacao publica.
5. Copie o link ou iframe.
6. Adicione o link ao README.

## Opcao recomendada para este projeto

Comece com:

1. screenshots com dados ficticios;
2. documentacao tecnica;
3. depois, se desejar, `.pbit` sem dados;
4. por ultimo, `Publish to web` somente com base ficticia.

Essa ordem mostra maturidade profissional: primeiro privacidade e governanca, depois interatividade.

## Como destacar no README

Use uma secao assim:

```md
## Demonstracao

A demonstracao publica utiliza dados ficticios para preservar privacidade.

- Imagens do dashboard: `assets/`
- Base demonstrativa: `dados_exemplo/`
- Modelo de dados: `docs/modelo_de_dados.md`
```

Se houver link publico do Power BI:

```md
## Demo interativa

Acesse a demonstracao publica com dados ficticios: [Power BI Demo](COLE_O_LINK_AQUI)
```
