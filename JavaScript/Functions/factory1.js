const prod1 = {
    nome: '...',
    price: 45
};

const prod2 = { // Repeating...
    nome: '...',
    price: 1234
};

function createPerson() { // Factory Function returns a object
    this.age = 1;

    return {
        nome: 'Ana',
        surname: 'Silva',
        age: this.age++
    }
}

console.log(createPerson());
console.log(createPerson());
