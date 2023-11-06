//Functions

function bomDia(){
    console.log('Bom dia!');
}

bomDia();
/*------------------------------------------*/

const boaNoite = function ola(){
    console.log('Boa noite!')
}
boaNoite()
//ou poderia chamar:
ola()

/*------------------------------------------*/

const boaNoite = function(){
    console.log('Boa noite!')
}
boaNoite()

/*------------------------------------------*/

function somar(a, b){
//function somar(a, b = 0){
    return a + b;
}

const resul = somar1(2, 3)
//const resul = somar(2, 3, 4, 5, 6)
console.log(resul)

/*------------------------------------------*/

//passar funÃ§Ã£o como parÃ¢metro para outra funÃ§Ã£o
function minhaFuncao(funcao){
    if(typeof funcao === 'function'){
        funcao()
    }
}

minhaFuncao(2);
minhaFuncao(boaNoite);

/*------------------------------------------*/

//retornando funÃ§Ã£o de outra funÃ§Ã£o
function potencia(base, exp){
    return Math.pow(base, exp)
}
const r = potencia(2, 8)
console.log(r)


function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const r1 = potencia(2)
console.log(r1(8))

//caso queira chamar direto, tem que ser sem a vÃ­rgula
const r2 = potencia(3)(4)
console.log(r2)

/*------------------------------------------*/

//Atividade: Criem uma funÃ§Ã£o: somar (3)(4)(5)

//ResoluÃ§Ã£o
function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const somarResul = somar(3)(4)
console.log(somarResul(5))
console.log(somar(5)(10)(15))

/*------------------------------------------*/

function calcular(x){
    return function(y){
        return function(z){
            return z(x, y)
        }
    }
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

const rCalcular =calcular(10)(5)(subtrair)
console.log(rCalcular)

const rCalcular2 =calcular(10)(5)(multiplicar)
console.log(rCalcular2)

/*------------------------------------------*/

//arrow function = sem nome
//Exemplo: () => console.log('olÃ¡')

const ola = () => console.log('olÃ¡')
ola()

//mesmo sem usar o return ela Ã© retornada
//const saudacao = (nome) => 'OlÃ¡ ' + nome + ", tchau" 

//usando a crase para interpretar a string
//const saudacao = (nome) => `OlÃ¡ ${nome}, tchau`

const saudacao = nome => 'OlÃ¡ ' + nome + ", tchau"
console.log(saudacao('RogÃ©rio'))

/*------------------------------------------*/
//com o corpo sou obrigado a indicar o return
const somar = array => {
    let total = 0
    for (let n of array){
        total += n
    }

    return total
}

console.log(somar([1,2,3,4,5,6,7,8,9,10]))


/*------------------------------------------*/
//poderia ser variada
const somar = (...array) => {
    let total = 0
    for (let n of array){
        total += n
    }

    return total
}

console.log(somar([1,2,3,4,5]))
console.log(somar([1,2,3,4]))