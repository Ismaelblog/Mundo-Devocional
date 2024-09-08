function pesquisar() {
    // Função para realizar uma pesquisa e exibir os resultados na página.
  
    // Seleciona a seção onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa")
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada:
    if (campoPesquisa == "") {
      section.innerHTML = "Nenhum Devocional Encontrado."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    
    // Inicializa uma string vazia para armazenar os resultados formatados.
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descrição.toLowerCase()
      tags = dado.tags.toLowerCase()

      // se o titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      //cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descrição}</p>
          <a href="${dado.link}" target="_blank">Adquira o Livro</a>
        </div>
      `;

      if (!resultados) {
          resultados = "Nenhum Devocional Encontrado."
      }
    }
    // Atribui a string com os resultados ao conteúdo da seção.
    section.innerHTML = resultados;
  }
}