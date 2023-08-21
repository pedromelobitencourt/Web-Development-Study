function myObject() {}
console.log(myObject.prototype); // {}

const obj1 = new myObject; // Its prototype is myObject
const obj2 = new myObject;

console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(obj1.__proto__ === myObject.prototype); // true

myObject.prototype.name = 'Name';
myObject.prototype.say = 
    console.log(`Good morning, my name is ${this.name}`);

console.log(obj1.say); // Good morning, my name is Name

obj2.name = 'Raphael';
console.log(obj2.say()); // Good morning, my name is Raphael

const obj3 = {};
obj3.__proto__ = myObject.prototype;


console.log(myObject.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null
