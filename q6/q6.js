/* Dados da questão:
    Nota 1 * 2(peso);
    Nota 2 * 3(peso);

    NF = ((N1*2)+(N2*3))/5

    Se NF < 6.00, Reprovado;
    Se NF >= 6.00, Aprovado;
*/
const form = document.querySelector("#calcMp");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let n1 = Number(document.querySelector("#n1").value);
    let n2 = Number(document.querySelector("#n2").value);

    let notaFinal = ((n1*2) + (n2*3)) / 5

    let situacao;
    
    if (notaFinal < 6.00){
        situacao = "REPROVADO!";
    } else {
        situacao = "APROVADO!";
    }

    document.querySelector("#resultado").textContent = `Sua média final é ${notaFinal.toFixed(2)}, 
    você está ${situacao}`;
});
