//-------------------------------------------------------------------------------------

// Tema: Lambda (Arrow Functions)
document.addEventListener("DOMContentLoaded", () => {
    // Definição de uma função de soma usando arrow function
    const soma = (a, b) => a + b;

    // Ação do botão no frontend
    const button = document.getElementById("myButton");
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const output = document.getElementById("output");

    // Adiciona um ouvinte de evento ao botão
    button.addEventListener("click", () => {
        // Obtendo valores dos campos de entrada
        const valorA = parseInt(inputA.value);
        const valorB = parseInt(inputB.value);

        // Chamada da expressão lambda
        const resultadoSoma = soma(valorA, valorB);

        // Exibição do resultado
        output.textContent = `Resultado da soma: ${resultadoSoma}`;
    });
});

//-------------------------------------------------------------------------------------

// Tema: Callbacks
document.addEventListener("DOMContentLoaded", () => {
    // Obtenção de elementos do DOM
    const button = document.getElementById("myButton");
    const output = document.getElementById("output");
    const inputValue = document.getElementById("inputValue");

    // Adiciona um ouvinte de evento ao botão
    button.addEventListener("click", () => {
        // Obtém o valor do campo de entrada
        const userValue = inputValue.value;

        // Chama a função assíncrona com um callback
        realizarOperacaoAssincrona(userValue, (resultado) => {
        output.textContent = `Resultado da operação: ${resultado}`;
        });
    });

    // Função simulando operação assíncrona com callback
    function realizarOperacaoAssincrona(valor, callback) {
        setTimeout(() => {
        const resultado =
            Math.random() > 0.5 ? `Sucesso com ${valor}` : `Erro com ${valor}`;
        callback(resultado);
        }, 2000);
    }
});

//-------------------------------------------------------------------------------------

// Tema: Programação Assíncrona
document.addEventListener("DOMContentLoaded", () => {
    // Obtenção de elementos do DOM
    const fetchDataButton = document.getElementById("fetchDataButton");
    const outputDiv = document.getElementById("output");

    // Adiciona um ouvinte de evento ao botão
    fetchDataButton.addEventListener("click", async () => {
        try {
        // Faz uma requisição assíncrona a uma API pública (JSONPlaceholder)
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();

        // Exibe os resultados no HTML
        outputDiv.innerHTML = `
                    <p>UserID: ${data.userId}</p>
                    <p>ID: ${data.id}</p>
                    <p>Title: ${data.title}</p>
                    <p>Completed: ${data.completed}</p>
                `;
        } catch (error) {
        console.error("Erro ao buscar dados:", error);
        outputDiv.innerHTML = "<p>Ocorreu um erro ao buscar os dados.</p>";
        }
    });
});

//-------------------------------------------------------------------------------------

// Tema: Programação Reativa
document.addEventListener("DOMContentLoaded", () => {
    // Obtenção de elementos do DOM
    const button = document.getElementById("ButtonPR");
    const output = document.getElementById("output");

    // Verifica se o botão foi encontrado
    if (button) {
        // Adiciona um ouvinte de evento de clique ao botão
        button.addEventListener("click", () => {
        output.textContent = "Clique detectado!";
        });
    } else {
        console.error(
        "Botão não encontrado. Certifique-se de que o ID do botão está correto."
        );
    }
});
//-------------------------------------------------------------------------------------
