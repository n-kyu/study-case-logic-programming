// - Escreva uma função que receba uma string e retorne a maior palavra encontrada.
// Exemplo:
// maiorPalavra("ola mundo") deve retornar "mundo"
// - se houver duas ou mais maiores palavras encontradas, retorne a primeira
// Exemplo
// maiorPalavra("ola mundo lindo") deve retornar "mundo"

function findTheLongestWord(string) {
    // separa a string em um array de palavras separadas por "(espaço)"
    let stringSplit = string.split(" ");
    // Ordena as palavras de acordo com a quantidade de caracteres
    let longestWord = stringSplit.sort(function (a, b) {
        return b.length - a.length;
    });
    // retorna a palavra do indice 0 (maior palavra)
    return longestWord;
}

console.log(findTheLongestWord("Levi Ruff Aleister abcdefgh palavrass"));
