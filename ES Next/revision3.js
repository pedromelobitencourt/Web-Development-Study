        // Object.values, Object.entries
const obj = { a:1, b:2, c:3 };
console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

const name = 'Pedro';
const person = {
    name,
    hello() {
        return 'Hello';
    }
}

console.log(person.name, person.hello());



        // Classes
class Animal {};
class Dog extends Animal {
    talk() {
        return 'hoof hoof';
    }
}

const dog = new Dog();
console.log(dog.talk());