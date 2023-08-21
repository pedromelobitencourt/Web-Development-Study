const parent = { name: 'Peter', hairColor: 'Black' };

const daughter1 = Object.create(parent);
daughter1.name = 'Ana';

console.log(daughter1.hairColor);

const daughter2 = Object.create(parent, {
    name: { value: 'Bia', writable: false, enumerable: true }
});

console.log(daughter2.name); // Bia
daughter2.name = 'New name';
console.log(`${daughter2.name}'s hair color is ${daughter2.hairColor}`); // Bia's hair color is Black

console.log(Object.keys(daughter1)); // [ 'name' ]
console.log(Object.keys(daughter2)); // [ 'name' ]

console.log();

for(let key in daughter2) {
    // name, hairColor
    daughter2.hasOwnProperty(key) ?
        console.log(key) : console.log(`By inheritance: ${key}`);
}
