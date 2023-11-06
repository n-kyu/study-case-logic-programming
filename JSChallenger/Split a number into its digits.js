// Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting

function myFunction(a) {
    const arrayNumberToString = a.toString().split("");

    const arrayStringToNumber = arrayNumberToString.map((digit) => {
        return Number(digit);
    });
    return arrayStringToNumber;
}
console.log(myFunction(193278));
