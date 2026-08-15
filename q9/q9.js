const form = document.querySelector("#encontraImpares");
const novoCalculo = document.querySelector("#novoCalculo");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let val1 = Number(document.querySelector("#val1").value);
    let val2 = Number(document.querySelector("#val2").value);

    let inicio = Math.min(val1, val2);
    let fim = Math.max(val1, val2);

    let impares = [];

    for (let i = inicio; i <= fim; i++) {

        if (i % 2 != 0) {
            impares.push(i);
        }
    }

    document.querySelector("#resultado").textContent =
        `Números ímpares encontrados: ${impares.join(", ")}`;
});

novoCalculo.addEventListener("click", function() {
    form.reset();

    document.querySelector("#resultado").textContent = "";
});