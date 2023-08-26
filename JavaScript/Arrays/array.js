// Array is an object
console.log(typeof(Array), typeof(new Array), typeof([])); // function object object

let approved = new Array('Bia', 'Charles', 'Anna');
console.log(approved); // [ 'Bia', 'Charles', 'Anna' ]

approved = ['Bia', 'Charles', 'Anna'];
console.log(approved); // [ 'Bia', 'Charles', 'Anna' ]
console.log(approved[2]); 
console.log(approved[3]); // undefined

approved[3] = 'Peter'; // Add or replace
approved.push('Sergio');

console.log(approved); // [ 'Bia', 'Charles', 'Anna', 'Peter', 'Sergio' ]

approved[9] = 'Rafael';
console.log(approved); // [ 'Bia', 'Charles', 'Anna', 'Peter', 'Sergio', <4 empty items>, 'Rafael' ]
console.log(approved[8] === undefined); // true

approved.sort();
console.log(approved);  // [ 'Anna', 'Bia', 'Charles', 'Peter', 'Rafael', 'Sergio', <4 empty items>  ]

delete approved[1]; // It replaces the item with index 1 with undefined
console.log(approved); // [ 'Anna', undefined, 'Charles', 'Peter', 'Rafael', 'Sergio', <4 empty items>  ]

approved = ['Bia', 'Charles', 'Anna'];
// approved.splice(1, 1); // Start removing from index 1 and removes (1 - 1)

// Removing and adding
approved.splice(1, 3, `Item1`, `Item2`, `Item3`);
console.log(approved); // [ 'Bia', 'Item1', 'Item2', 'Item3' ]
console.log(approved.length); 

// If the array is constant, we can change its elements, but not its memory address