// - Escreva uma função que receba um argumento e retorne o tipo desse argumento

function argumentType(value) {
    return typeof value;
}

console.log(argumentType(1));
console.log(argumentType("words"));
console.log(argumentType(false));
console.log(argumentType(undefined));
