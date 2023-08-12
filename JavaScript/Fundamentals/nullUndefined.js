let value;
console.log(value); // undefined : The variable has not been initialized
// console.log(value2); // undefined != not defined : We haven't declared 'value2'

value = null; // value absence
console.log(value); // value

// Don't attribute 'undefined' to a variable (AVOID)

// console.log(value.toString()); // Error

const product = {};
console.log(product.price); // product.price haven't been defined

product.price = 3.77;
console.log(product);

delete product.price;

console.log(product);
product.price = null;

console.log(product); // { price: null }

const a = { object : 9 };
const b = a;

b.object = 3;

console.log(a); // 3 (Pass by referece)