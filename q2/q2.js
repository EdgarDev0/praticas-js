const form = document.querySelector("#calcSqr");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let val = Number(document.querySelector("#userNumber").value);

    let result = val * val;

    document.querySelector("#resultado").textContent = `O quadrado de ${val} é ${result}`;

});
