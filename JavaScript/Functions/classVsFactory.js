class Person {
    constructor(name) {
        this.name = name;
    }

    say() {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Person('Pedro');
p1.say(); // My name is Pedro

const createPerson = name => {
    return {
        say: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('Pedro');
p2.say(); // My name is Pedro

// Be careful by using 'this' in browser context