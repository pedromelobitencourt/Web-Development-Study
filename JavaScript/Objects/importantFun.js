const person = {
    name: 'Rebbeca',
    age: 2,
    weight: 13
};

console.log(Object.keys(person)); // Only the keys
console.log(Object.values(person)); // Only the keys
console.log(Object.entries(person)); // An array that contains each key-value in an array

Object.entries(person).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
});

console.log();

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Having more control over an attribute (key)
Object.defineProperty(person, 'birthDate', {
    enumerable: true, // It shows on 'console.log(Object.keys(person))'
    writable: false,
    value: '01/01/2019' // Pattern
});

// Bringing together some objects (concatenate)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c:3, a: 4 };
const obj = Object.assign(dest, o1, o2); // It overwrites with the last common key. In this example, a is 4
console.log(obj); // { a: 4, b: 2, c: 3 }

Object.freeze(obj);
obj.c = 1234;
console.log(obj); // { a: 4, b: 2, c: 3 }