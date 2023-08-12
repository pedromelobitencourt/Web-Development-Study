console.log(); // function log of 'console' object
console.log(Math.ceil(9.8)); // 10

const object1 = {};
object1.name = 'Ball';

function Obj(name) {
    this.name = name; // 'this.name' will be public
}

const object2 = new Obj('Chair');
const object3 = new Obj('Table');

console.log(object2); // Chair
console.log(object3); // Table
