// - Escreva uma função que receba dois números e retorne o maior deles.
//   - Se forem números iguais, retorne esse numero

function numberReturn(n1, n2) {
    if (n1 >= n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(numberReturn(1, 1));
console.log(numberReturn(2, 1));
console.log(numberReturn(1, 3));
