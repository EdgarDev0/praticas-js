const CM_POR_POLEGADA = 2.54;

const form = document.querySelector("#convertPolToCm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let val = Number(document.querySelector("#pol").value);

    let result = val * CM_POR_POLEGADA;

    document.querySelector("#resultado").textContent = `${val} polegadas equivalem a ${result.toFixed(2)} centímetros.`;

});