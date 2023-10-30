// creation of constant to make the sum
let price = 60;
let inCash = 10;
let installment = 3;
// adding the cash payment discount
// convert the percentage discount (10%) to a decimal fraction (0.1).
// multiply the decimal fraction by the original price. This represents the value of the discount itself.
// subtracts the discount amount from the original price.
totalInCash = price - (inCash / 100) * price;

// using template literals to show values
console.log(`Product Value: $${price}.00`);
console.log(`Product Value in cash: $${totalInCash}.00`);
console.log(`Or ${installment}x of: $` + (price / installment).toFixed(2));
