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

let carrinho = [];
let taxaBRL;

const carrinhoSalvo = localStorage.getItem("carrinho");

if (carrinhoSalvo) {
  carrinho = JSON.parse(carrinhoSalvo);
}

const itensCarrinho = document.querySelector("#cart-items");

function atualizaCarrinho() {
    itensCarrinho.innerHTML = "";

    let totalUSD = 0;
    let totalBRL = 0;

    for (let i = 0; i < carrinho.length; i++) {
        const itemCarrinho = document.createElement("div");

        const precoUSD = carrinho[i].price;
        const precoBRL = precoUSD * taxaBRL;

        itemCarrinho.innerHTML = `
            <p>${carrinho[i].title}</p>
            <p>US$ ${precoUSD.toFixed(2)} ≈ R$ ${precoBRL.toFixed(2)}</p>
        `;

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";

        botaoRemover.addEventListener("click", () => {
            carrinho.splice(i, 1);
            salvaCarrinho();
            atualizaCarrinho();
        });

        itemCarrinho.appendChild(botaoRemover);
        itensCarrinho.appendChild(itemCarrinho);

        totalUSD += precoUSD;
        totalBRL += precoBRL;
    }

    document.querySelector("#cart-total").textContent =
        `US$ ${totalUSD.toFixed(2)} ≈ R$ ${totalBRL.toFixed(2)}`;
}

function salvaCarrinho() {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        fetch('https://api.frankfurter.dev/v2/rate/USD/BRL')
            .then(response => response.json())
            .then(converte => {

                taxaBRL = converte.rate;
                atualizaCarrinho();

                console.log(converte);

                const lista = document.querySelector("#product-list");

                for (let i = 0; i < data.length; i++) {

                  const produto = data[i];

                  const item = document.createElement("div");
                  item.classList.add("product-card");

                  const botaoCarrinho = document.createElement("button");
                  botaoCarrinho.classList.add("add-to-cart");
                  botaoCarrinho.textContent = "Adicionar ao carrinho";

                  botaoCarrinho.addEventListener("click", () => {
                    carrinho.push(produto);
                    salvaCarrinho();
                    atualizaCarrinho();

                    console.log(carrinho);
                  });

                  const valConv = produto.price * converte.rate;

                  item.innerHTML = `
                  <h3>ID: ${produto.id} - ${produto.title}</h3>

                  <p class="product-price">
                  US$ ${produto.price}
                  </p>

                  <p class="precoBRL" style="display: none;">
                  Preço: R$ ${valConv.toFixed(2)}
                  </p>

                  <p class="product-description">
                  ${produto.description}
                  </p>

                  <p>Categoria: ${produto.category}</p>

                  <img 
                  src="${produto.image}" 
                  alt="Imagem do produto número ${produto.id}"
                  >
                  `;

                  item.appendChild(botaoCarrinho);
                  lista.appendChild(item);
                }
            });
    });