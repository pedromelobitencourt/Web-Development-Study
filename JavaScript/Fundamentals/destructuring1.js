const person = {
    nome: 'Anna',
    age: 5,
    address: {
        logradouro: 'Rua ABC',
        number: 1789
    }
};

const { nome, age } = person; // now we have 'name' and 'var'
console.log(nome, age); // Anna, 5

const { nome: n, age: i } = person;
console.log(n, i); // Anna, 5

const { surname, goodTempered = true } = person;
console.log(surname, goodTempered); // undefined, true

const { address: { logradouro, number, cep } } = person;
console.log(logradouro, number, cep); // Rua ABC, 1789, undefined