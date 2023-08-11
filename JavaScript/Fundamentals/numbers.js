const weight1 = 1.8;
const weight2 = Number('2.0');

console.log(weight1, weight2);
console.log(Number.isInteger(weight1)); // false
console.log(Number.isInteger(weight2)); // true: '.000...'

const valuation1 = 9.871;
const valuation2 = 6.871;

const total = valuation1 * weight1 + valuation2 * weight2;
const average = total / (weight1 + weight2);

console.log(average.toFixed(2)); // It fixes how many decimal places will be there

console.log(average.toString());
console.log(average.toString(2)); // It returns a BINARY representation of 'average'
console.log(typeof Number); // function ('N'); Number != number

const radius = 5.6;
const area = Math.PI * Math.pow(radius, 2);
console.log(typeof Math); // object