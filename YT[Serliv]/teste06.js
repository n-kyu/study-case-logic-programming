// - Escreva uma função que receba uma string e o número de palavras encontradas.
// Exemplo:
// quantasPalavras("ola mundo") deve retornar 2

function howManyWords(value) {
    return value.split(" ").length;
}

console.log(howManyWords("Aleister Leve o Mais Leve De Todos"));
