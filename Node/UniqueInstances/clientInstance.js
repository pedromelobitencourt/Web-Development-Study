const countA = require('./uniqueInstance');
const countB = require('./uniqueInstance'); // It's like it is a unique instance

const countC = require('./newInstance')();
const countD = require('./newInstance')();

countA.inc();
countA.inc();

console.log(countA.value); // 3
console.log(countB.value); // 3; It's like it is passing by reference (It's the same address)
console.log();

countC.inc();
countC.inc();

console.log(countC.value); // 3
console.log(countD.value); // 1