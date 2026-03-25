const dados = require('dados.json')

function relatorio(produtos) {  
  const valores = produtos.map((p) => p.preco * p.quantidade);
  const totalEstoque = valores.reduce((a, v) => a + v, 0);

  const eletronico = produtos.filter((p) => p.categoria.toLowerCase() === 'eletronico');
  const totalEletronico = eletronico.reduce((a, p) => a + p.preco * p.quantidade, 0);

  const maiorValor = produtos.reduce((m, p) => (p.preco * p.quantidade > m.preco * m.quantidade ? p : m), produtos[0]);
  const menorValor = produtos.reduce((m, p) => (p.preco * p.quantidade < m.preco * m.quantidade ? p : m), produtos[0]);

  console.log('Nomes:', produtos.map((p) => p.nome));
  console.log('Preço > 500:', produtos.filter((p) => p.preco > 500));
  console.log('Quant < 5:', produtos.filter((p) => p.quantidade < 5));
  console.log('Total estoque:', totalEstoque);
  console.log('Total eletronico:', totalEletronico);
  console.log('Total qtd >10:', produtos.filter((p) => p.quantidade > 10).reduce((a, p) => a + p.preco * p.quantidade, 0));
  console.log('Produto maior valor total:', maiorValor);
  console.log('Produto menor valor total:', menorValor);
  console.log('Mais caro:', produtos.reduce((m, p) => (p.preco > m.preco ? p : m), produtos[0]));
  console.log('Mais barato:', produtos.reduce((m, p) => (p.preco < m.preco ? p : m), produtos[0]));
  console.log('Maior qtd:', produtos.reduce((m, p) => (p.quantidade > m.quantidade ? p : m), produtos[0]));
  console.log('Menor qtd:', produtos.reduce((m, p) => (p.quantidade < m.quantidade ? p : m), produtos[0]));
  console.log('Média preço:', produtos.reduce((a, p) => a + p.preco, 0) / produtos.length);
  console.log('Média valor total:', totalEstoque / produtos.length);
}