
//Map Ã© em cima de array de elementos

//Exemplo
//[1,2,3].map(function)
//nomeArray.map(function)
//lÃ³gica Ã© transformar um array em outro array basicamente

//o resultado de um array map sempre serÃ¡ um array de mesmo tamanho 

//Exemplo 1
[3,2,4,5,6,3]
fn = array*2
resultado [6,4,8,10,12,6]
//o resultado Ã© um array mapeado


/*------------------------------------------*/

////Exemplo 2:
const nums = [1,2,3,4,5]
const dobro = n => n*2 //pq se passar sÃ³ um os outros sÃ£o ignorados
//valor, indice e o prÃ³prio array
//const dobro = (n, i, a) => n*2 + i + a.length //poderia passar mais parametros
console.log(nums.map(dobro))

//Obs: map tem um laÃ§o interno

/*------------------------------------------*/

////Exemplo 3 de nomes retornando a primeira letra de cada um
const nomes = ['JoÃ£o', 'Ana', 'Joel', 'Bruna']
const primeiraLetra = text => text[0]
console.log(nomes.map(primeiraLetra))

//exemplo do array original e o resultante
//const resultado = nomes.map(primeiraLetra)
//console.log(nomes, letras)

/*------------------------------------------*/

//Exercicio Map
const compras = [
    {nome: 'Mouse', qtde: 5, preco: 10},
    {nome: 'Teclado', qtde: 0, preco: 25},
    {nome: 'Monitor', qtde: 4, preco: 500},
    {nome: 'Mesa', qtde: 8, preco: 200},
    {nome: 'Cadeira', qtde: 8, preco: 80},
]

//1 - FaÃ§a um array que retorna sÃ³ os nome 
//2 - FaÃ§a um outro map que retorne a multiplicaÃ§Ã£o da quantidade pelo preÃ§o

//ResoluÃ§Ã£o:
const getNome = item => item.nome
console.log(compras.map(getNome)
//console.log(compras.map.getNome(value))

const getTotal = item => item.qtde * item.preco 
const totais = compras.map(getTotal)
console.log(totais)

/*------------------------------------------*/

//Vantagens programaÃ§Ã£o funcional
//quem assume as responsabilidades de algumas funcionalidades Ã© a prÃ³pria linguagem, 
//nÃ£o precisa ficar se preocupando em fazer 

//Tente implementar o seu prÃ³prio map
//Exemplo:
Array.prototype.meuMap = function(fn){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        const resultado = fn(this.length[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

//poderia testar novamente usando o map criado, tem que dar o mesmo resultado
const getNome = item => item.nome
console.log(compras.meuMap.getNome(value))

const getTotal = item => item.qtde * item.preco 
const totais = compras.meuMap(getTotal)
console.log(totais)