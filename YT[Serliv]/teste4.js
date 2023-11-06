// Escreva uma função que receba dois números e retorne true caso o primeiro seja múltiplo do segundo

function isMultiple(n1, n2) {
    if (n1 % n2) {
        return false;
    } else {
        return true;
    }
}

console.log(isMultiple(4, 2)); // true
console.log(isMultiple(6, 2)); // true
console.log(isMultiple(11, 5)); // false
