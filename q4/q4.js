const PI = 3.1415;

const form = document.querySelector("#calcPerimetro");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let raio = Number(document.querySelector("#raio").value);

    let perimetro = 2 * PI * raio;

    document.querySelector("#perimetro").textContent = `O perímetro do círculo é ${perimetro.toFixed(2)}`;

});