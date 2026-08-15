const numeros = [];
const form = document.querySelector("#calcSomaPrimos");
const adicionar = document.querySelector("#adicionar");
const novoCalculo = document.querySelector("#novoCalculo");

adicionar.addEventListener("click", function(){
    let qtdNum = Number(document.querySelector("#qtdNum").value);
    let num = Number(document.querySelector("#num").value);

    if (numeros.length < qtdNum) {
        numeros.push(num);

        document.querySelector("#numAdicionados").textContent =`Números adicionados: ${numeros.join(", ")}`;
    } else {
        document.querySelector("#resultado").textContent = `Insira apenas a quantidade de números informada!`;
    }
});

form.addEventListener("submit", function(event){
    event.preventDefault();

    let qtdNum = Number(document.querySelector("#qtdNum").value);

    if (numeros.length < qtdNum) {
        document.querySelector("#resultado").textContent = `Você ainda precisa informar ${qtdNum - numeros.length} número(s).`;

        return;
    }

    let somaPrimos = 0;
    let primos = [];

    for (let i = 0; i < numeros.length; i++) {
        let ehPrimo = true;

        if (numeros[i] < 2) {
            ehPrimo = false;
        } else {
            for (let j = 2; j <= Math.sqrt(numeros[i]); j++) {
                if (numeros[i] % j == 0) {
                    ehPrimo = false;
                    break;
                }
            }
        }

        if (ehPrimo) {
            somaPrimos += numeros [i];

            primos.push(numeros[i]);
        }
    }

    document.querySelector("#primos").textContent = `Primos encontrados: ${primos.join(", ")}`;
    document.getElementById("resultado").textContent = `A soma dos numeros primos encontrada é: ${somaPrimos}`;
});

    novoCalculo.addEventListener("click", function(){
        form.reset();
        numeros.length = 0;

        document.querySelector("#primos").textContent = "";
        document.querySelector("#resultado").textContent = "";
        document.querySelector("#numAdicionados").textContent = "";
});