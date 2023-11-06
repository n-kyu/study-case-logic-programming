// - Escreva uma função que receba duas strings e retorne um boolean se a segunda string for encontrada na primeira.
// encontrouString("ola mundo", "ola") deve retornar true
// encontrouString("ola mundo", "lindo") deve retornar false

function compareTheStrings(string, compare) {
    words = string.split(" ");

    for (let index = 0; index < words.length; index++) {
        if (words[index] == compare) {
            return true;
        }
        return false;
    }
}

console.log(compareTheStrings("Juca pereira", "Juca"));
console.log(compareTheStrings("Juca santos", "pereira"));
