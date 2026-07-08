# Modelo de Dados

## Tabela: FLUXO DE CAIXA

| Coluna | Tipo esperado | Descricao |
|---|---:|---|
| DATA | Data | Data do lancamento financeiro |
| TRANSACAO | Texto | Tipo original do lancamento: ENTRADA, SAIDA ou INVESTIMENTO |
| VALOR | Numero decimal | Valor financeiro do lancamento |
| ORIGEM | Texto | Origem do valor ou descricao resumida |
| TIPO CUSTO | Texto | Classificacao da despesa: FIXO ou VARIAVEL |
| DESTINO | Texto | Categoria do gasto, receita, meta ou patrimonio |
| CONJUGE | Texto | Pessoa, conta ou responsavel pelo lancamento |
| OBS | Texto | Observacoes opcionais |
| TAG | Texto | Cenario analitico: EXPECTATIVA ou REALIDADE |
| CLASSIFICACAO FINANCEIRA | Texto | Leitura analitica principal: RECEITA, DESPESA, META ou PATRIMONIO |
| IMPACTA SALDO | Texto | Indica se o lancamento impacta o saldo: SIM ou NAO |

## Tabela: METAS

| Coluna | Tipo esperado | Descricao |
|---|---:|---|
| Objetivo | Texto | Nome da meta financeira |
| Planejado | Numero decimal | Valor planejado para a meta |

## Regras analiticas

- `TAG = EXPECTATIVA` representa valores previstos.
- `TAG = REALIDADE` representa valores realizados.
- `CLASSIFICACAO FINANCEIRA = DESPESA` alimenta analises de gastos.
- `CLASSIFICACAO FINANCEIRA = META` alimenta progresso de metas.
- `CLASSIFICACAO FINANCEIRA = PATRIMONIO` separa formacao patrimonial de gasto comum.
- `DESTINO` deve ser igual ao nome do objetivo em `METAS[Objetivo]` para calcular progresso de metas.
