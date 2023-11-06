//Filter
//Exemplo: pegar todos os itens maiores ou igual a 7
[6, 5, 7, 3, 9, 10]
array.filter(fn) //fn funÃ§Ã£o que filtra

//O resultado da fn serÃ¡ verdadeiro ou falso
//isso que dirÃ¡ se o item farÃ¡ parte do array resultante ou nÃ£o

//Obs: EntÃ£o nem sempre o array resultante terÃ¡ o mesmo tamanho
[7, 9, 10]

/*------------------------------------------*/
//Exemplo 1:
const compras = [
    {nome: 'Mouse', qtde: 5, preco: 10},
    {nome: 'Teclado', qtde: 0, preco: 25},
    {nome: 'Monitor', qtde: 4, preco: 500},
    {nome: 'Mesa', qtde: 8, preco: 200},
    {nome: 'Cadeira', qtde: 8, preco: 80},
]


const qtdeMaiorQueTres = item => item.qtde > 3

const itensResul = compras.filter(qtdeMaiorQueTres)
console.log(itensResul)

/*------------------------------------------*/
//Exemplo 2:
const getNome = item => item.nome

const nomeResul = compras
    .filter(qtdeMaiorQueTres) //o resultado do filter vai para o map
    .map(getNome)
console.log(nomeResul)
//se o resultado do filter for vazio o resultado serÃ¡ um array vazio, pois o map
//nÃ£o receberÃ¡ nada

/*------------------------------------------*/
//Exemplo 3:
//Criando um filter
Array.prototype.meuFilter = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){ //se a funÃ§Ã£o for verdadeira 
            //quer dizer que o elemento farÃ¡ parte do novo array
            novoArray.push(this[i])
        }
    }
    return novoArray
}

//poderia testar novamente usando o filter criado, tem que dar o mesmo resultado
const nomeResul = compras
    .meuFilter(qtdeMaiorQueTres) //o resultado do filter vai para o map
    .map(getNome)
console.log(nomeResul)