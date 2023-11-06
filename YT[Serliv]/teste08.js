// - Escreva uma função que receba uma string e retorne a maior palavra encontrada.
// - Se houver duas ou mais maiores palavras encontradas, retorne a ultima
// Exemplo
// maiorPalavra("ola mundo lindo") deve retornar "lindo"

function findTheLongestWord(string) {
    const words = string.split(" ");
    let longestWord = words[0];
    console.log(words);
    for (let index = 0; index < words.length; index++) {
        if (words[index].length >= longestWord.length) {
            longestWord = words[index];
        }
    }

    return longestWord;
}

console.log(
    findTheLongestWord(
        "jupiter netuno saturno terra marte sol plutao venus putao"
    )
);
