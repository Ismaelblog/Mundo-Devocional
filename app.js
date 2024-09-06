function pesquisar() {
    // Função para realizar uma pesquisa e exibir os resultados na página.
  
    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
      // Cria uma nova div para cada resultado, formatando os dados do objeto.
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Adquira o Livro</a>
        </div>
      `;
    }
  
    // Atribui a string com os resultados ao conteúdo da seção.
    section.innerHTML = resultados;
  }