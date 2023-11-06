// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function myFunction(a) {
    return Number(a.toFixed(2));
}
// set Number() to convert the string to a Number

console.log(myFunction(26.1379));
