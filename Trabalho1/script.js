// Este código é executado quando o DOM (Documento Object Model) estiver completamente carregado.
document.addEventListener('DOMContentLoaded', function () {
    // Declaração de um array vazio para armazenar os alunos.
    const alunos = [];
  
    // Obtém referências a elementos do DOM por meio de seus IDs.
    const buscaInput = document.getElementById('busca');
    const botaoAdicionarAluno = document.getElementById('botao');
    const mensagensErroDiv = document.getElementById('mensagensErro'); // Div para mensagens de erro
  
    // Adiciona um ouvinte de evento de entrada ao campo de busca.
    if (buscaInput) {
      buscaInput.addEventListener('input', filtrarAlunos);
    }
  
    // Adiciona um ouvinte de evento de clique ao botão "Adicionar Aluno".
    if (botaoAdicionarAluno) {
      botaoAdicionarAluno.addEventListener('click', function (event) {
        event.preventDefault(); // Impede o comportamento padrão de envio de formulário.
        adicionarAluno();
      });
    }
  
    // Função para adicionar um aluno à lista de alunos.
    function adicionarAluno() {
      // Obtém referências aos campos de entrada de nome e nota do aluno.
      const nomeAlunoInput = document.getElementById('nomeAluno');
      const notaAlunoInput = document.getElementById('notaAluno');
  
      // Obtém o nome do aluno (com espaços em branco removidos) e a nota do aluno como números de ponto flutuante.
      const nomeAluno = nomeAlunoInput.value.trim(); // Remova espaços em branco com trim()
      const notaAluno = parseFloat(notaAlunoInput.value);
  
      // Valida a entrada do aluno com a função validarEntradaAluno.
      const validacao = validarEntradaAluno(nomeAluno, notaAluno);
  
      if (validacao.isValid) {
        nomeAlunoInput.style.borderColor = '';
        notaAlunoInput.style.borderColor = '';
        alunos.push({ nome: nomeAluno, nota: notaAluno }); // Adiciona o aluno ao array de alunos.
        atualizarTabela(); // Atualiza a tabela com os alunos.
        mensagensErroDiv.textContent = ''; // Limpa as mensagens de erro.
      } else {
        if (validacao.camposComErro.includes('nome')) {
          nomeAlunoInput.style.borderColor = 'red'; // Realça o campo de nome com erro.
        } else {
          nomeAlunoInput.style.borderColor = '';
        }
  
        if (validacao.camposComErro.includes('nota')) {
          notaAlunoInput.style.borderColor = 'red'; // Realça o campo de nota com erro.
        } else {
          notaAlunoInput.style.borderColor = '';
        }
  
        // Exibe mensagens de erro na div de mensagens de erro.
        mensagensErroDiv.textContent = validacao.mensagemDeErro;
      }
    }
  
    // Função para validar a entrada do aluno.
    function validarEntradaAluno(nome, nota) {
      const erros = [];
  
      if (nome === '') {
        erros.push('nome'); // Adiciona 'nome' ao array de erros se o campo de nome estiver em branco.
      }
  
      if (isNaN(nota)) {
        erros.push('nota'); // Adiciona 'nota' ao array de erros se a nota não for um número.
      }
  
      if (erros.length > 0) {
        return {
          isValid: false,
          camposComErro: erros,
          mensagemDeErro: "Nome e nota não podem ficar em branco, e a nota deve ser um número."
        };
      }
  
      return { isValid: true, camposComErro: [], mensagemDeErro: '' };
    }
  
    // Função para criar uma nova linha na tabela com informações do aluno.
    function criarLinhaTabela(aluno) {
      const novaLinha = document.createElement('tr');
      const nomeCelula = novaLinha.insertCell(0);
      const notaCelula = novaLinha.insertCell(1);
  
      nomeCelula.textContent = aluno.nome;
      notaCelula.textContent = aluno.nota.toFixed(2); // Formata a nota com duas casas decimais.
  
      return novaLinha;
    }
  
    // Função para atualizar a tabela com a lista de alunos.
    function atualizarTabela() {
      const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
      tabela.innerHTML = ''; // Limpa a tabela.
  
      alunos.forEach((aluno) => {
        const novaLinha = criarLinhaTabela(aluno);
        tabela.appendChild(novaLinha);
      });
    }
  
    // Função para filtrar alunos com base no nome.
    function filtrarAlunos() {
      const nomePesquisa = buscaInput.value.toLowerCase();
  
      // Filtra os alunos com base no nome da pesquisa.
      const alunosFiltrados = alunos.filter((aluno) =>
        aluno.nome.toLowerCase().includes(nomePesquisa)
      );
  
      atualizarTabelaComDadosFiltrados(alunosFiltrados);
    }
  
    // Função para atualizar a tabela com os alunos filtrados.
    function atualizarTabelaComDadosFiltrados(dadosFiltrados) {
      const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];
      tabela.innerHTML = ''; // Limpa a tabela.
  
      // Adiciona cada aluno filtrado à tabela.
      dadosFiltrados.reduce((html, aluno) => {
        const novaLinha = criarLinhaTabela(aluno);
        tabela.appendChild(novaLinha);
        return html;
      }, '');
    }
  });
  