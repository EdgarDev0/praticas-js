const form = document.querySelector("#calcSal");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let valHoraAula = Number(document.querySelector("#valHoraAula").value);
    let qtdHoras = Number(document.querySelector("#qtdHoras").value);

    let salario = valHoraAula * qtdHoras;

    document.querySelector("#salario").textContent = `O salário calculado é ${salario.toFixed(2)}`;
});