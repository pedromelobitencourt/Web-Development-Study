// Object.preventExtensions: You won't be allowed to add more things to the object

const product = Object.preventExtensions({
    name: 'Any', price: 1.99, tag: 'promotion'
});

console.log('Is extensible:', Object.isExtensible(product)); // false

product.name = 'Eraser';
product.desc = 'White school eraser';
delete product.tag;

// We can modify its values and delete keys, but we can't add attr
console.log(product); // { name: 'Eraser', price: 1.99 }


// Object.seal: We can modify its values, but we cannot add or delete
const person = { name: 'Julie', age: 35 };
Object.seal(person);

console.log('Is sealed:', Object.isSealed(person)); // true
person.surname = 'Boston';
delete person.name;
person.age = 29;

console.log(person); // { name: 'Julie', age: 29 }


// Object.freeze: An Object.seal and we can't modify its value

