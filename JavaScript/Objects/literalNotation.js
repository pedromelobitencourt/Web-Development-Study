const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c };
// OR
const obj2 = { a, b, c }; // The same name and value


const attrName = 'Grade';
const attrValue = 8.97;

const obj3 = {};
obj3[attrName] = attrValue;
console.log(obj3); // { Grade: 8.97 }

const obj4 = {[attrName]: attrValue};
console.log(obj4); // { Grade: 8.97 }

const obj5 = {
    fun1: function() {
        // ...
    },
    fun2() {
        // ...
    }
}