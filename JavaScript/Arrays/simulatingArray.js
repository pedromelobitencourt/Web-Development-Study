const almostArray = { 0: 'Rafael', 1: 'Peter', 2: 'Bia' };
console.log(almostArray);

Object.defineProperty(almostArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
});

console.log(almostArray[0]);

const myArray = [ 'Bia', 'Anna', 'Charles' ];
console.log(almostArray.toString(), myArray);