function somar() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var resultadoElement = document.getElementById('resultado');
    var valor1Field = document.getElementById('valor1');
    var valor2Field = document.getElementById('valor2');

    if (isNaN(valor1) || isNaN(valor2)) {
        alert("Preencha ambos os campos com números.");
        if (isNaN(valor1)) {
            valor1Field.classList.add("error");
        } else {
            valor1Field.classList.remove("error");
        }

        if (isNaN(valor2)) {
            valor2Field.classList.add("error");
        } else {
            valor2Field.classList.remove("error");
        }

        resultadoElement.innerHTML = 'Resultado:';
    } else {
        valor1Field.classList.remove("error");
        valor2Field.classList.remove("error");
        var resultado = valor1 + valor2;
        resultadoElement.innerHTML = 'Resultado: ' + resultado;
    }
}

function limpar() {
    var valor1Field = document.getElementById('valor1');
    var valor2Field = document.getElementById('valor2');
    valor1Field.value = '';
    valor2Field.value = '';
    valor1Field.classList.remove("error");
    valor2Field.classList.remove("error");
    document.getElementById('resultado').innerHTML = 'Resultado:';
}
