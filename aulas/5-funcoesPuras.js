//FunÃ§Ãµes Puras
//Ã‰ bom priorizar as funÃ§Ãµes puras, porÃ©m Ã© dificil criar um programa sÃ³ com 
//funÃ§Ãµes puras

//DefiniÃ§Ãµes:
//1 - FunÃ§Ã£o pura = Valor de retorno Ã© determinado 
//apenas por seus valores de entrada, 

//2 - sem efeitos colaterais observÃ¡veis 
//(algo alterado fora da funÃ§Ã£o)

//Exemplo clÃ¡ssico:
const PI = 3.14

function areaCirc(raio){
    return raio * raio * PI
}

console.log(areaCirc(20))
console.log(areaCirc(20))

//A funÃ§Ã£o acima Ã© impura pois depende de algo de fora da funÃ§Ã£o e 
//nÃ£o apenas dos valores de entrada, ex: se mudar o valor de PI??
//Mesmo se for Math.PI


//Transformando em uma funÃ§Ã£o Pura (funÃ§Ã£o tem controle total sobre
//a resposta).
function areaCirc(raio, pi){
    return raio * raio * pi
}

console.log(areaCirc(20, 3.14))

/*------------------------------------------*/

//Exemplo 2:

function numAleatorios(min, max){
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(numAleatorios(10, 30))

//Ã‰ uma funÃ§Ã£o pura ?

//Impura pois nÃ£o depende apenas dos valores de entrada,
//tem um fator de aleatoriedade no Math.random()

/*------------------------------------------*/
//Exemplo 3
function somar(a, b){
    return a + b
}

//FunÃ§Ã£o pura facilita o desenvolvimento de testes automatizados

//Uma funÃ§Ã£o pura Sempre darÃ¡ o mesmo resultado.
console.log(somar(10, 20))
console.log(somar(10, 20))
console.log(somar(10, 20))


/*------------------------------------------*/
//Exemplo 4
let qtd = 0
function somar(a, b){
    qtd++
    return a + b
}

console.log(qtd)
console.log(somar(10, 20))
console.log(somar(10, 20))
console.log(somar(10, 20))
console.log(qtd)

//Esse exemplo alterou algo fora da funÃ§Ã£o, entÃ£o Ã© um efeito colateral observÃ¡vel