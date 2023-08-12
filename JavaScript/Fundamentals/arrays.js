const values = [7.7, 8.9, 77, 98989];

console.log(values); // [ 7.7, 8.9, 77, 98989 ]
console.log(values[3]); // 98989
console.log(values[4]); // undefined

values[4] = 99;
console.log(values); // [ 7.7, 8.9, 77, 98989, 99 ]

values[9] = 767;
console.log(values); // [ 7.7, 8.9, 77, 98989, 99, <4 empty items>, 767 ]

console.log(values.length); // 10

values.push(34, {id: 3}, false, null,  'Test');
console.log(values);

console.log(values.pop()); // Test

delete values[0];
console.log(values);

console.log(typeof values); // object