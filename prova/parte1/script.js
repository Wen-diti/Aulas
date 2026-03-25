Produtos = [];

const nomeProduto = document.getElementById('produtoNome');
const precoProduto = document.getElementById('produtoPreco');
const quantidadeProduto = document.getElementById('produtoQuantidade');
const buttonAdd = document.getElementById('cadastrarProduto');
const produtoMaisCaroNome = document.getElementById('produtoMaisCaroNome');
const valorTotal = document.getElementById('valorTotalEstoque');
const produtoMaiorQuantidadeNome = document.getElementById('produtoMaiorQuantidadeNome');


function produtoMaisCaro(){
    let maisCaro = Produtos[0];
    Produtos.forEach((produto) => {
        if(produto.preco > maisCaro.preco){
            maisCaro = produto;
        }
    });
    return maisCaro;
}


function produtoMaiorQuantidade(){
    let maiorQuantidade = Produtos[0];
    Produtos.forEach((produto) => {
        if(produto.quantidade > maiorQuantidade.quantidade){
            maiorQuantidade = produto;
        }
    });
    return maiorQuantidade;
}


function valorTotalEstoque(){
    let total = 0;
    Produtos.forEach((produto) => {
        total += produto.preco * produto.quantidade;
    });
    return total;
}


buttonAdd.addEventListener('click', () => {
    const produto = {
        nome: nomeProduto.value,
        preco: precoProduto.value,
        quantidade: quantidadeProduto.value,
    };

    Produtos.push(produto);
    console.log(Produtos);

    nomeProduto.value = '';
    precoProduto.value = '';
    quantidadeProduto.value = '';

    produtoMaisCaroNome.innerHTML = produtoMaisCaro().nome;
    valorTotal.innerHTML = valorTotalEstoque();
    produtoMaiorQuantidadeNome.innerHTML = produtoMaiorQuantidade().nome;   
});