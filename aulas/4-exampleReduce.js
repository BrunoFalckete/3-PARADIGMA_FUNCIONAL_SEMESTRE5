//Reduce
//Exemplo somando todos os elementos

// Reduce recebe o acumulador e valor atual, (dado inicial)
// pega o acumulador o total + o valor atual

[3, 2, 1, -3, 4, 7]

nomeArray.reduce(fn, i) //funÃ§Ã£o e dado inicial


// Ex: valor inicial 0
// acc Ã© o acumulador
// el Ã© o elemento atual
// nesse exemplo: 
// (acc, el) => acc + el 

//Passo a passo:
(0, 3) => 3 //3 Ã© o resultado
(3 , 2) => 5 //5 Ã© o resultado, o resultado anterior 

//vai para o acumulador e o prÃ³ximo item do array vai para o el
//e assim vai

// E assim vai atÃ© chegar no resultado final que nesse caso 
// serÃ¡ 14.

//Obs: EntÃ£o o reduce vai transformar o array em um nÃºmero
// diferente do map que transforma um array em outro array
// ou o filter que transforma um array em outro array tambÃ©m

/*------------------------------------------*/
//Exemplo 2:

// reduce pode transformar um array em qualquer coisa, 
// o que define Ã© a fn (funÃ§Ã£o), e o inicial poderia ser um objeto

// ex2: vou multiplicar todos os elementos
// [1, 2, 3, 4]
// fn:(acc, el) => acc * el

// nÃ£o vou passar valor inicial, vou passar 
// o primeiro elemento como acumulador (quando nÃ£o tem valor inicial)
// (1,2) => 3

// Nesse caso se o inicial fosse 0 o resultado tambÃ©m seria 0, por que Ã© uma 
//multiplicaÃ§Ã£o


/*------------------------------------------*/
//Exemplo 3:

// Exemplo Reduce
const compras = [
    {nome: 'Mouse', qtde: 5, preco: 10},
    {nome: 'Teclado', qtde: 0, preco: 25},
    {nome: 'Monitor', qtde: 4, preco: 500},
    {nome: 'Mesa', qtde: 8, preco: 200},
    {nome: 'Cadeira', qtde: 8, preco: 80},
]

//Fazer o total de cada um dos elementos e no final somar o total para comprar todos os produtos
const getTotal = item => item.qtde * item.preco

const somar = (acc, el) => acc + el

const totalGeral = compras
    .map(getTotal)
    .reduce(somar) // resultado 4.290,00 lembrando que nÃ£o Ã© obrigado passar o valor inicial
console.log(totalGeral)


//Poderia chamar separados
const totalCadaItem = compras.map(getTotal)

const total = totalCadaItem.reduce(somar) // resultado 4.290,00 lembrando que nÃ£o Ã© obrigado passar o valor inicial


/*------------------------------------------*/
//Implementado a nossa FunÃ§Ã£o reduce simples 
Array.prototype.meuReduce = function(fn, inicial){
    let acc = inicial

    for(let i = 0; i < this.length; i++ ){
        if(!acc && i === 0){ //verifica se inicial nÃ£o foi fornecido e se Ã© o primeiro elemento do array
            //pois pode nÃ£o ser informado undefinid
            acc = this[i] //caso nÃ£o for informado, atribui o primeiro item do array, inicializa ele
            continue
        }else{ //else o resultado da funÃ§Ã£o que vai atualizar o valor do acumulador 
            acc = fn(acc, this[i], i. this)
        }
    }
    return acc
}
//poderia testar novamente usando o reduce criado, tem que dar o mesmo resultado
const totalGeral2 = compras
    .map(getTotal)
    .meuReduce(somar)

console.log(totalGeral2)