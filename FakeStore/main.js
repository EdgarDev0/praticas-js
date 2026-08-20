/*fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => { 
    const lista = document.querySelector("#listaDeProdutos");

    data.forEach(produto => {
        const item = document.createElement("li");
        item.innerHTML = `
        <h2>ID: ${produto.id} - ${produto.title}</h2>
        <p>Preço: US$ ${produto.price}</p>
        <p>${produto.description}</p>
        <p>Categoria: ${produto.category}</p>
        <img src="${produto.image}" alt="Imagem do produto número ${produto.id}">
      `;
        lista.appendChild(item);
    });
  });*/

/*//Faz uma requisição HTTP para a URL da API e retorna uma Promise que, 
// posteriormente, será resolvida com um objeto Response;
fetch('https://fakestoreapi.com/products')
//Recebe o objeto Response retornado pelo fetch() 
// e converte o corpo da resposta de JSON para uma estrutura JavaScript.;
  .then(response => response.json())
// O resultado de response.json() é recebido pelo parâmetro data;
  .then(data => {
//lista aponta para a ul no HTML;
    const lista = document.querySelector("#listaDeProdutos");
//Percorre os indices do vetor data;
    for (let i = 0; i < data.length; i++) {
//Produto recebe o objeto que está na posição atual i do vetor data;
      const produto = data[i];
//Crio um elemento li para item;
      const item = document.createElement("li");
//Populo o elemento li inserindo HTML junto as propriedades do objeto produto;
      item.innerHTML = `
        <h2>ID: ${produto.id} - ${produto.title}</h2>
        <p>Preço: US$ ${produto.price}</p>
        <p>${produto.description}</p>
        <p>Categoria: ${produto.category}</p>
        <img src="${produto.image}" alt="Imagem do produto número ${produto.id}">
      `;
//Adiciono o item (agora populado) como filho de lista;
      lista.appendChild(item);
    }
  });*/

const botao = document.querySelector("#exibeBRL");

botao.addEventListener("click", () => {
    const precosBRL = document.querySelectorAll(".precoBRL");

    precosBRL.forEach(preco => {
        if (preco.style.display === "none") {
            preco.style.display = "block";
        } else {
            preco.style.display = "none";
        }
    });
});


fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {

    fetch('https://api.frankfurter.dev/v2/rate/USD/BRL')
      .then(response => response.json())
      .then(converte => {

        console.log(converte);

        const lista = document.querySelector("#listaDeProdutos");

        for (let i = 0; i < data.length; i++) {

          const produto = data[i];
          const item = document.createElement("li");

          const valConv = produto.price * converte.rate;

          item.innerHTML = `
            <h2>ID: ${produto.id} - ${produto.title}</h2>
            <p>Price: US$ ${produto.price}</p>

            <p class="precoBRL" style="display: none;">
                Preço: R$ ${valConv.toFixed(2)}
            </p>

            <p>${produto.description}</p>
            <p>Categoria: ${produto.category}</p>
            <img src="${produto.image}" 
                alt="Imagem do produto número ${produto.id}">
          `;

          lista.appendChild(item);
        }
      });
  });
    
  