        // let and cost
{
    var a = 2; // It has function scope, but not block scope
    let b = 3; // It has function scope and block scope
}

console.log(a);
// console.log(b); // Error

        // Template String
const product = "Ipad";
console.log(`${product} is expensive`);


        // Destructuring
const [l, e, ...tters] = "Coding";
console.log(l, e, tters); // C o [ 'd', 'i', 'n', 'g' ]

const [x, , y] = [1, 2, 3];
console.log(x, y); // 1 3

const { name, age: idade } = { name: 'Anna', age: 21 };
console.log(name, idade); // Anna 21