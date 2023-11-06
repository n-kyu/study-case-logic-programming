// - Escreva uma função que receba duas strings e retorne quantas vezes o segundo argumento foi encontrado no primeiro.
// quantasVezesEncontrou("ola mundo ola lindo", "ola") deve retornar 2

function howManyFind(strTarget, strSearch) {
    words = strTarget.split(" ");
    let count = 0;

    for (let index = 0; index < words.length; index++) {
        if (words[index] === strSearch) {
            count++;
        }
    }
    return count;
}
console.log(howManyFind("juca juca juca juca", "juca"));
