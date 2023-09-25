let price = 60;
let inCash = 10;
let installment = 3;

totalInCash = price - (inCash / 100) * price;

console.log(`Product Value: $${price}.00`);
console.log(`Product Value in cash: $${totalInCash}.00`);
console.log(`Or ${installment}x of: $` + (price / installment).toFixed(2));
