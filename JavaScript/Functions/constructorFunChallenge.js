function Person(name) {
    this.name = name;

    this.say = function() {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Person('Pedro');
p1.say(); // My name is Pedro