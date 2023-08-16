// person -> 123 -> {...}
const person = { name: 'John' };
person.name = 'Pedro';
console.log(person); // { name: 'Pedro' }

// person = { name: 'Anna' }; // Trying to reference to another address, for example, 456, but it's a constant (error)

Object.freeze(person); // You can't change anything on the object
person.name = 'Anna'; // It doesn't change, because of 'freeze'
person.address = 'Street somth'; // It won't be there, because of 'freeze'

const constantPerson = Object.freeze({name: 'John'}); // Now, you can't change anything of it