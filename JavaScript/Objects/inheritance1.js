const ferrari = {
    model: 'F40',
    maxVel: 320
};

const volvo = {
    model: 'V40',
    maxVel: 200
};

// To get its superclass
console.log(ferrari.__proto__); 
// If you try to access an attribute that the current object doesn't have, it will
// look for it in its superclass

console.log(ferrari.__proto__ === Object.prototype); // true

console.log(Object.__proto__); // The Object doesn't have a superclass

function myFunction() {}

console.log(typeof Object, typeof myFunction); // function function
console.log(Object.prototype, ',', myFunction.__proto__); // [Object: null prototype] {}, {}

// Objects have '__proto__'
// Functions have 'prototype'
// object.prototype == undefined