// Guia de API: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {
import wixData from 'wix-data';

$w.onReady(async function () {
  const COLECAO_TITULOS = 'TitulosDaPagina';
  const COLECAO_BLOCOS = 'BlocosDosGTSs';

  configurarRepeaterGT();

  await carregarTextosDaPagina(COLECAO_TITULOS);
  await carregarBlocosDosGTs(COLECAO_BLOCOS);
});

function configurarRepeaterGT() {
  $w('#repeaterGT').onItemReady(($item, itemData) => {
    preencherRichContent($item, '#nomeGT', itemData.nomeGt);
    preencherRichContent($item, '#descricaoGT', itemData.descricao);

    preencherDocumento($item, '#botaoDocumento', itemData.documento);

    // Mantém o vector visível quando houver título.
    // Como o vector não vem do CMS, ele funciona como elemento visual fixo do card.
    if (itemData.nomeGt) {
      mostrarElemento($item, '#vectorgt');
    } else {
      esconderElemento($item, '#vectorgt');
    }
  });
}

async function carregarTextosDaPagina(nomeColecao) {
  try {
    const resultado = await wixData
      .query(nomeColecao)
      .limit(1)
      .find();

    if (!resultado.items.length) {
      console.warn('Nenhum conteúdo encontrado na coleção Títulos da Página.');
      return;
    }

    const item = resultado.items[0];

    preencherPaginaTexto('#titulopg', item.tituloDaPagina);
    preencherPaginaRichContent('#descricaopg', item.descricao);
    preencherPaginaTexto('#titulogt', item.tituloDoGrupo);

  } catch (erro) {
    console.error('Erro ao carregar os textos da página:', erro);
  }
}

async function carregarBlocosDosGTs(nomeColecao) {
  try {
    const resultado = await wixData
      .query(nomeColecao)
      .eq('ativo', true)
      .ascending('ordem')
      .find();

    const itens = resultado.items;

    if (!itens.length) {
      console.warn('Nenhum GT ativo encontrado na coleção Blocos dos GTSs.');
      $w('#repeaterGT').collapse();
      return;
    }

    const dadosFormatados = itens.map((item) => {
      return {
        _id: item._id,
        nomeGt: item.nomeGt,
        descricao: item.descricao,
        ordem: item.ordem,
        ativo: item.ativo,
        documento: item.documento
      };
    });

    $w('#repeaterGT').data = dadosFormatados;
    $w('#repeaterGT').expand();

  } catch (erro) {
    console.error('Erro ao carregar os blocos dos GTs:', erro);
  }
}

function preencherPaginaTexto(idElemento, valor) {
  try {
    if (valor) {
      $w(idElemento).text = valor;
      $w(idElemento).expand();
    } else {
      $w(idElemento).collapse();
    }
  } catch (erro) {
    console.warn(`Elemento de página não encontrado ou incompatível: ${idElemento}`);
  }
}

function preencherPaginaRichContent(idElemento, valor) {
  try {
    if (valor) {
      // Use .html se o elemento for texto/HTML.
      // Se o elemento for Rich Content nativo, talvez precise usar .content.
      if ('html' in $w(idElemento)) {
        $w(idElemento).html = valor;
      } else if ('content' in $w(idElemento)) {
        $w(idElemento).content = valor;
      } else {
        $w(idElemento).text = String(valor);
      }

      $w(idElemento).expand();
    } else {
      $w(idElemento).collapse();
    }
  } catch (erro) {
    console.warn(`Elemento de página não encontrado ou incompatível: ${idElemento}`);
  }
}

function preencherRichContent($item, idElemento, valor) {
  try {
    if (valor) {
      const elemento = $item(idElemento);

      // Para caixa de texto com HTML
      if ('html' in elemento) {
        elemento.html = valor;
      }
      // Para elemento Rich Content
      else if ('content' in elemento) {
        elemento.content = valor;
      }
      // Plano B: transforma em texto
      else if ('text' in elemento) {
        elemento.text = String(valor);
      }

      elemento.expand();
    } else {
      $item(idElemento).collapse();
    }
  } catch (erro) {
    console.warn(`Elemento do repetidor não encontrado ou incompatível: ${idElemento}`);
  }
}

function preencherDocumento($item, idElemento, documentos) {
  try {
    const botao = $item(idElemento);

    if (documentos && documentos.length > 0) {
      const primeiroDocumento = documentos[0];

      botao.label = documentos.length > 1 ? 'Ver documentos' : 'Ver documento';

      // Dependendo do tipo retornado pelo Wix, o link pode vir em url, fileUrl ou documentUrl.
      botao.link =
        primeiroDocumento.url ||
        primeiroDocumento.fileUrl ||
        primeiroDocumento.documentUrl ||
        primeiroDocumento.src ||
        '';

      if (botao.link) {
        botao.target = '_blank';
        botao.expand();
      } else {
        botao.collapse();
      }

    } else {
      botao.collapse();
    }
  } catch (erro) {
    console.warn(`Botão de documento não encontrado ou incompatível: ${idElemento}`);
  }
}

function mostrarElemento($item, idElemento) {
  try {
    $item(idElemento).expand();
  } catch (erro) {
    console.warn(`Elemento não encontrado: ${idElemento}`);
  }
}

function esconderElemento($item, idElemento) {
  try {
    $item(idElemento).collapse();
  } catch (erro) {
    console.warn(`Elemento não encontrado: ${idElemento}`);
  }
}
	// Eimport wixData from 'wix-data';

$w.onReady(async function () {
  const resultado = await wixData.query('BlocosDosGTSs').find();

  console.log('Dados encontrados:', resultado.items);

  $w('#repeaterGT').onItemReady(($item, itemData) => {
    $item('#nomeGT').text = itemData.nomeGt || 'Sem nome';
    $item('#descricaoGT').html = itemData.descricao || '';
  });

  $w('#repeaterGT').data = resultado.items;
})

	// Exiba hello world:
	// console.log("Hello world!");

	// Chame funções em elementos da página, por exemplo:
	// $w("#button1").label = "Clique aqui!";

	// Clique em "Executar" ou visualize seu site para executar seu código

});