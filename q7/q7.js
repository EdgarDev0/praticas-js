const form = document.querySelector("#calcIMC");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let peso = Number(document.querySelector("#peso").value);
    let altura = Number(document.querySelector("#altura").value);
    
    let imc = peso / (altura ** 2);

    document.querySelector("#resultado").textContent = `Seu IMC é: ${imc.toFixed(2)}`;
});