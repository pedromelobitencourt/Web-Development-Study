const [a] = [9];
console.log(a); // 9

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]; // You can jump elements
console.log(n1, n3, n5, n6); // 10, 9, undefined, 0

const [, [, nota]] = [[, 8, 8], [9, 7, 8]];
console.log(nota); // 7