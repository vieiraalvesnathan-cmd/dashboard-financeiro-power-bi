# Modelo de dados

## Tabela `FLUXO DE CAIXA`

| Coluna | Tipo esperado | Descrição |
|---|---|---|
| `DATA` | Data | Data do lançamento financeiro |
| `TRANSACAO` | Texto | Tipo original: entrada, saída ou investimento |
| `VALOR` | Número decimal | Valor do lançamento |
| `ORIGEM` | Texto | Origem ou descrição resumida |
| `TIPO CUSTO` | Texto | Classificação fixa ou variável |
| `DESTINO` | Texto | Categoria do gasto, receita, meta ou patrimônio |
| `CONJUGE` | Texto | Pessoa, conta ou responsável fictício |
| `OBS` | Texto | Observações opcionais |
| `TAG` | Texto | Cenário: expectativa ou realidade |
| `CLASSIFICACAO FINANCEIRA` | Texto | Receita, despesa, meta ou patrimônio |
| `IMPACTA SALDO` | Texto | Indica se o lançamento impacta o saldo |

## Tabela `METAS`

| Coluna | Tipo esperado | Descrição |
|---|---|---|
| `Objetivo` | Texto | Nome da meta financeira |
| `Planejado` | Número decimal | Valor planejado |

## Regras analíticas

- `TAG = EXPECTATIVA` representa valores previstos.
- `TAG = REALIDADE` representa valores realizados.
- `CLASSIFICACAO FINANCEIRA = DESPESA` alimenta análises de gastos.
- `CLASSIFICACAO FINANCEIRA = META` alimenta o progresso de metas.
- `CLASSIFICACAO FINANCEIRA = PATRIMONIO` separa formação patrimonial de gasto comum.
- `DESTINO` deve corresponder a `METAS[Objetivo]` para calcular o progresso.
