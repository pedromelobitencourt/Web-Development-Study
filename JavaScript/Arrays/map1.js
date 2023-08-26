// This method return an array with the same length
// It turns the elements into something else. For instance, it doubles each element
const nums = [1, 2, 3, 4, 5];

let res = nums.map(function(e) { // It doubles each element
    return e * 2;
});

console.log(res); // [ 2, 4, 6, 8, 10 ]

const sum10 = e => e + 10;
const triple = e => e * 3;
const money = e => `$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

res = nums.map(sum10).map(triple).map(money);
console.log(res);