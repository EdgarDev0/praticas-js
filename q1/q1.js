let formulario = document.getElementById("formConversor");
let pResultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let valorReais = Number(document.getElementById("valorReais").value);
    let cotacao = Number(document.getElementById("cotacao").value);

    let resultado = valorReais / cotacao;

    pResultado.innerHTML = `Valor em dólar: US$ ${resultado.toFixed(2)}`;
});