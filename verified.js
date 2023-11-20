// Escreva uma função para retornar se um número é par ou ímpar (na sua linguagem de preferência).

function verificador(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(verificador(31)); // output = impar
console.log(verificador(2)); // output = par
console.log(verificador(99)); // output = impar
