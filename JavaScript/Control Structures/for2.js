const grades = [8.7, 7.4, 9.8, 9.3, 8.1, 7,77, 9.9];

for(index in grades) { // You get the index
    console.log(index, grades[index]);
}


const person = {
    nome: "Ana",
    surname: 'Sousa',
    age: 29,
    weight: 67
};

for(let attribute in person) { // Put 'let' to not have the access to the variable 'attribute' out of the scope
    console.log(`${attribute} = ${person[attribute]}`);
}