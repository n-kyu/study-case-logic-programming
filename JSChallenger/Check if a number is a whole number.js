// Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

function myFunction(a) {
    if (Number.isInteger(a)) {
        return true;
    }
    return false;
}

console.log(myFunction(1048));
